// state management
const state = {
  selectedDegree: "bwl",
  major1: "controlling",
  major2Type: "major",
  major2: "digital_business",
  selectedElectives: ["711", "712", "714", "715"],
  praxisSplit: "split",
  nmElectiveA: "NM725",
  nmElectiveB: "1386",
  activeTab: "semester",
  searchTerm: "",
  examTypeFilter: "all",
  languageFilter: "all",
  hasMcFilter: false,
  hasCoachingFilter: false,
  activeModuleId: null,
  s1Expanded: true,
  s2Expanded: true
};

// saved chart instances to destroy on updates
const charts = {
  examTypes: null,
  semesterTrend: null
};

// Safe extraction of global data with fallbacks
const THM_DATA = window.THM_DATA || {
  MODULES: [],
  MAJORS: [],
  EXAM_TYPE_DEFINITIONS: []
};
const { MODULES, MAJORS, EXAM_TYPE_DEFINITIONS } = THM_DATA;

// Helper to safely call Lucide icon rendering
function safeCreateIcons() {
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn("Lucide Icons konnten nicht geladen/gerendert werden:", e);
    }
  }
}

// Robust Initialization (works even if DOMContentLoaded already fired)
function init() {
  if (!window.THM_DATA) {
    // Show a nice error modal if data.js didn't load (e.g. file casing or incomplete ZIP unpacking)
    const warning = document.createElement("div");
    warning.id = "thm-data-error-notice";
    warning.className = "bg-slate-900/90 text-white p-6 text-center z-50 fixed inset-0 flex flex-col items-center justify-center space-y-4 backdrop-blur-xs";
    warning.innerHTML = `
      <div class="max-w-md bg-white text-slate-900 p-6 rounded-xl shadow-2xl border border-red-200 text-center">
        <div class="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <h2 class="text-red-600 font-extrabold text-base mb-2">Fehler beim Laden der Daten</h2>
        <p class="text-xs text-slate-650 mb-4 leading-relaxed">
          Die Datei <strong>data.js</strong> konnte nicht geladen werden oder fehlt im gleichen Ordner wie <strong>index.html</strong>.
        </p>
        <div class="bg-slate-50 p-3 rounded text-[11px] font-mono text-left text-slate-500 mb-4 border border-slate-150">
          Bitte stellen Sie sicher, dass Sie die heruntergeladene ZIP-Datei vollständig entpackt haben und sich <strong>index.html</strong> sowie <strong>data.js</strong> im exakt gleichen Verzeichnis befinden.
        </div>
        <button onclick="window.location.reload()" class="w-full px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded font-bold text-xs transition-colors shadow-3xs focus:outline-none">
          Erneut laden
        </button>
      </div>
    `;
    document.body.appendChild(warning);
    return;
  }

  initSelectors();
  initEventListeners();
  switchTab("semester"); // Start with semester tab
  safeCreateIcons();
}

if (document.readyState === "complete" || document.readyState === "interactive") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}

// Setup selector dropdowns
function initSelectors() {
  const s1Select = document.getElementById("select-major1");
  const s2Select = document.getElementById("select-major2");

  // Clear existing
  s1Select.innerHTML = "";
  s2Select.innerHTML = "";

  MAJORS.forEach(major => {
    // S1 options
    const opt1 = document.createElement("option");
    opt1.value = major.id;
    opt1.textContent = `${major.name} (${major.englishName})`;
    opt1.selected = state.major1 === major.id;
    s1Select.appendChild(opt1);

    // S2 options
    const opt2 = document.createElement("option");
    opt2.value = major.id;
    opt2.textContent = `${major.name} (${major.englishName})`;
    opt2.selected = state.major2 === major.id;
    s2Select.appendChild(opt2);
  });

  // Populate NM Electives
  const nmASelect = document.getElementById("select-nm-elective-a");
  const nmBSelect = document.getElementById("select-nm-elective-b");
  nmASelect.innerHTML = "";
  nmBSelect.innerHTML = "";

  MODULES.filter(m => m.degrees && m.degrees.includes("bwl_nm") && m.type === "wahlpflicht_a").forEach(m => {
    const opt = document.createElement("option");
    opt.value = m.id;
    opt.textContent = `${m.name} (${m.crp} CrP)`;
    opt.selected = state.nmElectiveA === m.id;
    nmASelect.appendChild(opt);
  });

  MODULES.filter(m => m.degrees && m.degrees.includes("bwl_nm") && m.type === "wahlpflicht_b").forEach(m => {
    const opt = document.createElement("option");
    opt.value = m.id;
    opt.textContent = `${m.name} (${m.crp} CrP)`;
    opt.selected = state.nmElectiveB === m.id;
    nmBSelect.appendChild(opt);
  });

  // Populate exam type filter dropdown
  const examFilter = document.getElementById("filter-exam-type");
  examFilter.innerHTML = '<option value="all">Alle Prüfungsformen</option>';
  
  // Collect all exam types
  const examTypes = new Set();
  MODULES.forEach(mod => {
    mod.exams.forEach(ex => {
      const type = ex.type === "Gründungsprojekt" ? "Projekt" : ex.type;
      examTypes.add(type);
    });
  });

  Array.from(examTypes).sort().forEach(type => {
    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;
    examFilter.appendChild(opt);
  });
}

// Bind all listeners
function initEventListeners() {
  // Degree Change
  document.getElementById("select-degree").addEventListener("change", (e) => {
    state.selectedDegree = e.target.value;
    render();
  });

  // S1 Change
  document.getElementById("select-major1").addEventListener("change", (e) => {
    state.major1 = e.target.value;
    // Prevent S1 and S2 from being the same major
    if (state.major2Type === "major" && state.major1 === state.major2) {
      const otherMajor = MAJORS.find(m => m.id !== state.major1);
      state.major2 = otherMajor ? otherMajor.id : "";
      document.getElementById("select-major2").value = state.major2;
    }
    render();
  });

  // S2 Type buttons
  document.getElementById("btn-s2-major").addEventListener("click", () => {
    state.major2Type = "major";
    updateS2TypeUI();
    // Re-check same majors
    if (state.major1 === state.major2) {
      const otherMajor = MAJORS.find(m => m.id !== state.major1);
      state.major2 = otherMajor ? otherMajor.id : "";
      document.getElementById("select-major2").value = state.major2;
    }
    render();
  });

  document.getElementById("btn-s2-electives").addEventListener("click", () => {
    state.major2Type = "electives";
    updateS2TypeUI();
    render();
  });

  // S2 Change
  document.getElementById("select-major2").addEventListener("change", (e) => {
    state.major2 = e.target.value;
    // Prevent same majors
    if (state.major1 === state.major2) {
      const otherMajor = MAJORS.find(m => m.id !== state.major2);
      state.major1 = otherMajor ? otherMajor.id : "";
      document.getElementById("select-major1").value = state.major1;
    }
    render();
  });

  // Search & Filters
  document.getElementById("search-input").addEventListener("input", (e) => {
    state.searchTerm = e.target.value;
    render();
  });

  document.getElementById("filter-exam-type").addEventListener("change", (e) => {
    state.examTypeFilter = e.target.value;
    render();
  });

  document.getElementById("filter-language").addEventListener("change", (e) => {
    state.languageFilter = e.target.value;
    render();
  });

  document.getElementById("filter-mc").addEventListener("change", (e) => {
    state.hasMcFilter = e.target.checked;
    render();
  });

  document.getElementById("filter-coaching").addEventListener("change", (e) => {
    state.hasCoachingFilter = e.target.checked;
    render();
  });

  // Close modal when clicking backdrop
  document.getElementById("module-modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "module-modal-overlay") {
      closeModuleModal();
    }
  });

  // Keyboard close support
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModuleModal();
  });

  // Accordion Toggles
  document.getElementById("btn-accordion-s1").addEventListener("click", () => {
    state.s1Expanded = !state.s1Expanded;
    updateAccordionUI();
  });

  document.getElementById("btn-accordion-s2").addEventListener("click", () => {
    state.s2Expanded = !state.s2Expanded;
    updateAccordionUI();
  });

  // Praxisphase distribution change
  document.getElementById("select-praxis").addEventListener("change", (e) => {
    state.praxisSplit = e.target.value;
    render();
  });

  // NM Elective A change
  document.getElementById("select-nm-elective-a").addEventListener("change", (e) => {
    state.nmElectiveA = e.target.value;
    render();
  });

  // NM Elective B change
  document.getElementById("select-nm-elective-b").addEventListener("change", (e) => {
    state.nmElectiveB = e.target.value;
    render();
  });

  // NM Praxis phase split change
  document.getElementById("select-praxis-nm").addEventListener("change", (e) => {
    state.praxisSplit = e.target.value;
    // Keep both praxis selects in sync
    document.getElementById("select-praxis").value = e.target.value;
    render();
  });
}

