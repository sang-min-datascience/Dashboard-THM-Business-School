import { Module } from "../types";

export interface ReformProposal {
  alternativeExams: string[];
  authenticAssessmentDesc: string;
  alternativeGradingDesc: string;
  pedagogicalBenefit: string;
}

// Highly specific custom proposals for main modules
const STATIC_PROPOSALS: Record<string, ReformProposal> = {
  "101": {
    alternativeExams: ["Interaktive Unternehmensgründung & Pitch-Deck (Gruppenarbeit)"],
    authenticAssessmentDesc: "Statt einer klassischen Klausur mit Multiple-Choice-Fragen gründen die Studierenden in Teams ein virtuelles Start-up für ein nachhaltiges Konsumgut. Sie erstellen ein schlankes Geschäftsmodell (Lean Canvas), erproben erste operative Schritte und präsentieren ihre Idee in einem 5-minütigen 'Elevator Pitch' vor einer studentischen Jury.",
    alternativeGradingDesc: "Specifications Grading: Das Pitch-Deck und das Canvas werden anhand von 5 klaren Qualitätskriterien (Vollständigkeit, finanzielle Plausibilität, Marktverständnis, Nachhaltigkeitsbezug und Präsentationsqualität) bewertet. Bei Nicht-Erfüllung einzelner Kriterien erhalten die Teams die Option zur einmaligen Überarbeitung binnen zwei Wochen, um Lernschleifen produktiv zu nutzen.",
    pedagogicalBenefit: "Fördert bereits im 1. Semester unternehmerisches Denken, Teamfähigkeit, Präsentationskompetenz und Eigenverantwortung, statt passives Wissen abzuprüfen."
  },
  "102": {
    alternativeExams: ["HR-Onboarding-Playbook & Organisations-Audit"],
    authenticAssessmentDesc: "Die Studierenden analysieren die Organisationsstruktur und Personalpraxis eines realen oder fiktiven Unternehmens im Wandel (VUCA-Welt). Als Prüfungsleistung entwerfen sie ein zeitgemäßes Onboarding-Playbook für neue Mitarbeiter und erarbeiten eine Policy für hybride Teamarbeit.",
    alternativeGradingDesc: "Labor-Based Contract Grading: Zum Semesterstart wird ein Arbeitsvertrag vereinbart. Die Erstellung des grundlegenden Playbooks garantiert eine solide Note (z.B. 2.0). Durch Zusatzleistungen wie ein vertieftes Kultur-Audit des Unternehmens kann eine Bestnote erarbeitet werden. Fokus liegt auf erbrachter Arbeitsleistung ('Labor') statt punktueller Leistung.",
    pedagogicalBenefit: "Direkter Transfer theoretischer HR-Konzepte in die betriebliche Praxisgestaltung. Erhöhte intrinsische Motivation durch selbstbestimmte Leistungsziele."
  },
  "103": {
    alternativeExams: ["Simulation eines realen Buchungsmonats in einem Gastro-Betrieb"],
    authenticAssessmentDesc: "Die Studierenden erhalten die Belege, Rechnungen und Bankauszüge eines simulierten studentischen Cafés für einen gesamten Monat. Sie müssen diese Belege eigenständig kontieren, im Journal und Hauptbuch erfassen, die Umsatzsteuer-Voranmeldung erstellen und eine einfache Monatsbilanz ziehen.",
    alternativeGradingDesc: "Competency-Based Grading mit Revision: Das Modul wird in 4 Kernkompetenzen unterteilt (Belegbuchung, Kontenabschluss, Umsatzsteuer-Systematik, Bilanzzusammenhänge). Jede Kompetenz wird separat mit 'bestanden' / 'noch nicht bestanden' bewertet. Unvollständige Teile können in wöchentlichen Lab-Sitzungen korrigiert und erneut eingereicht werden, bis die volle Kompetenz erreicht ist.",
    pedagogicalBenefit: "Nimmt die typische Angst vor dem 'Rechnungswesen-Klausurdruck'. Die Buchführung wird als praktisches Werkzeug statt als mathematische Hürde erlebt."
  },
  "104": {
    alternativeExams: ["Regulierungspolitisches Briefing Paper (Policy Brief)"],
    authenticAssessmentDesc: "Die Studierenden untersuchen eine reale Marktunvollkommenheit (z.B. den Mietdeckel in Frankfurt/Wiesbaden, CO2-Zertifikatepreise oder Agrarsubventionen) mit mikroökonomischen Instrumenten. Sie verfassen ein 4-seitiges politisches Entscheidungspapier (Briefing Paper) für ein hessisches Ministerium inklusive Handlungsempfehlung.",
    alternativeGradingDesc: "Specifications Grading: Bewertung erfolgt nach logischer Stringenz der ökonomischen Argumentation, korrekter Anwendung grafischer Marktmodelle und der Verständlichkeit für Nicht-Ökonomen. Klares Feedbacksystem ohne Punktabzüge für Stilfragen.",
    pedagogicalBenefit: "Beweist, dass Mikroökonomie kein abstraktes mathematisches Modell ist, sondern das Fundament realer wirtschaftspolitischer Weichenstellungen bildet."
  },
  "105": {
    alternativeExams: ["Interaktives Excel-Finanzmodellierungstool mit Erklärvideo"],
    authenticAssessmentDesc: "Die Studierenden entwickeln ein dynamisches Tabellenkalkulationsmodell in Microsoft Excel, das komplexe Tilgungspläne, Rentenrechnungen und Investitionsbarwerte für ein mittelständisches Investitionsvorhaben (z.B. Anschaffung einer Solaranlage) berechnet. Dazu reichen sie ein 3-minütiges Screen-Sharing-Video ein, in dem sie die mathematischen Formeln und Sensitivitätsanalysen erklären.",
    alternativeGradingDesc: "Specifications Grading: Das Excel-Tool muss fehlerfreie Formeln enthalten, dynamisch auf Parameteränderungen reagieren und professionell formatiert sein. Die mündliche Erklärung im Video sichert das Verständnis und verhindert die bloße Übernahme fremder Vorlagen.",
    pedagogicalBenefit: "Verbindet abstrakte Wirtschaftsmathematik mit der wichtigsten praktischen Softwarekompetenz im Berufsleben (Excel-Modellierung)."
  },
  "106": {
    alternativeExams: ["Simulierte Pitch- & Verhandlungssimulation (Podcast-Aufnahme)"],
    authenticAssessmentDesc: "Die Studierenden simulieren in Paaren ein internationales Einkaufsgespräch auf Englisch. Ein Partner vertritt einen Lieferanten, der andere ein hessisches Handelsunternehmen. Die Verhandlung wird als Audio-Podcast aufgezeichnet, inklusive eines kurzen englischen Reflexionsberichts über die angewandten Verhandlungstaktiken.",
    alternativeGradingDesc: "Portfolio Grading: Das Portfolio besteht aus der Podcast-Aufnahme, einer vorab formulierten schriftlichen Agenda und einem Selbstreflexionsbericht. Bewertung nach Flüssigkeit der Kommunikation, Fachvokabular und interkulturellem Geschick.",
    pedagogicalBenefit: "Echte mündliche Sprachkompetenz und Verhandlungsführung werden im geschützten, aber realitätsnahen Rahmen gefördert, statt reines Grammatikwissen abzuprüfen."
  },
  "201": {
    alternativeExams: ["Reale Social-Media- & Brand-Kampagne für ein Gießener KMU"],
    alternativeGradingDesc: "Ungrading & Feedback-Dialog: Während des Semesters erhalten die Studierenden detailliertes Peer- und Dozenten-Feedback zu ihren Kampagnenentwürfen. Am Semesterende reflektieren sie ihren Lernfortschritt in einem Portfolio und schlagen in einem 10-minütigen Gespräch begründet ihre eigene Note vor.",
    authenticAssessmentDesc: "In Kleingruppen analysieren die Studierenden den aktuellen Markenauftritt eines lokalen Gießener Geschäfts (z.B. Unverpackt-Laden oder Café). Sie entwickeln eine zielgerichtete Multi-Channel-Marketingkampagne mit konkreten Inhaltsentwürfen, Budgetierungsplänen und Messkriterien (KPIs).",
    pedagogicalBenefit: "Arbeit an realen regionalen Herausforderungen. Maximale didaktische Nähe zum Berufsalltag in Werbeagenturen und Marketingabteilungen."
  },
  "202": {
    alternativeExams: ["DAX-Bilanzanalyse für Investoren (Finanzbericht)"],
    authenticAssessmentDesc: "Jeder Studierende wählt ein börsennotiertes DAX-Unternehmen aus und erstellt eine strukturierte Bilanzanalyse. Unter Anwendung von HGB- und IFRS-Vorschriften werden Kennzahlen zur Liquidität, Rentabilität und Verschuldung berechnet und kritisch im Hinblick auf ein potenzielles Investorenszenario bewertet.",
    alternativeGradingDesc: "Specifications Grading mit Peer-Review: Der Bericht muss feste Kriterien (korrekte Kennzahlenermittlung, fundierte Interpretation, formale Wissenschaftlichkeit) erfüllen. Ein obligatorisches Peer-Feedback im Semester hilft, Fehler frühzeitig zu korrigieren.",
    pedagogicalBenefit: "Vermittelt ein tiefes, anwendungsbezogenes Verständnis realer Geschäftsberichte anstelle des bloßen Auswendiglernens von Bilanzierungsparagraphen."
  },
  "203": {
    alternativeExams: ["No-Code-Anwendungsentwicklung & SQL-Prototyp"],
    authenticAssessmentDesc: "Die Studierenden konzipieren eine relationale Datenbank für einen konkreten betriebswirtschaftlichen Anwendungsfall (z.B. Fuhrparkmanagement oder Seminarverwaltung). Sie setzen diese Datenbank mit SQL auf und bauen darauf eine funktionale Web- oder Mobile-App mithilfe eines modernen No-Code-Tools (z.B. Glide, Softr) auf.",
    alternativeGradingDesc: "Specifications Grading: Die Note ergibt sich aus einer Checkliste technischer Anforderungen (3. Normalform eingehalten, funktionierende Abfragen, benutzerfreundliches Interface).",
    pedagogicalBenefit: "Schließt die Lücke zwischen theoretischer Wirtschaftsinformatik und praktischer Problemlösungskompetenz durch das Erschaffen eines funktionierenden Softwaresystems."
  },
  "302": {
    alternativeExams: ["Target-Costing- und Kostenoptimierungsgutachten"],
    authenticAssessmentDesc: "Die Studierenden agieren als Controlling-Berater für einen fiktiven Produktionsbetrieb, dessen Hauptprodukt unter starkem Preisdruck steht. Sie führen eine Prozesskostenrechnung durch, erstellen ein Target-Costing-Modell basierend auf Kundenpräferenzen und verfassen ein Gutachten zur strategischen Kostensenkung.",
    alternativeGradingDesc: "Competency-Based Grading: Aufteilung der Bewertung in mathematisch-analytische Präzision (Kostenrechnungskompetenz) und die strategisch-didaktische Überzeugungskraft des Gutachtens.",
    pedagogicalBenefit: "Erfordert ein tiefes Verständnis des Einflusses von Kostenentscheidungen auf betriebliche Prozesse, weit über das mechanische Ausrechnen von Zuschlagssätzen hinaus."
  },
  "401": {
    alternativeExams: ["Agiles Nonprofit-Projekt (Service Learning)"],
    authenticAssessmentDesc: "Die Projektteams planen und realisieren ein echtes, gemeinnütziges Projekt in Gießen (z.B. Spendenlauf, Nachhaltigkeitsflohmarkt oder Digitalisierungs-Hilfe für Senioren). Sie nutzen agile Methoden (Scrum/Kanban), führen wöchentliche Stand-ups und dokumentieren den Fortschritt digital.",
    alternativeGradingDesc: "Labor-Based Contract Grading: Die Note basiert auf der kontinuierlichen Mitwirkung, der termingerechten Erreichung selbstgesteckter Sprint-Ziele und der Qualität der gemeinsamen Retrospektiven im Team.",
    pedagogicalBenefit: "Kombiniert theoretische Projektmanagement-Methodik mit echter sozialer Verantwortung und hoher sozialer Interaktionskompetenz."
  },
  "404": {
    alternativeExams: ["Forschungs-Exposé mit KI-Transparenz- und Prompt-Protokoll"],
    authenticAssessmentDesc: "Die Studierenden verfassen ein wissenschaftliches Exposé zu einem selbstgewählten BWL-Thema. Der Clou: Sie dokumentieren im Detail den Einsatz von KI-Tools (wie ChatGPT, Consensus oder Connected Papers). Sie legen ihre Prompts offen, reflektieren Halluzinationen und weisen nach, wie sie die generierten Quellen verifiziert haben.",
    alternativeGradingDesc: "Ungrading mit Portfolio: Der Lernprozess steht im Mittelpunkt. Das Portfolio wird stufenweise eingereicht. Die Endnote wird im Gespräch über den Fortschritt der wissenschaftlichen Methodik und den reflektierten Werkzeugeinsatz ermittelt.",
    pedagogicalBenefit: "Bereitet optimal auf die Bachelorthesis vor, indem es die Realität des KI-gestützten Arbeitens nicht verbietet, sondern akademisch-kritisch professionalisiert."
  },
  "601": {
    alternativeExams: ["Aufsichtsrat-Hearing & Investoren-Pitch"],
    authenticAssessmentDesc: "Nach Abschluss des computergestützten Planspiels treten die Teams vor ein Gremium aus Professoren und Wirtschaftsvertretern ('Aufsichtsrat'). Sie müssen dort ihre strategischen Entscheidungen rechtfertigen, Abweichungen von der Planung erklären und ein neues, zukunftsfähiges Sanierungskonzept präsentieren.",
    alternativeGradingDesc: "Competency-Based Grading (Hearing 50%, Pitch 50%): Klares Bewertungsschema für strategisches Denken, Krisenmanagement, finanzielle Argumentation und souveränes Auftreten im Kreuzverhör.",
    pedagogicalBenefit: "Simuliert exakt die Realität von Führungskräften bei Gesellschafterversammlungen oder vor Kreditgebern unter hohem Leistungs- und Zeitdruck."
  },
  "700": {
    alternativeExams: ["Wissenschaftliches Paper & 3-Minuten-Thesen-Video"],
    authenticAssessmentDesc: "Die traditionelle Bachelorthesis (30-50 Seiten) wird reformiert: Studierende verfassen ein prägnantes, 15-seitiges wissenschaftliches Paper im Format einer Fachzeitschrift, ergänzt durch ein professionelles 3-minütiges Video (Pitch), das die zentralen Erkenntnisse für die betriebliche Praxis verständlich aufbereitet.",
    alternativeGradingDesc: "Double-Blind Peer Review Simulation & Rubrics: Bewertung durch Erst- und Zweitprüfer anhand einer transparenten, wissenschaftlichen Bewertungsmatrix, die den Studierenden bereits vorab bekannt ist. Das Video fließt als Transferkompetenz in die Note ein.",
    pedagogicalBenefit: "Fördert die im Berufsleben kritische Fähigkeit, komplexe wissenschaftliche Erkenntnisse extrem präzise auf den Punkt zu bringen und multimedial zu vermitteln."
  }
};

