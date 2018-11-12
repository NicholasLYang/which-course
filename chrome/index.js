const replacements = [
      { regex: /CORE-UA(&nbsp;| )*105(?=(&nbsp;|  |-|<))/g, replacement: "Quantitative Reasoning: Elementary Statistics -- CORE-UA 105 " },
{ regex: /CORE-UA(&nbsp;| )*107(?=(&nbsp;|  |-|<))/g, replacement: "Quantitative Reasoning: Prob,Stats & Decisn-Mkng -- CORE-UA 107 " },
{ regex: /CORE-UA(&nbsp;| )*109(?=(&nbsp;|  |-|<))/g, replacement: "Quantitative Reasoning: Math & Computing -- CORE-UA 109 " },
{ regex: /CORE-UA(&nbsp;| )*110(?=(&nbsp;|  |-|<))/g, replacement: "Quantitative Reasoning: Great Ideas in Mathematics -- CORE-UA 110 " },
{ regex: /CORE-UA(&nbsp;| )*111(?=(&nbsp;|  |-|<))/g, replacement: "Quantitative Reasoning: From Data to Discovery -- CORE-UA 111 " },
{ regex: /CORE-UA(&nbsp;| )*203(?=(&nbsp;|  |-|<))/g, replacement: "Physical Science: Energy & The Environment -- CORE-UA 203 " },
{ regex: /CORE-UA(&nbsp;| )*204(?=(&nbsp;|  |-|<))/g, replacement: "Physical Science: Einstein's Universe -- CORE-UA 204 " },
{ regex: /CORE-UA(&nbsp;| )*209(?=(&nbsp;|  |-|<))/g, replacement: "Physical Science: Quarks to Cosmos -- CORE-UA 209 " },
{ regex: /CORE-UA(&nbsp;| )*210(?=(&nbsp;|  |-|<))/g, replacement: "Physical Science: Molecules of Life -- CORE-UA 210 " },
{ regex: /CORE-UA(&nbsp;| )*214(?=(&nbsp;|  |-|<))/g, replacement: "Physical Science: How Things Work -- CORE-UA 214 " },
{ regex: /CORE-UA(&nbsp;| )*303(?=(&nbsp;|  |-|<))/g, replacement: "Life Science: Human Genetics -- CORE-UA 303 " },
{ regex: /CORE-UA(&nbsp;| )*306(?=(&nbsp;|  |-|<))/g, replacement: "Life Science: Brain and Behavior -- CORE-UA 306 " },
{ regex: /CORE-UA(&nbsp;| )*312(?=(&nbsp;|  |-|<))/g, replacement: "Life Science: Earth, Life & Time -- CORE-UA 312 " },
{ regex: /CORE-UA(&nbsp;| )*315(?=(&nbsp;|  |-|<))/g, replacement: "Life Science: Human Reproduction -- CORE-UA 315 " },
{ regex: /CORE-UA(&nbsp;| )*400(?=(&nbsp;|  |-|<))/g, replacement: "Texts & Ideas: -- CORE-UA 400 " },
{ regex: /CORE-UA(&nbsp;| )*403(?=(&nbsp;|  |-|<))/g, replacement: "Texts & Ideas: Antiquity & The Enlightenment -- CORE-UA 403 " },
{ regex: /CORE-UA(&nbsp;| )*404(?=(&nbsp;|  |-|<))/g, replacement: "Texts & Ideas: Antiquity & The 19th Century -- CORE-UA 404 " },
{ regex: /CORE-UA(&nbsp;| )*500(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Topics -- CORE-UA 500 " },
{ regex: /CORE-UA(&nbsp;| )*502(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Islamic Societies -- CORE-UA 502 " },
{ regex: /CORE-UA(&nbsp;| )*507(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Japan -- CORE-UA 507 " },
{ regex: /CORE-UA(&nbsp;| )*510(?=(&nbsp;|  |-|<))/g, replacement: "Cultures and Contexts: Russia Between East and West -- CORE-UA 510 " },
{ regex: /CORE-UA(&nbsp;| )*514(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Ancient Israel -- CORE-UA 514 " },
{ regex: /CORE-UA(&nbsp;| )*529(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Contemporary Latino Cultures -- CORE-UA 529 " },
{ regex: /CORE-UA(&nbsp;| )*532(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: African Diaspora -- CORE-UA 532 " },
{ regex: /CORE-UA(&nbsp;| )*534(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: The Black Atlantic -- CORE-UA 534 " },
{ regex: /CORE-UA(&nbsp;| )*536(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Indigenous Australia -- CORE-UA 536 " },
{ regex: /CORE-UA(&nbsp;| )*539(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Asian / Pacific / American Cultures -- CORE-UA 539 " },
{ regex: /CORE-UA(&nbsp;| )*544(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Spain -- CORE-UA 544 " },
{ regex: /CORE-UA(&nbsp;| )*545(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Egypt of The Pharaohs -- CORE-UA 545 " },
{ regex: /CORE-UA(&nbsp;| )*546(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Global Asia -- CORE-UA 546 " },
{ regex: /CORE-UA(&nbsp;| )*555(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Context: Brazil -- CORE-UA 555 " },
{ regex: /CORE-UA(&nbsp;| )*711(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Culture: The Graphic Novel -- CORE-UA 711 " },
{ regex: /CORE-UA(&nbsp;| )*722(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Culture: Architecture in New York Field -- CORE-UA 722 " },
{ regex: /CORE-UA(&nbsp;| )*724(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Culture: Photography -- CORE-UA 724 " },
{ regex: /CORE-UA(&nbsp;| )*730(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Culture: Sounds -- CORE-UA 730 " },
{ regex: /CORE-UA(&nbsp;| )*740(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Culture:Performance -- CORE-UA 740 " },
{ regex: /CORE-UA(&nbsp;| )*750(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Culture: Film -- CORE-UA 750 " },
{ regex: /CORE-UA(&nbsp;| )*760(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Culture: Topics -- CORE-UA 760 " },
{ regex: /CORE-UA(&nbsp;| )*305(?=(&nbsp;|  |-|<))/g, replacement: "Life Science: Human Origins -- CORE-UA 305 " },
{ regex: /CORE-UA(&nbsp;| )*310(?=(&nbsp;|  |-|<))/g, replacement: "Life Science: Molecules of Life -- CORE-UA 310 " },
{ regex: /CORE-UA(&nbsp;| )*311(?=(&nbsp;|  |-|<))/g, replacement: "Life Science: Lessons From The Biosphere -- CORE-UA 311 " },
{ regex: /CORE-UA(&nbsp;| )*313(?=(&nbsp;|  |-|<))/g, replacement: "Life Science: The Brain, A User's Guide -- CORE-UA 313 " },
{ regex: /CORE-UA(&nbsp;| )*402(?=(&nbsp;|  |-|<))/g, replacement: "Texts & Ideas: Antiquity & The Renaissance -- CORE-UA 402 " },
{ regex: /CORE-UA(&nbsp;| )*509(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Caribbean -- CORE-UA 509 " },
{ regex: /CORE-UA(&nbsp;| )*515(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Latin America -- CORE-UA 515 " },
{ regex: /CORE-UA(&nbsp;| )*516(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: India -- CORE-UA 516 " },
{ regex: /CORE-UA(&nbsp;| )*537(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Modern Israel -- CORE-UA 537 " },
{ regex: /CORE-UA(&nbsp;| )*543(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Korea -- CORE-UA 543 " },
{ regex: /CORE-UA(&nbsp;| )*549(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Multinational Britain -- CORE-UA 549 " },
{ regex: /CORE-UA(&nbsp;| )*554(?=(&nbsp;|  |-|<))/g, replacement: "Cultures & Contexts: Italy -- CORE-UA 554 " },
{ regex: /CORE-UA(&nbsp;| )*700(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Culture: Tpcs -- CORE-UA 700 " },
{ regex: /CORE-UA(&nbsp;| )*720(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Cult: Images -- CORE-UA 720 " },
{ regex: /CORE-UA(&nbsp;| )*761(?=(&nbsp;|  |-|<))/g, replacement: "Expressive Culture: La Belle Epoque -- CORE-UA 761 " },
{ regex: /CHEM-UA(&nbsp;| )*120(?=(&nbsp;|  |-|<))/g, replacement: "Introduction to Modern Chemistry -- CHEM-UA 120 " },
{ regex: /CHEM-UA(&nbsp;| )*125(?=(&nbsp;|  |-|<))/g, replacement: "General Chemistry I & Laboratory -- CHEM-UA 125 " },
{ regex: /CHEM-UA(&nbsp;| )*126(?=(&nbsp;|  |-|<))/g, replacement: "General Chemistry II & Laboratory -- CHEM-UA 126 " },
{ regex: /CHEM-UA(&nbsp;| )*129(?=(&nbsp;|  |-|<))/g, replacement: "Accelerated General Chemistry -- CHEM-UA 129 " },
{ regex: /CHEM-UA(&nbsp;| )*140(?=(&nbsp;|  |-|<))/g, replacement: "Mathematics of Chemistry -- CHEM-UA 140 " },
{ regex: /CHEM-UA(&nbsp;| )*210(?=(&nbsp;|  |-|<))/g, replacement: "Principles of Organic and Biological Chemistry and Laboratory -- CHEM-UA 210 " },
{ regex: /CHEM-UA(&nbsp;| )*225(?=(&nbsp;|  |-|<))/g, replacement: "Organic Chemistry I & Laboratory -- CHEM-UA 225 " },
{ regex: /CHEM-UA(&nbsp;| )*226(?=(&nbsp;|  |-|<))/g, replacement: "Organic Chemistry II & Laboratory -- CHEM-UA 226 " },
{ regex: /CHEM-UA(&nbsp;| )*227(?=(&nbsp;|  |-|<))/g, replacement: "Majors Organic Chemistry I & Laboratory -- CHEM-UA 227 " },
{ regex: /CHEM-UA(&nbsp;| )*651(?=(&nbsp;|  |-|<))/g, replacement: "Quantum Mechanics & Spectroscopy -- CHEM-UA 651 " },
{ regex: /CHEM-UA(&nbsp;| )*652(?=(&nbsp;|  |-|<))/g, replacement: "Thermodynamics & Kinetics -- CHEM-UA 652 " },
{ regex: /CHEM-UA(&nbsp;| )*661(?=(&nbsp;|  |-|<))/g, replacement: "Physical Chemistry Laboratory -- CHEM-UA 661 " },
{ regex: /CHEM-UA(&nbsp;| )*752(?=(&nbsp;|  |-|<))/g, replacement: "Computational Chemistry -- CHEM-UA 752 " },
{ regex: /CHEM-UA(&nbsp;| )*828(?=(&nbsp;|  |-|<))/g, replacement: "Structural DNA Nanotechnology -- CHEM-UA 828 " },
{ regex: /CHEM-UA(&nbsp;| )*881(?=(&nbsp;|  |-|<))/g, replacement: "Biochemistry I -- CHEM-UA 881 " },
{ regex: /CHEM-UA(&nbsp;| )*885(?=(&nbsp;|  |-|<))/g, replacement: "Experimental Biochem & Laboratory -- CHEM-UA 885 " },
{ regex: /CHEM-UA(&nbsp;| )*911(?=(&nbsp;|  |-|<))/g, replacement: "Advanced Organic Chemistry -- CHEM-UA 911 " },
{ regex: /CHEM-UA(&nbsp;| )*995(?=(&nbsp;|  |-|<))/g, replacement: "Senior Honors in Chem -- CHEM-UA 995 " },
{ regex: /CHEM-UA(&nbsp;| )*997(?=(&nbsp;|  |-|<))/g, replacement: "Adv Independent Study & Research -- CHEM-UA 997 " },
{ regex: /CSCI-UA(&nbsp;| )*2(?=(&nbsp;|  |-|<))/g, replacement: "Introduction to Computer Programming -- CSCI-UA 2 " },
{ regex: /CSCI-UA(&nbsp;| )*4(?=(&nbsp;|  |-|<))/g, replacement: "Introduction to Web Design and Computer Principles -- CSCI-UA 4 " },
{ regex: /CSCI-UA(&nbsp;| )*60(?=(&nbsp;|  |-|<))/g, replacement: "Database Design and Web Implementation -- CSCI-UA 60 " },
{ regex: /CSCI-UA(&nbsp;| )*61(?=(&nbsp;|  |-|<))/g, replacement: "Web Development and Programming -- CSCI-UA 61 " },
{ regex: /CSCI-UA(&nbsp;| )*101(?=(&nbsp;|  |-|<))/g, replacement: "Intro to Computer SCI -- CSCI-UA 101 " },
{ regex: /CSCI-UA(&nbsp;| )*102(?=(&nbsp;|  |-|<))/g, replacement: "Data Structures -- CSCI-UA 102 " },
{ regex: /CSCI-UA(&nbsp;| )*201(?=(&nbsp;|  |-|<))/g, replacement: "Computer Systems Org -- CSCI-UA 201 " },
{ regex: /CSCI-UA(&nbsp;| )*202(?=(&nbsp;|  |-|<))/g, replacement: "Operating Systems -- CSCI-UA 202 " },
{ regex: /CSCI-UA(&nbsp;| )*310(?=(&nbsp;|  |-|<))/g, replacement: "Basic Algorithms -- CSCI-UA 310 " },
{ regex: /CSCI-UA(&nbsp;| )*380(?=(&nbsp;|  |-|<))/g, replacement: "Topics of General Interest: -- CSCI-UA 380 " },
{ regex: /CSCI-UA(&nbsp;| )*472(?=(&nbsp;|  |-|<))/g, replacement: "Artificial Intelligence -- CSCI-UA 472 " },
{ regex: /CSCI-UA(&nbsp;| )*480(?=(&nbsp;|  |-|<))/g, replacement: "Special Topics: -- CSCI-UA 480 " },
{ regex: /CSCI-UA(&nbsp;| )*490(?=(&nbsp;|  |-|<))/g, replacement: "Spec Tpcs in Prog Lang: -- CSCI-UA 490 " },
{ regex: /CSCI-UA(&nbsp;| )*520(?=(&nbsp;|  |-|<))/g, replacement: "Undergraduate Research -- CSCI-UA 520 " },
{ regex: /CSCI-UA(&nbsp;| )*897(?=(&nbsp;|  |-|<))/g, replacement: "Internship in Computer Science -- CSCI-UA 897 " },
{ regex: /CSCI-UA(&nbsp;| )*997(?=(&nbsp;|  |-|<))/g, replacement: "Independent Study -- CSCI-UA 997 " },
{ regex: /CSCI-UA(&nbsp;| )*330(?=(&nbsp;|  |-|<))/g, replacement: "Introduction to Computer Simulation -- CSCI-UA 330 " },
{ regex: /CSCI-UA(&nbsp;| )*421(?=(&nbsp;|  |-|<))/g, replacement: "Numerical Computing -- CSCI-UA 421 " },
{ regex: /CSCI-UA(&nbsp;| )*453(?=(&nbsp;|  |-|<))/g, replacement: "Theory of Computation -- CSCI-UA 453 " },
{ regex: /CSCI-UA(&nbsp;| )*473(?=(&nbsp;|  |-|<))/g, replacement: "Introduction to Machine Learning -- CSCI-UA 473 " },
{ regex: /CSCI-UA(&nbsp;| )*521(?=(&nbsp;|  |-|<))/g, replacement: "Undergraduate Research -- CSCI-UA 521 " },
{ regex: /CSCI-UA(&nbsp;| )*898(?=(&nbsp;|  |-|<))/g, replacement: "Internship in Computer Science -- CSCI-UA 898 " },
{ regex: /CSCI-UA(&nbsp;| )*998(?=(&nbsp;|  |-|<))/g, replacement: "Independent Study -- CSCI-UA 998 " },
{ regex: /MATH-UA(&nbsp;| )*9(?=(&nbsp;|  |-|<))/g, replacement: "Algebra and Calculus -- MATH-UA 9 " },
{ regex: /MATH-UA(&nbsp;| )*120(?=(&nbsp;|  |-|<))/g, replacement: "Discrete Mathematics -- MATH-UA 120 " },
{ regex: /MATH-UA(&nbsp;| )*121(?=(&nbsp;|  |-|<))/g, replacement: "Calculus I -- MATH-UA 121 " },
{ regex: /MATH-UA(&nbsp;| )*122(?=(&nbsp;|  |-|<))/g, replacement: "Calculus II -- MATH-UA 122 " },
{ regex: /MATH-UA(&nbsp;| )*123(?=(&nbsp;|  |-|<))/g, replacement: "Calculus III -- MATH-UA 123 " },
{ regex: /MATH-UA(&nbsp;| )*129(?=(&nbsp;|  |-|<))/g, replacement: "Honors Calculus III -- MATH-UA 129 " },
{ regex: /MATH-UA(&nbsp;| )*140(?=(&nbsp;|  |-|<))/g, replacement: "Linear Algebra -- MATH-UA 140 " },
{ regex: /MATH-UA(&nbsp;| )*144(?=(&nbsp;|  |-|<))/g, replacement: "Introduction to Computer Simulation -- MATH-UA 144 " },
{ regex: /MATH-UA(&nbsp;| )*148(?=(&nbsp;|  |-|<))/g, replacement: "Honors Linear Algebra -- MATH-UA 148 " },
{ regex: /MATH-UA(&nbsp;| )*211(?=(&nbsp;|  |-|<))/g, replacement: "Mathematics for Economics I -- MATH-UA 211 " },
{ regex: /MATH-UA(&nbsp;| )*212(?=(&nbsp;|  |-|<))/g, replacement: "Mathematics for Economics II -- MATH-UA 212 " },
{ regex: /MATH-UA(&nbsp;| )*213(?=(&nbsp;|  |-|<))/g, replacement: "Mathematics for Economics III -- MATH-UA 213 " },
{ regex: /MATH-UA(&nbsp;| )*224(?=(&nbsp;|  |-|<))/g, replacement: "Vector Analysis -- MATH-UA 224 " },
{ regex: /MATH-UA(&nbsp;| )*228(?=(&nbsp;|  |-|<))/g, replacement: "Fundamental Dynamics of Earth's Atmosphere and Climate -- MATH-UA 228 " },
{ regex: /MATH-UA(&nbsp;| )*230(?=(&nbsp;|  |-|<))/g, replacement: "Introduction to Fluid Dynamics -- MATH-UA 230 " },
{ regex: /MATH-UA(&nbsp;| )*233(?=(&nbsp;|  |-|<))/g, replacement: "Theory of Probability -- MATH-UA 233 " },
{ regex: /MATH-UA(&nbsp;| )*234(?=(&nbsp;|  |-|<))/g, replacement: "Mathematical Statistics -- MATH-UA 234 " },
{ regex: /MATH-UA(&nbsp;| )*235(?=(&nbsp;|  |-|<))/g, replacement: "Probability & Statistics -- MATH-UA 235 " },
{ regex: /MATH-UA(&nbsp;| )*240(?=(&nbsp;|  |-|<))/g, replacement: "Combinatorics -- MATH-UA 240 " },
{ regex: /MATH-UA(&nbsp;| )*250(?=(&nbsp;|  |-|<))/g, replacement: "Mathematics of Finance -- MATH-UA 250 " },
{ regex: /MATH-UA(&nbsp;| )*251(?=(&nbsp;|  |-|<))/g, replacement: "Intro to Math Modeling -- MATH-UA 251 " },
{ regex: /MATH-UA(&nbsp;| )*252(?=(&nbsp;|  |-|<))/g, replacement: "Numerical Analysis -- MATH-UA 252 " },
{ regex: /MATH-UA(&nbsp;| )*256(?=(&nbsp;|  |-|<))/g, replacement: "Computers in Medicine & Biology -- MATH-UA 256 " },
{ regex: /MATH-UA(&nbsp;| )*262(?=(&nbsp;|  |-|<))/g, replacement: "Ordinary Diff Equations -- MATH-UA 262 " },
{ regex: /MATH-UA(&nbsp;| )*263(?=(&nbsp;|  |-|<))/g, replacement: "Partial Diff Equations -- MATH-UA 263 " },
{ regex: /MATH-UA(&nbsp;| )*264(?=(&nbsp;|  |-|<))/g, replacement: "Chaos & Dynamical Systems -- MATH-UA 264 " },
{ regex: /MATH-UA(&nbsp;| )*282(?=(&nbsp;|  |-|<))/g, replacement: "Functions of a Complex Variable -- MATH-UA 282 " },
{ regex: /MATH-UA(&nbsp;| )*325(?=(&nbsp;|  |-|<))/g, replacement: "Analysis -- MATH-UA 325 " },
{ regex: /MATH-UA(&nbsp;| )*329(?=(&nbsp;|  |-|<))/g, replacement: "Honors Analysis II -- MATH-UA 329 " },
{ regex: /MATH-UA(&nbsp;| )*343(?=(&nbsp;|  |-|<))/g, replacement: "Algebra -- MATH-UA 343 " },
{ regex: /MATH-UA(&nbsp;| )*349(?=(&nbsp;|  |-|<))/g, replacement: "Honors Algebra II -- MATH-UA 349 " },
{ regex: /MATH-UA(&nbsp;| )*375(?=(&nbsp;|  |-|<))/g, replacement: "Topology -- MATH-UA 375 " },
{ regex: /MATH-UA(&nbsp;| )*377(?=(&nbsp;|  |-|<))/g, replacement: "Differential Geometry -- MATH-UA 377 " },
{ regex: /MATH-UA(&nbsp;| )*394(?=(&nbsp;|  |-|<))/g, replacement: "Senior Honors II -- MATH-UA 394 " },
{ regex: /MATH-UA(&nbsp;| )*998(?=(&nbsp;|  |-|<))/g, replacement: "Independent Study -- MATH-UA 998 " },
{ regex: /FREN-UA(&nbsp;| )*1(?=(&nbsp;|  |-|<))/g, replacement: "Elemen French Level I -- FREN-UA 1 " },
{ regex: /FREN-UA(&nbsp;| )*2(?=(&nbsp;|  |-|<))/g, replacement: "Elem French Level II -- FREN-UA 2 " },
{ regex: /FREN-UA(&nbsp;| )*10(?=(&nbsp;|  |-|<))/g, replacement: "Intens Elementary French -- FREN-UA 10 " },
{ regex: /FREN-UA(&nbsp;| )*11(?=(&nbsp;|  |-|<))/g, replacement: "Intermediate French I -- FREN-UA 11 " },
{ regex: /FREN-UA(&nbsp;| )*12(?=(&nbsp;|  |-|<))/g, replacement: "Intermediate French II -- FREN-UA 12 " },
{ regex: /FREN-UA(&nbsp;| )*20(?=(&nbsp;|  |-|<))/g, replacement: "Intens Intermed French -- FREN-UA 20 " },
{ regex: /FREN-UA(&nbsp;| )*27(?=(&nbsp;|  |-|<))/g, replacement: "Living in French in North America: An Immersion Program in New England and Quebec -- FREN-UA 27 " },
{ regex: /FREN-UA(&nbsp;| )*30(?=(&nbsp;|  |-|<))/g, replacement: "French Grammar and Composition. -- FREN-UA 30 " },
{ regex: /FREN-UA(&nbsp;| )*101(?=(&nbsp;|  |-|<))/g, replacement: "Spoken Contemp French I -- FREN-UA 101 " },
{ regex: /FREN-UA(&nbsp;| )*102(?=(&nbsp;|  |-|<))/g, replacement: "Advanced Conversation -- FREN-UA 102 " },
{ regex: /FREN-UA(&nbsp;| )*103(?=(&nbsp;|  |-|<))/g, replacement: "French Phonetics -- FREN-UA 103 " },
{ regex: /FREN-UA(&nbsp;| )*105(?=(&nbsp;|  |-|<))/g, replacement: "Written Contemporary French -- FREN-UA 105 " },
{ regex: /FREN-UA(&nbsp;| )*107(?=(&nbsp;|  |-|<))/g, replacement: "French Translation -- FREN-UA 107 " },
{ regex: /FREN-UA(&nbsp;| )*108(?=(&nbsp;|  |-|<))/g, replacement: "French: Advanced Techniques of Translation -- FREN-UA 108 " },
{ regex: /FREN-UA(&nbsp;| )*110(?=(&nbsp;|  |-|<))/g, replacement: "Business French -- FREN-UA 110 " },
{ regex: /FREN-UA(&nbsp;| )*111(?=(&nbsp;|  |-|<))/g, replacement: "Creative Writing in French -- FREN-UA 111 " },
{ regex: /FREN-UA(&nbsp;| )*121(?=(&nbsp;|  |-|<))/g, replacement: "Rdngs in French Lit II: 1800-Present -- FREN-UA 121 " },
{ regex: /FREN-UA(&nbsp;| )*145(?=(&nbsp;|  |-|<))/g, replacement: "French: Approaches to Francophone Literature -- FREN-UA 145 " },
{ regex: /FREN-UA(&nbsp;| )*150(?=(&nbsp;|  |-|<))/g, replacement: "French: Versailles -- FREN-UA 150 " },
{ regex: /FREN-UA(&nbsp;| )*771(?=(&nbsp;|  |-|<))/g, replacement: "The French Canon: Proust -- FREN-UA 771 " },
{ regex: /FREN-UA(&nbsp;| )*774(?=(&nbsp;|  |-|<))/g, replacement: "The French Canon: Beckett -- FREN-UA 774 " },
{ regex: /FREN-UA(&nbsp;| )*829(?=(&nbsp;|  |-|<))/g, replacement: "Theatre in The French Tradition -- FREN-UA 829 " },
{ regex: /FREN-UA(&nbsp;| )*868(?=(&nbsp;|  |-|<))/g, replacement: "Topics in French Lit -- FREN-UA 868 " },
{ regex: /FREN-UA(&nbsp;| )*904(?=(&nbsp;|  |-|<))/g, replacement: "French News, with Coffee -- FREN-UA 904 " },
{ regex: /FREN-UA(&nbsp;| )*905(?=(&nbsp;|  |-|<))/g, replacement: "Machines à écrire -- FREN-UA 905 " },
{ regex: /FREN-UA(&nbsp;| )*968(?=(&nbsp;|  |-|<))/g, replacement: "Topics: -- FREN-UA 968 " },
{ regex: /FREN-UA(&nbsp;| )*981(?=(&nbsp;|  |-|<))/g, replacement: "Internship in French -- FREN-UA 981 " },
{ regex: /FREN-UA(&nbsp;| )*992(?=(&nbsp;|  |-|<))/g, replacement: "Senior Seminar -- FREN-UA 992 " },
{ regex: /FREN-UA(&nbsp;| )*995(?=(&nbsp;|  |-|<))/g, replacement: "Honors Thesis -- FREN-UA 995 " },
{ regex: /FREN-UA(&nbsp;| )*998(?=(&nbsp;|  |-|<))/g, replacement: "Independent Study -- FREN-UA 998 " },
{ regex: /AHSEM-UA(&nbsp;| )*235(?=(&nbsp;|  |-|<))/g, replacement: "History and the Novel -- AHSEM-UA 235 " },
{ regex: /AHSEM-UA(&nbsp;| )*247(?=(&nbsp;|  |-|<))/g, replacement: "Assessing Epidemiological Literature Public Health: What AELs you? -- AHSEM-UA 247 " },
{ regex: /AHSEM-UA(&nbsp;| )*257(?=(&nbsp;|  |-|<))/g, replacement: "Religious Skepticism from Ancient Greece to Medieval Islam -- AHSEM-UA 257 " },
{ regex: /AHSEM-UA(&nbsp;| )*258(?=(&nbsp;|  |-|<))/g, replacement: "The Crisis of Europe -- AHSEM-UA 258 " },
{ regex: /AHSEM-UA(&nbsp;| )*259(?=(&nbsp;|  |-|<))/g, replacement: "Metapatterns and Big History -- AHSEM-UA 259 " },
  {
    regex: /Bldg:/g,
    replacement: "Building: "
  },
  {
	regex: /Mkng/g,
	replacement: "Making"
  },
  {
	regex: /Decisn/g,
	replacement: "Decision"
  },
  {
	regex: /Prob,Stats/,
	replacement: "Probability, Statistics"
  },
  {
	regex: /Tue,Thu/,
	replacement: "Tuesday, Thursday"
  },
  {
	regex: /Expressive Cult:/,
	replacement: "Expressive Culture:"
  },
  {
	regex: /Nbr/,
	replacement: "Number"
  },
  {
    regex: /CIWW/g,
    replacement:
      '<a href="https://goo.gl/maps/eTwn5c2fky62">Warren Weaver Hall</a>'
  },
  {
    regex: /SILV/g,
    replacement:
      '<a href="https://goo.gl/maps/oRCqugARiqr"> Silver Building </a>'
  },
  {
    regex: /Room:/g,
    replacement: "Room: "
  },
  {
    regex: /Loc:/g,
    replacement: "Location: "
  },
  {
    regex: /<span>Mo<\/span>/g,
    replacement: "<span> Monday </span>"
  },
  {
    regex: /MoWe/g,
    replacement: "Monday, Wednesday"
  },
  {
    regex: /TuTh/g,
    replacement: "Tuesday, Thursday"
  },
  {
    regex: /MATH-UA(&nbsp;)349/g,
    replacement: "Honors Algebra II"
  },
  { regex: /108B/g, name: "108 Broadway" },
  { regex: /10AP/g, name: "10 Astor Place" },
  { regex: /10WP/g, name: "10 Washington Place" },
  { regex: /110F/g, name: "110 Fifth Avenue" },
  { regex: /110W/g, name: "110 West 3rd Street Residence" },
  { regex: /113U/g, name: "113 University Place" },
  { regex: /11ST/g, name: "41 East 11th Street, 7th Floor" },
  { regex: /12WV/g, name: "12 Waverly Place" },
  { regex: /130M/g, name: "130 MacDougal Street" },
  { regex: /133M/g, name: "130 MacDougal Street" },
  { regex: /137M/g, name: "130 MacDougal Street" },
  { regex: /14AWM/g, name: "14A Washington Mews" },
  { regex: /142M/g, name: "142 Mulberry Street" },
  { regex: /145F/g, name: "145 Fourth Avenue" },
  { regex: /14UP/g, name: "14 University Place" },
  { regex: /14WA/g, name: "14 Wall Street, Tandon School of Engineering" },
  {
    regex: /15MTC/g,
    name: "15 MetroTech Center, Tandon School of Engineering"
  },
  { regex: /15ST/g, name: "345 East 15th Street" },
  { regex: /1633/g, name: "1633 Broadway" },
  { regex: /194M/g, name: "194 Mercer Street" },
  { regex: /199L/g, name: "199 Lafayette Street" },
  { regex: /19UP/g, name: "19 University Place" },
  { regex: /19W4/g, name: "19 West 4th Street" },
  { regex: /19WS/g, name: "19 Washington Square North" },
  { regex: /1E78/g, name: "The Institute of Fine Arts, 1 East 78th Street" },
  { regex: /1WP/g, name: "1 Washington Place" },
  { regex: /1WSN/g, name: "1 Washington Square North" },
  { regex: /20CS/g, name: "20 Cooper Square" },
  { regex: /214M/g, name: "214 Mercer Street" },
  { regex: /230S/g, name: "230 Sullivan Street Residence" },
  { regex: /239T/g, name: "239 Thompson Street" },
  { regex: /240G/g, name: "240 Greene Street" },
  { regex: /240M/g, name: "240 Mercer Street" },
  { regex: /245S/g, name: "245 Sullivan Street" },
  { regex: /246G/g, name: "246 Greene Street" },
  { regex: /25W4/g, name: "25 West 4th Street" },
  { regex: /25WV/g, name: "25 Waverly Place" },
  { regex: /269M/g, name: "269 Mercer Street" },
  { regex: /285M/g, name: "285 Mercer Street" },
  { regex: /295L/g, name: "295 Lafayette Street" },
  { regex: /29WW/g, name: "29 Washington Square East" },
  { regex: /2AVE/g, name: "111 Second Avenue" },
  { regex: /2BWY/g, name: "2 Broadway, Tandon School of Engineering" },
  { regex: /2MTC/g, name: "2 MetroTech Center" },
  { regex: /2ST/g, name: "2nd Street Residence Hall" },
  { regex: /2UP/g, name: "2 University Place" },
  { regex: /2WSN/g, name: "2 Washington Square North" },
  { regex: /3-5W/g, name: "3-5 Washington Place" },
  { regex: /333A/g, name: "33 Third Avenue" },
  { regex: /342E/g, name: "342 East 26th Street, Room 200A" },
  { regex: /345E/g, name: "345 East 24th Street" },
  { regex: /380S/g, name: "380 Second Avenue, 4th Floor" },
  { regex: /383L/g, name: "383 Lafayette Street" },
  { regex: /3AVN/g, name: "Third Avenue North Dormitory" },
  { regex: /3WSN/g, name: "3 Washington Square North" },
  { regex: /411L/g, name: "411 Lafayette Street" },
  { regex: /412W/g, name: "412 West 42nd Street, Playwright Theatre" },
  { regex: /420W/g, name: "420 West 42nd Street" },
  {
    regex: /423E/g,
    name: "Veterans Administration Hospital, 423 East 23rd Street"
  },
  { regex: /440L/g, name: "440 Lafayette Street" },
  { regex: /44CP/g, name: "44 Central Park West" },
  { regex: /48CS/g, name: "48 Cooper Square" },
  { regex: /4E14/g, name: "4 E. 14th St" },
  { regex: /4WP/g, name: "4 Washington Place" },
  { regex: /4WSN/g, name: "4 Washington Square North" },
  { regex: /50WS/g, name: "50 Washington Square South" },
  { regex: /51WS/g, name: "51 Washington Square South" },
  { regex: /53WS/g, name: "53 Washington Square South" },
  { regex: /55BS/g, name: "55 Broad Street, Tandon School of Engineering" },
  { regex: /55BW/g, name: "55 Broadway, Tandon School of Engineering" },
  { regex: /5WP/g, name: "5 Washington Place" },
  { regex: /5WSN/g, name: "5 Washington Square North" },
  { regex: /60FA/g, name: "60 Fifth Avenue" },
  { regex: /622B/g, name: "622 Broadway" },
  { regex: /665B/g, name: "665 Broadway" },
  { regex: /686B/g, name: "686 Broadway" },
  { regex: /6WP/g, name: "6 Washington Place" },
  { regex: /715B/g, name: "715 Broadway" },
  { regex: /719B/g, name: "719 Broadway" },
  { regex: /721B/g, name: "721 Broadway" },
  { regex: /725B/g, name: "725 Broadway" },
  { regex: /726B/g, name: "726 Broadway" },
  { regex: /730B/g, name: "730 Broadway" },
  { regex: /75VA/g, name: "75 Varick Street (At Canal Street)" },
  { regex: /770B/g, name: "770 Broadway" },
  { regex: /7E12/g, name: "7 East 12th Street, Fairchild Building" },
  { regex: /7ST/g, name: "7th Street Residence Hall" },
  { regex: /80WS/g, name: "80 Washington Square East Gallery" },
  { regex: /838B/g, name: "838 Broadway" },
  { regex: /85W3/g, name: "85 West Third Street" },
  { regex: /890B/g, name: "890 Broadway " }
];
const replace = () => {
  let body = document.body.innerHTML;
  replacements.map(r => {
    body = body.replace(r.regex, r.replacement);
  });

  document.body.innerHTML = body;
};

setTimeout(replace, 3000);
document.addEventListener("click", replace);