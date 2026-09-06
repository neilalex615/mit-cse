// js/resources.js
(function () {
  const sidebarNav = document.getElementById("sidebarNav");
  const sidebarEl   = document.getElementById("resourcesSidebar");
  const toggleBtn   = document.getElementById("sidebarToggle");
  const subtabsEl   = document.getElementById("resourceSubtabs");
  const gridEl      = document.getElementById("resourceGrid");

  let currentSubject = null;
  let currentTab = "study";

  const ICON_COPY = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
  const ICON_CHECK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';

  // ---- Google Drive link helpers ----
  function driveFileId(link) {
    if (!link) return null;
    const m1 = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (m1) return m1[1];
    const m2 = link.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    return m2 ? m2[1] : null;
  }

  function driveViewUrl(link) {
    const id = driveFileId(link);
    return id ? "https://drive.google.com/file/d/" + id + "/view" : "#";
  }

  function driveDownloadUrl(link) {
    const id = driveFileId(link);
    return id ? "https://drive.google.com/uc?export=download&id=" + id : "#";
  }

  // ---- Clipboard helper ----
  function copyToClipboard(text, btn) {
    const done = () => {
      const original = btn.innerHTML;
      btn.innerHTML = ICON_CHECK;
      btn.classList.add("copied");
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove("copied");
      }, 1200);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand("copy"); done(); } catch (e) {}
    document.body.removeChild(ta);
  }

  // ---- Sidebar ----
  function renderSidebar() {
    sidebarNav.innerHTML = "";
    Object.keys(RESOURCES).forEach((key) => {
      const subj = RESOURCES[key];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sidebar-item";
      btn.dataset.subject = key;
      btn.textContent = subj.name;
      btn.addEventListener("click", () => selectSubject(key));
      sidebarNav.appendChild(btn);
    });
  }

  function selectSubject(key) {
    currentSubject = key;
    const subj = RESOURCES[key];
    currentTab = subj.isSkills ? "problems" : "study";

    document.querySelectorAll(".sidebar-item").forEach((b) => {
      b.classList.toggle("active", b.dataset.subject === key);
    });
    renderSubtabs();
    renderGrid();

    if (window.matchMedia("(max-width: 760px)").matches) {
      sidebarEl.classList.add("collapsed");
    }
  }

  function renderSubtabs() {
    const subj = RESOURCES[currentSubject];
    subtabsEl.hidden = false;

    let html;
    if (subj.isSkills) {
      html =
        '<button class="subtab" data-tab="problems">Problems</button>' +
        '<button class="subtab" data-tab="practice">Practice</button>';
    } else {
      html =
        '<button class="subtab" data-tab="study">Study Materials</button>' +
        '<button class="subtab" data-tab="pyqs">PYQs</button>';
      if (subj.hasCourses) {
        html += '<button class="subtab" data-tab="courses">Courses</button>';
      }
    }
    subtabsEl.innerHTML = html;

    subtabsEl.querySelectorAll(".subtab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === currentTab);
      btn.addEventListener("click", () => {
        currentTab = btn.dataset.tab;
        subtabsEl.querySelectorAll(".subtab").forEach((b) => b.classList.toggle("active", b === btn));
        renderGrid();
      });
    });
  }

  // ---- Grid / cards ----
  function renderGrid() {
    const subj = RESOURCES[currentSubject];
    gridEl.innerHTML = "";
    let items = [];

    if (subj.isSkills) {
      if (currentTab === "problems") {
        items = subj.problems || [];
        items.forEach((item, idx) => gridEl.appendChild(buildProblemCard(item, idx)));
      } else {
        items = subj.practice || [];
        items.forEach((item) => gridEl.appendChild(buildCourseCard(item)));
      }
    } else if (currentTab === "courses") {
      items = subj.courses || [];
      items.forEach((item) => gridEl.appendChild(buildCourseCard(item)));
    } else {
      items = subj[currentTab] || [];
      items.forEach((item) => gridEl.appendChild(buildPdfCard(item)));
    }

    if (!items.length) {
      gridEl.innerHTML = '<p class="resource-empty">Nothing added here yet.</p>';
    }
  }

  function buildPdfCard(item) {
    const previewUrl = driveViewUrl(item.driveLink);
    const downloadUrl = driveDownloadUrl(item.driveLink);

    const card = document.createElement("div");
    card.className = "resource-card";
    card.innerHTML =
      '<div class="resource-main-item">' +
        '<span class="resource-icon">PDF</span>' +
        '<span class="resource-title">' + item.title + "</span>" +
      "</div>" +
      '<a class="resource-download" href="' + downloadUrl + '" target="_blank" rel="noopener" title="Download">&#8681;</a>';

    card.querySelector(".resource-main-item").addEventListener("click", () => {
      window.open(previewUrl, "_blank", "noopener");
    });
    return card;
  }

  function buildCourseCard(item) {
    const isTool = item.type === "tool";
    const card = document.createElement("a");
    card.className = "resource-card course-card" + (isTool ? " tool-card" : "");
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener";
    card.innerHTML =
      '<div class="resource-main-item">' +
        '<span class="resource-icon">' + (isTool ? "URL" : "YT") + '</span>' +
        '<span class="resource-title">' + item.title + "</span>" +
      "</div>" +
      '<span class="resource-external">&#8599;</span>';
    return card;
  }

function buildProblemCard(item, idx) {
  const diffLabel = item.difficulty === "easy" ? "EASY" : item.difficulty === "med" ? "MED" : "HARD";

  const card = document.createElement("div");
  card.className = "resource-card problem-card";
  card.innerHTML =
    '<div class="resource-main-item">' +
      '<span class="resource-icon diff-' + item.difficulty + '">' + diffLabel + '</span>' +
      '<span class="resource-title">' + item.title + "</span>" +
    "</div>" +
    '<button class="resource-copy" type="button" title="Copy prompt">' + ICON_COPY + "</button>";

  card.querySelector(".resource-main-item").addEventListener("click", () => {
    window.open(item.url, "_blank", "noopener");
  });

  card.querySelector(".resource-copy").addEventListener("click", (e) => {
    e.stopPropagation();
    const text = idx === 0
      ? PROBLEM_INTRO_PROMPT
      : PROBLEM_PROMPT_TEMPLATE.replace("[Problem Name]", item.title);
    copyToClipboard(text, e.currentTarget);
  });

  return card;
}

  toggleBtn.addEventListener("click", () => {
    sidebarEl.classList.toggle("collapsed");
  });

  renderSidebar();
  selectSubject(Object.keys(RESOURCES)[0]);
})();