function updateS2TypeUI() {
  const btnMajor = document.getElementById("btn-s2-major");
  const btnElectives = document.getElementById("btn-s2-electives");
  const containerMajor = document.getElementById("container-major2");
  const containerElectives = document.getElementById("container-electives-summary");
  const panelElectives = document.getElementById("panel-elective-selector");

  if (state.major2Type === "major") {
    btnMajor.className = "px-2.5 py-2 rounded text-xs font-bold border border-blue-500 bg-blue-600/20 text-blue-300 transition-all";
    btnElectives.className = "px-2.5 py-2 rounded text-xs font-bold border border-slate-700 bg-slate-850 text-slate-400 transition-all";
    containerMajor.classList.remove("hidden");
    containerElectives.classList.add("hidden");
    panelElectives.classList.add("hidden");
  } else {
    btnMajor.className = "px-2.5 py-2 rounded text-xs font-bold border border-slate-700 bg-slate-850 text-slate-400 transition-all";
    btnElectives.className = "px-2.5 py-2 rounded text-xs font-bold border border-blue-500 bg-blue-600/20 text-blue-300 transition-all";
    containerMajor.classList.add("hidden");
    containerElectives.classList.remove("hidden");
    panelElectives.classList.remove("hidden");
  }
}

// Global active curriculum list
function getCurriculum() {
  if (state.selectedDegree === "bwl_nm") {
    // 1. Core mandatory modules of NM
    const nmPflicht = MODULES.filter(m => m.degrees && m.degrees.includes("bwl_nm") && m.type === "pflicht");
    
    // 2. Shared standard modules
    const sharedIds = ["101", "102", "103", "104", "105", "106", "201", "202", "205", "301", "302", "304", "305", "401", "404", "605", "700"];
    const sharedPflicht = MODULES.filter(m => sharedIds.includes(m.id)).map(m => {
      if (m.id === "102") {
        return { ...m, semester: 2 };
      }
      if (m.id === "605" && state.praxisSplit === "sem7") {
        return { ...m, semester: 7 };
      }
      return m;
    });

    // 3. NM electives
    const electiveAModule = MODULES.find(m => m.id === state.nmElectiveA);
    const electiveBModule = MODULES.find(m => m.id === state.nmElectiveB);

    const electives = [];
    if (electiveAModule) {
      electives.push({ ...electiveAModule, semester: 5, type: "wahlpflicht_a" });
    }
    if (electiveBModule) {
      electives.push({ ...electiveBModule, semester: 6, type: "wahlpflicht_b" });
    }

    return [...nmPflicht, ...sharedPflicht, ...electives];
  }

  // 162 CrP compulsory modules
  const pflicht = MODULES.filter(m => m.type === "pflicht" && (!m.degrees || m.degrees.includes("bwl"))).map(m => {
    if (m.id === "605" && state.praxisSplit === "sem7") {
      return { ...m, semester: 7 };
    }
    return m;
  });
  
  // 24 CrP Schwerpunkt 1 modules (always 2 in Sem 4, 2 in Sem 5)
  const s1Modules = MODULES.filter(m => m.majorId === state.major1);
  const s1 = s1Modules.map((m, idx) => ({
    ...m,
    semester: idx < 2 ? 4 : 5,
    type: "schwerpunkt"
  }));
  
  // 24 CrP Schwerpunkt 2 OR Elective modules (always 2 in Sem 5, 2 in Sem 6)
  let s2 = [];
  if (state.major2Type === "major") {
    const s2Modules = MODULES.filter(m => m.majorId === state.major2);
    s2 = s2Modules.map((m, idx) => ({
      ...m,
      semester: idx < 2 ? 5 : 6,
      type: "schwerpunkt"
    }));
  } else {
    // Map electives and distribute semesters: first 2 to Sem 5, next 2 to Sem 6
    const electivesList = MODULES.filter(m => state.selectedElectives.includes(m.id));
    s2 = electivesList.map((el, idx) => {
      const semOverride = idx < 2 ? 5 : 6;
      return {
        ...el,
        semester: semOverride,
        type: el.type
      };
    });
  }

  return [...pflicht, ...s1, ...s2];
}

// Toggle elective choice
function toggleElective(id) {
  if (state.selectedElectives.includes(id)) {
    state.selectedElectives = state.selectedElectives.filter(eid => eid !== id);
  } else {
    state.selectedElectives.push(id);
  }
  render();
}

// Clear all active filters
function clearAllFilters() {
  state.searchTerm = "";
  state.examTypeFilter = "all";
  state.languageFilter = "all";
  state.hasMcFilter = false;
  state.hasCoachingFilter = false;

  document.getElementById("search-input").value = "";
  document.getElementById("filter-exam-type").value = "all";
  document.getElementById("filter-language").value = "all";
  document.getElementById("filter-mc").checked = false;
  document.getElementById("filter-coaching").checked = false;

  render();
}

// Change main views
function switchTab(tabId) {
  state.activeTab = tabId;

  // Active state styling for tabs
  ["semester", "reform", "schwerpunkte", "glossar"].forEach(id => {
    const tabBtn = document.getElementById(`tab-${id}`);
    const panel = document.getElementById(`panel-${id}`);
    
    if (id === tabId) {
      tabBtn.className = "flex items-center gap-2 px-4 py-3 border-b-2 border-blue-600 text-blue-600 font-bold text-xs sm:text-sm transition-all focus:outline-none";
      panel.classList.remove("hidden");
    } else {
      tabBtn.className = "flex items-center gap-2 px-4 py-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-bold text-xs sm:text-sm transition-all focus:outline-none";
      panel.classList.add("hidden");
    }
  });

  // Hide Search & Filter Bar on major and glossary views
  const filterSection = document.getElementById("filter-bar");
  if (tabId === "schwerpunkte" || tabId === "glossar") {
    filterSection.classList.add("hidden");
  } else {
    filterSection.classList.remove("hidden");
  }

  render();
}

