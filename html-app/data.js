// THM Gießen PO 2025 Study Planner & Exam Analysis Data
window.THM_DATA = {
  "EXAM_TYPE_DEFINITIONS": [
    {
      "name": "Klausur",
      "description": "Schriftliche Aufsichtsarbeit (§ 8, 8a PO). Prüft das Verständnis und die Transferfähigkeit theoretischer Fachinhalte. Kann Antwort-Wahl-Verfahren (Multiple-Choice) beinhalten, wenn dies in der Modulbeschreibung vermerkt ist."
    },
    {
      "name": "Lerntagebuch / Lernjournal",
      "description": "Individuell zu erstellende semesterbegleitende schriftliche Reflexion des Lernprozesses und der wesentlichen Lerninhalte der einzelnen Veranstaltungen oder Themen unter Beachtung formaler Kriterien."
    },
    {
      "name": "Präsentation",
      "description": "Mündlicher Vortrag, der alleine oder in einer Gruppe gehalten wird und die erarbeiteten Ergebnisse strukturiert darstellt (z.B. Poster- oder Folienpräsentation). Länge und Form werden vom Dozenten festgelegt."
    },
    {
      "name": "Projekt",
      "description": "Fachliche und selbstorganisierte Bearbeitung einer vorgegebenen Projektaufgabe, die schriftlich dokumentiert (z.B. als Projekthandbuch) und/oder mündlich präsentiert bzw. geprüft wird."
    },
    {
      "name": "Portfolio",
      "description": "Zielgerichtete Zusammenstellung von studentischen Arbeiten, die den Arbeitsprozess und Lernfortschritt dokumentieren und reflektieren. Kann Präsentationen, Übungsaufgaben, Protokolle oder mündliche Tests kombinieren."
    },
    {
      "name": "Fallstudie / Case Study",
      "description": "Bearbeitung einer realitätsnahen Problemstellung aus dem Unternehmenskontext. Entwicklung von strategischen Lösungsansätzen, die schriftlich ausgearbeitet und in geeigneter Form präsentiert werden."
    },
    {
      "name": "Referat",
      "description": "Vertiefte schriftliche und praktische Auseinandersetzung mit einem Thema unter Einbeziehung wissenschaftlicher Literatur, gefolgt von einer Präsentation mit anschließender Diskussion."
    },
    {
      "name": "Rollenspiel",
      "description": "Sozialkompetenzorientierte und handlungsorientierte spielerische Auseinandersetzung mit geschäftstypischen Lebens- und Verhandlungssituationen."
    },
    {
      "name": "Seminararbeit",
      "description": "Schriftliche Ausarbeitung zu einem fachspezifischen Thema oder Projekt nach wissenschaftlichen Standards, oft als Einzelleistung oder in Gruppenarbeit erstellt."
    },
    {
      "name": "Performanz- bzw. Simulationsprüfung",
      "description": "Praktische Anwendung von erworbenem Wissen und Fähigkeiten in einer realitätsnahen simulierten Situation aus der künftigen Berufspraxis."
    },
    {
      "name": "Planspielteilnahme",
      "description": "Simulierende, meist softwaregestützte Bearbeitung komplexer betriebswirtschaftlicher Abläufe in einer Gruppe, bei der strategische und operative Unternehmensentscheidungen getroffen werden."
    },
    {
      "name": "Mündliche Prüfung",
      "description": "Mündliche Befragung zur systematischen Überprüfung des Fachwissens und der Fähigkeit, komplexe Zusammenhänge strukturiert zu erklären (§ 7 PO)."
    },
    {
      "name": "Projektbericht Praktikum",
      "description": "Schriftliche wissenschaftliche Ausarbeitung und Reflexion über die während der Praxisphase im Betrieb absolvierten Tätigkeiten und Projekte."
    },
    {
      "name": "Bachelorthesis",
      "description": "Wissenschaftliche Abschlussarbeit (30-50 Seiten), in der eine konkrete praktische oder theoretische Fragestellung selbstständig und methodisch sauber bearbeitet wird."
    },
    {
      "name": "Praktische Prüfung OSPE",
      "description": "Objective Structured Practical Examination. Handlungsorientierte Lösung technischer Aufgaben (z.B. Erstellung eines Programms, 3D-Modells) oder Prüfung kommunikativer Fertigkeiten (z.B. Kundengespräche)."
    },
    {
      "name": "Wissenschaftliche Arbeit",
      "description": "Systematisch gegliederte textliche Ausarbeitung zur Schaffung und transparenten Darstellung neuen Wissens unter Einhaltung wissenschaftlicher Standards."
    }
  ],
  "MAJORS": [
    {
      "id": "controlling",
      "name": "Controlling",
      "englishName": "Controlling & Management Accounting",
      "description": "Vermittelt fundierte theoretische und anwendungsorientierte Kenntnisse im Bereich der Unternehmenssteuerung und des internen Rechnungswesens. Fokus liegt auf der zielgerichteten Planung, Steuerung und Kontrolle.",
      "careerFields": [
        "Controller/in",
        "Management Consultant",
        "Business Analyst",
        "Projektmanager/in",
        "Kaufmännische/r Leiter/in"
      ],
      "moduleIds": [
        "471",
        "472",
        "573",
        "400"
      ]
    },
    {
      "id": "digital_business",
      "name": "Digital Business",
      "englishName": "Digital Business & IT Management",
      "description": "Bietet einen umfassenden Überblick über neue Technologien, Datenstrukturen und Plattformen der Digitalwirtschaft. Qualifiziert an der Schnittstelle zwischen klassischer BWL und moderner Informatik.",
      "careerFields": [
        "Business Analyst",
        "IT-Consultant",
        "CDO (Chief Digital Officer)",
        "E-Commerce Manager",
        "Product Owner",
        "Start-up Gründer/in"
      ],
      "moduleIds": [
        "481",
        "482",
        "585",
        "584"
      ]
    },
    {
      "id": "finanzdienstleistungen",
      "name": "Finanzdienstleistungen",
      "englishName": "Financial Services",
      "description": "Integrierte Ausbildung in der Führung von Finanzdienstleistern (Banken, Sparkassen, Versicherungen) sowie in Kapitalmarktfragen, Risikomanagement und der privaten Vermögensplanung.",
      "careerFields": [
        "Bankberater/in",
        "Portfoliomanager/in",
        "Risikomanager/in",
        "Finanzplaner/in",
        "Mitarbeiter/in in der Bankenaufsicht"
      ],
      "moduleIds": [
        "411",
        "412",
        "515",
        "514"
      ]
    },
    {
      "id": "internationales_management",
      "name": "Internationales Management",
      "englishName": "International Management",
      "description": "Befähigt zur Planung, Organisation und Kontrolle grenzüberschreitender Aktivitäten. Beinhaltet obligatorische Auslandsaufenthalte zur Stärkung interkultureller und sprachlicher Kompetenzen.",
      "careerFields": [
        "Export Manager/in",
        "International Project Manager",
        "Global Sourcing Specialist",
        "Unternehmensberater/in"
      ],
      "moduleIds": [
        "421",
        "422",
        "523",
        "524"
      ]
    },
    {
      "id": "marketing",
      "name": "Marketing",
      "englishName": "Marketing & Brand Management",
      "description": "Analysiert strategisches und operatives Marketing, Marktforschung und Konsumentenpsychologie. Befähigt zur Markenführung und Gestaltung moderner Omni-Channel- und Sales-Konzepte.",
      "careerFields": [
        "Brand Manager/in",
        "Product Manager",
        "Key Account Manager/in",
        "Digital Marketing Specialist",
        "Marktforscher/in"
      ],
      "moduleIds": [
        "431",
        "433",
        "535",
        "536"
      ]
    },
    {
      "id": "mittelstand",
      "name": "Mittelstand und Entrepreneurship",
      "englishName": "SME Management & Entrepreneurship",
      "description": "Fokussiert die Besonderheiten und Herausforderungen kleiner und mittlerer Unternehmen (KMU) sowie von Familienunternehmen. Bereitet ideal auf Unternehmensgründungen oder Nachfolgeregelungen vor.",
      "careerFields": [
        "Start-up Gründer/in",
        "Nachfolger/in in Familienunternehmen",
        "Unternehmensberater/in für KMU",
        "Innovationsmanager/in"
      ],
      "moduleIds": [
        "441",
        "400",
        "543",
        "545"
      ]
    },
    {
      "id": "personalmanagement",
      "name": "Personalmanagement",
      "englishName": "Human Resource Management",
      "description": "Beschäftigt sich mit moderner Personalgewinnung, Mitarbeiterführung, Personalentwicklung und Vergütungskonzepten sowie arbeitsrechtlichen Grundlagen im Unternehmen.",
      "careerFields": [
        "HR Business Partner",
        "Recruiter/in",
        "Personalentwickler/in",
        "Compensation & Benefits Specialist",
        "HR Consultant"
      ],
      "moduleIds": [
        "453",
        "454",
        "555",
        "556"
      ]
    },
    {
      "id": "steuerberatung",
      "name": "Steuerberatung und Wirtschaftsprüfung",
      "englishName": "Taxation & Auditing",
      "description": "Vermittelt vertieftes steuerrechtliches und bilanzrechtliches Fachwissen. Bereitet zielgerichtet auf nationale Rechnungslegung, Ertragsteuern, Wirtschaftsprüfung und die entsprechenden Berufsexamina vor.",
      "careerFields": [
        "Mitarbeiter/in Steuerberatung",
        "Assistent/in Wirtschaftsprüfung",
        "Bilanzbuchhalter/in",
        "Mitarbeiter/in Konzernrechnungswesen"
      ],
      "moduleIds": [
        "461",
        "462",
        "563",
        "564"
      ]
    }
  ],
  "MODULES": [
    {
      "id": "101",
      "name": "Grundlagen der BWL - inkl. Coaching Schlüsselkompetenzen",
      "englishName": "Basics of Business Administration - including Coaching Key Skills",
      "semester": 1,
      "sws": 5,
      "crp": 6,
      "type": "pflicht",
      "coaching": true,
      "responsible": "Prof. Dr. Benjamin Löhr",
      "teachers": [
        "Prof. Dr. Benjamin Löhr",
        "Steffen Schäfer",
        "Prof. Dr. Anne Mazuga",
        "Prof. Dr. Martina Höber",
        "Nicole Adolph",
        "Alexandra Hofmann"
      ],
      "contents": "Grundlagen der allgemeinen Betriebswirtschaftslehre (Ziele, Prinzipien, Methoden, konstitutive Entscheidungen wie Rechtsform- und Standortwahl, primäre Funktionsbereiche wie Produktion/Marketing, sekundäre wie Rechnungswesen). Interaktive Teamarbeit und Integration von Coachingeinheiten zur Stärkung überfachlicher Kompetenzen.",
      "objectives": "Die Studierenden können finanz- und erfolgswirtschaftliche Grundlagen erläutern, betriebswirtschaftliche Probleme analysieren und theoretisch begründete Lösungen entwickeln. Sie erwerben Teamkompetenzen und übernehmen Verantwortung für ihren eigenen Lernprozess.",
      "exams": [
        {
          "type": "Lerntagebuch",
          "weight": 20,
          "details": "Lernjournal (semesterbegleitend)"
        },
        {
          "type": "Klausur",
          "weight": 80,
          "details": "Klausur, teilweise Antwort-Wahl-Verfahren (MC)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise oder komplett durch Antwort-Wahl-Verfahren.",
      "workloadTotal": 180,
      "workloadPresence": 75,
      "workloadSelfStudy": 105,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Interaktive Unternehmensgründung & Pitch-Deck (Gruppenarbeit)"
        ],
        "authenticAssessmentDesc": "Statt einer klassischen Klausur mit Multiple-Choice-Fragen gründen die Studierenden in Teams ein virtuelles Start-up für ein nachhaltiges Konsumgut. Sie erstellen ein schlankes Geschäftsmodell (Lean Canvas), erproben erste operative Schritte und präsentieren ihre Idee in einem 5-minütigen 'Elevator Pitch' vor einer studentischen Jury.",
        "alternativeGradingDesc": "Specifications Grading: Das Pitch-Deck und das Canvas werden anhand von 5 klaren Qualitätskriterien (Vollständigkeit, finanzielle Plausibilität, Marktverständnis, Nachhaltigkeitsbezug und Präsentationsqualität) bewertet. Bei Nicht-Erfüllung einzelner Kriterien erhalten die Teams die Option zur einmaligen Überarbeitung binnen zwei Wochen, um Lernschleifen produktiv zu nutzen.",
        "pedagogicalBenefit": "Fördert bereits im 1. Semester unternehmerisches Denken, Teamfähigkeit, Präsentationskompetenz und Eigenverantwortung, statt passives Wissen abzuprüfen."
      }
    },
    {
      "id": "102",
      "name": "Personal und Organisation",
      "englishName": "Human resource and organization management",
      "semester": 1,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Manuela Weller",
      "teachers": [
        "Prof. Dr. Marion Isabel Hoeren",
        "Prof. Dr. Manuela Weller",
        "Prof. Dr. Matthias Groß"
      ],
      "contents": "Personal: Personalplanung, Beschaffung, Einsatz, Beurteilung, Entlohnung, Entwicklung, Controlling und Personalführung. Organisation: Organisationsgestaltung, theoretische Ansätze, Techniken der Aufbau- und Ablauforganisation, Organisationsentwicklung und VUCA-Welt.",
      "objectives": "Erlernen theoretischer Basiskenntnisse im HR- und Organisationsmanagement zur Bewertung des unternehmerischen und sozialen Gesamterfolgs. Kompetenzen in Selbst- und Gruppenmanagement mittels digitaler Tools.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, teilweise Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise mit Antwort-Wahl-Verfahren gemäß § 8a PO.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "HR-Onboarding-Playbook & Organisations-Audit"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren die Organisationsstruktur und Personalpraxis eines realen oder fiktiven Unternehmens im Wandel (VUCA-Welt). Als Prüfungsleistung entwerfen sie ein zeitgemäßes Onboarding-Playbook für neue Mitarbeiter und erarbeiten eine Policy für hybride Teamarbeit.",
        "alternativeGradingDesc": "Labor-Based Contract Grading: Zum Semesterstart wird ein Arbeitsvertrag vereinbart. Die Erstellung des grundlegenden Playbooks garantiert eine solide Note (z.B. 2.0). Durch Zusatzleistungen wie ein vertieftes Kultur-Audit des Unternehmens kann eine Bestnote erarbeitet werden. Fokus liegt auf erbrachter Arbeitsleistung ('Labor') statt punktueller Leistung.",
        "pedagogicalBenefit": "Direkter Transfer theoretischer HR-Konzepte in die betriebliche Praxisgestaltung. Erhöhte intrinsische Motivation durch selbstbestimmte Leistungsziele."
      }
    },
    {
      "id": "103",
      "name": "Einführung in das Rechnungswesen",
      "englishName": "Introduction to Accounting",
      "semester": 1,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Frank Althoff",
      "teachers": [
        "Anja Baumann"
      ],
      "contents": "Grundbegriffe: Vermögen, Schulden, Eigenkapital, Ertrag, Aufwand, Cashflow, Kosten. Technik der doppelten Buchführung (Bestands- und Erfolgskonten, Buchungssätze). Jahresabschluss nach HGB und IFRS. GuV-Rechnung und Grundlagen der Bewertung.",
      "objectives": "Einführung in das betriebliche Rechnungswesen und Beherrschung der Technik der doppelten Buchführung. Buchungssätze aufstellen, Fallbeispiele lösen und Bilanzzusammenhänge verstehen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (ggf. teilweise im Antwort-Wahl-Verfahren)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur (ggf. teilweise im Antwort-Wahl-Verfahren).",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Simulation eines realen Buchungsmonats in einem Gastro-Betrieb"
        ],
        "authenticAssessmentDesc": "Die Studierenden erhalten die Belege, Rechnungen und Bankauszüge eines simulierten studentischen Cafés für einen gesamten Monat. Sie müssen diese Belege eigenständig kontieren, im Journal und Hauptbuch erfassen, die Umsatzsteuer-Voranmeldung erstellen und eine einfache Monatsbilanz ziehen.",
        "alternativeGradingDesc": "Competency-Based Grading mit Revision: Das Modul wird in 4 Kernkompetenzen unterteilt (Belegbuchung, Kontenabschluss, Umsatzsteuer-Systematik, Bilanzzusammenhänge). Jede Kompetenz wird separat mit 'bestanden' / 'noch nicht bestanden' bewertet. Unvollständige Teile können in wöchentlichen Lab-Sitzungen korrigiert und erneut eingereicht werden, bis die volle Kompetenz erreicht ist.",
        "pedagogicalBenefit": "Nimmt die typische Angst vor dem 'Rechnungswesen-Klausurdruck'. Die Buchführung wird als praktisches Werkzeug statt als mathematische Hürde erlebt."
      }
    },
    {
      "id": "104",
      "name": "Angewandte Mikroökonomie",
      "englishName": "Applied Microeconomics",
      "semester": 1,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Markus Gerhard",
      "teachers": [
        "Prof. Dr. Markus Gerhard",
        "Prof. Dr. Jens Klose",
        "Prof. Dr. Julian Conrads",
        "Alexander Schwab"
      ],
      "contents": "Funktionsweise von Märkten (Angebot/Nachfrage), Konsumtheorie der Haushalte, Produktions- und Kostentheorie der Unternehmen. Marktformen (vollständige Konkurrenz, Monopol, Oligopol). Marktunvollkommenheiten (externe Effekte, öffentliche Güter, asymmetrische Informationen) und staatliche Eingriffe.",
      "objectives": "Analyse von Optimierungskalkülen. Beurteilung des Marktes als Koordinationsinstrument und Verstehen von Marktversagen sowie wirtschaftspolitischen Implikationen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (60-90 Minuten), teilweise Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Regulierungspolitisches Briefing Paper (Policy Brief)"
        ],
        "authenticAssessmentDesc": "Die Studierenden untersuchen eine reale Marktunvollkommenheit (z.B. den Mietdeckel in Frankfurt/Wiesbaden, CO2-Zertifikatepreise oder Agrarsubventionen) mit mikroökonomischen Instrumenten. Sie verfassen ein 4-seitiges politisches Entscheidungspapier (Briefing Paper) für ein hessisches Ministerium inklusive Handlungsempfehlung.",
        "alternativeGradingDesc": "Specifications Grading: Bewertung erfolgt nach logischer Stringenz der ökonomischen Argumentation, korrekter Anwendung grafischer Marktmodelle und der Verständlichkeit für Nicht-Ökonomen. Klares Feedbacksystem ohne Punktabzüge für Stilfragen.",
        "pedagogicalBenefit": "Beweist, dass Mikroökonomie kein abstraktes mathematisches Modell ist, sondern das Fundament realer wirtschaftspolitischer Weichenstellungen bildet."
      }
    },
    {
      "id": "105",
      "name": "Mathematik für Betriebswirte",
      "englishName": "Mathematics for Business Majors",
      "semester": 1,
      "sws": 6,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Christoph Gallus",
      "teachers": [
        "Lehrende des Fachbereichs MNI"
      ],
      "contents": "Grundlagen (Mengen, Funktionen). Elementare Finanzmathematik (Zinseszins, Barwert, Renten, Tilgung, Abschreibungen). Differentialrechnung einer und mehrerer Variablen mit ökonomischen Anwendungen (Isoquanten, Grenzraten der Substitution, Skalierungseffekte, Optimierung). Vektoren und Matrizen.",
      "objectives": "Mathematische Modellbildung verstehen und anwenden. Beherrschung finanzmathematischer Techniken und Differentialrechnung zur Lösung ökonomischer Fragestellungen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (90 Minuten)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 90,
      "workloadSelfStudy": 60,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Interaktives Excel-Finanzmodellierungstool mit Erklärvideo"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln ein dynamisches Tabellenkalkulationsmodell in Microsoft Excel, das komplexe Tilgungspläne, Rentenrechnungen und Investitionsbarwerte für ein mittelständisches Investitionsvorhaben (z.B. Anschaffung einer Solaranlage) berechnet. Dazu reichen sie ein 3-minütiges Screen-Sharing-Video ein, in dem sie die mathematischen Formeln und Sensitivitätsanalysen erklären.",
        "alternativeGradingDesc": "Specifications Grading: Das Excel-Tool muss fehlerfreie Formeln enthalten, dynamisch auf Parameteränderungen reagieren und professionell formatiert sein. Die mündliche Erklärung im Video sichert das Verständnis und verhindert die bloße Übernahme fremder Vorlagen.",
        "pedagogicalBenefit": "Verbindet abstrakte Wirtschaftsmathematik mit der wichtigsten praktischen Softwarekompetenz im Berufsleben (Excel-Modellierung)."
      }
    },
    {
      "id": "106",
      "name": "Business English Basics (B2)",
      "englishName": "Business English Basics (B2)",
      "semester": 1,
      "sws": 2,
      "crp": 2,
      "type": "pflicht",
      "responsible": "Dr. Christine Beckmann",
      "teachers": [
        "Lehrende des Sprachenzentrums"
      ],
      "contents": "Sprachtraining auf Niveau B2. Themenschwerpunkte: Akademischer Werdegang, Bewerbungen, Unternehmensstrukturen, Arbeitsbedingungen, Geschäftskorrespondenz (E-Mails), Grammatik-Review und Aufbau von wirtschaftsspezifischem Vokabular.",
      "objectives": "Erweiterung der Sprachkenntnisse in Wort und Schrift für eine professionelle Kommunikation im internationalen Geschäftskontext auf dem Niveau B2.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur"
        }
      ],
      "hasMc": false,
      "workloadTotal": 60,
      "workloadPresence": 30,
      "workloadSelfStudy": 30,
      "language": "Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Simulierte Pitch- & Verhandlungssimulation (Podcast-Aufnahme)"
        ],
        "authenticAssessmentDesc": "Die Studierenden simulieren in Paaren ein internationales Einkaufsgespräch auf Englisch. Ein Partner vertritt einen Lieferanten, der andere ein hessisches Handelsunternehmen. Die Verhandlung wird als Audio-Podcast aufgezeichnet, inklusive eines kurzen englischen Reflexionsberichts über die angewandten Verhandlungstaktiken.",
        "alternativeGradingDesc": "Portfolio Grading: Das Portfolio besteht aus der Podcast-Aufnahme, einer vorab formulierten schriftlichen Agenda und einem Selbstreflexionsbericht. Bewertung nach Flüssigkeit der Kommunikation, Fachvokabular und interkulturellem Geschick.",
        "pedagogicalBenefit": "Echte mündliche Sprachkompetenz und Verhandlungsführung werden im geschützten, aber realitätsnahen Rahmen gefördert, statt reines Grammatikwissen abzuprüfen."
      }
    },
    {
      "id": "201",
      "name": "Marketing - inkl. Coaching Schlüsselkompetenzen",
      "englishName": "Marketing - including Coaching Key Skills",
      "semester": 2,
      "sws": 5,
      "crp": 6,
      "type": "pflicht",
      "coaching": true,
      "responsible": "Prof. Dr. Stefanie Wannow",
      "teachers": [
        "Michael Döring",
        "Prof. Dr. Juliane Staubach",
        "Prof. Dr. Stefanie Wannow",
        "Alexandra Hofmann",
        "Nicole Adolph"
      ],
      "contents": "Strategisches Marketing (Ziele, Segmentierung, Marktanalyse). Operatives Marketing (Marketing-Mix: Produkt, Preis, Distribution, Kommunikation). Digitales Marketing und Marktforschung. Spezielle Coachingeinheiten zu Präsentations- und Rhetoriktechniken.",
      "objectives": "Verstehen der strategischen und operativen Entscheidungsfelder im Marketing. Anwendung von Marketing-Instrumenten in Gruppenarbeiten und Fallstudien. Professionelle Präsentation von Ergebnissen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 60,
          "details": "Klausur (60-90 Min), teilweise Antwort-Wahl-Verfahren"
        },
        {
          "type": "Präsentation",
          "weight": 40,
          "details": "Gruppenpräsentation Fallstudie (15-25 Min)"
        }
      ],
      "hasMc": true,
      "mcDetails": "TL1 Klausur teilweise mit Antwort-Wahl-Verfahren.",
      "workloadTotal": 180,
      "workloadPresence": 75,
      "workloadSelfStudy": 105,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Reale Social-Media- & Brand-Kampagne für ein Gießener KMU"
        ],
        "alternativeGradingDesc": "Ungrading & Feedback-Dialog: Während des Semesters erhalten die Studierenden detailliertes Peer- und Dozenten-Feedback zu ihren Kampagnenentwürfen. Am Semesterende reflektieren sie ihren Lernfortschritt in einem Portfolio und schlagen in einem 10-minütigen Gespräch begründet ihre eigene Note vor.",
        "authenticAssessmentDesc": "In Kleingruppen analysieren die Studierenden den aktuellen Markenauftritt eines lokalen Gießener Geschäfts (z.B. Unverpackt-Laden oder Café). Sie entwickeln eine zielgerichtete Multi-Channel-Marketingkampagne mit konkreten Inhaltsentwürfen, Budgetierungsplänen und Messkriterien (KPIs).",
        "pedagogicalBenefit": "Arbeit an realen regionalen Herausforderungen. Maximale didaktische Nähe zum Berufsalltag in Werbeagenturen und Marketingabteilungen."
      }
    },
    {
      "id": "202",
      "name": "Externes Rechnungswesen",
      "englishName": "Financial Accounting",
      "semester": 2,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Frank Althoff",
      "teachers": [
        "Prof. Dr. Frank Althoff",
        "Prof. Dr. Oliver Voß",
        "Prof. Dr. Katharina Dillkötter"
      ],
      "contents": "Externe Rechnungslegung nach HGB und IFRS. Bilanzierungsvorschriften für die Bilanzposten und Gewinn- und Verlustrechnung (GuV). Kapitalflussrechnung, Anhang, Lagebericht und Grundlagen der Jahresabschlussanalyse.",
      "objectives": "Abgrenzung verschiedener Rechnungslegungssysteme (HGB, IFRS, EStG). Verstehen und Anwenden der Grundsätze ordnungsmäßiger Buchführung (GoB) und Erstellen von Jahresabschlüssen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 90 Minuten (teilweise Antwort-Wahl-Verfahren möglich)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "DAX-Bilanzanalyse für Investoren (Finanzbericht)"
        ],
        "authenticAssessmentDesc": "Jeder Studierende wählt ein börsennotiertes DAX-Unternehmen aus und erstellt eine strukturierte Bilanzanalyse. Unter Anwendung von HGB- und IFRS-Vorschriften werden Kennzahlen zur Liquidität, Rentabilität und Verschuldung berechnet und kritisch im Hinblick auf ein potenzielles Investorenszenario bewertet.",
        "alternativeGradingDesc": "Specifications Grading mit Peer-Review: Der Bericht muss feste Kriterien (korrekte Kennzahlenermittlung, fundierte Interpretation, formale Wissenschaftlichkeit) erfüllen. Ein obligatorisches Peer-Feedback im Semester hilft, Fehler frühzeitig zu korrigieren.",
        "pedagogicalBenefit": "Vermittelt ein tiefes, anwendungsbezogenes Verständnis realer Geschäftsberichte anstelle des bloßen Auswendiglernens von Bilanzierungsparagraphen."
      }
    },
    {
      "id": "203",
      "name": "Wirtschaftsinformatik und Digital Business",
      "englishName": "Information systems and digital business",
      "semester": 2,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Nils Madeja",
      "teachers": [
        "Prof. Dr. Nils Madeja",
        "Prof. Dr. Christian Leyh",
        "und weitere"
      ],
      "contents": "Grundbegriffe der Wirtschaftsinformatik, Hardware/Software, IT-Netzwerke, Internetsicherheitsaspekte, Geschäftsprozesse, Digitalwirtschaft, Digitalisierung der Wertschöpfung. Praktische Laborübungen mit Standardsoftware (ERP/SAP) und Webseitenentwicklung.",
      "objectives": "Erkennen des Nutzens von IT-Systemen im Unternehmenskontext. Abbildung von Geschäftsprozessen in ERP-Systemen und Verstehen digitaler Geschäftsmodelle.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 90 Minuten (kann Antwort-Wahl-Verfahren beinhalten)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur kann Antwort-Wahl-Verfahren beinhalten.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "No-Code-Anwendungsentwicklung & SQL-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden konzipieren eine relationale Datenbank für einen konkreten betriebswirtschaftlichen Anwendungsfall (z.B. Fuhrparkmanagement oder Seminarverwaltung). Sie setzen diese Datenbank mit SQL auf und bauen darauf eine funktionale Web- oder Mobile-App mithilfe eines modernen No-Code-Tools (z.B. Glide, Softr) auf.",
        "alternativeGradingDesc": "Specifications Grading: Die Note ergibt sich aus einer Checkliste technischer Anforderungen (3. Normalform eingehalten, funktionierende Abfragen, benutzerfreundliches Interface).",
        "pedagogicalBenefit": "Schließt die Lücke zwischen theoretischer Wirtschaftsinformatik und praktischer Problemlösungskompetenz durch das Erschaffen eines funktionierenden Softwaresystems."
      }
    },
    {
      "id": "206",
      "name": "Produktionswirtschaft",
      "englishName": "Production Economics",
      "semester": 2,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr.-Ing. Serhan Bastürk",
      "teachers": [
        "Prof. Dr.-Ing. Serhan Bastürk"
      ],
      "contents": "Produktionssysteme und -prozesse. Grundlagen der hierarchischen Produktionsplanung (strategisch, taktisch, operativ). Materialbedarfsplanung, Produktionssteuerung und produktionsorientierte Managementsysteme. Praxisnahe Fallstudien.",
      "objectives": "Verstehen der zentralen Problemstellungen zur Planung, Gestaltung und zum Betrieb von Produktionssystemen. Erkennen funktionaler Zusammenhänge zwischen Ressourceneinsatz (Input) und Produktionsergebnis (Output).",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 90 Minuten (teilweise Antwort-Wahl-Verfahren möglich)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Supply Chain Resiliency & Optimization Audit"
        ],
        "authenticAssessmentDesc": "Die Studierenden untersuchen die Lieferkette oder Produktionsstruktur eines regionalen Betriebs (z.B. einer Brauerei oder eines Fertigungsbetriebs). Sie identifizieren logistische Engpässe und CO2-Treiber und entwerfen ein resilientes, nachhaltiges Optimierungskonzept inklusive Notfallplänen für Krisenszenarien.",
        "alternativeGradingDesc": "Labor-Based Contract Grading: Strukturierte Zwischenberichte über den Analysefortschritt sichern ein solides Bestehen. Durch die Einbindung mathematischer Optimierungsmodelle (z.B. Transportkostenminimierung) kann eine exzellente Note erzielt werden.",
        "pedagogicalBenefit": "Erfordert echtes Systemdenken und die Anwendung moderner Logistikkonzepte auf volatile Märkte und ökologische Vorgaben."
      }
    },
    {
      "id": "204",
      "name": "Wirtschaftsrechtliche Grundlagen",
      "englishName": "Fundamentals of Business Law",
      "semester": 2,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Leonie Kempel",
      "teachers": [
        "n.n."
      ],
      "contents": "Aufbau des BGB und HGB, juristische Subsumtionstechnik, Rechtsgeschäfte, Vertragsabschluss, Stellvertretung, Schuldverhältnisse (Leistungspflichten, Störungen, Beendigung), Allgemeine Geschäftsbedingungen (AGB).",
      "objectives": "Erwerb grundlegender Kenntnisse im Bürgerlichen Recht (BGB) und Handelsrecht (HGB). Befähigung zur Lösung praktischer Rechtsfälle durch Gutachten- und Subsumtionstechnik.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur"
        }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Simuliertes Mandantengespräch & Rechtliches Gutachten (Moot Court)"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden einen komplexen, ungeklärten Rechtsfall aus der unternehmerischen Praxis. Sie führen ein simuliertes Erstberatungsgespräch mit einem Mandanten durch und erstellen ein rechtssicheres, präzises juristisches Gutachten im Gutachtenstil.",
        "alternativeGradingDesc": "Specifications Grading: Das Gutachten und die Gesprächsführung müssen vordefinierten Qualitätskriterien (fehlerfreie Subsumtionstechnik, Strukturierung, verständliche Erklärung komplexer Klauseln) entsprechen. Studierende können bei Mängeln in der Argumentation einmalig nachbessern.",
        "pedagogicalBenefit": "Schult die für Wirtschaftsjuristen essenzielle Fähigkeit, abstrakte Gesetze auf reale, dynamische Praxisfälle anzuwenden und Mandanten verständlich zu beraten."
      }
    },
    {
      "id": "205",
      "name": "Statistik für Betriebswirte",
      "englishName": "Statistics for Business Majors",
      "semester": 2,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Jens Klose",
      "teachers": [
        "Prof. Dr. Jens Klose"
      ],
      "contents": "Deskriptive Statistik (Häufigkeitsverteilungen, Lage- und Streuungsmaße, Konzentrationsmaße, Indexzahlen wie Preis- und Aktienindizes). Korrelation und Regression. Grundlagen der Wahrscheinlichkeitsrechnung und spezielle Verteilungen (Binomial-, Normalverteilung). Induktive Statistik.",
      "objectives": "Auswertung von Musterdaten mit statistischen Methoden und Interpretation der Ergebnisse im betriebswirtschaftlichen Kontext.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, teilweise Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise mit Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Reproduzierbarer Datenanalyse-Report (Data Science Case Study)"
        ],
        "authenticAssessmentDesc": "Die Studierenden erhalten einen unbereinigten, realen Datensatz (z.B. Konsumentenbefragung oder Maschinendaten). Mithilfe moderner Tools (R, Python oder erweitertes Excel) bereinigen sie die Daten, führen deskriptive und induktive Analysen durch und fassen ihre Erkenntnisse in einem interaktiven Dashboard (z.B. Tableau oder Excel) zusammen.",
        "alternativeGradingDesc": "Specifications Grading mit Code-Review: Der datenanalytische Code und das Dashboard müssen festgelegte Standards der mathematischen Richtigkeit, Reproduzierbarkeit und visuellen Lesbarkeit erfüllen.",
        "pedagogicalBenefit": "Bereitet ideal auf die digitalisierte Controlling- und Analyse-Praxis vor. Verhindert das reine Auswendiglernen statistischer Formeln ohne Anwendungsbezug."
      }
    },
    {
      "id": "301",
      "name": "Finanzwirtschaft",
      "englishName": "Financial Management",
      "semester": 3,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Christoph Gallus",
      "teachers": [
        "Prof. Dr. Christoph Gallus",
        "Prof. Dr. Anke Haag"
      ],
      "contents": "Investitionsrechnung (statische und dynamische Verfahren wie Kapitalwert, interner Zinsfuß). Finanzierung (Beteiligungsfinanzierung, Fremdfinanzierung, Mezzanine-Kapital, Innenfinanzierung). Finanzmärkte (Marktsegmente, Börsenhandel und derivative Finanzprodukte).",
      "objectives": "Bewertung von Investitionsentscheidungen und differenzierte Beurteilung von Finanzierungsalternativen. Kennenlernen von Finanzmarktinstrumenten.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, teilweise Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Interaktives Investment-Portfolio & Risiko-Audit für einen realen Kunden"
        ],
        "authenticAssessmentDesc": "Die Studierenden erstellen ein maßgeschneidertes Investitions- und Risikokonzept für ein reales oder simuliertes Kundenprofil (z.B. Gießener Industrieunternehmen, Startup oder Privatkunde). Sie analysieren die Risikotragfähigkeit, wählen Finanzierungsinstrumente aus und präsentieren ihre Anlagestrategie in einem simulierten Anlageausschuss-Meeting.",
        "alternativeGradingDesc": "Competency-Based Portfolio: Das Portfolio besteht aus einer Finanzanalyse, dem Anlagemodell und der Videoaufzeichnung der Ausschusspräsentation. Bewertung basiert auf der Risikoadäquanz und der Qualität der finanzwirtschaftlichen Begründung.",
        "pedagogicalBenefit": "Verbindet finanzmathematische Berechnungen mit echtem, verantwortungsvollem Risikobewusstsein und Beratungskompetenz."
      }
    },
    {
      "id": "302",
      "name": "Internes Rechnungswesen",
      "englishName": "Managerial Accounting",
      "semester": 3,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Timo Kachel",
      "teachers": [
        "Prof. Dr. Timo Kachel"
      ],
      "contents": "Grundbegriffe der Kosten- und Leistungsrechnung (KLR). Kostenartenrechnung, Kostenstellenrechnung (Betriebsabrechnungsbogen, innerbetriebliche Leistungsverrechnung), Kostenträgerrechnung (Kalkulationsverfahren). Erfolgsrechnung (Periodenerfolgsrechnung, Deckungsbeitragsrechnung). Kennzahlen der Unternehmenssteuerung.",
      "objectives": "Abgrenzung der KLR von anderen Teilbereichen des Rechnungswesens. Beherrschung von Vollkosten- und Teilkostenrechnungsverfahren zur Lösung interner Planungs- und Kontrollfragen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 60-90 Min, teilweise im Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur kann ganz oder teilweise im Antwort-Wahl-Verfahren durchgeführt werden.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Target-Costing- und Kostenoptimierungsgutachten"
        ],
        "authenticAssessmentDesc": "Die Studierenden agieren als Controlling-Berater für einen fiktiven Produktionsbetrieb, dessen Hauptprodukt unter starkem Preisdruck steht. Sie führen eine Prozesskostenrechnung durch, erstellen ein Target-Costing-Modell basierend auf Kundenpräferenzen und verfassen ein Gutachten zur strategischen Kostensenkung.",
        "alternativeGradingDesc": "Competency-Based Grading: Aufteilung der Bewertung in mathematisch-analytische Präzision (Kostenrechnungskompetenz) und die strategisch-didaktische Überzeugungskraft des Gutachtens.",
        "pedagogicalBenefit": "Erfordert ein tiefes Verständnis des Einflusses von Kostenentscheidungen auf betriebliche Prozesse, weit über das mechanische Ausrechnen von Zuschlagssätzen hinaus."
      }
    },
    {
      "id": "303",
      "name": "Steuerlehre",
      "englishName": "Taxation",
      "semester": 3,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Katharina Dillkötter",
      "teachers": [
        "Prof. Dr. Katharina Dillkötter",
        "Prof. Dr. Frank Althoff",
        "Prof. Dr. Oliver Voß"
      ],
      "contents": "Grundlagen der betriebswirtschaftlichen Steuerlehre. Einkommensteuer (Ermittlung des Einkommens, Tarif), Körperschaftsteuer (Ausschüttungsbelastung), Gewerbesteuer (Gewerbeertrag, Hebesatz). Ertragsteuerliche Gesamtbelastung der Rechtsformen. Umsatzsteuer (Steuerbarkeit, Vorsteuerabzug). Erbschaft- und Schenkungsteuer.",
      "objectives": "Ermittlung der Steuerbemessungsgrundlage und Berechnung der Steuerbelastungen für konkrete mittelschwere Fälle. Systematik der Ertragsteuern und Umsatzsteuer verstehen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (90 Minuten)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Steuergestaltungs- und Beratungs-Memo für ein KMU"
        ],
        "authenticAssessmentDesc": "Die Studierenden erhalten die wirtschaftlichen Rahmendaten eines mittelständischen Familienunternehmens, das vor einer Restrukturierung steht (z.B. Rechtsformwechsel oder Unternehmensnachfolge). Sie verfassen ein professionelles Steuerberatungs-Memo, vergleichen die steuerlichen Belastungen quantitativ und geben eine fundierte Gestaltungsempfehlung ab.",
        "alternativeGradingDesc": "Specifications-Based Assessment: Das Rechenmodell (Excel) und die steuerrechtliche Begründung werden getrennt voneinander auf fachliche Richtigkeit und logische Nachvollziehbarkeit bewertet.",
        "pedagogicalBenefit": "Ersetzt das Auswendiglernen von Paragraphen durch die reale, kreative Gestaltungskraft einer exzellenten steuerlichen Beratungspraxis."
      }
    },
    {
      "id": "304",
      "name": "Wirtschaftsinformatik und Datenanalyse",
      "englishName": "Information Systems and Data Analysis",
      "semester": 3,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Susanne Müller",
      "teachers": [
        "Prof. Dr. Susanne Müller",
        "Jürgen Köhlinger",
        "Volker Lenz",
        "Steffen Schäfer"
      ],
      "contents": "Anwendung von Methoden und Tools zur datenorientierten Lösung betrieblicher Probleme. Tabellenkalkulation (fortgeschrittene Excel-Funktionen), individueller Datenbankaufbau (Access/SQL, Datenbankdesign, ER-Modellierung, Abfragen). Datenvisualisierung und Berichterstellung.",
      "objectives": "Gezielte Auswahl und Nutzung von Analysewerkzeugen (Datenbank vs. Tabellenkalkulation). Beherrschung grundlegender SQL-Befehle und Erstellung strukturierter Berichte.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (90-120 Min), teilweise Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise mit Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "305",
      "name": "Angewandte Makroökonomie",
      "englishName": "Applied Macroeconomics",
      "semester": 3,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Markus Gerhard",
      "teachers": [
        "Prof. Dr. Markus Gerhard",
        "Prof. Dr. Jens Klose",
        "Alexander Schwab"
      ],
      "contents": "Grundlagen der volkswirtschaftlichen Gesamtrechnung. Stabilitätspolitische Ziele in der BRD. Kurzfristige Wirkungszusammenhänge (nachfrageorientierte Makroökonomie: Güter-, Geld- und Finanzmarkt, IS-LM-Modell, Geldpolitik). Langfristige Perspektive (angebotsspezifisches Wachstum, Geldmenge). Europäische Fiskal- und Geldpolitik.",
      "objectives": "Verstehen gesamtwirtschaftlicher Zusammenhänge in einer geschlossenen und offenen Volkswirtschaft. Nutzung makroökonomischer Modelle zur Bewertung wirtschaftspolitischer Maßnahmen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (60-90 Min), teilweise Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "306",
      "name": "Wirtschaftsrechtliche Vertiefung",
      "englishName": "Advanced Business Law",
      "semester": 3,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Leonie Kempel",
      "teachers": [
        "Prof. Dr. Leonie Kempel"
      ],
      "contents": "Besonderes Schuldrecht: Veräußerungsverträge (Kaufvertrag, Gewährleistung, Garantie, Handelskauf). Dienst- und Werkvertrag. Unerlaubte Handlungen (§ 823 BGB, Produkthaftung). Ungerechtfertigte Bereicherung. Sachenrecht: Besitz, Eigentum, Eigentumserwerb und Sicherungsrechte.",
      "objectives": "Schärfung des juristischen Blicks bei wirtschaftlichen Abläufen. Verbesserung der Argumentationsfähigkeit und selbstständige Lösung komplexerer praktischer Fälle.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur"
        }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Simuliertes Mandantengespräch & Rechtliches Gutachten (Moot Court)"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden einen komplexen, ungeklärten Rechtsfall aus der unternehmerischen Praxis. Sie führen ein simuliertes Erstberatungsgespräch mit einem Mandanten durch und erstellen ein rechtssicheres, präzises juristisches Gutachten im Gutachtenstil.",
        "alternativeGradingDesc": "Specifications Grading: Das Gutachten und die Gesprächsführung müssen vordefinierten Qualitätskriterien (fehlerfreie Subsumtionstechnik, Strukturierung, verständliche Erklärung komplexer Klauseln) entsprechen. Studierende können bei Mängeln in der Argumentation einmalig nachbessern.",
        "pedagogicalBenefit": "Schult die für Wirtschaftsjuristen essenzielle Fähigkeit, abstrakte Gesetze auf reale, dynamische Praxisfälle anzuwenden und Mandanten verständlich zu beraten."
      }
    },
    {
      "id": "401",
      "name": "Projektmanagement - inkl. Coaching Schlüsselkompetenzen",
      "englishName": "Project Management - including Coaching Key Skills",
      "semester": 4,
      "sws": 5,
      "crp": 6,
      "type": "pflicht",
      "coaching": true,
      "responsible": "Prof. Dr. Raphaël Johannknecht",
      "teachers": [
        "Prof. Dr. Raphaël Johannknecht",
        "Prof. Dr. Anne Mazuga",
        "Nicole Adolph",
        "Alexandra Hofmann",
        "und weitere"
      ],
      "contents": "Klassisches und agiles Projektmanagement entlang typischer Projektphasen (Initialisierung, Definition, Planung, Steuerung, Abschluss). Gruppen- und Teamarbeit, aktives Zuhören, Feedbackprozesse und Konfliktbewältigung. Praktische Bearbeitung eines realen Gruppen-Übungsprojekts.",
      "objectives": "Befähigung zur Übernahme von (Teil-)Projektverantwortung. Erstellung typischer Dokumente (Gantt-Chart, Netzplan). Steuerung und Controlling von Teamprozessen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 40,
          "details": "Klausur (teilweise/komplett im Antwort-Wahl-Verfahren)"
        },
        {
          "type": "Projekt",
          "weight": 40,
          "details": "Ausarbeitung & Präsentation des Übungsprojekts"
        },
        {
          "type": "Lerntagebuch",
          "weight": 20,
          "details": "Lernjournal zur Reflexion"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise oder komplett durch Antwort-Wahl-Verfahren.",
      "workloadTotal": 180,
      "workloadPresence": 75,
      "workloadSelfStudy": 105,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Agiles Nonprofit-Projekt (Service Learning)"
        ],
        "authenticAssessmentDesc": "Die Projektteams planen und realisieren ein echtes, gemeinnütziges Projekt in Gießen (z.B. Spendenlauf, Nachhaltigkeitsflohmarkt oder Digitalisierungs-Hilfe für Senioren). Sie nutzen agile Methoden (Scrum/Kanban), führen wöchentliche Stand-ups und dokumentieren den Fortschritt digital.",
        "alternativeGradingDesc": "Labor-Based Contract Grading: Die Note basiert auf der kontinuierlichen Mitwirkung, der termingerechten Erreichung selbstgesteckter Sprint-Ziele und der Qualität der gemeinsamen Retrospektiven im Team.",
        "pedagogicalBenefit": "Kombiniert theoretische Projektmanagement-Methodik mit echter sozialer Verantwortung und hoher sozialer Interaktionskompetenz."
      }
    },
    {
      "id": "402",
      "name": "Logistik und Supply Chain Management",
      "englishName": "Logistics and Supply Chain Management",
      "semester": 4,
      "sws": 6,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Marcus Fuchs",
      "teachers": [
        "Prof. Dr. Marcus Fuchs"
      ],
      "contents": "Hauptakteure der Wertschöpfungs- und Lieferkette. Gestaltung und Optimierung von Logistiknetzwerken. Gängige Planungs- und Steuerungsverfahren im SCM. Logistik 4.0, Digitalisierung in der Supply Chain, Nachhaltigkeit und Risikomanagement in der Logistik.",
      "objectives": "Einordnung von Logistik- und SCM-Konzepten in die kaufmännische Leistungserstellung. Anwendung von Planungsmethoden an Praxisbeispielen (z.B. ERP-Systeme).",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 90 Minuten (ggf. teilweise im Antwort-Wahl-Verfahren)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 90,
      "workloadSelfStudy": 60,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "403",
      "name": "Nachhaltigkeit und gesellschaftliche Verantwortung",
      "englishName": "Sustainability and social responsibility",
      "semester": 4,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Isabell Lenz",
      "teachers": [
        "Prof. Dr. Isabell Lenz",
        "Prof. Dr. Julian Conrads"
      ],
      "contents": "Grundlagen der Nachhaltigkeit (SDGs der UN, planetare Grenzen, Donut Economics). Menschenbild (Homo Oeconomicus vs. sozial anpassungsfähiger Mensch). Unternehmerisches Nachhaltigkeitsmanagement (CSR, Triple Bottom Line, Lieferkettenregulierung). Branchenspezifische Nachhaltigkeitsstrategien.",
      "objectives": "Erarbeitung von Lösungsansätzen für eine nachhaltige ökonomische, ökologische und sozial gerechte Entwicklung. Ermittlung des ökologischen Fußabdrucks (Footprint) und Reflexion von Konsummustern.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, teilweise Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise mit Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "HR-Audit & Leadership Guidelines für ein agiles Startup"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln ein modernes Führungs- und Personalkonzept für ein schnell wachsendes Unternehmen. Sie entwerfen Maßnahmen zum Employer Branding, Strategien zur Talentförderung und Ethik-Leitlinien für das Management, um den sozialen und ökonomischen Erfolg des Betriebs zu sichern.",
        "alternativeGradingDesc": "Contract Grading: Klare Verträge regeln die Anforderungen für die Notenstufen. Ein Bestehen erfordert die Entwicklung der HR-Guidelines; für eine 1.x ist die fundierte Ausarbeitung eines ethischen Wertekompasses erforderlich.",
        "pedagogicalBenefit": "Fördert ein ganzheitliches Verständnis von Führung, sozialer Verantwortung und Organisationsdynamik im realen Arbeitskontext."
      }
    },
    {
      "id": "404",
      "name": "Research Lab: Wissenschaftliches Arbeiten mit Künstlicher Intelligenz (KI)",
      "englishName": "Research Lab: Academic Writing and Thinking with Artificial Intelligence (AI)",
      "semester": 4,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Matthias Groß",
      "teachers": [
        "Prof. Dr. Matthias Groß"
      ],
      "contents": "Grundlagen wissenschaftlicher Forschung. Literaturrecherche und -verwaltung (EBSCO, Citavi). Strukturierung wissenschaftlicher Texte, Zitationstechniken. Reflektierter, ethischer und regelkonformer Einsatz digitaler/KI-gestützter Werkzeuge (ChatGPT, Connected Papers, Jenni.ai). Erstellung eines Exposés und Forschungsdesigns.",
      "objectives": "Erlangen grundlegender Kompetenzen des wissenschaftlichen Arbeitens unter Berücksichtigung aktueller KI-Tools. Formulierung klarer Forschungsfragen und kritische Reflexion von KI-Generaten.",
      "exams": [
        {
          "type": "Portfolio",
          "weight": 100,
          "details": "Modulbegleitendes Portfolio (Gliederung, Exposé, KI-Dokumentation)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Forschungs-Exposé mit KI-Transparenz- und Prompt-Protokoll"
        ],
        "authenticAssessmentDesc": "Die Studierenden verfassen ein wissenschaftliches Exposé zu einem selbstgewählten BWL-Thema. Der Clou: Sie dokumentieren im Detail den Einsatz von KI-Tools (wie ChatGPT, Consensus oder Connected Papers). Sie legen ihre Prompts offen, reflektieren Halluzinationen und weisen nach, wie sie die generierten Quellen verifiziert haben.",
        "alternativeGradingDesc": "Ungrading mit Portfolio: Der Lernprozess steht im Mittelpunkt. Das Portfolio wird stufenweise eingereicht. Die Endnote wird im Gespräch über den Fortschritt der wissenschaftlichen Methodik und den reflektierten Werkzeugeinsatz ermittelt.",
        "pedagogicalBenefit": "Bereitet optimal auf die Bachelorthesis vor, indem es die Realität des KI-gestützten Arbeitens nicht verbietet, sondern akademisch-kritisch professionalisiert."
      }
    },
    {
      "id": "505",
      "name": "Außenwirtschaft",
      "englishName": "International Economics",
      "semester": 5,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Markus Gerhard",
      "teachers": [
        "Prof. Dr. Markus Gerhard",
        "Prof. Dr. Jens Klose",
        "Alexander Schwab"
      ],
      "contents": "Internationale Wirtschaftsbeziehungen und Zahlungsbilanz. Ursachen und Wirkungen des internationalen Handels. Handels- und Währungspolitik (Zölle, Protektionismus). Devisenmärkte, Wechselkurssysteme und Devisenspekulation. Stabilisierungspolitik in offenen Volkswirtschaften.",
      "objectives": "Verstehen der Funktionsweise offener Volkswirtschaften und der Logik der Zahlungsbilanz. Einordnung internationaler Finanztransaktionen und Wechselkursschwankungen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (60-90 Min), teilweise Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise mit Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "601",
      "name": "Strategische Unternehmensführung und Planspiel - inkl. Coaching Schlüsselkompetenzen",
      "englishName": "Strategic Business Management, Business Simulation Games and Business Start-Up, including Coaching Key Skills",
      "semester": 6,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "coaching": true,
      "responsible": "Prof. Dr. Sven Keller",
      "teachers": [
        "Prof. Dr. Sven Keller",
        "Prof. Dr. Anne Mazuga",
        "und weitere"
      ],
      "contents": "Computergestütztes Planspiel (Unternehmenssimulation) zur strategischen Führung eines fiktiven Unternehmens in Teams über mehrere Spielperioden hinweg. Strategische Marketingentscheidungen, Finanzplanung und Teamentwicklung. Ausarbeitung und Pitch eines tragfähigen Gründungskonzepts.",
      "objectives": "Ganzheitliche Steuerung eines Unternehmens aus einer strategischen, funktionsübergreifenden Perspektive. Anwendung theoretischen Wissens in einer simulierten Praxisumgebung under Zeitdruck.",
      "exams": [
        {
          "type": "Lerntagebuch",
          "weight": 15,
          "details": "Erstellen von Lernjournalen (15%)"
        },
        {
          "type": "Performanz- bzw. Simulationsprüfung",
          "weight": 45,
          "details": "Simulationsprüfung / Planspielteilnahme (45%)"
        },
        {
          "type": "Projekt",
          "weight": 40,
          "details": "Gründungsprojekt mit Präsentation/Pitch (40%)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Aufsichtsrat-Hearing & Investoren-Pitch"
        ],
        "authenticAssessmentDesc": "Nach Abschluss des computergestützten Planspiels treten die Teams vor ein Gremium aus Professoren und Wirtschaftsvertretern ('Aufsichtsrat'). Sie müssen dort ihre strategischen Entscheidungen rechtfertigen, Abweichungen von der Planung erklären und ein neues, zukunftsfähiges Sanierungskonzept präsentieren.",
        "alternativeGradingDesc": "Competency-Based Grading (Hearing 50%, Pitch 50%): Klares Bewertungsschema für strategisches Denken, Krisenmanagement, finanzielle Argumentation und souveränes Auftreten im Kreuzverhör.",
        "pedagogicalBenefit": "Simuliert exakt die Realität von Führungskräften bei Gesellschafterversammlungen oder vor Kreditgebern unter hohem Leistungs- und Zeitdruck."
      }
    },
    {
      "id": "605",
      "name": "Praxisphase oder Auslandssemester",
      "englishName": "Practical Training Semester or Study Abroad",
      "semester": 6,
      "sws": 0,
      "crp": 30,
      "type": "pflicht",
      "responsible": "Prof. Dr. Oliver Voß",
      "teachers": [
        "Volker Lenz",
        "Länderbeauftragte"
      ],
      "contents": "Mindestens 20 Wochen netto betriebliches Praktikum im In- oder Ausland in kaufmännischen Funktionsbereichen (vorzugsweise im Bereich des gewählten Schwerpunkts) oder ein integriertes Auslandssemester an einer Partnerhochschule im Umfang von 30 Creditpoints.",
      "objectives": "Erwerb praktischer Handlungskompetenz und Transfer theoretischer Studienkenntnisse in das reale Berufsleben. Kennenlernen betrieblicher Projektabläufe und Organisationsstrukturen.",
      "exams": [
        {
          "type": "Projektbericht Praktikum",
          "weight": 100,
          "details": "Zwei schriftliche Zwischenberichte & ein Abschlussbericht (Bewertung: Bestanden / Nicht bestanden)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 900,
      "workloadPresence": 0,
      "workloadSelfStudy": 900,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "700",
      "name": "Bachelorthesis",
      "englishName": "Undergraduate Dissertation (Final Thesis)",
      "semester": 7,
      "sws": 0,
      "crp": 12,
      "type": "pflicht",
      "responsible": "Prof. Dr. Oliver Voß",
      "teachers": [
        "Verschiedene Lehrende des Fachbereichs"
      ],
      "contents": "Selbstständige wissenschaftliche Bearbeitung einer komplexen kaufmännischen oder theoretischen Fragestellung unter Einhaltung wissenschaftlicher Methoden und formaler Standards innerhalb einer Frist von 12 Wochen.",
      "objectives": "Nachweis der Fähigkeit, eine praxisrelevante oder theoretische Problemstellung eigenständig, strukturiert und methodisch sauber wissenschaftlich zu bearbeiten.",
      "exams": [
        {
          "type": "Bachelorthesis",
          "weight": 100,
          "details": "Schriftliche Ausarbeitung (30-50 Seiten)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 360,
      "workloadPresence": 0,
      "workloadSelfStudy": 360,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Wissenschaftliches Paper & 3-Minuten-Thesen-Video"
        ],
        "authenticAssessmentDesc": "Die traditionelle Bachelorthesis (30-50 Seiten) wird reformiert: Studierende verfassen ein prägnantes, 15-seitiges wissenschaftliches Paper im Format einer Fachzeitschrift, ergänzt durch ein professionelles 3-minütiges Video (Pitch), das die zentralen Erkenntnisse für die betriebliche Praxis verständlich aufbereitet.",
        "alternativeGradingDesc": "Double-Blind Peer Review Simulation & Rubrics: Bewertung durch Erst- und Zweitprüfer anhand einer transparenten, wissenschaftlichen Bewertungsmatrix, die den Studierenden bereits vorab bekannt ist. Das Video fließt als Transferkompetenz in die Note ein.",
        "pedagogicalBenefit": "Fördert die im Berufsleben kritische Fähigkeit, komplexe wissenschaftliche Erkenntnisse extrem präzise auf den Punkt zu bringen und multimedial zu vermitteln."
      }
    },
    {
      "id": "471",
      "name": "Strategisches Controlling",
      "englishName": "Strategic Controlling",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "controlling",
      "responsible": "Prof. Dr. Gero Holthoff",
      "teachers": [
        "Prof. Dr. Gero Holthoff"
      ],
      "contents": "Grundlagen des strategischen Controllings. Unterstützung einer wert- und risikoorientierten Unternehmensführung. Strategische Analyse (SWOT, Porters 5 Forces), Bewertung strategischer Handlungsoptionen, Investitionscontrolling, strategische Steuerung (Balanced Scorecard, Werttreiberbäume). Risikomanagement.",
      "objectives": "Erwerb speziellen Fachwissens zur Einbettung des Controllings in langfristige Führungsaufgaben. Selbstständige und kritische Anwendung strategischer Controllinginstrumente.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (60-90 Minuten), kann Antwort-Wahl-Verfahren beinhalten"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur kann Antwort-Wahl-Verfahren beinhalten.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "472",
      "name": "Kostenmanagement",
      "englishName": "Cost Management",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "controlling",
      "responsible": "Prof. Dr. Timo Kachel",
      "teachers": [
        "Prof. Dr. Timo Kachel"
      ],
      "contents": "Konzepte und Instrumente des Kosten- und Erfolgsmanagements. Grenzplankostenrechnung, stufenweise Fixkostendeckungsrechnung, Prozesskostenrechnung, Produktlebenszykluskostenrechnung, Target Costing, Working Capital Management und Umweltkostenmanagement.",
      "objectives": "Erklärung und zielgerichtete Anwendung fortgeschrittener Kostenrechnungssysteme. Bewertung der Zweckmäßigkeit von Instrumenten für spezifische Problemsituationen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (max. 90 Minuten), kann ganz oder teilweise im Antwort-Wahl-Verfahren durchgeführt werden"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur kann ganz oder teilweise im Antwort-Wahl-Verfahren durchgeführt werden.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "HR-Audit & Leadership Guidelines für ein agiles Startup"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln ein modernes Führungs- und Personalkonzept für ein schnell wachsendes Unternehmen. Sie entwerfen Maßnahmen zum Employer Branding, Strategien zur Talentförderung und Ethik-Leitlinien für das Management, um den sozialen und ökonomischen Erfolg des Betriebs zu sichern.",
        "alternativeGradingDesc": "Contract Grading: Klare Verträge regeln die Anforderungen für die Notenstufen. Ein Bestehen erfordert die Entwicklung der HR-Guidelines; für eine 1.x ist die fundierte Ausarbeitung eines ethischen Wertekompasses erforderlich.",
        "pedagogicalBenefit": "Fördert ein ganzheitliches Verständnis von Führung, sozialer Verantwortung und Organisationsdynamik im realen Arbeitskontext."
      }
    },
    {
      "id": "573",
      "name": "Operatives Controlling",
      "englishName": "Operational Controlling",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "controlling",
      "responsible": "Prof. Dr. Gero Holthoff",
      "teachers": [
        "Prof. Dr. Gero Holthoff",
        "Prof. Dr. Timo Kachel"
      ],
      "contents": "Grundlagen des operativen Controllings. Operative Planung (Gesamtunternehmensplanung, Budgetierungssysteme, Planungsrechnungen). Operative Steuerung (Kennzahlensysteme, Verrechnungspreise, Anreizsysteme). Operative Kontrolle (Abweichungsanalyse, Kontrollansätze, internes Reporting).",
      "objectives": "Beherrschung von Verfahren, die das operative Management bei Planungs-, Steuerungs- und Kontrollaufgaben unterstützen. Durchführung von Abweichungsanalysen an Fallbeispielen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (60-90 Minuten), kann Antwort-Wahl-Verfahren beinhalten"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur kann Antwort-Wahl-Verfahren beinhalten.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "400",
      "name": "Standardsoftware für Finanzwesen und Controlling",
      "englishName": "Standard Software for Financial Accounting and Controlling",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "controlling",
      "responsible": "Prof. Dr. Gerrit Sames",
      "teachers": [
        "Prof. Dr. Christian Leyh",
        "Prof. Dr. Gerrit Sames",
        "Steffen Schäfer"
      ],
      "contents": "Einführung in die Funktionalitäten und Merkmale betrieblicher Standardsoftware am Beispiel von SAP S/4HANA (FI/CO). Abbildung von Organisationsstrukturen, Stammdatenpflege, Erfassung realer Geschäftsvorfälle im Finanzwesen und Controlling und Durchführung von Auswertungen.",
      "objectives": "Verstehen der Systemzusammenhänge moderner ERP-Systeme. Befähigung zur Erfassung und Nachvollziehbarkeit komplexer Buchungssätze und Controllingdaten in SAP.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur mit theoretischem und praktischem Teil am SAP System"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Interaktives Investment-Portfolio & Risiko-Audit für einen realen Kunden"
        ],
        "authenticAssessmentDesc": "Die Studierenden erstellen ein maßgeschneidertes Investitions- und Risikokonzept für ein reales oder simuliertes Kundenprofil (z.B. Gießener Industrieunternehmen, Startup oder Privatkunde). Sie analysieren die Risikotragfähigkeit, wählen Finanzierungsinstrumente aus und präsentieren ihre Anlagestrategie in einem simulierten Anlageausschuss-Meeting.",
        "alternativeGradingDesc": "Competency-Based Portfolio: Das Portfolio besteht aus einer Finanzanalyse, dem Anlagemodell und der Videoaufzeichnung der Ausschusspräsentation. Bewertung basiert auf der Risikoadäquanz und der Qualität der finanzwirtschaftlichen Begründung.",
        "pedagogicalBenefit": "Verbindet finanzmathematische Berechnungen mit echtem, verantwortungsvollem Risikobewusstsein und Beratungskompetenz."
      }
    },
    {
      "id": "481",
      "name": "Grundlagen der Digitalisierung und Industrie 4.0",
      "englishName": "Basic Knowledge of Digitalization and Industry 4.0",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "digital_business",
      "responsible": "Prof. Dr. Gerrit Sames",
      "teachers": [
        "Prof. Dr. Gerrit Sames"
      ],
      "contents": "Grundlagen von Industrie 4.0, IoT (Internet of Things), Datenübertragung, Cloud Computing, Big Data, Smart Factory. Umsetzung im Labor an Lernfabriken (Fischertechnik) und Abbildung digitalisierter Kernprozesse mit SAP S/4HANA. Exkursionen zu Lead-Unternehmen.",
      "objectives": "Erwerb eines grundlegenden Technik- und Prozessverständnisses zur Digitalisierung. Wirtschaftlichkeitsrechnungen bei der Einführung von Industrie 4.0-Technologien.",
      "exams": [
        {
          "type": "Seminararbeit",
          "weight": 100,
          "details": "Klausur, Zwei Seminararbeiten (zusammen 100%)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "482",
      "name": "Informations- und Datenmanagement",
      "englishName": "Information and Data Management",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "digital_business",
      "responsible": "Prof. Dr. Susanne Müller",
      "teachers": [
        "Prof. Dr. Susanne Müller"
      ],
      "contents": "Rolle von Informationen und Daten im modernen Unternehmen. Informationsmanagement-Aufgaben, Klassifikation von Daten, Datenarchitekturdesign, relationale und NoSQL-Datenbankarchitekturen, Trends im Datenmanagement. Abfragewerkzeuge und SQL.",
      "objectives": "Erlernen fortgeschrittener DB-Konzepte (Transaktionssicherheit, ACID). Abstraktion von Informationsbedarfen in relationale Datenstrukturen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional Klausur (90-120 Min, MC möglich), Seminararbeit, Präsentation"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur kann teilweise Antwort-Wahl-Verfahren beinhalten.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "585",
      "name": "Digitale Innovationen und Künstliche Intelligenz",
      "englishName": "Digital Innovations and Artificial Intelligence",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "digital_business",
      "responsible": "Prof. Dr. Sven Keller",
      "teachers": [
        "Prof. Dr. Sven Keller",
        "div. Lehrbeauftragte"
      ],
      "contents": "Schlüsseltechnologien der Digitalisierung (Cloud Computing, Big Data, künstliche neuronale Netze, Deep Learning). Soziale und humanoide Roboter. Praktische Programmierung und Use-Case-Entwicklung mit einem humanoiden Roboter im Labor.",
      "objectives": "Analysieren und Bewerten neuer digitaler Innovationen im Hinblick auf wirtschaftliche Potenziale und gesellschaftliche Auswirkungen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (90-100 Min) mit theoretischem und praktischem (Lab) Teil"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "584",
      "name": "Digitale Geschäftsmodelle und digitale Transformation",
      "englishName": "Digital Business Models and Digital Transformation",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "digital_business",
      "responsible": "Prof. Dr. Nils Madeja",
      "teachers": [
        "Prof. Dr. Nils Madeja",
        "und weitere"
      ],
      "contents": "Grundbegriffe und Merkmale des Digital Business. Kategorien und Generierung digitaler Geschäftsmodelle (Plattformen, SaaS, Freemium). Prozess der digitalen Transformation etablierter Konzerne, Risikokapitalfinanzierung (Venture Capital).",
      "objectives": "Befähigung zur Konzeption, Implementierung und Analyse digitaler Geschäftsmodelle. Kritische Diskussion von Fallstudien.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (60-90 Min, MC möglich) und Gruppenpräsentation Fallstudie (zusammen 100%)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur kann Antwort-Wahl-Verfahren beinhalten.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "411",
      "name": "BWL der Finanzinstitute",
      "englishName": "Foundations of Bank Management",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "finanzdienstleistungen",
      "responsible": "Prof. Dr. Anke Haag",
      "teachers": [
        "Prof. Dr. Anke Haag"
      ],
      "contents": "Grundlagen des Bankmanagements und der Bankstrategie. Finanzdienstleistungsmarkt (Akteure, Wettbewerb). Bankenaufsichtsrecht (Basel III/IV, MaRisk) und Bankrechnungswesen nach HGB/IFRS.",
      "objectives": "Erklärung bankstrategischer Entwicklungen und Bewertung aufsichtsrechtlicher Rahmenbedingungen. Strukturierte Analyse aktueller Fachtexte.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (MC möglich) oder Portfolio"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur mit Antwort-Wahl-Verfahren möglich.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Interaktives Investment-Portfolio & Risiko-Audit für einen realen Kunden"
        ],
        "authenticAssessmentDesc": "Die Studierenden erstellen ein maßgeschneidertes Investitions- und Risikokonzept für ein reales oder simuliertes Kundenprofil (z.B. Gießener Industrieunternehmen, Startup oder Privatkunde). Sie analysieren die Risikotragfähigkeit, wählen Finanzierungsinstrumente aus und präsentieren ihre Anlagestrategie in einem simulierten Anlageausschuss-Meeting.",
        "alternativeGradingDesc": "Competency-Based Portfolio: Das Portfolio besteht aus einer Finanzanalyse, dem Anlagemodell und der Videoaufzeichnung der Ausschusspräsentation. Bewertung basiert auf der Risikoadäquanz und der Qualität der finanzwirtschaftlichen Begründung.",
        "pedagogicalBenefit": "Verbindet finanzmathematische Berechnungen mit echtem, verantwortungsvollem Risikobewusstsein und Beratungskompetenz."
      }
    },
    {
      "id": "412",
      "name": "Finanzmärkte",
      "englishName": "Financial Markets",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "finanzdienstleistungen",
      "responsible": "Prof. Dr. Christoph Gallus",
      "teachers": [
        "Prof. Dr. Christoph Gallus"
      ],
      "contents": "Wertpapieranalyse und Kapitalmarkttheorie (Marktwertberechnungen, Volatilitäten, CAPM). Bewertung festverzinslicher Papiere und Aktien. Derivative Instrumente (Optionen, Futures, Swaps). Absicherungsstrategien (Hedging).",
      "objectives": "Analysieren von Finanzinstrumenten und quantitative Bestimmung von Risikomaßen (Value-at-Risk). Anwendung finanzmathematischer Modelle.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, teilweise Antwort-Wahl-Verfahren"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Interaktives Investment-Portfolio & Risiko-Audit für einen realen Kunden"
        ],
        "authenticAssessmentDesc": "Die Studierenden erstellen ein maßgeschneidertes Investitions- und Risikokonzept für ein reales oder simuliertes Kundenprofil (z.B. Gießener Industrieunternehmen, Startup oder Privatkunde). Sie analysieren die Risikotragfähigkeit, wählen Finanzierungsinstrumente aus und präsentieren ihre Anlagestrategie in einem simulierten Anlageausschuss-Meeting.",
        "alternativeGradingDesc": "Competency-Based Portfolio: Das Portfolio besteht aus einer Finanzanalyse, dem Anlagemodell und der Videoaufzeichnung der Ausschusspräsentation. Bewertung basiert auf der Risikoadäquanz und der Qualität der finanzwirtschaftlichen Begründung.",
        "pedagogicalBenefit": "Verbindet finanzmathematische Berechnungen mit echtem, verantwortungsvollem Risikobewusstsein und Beratungskompetenz."
      }
    },
    {
      "id": "515",
      "name": "Corporate Banking",
      "englishName": "Corporate Banking",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "finanzdienstleistungen",
      "responsible": "Prof. Dr. Anke Haag",
      "teachers": [
        "Prof. Dr. Anke Haag"
      ],
      "contents": "Firmenkundengeschäft und Kreditmanagement (Kreditwürdigkeitsprüfung, Rating, MaRisk, Sicherheiten). Strukturierte Finanzierungen (Asset-Backed Securities, Projektfinanzierungen). VC/Private Equity und Mezzanine-Kapital.",
      "objectives": "Beurteilung von Ratingsystemen und Kreditrisikomanagement-Prozessen. Strukturierung und Bewertung komplexer Unternehmensfinanzierungen.",
      "exams": [
        {
          "type": "Seminararbeit",
          "weight": 100,
          "details": "Seminararbeit und Präsentation (zusammen 100%)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Interaktives Investment-Portfolio & Risiko-Audit für einen realen Kunden"
        ],
        "authenticAssessmentDesc": "Die Studierenden erstellen ein maßgeschneidertes Investitions- und Risikokonzept für ein reales oder simuliertes Kundenprofil (z.B. Gießener Industrieunternehmen, Startup oder Privatkunde). Sie analysieren die Risikotragfähigkeit, wählen Finanzierungsinstrumente aus und präsentieren ihre Anlagestrategie in einem simulierten Anlageausschuss-Meeting.",
        "alternativeGradingDesc": "Competency-Based Portfolio: Das Portfolio besteht aus einer Finanzanalyse, dem Anlagemodell und der Videoaufzeichnung der Ausschusspräsentation. Bewertung basiert auf der Risikoadäquanz und der Qualität der finanzwirtschaftlichen Begründung.",
        "pedagogicalBenefit": "Verbindet finanzmathematische Berechnungen mit echtem, verantwortungsvollem Risikobewusstsein und Beratungskompetenz."
      }
    },
    {
      "id": "514",
      "name": "Private Vermögensanalyse und -planung",
      "englishName": "Asset Management and Financial Planning",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "finanzdienstleistungen",
      "responsible": "Prof. Dr. Christoph Gallus",
      "teachers": [
        "Prof. Dr. Christoph Gallus"
      ],
      "contents": "Portfolio- und Kapitalmarkttheorie (Markowitz). Lebenszyklusmodell für Privatanleger, Asset Allocation, Investmentstile, Performanceanalyse, Simulationen und private Finanzplanung.",
      "objectives": "Verstehen der Portfolio- und Risikotheorie. Abgrenzung von Anlageklassen und Konzeption ausgewogener Portfolien gemäss dem Lebenszyklus.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional Klausur (MC möglich), Referat oder Projekt"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur mit Antwort-Wahl-Verfahren möglich.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "421",
      "name": "International Business Environment",
      "englishName": "International Business Environment",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "internationales_management",
      "responsible": "Prof. Dr. Benjamin Löhr",
      "teachers": [
        "Prof. Dr. Benjamin Löhr"
      ],
      "contents": "Globalization, political, economic, legal and cultural differences in the international context. Ethics, social responsibility and sustainability. International trade, foreign direct investment, and exchange rate markets.",
      "objectives": "Understanding and critically evaluating the global environmental factors affecting multinational enterprises. Delivered entirely in English to build professional vocabulary.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional: Klausur (MC possible) or oral exam"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur kann Antwort-Wahl-Verfahren beinhalten.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "422",
      "name": "International Business Management",
      "englishName": "International Business Management",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "internationales_management",
      "responsible": "Prof. Dr. Benjamin Löhr",
      "teachers": [
        "Prof. Dr. Benjamin Löhr"
      ],
      "contents": "Strategies and operations of international firms. Competitive strategy, entry modes, organization and structures. International functional areas: marketing, supply chain, R&D, and HR management.",
      "objectives": "Formulating global corporate strategies, selecting foreign market entry modes and designing international organizational structures. Case study analysis.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional: Klausur (MC possible) or oral exam"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur kann Antwort-Wahl-Verfahren beinhalten.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Englisch",
      "reformProposal": {
        "alternativeExams": [
          "HR-Audit & Leadership Guidelines für ein agiles Startup"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln ein modernes Führungs- und Personalkonzept für ein schnell wachsendes Unternehmen. Sie entwerfen Maßnahmen zum Employer Branding, Strategien zur Talentförderung und Ethik-Leitlinien für das Management, um den sozialen und ökonomischen Erfolg des Betriebs zu sichern.",
        "alternativeGradingDesc": "Contract Grading: Klare Verträge regeln die Anforderungen für die Notenstufen. Ein Bestehen erfordert die Entwicklung der HR-Guidelines; für eine 1.x ist die fundierte Ausarbeitung eines ethischen Wertekompasses erforderlich.",
        "pedagogicalBenefit": "Fördert ein ganzheitliches Verständnis von Führung, sozialer Verantwortung und Organisationsdynamik im realen Arbeitskontext."
      }
    },
    {
      "id": "431",
      "name": "Marktforschung und Konsumentenpsychologie",
      "englishName": "Market Research and Consumer Behavior",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "marketing",
      "responsible": "Prof. Dr. Stefanie Wannow",
      "teachers": [
        "Prof. Dr. Stefanie Wannow"
      ],
      "contents": "Marktforschungsprozess, qualitative/quantitative Erhebungsmethoden, Stichprobenverfahren, statistische Datenanalyse. Theorien des Konsumentenverhaltens (kognitiv, emotional, sozial) und ihre Anwendung im Marketing.",
      "objectives": "Selbstständige Konzeption und Auswertung eines Marktforschungsprojekts. Verstehen, Fühlen und Handeln von Konsumenten analysieren.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional: Klausur (90 Min) & Gruppenpräsentation eines Projekts (20-30 Min)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Ganzheitliches Marketingkonzept & Interaktiver Verkaufs-Pitch"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln für eine reale Problemstellung ein integriertes Marketing- und Vertriebskonzept. Sie führen Markt- und Zielgruppenanalysen durch, gestalten den Marketing-Mix und präsentieren ihre Kampagne in einem simulierten 'Verkaufs-Pitch' vor potenziellen Großkunden oder Investoren.",
        "alternativeGradingDesc": "Ungrading mit Feedbackschleifen: Kontinuierliche Beratungseinheiten im Semester ersetzen die Notenangst. Die Abschlussnote wird gemeinschaftlich basierend auf der erbrachten Leistung und der Qualität des Endprodukts vereinbart.",
        "pedagogicalBenefit": "Verbindet analytische Marktforschung mit rhetorischer Überzeugungskraft und kreativer Gestaltung – unverzichtbare Fähigkeiten im Marketing- und Vertriebsalltag."
      }
    },
    {
      "id": "433",
      "name": "Strategic Marketing and Brand Management",
      "englishName": "Strategic Marketing and Brand Management",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "marketing",
      "responsible": "Prof. Dr. Juliane Staubach",
      "teachers": [
        "Prof. Dr. Juliane Staubach"
      ],
      "contents": "Marketing-Planung, Unternehmensanalyse, Wettbewerbsstrategien. Markenformen, Markenstrategien, Markenpositionierung, Online-Branding und digitale Markenführung (Content Marketing, Customer Journey).",
      "objectives": "Erstellung eines integrativen Marketingplans basierend auf tiefem Markt- und Zielgruppenverständnis. Ableitung von Markenidentitäten.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional: Klausur und/oder Präsentation"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Ganzheitliches Marketingkonzept & Interaktiver Verkaufs-Pitch"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln für eine reale Problemstellung ein integriertes Marketing- und Vertriebskonzept. Sie führen Markt- und Zielgruppenanalysen durch, gestalten den Marketing-Mix und präsentieren ihre Kampagne in einem simulierten 'Verkaufs-Pitch' vor potenziellen Großkunden oder Investoren.",
        "alternativeGradingDesc": "Ungrading mit Feedbackschleifen: Kontinuierliche Beratungseinheiten im Semester ersetzen die Notenangst. Die Abschlussnote wird gemeinschaftlich basierend auf der erbrachten Leistung und der Qualität des Endprodukts vereinbart.",
        "pedagogicalBenefit": "Verbindet analytische Marktforschung mit rhetorischer Überzeugungskraft und kreativer Gestaltung – unverzichtbare Fähigkeiten im Marketing- und Vertriebsalltag."
      }
    },
    {
      "id": "535",
      "name": "Digitales Marketing",
      "englishName": "Digital Marketing",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "marketing",
      "responsible": "Prof. Dr. Simon Kiesel",
      "teachers": [
        "Prof. Dr. Simon Kiesel",
        "Prof. Dr. Juliane Staubach"
      ],
      "contents": "Website-Aufbau, SEO (Suchmaschinenoptimierung), Content-Marketing. Online-Advertising (SEA, Display, Affiliate), Mobile Marketing. Social Media Marketing, Influencer-Integration, Touchpoint-Messung.",
      "objectives": "Konzeption digitaler Kampagnen unter Nutzung von KPIs (Key Performance Indicators). Optimierung der E-Commerce Customer Experience.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 50,
          "details": "Klausur (60 Minuten) (50%)"
        },
        {
          "type": "Präsentation",
          "weight": 50,
          "details": "Präsentation (max. 20 Minuten) (50%)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "536",
      "name": "Sales Management",
      "englishName": "Sales Management",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "marketing",
      "responsible": "Prof. Dr. Juliane Staubach",
      "teachers": [
        "Prof. Dr. Juliane Staubach"
      ],
      "contents": "B2B Marketing & Vertriebsorganisation, Multi-Channel-Management, Shopper Marketing, Key-Account-Management. Verhandlungstheorie, Verkaufsgesprächsführung. Motivation und Ethik im Vertrieb.",
      "objectives": "Distributionswege gestalten und bewerten. Vorbereitung und Durchführung professioneller Verhandlungs- und Argumentationsstrategien.",
      "exams": [
        {
          "type": "Rollenspiel",
          "weight": 30,
          "details": "Rollenspiel Verhandlungsgespräch (30%)"
        },
        {
          "type": "Klausur",
          "weight": 70,
          "details": "Klausur, 60-90 Minuten (70%)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Ganzheitliches Marketingkonzept & Interaktiver Verkaufs-Pitch"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln für eine reale Problemstellung ein integriertes Marketing- und Vertriebskonzept. Sie führen Markt- und Zielgruppenanalysen durch, gestalten den Marketing-Mix und präsentieren ihre Kampagne in einem simulierten 'Verkaufs-Pitch' vor potenziellen Großkunden oder Investoren.",
        "alternativeGradingDesc": "Ungrading mit Feedbackschleifen: Kontinuierliche Beratungseinheiten im Semester ersetzen die Notenangst. Die Abschlussnote wird gemeinschaftlich basierend auf der erbrachten Leistung und der Qualität des Endprodukts vereinbart.",
        "pedagogicalBenefit": "Verbindet analytische Marktforschung mit rhetorischer Überzeugungskraft und kreativer Gestaltung – unverzichtbare Fähigkeiten im Marketing- und Vertriebsalltag."
      }
    },
    {
      "id": "441",
      "name": "Entrepreneurship",
      "englishName": "Entrepreneurship",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "mittelstand",
      "responsible": "Prof. Dr. Manuela Weller",
      "teachers": [
        "Prof. Dr. Manuela Weller"
      ],
      "contents": "Entwicklung von innovativen Geschäftsmodellen, Business Model Canvas, Design Thinking. Umsetzungsplanung im Businessplan, VC-Finanzierung und Pitch-Präsentationen vor potenziellen Investoren.",
      "objectives": "Theoretische und praktische Kenntnisse zur Unternehmensgründung. Generierung realer Start-up Ideen und Erstellung eines Prototyps.",
      "exams": [
        {
          "type": "Seminararbeit",
          "weight": 100,
          "details": "Optional: (Poster-)Präsentation, Klausur, Seminararbeit"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "543",
      "name": "Basiskompetenz für Klein- und Mittelunternehmen",
      "englishName": "Basic Skills for Small and Medium-sized Enterprises (SMEs)",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "mittelstand",
      "responsible": "Prof. Dr. Manuela Weller",
      "teachers": [
        "Prof. Dr. Manuela Weller"
      ],
      "contents": "Charakteristika und volkswirtschaftliche Bedeutung von KMUs und Familienunternehmen. Anforderungsprofil an Unternehmer, Unternehmenslebenszyklus, Nachfolgeregelungen und Krisenbewältigung.",
      "objectives": "Erklärung der Erfolgsfaktoren mittelständischer Unternehmen. Branchen- und Wettbewerbsanalysen und finanzielle Fördermodelle.",
      "exams": [
        {
          "type": "Seminararbeit",
          "weight": 100,
          "details": "Optional: Referat, Seminararbeit"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "545",
      "name": "Innovationsmanagement im Mittelstand",
      "englishName": "Innovationmanagement in small and medium-sized enterprises",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "mittelstand",
      "responsible": "Prof. Dr. Manuela Weller",
      "teachers": [
        "Dipl.-Betriebswirt Michael Döring MBA"
      ],
      "contents": "Innovationsbegriffe, Megatrends, Kreativitätsförderung, Innovationskultur, weiche/harte Erfolgsfaktoren (Strategie, Struktur), Steuerung des Innovationsprozesses, Fallstudien und Praxisprojekte.",
      "objectives": "Nutzung von Kreativitäts- und Innovationsmethoden. Steuerung strukturierter Innovationsprozesse zur Markteinführung neuer Produkte.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional: Klausur, Seminararbeit, Projekt (Präsentation)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "HR-Audit & Leadership Guidelines für ein agiles Startup"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln ein modernes Führungs- und Personalkonzept für ein schnell wachsendes Unternehmen. Sie entwerfen Maßnahmen zum Employer Branding, Strategien zur Talentförderung und Ethik-Leitlinien für das Management, um den sozialen und ökonomischen Erfolg des Betriebs zu sichern.",
        "alternativeGradingDesc": "Contract Grading: Klare Verträge regeln die Anforderungen für die Notenstufen. Ein Bestehen erfordert die Entwicklung der HR-Guidelines; für eine 1.x ist die fundierte Ausarbeitung eines ethischen Wertekompasses erforderlich.",
        "pedagogicalBenefit": "Fördert ein ganzheitliches Verständnis von Führung, sozialer Verantwortung und Organisationsdynamik im realen Arbeitskontext."
      }
    },
    {
      "id": "453",
      "name": "Employer Branding und Recruiting",
      "englishName": "Employer Branding and Recruiting",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "personalmanagement",
      "responsible": "Prof. Dr. Matthias Groß",
      "teachers": [
        "Prof. Dr. Matthias Groß"
      ],
      "contents": "Strategische Rahmenbedingungen im Recruiting (Fachkräftemangel, demografischer Wandel). Employer Branding im digitalen Zeitalter, Active Sourcing. KI-gestützte HR-Prozesse, moderne Diagnostik und HR-Planspiel.",
      "objectives": "Analyse und Erstellung theoriegeleiteter Recruiting-Strategien. Kritische Reflexion digitaler und KI-basierter HR-Tools im Hinblick auf Fairness und Datenschutz.",
      "exams": [
        {
          "type": "Fallstudie",
          "weight": 40,
          "details": "Fallstudie/Case Study im HR-Planspiel (40%)"
        },
        {
          "type": "Klausur",
          "weight": 60,
          "details": "Schriftliche Klausur (90 Minuten) (60%)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Ganzheitliches Marketingkonzept & Interaktiver Verkaufs-Pitch"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln für eine reale Problemstellung ein integriertes Marketing- und Vertriebskonzept. Sie führen Markt- und Zielgruppenanalysen durch, gestalten den Marketing-Mix und präsentieren ihre Kampagne in einem simulierten 'Verkaufs-Pitch' vor potenziellen Großkunden oder Investoren.",
        "alternativeGradingDesc": "Ungrading mit Feedbackschleifen: Kontinuierliche Beratungseinheiten im Semester ersetzen die Notenangst. Die Abschlussnote wird gemeinschaftlich basierend auf der erbrachten Leistung und der Qualität des Endprodukts vereinbart.",
        "pedagogicalBenefit": "Verbindet analytische Marktforschung mit rhetorischer Überzeugungskraft und kreativer Gestaltung – unverzichtbare Fähigkeiten im Marketing- und Vertriebsalltag."
      }
    },
    {
      "id": "454",
      "name": "Talent Management & Leadership",
      "englishName": "Talent Management & Leadership",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "personalmanagement",
      "responsible": "Prof. Dr. Marion Hoeren",
      "teachers": [
        "Prof. Dr. Marion Hoeren"
      ],
      "contents": "Strategisches Talent Management: Kompetenzmanagement, Potenzialentwicklung, People Analytics. Leadership: Klassische und moderne Führungsansätze im VUCA-Umfeld, Führungskräfteentwicklung und Konfliktmanagement.",
      "objectives": "Entwicklung von Lösungsansätzen für anspruchsvolle HR-Herausforderungen. Reflexion des eigenen Führungsverhaltens.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur (90 Minuten)"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "HR-Audit & Leadership Guidelines für ein agiles Startup"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln ein modernes Führungs- und Personalkonzept für ein schnell wachsendes Unternehmen. Sie entwerfen Maßnahmen zum Employer Branding, Strategien zur Talentförderung und Ethik-Leitlinien für das Management, um den sozialen und ökonomischen Erfolg des Betriebs zu sichern.",
        "alternativeGradingDesc": "Contract Grading: Klare Verträge regeln die Anforderungen für die Notenstufen. Ein Bestehen erfordert die Entwicklung der HR-Guidelines; für eine 1.x ist die fundierte Ausarbeitung eines ethischen Wertekompasses erforderlich.",
        "pedagogicalBenefit": "Fördert ein ganzheitliches Verständnis von Führung, sozialer Verantwortung und Organisationsdynamik im realen Arbeitskontext."
      }
    },
    {
      "id": "555",
      "name": "Facetten des Rechts in Human Resources (HR)",
      "englishName": "Facets of Law in Human Resources (HR)",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "personalmanagement",
      "responsible": "Prof. Dr. Carsten Zack",
      "teachers": [
        "n.n."
      ],
      "contents": "Individualarbeitsrecht (Kündigungsschutz, Arbeitsvertrag, Rechte/Pflichten, Krankheit, Urlaub, Elternzeit). Kollektives Arbeitsrecht (Betriebsverfassungsrecht, Tarifrecht, Arbeitskampf). Sonderformen wie Sabbatical und Social Media.",
      "objectives": "Erwerb fundierten arbeitsrechtlichen Fachwissens zur Bewältigung alltäglicher HR-Aufgaben. Analyse einschlägiger Präzedenzfälle.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional: Klausur oder Seminararbeit"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Simuliertes Mandantengespräch & Rechtliches Gutachten (Moot Court)"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden einen komplexen, ungeklärten Rechtsfall aus der unternehmerischen Praxis. Sie führen ein simuliertes Erstberatungsgespräch mit einem Mandanten durch und erstellen ein rechtssicheres, präzises juristisches Gutachten im Gutachtenstil.",
        "alternativeGradingDesc": "Specifications Grading: Das Gutachten und die Gesprächsführung müssen vordefinierten Qualitätskriterien (fehlerfreie Subsumtionstechnik, Strukturierung, verständliche Erklärung komplexer Klauseln) entsprechen. Studierende können bei Mängeln in der Argumentation einmalig nachbessern.",
        "pedagogicalBenefit": "Schult die für Wirtschaftsjuristen essenzielle Fähigkeit, abstrakte Gesetze auf reale, dynamische Praxisfälle anzuwenden und Mandanten verständlich zu beraten."
      }
    },
    {
      "id": "556",
      "name": "Softwareanwendung Personalmanagement (SAP)",
      "englishName": "Softwareapplication Personnel Management (SAP)",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "personalmanagement",
      "responsible": "Prof. Dr. Gerrit Sames",
      "teachers": [
        "Prof. Dr. Christian Leyh",
        "Prof. Dr. Gerrit Sames"
      ],
      "contents": "Grundzüge betrieblicher Standardsoftware im HR-Bereich (SAP S/4HANA HCM). Organisationsmanagement, Personalstammdaten, Lohn- und Gehaltsabrechnung, Personalzeitwirtschaft, Personalbeschaffung und Talententwicklung.",
      "objectives": "Befähigung zur softwareseitigen Abbildung komplexer Organisationsstrukturen und HCM-Vorgänge in SAP. Lösung realer HR-Fallstudien.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur mit theoretischem und praktischem Teil am SAP System"
        }
      ],
      "hasMc": false,
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "461",
      "name": "Bilanzsteuerrecht",
      "englishName": "Balance Sheets and Tax Law",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "steuerberatung",
      "responsible": "Prof. Dr. Frank Althoff",
      "teachers": [
        "Prof. Dr. Frank Althoff",
        "Prof. Dr. Katharina Dillkötter",
        "Prof. Dr. Oliver Voß"
      ],
      "contents": "Gegenstand und Systematik des Bilanzsteuerrechts. Verhältnis von Handelsbilanz und Steuerbilanz (Maßgeblichkeitsprinzip). Einlagen/Entnahmen, Bilanzierung des Betriebsvermögens, Bewertung (Anschaffungs-, Herstellungskosten, Abschreibungen). Bilanzänderungen.",
      "objectives": "Eigenständige steuerliche Gewinnermittlung. Beherrschung der Unterschiede zwischen Handels- und Steuerbilanz zur optimalen Steuerbilanzpolitik.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 90 Minuten (ggf. teilweise im Antwort-Wahl-Verfahren)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise mit Antwort-Wahl-Verfahren.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Simuliertes Mandantengespräch & Rechtliches Gutachten (Moot Court)"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden einen komplexen, ungeklärten Rechtsfall aus der unternehmerischen Praxis. Sie führen ein simuliertes Erstberatungsgespräch mit einem Mandanten durch und erstellen ein rechtssicheres, präzises juristisches Gutachten im Gutachtenstil.",
        "alternativeGradingDesc": "Specifications Grading: Das Gutachten und die Gesprächsführung müssen vordefinierten Qualitätskriterien (fehlerfreie Subsumtionstechnik, Strukturierung, verständliche Erklärung komplexer Klauseln) entsprechen. Studierende können bei Mängeln in der Argumentation einmalig nachbessern.",
        "pedagogicalBenefit": "Schult die für Wirtschaftsjuristen essenzielle Fähigkeit, abstrakte Gesetze auf reale, dynamische Praxisfälle anzuwenden und Mandanten verständlich zu beraten."
      }
    },
    {
      "id": "462",
      "name": "Ertragsteuern",
      "englishName": "Income Tax",
      "semester": 4,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "steuerberatung",
      "responsible": "Prof. Dr. Oliver Voß",
      "teachers": [
        "Prof. Dr. Oliver Voß"
      ],
      "contents": "Systematik und Struktur der Ertragsteuern. Ermittlung der Einkunftsarten, Zuordnung von Betriebsausgaben, Werbungskosten, außergewöhnlichen Belastungen. Körperschaftsteuer (Teileinkünfteverfahren, verdeckte Gewinnausschüttung). Gewerbesteuerliche Organschaft und Schachtelprivileg.",
      "objectives": "Berechnung der Steuerbelastung bei natürlichen Personen und Personengesellschaften sowie Kapitalgesellschaften. Identifikation von Lösungsansätzen für die Gestaltungsberatung.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 90 Minuten (ggf. teilweise im Antwort-Wahl-Verfahren)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Steuergestaltungs- und Beratungs-Memo für ein KMU"
        ],
        "authenticAssessmentDesc": "Die Studierenden erhalten die wirtschaftlichen Rahmendaten eines mittelständischen Familienunternehmens, das vor einer Restrukturierung steht (z.B. Rechtsformwechsel oder Unternehmensnachfolge). Sie verfassen ein professionelles Steuerberatungs-Memo, vergleichen die steuerlichen Belastungen quantitativ und geben eine fundierte Gestaltungsempfehlung ab.",
        "alternativeGradingDesc": "Specifications-Based Assessment: Das Rechenmodell (Excel) und die steuerrechtliche Begründung werden getrennt voneinander auf fachliche Richtigkeit und logische Nachvollziehbarkeit bewertet.",
        "pedagogicalBenefit": "Ersetzt das Auswendiglernen von Paragraphen durch die reale, kreative Gestaltungskraft einer exzellenten steuerlichen Beratungspraxis."
      }
    },
    {
      "id": "563",
      "name": "Wirtschaftsprüfung",
      "englishName": "Auditing",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "steuerberatung",
      "responsible": "Prof. Dr. Frank Althoff",
      "teachers": [
        "Prof. Dr. Frank Althoff",
        "Prof. Dr. Katharina Dillkötter"
      ],
      "contents": "Grundlagen der Abschlussprüfung, Gesetzliche Rahmenbedingungen (HGB, Publizitätsgesetz, GenG). Risikoorientierter Prüfungsansatz, Prüfungsplanung, Prüfung des internen Kontrollsystems (IKS). Prüfungsbericht und Bestätigungsvermerk.",
      "objectives": "Erklärung des Ablaufs einer Jahresabschlussprüfung. Entwicklung von Prüfungshandlungen für ausgewählte Prüffelder und Beurteilung des Fehlerrisikos.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 90 Minuten (ggf. teilweise im Antwort-Wahl-Verfahren)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Steuergestaltungs- und Beratungs-Memo für ein KMU"
        ],
        "authenticAssessmentDesc": "Die Studierenden erhalten die wirtschaftlichen Rahmendaten eines mittelständischen Familienunternehmens, das vor einer Restrukturierung steht (z.B. Rechtsformwechsel oder Unternehmensnachfolge). Sie verfassen ein professionelles Steuerberatungs-Memo, vergleichen die steuerlichen Belastungen quantitativ und geben eine fundierte Gestaltungsempfehlung ab.",
        "alternativeGradingDesc": "Specifications-Based Assessment: Das Rechenmodell (Excel) und die steuerrechtliche Begründung werden getrennt voneinander auf fachliche Richtigkeit und logische Nachvollziehbarkeit bewertet.",
        "pedagogicalBenefit": "Ersetzt das Auswendiglernen von Paragraphen durch die reale, kreative Gestaltungskraft einer exzellenten steuerlichen Beratungspraxis."
      }
    },
    {
      "id": "564",
      "name": "Aktuelle Themen der Steuerberatung und Wirtschaftsprüfung",
      "englishName": "Current Topics in Tax Consultancy and Auditing",
      "semester": 5,
      "sws": 4,
      "crp": 6,
      "type": "schwerpunkt",
      "majorId": "steuerberatung",
      "responsible": "Prof. Dr. Oliver Voß",
      "teachers": [
        "Prof. Dr. Frank Althoff",
        "Prof. Dr. Katharina Dillkötter",
        "Prof. Dr. Oliver Voß"
      ],
      "contents": "Eigenständiges Verfassen einer wissenschaftlichen Hausarbeit zu einem aktuellen steuerlichen, bilanzrechtlichen oder prüfungsrelevanten Thema. Ergänzende Vorlesung zu Unternehmenserwerben, Bilanzierung von Rechtsformen und Unternehmensbewertung.",
      "objectives": "Stärkung der selbstständigen kaufmännischen Recherchefähigkeit. Beherrschung des wissenschaftlichen Arbeitens und Formulierung kaufmännischer Stellungnahmen.",
      "exams": [
        {
          "type": "Seminararbeit",
          "weight": 50,
          "details": "Seminararbeit (15 Seiten) (50%)"
        },
        {
          "type": "Klausur",
          "weight": 50,
          "details": "Schriftliche Klausur zu Vorlesungsinhalten (45 Min) (50%)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise mit Antwort-Wahl-Verfahren.",
      "workloadTotal": 180,
      "workloadPresence": 60,
      "workloadSelfStudy": 120,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Steuergestaltungs- und Beratungs-Memo für ein KMU"
        ],
        "authenticAssessmentDesc": "Die Studierenden erhalten die wirtschaftlichen Rahmendaten eines mittelständischen Familienunternehmens, das vor einer Restrukturierung steht (z.B. Rechtsformwechsel oder Unternehmensnachfolge). Sie verfassen ein professionelles Steuerberatungs-Memo, vergleichen die steuerlichen Belastungen quantitativ und geben eine fundierte Gestaltungsempfehlung ab.",
        "alternativeGradingDesc": "Specifications-Based Assessment: Das Rechenmodell (Excel) und die steuerrechtliche Begründung werden getrennt voneinander auf fachliche Richtigkeit und logische Nachvollziehbarkeit bewertet.",
        "pedagogicalBenefit": "Ersetzt das Auswendiglernen von Paragraphen durch die reale, kreative Gestaltungskraft einer exzellenten steuerlichen Beratungspraxis."
      }
    },
    {
      "id": "711",
      "name": "Aktuelle Themen aus Wirtschaftsinformatik und Digital Business",
      "englishName": "Current Topics in Business Systems and Digital Business",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Susanne Müller",
      "teachers": [
        "Prof. Dr. Susanne Müller"
      ],
      "contents": "Wechselnde aktuelle Trends wie CRM-Systeme, Standards der Wirtschaftsinformatik, Business Intelligence, Big Data, digitale Plattform-Ökosysteme. Fallstudien- und Seminararbeit.",
      "exams": [
        {
          "type": "Seminararbeit",
          "weight": 100,
          "details": "Optional Seminararbeit, Präsentation, Planspielteilnahme oder Klausur"
        }
      ],
      "hasMc": false,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "712",
      "name": "Allgemeines Steuerrecht",
      "englishName": "General Tax Law",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Oliver Voß",
      "teachers": [
        "Prof. Dr. Oliver Voß",
        "Lehrbeauftragte"
      ],
      "contents": "Steuerliches Verfahrensrecht (Abgabenordnung: Entstehung, Festsetzung und Durchsetzung von Steueransprüchen, Mitwirkungspflichten, Verspätungszuschläge). Umsatzsteuerrecht (national, Reverse-Charge, Reihengeschäfte).",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 90 Minuten (teilweise Antwort-Wahl-Verfahren möglich)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Simuliertes Mandantengespräch & Rechtliches Gutachten (Moot Court)"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden einen komplexen, ungeklärten Rechtsfall aus der unternehmerischen Praxis. Sie führen ein simuliertes Erstberatungsgespräch mit einem Mandanten durch und erstellen ein rechtssicheres, präzises juristisches Gutachten im Gutachtenstil.",
        "alternativeGradingDesc": "Specifications Grading: Das Gutachten und die Gesprächsführung müssen vordefinierten Qualitätskriterien (fehlerfreie Subsumtionstechnik, Strukturierung, verständliche Erklärung komplexer Klauseln) entsprechen. Studierende können bei Mängeln in der Argumentation einmalig nachbessern.",
        "pedagogicalBenefit": "Schult die für Wirtschaftsjuristen essenzielle Fähigkeit, abstrakte Gesetze auf reale, dynamische Praxisfälle anzuwenden und Mandanten verständlich zu beraten."
      }
    },
    {
      "id": "714",
      "name": "Aktuelle Themen der Personalarbeit",
      "englishName": "Current Topics in People Management",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Marion Hoeren",
      "teachers": [
        "Prof. Dr. Marion Hoeren"
      ],
      "contents": "Wechselnde praxisbezogene Themen des Personalmanagements (z.B. New Work, agile Arbeitsformen, People Analytics, Diversity Management, Corporate Social Responsibility).",
      "exams": [
        {
          "type": "Präsentation",
          "weight": 70,
          "details": "Gruppenpräsentation (10-15 Min pro Person) (70%)"
        },
        {
          "type": "Klausur",
          "weight": 30,
          "details": "Klausur (60 Minuten) (30%)"
        }
      ],
      "hasMc": false,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "HR-Audit & Leadership Guidelines für ein agiles Startup"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln ein modernes Führungs- und Personalkonzept für ein schnell wachsendes Unternehmen. Sie entwerfen Maßnahmen zum Employer Branding, Strategien zur Talentförderung und Ethik-Leitlinien für das Management, um den sozialen und ökonomischen Erfolg des Betriebs zu sichern.",
        "alternativeGradingDesc": "Contract Grading: Klare Verträge regeln die Anforderungen für die Notenstufen. Ein Bestehen erfordert die Entwicklung der HR-Guidelines; für eine 1.x ist die fundierte Ausarbeitung eines ethischen Wertekompasses erforderlich.",
        "pedagogicalBenefit": "Fördert ein ganzheitliches Verständnis von Führung, sozialer Verantwortung und Organisationsdynamik im realen Arbeitskontext."
      }
    },
    {
      "id": "715",
      "name": "Einführung in Operations Research",
      "englishName": "Introduction to Operations Research",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Christoph Gallus",
      "teachers": [
        "Prof. Dr. Christoph Gallus"
      ],
      "contents": "Mathematische Optimierung und Datenanalyse. Numerisches Lösen von Gleichungen, Lineare Optimierung (Simplex-Verfahren), Markov-Ketten, Monte-Carlo-Simulationen. Praktische Programmierübungen in Python (NumPy, Pandas, SciPy).",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional Klausur, Seminararbeit, Projekt oder Referat"
        }
      ],
      "hasMc": false,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Supply Chain Resiliency & Optimization Audit"
        ],
        "authenticAssessmentDesc": "Die Studierenden untersuchen die Lieferkette oder Produktionsstruktur eines regionalen Betriebs (z.B. einer Brauerei oder eines Fertigungsbetriebs). Sie identifizieren logistische Engpässe und CO2-Treiber und entwerfen ein resilientes, nachhaltiges Optimierungskonzept inklusive Notfallplänen für Krisenszenarien.",
        "alternativeGradingDesc": "Labor-Based Contract Grading: Strukturierte Zwischenberichte über den Analysefortschritt sichern ein solides Bestehen. Durch die Einbindung mathematischer Optimierungsmodelle (z.B. Transportkostenminimierung) kann eine exzellente Note erzielt werden.",
        "pedagogicalBenefit": "Erfordert echtes Systemdenken und die Anwendung moderner Logistikkonzepte auf volatile Märkte und ökologische Vorgaben."
      }
    },
    {
      "id": "716",
      "name": "Ertrags- und Risikomanagement in Finanzinstituten",
      "englishName": "Yield and Risk Management in Financial Institutions",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Christoph Gallus",
      "teachers": [
        "Prof. Dr. Christoph Gallus",
        "Prof. Dr. Anke Haag"
      ],
      "contents": "Marktzinsmethode zur Kalkulation im Bankwertbereich. Risikomanagement (Zinsänderungs-, Liquiditäts-, Währungsrisiken). Value-at-Risk-Konzepte und Risikokapitalallokation (RaRoC). Planspiel.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional Klausur, Referat oder Seminararbeit"
        }
      ],
      "hasMc": false,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Interaktives Investment-Portfolio & Risiko-Audit für einen realen Kunden"
        ],
        "authenticAssessmentDesc": "Die Studierenden erstellen ein maßgeschneidertes Investitions- und Risikokonzept für ein reales oder simuliertes Kundenprofil (z.B. Gießener Industrieunternehmen, Startup oder Privatkunde). Sie analysieren die Risikotragfähigkeit, wählen Finanzierungsinstrumente aus und präsentieren ihre Anlagestrategie in einem simulierten Anlageausschuss-Meeting.",
        "alternativeGradingDesc": "Competency-Based Portfolio: Das Portfolio besteht aus einer Finanzanalyse, dem Anlagemodell und der Videoaufzeichnung der Ausschusspräsentation. Bewertung basiert auf der Risikoadäquanz und der Qualität der finanzwirtschaftlichen Begründung.",
        "pedagogicalBenefit": "Verbindet finanzmathematische Berechnungen mit echtem, verantwortungsvollem Risikobewusstsein und Beratungskompetenz."
      }
    },
    {
      "id": "717",
      "name": "Business and Leadership Ethics",
      "englishName": "Business and Leadership Ethics",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Julian Conrads",
      "teachers": [
        "Prof. Dr. Julian Conrads"
      ],
      "contents": "Normative Ethik (Tugend-, Pflichten-, Folgenethik). Individuelles moralisches Entscheiden (Bounded Ethicality, Nudging). Unternehmenskultur, Compliance-Programme, ethische Führung. Whistleblowing und Greenwashing.",
      "exams": [
        {
          "type": "Portfolio",
          "weight": 100,
          "details": "Modulbegleitendes Portfolio (Präsentation + Hausarbeit) oder Klausur (max. 90 Min)"
        }
      ],
      "hasMc": false,
      "language": "Englisch",
      "reformProposal": {
        "alternativeExams": [
          "HR-Audit & Leadership Guidelines für ein agiles Startup"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln ein modernes Führungs- und Personalkonzept für ein schnell wachsendes Unternehmen. Sie entwerfen Maßnahmen zum Employer Branding, Strategien zur Talentförderung und Ethik-Leitlinien für das Management, um den sozialen und ökonomischen Erfolg des Betriebs zu sichern.",
        "alternativeGradingDesc": "Contract Grading: Klare Verträge regeln die Anforderungen für die Notenstufen. Ein Bestehen erfordert die Entwicklung der HR-Guidelines; für eine 1.x ist die fundierte Ausarbeitung eines ethischen Wertekompasses erforderlich.",
        "pedagogicalBenefit": "Fördert ein ganzheitliches Verständnis von Führung, sozialer Verantwortung und Organisationsdynamik im realen Arbeitskontext."
      }
    },
    {
      "id": "720",
      "name": "Internationales Steuerrecht",
      "englishName": "International Taxation",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Oliver Voß",
      "teachers": [
        "Prof. Dr. Oliver Voß"
      ],
      "contents": "Doppelbesteuerungsabkommen (DBA), OECD-Musterabkommen. Inbound/Outbound-Besteuerungsfälle, Wegzugsbesteuerung, Hinzurechnungsbesteuerung, Verrechnungspreise im Konzern.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur, 90 Minuten (teilweise Antwort-Wahl-Verfahren möglich)"
        }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Simuliertes Mandantengespräch & Rechtliches Gutachten (Moot Court)"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden einen komplexen, ungeklärten Rechtsfall aus der unternehmerischen Praxis. Sie führen ein simuliertes Erstberatungsgespräch mit einem Mandanten durch und erstellen ein rechtssicheres, präzises juristisches Gutachten im Gutachtenstil.",
        "alternativeGradingDesc": "Specifications Grading: Das Gutachten und die Gesprächsführung müssen vordefinierten Qualitätskriterien (fehlerfreie Subsumtionstechnik, Strukturierung, verständliche Erklärung komplexer Klauseln) entsprechen. Studierende können bei Mängeln in der Argumentation einmalig nachbessern.",
        "pedagogicalBenefit": "Schult die für Wirtschaftsjuristen essenzielle Fähigkeit, abstrakte Gesetze auf reale, dynamische Praxisfälle anzuwenden und Mandanten verständlich zu beraten."
      }
    },
    {
      "id": "721",
      "name": "Entwicklung moderner Softwaresysteme",
      "englishName": "Modern Software Systems Development",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Sven Keller",
      "teachers": [
        "Prof. Dr. Sven Keller",
        "Steffen Schäfer"
      ],
      "contents": "Grundlagen moderner Programmiersprachen und Entwicklungsumgebungen. Variablen, Kontrollstrukturen, Listen, OOP (Klassen, Objekte, Vererbung), Datenbankanbindungen und Verarbeitung von JSON-Dateien.",
      "exams": [
        {
          "type": "Projekt",
          "weight": 100,
          "details": "Projektarbeit in Kleingruppen (Praktischer Programmierentwurf)"
        }
      ],
      "hasMc": false,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "722",
      "name": "Aktuelle Themen im Controlling",
      "englishName": "Current Topics in Controlling",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Timo Kachel",
      "teachers": [
        "Prof. Dr. Timo Kachel",
        "Prof. Dr. Gero Holthoff"
      ],
      "contents": "Wechselnde Vertiefungsthemen wie Digitalisierung im Controlling, Risikocontrolling, Krisencontrolling, Projekt- und Nachhaltigkeitscontrolling.",
      "exams": [
        {
          "type": "Seminararbeit",
          "weight": 100,
          "details": "Optional Seminararbeit, Präsentation"
        }
      ],
      "hasMc": false,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "726",
      "name": "Mathematische Methoden der Datenanalyse und des maschinellen Lernens",
      "englishName": "Mathematical Methods for Data Analysis and Machine Learning",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Christoph Gallus",
      "teachers": [
        "Prof. Dr. Christoph Gallus"
      ],
      "contents": "Mathematische Techniken über die Grundvorlesung hinaus. Lineare Algebra (Eigenwerte, Matrizen), multivariate lineare Regression, Google PageRank. Einführung in ML (Entscheidungsbäume, Clustering, k-NN, PCA, Support Vector Machines, Neuronale Netze).",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Optional Klausur, Seminararbeit, mündliche Prüfung oder Referat"
        }
      ],
      "hasMc": false,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "727",
      "name": "Versicherungslehre",
      "englishName": "Private Insurance",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Christoph Gallus",
      "teachers": [
        "Frank Drescher"
      ],
      "contents": "Produkte der privaten Alters- und Risikovorsorge (Renten, Leben, Kranken, Pflege) sowie Sach- und Vermögensversicherungen (Haftpflicht, KfZ, Hausrat). Einbettung in die Vermögensplanung.",
      "exams": [
        {
          "type": "Präsentation",
          "weight": 20,
          "details": "TL1 Präsentation (20%)"
        },
        {
          "type": "Klausur",
          "weight": 80,
          "details": "TL2 Klausur (80%)"
        }
      ],
      "hasMc": false,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Interaktives Investment-Portfolio & Risiko-Audit für einen realen Kunden"
        ],
        "authenticAssessmentDesc": "Die Studierenden erstellen ein maßgeschneidertes Investitions- und Risikokonzept für ein reales oder simuliertes Kundenprofil (z.B. Gießener Industrieunternehmen, Startup oder Privatkunde). Sie analysieren die Risikotragfähigkeit, wählen Finanzierungsinstrumente aus und präsentieren ihre Anlagestrategie in einem simulierten Anlageausschuss-Meeting.",
        "alternativeGradingDesc": "Competency-Based Portfolio: Das Portfolio besteht aus einer Finanzanalyse, dem Anlagemodell und der Videoaufzeichnung der Ausschusspräsentation. Bewertung basiert auf der Risikoadäquanz und der Qualität der finanzwirtschaftlichen Begründung.",
        "pedagogicalBenefit": "Verbindet finanzmathematische Berechnungen mit echtem, verantwortungsvollem Risikobewusstsein und Beratungskompetenz."
      }
    },
    {
      "id": "739",
      "name": "Social Entrepreneurship",
      "englishName": "Social Entrepreneurship",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Matthias Groß",
      "teachers": [
        "Prof. Dr. Matthias Groß"
      ],
      "contents": "Entwicklung sozial nachhaltiger Geschäftsmodelle. CSR-Konzepte, Impact Measurement, Teambuilding, Pitching sozialer Start-up Ideen.",
      "exams": [
        {
          "type": "Projekt",
          "weight": 100,
          "details": "Projekt/Seminararbeit, Präsentation und Pitch (zusammen 100%)"
        }
      ],
      "hasMc": false,
      "language": "Deutsch/Englisch",
      "reformProposal": {
        "alternativeExams": [
          "Problem-Based Portfolio mit Praxis-Präsentation"
        ],
        "authenticAssessmentDesc": "Anstelle einer traditionellen Klausur bearbeiten die Studierenden im Laufe des Semesters eine Folge von 3 realitätsnahen Fallstudien (Case Studies), die direkt auf die Qualifikationsziele des Moduls einzahlen. Die Ergebnisse werden in einer gemeinsamen Abschlusspräsentation vor Fachpublikum diskutiert.",
        "alternativeGradingDesc": "Specifications Grading: Die Fallstudien werden anhand detaillierter Qualitätsmatrizen (Rubrics) bewertet. Bei Verfehlen einzelner Spezifikationen wird qualifiziertes Feedback gegeben, mit der Option zur Überarbeitung.",
        "pedagogicalBenefit": "Unterstützt den nachhaltigen Kompetenzerwerb durch kontinuierliche Beschäftigung mit dem Stoff und praxisnahen Wissenstransfer."
      }
    },
    {
      "id": "740",
      "name": "Projekt Digitalisierung",
      "englishName": "Project Digitalization",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Gerrit Sames",
      "teachers": [
        "Prof. Dr. Gerrit Sames"
      ],
      "contents": "Praktische Umsetzung eines kaufmännischen Digitalisierungsprojekts. Ist-Analyse, Soll-Konzept, softwareseitige Abbildung (z.B. Low-Code, ERP).",
      "exams": [
        {
          "type": "Fallstudie",
          "weight": 100,
          "details": "Fallstudie mit Präsentation (30-45 Minuten)"
        }
      ],
      "hasMc": false,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "Digital Transformation Roadmap & funktionierender App-Prototyp"
        ],
        "authenticAssessmentDesc": "Die Studierenden analysieren einen analogen Geschäftsprozess in einem lokalen Betrieb und entwickeln ein umfassendes Digitalisierungskonzept. Sie entwerfen ein tragfähiges IT-Sicherheitskonzept und erstellen einen funktionalen Prototyp (z.B. eine relationale Datenbank oder No-Code-App), um den Prozess zu automatisieren.",
        "alternativeGradingDesc": "Specifications Grading: Voll funktionsfähige Datenbank-Abfragen und eine logisch schlüssige Roadmap sichern die Note. Der Fokus liegt auf der technischen Umsetzbarkeit und dem geschäftlichen Mehrwert.",
        "pedagogicalBenefit": "Fördert die gefragte Schnittstellenkompetenz zwischen betriebswirtschaftlichen Anforderungen und moderner technologischer Realisierung."
      }
    },
    {
      "id": "760",
      "name": "Mentoring",
      "englishName": "Mentoring",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_b",
      "responsible": "Studiendekan / Studiendekanin",
      "teachers": [
        "Anja Baumann"
      ],
      "contents": "Grundlagen des Mentorings, Begleitung von Studienanfängern. Gruppenphasen (Norming, Forming), Gesprächsführung, Lerntechniken und Zeitmanagement.",
      "exams": [
        {
          "type": "Seminararbeit",
          "weight": 100,
          "details": "Seminararbeit"
        }
      ],
      "hasMc": false,
      "language": "Deutsch",
      "reformProposal": {
        "alternativeExams": [
          "HR-Audit & Leadership Guidelines für ein agiles Startup"
        ],
        "authenticAssessmentDesc": "Die Studierenden entwickeln ein modernes Führungs- und Personalkonzept für ein schnell wachsendes Unternehmen. Sie entwerfen Maßnahmen zum Employer Branding, Strategien zur Talentförderung und Ethik-Leitlinien für das Management, um den sozialen und ökonomischen Erfolg des Betriebs zu sichern.",
        "alternativeGradingDesc": "Contract Grading: Klare Verträge regeln die Anforderungen für die Notenstufen. Ein Bestehen erfordert die Entwicklung der HR-Guidelines; für eine 1.x ist die fundierte Ausarbeitung eines ethischen Wertekompasses erforderlich.",
        "pedagogicalBenefit": "Fördert ein ganzheitliches Verständnis von Führung, sozialer Verantwortung und Organisationsdynamik im realen Arbeitskontext."
      }
    },
    {
      "id": "767",
      "name": "Spanisch für den Beruf (A1)",
      "englishName": "Business Spanish 1 (A1)",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_b",
      "responsible": "Dr. Christine Beckmann",
      "teachers": [
        "Lehrende des Sprachzentrums"
      ],
      "contents": "Erwerb von Grundkenntnissen auf Anfängerniveau A1 des GER. Sprechen, Hörverstehen, Schreiben, Lesen in privaten und berufsbezogenen Alltagssituationen.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Klausur"
        }
      ],
      "hasMc": false,
      "language": "Spanisch",
      "reformProposal": {
        "alternativeExams": [
          "Mündliche Verhandlungssimulation & Interkultureller Reflexions-Podcast"
        ],
        "authenticAssessmentDesc": "Anstelle einer schriftlichen Klausur erarbeiten die Studierenden in Kleingruppen ein internationales Verhandlungsszenario (z.B. Kooperationsvereinbarung oder Lieferantengespräch). Sie zeichnen die Live-Verhandlung als Video oder Podcast auf und fügen eine Reflexion über angewandte linguistische Muster und interkulturelle Barrieren hinzu.",
        "alternativeGradingDesc": "Portfolio Grading mit Peer-Feedback: Bewertung des sprachlichen Ausdrucks, der strategischen Kommunikation und der Reflexionstiefe. Revisionen der schriftlichen Ausarbeitungen sind während des Semesters möglich.",
        "pedagogicalBenefit": "Echte mündliche Handlungsfähigkeit im internationalen Geschäftskontext steht im Vordergrund, statt starre Vokabel- und Grammatiktests."
      }
    },
    {
      "id": "768",
      "name": "Spanisch für den Beruf für Anfänger mit Vorkenntnissen (A2)",
      "englishName": "Business Spanish 2 (A2)",
      "semester": 0,
      "sws": 4,
      "crp": 6,
      "type": "wahlpflicht_b",
      "responsible": "Dr. Christine Beckmann",
      "teachers": [
        "Lehrende des Sprachzentrums"
      ],
      "contents": "Erweiterung der Sprachkenntnisse auf Niveau A2. Vergangenheitsformen, Telefongespräche, Lebenslauferstellung, landeskundliche Aspekte.",
      "exams": [
        {
          "type": "Klausur",
          "weight": 100,
          "details": "Präsentation, Klausur (zusammen 100%)"
        }
      ],
      "hasMc": false,
      "language": "Spanisch",
      "reformProposal": {
        "alternativeExams": [
          "Mündliche Verhandlungssimulation & Interkultureller Reflexions-Podcast"
        ],
        "authenticAssessmentDesc": "Anstelle einer schriftlichen Klausur erarbeiten die Studierenden in Kleingruppen ein internationales Verhandlungsszenario (z.B. Kooperationsvereinbarung oder Lieferantengespräch). Sie zeichnen die Live-Verhandlung als Video oder Podcast auf und fügen eine Reflexion über angewandte linguistische Muster und interkulturelle Barrieren hinzu.",
        "alternativeGradingDesc": "Portfolio Grading mit Peer-Feedback: Bewertung des sprachlichen Ausdrucks, der strategischen Kommunikation und der Reflexionstiefe. Revisionen der schriftlichen Ausarbeitungen sind während des Semesters möglich.",
        "pedagogicalBenefit": "Echte mündliche Handlungsfähigkeit im internationalen Geschäftskontext steht im Vordergrund, statt starre Vokabel- und Grammatiktests."
      }
    },
    {
      "id": "NM403",
      "name": "Nachhaltigkeit und gesellschaftliche Verantwortung",
      "englishName": "Sustainability and social responsibility",
      "semester": 1,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Isabell Lenz",
      "teachers": ["Prof. Dr. Isabell Lenz", "Prof. Dr. Julian Conrads"],
      "contents": "Einführung in planetare Ressourcennutzung, Planetary Boundaries, Donut Economics, Grenzen des Wachstums. Menschenbild: Homo Oeconomicus vs. sozialer Mensch. UN SDGs. Gesetzgebung, CSR-Konzepte, Triple Bottom Line, ESG, Stakeholder-Orientierung.",
      "objectives": "Nachweis der Befähigung zur Analyse zentraler Nachhaltigkeitsherausforderungen aus ökonomischer, ökologischer und sozialer Sicht. Beschreibung der Gestaltungsbereiche unternehmerischer Verantwortung.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur, 90 Minuten (teilweise Antwort-Wahl-Verfahren)" }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM206",
      "name": "Business & Leadership Ethics",
      "englishName": "Business and Leadership Ethics",
      "semester": 2,
      "sws: ": 4,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Julian Conrads",
      "teachers": ["Prof. Dr. Julian Conrads"],
      "contents": "Normative Ethik (Folgenethik, Pflichtenethik, Tugendethik). Individuelles moralisches Entscheiden (Bounded Ethicality, Self-Concept Maintenance, Nudging). Unternehmenskultur (Compliance, Integrität, ethische Führung). Märkte und Moral (Whistleblowing, Greenwashing, Korruption).",
      "objectives": "Fähigkeit zur Analyse ethischer Dilemmata im unternehmerischen Kontext. Erarbeitung von Abhilfemaßnahmen zur Stärkung der Integritätskultur.",
      "exams": [
        { "type": "Portfolio", "weight": 100, "details": "Modulbegleitendes Portfolio (Gruppenpräsentationen, Seminararbeit) oder Klausur (max. 90 Minuten)" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM207",
      "name": "Grundlagen der Ökologie und Ökobilanzierung",
      "englishName": "Basics of Ecology and Life Cycle Assessment",
      "semester": 2,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Holger Rohn",
      "teachers": ["Prof. Dr. Holger Rohn", "Prof. Dr.-Ing. Sebastian Schrems", "Hannah Sophie Tscherney", "Fabian Völker"],
      "contents": "Grundlagen der Ökologie und natürliche Ressourcen (Rohstoffe, Wasser, Boden, Biodiversität). Umweltwirkungen (Klimawandel, Eutrophierung). Life Cycle Management und Life Cycle Thinking. Ökobilanzierung (Carbon Footprint, Water Footprint, Material Footprint, Stoffstromanalyse).",
      "objectives": "Erwerb von Grundlagenwissen zur Ökobilanzierung und Nutzung von Ressourcen. Anwendung ökologischer Analysemethoden für Produkte und Unternehmen.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur (90 Minuten) oder Klausur (45 Minuten) mit Seminararbeit und/oder Präsentation" }
      ],
      "hasMc": false,
      "workloadTotal: ": 150,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM307",
      "name": "Nachhaltigkeitsökonomik: Armut, Ungleichheit und Planetare Belastungsgrenzen",
      "englishName": "Sustainable Economics: Poverty, Inequality & Planetary Boundaries",
      "semester": 3,
      "sws": 4,
      "crp: ": 5,
      "crp": 5,
      "type": "pflicht",
      "responsible: ": "Prof. Dr. Markus Gerhard",
      "responsible": "Prof. Dr. Markus Gerhard",
      "teachers": ["Prof. Dr. Markus Gerhard"],
      "contents": "Entwicklungsleitbild der UN, Grenzen des Wachstums. Wirtschaftswachstum, globale Einkommensverteilung und Armutsreduktion. Beziehung zwischen Ökonomie und Ökologie, planetare Grenzen. Marktversagen bei Umweltgütern und Instrumente der Umweltpolitik.",
      "objectives": "Analyse zentraler Herausforderungen und Pfade nachhaltiger Entwicklung unter sozialen, ökonomischen und ökologischen Gesichtspunkten. Theoriebasierte Bewertung von umweltpolitischen Eingriffen.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur, 60-90 Minuten (ggf. teilweise Antwort-Wahl-Verfahren)" }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM308",
      "name": "Entwicklung einer Nachhaltigkeitsstrategie",
      "englishName: ": "Sustainability Strategy Development",
      "englishName": "Sustainability Strategy Development",
      "semester": 3,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Isabell Lenz",
      "teachers": ["Prof. Dr. Isabell Lenz"],
      "contents": "Grundlagen des nachhaltigen strategischen Managements. Integration von Nachhaltigkeit ins Unternehmensleitbild. Wesentlichkeitsanalyse und doppelte Materialität (Inside-out / Outside-in). Stakeholder-Dialoge und Verknüpfung mit SDGs. Entwicklung von KPIs und Nachhaltigkeitszielen.",
      "objectives": "Analyse von Nachhaltigkeitsanforderungen und Ableitung konkreter Managementansätze. Formulierung evidenzbasierter Strategien entlang der Wertschöpfungskette.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur, 60-90 Minuten (ggf. Case Study, teilweise Antwort-Wahl-Verfahren) und/oder Präsentation" }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM405",
      "name": "Implementierung einer Nachhaltigkeitsstrategie",
      "englishName": "Corporate Sustainability Implementation",
      "semester": 4,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Isabell Lenz",
      "teachers": ["Prof. Dr. Isabell Lenz"],
      "contents": "Organisationsstrukturen und Stellhebel zur Nachhaltigkeitsimplementierung. Umsetzung konkreter Maßnahmen in den Handlungsfeldern (Klima, Soziales, Governance). Implementierung von Nachhaltigkeitsstandards (B-Corp, UN Global Compact, ISO 14001, FSC). Kennzahlen zur Erfolgsmessung und Ratings.",
      "objectives": "Identifikation geeigneter Umsetzungsmaßnahmen für verschiedene Nachhaltigkeitsstrategien. Anwendung von Steuerungs- und Messkonzepten für die Nachhaltigkeitsperformance.",
      "exams": [
        { "type": "Portfolio", "weight": 100, "details": "Portfolio (max. 40 Präsentationsfolien, max. 5 Seiten schriftliche Ausarbeitung, max. 10 Min Präsentation)" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees: ": ["bwl_nm"],
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM406",
      "name": "Sustainable Finance",
      "englishName": "Sustainable Finance",
      "semester": 4,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Anke Haag",
      "teachers": ["Prof. Dr. Anke Haag", "Dr. Reiner Martin"],
      "contents": "Nationale und internationale Sustainable Finance-Strategien. Klimarisiken und ökonomische Aspekte. CO2-Steuern und Emissionshandel. EU-Taxonomie, Offenlegungsverordnung. Nachhaltige Investitionsstrategien, ESG-Ratings, Greenwashing.",
      "objectives": "Verständnis der Hebelwirkung der Finanzwirtschaft bei der Transformation. ESG-Kriterien bei Investitionsentscheidungen berücksichtigen und regulatorische Anforderungen bewerten.",
      "exams": [
        { "type": "Portfolio", "weight": 100, "details": "Portfolio, 10-15 Seiten oder Klausur, 90 Minuten" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch/Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM408",
      "name": "Nachhaltiges Produktionsmanagement",
      "englishName": "Sustainable Production Management",
      "semester": 4,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr.-Ing. Serhan Bastürk",
      "teachers": ["Prof. Dr.-Ing. Serhan Bastürk"],
      "contents": "Ökologische, ökonomische und soziale Aspekte in der industriellen Wertschöpfung. GHG Protocol, CO2-Fußabdruck und LCA in der Produktion. Ressourcen- und Energieeffizienz, Lean Production, Six Sigma. Kreislaufwirtschaft (R-Strategien, Circular Production) und grüne Produkte.",
      "objectives": "Integration von Nachhaltigkeitsanforderungen in die Planung und Steuerung von Produktionssystemen. Verständnis von Methoden zur Emissionsminderung und Kreislaufführung.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur, 90 Minuten (teilweise Antwort-Wahl-Verfahren)" }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM407",
      "name": "Wirtschaftsrecht",
      "englishName": "Business Law",
      "semester": 4,
      "sws": 4,
      "crp: ": 5,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Leonie Kempel",
      "teachers": ["Prof. Dr. Leonie Kempel"],
      "contents": "Rechtssubjekte und kaufmännische Unternehmen (Kaufmannsbegriff, Handelsfirma). Schuldrecht (Verträge, Leistungsstörungen). Grundlagen des Umweltrechts (Immissionsschutz, Wasserrecht, Abfallrecht) und Klimaschutzrechts. EU- und Völkerrecht. Haftung und Reportingpflichten.",
      "objectives": "Lösung praktischer Rechtsfälle aus dem Wirtschafts- und Umweltrecht unter Berücksichtigung kaufmännischer Realitäten. Juristische Fallbearbeitung im Nachhaltigkeitskontext.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur (Fallbearbeitung & Wissensabfrage), 90 Minuten" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM501",
      "name": "Nachhaltigkeitscontrolling",
      "englishName": "Sustainability Controlling",
      "semester": 5,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Timo Kachel",
      "teachers": ["Prof. Dr. Timo Kachel"],
      "contents": "Besondere Aspekte des Nachhaltigkeitscontrollings. Einkriterielle und multikriterielle Bewertungsverfahren. Strategische Instrumente: Shareholder Value, Wertschöpfungsrechnung, Sustainable Value Added, Sustainable Balanced Scorecard. Operative Instrumente: Umweltkostenrechnung, Gemeinwohlmatrix.",
      "objectives": "Erklärung der Ziele und Aufgaben des Nachhaltigkeitscontrollings. Anwendung spezifischer Controllinginstrumente zur Entscheidungsunterstützung und Verhaltenssteuerung.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur, 60-90 Minuten (teilweise Antwort-Wahl-Verfahren)" }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM502",
      "name": "Nachhaltigkeitsreporting und externe Prüfung",
      "englishName": "Sustainability reporting and external assurance",
      "semester": 5,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Isabell Lenz",
      "teachers": ["Prof. Dr. Isabell Lenz", "Prof. Dr. Katharina Dillkötter"],
      "contents": "Unternehmerische Berichterstattungspflicht (CSRD). Prinzipien der Berichterstattung. Berichtsstandards: Deutscher Nachhaltigkeitskodex (DNK), GRI, ESRS. Klimaberichterstattung. Prozessschritte der Berichtserstellung und Grundlagen der externen Wirtschaftsprüfung.",
      "objectives": "Fähigkeit zur prozessualen und inhaltlichen Gestaltung der Nachhaltigkeitsberichterstattung. Anwendung nationaler und internationaler Qualitätsstandards sowie Beurteilung von Prüfungsgutachten.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur, 60-90 Minuten (teilweise Antwort-Wahl-Verfahren) und optional Gruppenpräsentation" }
      ],
      "hasMc": true,
      "mcDetails": "Klausur teilweise im Antwort-Wahl-Verfahren.",
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM503",
      "name": "Digitalisierung und Nachhaltigkeit",
      "englishName": "Digitalization and Sustainability",
      "semester": 5,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Christian Leyh",
      "teachers": ["Prof. Dr. Christian Leyh"],
      "contents": "Grundlagen der Digitalen Transformation (Güter, Plattformen, Technologietrends). Auswirkungen der Digitalisierung auf Wertschöpfung und Corporate Digital Responsibility. Interdependenzen zwischen Digitalisierung und Nachhaltigkeit (Sustainability 4.0, grüne IT, digitale Geschäftsmodelle).",
      "objectives": "Analyse informationstechnischer Anforderungen im Unternehmensalltag. Kriteriengeleitete Identifikation von Handlungsfeldern der doppelten Transformation (Digital & Sustainable).",
      "exams": [
        { "type": "Performanz- bzw. Simulationsprüfung", "weight": 100, "details": "Performanzprüfung (Simulation einer beruflichen Situation) und schriftliche Ausarbeitung" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch/Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM504",
      "name": "Change & Innovation Management for Sustainable Organizations",
      "englishName": "Change and Innovation Management for Sustainable Organizations",
      "semester": 5,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Matthias Groß",
      "teachers": ["Prof. Dr. Matthias Groß"],
      "contents": "Arten des Wandels (inkrementell vs. disruptiv, open vs. closed). Systemtheorie, Kybernetik und Sozialpsychologie. Führung, Kultur und Phasen von Veränderungsprozessen. Instrumente des Change-Managements (Zukunftswerkstatt, Roadmaps) und Green HRM. Widerstände und KI im Wandel.",
      "objectives": "Reflexion und Anwendung von Ansätzen des systemischen Change- und Innovationsmanagements auf allen Unternehmensebenen. Umgang mit der Ambivalenz von Stabilität und Wandel.",
      "exams": [
        { "type": "Portfolio", "weight": 100, "details": "Portfolio (die erwarteten Inhalte werden zu Beginn bekannt gegeben)" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM506",
      "name": "Sustainable Supply Chain Management and Logistics",
      "englishName": "Sustainable Supply Chain Management and Logistics",
      "semester": 5,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Julian Conrads",
      "teachers": ["Prof. Dr. Julian Conrads"],
      "contents": "Grundlagen des SCM und der Logistik. Rechtliche Rahmenbedingungen (Lieferkettensorgfaltspflichtengesetz, OECD). Lieferkettentransparenz und Risiko- vs. produktbasiertes SCM. Ökologische (CO2, Kreisläufe, Tierwohl) und soziale (Menschenrechte, Arbeitsbedingungen) Herausforderungen. Grüne Logistik, E-Commerce, Scope 3 Emissionen.",
      "objectives": "Planung, Steuerung und Koordination von Logistikprozessen zur Senkung ökologischer und sozialer Auswirkungen. Verknüpfung von SCM-Risiken mit der Triple Bottom Line.",
      "exams": [
        { "type": "Portfolio", "weight": 100, "details": "Modulbegleitendes Portfolio (Präsentationen, Seminararbeit, Case Study) oder Klausur (max. 90 Minuten)" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM602",
      "name": "Business Project / Research Project",
      "englishName": "Business Project / Research Project",
      "semester": 6,
      "sws": 6,
      "crp": 8,
      "type: ": "pflicht",
      "type": "pflicht",
      "responsible": "Prof. Dr. Julian Conrads",
      "teachers": ["Prof. Dr. Julian Conrads", "Prof. Dr. Isabell Lenz", "Prof. Dr. Christian Leyh", "Prof. Dr. Matthias Groß"],
      "contents": "Business Project: Projektmanagement-Planung und inhaltliche Projektarbeit in Kleingruppen für Kooperationsunternehmen (studentische Berater). Research Project: Wissenschaftliche Bearbeitung von empirischen Forschungsfragen der Professoren im Bereich Nachhaltigkeit.",
      "objectives": "Praktische oder wissenschaftliche Bearbeitung komplexer Fragestellungen. Präsentation und Argumentation erarbeiteter Lösungen vor Praxispartnern bzw. Wissenschaftlern.",
      "exams": [
        { "type": "Projekt", "weight": 100, "details": "Projektarbeit (Zwischen- und Abschlusspräsentation)" }
      ],
      "hasMc": false,
      "workloadTotal": 240,
      "workloadPresence": 90,
      "workloadSelfStudy": 150,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM603",
      "name": "Marketing und nachhaltiger Konsum",
      "englishName": "Marketing and Sustainable Consumption",
      "semester": 6,
      "sws": 4,
      "crp": 5,
      "type": "pflicht",
      "responsible": "Prof. Dr. Stefanie Wannow",
      "teachers": ["Prof. Dr. Stefanie Wannow"],
      "contents": "Gesellschaftliche Relevanz des nachhaltigen Konsums. Formen (Sharing, Re/Upcycling, Fair Trade). Treiber und Barrieren (Attitude-Behavior-Gap). Definition nachhaltiger Angebote, Marketingstrategien zur Konsumförderung, Green- und Wokewashing.",
      "objectives": "Analyse von Wegen zur Konsumveränderung. Entwicklung zielgerichteter, theoriebasierter Marketing- und Kommunikationskonzepte zur Reduzierung des Fußabdrucks.",
      "exams": [
        { "type": "Projekt", "weight": 100, "details": "Projekt mit Gruppenpräsentation (20-30 Folien, 30 Minuten)" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch/Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "NM725",
      "name": "Aktuelle Themen des Nachhaltigkeitsmanagements",
      "englishName": "Current Topics in Sustainability Management",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Julian Conrads",
      "teachers": ["Prof. Dr. Julian Conrads", "Prof. Dr. Isabell Lenz", "Prof. Dr. Markus Gerhard"],
      "contents": "Wechselnde, aktuelle Themen aus dem Gebiet des Nachhaltigkeitsmanagements. Tiefgehende Auseinandersetzung mit speziellen Praxis- oder Politikfragen.",
      "objectives": "Erweiterung und Spezialisierung der Fachkenntnisse. Fähigkeit zur wissenschaftlichen Diskussion und Verteidigung eigener Standpunkte.",
      "exams": [
        { "type": "Seminararbeit", "weight": 100, "details": "Seminararbeit (10-20 Seiten) und Präsentation (30-60 Minuten)" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "739_nm",
      "name": "Social Entrepreneurship (NM-Version)",
      "englishName": "Social Entrepreneurship",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Matthias Groß",
      "teachers": ["Prof. Dr. Matthias Groß"],
      "contents": "Entwicklung sozial nachhaltiger Geschäftsmodelle. CSR-Konzepte, Impact Measurement, Teambuilding, Pitching sozialer Start-up Ideen.",
      "objectives": "Ziel des Moduls ist es, theoretische und praktische Kenntnisse zur Gründung eines Social Startups zu erlernen und anzuwenden.",
      "exams": [
        { "type": "Projekt", "weight": 100, "details": "Projekt o. Seminararbeit, (Pitch-)Präsentation" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch/Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "421_nm",
      "name": "International Business Environment (NM-Version)",
      "englishName": "International Business Environment",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Benjamin Löhr",
      "teachers": ["Prof. Dr. Benjamin Löhr"],
      "contents": "Rahmenbedingungen internationaler Unternehmenstätigkeit. Globalisierung, Unterschiede im internationalen Kontext, Ethik, soziale Verantwortung und Nachhaltigkeit, Devisenmarkt.",
      "objectives": "Grundlagen internationaler Unternehmenstätigkeit erklären, einordnen und bewerten. Interkulturelle Kompetenz stärken.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur, 90 Minuten (kann Antwort-Wahl-Verfahren beinhalten)" }
      ],
      "hasMc": true,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "422_nm",
      "name: ": "International Business Management (NM-Version)",
      "name": "International Business Management (NM-Version)",
      "englishName": "International Business Management",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Benjamin Löhr",
      "teachers": ["Prof. Dr. Benjamin Löhr"],
      "contents": "Strategien und Kernfunktionsbereiche internationaler Unternehmen. Markteintritt, Organisation, Marketing, Personal, Controlling, aktuelle Themen.",
      "objectives": "Geschäftsprozesse internationaler Unternehmen erklären. Besonderheiten des internationalen Managements ableiten.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur, 90 Minuten" }
      ],
      "hasMc": true,
      "workloadTotal": 150,
      "workloadPresence: ": 60,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "733_nm",
      "name": "Intercultural Competence (NM-Version)",
      "englishName": "Intercultural Competence",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_a",
      "responsible": "Prof. Dr. Martina Höber",
      "teachers": ["Heike Siebert"],
      "contents": "Kultur, Werte und Identität. Theoretische Modelle (Kulturdimensionen). Stereotype. Konflikte und Kommunikation (verbal, non-verbal). Diversität.",
      "objectives": "Erwerb interkultureller Kompetenzen zur besseren Verständigung mit Menschen unterschiedlicher kultureller Hintergründe.",
      "exams": [
        { "type": "Portfolio", "weight": 100, "details": "2 Fallstudienpräsentationen & Hausarbeit (6-8 Seiten)" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "751_nm",
      "name": "Personal- und Organisationspsychologie (NM-Version)",
      "englishName": "Personnel and organizational psychology",
      "semester: ": 0,
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_a",
      "responsible": "Anne Mazuga",
      "teachers": ["Anne Mazuga"],
      "contents": "Einführung in Personal- und Organisationspsychologie. Flexibilisierung von Arbeit, Motivation, Führung, Gesundheit, Stress & Resilienz, Diversität.",
      "objectives": "Analyse komplexer sozialer Situationen in verschiedenen Arbeitskontexten zur Gestaltung professioneller Arbeitsbeziehungen.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur, Seminararbeit oder Referat" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "6067",
      "name": "Energiewirtschaft und Sektorenkopplung",
      "englishName": "Energy Economics and Sector Coupling",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_b",
      "responsible": "Dekanat Fachbereich",
      "teachers": ["Lehrende des Fachbereichs"],
      "contents": "Grundlagen der Energiewirtschaft. Erneuerbare Energien, Netze und Strommärkte. Dekarbonisierung durch Sektorenkopplung (Wärme, Verkehr, Industrie, Wasserstoff).",
      "objectives": "Verstehen der energiewirtschaftlichen Grundlagen und Potenziale der Sektorenkopplung zur Erreichung von Klimazielen.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "1044",
      "name": "Lebenszyklusorientiertes Produktionsmanagement",
      "englishName": "Life-Cycle Oriented Production Management",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_b",
      "responsible": "Dekanat Fachbereich",
      "teachers": ["Lehrende des Fachbereichs"],
      "contents": "Lebenszyklus von Produktionsanlagen und Produkten. Instandhaltung, Retrofit, Kreislauffähigkeit und nachhaltige Fabrikplanung.",
      "objectives": "Anwendung ganzheitlicher Managementkonzepte über den gesamten Lebenszyklus industrieller Systeme.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur oder Portfolio" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "1383",
      "name": "Life Cycle Assessment",
      "englishName": "Life Cycle Assessment",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_b",
      "responsible": "Prof. Dr. Holger Rohn",
      "teachers": ["Prof. Dr. Holger Rohn"],
      "contents": "Vertiefung der Ökobilanzierung nach ISO 14040/44. Softwaregestützte Modellierung von Produktlebenszyklen, Wirkungsabschätzung und Interpretation.",
      "objectives": "Eigenständige Durchführung und kritische Analyse komplexer Ökobilanzierungs-Projekte für Industrieprodukte.",
      "exams": [
        { "type": "Projekt", "weight": 100, "details": "Projektarbeit" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch/Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "1385",
      "name": "Nachhaltiges Ressourcenmanagement",
      "englishName": "Sustainable Resource Management",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_b",
      "responsible": "Dekanat Fachbereich",
      "teachers": ["Lehrende des Fachbereichs"],
      "contents": "Konzepte der Ressourceneffizienz und zirkulären Ökonomie. Materialeffizienz-Analysen, Recyclingtechnologien und kritische Rohstoffe.",
      "objectives": "Erkennung von Potenzialen zur Einsparung von Primärrohstoffen und Etablierung zirkulärer Wertschöpfung.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "1386",
      "name": "Umweltkostenrechnung / Materialflusskostenrechnung",
      "englishName": "Environmental and Material Flow Cost Accounting",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_b",
      "responsible": "Dekanat Fachbereich",
      "teachers: ": ["Lehrende des Fachbereichs"],
      "teachers": ["Lehrende des Fachbereichs"],
      "contents": "Erfassung von Stoff- und Energieflüssen im Rechnungswesen nach ISO 14051. Bewertung von Materialverlusten als Kostentreiber.",
      "objectives": "Verknüpfung von physischem Ressourcenverbrauch mit monetären Kosten zur ökonomischen Rechtfertigung von Umweltschutzmaßnahmen.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "1341",
      "name": "Industrial Ecology",
      "englishName": "Industrial Ecology",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_b",
      "responsible": "Dekanat Fachbereich",
      "teachers": ["Lehrende des Fachbereichs"],
      "contents": "Industrielle Symbiosen und Stoffkreisläufe. Parallelen zwischen biologischen Ökosystemen und industrieller Leistungserstellung.",
      "objectives": "Entwurf zirkulärer Industrieparks und Verstehen übergeordneter Stoffströme.",
      "exams": [
        { "type": "Seminararbeit", "weight": 100, "details": "Seminararbeit" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch/Englisch",
      "degrees": ["bwl_nm"]
    },
    {
      "id": "1382",
      "name": "CSR/Nachhaltigkeitsmanagement WI",
      "englishName": "CSR and Sustainability Management",
      "semester": 0,
      "sws": 4,
      "crp": 5,
      "type": "wahlpflicht_b",
      "responsible": "Dekanat Fachbereich",
      "teachers": ["Lehrende des Fachbereichs"],
      "contents": "Nachhaltigkeitsmanagement an der Schnittstelle zu den Ingenieurwissenschaften. Technische Hebel zur Dekarbonisierung, Prozessoptimierung.",
      "objectives": "Ganzheitliche Begleitung technischer Transformationsprojekte unter Beachtung wirtschaftlicher und sozialer Indikatoren.",
      "exams": [
        { "type": "Klausur", "weight": 100, "details": "Klausur" }
      ],
      "hasMc": false,
      "workloadTotal": 150,
      "workloadPresence": 60,
      "workloadSelfStudy": 90,
      "language": "Deutsch",
      "degrees": ["bwl_nm"]
    }
  ]
};
console.log("THM Gießen Data loaded successfully:", window.THM_DATA.MODULES.length, "modules.");
