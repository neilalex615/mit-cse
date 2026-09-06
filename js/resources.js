// js/resources.js
(function () {
  const sidebarNav = document.getElementById("sidebarNav");
  const sidebarEl   = document.getElementById("resourcesSidebar");
  const toggleBtn   = document.getElementById("sidebarToggle");
  const subtabsEl   = document.getElementById("resourceSubtabs");
  const gridEl      = document.getElementById("resourceGrid");

  let currentSubject = null;
  let currentTab = "study";

  // ---- Google Drive link helpers ----
  function driveFileId(link) {
    if (!link) return null;
    const m1 = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (m1) return m1[1];
    const m2 = link.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    return m2 ? m2[1] : null;
  }

  function drivePreviewUrl(link) {
    const id = driveFileId(link);
    return id ? "https://drive.google.com/file/d/" + id + "/preview" : "#";
  }

function driveViewUrl(link) {
  const id = driveFileId(link);
  return id ? "https://drive.google.com/file/d/" + id + "/view" : "#";
}

  function driveDownloadUrl(link) {
    const id = driveFileId(link);
    return id ? "https://drive.google.com/uc?export=download&id=" + id : "#";
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
    currentTab = "study";
    document.querySelectorAll(".sidebar-item").forEach((b) => {
      b.classList.toggle("active", b.dataset.subject === key);
    });
    renderSubtabs();
    renderGrid();

    // On mobile, close the full-screen sidebar automatically once a subject is picked
    if (window.matchMedia("(max-width: 760px)").matches) {
      sidebarEl.classList.add("collapsed");
    }
  }

  function renderSubtabs() {
    const subj = RESOURCES[currentSubject];

    if (subj.isSkills) {
      subtabsEl.hidden = true;
      subtabsEl.innerHTML = "";
      return;
    }

    subtabsEl.hidden = false;
    let html =
      '<button class="subtab" data-tab="study">Study Materials</button>' +
      '<button class="subtab" data-tab="pyqs">PYQs</button>';
    if (subj.hasCourses) {
      html += '<button class="subtab" data-tab="courses">Courses</button>';
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
      items = subj.items || [];
      items.forEach((item) => {
        gridEl.appendChild(item.driveLink ? buildPdfCard(item) : buildCourseCard(item));
      });
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
    const card = document.createElement("a");
    card.className = "resource-card course-card";
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener";
    card.innerHTML =
      '<div class="resource-main-item">' +
        '<span class="resource-icon">YT</span>' +
        '<span class="resource-title">' + item.title + "</span>" +
      "</div>" +
      '<span class="resource-external">&#8599;</span>';
    return card;
  }

  toggleBtn.addEventListener("click", () => {
    sidebarEl.classList.toggle("collapsed");
  });

  renderSidebar();
  selectSubject(Object.keys(RESOURCES)[0]);
})();