// Perform complete calculations and layout renders
function render() {
  const activeCurriculum = getCurriculum();
  
  // Calculate results based on filters
  const filteredCurriculum = activeCurriculum.filter(mod => {
    let isMatch = true;

    // Search Query
    if (state.searchTerm) {
      const query = state.searchTerm.toLowerCase();
      const nameMatch = mod.name.toLowerCase().includes(query);
      const codeMatch = mod.id.toLowerCase().includes(query);
      const contentsMatch = mod.contents?.toLowerCase().includes(query) || false;
      const objectivesMatch = mod.objectives?.toLowerCase().includes(query) || false;
      const responsibleMatch = mod.responsible?.toLowerCase().includes(query) || false;
      
      if (!nameMatch && !codeMatch && !contentsMatch && !objectivesMatch && !responsibleMatch) {
        isMatch = false;
      }
    }

    // Exam Type Filter
    if (state.examTypeFilter !== "all" && isMatch) {
      const typeMatch = mod.exams.some(e => {
        const type = e.type === "Gründungsprojekt" ? "Projekt" : e.type;
        return type === state.examTypeFilter;
      });
      if (!typeMatch) isMatch = false;
    }

    // Language Filter
    if (state.languageFilter !== "all" && isMatch) {
      if (mod.language !== state.languageFilter) isMatch = false;
    }

    // MC Filter
    if (state.hasMcFilter && isMatch) {
      if (!mod.hasMc) isMatch = false;
    }

    // Coaching Filter
    if (state.hasCoachingFilter && isMatch) {
      if (!mod.coaching) isMatch = false;
    }

    return isMatch;
  });

  // Check if any filters are active
  const isFilterActive = state.searchTerm || state.examTypeFilter !== "all" || state.languageFilter !== "all" || state.hasMcFilter || state.hasCoachingFilter;
  const resultsCounter = document.getElementById("results-counter");
  if (isFilterActive && (state.activeTab === "semester" || state.activeTab === "reform")) {
    resultsCounter.classList.remove("hidden");
    document.getElementById("text-match-count").textContent = filteredCurriculum.length;
  } else {
    resultsCounter.classList.add("hidden");
  }

  // Toggle configurator panels visibility
  const bwlConfig = document.getElementById("configurator-bwl");
  const nmConfig = document.getElementById("configurator-nm");
  if (state.selectedDegree === "bwl_nm") {
    bwlConfig.classList.add("hidden");
    nmConfig.classList.remove("hidden");
  } else {
    bwlConfig.classList.remove("hidden");
    nmConfig.classList.add("hidden");
  }

  // Calculate high level stats
  const totalCrp = activeCurriculum.reduce((acc, c) => acc + c.crp, 0);
  const targetCrp = state.selectedDegree === "bwl_nm" ? 224 : 210;
  document.getElementById("stat-total-crp").textContent = `${totalCrp} / ${targetCrp}`;
  document.getElementById("stat-module-count").textContent = activeCurriculum.length;

  const coachingCount = state.selectedDegree === "bwl_nm" ? 2 : 4;
  document.getElementById("stat-coaching-count").textContent = `${coachingCount} Module`;

  // Render sub panels based on active tab
  if (state.activeTab === "semester") {
    renderSemesterGrid(activeCurriculum, filteredCurriculum);
    renderElectivesChecklist();
  } else if (state.activeTab === "reform") {
    renderReformPanel(activeCurriculum);
  } else if (state.activeTab === "schwerpunkte") {
    renderMajorsExplorer();
  } else if (state.activeTab === "glossar") {
    renderGlossaryPanel();
  }

  // Update dynamic icons safely
  safeCreateIcons();
}

// Helper to check if a specific module matches active filters
function isModuleMatchingFilters(mod) {
  let isMatch = true;

  if (state.searchTerm) {
    const query = state.searchTerm.toLowerCase();
    const nameMatch = mod.name.toLowerCase().includes(query);
    const codeMatch = mod.id.toLowerCase().includes(query);
    const contentsMatch = mod.contents?.toLowerCase().includes(query) || false;
    const objectivesMatch = mod.objectives?.toLowerCase().includes(query) || false;
    const responsibleMatch = mod.responsible?.toLowerCase().includes(query) || false;
    
    if (!nameMatch && !codeMatch && !contentsMatch && !objectivesMatch && !responsibleMatch) {
      isMatch = false;
    }
  }

  if (state.examTypeFilter !== "all" && isMatch) {
    const typeMatch = mod.exams.some(e => {
      const type = e.type === "Gründungsprojekt" ? "Projekt" : e.type;
      return type === state.examTypeFilter;
    });
    if (!typeMatch) isMatch = false;
  }

  if (state.languageFilter !== "all" && isMatch) {
    if (mod.language !== state.languageFilter) isMatch = false;
  }

  if (state.hasMcFilter && isMatch) {
    if (!mod.hasMc) isMatch = false;
  }

  if (state.hasCoachingFilter && isMatch) {
    if (!mod.coaching) isMatch = false;
  }

  return isMatch;
}

// Generate beautiful abstract slot cards matching the main React dashboard visual style
function getAbstractCardHtml(typeLabel, title, subtitle, crp, sws, category, slots, targetModuleId) {
  let borderStyle = "border-dashed border-blue-300 bg-blue-50/5 hover:bg-blue-50/15 hover:border-blue-500";
  let textStyle = "text-blue-700";
  let badgeStyle = "bg-blue-50 text-blue-700 border-blue-200";

  if (category === "schwerpunkt2") {
    borderStyle = "border-dashed border-purple-300 bg-purple-50/5 hover:bg-purple-50/15 hover:border-purple-500";
    textStyle = "text-purple-700";
    badgeStyle = "bg-purple-50 text-purple-700 border-purple-200";
  } else if (category === "praxis") {
    borderStyle = "border-dashed border-emerald-300 bg-emerald-50/5 hover:bg-emerald-50/15 hover:border-emerald-500";
    textStyle = "text-emerald-700";
    badgeStyle = "bg-emerald-50 text-emerald-700 border-emerald-200";
  }

  let isHighlighted = true;
  const isFilterActive = state.searchTerm || state.examTypeFilter !== "all" || state.languageFilter !== "all" || state.hasMcFilter || state.hasCoachingFilter;
  
  if (isFilterActive) {
    if (category === "schwerpunkt1") {
      const s1Modules = MODULES.filter(m => m.majorId === state.major1);
      isHighlighted = slots.some(idx => {
        const m = s1Modules[idx];
        return m && isModuleMatchingFilters(m);
      });
    } else if (category === "schwerpunkt2") {
      let s2Modules = [];
      if (state.major2Type === "major") {
        s2Modules = MODULES.filter(m => m.majorId === state.major2);
      } else {
        s2Modules = MODULES.filter(m => state.selectedElectives.includes(m.id));
      }
      isHighlighted = slots.some(idx => {
        const m = s2Modules[idx];
        return m && isModuleMatchingFilters(m);
      });
    } else if (category === "praxis") {
      const m = MODULES.find(mod => mod.id === "605");
      isHighlighted = m && isModuleMatchingFilters(m);
    }
  }

  const opacityClass = isHighlighted ? "opacity-100" : "opacity-45";
  const onClickStr = targetModuleId ? `openModuleModal('${targetModuleId}')` : `document.getElementById('specialties-details-container').scrollIntoView({ behavior: 'smooth' })`;

  return `
    <div onclick="${onClickStr}" class="relative flex flex-col justify-between p-3 rounded border text-left cursor-pointer transition-all duration-200 ${borderStyle} ${opacityClass}">
      <div>
        <div class="flex items-start justify-between gap-2 mb-1.5">
          <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[8px] font-bold border ${badgeStyle}">
            ${typeLabel}
          </span>
          <span class="text-[9px] font-bold text-slate-400 font-mono">Strukturslot</span>
        </div>
        <h4 class="font-bold text-[12px] leading-snug min-h-[32px] ${textStyle} mt-1">
          ${title}
        </h4>
        <p class="text-[10px] text-slate-500 font-semibold truncate mb-1">
          ${subtitle}
        </p>
      </div>
      <div class="mt-2 pt-2 border-t border-slate-200/50 flex items-center justify-between text-[10px] text-slate-500">
        <span class="font-bold text-slate-700">${crp}</span>
        <span>${sws}</span>
        <span class="text-[9px] font-bold text-blue-500 hover:underline">${targetModuleId ? 'Details' : 'Auswahl \u2193'}</span>
      </div>
    </div>
  `;
}

