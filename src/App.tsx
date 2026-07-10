import { useState, useMemo } from "react";
import { Module, Major } from "./types";
import { MAJORS, MODULES } from "./data";
import { ModuleCard } from "./components/ModuleCard";
import { ModuleDetailsDrawer } from "./components/ModuleDetailsDrawer";
import { PrüfungsAnalyseView } from "./components/PrüfungsAnalyseView";
import { SchwerpunktExplorer } from "./components/SchwerpunktExplorer";
import { GlossarView } from "./components/GlossarView";
import { 
  GraduationCap, 
  Calendar, 
  BarChart3, 
  BookOpen, 
  Search, 
  Filter, 
  Languages, 
  Award, 
  Layers, 
  Clock, 
  Check, 
  X, 
  ChevronRight, 
  Info, 
  CheckCircle2, 
  Sparkles, 
  FileText,
  HelpCircle,
  HelpCircle as ShieldAlert,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  // 1. Core configuration state
  const [selectedDegree, setSelectedDegree] = useState<string>("bwl");
  const [major1, setMajor1] = useState<string>("controlling");
  const [major2Type, setMajor2Type] = useState<"major" | "electives">("major");
  const [major2, setMajor2] = useState<string>("digital_business");
  const [selectedElectives, setSelectedElectives] = useState<string[]>(["711", "712", "714", "715"]);
  const [praxisSplit, setPraxisSplit] = useState<"split" | "sem6" | "sem7">("split");
  const [nmElectiveA, setNmElectiveA] = useState<string>("NM725");
  const [nmElectiveB, setNmElectiveB] = useState<string>("1386");

  // Master Digital Business specific states
  const [dbElective, setDbElective] = useState<string>("3013");
  const [addDbPraxis, setAddDbPraxis] = useState<boolean>(false);
  const [addDbAusland, setAddDbAusland] = useState<boolean>(false);

  // Master Digital & International Marketing specific states
  const [addDimZusatz, setAddDimZusatz] = useState<boolean>(false);

  // Master Personalmanagement specific states
  const [pmElective, setPmElective] = useState<string>("2009");
  const [pmZusatzType, setPmZusatzType] = useState<"praxis" | "ausland">("praxis");

  // Master Unternehmenssteuerung specific states
  const [umMajor, setUmMajor] = useState<"cm" | "ta">("cm");
  const [umElective, setUmElective] = useState<string>("2008");
  const [umZusatzType, setUmZusatzType] = useState<"praxis" | "ausland">("praxis");

  // 2. Tab and search state
  const [activeTab, setActiveTab] = useState<"studienverlauf" | "prüfungen" | "schwerpunkte" | "prüfungsordnung">("studienverlauf");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [examTypeFilter, setExamTypeFilter] = useState<string>("all");
  const [languageFilter, setLanguageFilter] = useState<string>("all");
  const [hasMcFilter, setHasMcFilter] = useState<boolean>(false);
  const [hasCoachingFilter, setHasCoachingFilter] = useState<boolean>(false);

  // 3. Detail drawer state
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);

  // 3b. Accordion and details state
  const [s1Expanded, setS1Expanded] = useState<boolean>(true);
  const [s2Expanded, setS2Expanded] = useState<boolean>(true);

  // 4. Calculate dynamic curriculum
  const userCurriculum = useMemo(() => {
    if (selectedDegree.startsWith("dim_") || selectedDegree === "pm_msc" || selectedDegree === "um_msc") {
      let pflicht = MODULES.filter(m => m.degrees?.includes(selectedDegree) && m.type === "pflicht").map(m => {
        if (addDimZusatz && (m.id.startsWith("4101") || m.id.startsWith("4102") || m.id === "4301" || m.id === "4101_pm" || m.id === "4201" || m.id === "4202")) {
          return { ...m, semester: 4 };
        }
        return m;
      });
      
      const curriculum = [...pflicht];
      
      if (selectedDegree === "pm_msc") {
        const chosenElective = MODULES.find(m => m.id === pmElective);
        if (chosenElective) {
          curriculum.push({ ...chosenElective, semester: 2, type: "wahlpflicht_a" });
        }
      }
      
      if (selectedDegree === "um_msc") {
        const chosenElective = MODULES.find(m => m.id === umElective);
        if (chosenElective) {
          curriculum.push({ ...chosenElective, semester: 2, type: "wahlpflicht_a" });
        }
        
        // Add Schwerpunkte modules for um_msc
        const majorModules = MODULES.filter(m => m.degrees?.includes("um_msc") && m.type === "schwerpunkt" && m.majorId === umMajor);
        majorModules.forEach(m => {
          let mod = { ...m };
          if (addDimZusatz && mod.semester === 3) {
            mod.semester = 4;
          }
          curriculum.push(mod);
        });
      }

      if (addDimZusatz) {
        let zusatzId = "3102_dim";
        if (selectedDegree === "pm_msc") zusatzId = (pmZusatzType === "ausland" ? "3121" : "3120");
        if (selectedDegree === "um_msc") zusatzId = (umZusatzType === "ausland" ? "3121" : "3120");
        const zusatzMod = MODULES.find(m => m.id === zusatzId);
        if (zusatzMod) curriculum.push({ ...zusatzMod, semester: 3 });
      }
      return curriculum;
    }

    if (selectedDegree === "digital_business_msc") {
      let extraSems = 0;
      if (addDbPraxis) extraSems++;
      if (addDbAusland) extraSems++;

      const dbPflicht = MODULES.filter(m => m.degrees?.includes("digital_business_msc") && m.type === "pflicht").map(m => {
        if (extraSems > 0 && (m.id === "4001" || m.id === "4002")) {
          return { ...m, semester: 3 + extraSems };
        }
        return m;
      });
      const chosenElective = MODULES.find(m => m.id === dbElective);
      
      const curriculum = [...dbPflicht];
      if (chosenElective) {
        curriculum.push({ ...chosenElective, semester: 2, type: "wahlpflicht_a" });
      }
      if (addDbPraxis) {
        const praxisMod = MODULES.find(m => m.id === "4003_p");
        if (praxisMod) curriculum.push({ ...praxisMod, semester: 3 });
      }
      if (addDbAusland) {
        const auslandMod = MODULES.find(m => m.id === "4004_a");
        if (auslandMod) curriculum.push({ ...auslandMod, semester: 3 + (addDbPraxis ? 1 : 0) });
      }
      return curriculum;
    }

    if (selectedDegree === "bwl_nm") {
      // 1. Core mandatory modules of NM (marked with bwl_nm)
      const nmPflicht = MODULES.filter(m => m.degrees?.includes("bwl_nm") && m.type === "pflicht");
      
      // 2. Shared standard modules that NM uses
      const sharedIds = ["101", "102", "103", "104", "105", "106", "201", "202", "205", "301", "302", "304", "305", "401", "404", "605", "700"];
      const sharedPflicht = MODULES.filter(m => sharedIds.includes(m.id)).map(m => {
        // In NM: W102 is in Semester 2 (not Semester 1)
        if (m.id === "102") {
          return { ...m, semester: 2 };
        }
        if (m.id === "605" && praxisSplit === "sem7") {
          return { ...m, semester: 7 };
        }
        return m;
      });

      // 3. User's chosen electives for NM
      const electiveAModule = MODULES.find(m => m.id === nmElectiveA);
      const electiveBModule = MODULES.find(m => m.id === nmElectiveB);

      const electives: Module[] = [];
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
      if (m.id === "605" && praxisSplit === "sem7") {
        return { ...m, semester: 7 };
      }
      return m;
    });
    
    // 24 CrP Schwerpunkt 1 modules (always 2 in Sem 4, 2 in Sem 5)
    const s1Modules = MODULES.filter(m => m.majorId === major1);
    const s1 = s1Modules.map((m, idx) => ({
      ...m,
      semester: idx < 2 ? 4 : 5,
      type: "schwerpunkt" as const
    }));
    
    // 24 CrP Schwerpunkt 2 OR Elective modules (always 2 in Sem 5, 2 in Sem 6)
    let s2: Module[] = [];
    if (major2Type === "major") {
      const s2Modules = MODULES.filter(m => m.majorId === major2);
      s2 = s2Modules.map((m, idx) => ({
        ...m,
        semester: idx < 2 ? 5 : 6,
        type: "schwerpunkt" as const
      }));
    } else {
      // Map electives and distribute semesters: first 2 to Sem 5, next 2 to Sem 6
      const electivesList = MODULES.filter(m => selectedElectives.includes(m.id));
      s2 = electivesList.map((el, idx) => {
        const semOverride = idx < 2 ? 5 : 6;
        return {
          ...el,
          semester: semOverride,
          type: el.type // wahlpflicht_a or wahlpflicht_b
        };
      });
    }

    return [...pflicht, ...s1, ...s2];
  }, [selectedDegree, major1, major2Type, major2, selectedElectives, praxisSplit, nmElectiveA, nmElectiveB, dbElective, addDbPraxis, addDbAusland, addDimZusatz, pmElective, pmZusatzType, umMajor, umElective, umZusatzType]);

  // Total configured Credit Points (CrP)
  const totalCrp = useMemo(() => {
    return userCurriculum.reduce((acc, curr) => acc + curr.crp, 0);
  }, [userCurriculum]);

  const targetCrp = useMemo(() => {
    if (selectedDegree.startsWith("dim_") || selectedDegree === "pm_msc" || selectedDegree === "um_msc") {
      return 90 + (addDimZusatz ? 30 : 0);
    }
    if (selectedDegree === "digital_business_msc") {
      return 90 + (addDbPraxis ? 30 : 0) + (addDbAusland ? 30 : 0);
    }
    return selectedDegree === "bwl_nm" ? 224 : 210;
  }, [selectedDegree, addDbPraxis, addDbAusland, addDimZusatz]);

  // List of all unique exam types in the active curriculum for filters
  const allExamTypesInCurriculum = useMemo(() => {
    const types = new Set<string>();
    userCurriculum.forEach(m => {
      m.exams.forEach(e => {
        const type = e.type === "Gründungsprojekt" ? "Projekt" : e.type;
        types.add(type);
      });
    });
    return Array.from(types).sort();
  }, [userCurriculum]);

  // Major details and concrete modules for lower detail section
  const major1Obj = useMemo(() => MAJORS.find(m => m.id === major1), [major1]);
  const major2Obj = useMemo(() => MAJORS.find(m => m.id === major2), [major2]);

  const s1ConcreteModules = useMemo(() => {
    return MODULES.filter(m => m.majorId === major1);
  }, [major1]);

  const s2ConcreteModules = useMemo(() => {
    if (major2Type === "major") {
      return MODULES.filter(m => m.majorId === major2);
    } else {
      return MODULES.filter(m => selectedElectives.includes(m.id));
    }
  }, [major2Type, major2, selectedElectives]);

  // Filtered modules for current view
  const filteredModulesMap = useMemo(() => {
    const matches: Record<string, boolean> = {};

    userCurriculum.forEach(mod => {
      let isMatch = true;

      // 1. Search Query
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const nameMatch = mod.name.toLowerCase().includes(query);
        const codeMatch = mod.id.toLowerCase().includes(query);
        const contentsMatch = mod.contents?.toLowerCase().includes(query) || false;
        const objectivesMatch = mod.objectives?.toLowerCase().includes(query) || false;
        const responsibleMatch = mod.responsible?.toLowerCase().includes(query) || false;
        
        if (!nameMatch && !codeMatch && !contentsMatch && !objectivesMatch && !responsibleMatch) {
          isMatch = false;
        }
      }

      // 2. Exam Type Filter
      if (examTypeFilter !== "all" && isMatch) {
        const typeMatch = mod.exams.some(e => {
          const type = e.type === "Gründungsprojekt" ? "Projekt" : e.type;
          return type === examTypeFilter;
        });
        if (!typeMatch) isMatch = false;
      }

      // 3. Language Filter
      if (languageFilter !== "all" && isMatch) {
        if (mod.language !== languageFilter) isMatch = false;
      }

      // 4. MC Filter
      if (hasMcFilter && isMatch) {
        if (!mod.hasMc) isMatch = false;
      }

      // 5. Coaching Filter
      if (hasCoachingFilter && isMatch) {
        if (!mod.coaching) isMatch = false;
      }

      matches[mod.id] = isMatch;
    });

    return matches;
  }, [userCurriculum, searchTerm, examTypeFilter, languageFilter, hasMcFilter, hasCoachingFilter]);

  // Count of matches
  const matchCount = useMemo(() => {
    return Object.values(filteredModulesMap).filter(v => v).length;
  }, [filteredModulesMap]);

  // Active electives validation checks
  const electivesValidation = useMemo(() => {
    if (major2Type !== "electives") return { valid: true, error: "" };
    
    // Check if exactly 4 are selected
    if (selectedElectives.length !== 4) {
      return { 
        valid: false, 
        error: `Bitte wählen Sie genau 4 Module aus (aktuell gewählt: ${selectedElectives.length}).` 
      };
    }

    // Check Gießen category B rule: Max 2 from Category B
    const catBCount = selectedElectives.filter(id => {
      const mod = MODULES.find(m => m.id === id);
      return mod && mod.type === "wahlpflicht_b";
    }).length;

    if (catBCount > 2) {
      return {
        valid: false,
        error: `Fehler: Maximal zwei Fremdsprachen-/Mentoring-Module (Kategorie B) sind laut PO § 1 (3) zulässig (aktuell gewählt: ${catBCount}).`
      };
    }

    return { valid: true, error: "" };
  }, [major2Type, selectedElectives]);

  // Select/Deselect elective helper
  const handleElectiveToggle = (id: string) => {
    if (selectedElectives.includes(id)) {
      setSelectedElectives(selectedElectives.filter(eid => eid !== id));
    } else {
      setSelectedElectives([...selectedElectives, id]);
    }
  };

  // Helper to determine if an abstract card should be highlighted based on active search/filters
  const isAbstractCardHighlighted = (
    category: "schwerpunkt1" | "schwerpunkt2" | "praxis",
    slots: number[]
  ) => {
    const isFilterActive = !!(searchTerm || examTypeFilter !== "all" || languageFilter !== "all" || hasMcFilter || hasCoachingFilter);
    if (!isFilterActive) return true;

    if (category === "schwerpunkt1") {
      return slots.some(idx => {
        const mod = s1ConcreteModules[idx];
        return mod && (filteredModulesMap[mod.id] ?? false);
      });
    } else if (category === "schwerpunkt2") {
      return slots.some(idx => {
        const mod = s2ConcreteModules[idx];
        return mod && (filteredModulesMap[mod.id] ?? false);
      });
    } else if (category === "praxis") {
      return !!(filteredModulesMap["605"]);
    }
    return true;
  };

  // Helper to render beautiful abstract cards for Semesters 4 to 7
  const renderAbstractCard = (
    typeLabel: string,
    title: string,
    subtitle: string,
    crp: string,
    sws: string,
    category: "schwerpunkt1" | "schwerpunkt2" | "praxis",
    slots: number[],
    targetModuleId?: string
  ) => {
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

    const isHighlighted = isAbstractCardHighlighted(category, slots);

    const handleClick = () => {
      if (targetModuleId) {
        const mod = MODULES.find(m => m.id === targetModuleId);
        if (mod) setSelectedModule(mod);
      } else {
        document.getElementById("specialties-details-section")?.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <motion.div
        onClick={handleClick}
        className={`relative flex flex-col justify-between p-3.5 rounded border text-left cursor-pointer transition-all duration-200 ${borderStyle} ${
          isHighlighted ? "opacity-100 ring-1 ring-blue-500/10 shadow-3xs" : "opacity-45"
        }`}
        whileHover={{ y: -1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold border ${badgeStyle}`}>
              {typeLabel}
            </span>
            <span className="text-[10px] font-bold text-slate-400 font-mono">Strukturslot</span>
          </div>

          <h4 className={`font-sans font-extrabold text-[13px] leading-snug min-h-[36px] ${textStyle} mt-1`}>
            {title}
          </h4>
          
          <p className="text-[11px] text-slate-500 font-semibold line-clamp-1 mb-2">
            {subtitle}
          </p>
        </div>

        <div className="mt-2.5 pt-2 border-t border-slate-200/50 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-700">{crp}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{sws}</span>
          </div>
          <span className="text-[10px] font-bold text-blue-500 hover:underline">
            {targetModuleId ? "Details" : "Auswahl \u2193"}
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900" id="thm-dashboard-root">
      
      {/* Top Professional Header Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs" id="main-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* THM Brand Logo Replica */}
            <div className="flex flex-col items-center justify-center bg-blue-600 text-white font-sans font-bold px-3 py-1.5 rounded shadow-sm shrink-0">
              <span className="text-lg tracking-tight leading-none">THM</span>
              <span className="text-[8px] uppercase tracking-widest leading-none mt-0.5 font-mono">Wirtschaft</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600 shrink-0" />
                <select
                  id="degree-select"
                  value={selectedDegree}
                  onChange={(e) => {
                    const nextVal = e.target.value;
                    setSelectedDegree(nextVal);
                    if (nextVal !== "bwl" && activeTab === "schwerpunkte") {
                      setActiveTab("studienverlauf");
                    }
                  }}
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded py-1 px-2.5 text-sm font-bold text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all cursor-pointer shadow-3xs"
                >
                  <option value="bwl">Betriebswirtschaft B.Sc. (7 Sem.)</option>
                  <option value="bwl_nm">Nachhaltigkeitsmanagement B.Sc. (7 Sem.)</option>
                  <option value="digital_business_msc">Digital Business M.Sc. (3 Sem.)</option>
                  <option value="dim_digital_msc">Digital & Int. Marketing M.Sc. (SP Digital)</option>
                  <option value="dim_international_msc">Digital & Int. Marketing M.Sc. (SP Int.)</option>
                  <option value="pm_msc">Personalmanagement M.Sc. (3 Sem.)</option>
                  <option value="um_msc">Unternehmenssteuerung M.Sc. (3 Sem.)</option>
                </select>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
                  {selectedDegree === "digital_business_msc" ? "PO 2019 / V3" : selectedDegree.startsWith("dim_") ? "PO 2022 / V4" : selectedDegree === "pm_msc" ? "PO 2016 / V8" : selectedDegree === "um_msc" ? "PO 2016 / V6" : "PO 2025"}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Interaktives Studien- & Prüfungsanalyse-Dashboard | Campus Gießen
              </p>
            </div>
          </div>

          {/* Quick config stats summary */}
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded border border-slate-200">
            <div className="text-right px-2">
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-tight">Gesamt-CrP</span>
              <span className={`text-base font-mono font-bold ${totalCrp === targetCrp ? "text-blue-600" : "text-amber-600"}`}>
                {totalCrp} / {targetCrp}
              </span>
            </div>
            <div className="border-l border-slate-200 h-7" />
            <div className="text-right px-2">
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-tight">Module</span>
              <span className="text-base font-mono font-bold text-slate-800">
                {userCurriculum.length}
              </span>
            </div>
            <div className="border-l border-slate-200 h-7" />
            <div className="text-right px-2">
              <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-tight">Coaching (SK)</span>
              <span className="text-base font-mono font-bold text-slate-800">
                {selectedDegree === "digital_business_msc" ? "0 Module" : (selectedDegree === "bwl_nm" ? "3 Module" : "4 Module")}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Configuration & Controls Section */}
      <section className="bg-slate-900 text-white border-b border-slate-800 p-5" id="curriculum-configurator">
        <div className="max-w-7xl mx-auto space-y-3.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
            <div>
              <h2 className="text-sm font-bold flex items-center gap-1.5 text-white uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0" /> Personalisierter Studienplaner-Konfigurator
              </h2>
              <p className="text-[11px] text-slate-400">
                Passen Sie Ihre Studienschwerpunkte an. Die gesamte Semesterübersicht und die Auswertungen aktualisieren sich live!
              </p>
            </div>
            
            {/* Dynamic Validation Warning */}
            {totalCrp !== targetCrp && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 text-[11px] border border-amber-500/20 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Auswahl unvollständig für exakt {targetCrp} CrP</span>
              </div>
            )}
            {totalCrp === targetCrp && (selectedDegree === "bwl_nm" || electivesValidation.valid) && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 text-[11px] border border-blue-500/20 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Konfiguration regelkonform ({targetCrp} CrP)</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {selectedDegree.startsWith("dim_") ? (
              <>
                {/* DIM Curriculum Structure info */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Curriculum Struktur
                  </label>
                  <div className="bg-slate-950/80 p-2 rounded border border-slate-800 text-xs text-slate-300 font-semibold h-[38px] flex items-center justify-center">
                    3 Semester • Master (M.Sc.)
                  </div>
                </div>

                {/* Optionale Praxisphase/Ausland Checkbox */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Zusatzsemester
                  </label>
                  <div className="flex items-center h-[38px] px-3 bg-slate-950/80 rounded border border-slate-800">
                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-slate-300 font-medium">
                      <input
                        type="checkbox"
                        checked={addDimZusatz}
                        onChange={(e) => setAddDimZusatz(e.target.checked)}
                        className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                      />
                      <span>Praxis / Ausland (+30 CrP)</span>
                    </label>
                  </div>
                </div>
              </>
            ) : selectedDegree === "pm_msc" ? (
              <>
                <div className="space-y-1 col-span-1 sm:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Wahlpflichtmodul (2. Semester)
                  </label>
                  <select
                    value={pmElective}
                    onChange={(e) => setPmElective(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                  >
                    {MODULES.filter(m => m.degrees?.includes("pm_msc") && m.type === "wahlpflicht_a").map(m => (
                      <option key={m.id} value={m.id}>{m.name} ({m.crp} CrP)</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Zusatzsemester
                  </label>
                  <div className="flex items-center h-[38px] px-3 bg-slate-950/80 rounded border border-slate-800 gap-3">
                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-slate-300 font-medium">
                      <input
                        type="checkbox"
                        checked={addDimZusatz}
                        onChange={(e) => setAddDimZusatz(e.target.checked)}
                        className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                      />
                      <span>Aktivieren</span>
                    </label>
                    {addDimZusatz && (
                      <select
                        value={pmZusatzType}
                        onChange={(e) => setPmZusatzType(e.target.value as "praxis" | "ausland")}
                        className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                      >
                        <option value="praxis">Praxisphase</option>
                        <option value="ausland">Auslandssemester</option>
                      </select>
                    )}
                  </div>
                </div>
              </>
            ) : selectedDegree === "um_msc" ? (
              <>
                <div className="space-y-1 col-span-1 sm:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Schwerpunkt
                  </label>
                  <select
                    value={umMajor}
                    onChange={(e) => setUmMajor(e.target.value as "cm" | "ta")}
                    className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                  >
                    <option value="cm">Controlling & Management</option>
                    <option value="ta">Tax & Accounting</option>
                  </select>
                </div>
                <div className="space-y-1 col-span-1 sm:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Wahlpflichtmodul (2. Semester)
                  </label>
                  <select
                    value={umElective}
                    onChange={(e) => setUmElective(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                  >
                    {MODULES.filter(m => m.degrees?.includes("um_msc") && m.type === "wahlpflicht_a").map(m => (
                      <option key={m.id} value={m.id}>{m.name} ({m.crp} CrP)</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Zusatzsemester
                  </label>
                  <div className="flex items-center h-[38px] px-3 bg-slate-950/80 rounded border border-slate-800 gap-3">
                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-slate-300 font-medium">
                      <input
                        type="checkbox"
                        checked={addDimZusatz}
                        onChange={(e) => setAddDimZusatz(e.target.checked)}
                        className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                      />
                      <span>Aktivieren</span>
                    </label>
                    {addDimZusatz && (
                      <select
                        value={umZusatzType}
                        onChange={(e) => setUmZusatzType(e.target.value as "praxis" | "ausland")}
                        className="bg-transparent text-xs text-white focus:outline-none cursor-pointer"
                      >
                        <option value="praxis">Praxisphase</option>
                        <option value="ausland">Auslandssemester</option>
                      </select>
                    )}
                  </div>
                </div>
              </>
            ) : selectedDegree === "digital_business_msc" ? (
              <>
                {/* Master Elective Selection */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Wahlpflichtmodul (2. Semester)
                  </label>
                  <select
                    value={dbElective}
                    onChange={(e) => setDbElective(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                  >
                    {MODULES.filter(m => m.degrees?.includes("digital_business_msc") && m.type === "wahlpflicht_a").map(m => (
                      <option key={m.id} value={m.id}>{m.name} ({m.crp} CrP)</option>
                    ))}
                  </select>
                </div>

                {/* Optionale Praxisphase Checkbox */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Optionale Praxisphase
                  </label>
                  <div className="flex items-center h-[38px] px-3 bg-slate-950/80 rounded border border-slate-800">
                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-slate-300 font-medium">
                      <input
                        type="checkbox"
                        checked={addDbPraxis}
                        onChange={(e) => setAddDbPraxis(e.target.checked)}
                        className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                      />
                      <span>Zusatz-Praxissemester (+30 CrP)</span>
                    </label>
                  </div>
                </div>

                {/* Optionales Auslandssemester Checkbox */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Optionales Auslandssemester
                  </label>
                  <div className="flex items-center h-[38px] px-3 bg-slate-950/80 rounded border border-slate-800">
                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-slate-300 font-medium">
                      <input
                        type="checkbox"
                        checked={addDbAusland}
                        onChange={(e) => setAddDbAusland(e.target.checked)}
                        className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                      />
                      <span>Zusatz-Auslandssemester (+30 CrP)</span>
                    </label>
                  </div>
                </div>

                {/* Master Curriculum Structure info */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Curriculum Struktur
                  </label>
                  <div className="bg-slate-950/80 p-2 rounded border border-slate-800 text-xs text-slate-300 font-semibold h-[38px] flex items-center justify-center">
                    3 Semester • Master (M.Sc.)
                  </div>
                </div>
              </>
            ) : selectedDegree === "bwl_nm" ? (
              <>
                {/* NM Wahlpflichtpool A */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Wahlpflichtpool A (Nachhaltigkeit)
                  </label>
                  <select
                    value={nmElectiveA}
                    onChange={(e) => setNmElectiveA(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                  >
                    {MODULES.filter(m => m.degrees?.includes("bwl_nm") && m.type === "wahlpflicht_a").map(m => (
                      <option key={m.id} value={m.id}>{m.name} ({m.crp} CrP)</option>
                    ))}
                  </select>
                </div>

                {/* NM Wahlpflichtpool B */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Wahlpflichtpool B (Interdisziplinär)
                  </label>
                  <select
                    value={nmElectiveB}
                    onChange={(e) => setNmElectiveB(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                  >
                    {MODULES.filter(m => m.degrees?.includes("bwl_nm") && m.type === "wahlpflicht_b").map(m => (
                      <option key={m.id} value={m.id}>{m.name} ({m.crp} CrP)</option>
                    ))}
                  </select>
                </div>

                {/* NM Curriculum Structure info */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Curriculum Struktur
                  </label>
                  <div className="bg-slate-950/80 p-2 rounded border border-slate-800 text-xs text-slate-300 font-semibold h-[38px] flex items-center justify-center">
                    7 Semester • Interdisziplinär
                  </div>
                </div>

                {/* Praxisphase / Auslandssemester Distribution */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Praxisphase Durchführung
                  </label>
                  <select
                    value={praxisSplit}
                    onChange={(e) => setPraxisSplit(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                  >
                    <option value="split">Geteilt (Standard: 12 CP Sem. 6 / 18 CP Sem. 7)</option>
                    <option value="sem6">Vollständig im 6. Semester (30 CP)</option>
                    <option value="sem7">Vollständig im 7. Semester (30 CP)</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                {/* Schwerpunkt 1 Selection */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    1. Schwerpunkt (Hauptfach)
                  </label>
                  <select
                    value={major1}
                    onChange={(e) => setMajor1(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                  >
                    {MAJORS.map(m => (
                      <option key={m.id} value={m.id}>{m.name}</option>
                    ))}
                  </select>
                </div>

                {/* Schwerpunkt 2 Type Selection */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    2. Wahlbereich Option
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 bg-slate-950 p-1 rounded border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setMajor2Type("major")}
                      className={`py-1.5 rounded text-xs font-bold transition-all ${
                        major2Type === "major" 
                          ? "bg-blue-600 text-white shadow-xs" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      2. Schwerpunkt
                    </button>
                    <button
                      type="button"
                      onClick={() => setMajor2Type("electives")}
                      className={`py-1.5 rounded text-xs font-bold transition-all ${
                        major2Type === "electives" 
                          ? "bg-blue-600 text-white shadow-xs" 
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Freie Wahlpflicht
                    </button>
                  </div>
                </div>

                {/* Schwerpunkt 2 Select OR Elective Status */}
                <div className="space-y-1">
                  {major2Type === "major" ? (
                    <>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        2. Schwerpunkt (Nebenfach)
                      </label>
                      <select
                        value={major2}
                        onChange={(e) => setMajor2(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                      >
                        {MAJORS.filter(m => m.id !== major1).map(m => (
                          <option key={m.id} value={m.id}>{m.name}</option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Wahlpflichtmodule (4 Stück gewählt)
                      </label>
                      <div className="bg-slate-950/80 p-2 rounded border border-slate-800 flex items-center justify-between text-xs h-[38px]">
                        <span className="text-slate-300 truncate font-medium">
                          {selectedElectives.length} gewählt (Kat. A: {selectedElectives.filter(id => MODULES.find(m => m.id === id)?.type === "wahlpflicht_a").length}, Kat. B: {selectedElectives.filter(id => MODULES.find(m => m.id === id)?.type === "wahlpflicht_b").length})
                        </span>
                        <a href="#elective-checklist-section" className="text-blue-400 hover:underline font-bold">
                          Ändern &rarr;
                        </a>
                      </div>
                    </>
                  )}
                </div>

                {/* Praxisphase / Auslandssemester Distribution */}
                <div className="space-y-1">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Praxisphase Durchführung
                  </label>
                  <select
                    value={praxisSplit}
                    onChange={(e) => setPraxisSplit(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded py-2 px-3 text-xs text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium cursor-pointer"
                  >
                    <option value="split">Geteilt (Standard: 12 CP Sem. 6 / 18 CP Sem. 7)</option>
                    <option value="sem6">Vollständig im 6. Semester (30 CP)</option>
                    <option value="sem7">Vollständig im 7. Semester (30 CP)</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Show warning if chosen electives are invalid */}
          {!electivesValidation.valid && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-300 rounded-lg text-xs flex items-center gap-2">
              <AlertCircle className="w-4.5 h-4.5 shrink-0" />
              <span>{electivesValidation.error}</span>
            </div>
          )}
        </div>
      </section>

      {/* Main Tab bar navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-[71px] sm:top-[75px] z-20 shadow-xs" id="main-navigation-tabs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-4 no-scrollbar">
            <button
              onClick={() => setActiveTab("studienverlauf")}
              className={`py-3 px-1 inline-flex items-center gap-2 border-b-2 font-sans text-xs sm:text-xs uppercase tracking-wider font-bold shrink-0 transition-all ${
                activeTab === "studienverlauf"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Studienverlauf & Semester
            </button>
            <button
              onClick={() => setActiveTab("prüfungen")}
              className={`py-3 px-1 inline-flex items-center gap-2 border-b-2 font-sans text-xs sm:text-xs uppercase tracking-wider font-bold shrink-0 transition-all ${
                activeTab === "prüfungen"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              Prüfungsformen-Analyse (Auswertungen)
            </button>
            {selectedDegree === "bwl" && (
              <button
                onClick={() => setActiveTab("schwerpunkte")}
                className={`py-3 px-1 inline-flex items-center gap-2 border-b-2 font-sans text-xs sm:text-xs uppercase tracking-wider font-bold shrink-0 transition-all ${
                  activeTab === "schwerpunkte"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Schwerpunkte Explorer
              </button>
            )}
            <button
              onClick={() => setActiveTab("prüfungsordnung")}
              className={`py-3 px-1 inline-flex items-center gap-2 border-b-2 font-sans text-xs sm:text-xs uppercase tracking-wider font-bold shrink-0 transition-all ${
                activeTab === "prüfungsordnung"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Prüfungsregeln & Glossar
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* VIEW 1: CURRICULUM VIEW (STUDIENVERLAUF) */}
        {activeTab === "studienverlauf" && (
          <div className="space-y-6">
            
            {/* Embedded Search and Filters header */}
            <div className="p-3 bg-white rounded border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search */}
              <div className="relative w-full md:max-w-xs">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Modulname, Nr., Inhalt suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded py-1.5 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all font-medium"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="p-1 rounded-full hover:bg-slate-200 absolute right-2.5 top-1.5"
                  >
                    <X className="w-3 h-3 text-slate-500" />
                  </button>
                )}
              </div>

              {/* Filters list */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                {/* Exam type */}
                <select
                  value={examTypeFilter}
                  onChange={(e) => setExamTypeFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded py-1.5 px-3 text-xs text-slate-700 focus:outline-none focus:border-blue-500 transition-all font-medium"
                >
                  <option value="all">Alle Prüfungsformen</option>
                  {allExamTypesInCurriculum.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>

                {/* Language */}
                <select
                  value={languageFilter}
                  onChange={(e) => setLanguageFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded py-1.5 px-3 text-xs text-slate-700 focus:outline-none focus:border-blue-500 transition-all font-medium"
                >
                  <option value="all">Alle Sprachen</option>
                  <option value="Deutsch">Deutsch</option>
                  <option value="Englisch">Englisch</option>
                  <option value="Deutsch/Englisch">Deutsch/Englisch</option>
                </select>

                {/* Toggles */}
                <div className="flex items-center gap-4">
                  <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs text-slate-600 font-medium">
                    <input
                      type="checkbox"
                      checked={hasMcFilter}
                      onChange={(e) => setHasMcFilter(e.target.checked)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                    />
                    <span>Antwort-Wahl (MC)</span>
                  </label>
                  <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs text-slate-600 font-medium">
                    <input
                      type="checkbox"
                      checked={hasCoachingFilter}
                      onChange={(e) => setHasCoachingFilter(e.target.checked)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
                    />
                    <span>Soft Skills</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Match info counter */}
            {(searchTerm || examTypeFilter !== "all" || languageFilter !== "all" || hasMcFilter || hasCoachingFilter) && (
              <div className="text-xs text-slate-500 font-medium px-1 flex items-center justify-between">
                <span>Filter aktiv: <strong>{matchCount} von {userCurriculum.length}</strong> Modulen entsprechen den Kriterien</span>
                <button 
                  onClick={() => {
                    setSearchTerm("");
                    setExamTypeFilter("all");
                    setLanguageFilter("all");
                    setHasMcFilter(false);
                    setHasCoachingFilter(false);
                  }}
                  className="text-blue-600 hover:underline font-bold"
                >
                  Filter zurücksetzen
                </button>
              </div>
            )}

            {/* Horizontal scrolling Curriculum lane grid */}
            <div className="overflow-x-auto pb-4 pt-1 select-none" id="curriculum-horizontal-scroll">
              <div className={`flex gap-4 ${(selectedDegree === "digital_business_msc" || selectedDegree.startsWith("dim_") || selectedDegree === "pm_msc" || selectedDegree === "um_msc") ? "min-w-[900px]" : "min-w-[1500px]"}`}>
                {/* Loop semesters (3-5 for Master, 7 for Bachelor) */}
                {(() => {
                  if (selectedDegree === "digital_business_msc") {
                    let sems = 3;
                    if (addDbPraxis) sems++;
                    if (addDbAusland) sems++;
                    return Array.from({ length: sems }, (_, i) => i + 1);
                  }
                  if (selectedDegree.startsWith("dim_") || selectedDegree === "pm_msc" || selectedDegree === "um_msc") {
                    return addDimZusatz ? [1, 2, 3, 4] : [1, 2, 3];
                  }
                  return [1, 2, 3, 4, 5, 6, 7];
                })().map(sem => {
                  let semesterModules: any[] = [];
                  let semesterCrp = 0;
                  let semesterSws = 0;

                  if (selectedDegree === "digital_business_msc" || selectedDegree.startsWith("dim_") || selectedDegree === "pm_msc" || selectedDegree === "um_msc") {
                    semesterModules = userCurriculum.filter(m => m.semester === sem);
                    semesterCrp = semesterModules.reduce((acc, curr) => acc + curr.crp, 0);
                    semesterSws = semesterModules.reduce((acc, curr) => acc + curr.sws, 0);
                  } else if (selectedDegree === "bwl_nm") {
                    semesterModules = userCurriculum.filter(m => m.semester === sem && m.id !== "605");
                    semesterCrp = semesterModules.reduce((acc, curr) => acc + curr.crp, 0);
                    semesterSws = semesterModules.reduce((acc, curr) => acc + curr.sws, 0);
                    
                    if (sem === 6 && (praxisSplit === "split" || praxisSplit === "sem6")) {
                      semesterCrp += (praxisSplit === "split" ? 12 : 30);
                    }
                    if (sem === 7 && (praxisSplit === "split" || praxisSplit === "sem7")) {
                      semesterCrp += (praxisSplit === "split" ? 18 : 30);
                    }
                  } else {
                    if (sem === 1 || sem === 2 || sem === 3) {
                      semesterModules = userCurriculum.filter(m => m.semester === sem);
                      semesterCrp = semesterModules.reduce((acc, curr) => acc + curr.crp, 0);
                      semesterSws = semesterModules.reduce((acc, curr) => acc + curr.sws, 0);
                    } else if (sem === 4) {
                      const pflicht4 = userCurriculum.filter(m => m.semester === 4 && m.type === "pflicht");
                      semesterModules = pflicht4;
                      semesterCrp = 21 + 12; // 21 Pflicht (401-404) + 12 S1 Modul 1 & 2
                      semesterSws = pflicht4.reduce((acc, curr) => acc + curr.sws, 0) + 8; // Pflicht + 8 SWS S1
                    } else if (sem === 5) {
                      const pflicht5 = userCurriculum.filter(m => m.semester === 5 && m.type === "pflicht");
                      semesterModules = pflicht5;
                      semesterCrp = 5 + 12 + 12; // 5 Pflicht (505) + 12 S1 Modul 3 & 4 + 12 S2 Modul 1 & 2
                      semesterSws = pflicht5.reduce((acc, curr) => acc + curr.sws, 0) + 8 + 8; // Pflicht + 8 SWS S1 + 8 SWS S2
                    } else if (sem === 6) {
                      const pflicht6 = userCurriculum.filter(m => m.semester === 6 && m.type === "pflicht" && m.id !== "605");
                      semesterModules = pflicht6; // Planspiel 601
                      let praxisCrp = 0;
                      if (praxisSplit === "split") praxisCrp = 12;
                      else if (praxisSplit === "sem6") praxisCrp = 30;
                      semesterCrp = 5 + 12 + praxisCrp; // 5 Planspiel + 12 S2 Modul 3 & 4 + praxisCrp
                      semesterSws = pflicht6.reduce((acc, curr) => acc + curr.sws, 0) + 8; // Planspiel (4 SWS) + 8 SWS S2 Modul 3 & 4
                    } else if (sem === 7) {
                      const pflicht7 = userCurriculum.filter(m => m.semester === 7 && m.type === "pflicht" && m.id !== "605");
                      semesterModules = pflicht7; // Bachelorthesis 700
                      let praxisCrp = 0;
                      if (praxisSplit === "split") praxisCrp = 18;
                      else if (praxisSplit === "sem7") praxisCrp = 30;
                      semesterCrp = 12 + praxisCrp; // 12 Thesis + praxisCrp
                      semesterSws = pflicht7.reduce((acc, curr) => acc + curr.sws, 0); // Thesis (0 SWS), no S2 modules
                    }
                  }

                  return (
                    <div 
                      key={sem} 
                      className="w-[280px] shrink-0 flex flex-col space-y-3"
                      id={`semester-column-${sem}`}
                    >
                      {/* Semester Header */}
                      <div className="p-3 bg-white rounded border border-slate-200/80 flex items-center justify-between">
                        <div>
                          <h3 className="font-sans font-extrabold text-slate-900 text-sm">
                            {sem}. Semester
                          </h3>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            Studienabschnitt
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="block font-mono text-xs font-bold text-blue-600">{semesterCrp} CrP</span>
                          <span className="block text-[9px] text-slate-400 font-bold uppercase">{semesterSws} SWS</span>
                        </div>
                      </div>

                      {/* Semester Modules list */}
                      <div className="space-y-2.5">
                        {semesterModules.map(mod => {
                          const isHighlighted = filteredModulesMap[mod.id] ?? true;
                          
                          return (
                            <ModuleCard
                                key={mod.id}
                                module={mod}
                                onClick={() => setSelectedModule(mod)}
                                isHighlighted={isHighlighted}
                            />
                          );
                        })}

                        {/* For semesters 4-7, append the abstract cards */}
                        {selectedDegree === "bwl" && sem === 4 && (
                          <>
                            {renderAbstractCard(
                              "Schwerpunkt 1 (Hauptfach)",
                              `Modul 1 & 2`,
                              major1Obj ? major1Obj.name : "Schwerpunkt 1",
                              "12 CrP",
                              "8 SWS",
                              "schwerpunkt1",
                              [0, 1]
                            )}
                          </>
                        )}

                        {selectedDegree === "bwl" && sem === 5 && (
                          <>
                            {renderAbstractCard(
                              "Schwerpunkt 1 (Hauptfach)",
                              `Modul 3 & 4`,
                              major1Obj ? major1Obj.name : "Schwerpunkt 1",
                              "12 CrP",
                              "8 SWS",
                              "schwerpunkt1",
                              [2, 3]
                            )}
                            {renderAbstractCard(
                              major2Type === "major" ? "Schwerpunkt 2 (Nebenfach)" : "Wahlpflichtbereich",
                              `Modul 1 & 2`,
                              major2Type === "major" ? (major2Obj ? major2Obj.name : "Schwerpunkt 2") : "Freie Wahlpflicht",
                              "12 CrP",
                              "8 SWS",
                              "schwerpunkt2",
                              [0, 1]
                            )}
                          </>
                        )}

                        {selectedDegree === "bwl" && sem === 6 && (
                          <>
                            {renderAbstractCard(
                              major2Type === "major" ? "Schwerpunkt 2 (Nebenfach)" : "Wahlpflichtbereich",
                              `Modul 3 & 4`,
                              major2Type === "major" ? (major2Obj ? major2Obj.name : "Schwerpunkt 2") : "Freie Wahlpflicht",
                              "12 CrP",
                              "8 SWS",
                              "schwerpunkt2",
                              [2, 3]
                            )}
                          </>
                        )}

                        {/* Praxis phase abstract cards */}
                        {selectedDegree !== "digital_business_msc" && sem === 6 && (praxisSplit === "split" || praxisSplit === "sem6") && (
                          renderAbstractCard(
                            "Praxisabschnitt",
                            praxisSplit === "split" ? "Praxisphase / Auslandssemester (Teil 1)" : "Praxisphase / Auslandssemester",
                            praxisSplit === "split" ? "Praktikum oder Studienaufenthalt" : "Vollzeit-Praktikum oder Studienaufenthalt",
                            praxisSplit === "split" ? "12 CrP" : "30 CrP",
                            "0 SWS",
                            "praxis",
                            [],
                            "605"
                          )
                        )}

                        {selectedDegree !== "digital_business_msc" && sem === 7 && (praxisSplit === "split" || praxisSplit === "sem7") && (
                          renderAbstractCard(
                            "Praxisabschnitt",
                            praxisSplit === "split" ? "Praxisphase / Auslandssemester (Teil 2)" : "Praxisphase / Auslandssemester",
                            praxisSplit === "split" ? "Reflexion & Berichterstellung" : "Vollzeit-Praktikum oder Studienaufenthalt",
                            praxisSplit === "split" ? "18 CrP" : "30 CrP",
                            "0 SWS",
                            "praxis",
                            [],
                            "605"
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic checklist panel for free electives selection if active */}
            {major2Type === "electives" && (
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4" id="elective-checklist-section">
                <div className="border-b border-slate-100 pb-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-display font-extrabold text-slate-800 text-base">
                        🎯 Freie Wahlpflichtfächer-Auswahl (24 Creditpoints benötigt)
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Wählen Sie exakt <strong>4 Module</strong> aus dem offiziellen Katalog. Maximal 2 Fremdsprachen-/Mentoringmodule (Kat. B) sind erlaubt.
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-thm/10 text-thm font-mono font-black text-xs rounded-full">
                        {selectedElectives.length} / 4 Module gewählt
                      </span>
                    </div>
                  </div>
                </div>

                {/* Checklist grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {MODULES.filter(m => m.type === "wahlpflicht_a" || m.type === "wahlpflicht_b").map(mod => {
                    const isSelected = selectedElectives.includes(mod.id);
                    const catLabel = mod.type === "wahlpflicht_a" ? "Kategorie A (Fachvertiefung)" : "Kategorie B (Sprache/Mentoring)";
                    
                    return (
                      <div
                        key={mod.id}
                        onClick={() => handleElectiveToggle(mod.id)}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3 ${
                          isSelected
                            ? "border-thm bg-thm/5 shadow-2xs"
                            : "border-slate-100 bg-white hover:border-slate-300"
                        }`}
                      >
                        <div className={`mt-0.5 w-4.5 h-4.5 rounded flex items-center justify-center shrink-0 border ${
                          isSelected ? "bg-thm border-thm text-white" : "border-slate-300 bg-slate-50"
                        }`}>
                          {isSelected && <Check className="w-3 h-3" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <span className="font-mono text-[10px] font-bold text-slate-400">Nr. {mod.id}</span>
                            <span className={`text-[8px] px-1.5 py-0.2 rounded font-semibold border ${
                              mod.type === "wahlpflicht_a" ? "bg-indigo-50 border-indigo-100 text-indigo-700" : "bg-purple-50 border-purple-100 text-purple-700"
                            }`} title={catLabel}>
                              {mod.type === "wahlpflicht_a" ? "Kat. A" : "Kat. B"}
                            </span>
                          </div>
                          <span className="font-bold text-slate-700 text-xs block leading-snug truncate">
                            {mod.name}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-1 block">
                            {mod.exams[0]?.type || "Prüfung"} • {mod.crp} CrP
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Schwerpunkt- & Wahlpflichtmodule im Detail accordion section */}
            {selectedDegree === "bwl" && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5" id="specialties-details-section">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="font-sans font-black text-slate-900 text-base tracking-tight flex items-center gap-2">
                    <GraduationCap className="w-5.5 h-5.5 text-blue-600" />
                    Detaillierter Modulkatalog der Schwerpunkte (48 CrP)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Unterstützt die Gießener PO 2025: Klicken Sie auf ein Modul unten, um Beschreibungen, Leistungskriterien, Kompetenzziele und didaktische Reformvorschläge im Detail zu betrachten.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Accordion 1: Schwerpunkt 1 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/20">
                  <button 
                    onClick={() => setS1Expanded(!s1Expanded)}
                    className="w-full px-4 py-3.5 bg-slate-100/50 hover:bg-slate-100 transition-colors flex items-center justify-between text-left border-b border-slate-200/60"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-0.5">Hauptfach (24 CrP)</span>
                      <h4 className="font-sans font-bold text-slate-800 text-sm">
                        Schwerpunkt 1: {major1Obj ? major1Obj.name : "Geladen..."}
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                        4 Module
                      </span>
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${s1Expanded ? "rotate-90" : ""}`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {s1Expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="p-4 space-y-3">
                          <p className="text-[11px] text-slate-500 leading-relaxed italic mb-1.5 border-b border-slate-100 pb-2">
                            {major1Obj?.description}
                          </p>
                          <div className="space-y-2">
                            {s1ConcreteModules.map(mod => {
                              const isHighlighted = filteredModulesMap[mod.id] ?? true;
                              return (
                                <div
                                  key={mod.id}
                                  onClick={() => setSelectedModule(mod)}
                                  className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                                    isHighlighted
                                      ? "border-slate-200 hover:border-blue-500 hover:bg-blue-50/5 bg-white"
                                      : "border-slate-150 bg-white opacity-40 hover:opacity-100"
                                  }`}
                                >
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-1.5 mb-1">
                                      <span className="font-mono text-[9px] font-bold text-slate-400">Nr. {mod.id}</span>
                                      <span className="text-[9px] font-mono font-bold bg-slate-100 text-slate-500 px-1 py-0.2 rounded border border-slate-200">
                                        {mod.crp} CrP
                                      </span>
                                      <span className="text-[9px] text-slate-400 font-bold">Standard: Sem. {mod.semester}</span>
                                    </div>
                                    <h5 className="font-bold text-slate-800 text-xs truncate leading-snug">
                                      {mod.name}
                                    </h5>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion 2: Schwerpunkt 2 / Electives */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/20">
                  <button 
                    onClick={() => setS2Expanded(!s2Expanded)}
                    className="w-full px-4 py-3.5 bg-slate-100/50 hover:bg-slate-100 transition-colors flex items-center justify-between text-left border-b border-slate-200/60"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest block mb-0.5 font-bold">
                        {major2Type === "major" ? "Nebenfach (24 CrP)" : "Freier Wahlbereich (24 CrP)"}
                      </span>
                      <h4 className="font-sans font-bold text-slate-800 text-sm">
                        {major2Type === "major" 
                          ? `Schwerpunkt 2: ${major2Obj ? major2Obj.name : "Geladen..."}`
                          : "Auswahl freier Wahlpflichtmodule"
                        }
                      </h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-slate-500 font-bold bg-white px-2 py-0.5 rounded border border-slate-200">
                        {major2Type === "major" ? "4 Module" : `${selectedElectives.length} / 4 Module`}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${s2Expanded ? "rotate-90" : ""}`} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {s2Expanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-white"
                      >
                        <div className="p-4 space-y-3">
                          {major2Type === "major" ? (
                            <>
                              <p className="text-[11px] text-slate-500 leading-relaxed italic mb-1.5 border-b border-slate-100 pb-2">
                                {major2Obj?.description}
                              </p>
                              <div className="space-y-2">
                                {s2ConcreteModules.map(mod => {
                                  const isHighlighted = filteredModulesMap[mod.id] ?? true;
                                  return (
                                    <div
                                      key={mod.id}
                                      onClick={() => setSelectedModule(mod)}
                                      className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                                        isHighlighted
                                          ? "border-slate-200 hover:border-purple-500 hover:bg-purple-50/5 bg-white"
                                          : "border-slate-150 bg-white opacity-40 hover:opacity-100"
                                      }`}
                                    >
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-1.5 mb-1">
                                          <span className="font-mono text-[9px] font-bold text-slate-400">Nr. {mod.id}</span>
                                          <span className="text-[9px] font-mono font-bold bg-slate-100 text-slate-500 px-1 py-0.2 rounded border border-slate-200">
                                            {mod.crp} CrP
                                          </span>
                                          <span className="text-[9px] text-slate-400 font-bold">Standard: Sem. {mod.semester}</span>
                                        </div>
                                        <h5 className="font-bold text-slate-800 text-xs truncate leading-snug">
                                          {mod.name}
                                        </h5>
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                                    </div>
                                  );
                                })}
                              </div>
                            </>
                          ) : (
                            <>
                              <p className="text-[11px] text-slate-500 leading-relaxed mb-1.5 border-b border-slate-100 pb-2">
                                Die von Ihnen aus dem Wahlpflichtkatalog ausgewählten Lehrveranstaltungen:
                              </p>
                              {s2ConcreteModules.length === 0 ? (
                                <div className="p-6 text-center text-slate-400 text-xs border border-dashed border-slate-200 rounded-lg">
                                  Noch keine Wahlpflichtmodule ausgewählt. Bitte wählen Sie Module im Katalog unten aus.
                                </div>
                              ) : (
                                <div className="space-y-2">
                                  {s2ConcreteModules.map(mod => {
                                    const isHighlighted = filteredModulesMap[mod.id] ?? true;
                                    return (
                                      <div
                                        key={mod.id}
                                        onClick={() => setSelectedModule(mod)}
                                        className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                                          isHighlighted
                                            ? "border-slate-200 hover:border-purple-500 hover:bg-purple-50/5 bg-white"
                                            : "border-slate-150 bg-white opacity-40 hover:opacity-100"
                                        }`}
                                      >
                                        <div className="min-w-0">
                                          <div className="flex items-center gap-1.5 mb-1">
                                            <span className="font-mono text-[9px] font-bold text-slate-400">Nr. {mod.id}</span>
                                            <span className="text-[9px] font-mono font-bold bg-slate-100 text-slate-500 px-1 py-0.2 rounded border border-slate-200">
                                              {mod.crp} CrP
                                            </span>
                                            <span className="text-[9px] text-slate-400 font-bold">Wahlpflicht</span>
                                          </div>
                                          <h5 className="font-bold text-slate-800 text-xs truncate leading-snug">
                                            {mod.name}
                                          </h5>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            )}
          </div>
        )}

        {/* VIEW 2: EXAMS ANALYSIS VIEW */}
        {activeTab === "prüfungen" && (
          <PrüfungsAnalyseView 
            activeModules={userCurriculum}
            onModuleClick={(mod) => setSelectedModule(mod)}
          />
        )}

        {/* VIEW 3: SCHWERPUNKTE EXPLORER VIEW */}
        {activeTab === "schwerpunkte" && (
          <SchwerpunktExplorer 
            onModuleClick={(mod) => setSelectedModule(mod)}
          />
        )}

        {/* VIEW 4: GLOSSAR & PRÜFUNGSORDNUNG VIEW */}
        {activeTab === "prüfungsordnung" && (
          <GlossarView />
        )}
      </main>

      {/* Persistent Module Detail slide-drawer */}
      <ModuleDetailsDrawer 
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
      />

      {/* Footer bar */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 py-8 text-center text-xs mt-12">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <p className="text-slate-400">
            © 2026 Technische Hochschule Mittelhessen (THM) – Campus Gießen. Alle Daten entstammen der Prüfungsordnung PO 2025.
          </p>
          <div className="flex justify-center gap-4 text-slate-500 font-medium">
            <span>Fachbereich 07 Wirtschaft</span>
            <span>•</span>
            <span>THM Business School</span>
            <span>•</span>
            <span>Studiengang Betriebswirtschaft (B.Sc.)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
