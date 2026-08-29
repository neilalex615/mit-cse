(function () {
  const state = { tier: null, mode: null, subject: null };
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let subjectsInitialized = false;
  const enterBtn = document.getElementById("enterBtn");
  const landing = document.getElementById("landing");
  const mainPage = document.getElementById("mainPage");
  const canvas = document.getElementById("matrixCanvas");

  const gpaTrack = document.getElementById("gpaTrack");
  const trackFill = document.getElementById("trackFill");
  const dragHitarea = document.getElementById("dragHitarea");
  const gpaHandle = document.getElementById("gpaHandle");
  const gpaHint = document.getElementById("gpaHint");

  const modeSection = document.getElementById("modeSection");
  const subjectsSection = document.getElementById("subjectsSection");
  const tabsEl = document.getElementById("tabs");
  const panelEl = document.getElementById("panel");

  const GRADE_FOR_TIER = { "8": "A", "8.5": "A+", "9": "A+", "9.5": "O" };

  enterBtn.addEventListener("click", () => {
    canvas.classList.add("visible");
    if (window.MatrixEffect) window.MatrixEffect.start();

    const revealDelay = prefersReduced ? 150 : 1000;

    setTimeout(() => {
      
      landing.style.display = "none";
      landing.hidden = true;

      
      mainPage.style.display = "block"; 
      mainPage.hidden = false;
      requestAnimationFrame(() => mainPage.classList.add("visible"));
      
      
      canvas.classList.remove("visible");

      setTimeout(() => {
        if (window.MatrixEffect) window.MatrixEffect.stop();
        
        canvas.style.display = "none";
      }, prefersReduced ? 100 : 700);
      
    }, revealDelay);
  });
  

  function tierIndex(tier) {
    return TIER_ORDER.indexOf(tier);
  }

  function tierPercent(tier) {
    return (tierIndex(tier) / (TIER_ORDER.length - 1)) * 100;
  }

  function selectTier(tier) {
    state.tier = tier;

    document.querySelectorAll(".gpa-point").forEach((p) => {
      p.classList.toggle("active", p.dataset.tier === tier);
    });

    const pct = tierPercent(tier);
    trackFill.style.width = pct + "%";
    gpaHandle.style.left = pct + "%";
    gpaHandle.classList.add("visible");
    gpaHint.textContent = "Target GPA: " + TIER_LABELS[tier];

    if (modeSection.hidden) {
      modeSection.hidden = false;
      requestAnimationFrame(() => modeSection.classList.add("visible"));
    }

    if (state.mode) renderPanel();
  }
  
  document.querySelectorAll(".gpa-point").forEach((btn) => {
    btn.addEventListener("click", () => selectTier(btn.dataset.tier));
  });

  let dragging = false;

  function posToTier(clientX) {
    const rect = gpaTrack.getBoundingClientRect();
    let pct = (clientX - rect.left) / rect.width;
    pct = Math.max(0, Math.min(1, pct));
    const idx = Math.round(pct * (TIER_ORDER.length - 1));
    return TIER_ORDER[idx];
  }

  function startDrag(clientX) {
    dragging = true;
    selectTier(posToTier(clientX));
  }

  dragHitarea.addEventListener("pointerdown", (e) => {
    startDrag(e.clientX);
    e.preventDefault();
  });
  dragHitarea.addEventListener("touchstart", (e) => {
    startDrag(e.touches[0].clientX);
  }, { passive: true });

  function onPointerMove(e) {
    if (!dragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    selectTier(posToTier(clientX));
  }
  function onPointerUp() {
    dragging = false;
  }

  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("pointerup", onPointerUp);
  window.addEventListener("touchend", onPointerUp);

  document.querySelectorAll(".mode-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.mode = btn.dataset.mode;
      document.querySelectorAll(".mode-btn").forEach((b) => {
        b.classList.toggle("active", b === btn);
      });

      if (subjectsSection.hidden) {
        subjectsSection.hidden = false;
        requestAnimationFrame(() => subjectsSection.classList.add("visible"));
      }

      renderTabs();

      if (!subjectsInitialized) {
        
        selectSubject(Object.keys(SUBJECTS)[0]);
        subjectsInitialized = true;
      } else {
        renderPanel();
      }
    });
  });

  function renderTabs() {
    if (tabsEl.childElementCount) return; 

    Object.keys(SUBJECTS).forEach((key) => {
      const subj = SUBJECTS[key];
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tab";
      btn.dataset.subject = key;
      btn.innerHTML = subj.name + ' <span class="credit-badge">' + subj.credits + "cr</span>";

      btn.addEventListener("click", () => selectSubject(key));

      tabsEl.appendChild(btn);
    });
  }

  function selectSubject(key) {
    state.subject = key;
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.subject === key);
    });
    renderPanel();
  }

  function marksCard(label, value, max) {
    const pct = (value / max) * 100;
    return (
      '<div class="stat-card">' +
      '<span class="stat-label">' + label + "</span>" +
      '<span class="stat-value">' + value + "<small>/" + max + "</small></span>" +
      '<div class="stat-bar"><div class="stat-bar-fill" style="width:' + pct + '%"></div></div>' +
      "</div>"
    );
  }

  function percentCard(label, value) {
    return (
      '<div class="stat-card">' +
      '<span class="stat-label">' + label + "</span>" +
      '<span class="stat-value">' + value + "<small>%</small></span>" +
      '<div class="stat-bar"><div class="stat-bar-fill" style="width:' + value + '%"></div></div>' +
      "</div>"
    );
  }

  function noteText(note) {
    if (note === "pushed") return "Foundation mode: target pushed higher for this subject.";
    if (note === "relaxed") return "Foundation mode: target relaxed to balance the pushed subjects.";
    if (note === "unchanged") return "Kept at the general-mode target.";
    return "";
  }

  function renderPanel() {
    if (!state.tier || !state.mode || !state.subject) return;

    const subj = SUBJECTS[state.subject];
    const d = subj[state.mode][state.tier];
    const meta = TIER_META[state.tier];

    let cards = "";

    if (subj.pattern === "P1") {
      cards += marksCard("Internal Test 1", d.test, 50);
      cards += marksCard("Internal Test 2", d.test, 50);
      cards += percentCard("Activities", meta.act);
      
      cards += '<div class="mid-width-wrapper">' + 
                 marksCard("End-Sem Theory", d.endsem, 100) + 
               '</div>';
               
    } else if (subj.pattern === "P2") {
      cards += marksCard("Internal Test 1", d.test, 50);
      cards += marksCard("Internal Test 2", d.test, 50);
      cards += percentCard("Practicals", meta.prac);
      
      cards += '<div class="center-row-wrapper">' + 
                 percentCard("Activities", meta.act) + 
                 marksCard("End-Sem Theory", d.endsem, 100) + 
               '</div>';
               
    } else if (subj.pattern === "P3") {
      cards += marksCard("Internal Test 1", d.test, 50);
      cards += marksCard("Internal Test 2", d.test, 50);
      cards += percentCard("Practicals", meta.prac);
      cards += percentCard("Activities", meta.act);
      cards += marksCard("End-Sem Theory", d.esTheory, 100);
      cards += percentCard("End-Sem Practical", d.esPractical); 
      
    } else if (subj.pattern === "P4") {
      cards += marksCard("Internal Test", d.test, 50);
      cards += percentCard("Practicals", meta.prac);
      cards += percentCard("Activities", meta.act);
      
      cards += '<div class="mid-width-wrapper">' + 
                 percentCard("End-Sem Practical", d.esPractical) + 
               '</div>';
    }

    const note = d.note ? '<p class="panel-note">' + noteText(d.note) + "</p>" : "";
    

    const grade = GRADE_FOR_TIER[state.tier];

    panelEl.innerHTML =
      '<div class="panel-head">' +
      "<div>" +
      "<h3>" + subj.name + "</h3>" +
      '<span class="panel-meta">' + subj.credits + " Credits &middot; " + subj.patternLabel + "</span>" +
      "</div>" +
      '<span class="grade-chip">' + grade + "</span>" +
      "</div>" +
      '<div class="stat-grid">' + cards + "</div>"; 
      
  }
})();