// Update the detailed accordions visual states and dynamic content
function updateAccordionUI() {
  const s1Obj = MAJORS.find(m => m.id === state.major1);
  const s2Obj = MAJORS.find(m => m.id === state.major2);

  // Update Accordion 1
  document.getElementById("title-accordion-s1").textContent = `Schwerpunkt 1: ${s1Obj ? s1Obj.name : 'Geladen...'}`;
  document.getElementById("desc-accordion-s1").textContent = s1Obj ? s1Obj.description : 'Beschreibung lädt...';
  
  const contentS1 = document.getElementById("content-accordion-s1");
  const iconS1 = document.getElementById("icon-accordion-s1");
  if (state.s1Expanded) {
    contentS1.classList.remove("hidden");
    iconS1.classList.add("rotate-90");
  } else {
    contentS1.classList.add("hidden");
    iconS1.classList.remove("rotate-90");
  }

  const listS1 = document.getElementById("list-accordion-s1");
  listS1.innerHTML = "";
  const s1Modules = MODULES.filter(m => m.majorId === state.major1);
  s1Modules.forEach(mod => {
    const isHighlighted = isModuleMatchingFilters(mod);
    const card = document.createElement("div");
    card.onclick = () => openModuleModal(mod.id);
    card.className = `p-2.5 rounded border cursor-pointer transition-all flex items-center justify-between gap-4 bg-white ${
      isHighlighted ? 'border-slate-250 hover:border-blue-500 hover:bg-blue-50/5' : 'border-slate-150 opacity-40 hover:opacity-100'
    }`;
    card.innerHTML = `
      <div class="min-w-0">
        <div class="flex items-center gap-1.5 mb-1">
          <span class="font-mono text-[9px] font-bold text-slate-400">Nr. ${mod.id}</span>
          <span class="text-[9px] font-mono font-bold bg-slate-100 text-slate-500 px-1 rounded border border-slate-200">${mod.crp} CrP</span>
          <span class="text-[9px] text-slate-400 font-bold">Standard: Sem. ${mod.semester}</span>
        </div>
        <h5 class="font-bold text-slate-700 text-xs truncate leading-snug">${mod.name}</h5>
      </div>
      <i data-lucide="chevron-right" class="w-4 h-4 text-slate-300"></i>
    `;
    listS1.appendChild(card);
  });

  // Update Accordion 2
  const labelS2 = document.getElementById("label-accordion-s2");
  const titleS2 = document.getElementById("title-accordion-s2");
  const descS2 = document.getElementById("desc-accordion-s2");
  const countBadgeS2 = document.getElementById("count-badge-accordion-s2");
  
  let s2Modules = [];
  if (state.major2Type === "major") {
    labelS2.textContent = "Nebenfach (24 CrP)";
    titleS2.textContent = `Schwerpunkt 2: ${s2Obj ? s2Obj.name : 'Geladen...'}`;
    descS2.textContent = s2Obj ? s2Obj.description : 'Beschreibung lädt...';
    descS2.classList.remove("hidden");
    countBadgeS2.textContent = "4 Module";
    s2Modules = MODULES.filter(m => m.majorId === state.major2);
  } else {
    labelS2.textContent = "Freier Wahlbereich (24 CrP)";
    titleS2.textContent = "Auswahl freier Wahlpflichtmodule";
    descS2.textContent = "Die von Ihnen aus dem Wahlpflichtkatalog ausgewählten Lehrveranstaltungen:";
    countBadgeS2.textContent = `${state.selectedElectives.length} / 4 Module`;
    s2Modules = MODULES.filter(m => state.selectedElectives.includes(m.id));
  }

  const contentS2 = document.getElementById("content-accordion-s2");
  const iconS2 = document.getElementById("icon-accordion-s2");
  if (state.s2Expanded) {
    contentS2.classList.remove("hidden");
    iconS2.classList.add("rotate-90");
  } else {
    contentS2.classList.add("hidden");
    iconS2.classList.remove("rotate-90");
  }

  const listS2 = document.getElementById("list-accordion-s2");
  listS2.innerHTML = "";
  if (s2Modules.length === 0) {
    listS2.innerHTML = `
      <div class="p-4 text-center text-slate-400 text-xs border border-dashed border-slate-200 rounded-lg w-full">
        Noch keine Wahlpflichtmodule ausgewählt. Bitte wählen Sie Module im Katalog unten aus.
      </div>
    `;
  } else {
    s2Modules.forEach(mod => {
      const isHighlighted = isModuleMatchingFilters(mod);
      const card = document.createElement("div");
      card.onclick = () => openModuleModal(mod.id);
      card.className = `p-2.5 rounded border cursor-pointer transition-all flex items-center justify-between gap-4 bg-white ${
        isHighlighted ? 'border-slate-250 hover:border-purple-500 hover:bg-purple-50/5' : 'border-slate-150 opacity-40 hover:opacity-100'
      }`;
      card.innerHTML = `
        <div class="min-w-0">
          <div class="flex items-center gap-1.5 mb-1">
            <span class="font-mono text-[9px] font-bold text-slate-400">Nr. ${mod.id}</span>
            <span class="text-[9px] font-mono font-bold bg-slate-100 text-slate-500 px-1 rounded border border-slate-200">${mod.crp} CrP</span>
            <span class="text-[9px] text-slate-400 font-bold">${state.major2Type === "major" ? 'Standard: Sem. ' + mod.semester : 'Wahlpflicht'}</span>
          </div>
          <h5 class="font-bold text-slate-700 text-xs truncate leading-snug">${mod.name}</h5>
        </div>
        <i data-lucide="chevron-right" class="w-4 h-4 text-slate-300"></i>
      `;
      listS2.appendChild(card);
    });
  }

  safeCreateIcons();
}