// Intelligent dynamic generator for other modules based on their subject area
export function getReformProposal(module: Module): ReformProposal {
  // If we have a custom static proposal, return it directly
  if (STATIC_PROPOSALS[module.id]) {
    return STATIC_PROPOSALS[module.id];
  }

  const nameLower = module.name.toLowerCase();
  const contentLower = (module.contents || "").toLowerCase();
  const objectivesLower = (module.objectives || "").toLowerCase();

  // Heuristic categories
  const isLaw = nameLower.includes("recht") || nameLower.includes("law") || nameLower.includes("bilanzsteuer");
  const isTax = nameLower.includes("steuer") || nameLower.includes("tax") || nameLower.includes("prüfung");
  const isFinance = nameLower.includes("finanz") || nameLower.includes("invest") || nameLower.includes("banking") || nameLower.includes("versicherung") || nameLower.includes("risiko");
  const isLanguage = nameLower.includes("englisch") || nameLower.includes("spanisch") || nameLower.includes("english") || nameLower.includes("sprache");
  const isDigital = nameLower.includes("informatik") || nameLower.includes("daten") || nameLower.includes("digital") || nameLower.includes("software") || nameLower.includes("ki") || nameLower.includes("ai") || nameLower.includes("transformation");
  const isLogisticsOrProd = nameLower.includes("logistik") || nameLower.includes("supply chain") || nameLower.includes("produktion") || nameLower.includes("operations");
  const isStatsOrMath = nameLower.includes("statistik") || nameLower.includes("mathematik") || nameLower.includes("data analysis") || nameLower.includes("datenanalyse") || nameLower.includes("research");
  const isHrOrMgmt = nameLower.includes("personal") || nameLower.includes("hr") || nameLower.includes("talent") || nameLower.includes("leadership") || nameLower.includes("management") || nameLower.includes("organisation") || nameLower.includes("ethics") || nameLower.includes("nachhaltigkeit") || nameLower.includes("mentoring");
  const isMarketingOrSales = nameLower.includes("marketing") || nameLower.includes("brand") || nameLower.includes("sales") || nameLower.includes("konsumenten") || nameLower.includes("vertrieb");

  if (isLaw) {
    return {
      alternativeExams: ["Simuliertes Mandantengespräch & Rechtliches Gutachten (Moot Court)"],
      authenticAssessmentDesc: `Anstelle einer traditionellen Klausur bearbeiten die Studierenden einen komplexen, ungeklärten Rechtsfall aus der unternehmerischen Praxis. Sie führen ein simuliertes Erstberatungsgespräch mit einem Mandanten durch und erstellen ein rechtssicheres, präzises juristisches Gutachten im Gutachtenstil.`,
      alternativeGradingDesc: "Specifications Grading: Das Gutachten und die Gesprächsführung müssen vordefinierten Qualitätskriterien (fehlerfreie Subsumtionstechnik, Strukturierung, verständliche Erklärung komplexer Klauseln) entsprechen. Studierende können bei Mängeln in der Argumentation einmalig nachbessern.",
      pedagogicalBenefit: "Schult die für Wirtschaftsjuristen essenzielle Fähigkeit, abstrakte Gesetze auf reale, dynamische Praxisfälle anzuwenden und Mandanten verständlich zu beraten."
    };
  }

  if (isTax) {
    return {
      alternativeExams: ["Steuergestaltungs- und Beratungs-Memo für ein KMU"],
      authenticAssessmentDesc: `Die Studierenden erhalten die wirtschaftlichen Rahmendaten eines mittelständischen Familienunternehmens, das vor einer Restrukturierung steht (z.B. Rechtsformwechsel oder Unternehmensnachfolge). Sie verfassen ein professionelles Steuerberatungs-Memo, vergleichen die steuerlichen Belastungen quantitativ und geben eine fundierte Gestaltungsempfehlung ab.`,
      alternativeGradingDesc: "Specifications-Based Assessment: Das Rechenmodell (Excel) und die steuerrechtliche Begründung werden getrennt voneinander auf fachliche Richtigkeit und logische Nachvollziehbarkeit bewertet.",
      pedagogicalBenefit: "Ersetzt das Auswendiglernen von Paragraphen durch die reale, kreative Gestaltungskraft einer exzellenten steuerlichen Beratungspraxis."
    };
  }

  if (isFinance) {
    return {
      alternativeExams: ["Interaktives Investment-Portfolio & Risiko-Audit für einen realen Kunden"],
      authenticAssessmentDesc: `Die Studierenden erstellen ein maßgeschneidertes Investitions- und Risikokonzept für ein reales oder simuliertes Kundenprofil (z.B. Gießener Industrieunternehmen, Startup oder Privatkunde). Sie analysieren die Risikotragfähigkeit, wählen Finanzierungsinstrumente aus und präsentieren ihre Anlagestrategie in einem simulierten Anlageausschuss-Meeting.`,
      alternativeGradingDesc: "Competency-Based Portfolio: Das Portfolio besteht aus einer Finanzanalyse, dem Anlagemodell und der Videoaufzeichnung der Ausschusspräsentation. Bewertung basiert auf der Risikoadäquanz und der Qualität der finanzwirtschaftlichen Begründung.",
      pedagogicalBenefit: "Verbindet finanzmathematische Berechnungen mit echtem, verantwortungsvollem Risikobewusstsein und Beratungskompetenz."
    };
  }

  if (isDigital || isDigital) {
    return {
      alternativeExams: ["Digital Transformation Roadmap & funktionierender App-Prototyp"],
      authenticAssessmentDesc: `Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.`,
      alternativeGradingDesc: "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
      pedagogicalBenefit: "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
    };
  }

  if (isLanguage) {
    return {
      alternativeExams: ["Mündliche Verhandlungssimulation & Interkultureller Reflexions-Podcast"],
      authenticAssessmentDesc: `Anstelle einer schriftlichen Klausur erarbeiten die Studierenden in Kleingruppen ein internationales Verhandlungsszenario (z.B. Kooperationsvereinbarung oder Lieferantengespräch). Sie zeichnen die Live-Verhandlung als Video oder Podcast auf und fügen eine Reflexion über angewandte linguistische Muster und interkulturelle Barrieren hinzu.`,
      alternativeGradingDesc: "Portfolio Grading mit Peer-Feedback: Bewertung des sprachlichen Ausdrucks, der strategischen Kommunikation und der Reflexionstiefe. Revisionen der schriftlichen Ausarbeitungen sind während des Semesters möglich.",
      pedagogicalBenefit: "Echte mündliche Handlungsfähigkeit im internationalen Geschäftskontext steht im Vordergrund, statt starre Vokabel- und Grammatiktests."
    };
  }

  if (isLogisticsOrProd) {
    return {
      alternativeExams: ["Supply Chain Resiliency & Optimization Audit"],
      authenticAssessmentDesc: `Die Studierenden untersuchen die Lieferkette oder Produktionsstruktur eines regionalen Betriebs (z.B. einer Brauerei oder eines Fertigungsbetriebs). Sie identifizieren logistische Engpässe und CO2-Treiber und entwerfen ein resilientes, nachhaltiges Optimierungskonzept inklusive Notfallplänen für Krisenszenarien.`,
      alternativeGradingDesc: "Labor-Based Contract Grading: Strukturierte Zwischenberichte über den Analysefortschritt sichern ein solides Bestehen. Durch die Einbindung mathematischer Optimierungsmodelle (z.B. Transportkostenminimierung) kann eine exzellente Note erzielt werden.",
      pedagogicalBenefit: "Erfordert echtes Systemdenken und die Anwendung moderner Logistikkonzepte auf volatile Märkte und ökologische Vorgaben."
    };
  }

  if (isStatsOrMath) {
    return {
      alternativeExams: ["Reproduzierbarer Datenanalyse-Report (Data Science Case Study)"],
      authenticAssessmentDesc: `Die Studierenden erhalten einen unbereinigten, realen Datensatz (z.B. Konsumentenbefragung oder Maschinendaten). Mithilfe moderner Tools (R, Python oder erweitertes Excel) bereinigen sie die Daten, führen deskriptive und induktive Analysen durch und fassen ihre Erkenntnisse in einem interaktiven Dashboard (z.B. Tableau oder Excel) zusammen.`,
      alternativeGradingDesc: "Specifications Grading mit Code-Review: Der datenanalytische Code und das Dashboard müssen festgelegte Standards der mathematischen Richtigkeit, Reproduzierbarkeit und visuellen Lesbarkeit erfüllen.",
      pedagogicalBenefit: "Bereitet ideal auf die digitalisierte Controlling- und Analyse-Praxis vor. Verhindert das reine Auswendiglernen statistischer Formeln ohne Anwendungsbezug."
    };
  }

  if (isMarketingOrSales) {
    return {
      alternativeExams: ["Ganzheitliches Marketingkonzept & Interaktiver Verkaufs-Pitch"],
      authenticAssessmentDesc: `Die Studierenden entwickeln für eine reale Problemstellung ein integriertes Marketing- und Vertriebskonzept. Sie führen Markt- und Zielgruppenanalysen durch, gestalten den Marketing-Mix und präsentieren ihre Kampagne in einem simulierten 'Verkaufs-Pitch' vor potenziellen Großkunden oder Investoren.`,
      alternativeGradingDesc: "Ungrading mit Feedbackschleifen: Kontinuierliche Beratungseinheiten im Semester ersetzen die Notenangst. Die Abschlussnote wird gemeinschaftlich basierend auf der erbrachten Leistung und der Qualität des Endprodukts vereinbart.",
      pedagogicalBenefit: "Verbindet analytische Marktforschung mit rhetorischer Überzeugungskraft und kreativer Gestaltung – unverzichtbare Fähigkeiten im Marketing- und Vertriebsalltag."
    };
  }

  if (isHrOrMgmt) {
    return {
      alternativeExams: ["HR-Audit & Leadership Guidelines für ein agiles Startup"],
      authenticAssessmentDesc: `Die Studierenden entwickeln ein modernes Führungs- und Personalkonzept für ein schnell wachsendes Unternehmen. Sie entwerfen Maßnahmen zum Employer Branding, Strategien zur Talentförderung und Ethik-Leitlinien für das Management, um den sozialen und ökonomischen Erfolg des Betriebs zu sichern.`,
      alternativeGradingDesc: "Contract Grading: Klare Verträge regeln die Anforderungen für die Notenstufen. Ein Bestehen erfordert die Entwicklung der HR-Guidelines; für eine 1.x ist die fundierte Ausarbeitung eines ethischen Wertekompasses erforderlich.",
      pedagogicalBenefit: "Fördert ein ganzheitliches Verständnis von Führung, sozialer Verantwortung und Organisationsdynamik im realen Arbeitskontext."
    };
  }

  // General fallback
  return {
    alternativeExams: ["Problem-Based Portfolio mit Praxis-Präsentation"],
    authenticAssessmentDesc: `Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.`,
    alternativeGradingDesc: "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
    pedagogicalBenefit: "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
  };
}