// 1. Render Semesters (1 to 7)
function renderSemesterGrid(activeCurriculum, filteredCurriculum) {
  const container = document.getElementById("semester-grid");
  container.innerHTML = "";

  const s1Obj = MAJORS.find(m => m.id === state.major1);
  const s2Obj = MAJORS.find(m => m.id === state.major2);

  // Set up filtered map for quick check
  const filteredIds = new Set(filteredCurriculum.map(m => m.id));

  for (let sem = 1; sem <= 7; sem++) {
    let semModules = [];
    let crpSum = 0;
    let swsSum = 0;

    if (state.selectedDegree === "bwl_nm") {
      semModules = activeCurriculum.filter(m => m.semester === sem && m.id !== "605");
      crpSum = semModules.reduce((acc, m) => acc + m.crp, 0);
      swsSum = semModules.reduce((acc, m) => acc + (m.sws || 0), 0);
      
      if (sem === 6 && (state.praxisSplit === "split" || state.praxisSplit === "sem6")) {
        crpSum += (state.praxisSplit === "split" ? 12 : 30);
      }
      if (sem === 7 && (state.praxisSplit === "split" || state.praxisSplit === "sem7")) {
        crpSum += (state.praxisSplit === "split" ? 18 : 30);
      }
    } else {
      if (sem === 1 || sem === 2 || sem === 3) {
        semModules = activeCurriculum.filter(m => m.semester === sem);
        crpSum = semModules.reduce((acc, m) => acc + m.crp, 0);
        swsSum = semModules.reduce((acc, m) => acc + (m.sws || 0), 0);
      } else if (sem === 4) {
        const pflicht4 = activeCurriculum.filter(m => m.semester === 4 && m.type === "pflicht");
        semModules = pflicht4;
        crpSum = 21 + 12; // 21 Pflicht (401-404) + 12 S1 Modul 1 & 2
        swsSum = pflicht4.reduce((acc, m) => acc + (m.sws || 0), 0) + 8; // Pflicht + 8 SWS S1
      } else if (sem === 5) {
        const pflicht5 = activeCurriculum.filter(m => m.semester === 5 && m.type === "pflicht");
        semModules = pflicht5;
        crpSum = 5 + 12 + 12; // 5 Pflicht (505) + 12 S1 Modul 3 & 4 + 12 S2 Modul 1 & 2
        swsSum = pflicht5.reduce((acc, m) => acc + (m.sws || 0), 0) + 8 + 8; // Pflicht + 8 S1 + 8 S2
      } else if (sem === 6) {
        const pflicht6 = activeCurriculum.filter(m => m.semester === 6 && m.type === "pflicht" && m.id !== "605");
        semModules = pflicht6; // Planspiel 601
        let praxisCrp = 0;
        if (state.praxisSplit === "split") praxisCrp = 12;
        else if (state.praxisSplit === "sem6") praxisCrp = 30;
        crpSum = 5 + 12 + praxisCrp; // 5 Planspiel + 12 S2 Modul 3 & 4 + praxisCrp
        swsSum = pflicht6.reduce((acc, m) => acc + (m.sws || 0), 0) + 8; // Planspiel (4 SWS) + 8 SWS S2 Modul 3 & 4
      } else if (sem === 7) {
        const pflicht7 = activeCurriculum.filter(m => m.semester === 7 && m.type === "pflicht" && m.id !== "605");
        semModules = pflicht7; // Bachelorthesis 700
        let praxisCrp = 0;
        if (state.praxisSplit === "split") praxisCrp = 18;
        else if (state.praxisSplit === "sem7") praxisCrp = 30;
        crpSum = 12 + praxisCrp; // 12 Thesis + praxisCrp
        swsSum = pflicht7.reduce((acc, m) => acc + (m.sws || 0), 0); // Thesis (0 SWS), no S2 modules
      }
    }

    const semCard = document.createElement("div");
    semCard.className = "bg-white border border-slate-200 rounded-xl shadow-3xs overflow-hidden flex flex-col h-full";
    semCard.innerHTML = `
      <div class="px-4 py-3.5 bg-slate-50 border-b border-slate-100 flex items-center justify-between shrink-0">
        <div>
          <h3 class="font-bold text-slate-800 text-sm">Semester ${sem}</h3>
          <p class="text-[10px] text-slate-400 font-medium">Standard-Empfehlung</p>
        </div>
        <div class="text-right">
          <span class="block font-mono text-xs font-bold text-blue-600">${crpSum} CrP</span>
          <span class="block text-[9px] text-slate-400 font-mono">${swsSum} SWS</span>
        </div>
      </div>
      <div class="p-3.5 space-y-2.5 flex-1 overflow-y-auto" id="semester-${sem}-modules">
        <!-- Module list -->
      </div>
    `;

    container.appendChild(semCard);
    const listContainer = document.getElementById(`semester-${sem}-modules`);

    // Render regular pflicht modules
    semModules.forEach(mod => {
      const isVisible = filteredIds.has(mod.id);
      if (!isVisible) return; // Skip if filtered out

      const itemCard = document.createElement("div");
      itemCard.onclick = () => openModuleModal(mod.id);
      
      // Determine coloring based on module category
      let categoryBorder = "border-slate-150 hover:border-blue-500 hover:shadow-2xs";
      let categoryBg = "bg-white";
      
      if (mod.type === "schwerpunkt") {
        categoryBorder = "border-blue-150 hover:border-blue-500 hover:shadow-2xs";
        categoryBg = "bg-blue-50/10";
      } else if (mod.type === "wahlpflicht_a" || mod.type === "wahlpflicht_b") {
        categoryBorder = "border-indigo-150 hover:border-indigo-500 hover:shadow-2xs";
        categoryBg = "bg-indigo-50/10";
      }

      // Generate icons badges
      const mcBadge = mod.hasMc ? `<span class="inline-block px-1 bg-amber-50 text-amber-700 border border-amber-100 rounded text-[8px] font-bold" title="Teilweise Multiple Choice">MC</span>` : "";
      const coachingBadge = mod.coaching ? `<span class="inline-block px-1 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded text-[8px] font-bold" title="Schlüsselkompetenzen & Coaching">Coaching</span>` : "";
      const langBadge = mod.language === "Englisch" ? `<span class="inline-block px-1 bg-slate-100 text-slate-700 border border-slate-200 rounded text-[8px] font-bold" title="Unterrichtssprache: Englisch">EN</span>` : "";

      const examsStr = mod.exams.map(e => `${e.type} (${e.weight}%)`).join(", ");

      itemCard.className = `group p-2.5 rounded-lg border ${categoryBorder} ${categoryBg} cursor-pointer transition-all space-y-1.5`;
      itemCard.innerHTML = `
        <div class="flex items-center justify-between gap-1.5">
          <span class="font-mono text-[9px] font-bold text-slate-400">Nr. ${mod.id}</span>
          <div class="flex items-center gap-1">
            ${langBadge}
            ${mcBadge}
            ${coachingBadge}
            <span class="text-[9px] font-mono font-semibold text-slate-500 bg-slate-100 px-1 rounded">${mod.crp} CrP</span>
          </div>
        </div>
        <h4 class="font-bold text-slate-700 text-xs leading-snug group-hover:text-blue-600 transition-colors">
          ${mod.name}
        </h4>
        <div class="text-[9px] text-slate-400 truncate" title="${examsStr}">
          <i data-lucide="award" class="inline w-3 h-3 align-middle text-slate-400 mr-0.5"></i> ${examsStr}
        </div>
      `;

      listContainer.appendChild(itemCard);
    });

    // Render abstract cards inside columns 4-7
    if (state.selectedDegree !== "bwl_nm") {
      if (sem === 4) {
        listContainer.innerHTML += getAbstractCardHtml(
          "Schwerpunkt 1 (Hauptfach)",
          "Modul 1 & 2",
          s1Obj ? s1Obj.name : "Schwerpunkt 1",
          "12 CrP",
          "8 SWS",
          "schwerpunkt1",
          [0, 1]
        );
      } else if (sem === 5) {
        listContainer.innerHTML += getAbstractCardHtml(
          "Schwerpunkt 1 (Hauptfach)",
          "Modul 3 & 4",
          s1Obj ? s1Obj.name : "Schwerpunkt 1",
          "12 CrP",
          "8 SWS",
          "schwerpunkt1",
          [2, 3]
        );
        listContainer.innerHTML += getAbstractCardHtml(
          state.major2Type === "major" ? "Schwerpunkt 2 (Nebenfach)" : "Wahlpflichtbereich",
          "Modul 1 & 2",
          state.major2Type === "major" ? (s2Obj ? s2Obj.name : "Schwerpunkt 2") : "Freie Wahlpflicht",
          "12 CrP",
          "8 SWS",
          "schwerpunkt2",
          [0, 1]
        );
      } else if (sem === 6) {
        listContainer.innerHTML += getAbstractCardHtml(
          state.major2Type === "major" ? "Schwerpunkt 2 (Nebenfach)" : "Wahlpflichtbereich",
          "Modul 3 & 4",
          state.major2Type === "major" ? (s2Obj ? s2Obj.name : "Schwerpunkt 2") : "Freie Wahlpflicht",
          "12 CrP",
          "8 SWS",
          "schwerpunkt2",
          [2, 3]
        );
      }
    }

    if (sem === 6) {
      if (state.praxisSplit === "split" || state.praxisSplit === "sem6") {
        listContainer.innerHTML += getAbstractCardHtml(
          "Praxisabschnitt",
          state.praxisSplit === "split" ? "Praxisphase / Auslandssemester (Teil 1)" : "Praxisphase / Auslandssemester",
          state.praxisSplit === "split" ? "Praktikum oder Studienaufenthalt" : "Vollzeit-Praktikum oder Studienaufenthalt",
          state.praxisSplit === "split" ? "12 CrP" : "30 CrP",
          "0 SWS",
          "praxis",
          [],
          "605"
        );
      }
    } else if (sem === 7) {
      if (state.praxisSplit === "split" || state.praxisSplit === "sem7") {
        listContainer.innerHTML += getAbstractCardHtml(
          "Praxisabschnitt",
          state.praxisSplit === "split" ? "Praxisphase / Auslandssemester (Teil 2)" : "Praxisphase / Auslandssemester",
          state.praxisSplit === "split" ? "Reflexion & Berichterstellung" : "Vollzeit-Praktikum oder Studienaufenthalt",
          state.praxisSplit === "split" ? "18 CrP" : "30 CrP",
          "0 SWS",
          "praxis",
          [],
          "605"
        );
      }
    }

    if (listContainer.children.length === 0) {
      listContainer.innerHTML = `
        <div class="py-8 text-center text-slate-300 text-xs">
          Keine passenden Treffer
        </div>
      `;
    }
  }

  // Also refresh specialties accordion detailed values
  updateAccordionUI();
}

// 2. Render Electives List for selection
function renderElectivesChecklist() {
  const grid = document.getElementById("electives-list-grid");
  grid.innerHTML = "";

  const electivesList = MODULES.filter(m => m.type === "wahlpflicht_a" || m.type === "wahlpflicht_b");
  
  // Calculate validation metrics
  const catBCount = state.selectedElectives.filter(id => {
    const mod = MODULES.find(m => m.id === id);
    return mod && mod.type === "wahlpflicht_b";
  }).length;
  const catACount = state.selectedElectives.length - catBCount;

  // Display validation details inside Configurators
  document.getElementById("text-electives-count").textContent = `${state.selectedElectives.length} gewählt (Kat. A: ${catACount}, Kat. B: ${catBCount})`;

  // Display alert box if rules broken
  const alertBox = document.getElementById("electives-validation-alert");
  const alertMsg = document.getElementById("electives-validation-message");

  if (state.selectedElectives.length !== 4) {
    alertBox.classList.remove("hidden");
    alertMsg.textContent = `Achtung: Bitte wählen Sie genau 4 Module aus (aktuell gewählt: ${state.selectedElectives.length}).`;
  } else if (catBCount > 2) {
    alertBox.classList.remove("hidden");
    alertMsg.textContent = `Regelverstoß: Maximal zwei Fremdsprachen-/Mentoring-Module (Kategorie B) sind laut PO § 1 (3) zulässig (aktuell gewählt: ${catBCount}).`;
  } else {
    alertBox.classList.add("hidden");
  }

  // Draw list
  electivesList.forEach(mod => {
    const isSelected = state.selectedElectives.includes(mod.id);
    const catLabel = mod.type === "wahlpflicht_a" ? "Kategorie A (Fachvertiefung)" : "Kategorie B (Sprache/Mentoring)";
    
    const card = document.createElement("div");
    card.onclick = () => toggleElective(mod.id);

    let activeClasses = isSelected 
      ? "border-indigo-500 bg-indigo-50/30" 
      : "border-slate-200 bg-white hover:border-slate-300";

    card.className = `p-3 rounded-lg border cursor-pointer transition-all flex items-start gap-3 ${activeClasses}`;
    card.innerHTML = `
      <div class="mt-0.5 shrink-0">
        <div class="w-4.5 h-4.5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all ${isSelected ? "border-indigo-600 bg-indigo-600 text-white" : ""}">
          ${isSelected ? `<i data-lucide="check" class="w-3.5 h-3.5 stroke-[3px]"></i>` : ""}
        </div>
      </div>
      <div class="flex-1 min-w-0 space-y-0.5">
        <div class="flex items-center justify-between gap-2">
          <span class="font-mono text-[9px] font-bold text-slate-400">Nr. ${mod.id}</span>
          <span class="text-[8px] px-1.5 py-0.2 rounded font-semibold border ${
            mod.type === "wahlpflicht_a" ? "bg-indigo-50 border-indigo-100 text-indigo-700" : "bg-purple-50 border-purple-100 text-purple-700"
          }" title="${catLabel}">
            ${mod.type === "wahlpflicht_a" ? "Kat. A" : "Kat. B"}
          </span>
        </div>
        <span class="font-bold text-slate-700 text-xs block leading-snug truncate">
          ${mod.name}
        </span>
        <span class="text-[9px] text-slate-400 block truncate">
          ${mod.exams.map(e => e.type).join(", ")} | ${mod.crp} CrP
        </span>
      </div>
    `;

    grid.appendChild(card);
  });
}

// 3. Render Reform Analytics & Proposals
function renderReformPanel(activeCurriculum) {
  // Update stats counters
  const mcModules = activeCurriculum.filter(m => m.hasMc);
  const klausurModules = activeCurriculum.filter(m => m.exams.some(e => e.type === "Klausur"));

  document.getElementById("stat-klausur-count").textContent = klausurModules.length;
  document.getElementById("stat-reform-count").textContent = activeCurriculum.length;
  document.getElementById("radar-active-count").textContent = activeCurriculum.length;

  // Compute MC percentage
  let totalMcCrp = 0;
  activeCurriculum.forEach(mod => {
    if (mod.hasMc) {
      const klausurExam = mod.exams.find(e => e.type === "Klausur");
      const weight = klausurExam ? klausurExam.weight : 100;
      totalMcCrp += mod.crp * (weight / 100);
    }
  });
  const totalCrp = activeCurriculum.reduce((acc, curr) => acc + curr.crp, 0);
  const mcPercent = totalCrp > 0 ? (totalMcCrp / totalCrp) * 100 : 0;

  document.getElementById("stat-mc-percentage").textContent = `${mcPercent.toFixed(1)}%`;
  document.getElementById("stat-mc-crp-desc").textContent = `${totalMcCrp.toFixed(1)} CrP von ${totalCrp} CrP teilweise im Antwort-Wahl-Verfahren`;

  // Draw Charts
  setTimeout(() => drawCharts(activeCurriculum), 50);

  // Draw Reform-Radar List
  const listContainer = document.getElementById("reform-proposals-list");
  listContainer.innerHTML = "";

  activeCurriculum.forEach(mod => {
    const originalExamsStr = mod.exams.map(e => `${e.type} (${e.weight}%)`).join(", ");
    
    const row = document.createElement("div");
    row.onclick = () => openModuleModal(mod.id);
    row.className = "group p-2.5 bg-white hover:bg-slate-50/50 rounded-lg border border-slate-200 hover:border-blue-400 cursor-pointer transition-all flex flex-col md:flex-row md:items-center justify-between gap-3";
    row.innerHTML = `
      <div class="space-y-0.5">
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="font-mono text-[9px] font-bold text-slate-400">Modul ${mod.id}</span>
          <h4 class="font-bold text-slate-700 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
            ${mod.name}
          </h4>
          <span class="text-[8px] font-semibold bg-slate-50 text-slate-400 border border-slate-200 px-1 py-0.2 rounded">
            Sem. ${mod.semester || 'WP'}
          </span>
        </div>
        <div class="flex items-center gap-2 text-[11px] text-slate-500 flex-wrap">
          <span>Aktuell: <strong class="font-medium text-slate-650">${originalExamsStr}</strong></span>
          <span class="text-slate-300">|</span>
          <span>Ziel: <strong class="font-medium text-blue-600">${mod.reformProposal.alternativeExams[0]}</strong></span>
        </div>
      </div>
      
      <div class="text-left md:text-right shrink-0 flex items-center gap-2">
        <span class="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
          Vorschlag &rarr;
        </span>
      </div>
    `;

    listContainer.appendChild(row);
  });

  // Grouped exams listed
  const groupedContainer = document.getElementById("grouped-exams-grid");
  groupedContainer.innerHTML = "";

  const groups = {};
  activeCurriculum.forEach(mod => {
    mod.exams.forEach(exam => {
      const type = exam.type === "Gründungsprojekt" ? "Projekt" : exam.type;
      if (!groups[type]) groups[type] = [];
      groups[type].push(mod);
    });
  });

  // Sort groups by count
  Object.entries(groups)
    .sort((a, b) => b[1].length - a[1].length)
    .forEach(([type, modulesList]) => {
      // Remove duplicates
      const uniqueMods = [];
      const seenIds = new Set();
      modulesList.forEach(m => {
        if (!seenIds.has(m.id)) {
          seenIds.add(m.id);
          uniqueMods.push(m);
        }
      });

      const card = document.createElement("div");
      card.className = "bg-white border border-slate-200 rounded-xl p-4 shadow-3xs space-y-3";
      
      let listHTML = "";
      uniqueMods.forEach(m => {
        const examWeight = m.exams.find(e => (e.type === "Gründungsprojekt" ? "Projekt" : e.type) === type)?.weight || 100;
        listHTML += `
          <div onclick="openModuleModal('${m.id}')" class="flex items-center justify-between text-xs py-1.5 border-b border-slate-100/50 hover:text-blue-600 cursor-pointer transition-colors">
            <span class="truncate font-medium pr-2">${m.name}</span>
            <span class="font-mono text-slate-400 shrink-0">Sem. ${m.semester} (${examWeight}%)</span>
          </div>
        `;
      });

      card.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-100 pb-2.5">
          <h4 class="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            ${type}
          </h4>
          <span class="font-mono text-xs font-bold text-slate-400">${uniqueMods.length} Module</span>
        </div>
        <div class="space-y-0.5 max-h-48 overflow-y-auto pr-1">
          ${listHTML}
        </div>
      `;

      groupedContainer.appendChild(card);
    });
}

// 4. Render Chart.js Diagrams with offline/local safety
function drawCharts(activeCurriculum) {
  // Graceful fallback if Chart.js failed to load (offline or strict local policies)
  if (typeof Chart === "undefined") {
    console.warn("Chart.js konnte nicht geladen werden. Diagramme werden übersprungen.");
    
    // Render offline/local notice in charts
    const canvasDonut = document.getElementById("chart-exam-types");
    const canvasBar = document.getElementById("chart-semester-trend");
    
    if (canvasDonut && canvasDonut.parentElement) {
      const parent = canvasDonut.parentElement;
      if (!parent.querySelector(".no-chart-notice")) {
        const notice = document.createElement("div");
        notice.className = "no-chart-notice absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-4 text-center text-xs";
        notice.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-slate-300 mb-1.5 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <span class="font-bold text-slate-500 mb-0.5">Diagramm nicht verfügbar</span>
          <span class="text-[10px] text-slate-400 leading-tight">Offline oder blockierte Skripte (Chart.js erforderlich).</span>
        `;
        parent.appendChild(notice);
      }
    }
    
    if (canvasBar && canvasBar.parentElement) {
      const parent = canvasBar.parentElement;
      if (!parent.querySelector(".no-chart-notice")) {
        const notice = document.createElement("div");
        notice.className = "no-chart-notice absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-4 text-center text-xs";
        notice.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-slate-300 mb-1.5 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
          <span class="font-bold text-slate-500 mb-0.5">Diagramm nicht verfügbar</span>
          <span class="text-[10px] text-slate-400 leading-tight">Offline oder blockierte Skripte (Chart.js erforderlich).</span>
        `;
        parent.appendChild(notice);
      }
    }
    
    safeCreateIcons();
    return;
  }

  // Aggregate exam type distribution (CrP Share)
  const dataMap = {};
  activeCurriculum.forEach(mod => {
    mod.exams.forEach(exam => {
      const crpShare = mod.crp * (exam.weight / 100);
      const type = exam.type === "Gründungsprojekt" ? "Projekt" : exam.type;
      dataMap[type] = (dataMap[type] || 0) + crpShare;
    });
  });

  const donutLabels = Object.keys(dataMap);
  const donutData = Object.values(dataMap).map(v => parseFloat(v.toFixed(1)));

  // Setup donut chart
  const ctxDonut = document.getElementById("chart-exam-types").getContext("2d");
  if (charts.examTypes) charts.examTypes.destroy();

  charts.examTypes = new Chart(ctxDonut, {
    type: "doughnut",
    data: {
      labels: donutLabels,
      datasets: [{
        data: donutData,
        backgroundColor: [
          "#3b82f6", // blue
          "#ec4899", // pink
          "#10b981", // emerald
          "#f59e0b", // amber
          "#8b5cf6", // violet
          "#06b6d4", // cyan
          "#64748b", // slate
          "#f43f5e"  // rose
        ],
        borderWidth: 1.5,
        borderColor: "#ffffff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          labels: {
            boxWidth: 10,
            font: { size: 10, family: "Inter" }
          }
        },
        tooltip: {
          callbacks: {
            label: (item) => ` ${item.label}: ${item.raw} CrP`
          }
        }
      },
      cutout: "60%"
    }
  });

  // Aggregate semester trend distribution
  const semData = {};
  for (let i = 1; i <= 7; i++) {
    semData[i] = {
      Klausur: 0,
      Projekt: 0,
      Präsentation: 0,
      Lerntagebuch: 0,
      Portfolio: 0,
      Andere: 0
    };
  }

  activeCurriculum.forEach(mod => {
    const sem = mod.semester;
    if (sem < 1 || sem > 7) return;
    
    mod.exams.forEach(exam => {
      const crpShare = mod.crp * (exam.weight / 100);
      const type = exam.type === "Gründungsprojekt" ? "Projekt" : exam.type;
      
      if (["Klausur", "Projekt", "Präsentation", "Lerntagebuch", "Portfolio"].includes(type)) {
        semData[sem][type] += crpShare;
      } else {
        semData[sem]["Andere"] += crpShare;
      }
    });
  });

  const semesters = ["Sem. 1", "Sem. 2", "Sem. 3", "Sem. 4", "Sem. 5", "Sem. 6", "Sem. 7"];
  const examCategories = ["Klausur", "Projekt", "Präsentation", "Lerntagebuch", "Portfolio", "Andere"];
  const colors = {
    Klausur: "#3b82f6",
    Projekt: "#ec4899",
    Präsentation: "#10b981",
    Lerntagebuch: "#f59e0b",
    Portfolio: "#8b5cf6",
    Andere: "#64748b"
  };

  const datasets = examCategories.map(cat => {
    return {
      label: cat,
      data: Object.keys(semData).map(sem => parseFloat(semData[sem][cat].toFixed(1))),
      backgroundColor: colors[cat],
      barPercentage: 0.6
    };
  });

  const ctxBar = document.getElementById("chart-semester-trend").getContext("2d");
  if (charts.semesterTrend) charts.semesterTrend.destroy();

  charts.semesterTrend = new Chart(ctxBar, {
    type: "bar",
    data: {
      labels: semesters,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true,
          grid: { display: false },
          ticks: { font: { size: 10, family: "Inter" } }
        },
        y: {
          stacked: true,
          grid: { color: "#f1f5f9" },
          ticks: { font: { size: 10, family: "Inter" } }
        }
      },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 10,
            font: { size: 10, family: "Inter" }
          }
        },
        tooltip: {
          callbacks: {
            label: (item) => ` ${item.dataset.label}: ${item.raw} CrP`
          }
        }
      }
    }
  });
}

// 5. Render Schwerpunkte Explorer Grid
function renderMajorsExplorer() {
  const container = document.getElementById("majors-explorer-grid");
  container.innerHTML = "";

  MAJORS.forEach(major => {
    const majorModules = MODULES.filter(m => major.moduleIds.includes(m.id));
    
    const careerItems = major.careerFields.map(f => `
      <span class="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-medium border border-slate-200">
        ${f}
      </span>
    `).join("");

    const moduleRows = majorModules.map(m => `
      <div onclick="openModuleModal('${m.id}')" class="flex items-center justify-between p-2 rounded border border-slate-150 hover:border-blue-400 bg-slate-50/50 hover:bg-white cursor-pointer transition-all text-xs">
        <span class="font-semibold text-slate-700 truncate pr-2">${m.name}</span>
        <span class="font-mono text-slate-400 text-[10px] shrink-0">Modul ${m.id} (${m.crp} CrP)</span>
      </div>
    `).join("");

    const card = document.createElement("div");
    card.className = "bg-white border border-slate-200 rounded-xl p-5 shadow-3xs space-y-4 flex flex-col justify-between";
    card.innerHTML = `
      <div class="space-y-2">
        <div class="flex items-start justify-between gap-2 border-b border-slate-100 pb-2">
          <div>
            <h4 class="font-bold text-slate-800 text-sm">${major.name}</h4>
            <p class="text-[10px] text-slate-400 italic">${major.englishName}</p>
          </div>
          <span class="text-[9px] font-bold px-2 py-0.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-full">24 CrP</span>
        </div>
        <p class="text-xs text-slate-600 leading-relaxed">${major.description}</p>
      </div>

      <div class="space-y-3.5 pt-2">
        <!-- Module links -->
        <div class="space-y-1.5">
          <span class="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Module in dieser Vertiefung</span>
          <div class="space-y-1.5">${moduleRows}</div>
        </div>

        <!-- Career fields -->
        <div class="space-y-1.5">
          <span class="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Berufsfelder / Karriere</span>
          <div class="flex flex-wrap gap-1.5">${careerItems}</div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// 6. Render Glossary & Exam definition panels
function renderGlossaryPanel() {
  const container = document.getElementById("glossary-definitions-list");
  container.innerHTML = "";

  EXAM_TYPE_DEFINITIONS.forEach(def => {
    const item = document.createElement("div");
    item.className = "space-y-1 pb-3 border-b border-slate-800/80 last:border-b-0";
    item.innerHTML = `
      <span class="block font-bold text-blue-400 text-[11px]">${def.name}</span>
      <p class="text-slate-400 text-[11px] leading-relaxed">${def.description}</p>
    `;
    container.appendChild(item);
  });
}

// 7. Modals management
function openModuleModal(moduleId) {
  state.activeModuleId = moduleId;

  const mod = MODULES.find(m => m.id === moduleId);
  if (!mod) return;

  // Set standard meta info
  document.getElementById("modal-module-id").textContent = `Nr. ${mod.id}`;
  
  // Category Tag
  const categoryTag = document.getElementById("modal-module-type");
  if (mod.type === "pflicht") {
    categoryTag.textContent = "Pflichtmodul";
    categoryTag.className = "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200";
  } else if (mod.type === "schwerpunkt") {
    categoryTag.textContent = "Schwerpunktmodul";
    categoryTag.className = "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-100";
  } else {
    categoryTag.textContent = "Wahlpflichtmodul";
    categoryTag.className = "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100";
  }

  document.getElementById("modal-module-name").textContent = mod.name;
  document.getElementById("modal-module-english-name").textContent = mod.englishName || "";

  document.getElementById("modal-responsible").textContent = mod.responsible || "K.A.";
  document.getElementById("modal-language").textContent = mod.language || "Deutsch";
  document.getElementById("modal-crp").textContent = `${mod.crp} CrP (SWS: ${mod.sws || "K.A."})`;
  document.getElementById("modal-workload").textContent = `${mod.workloadTotal || "K.A."} Stunden`;

  document.getElementById("modal-contents").textContent = mod.contents || "Keine Inhaltsbeschreibung hinterlegt.";
  document.getElementById("modal-objectives").textContent = mod.objectives || "Keine Qualifikationsziele hinterlegt.";

  // Populate Exams list
  const examsList = document.getElementById("modal-exams-list");
  examsList.innerHTML = "";
  mod.exams.forEach(ex => {
    const exCard = document.createElement("div");
    exCard.className = "p-2 rounded border border-slate-150 bg-slate-50 flex justify-between text-xs";
    exCard.innerHTML = `
      <span class="font-bold text-slate-700">${ex.type}</span>
      <span class="font-mono text-slate-500 font-bold">${ex.weight}%</span>
    `;
    examsList.appendChild(exCard);
  });

  // MC Box
  const mcBox = document.getElementById("modal-mc-box");
  if (mod.hasMc) {
    mcBox.classList.remove("hidden");
    document.getElementById("modal-mc-desc").textContent = mod.mcDetails || "Prüfung enthält standardmäßig Fragen im Antwort-Wahl-Verfahren (§ 8a PO).";
  } else {
    mcBox.classList.add("hidden");
  }

  // Coaching Box
  const coachingBox = document.getElementById("modal-coaching-box");
  if (mod.coaching) {
    coachingBox.classList.remove("hidden");
  } else {
    coachingBox.classList.add("hidden");
  }

  // Prerequisites
  const prereqBox = document.getElementById("modal-prereq-box");
  const mandatoryBox = document.getElementById("modal-prereq-mandatory-box");
  const recommendedBox = document.getElementById("modal-prereq-recommended-box");

  if (mod.mandatoryPrereq || mod.recommendedPrereq) {
    prereqBox.classList.remove("hidden");

    if (mod.mandatoryPrereq) {
      mandatoryBox.classList.remove("hidden");
      document.getElementById("modal-prereq-mandatory").textContent = mod.mandatoryPrereq;
    } else {
      mandatoryBox.classList.add("hidden");
    }

    if (mod.recommendedPrereq) {
      recommendedBox.classList.remove("hidden");
      document.getElementById("modal-prereq-recommended").textContent = mod.recommendedPrereq;
    } else {
      recommendedBox.classList.add("hidden");
    }
  } else {
    prereqBox.classList.add("hidden");
  }

  // Dynamic Didaktischer Reformvorschlag
  const proposal = mod.reformProposal;
  
  // Recommended Exams
  const reformExams = document.getElementById("modal-reform-exams");
  reformExams.innerHTML = "";
  proposal.alternativeExams.forEach(ex => {
    const span = document.createElement("span");
    span.className = "px-2.5 py-0.5 bg-blue-100 text-blue-800 font-bold rounded text-[11px] border border-blue-200 shadow-3xs";
    span.textContent = `✨ ${ex}`;
    reformExams.appendChild(span);
  });

  document.getElementById("modal-reform-authentic").textContent = proposal.authenticAssessmentDesc;
  document.getElementById("modal-reform-grading").textContent = proposal.alternativeGradingDesc;

  const benefitBox = document.getElementById("modal-reform-benefit-box");
  if (proposal.pedagogicalBenefit) {
    benefitBox.classList.remove("hidden");
    document.getElementById("modal-reform-benefit").textContent = proposal.pedagogicalBenefit;
  } else {
    benefitBox.classList.add("hidden");
  }

  // Toggle Visibility Animations
  const overlay = document.getElementById("module-modal-overlay");
  const content = document.getElementById("module-modal-content");

  overlay.classList.remove("pointer-events-none");
  overlay.classList.add("opacity-100");
  content.classList.remove("scale-95");
  content.classList.add("scale-100");

  // Rerender icons inside modal safely
  setTimeout(() => safeCreateIcons(), 20);
}

function closeModuleModal() {
  state.activeModuleId = null;

  const overlay = document.getElementById("module-modal-overlay");
  const content = document.getElementById("module-modal-content");

  overlay.classList.remove("opacity-100");
  overlay.classList.add("opacity-0");
  content.classList.remove("scale-100");
  content.classList.add("scale-95");

  setTimeout(() => {
    overlay.classList.add("pointer-events-none");
  }, 200);
}
