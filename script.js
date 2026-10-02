const menuBtn = document.getElementById("menuBtn"),
  navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));
document
  .querySelectorAll(".nav-links a")
  .forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("active")),
  );

document.querySelectorAll("[data-carousel-target]").forEach((button) => {
  button.addEventListener("click", () => {
    const track = document.getElementById(button.dataset.carouselTarget);
    const card = track?.querySelector(":scope > article");
    if (!track || !card) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const direction = Number(button.dataset.carouselDirection) || 1;
    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  });
});

const courseCatalog = {
  "Data Science & AI": {
    duration: "8 Months",
    mode: "Online",
    officialUrl: "https://sabakharbor.com/data-science-program",
    summary:
      "Master Python, analytics, machine learning, AI applications and project execution with real-world business case work.",
    modules: [
      "Python for Data Science",
      "Statistics & Analytics",
      "Machine Learning Fundamentals",
      "AI & Generative AI Projects",
      "Portfolio & Career Capstone",
    ],
  },
  "Investment Banking": {
    duration: "8 Months",
    mode: "Online",
    officialUrl: "https://sabakharbor.com/post-graduation-certification-investment-banking",
    summary:
      "Develop strong financial modelling, valuation and market analysis skills used in investment banking and finance functions.",
    modules: [
      "Financial Markets",
      "Valuation & Modelling",
      "M&A & Deal Analysis",
      "Banking Operations",
      "Career Readiness Workshops",
    ],
  },
  "Cyber Security": {
    duration: "6–9 Months",
    mode: "Online",
    officialUrl: "https://sabakharbor.com/cybersecurity-foundation-certificate-program",
    summary:
      "Learn cybersecurity foundations, risk management and practical operational skills for modern digital security roles.",
    modules: [
      "Security Fundamentals",
      "Network & Endpoint Security",
      "SOC Operations",
      "Threat Monitoring",
      "Hands-on Labs",
    ],
  },
  "Cloud & DevOps": {
    duration: "6–12 Months",
    mode: "Online",
    officialUrl: "https://sabakharbor.com/advanced-certification-cloud-computing-devops",
    summary:
      "Build expertise in cloud infrastructure, automation, deployment workflows and modern DevOps practices.",
    modules: [
      "Cloud Foundations",
      "Linux & Scripting",
      "CI/CD Pipelines",
      "Containerisation & Kubernetes",
      "Deployment & Monitoring",
    ],
  },
  "Full Stack Development": {
    duration: "6–9 Months",
    mode: "Online",
    summary:
      "Create end-to-end web applications using modern frontend, backend and database technologies with project-based learning.",
    modules: [
      "HTML, CSS & JavaScript",
      "Frontend Frameworks",
      "Backend Development",
      "Databases & APIs",
      "Full Project Deployment",
    ],
  },
  "Business Analytics": {
    duration: "10 Months",
    mode: "Online",
    officialUrl: "https://sabakharbor.com/post-graduate-certification-business-analysis",
    summary:
      "Turn business data into strategic insights by learning analytics tools, storytelling and decision-making frameworks.",
    modules: [
      "Excel & Business Modelling",
      "SQL & Data Analysis",
      "Dashboarding & BI Tools",
      "Business Intelligence",
      "Insight Presentation",
    ],
  },
};

const officialPrograms = [
  {
    title: "Post Graduate Certification Program in Data Science and AI",
    category: "Data & AI",
    duration: "8 Months",
    mode: "Online",
    icon: "📊",
    officialUrl: "https://sabakharbor.com/data-science-program",
    summary: "Build a foundation in data analysis, Python and applied artificial intelligence through a structured project-based learning path.",
    modules: [
      "Python syntax, notebooks and reusable functions",
      "Tabular data structures and data preparation",
      "Missing values, duplicates and data quality checks",
      "Descriptive statistics and probability",
      "Exploratory analysis and visual storytelling",
      "SQL queries for retrieving and combining data",
      "Feature selection and model-ready datasets",
      "Supervised learning concepts and baseline models",
      "Model validation, metrics and error analysis",
      "AI use cases, limitations and responsible practice",
      "Communicating findings to technical and business audiences",
      "Integrated analysis project and portfolio presentation",
    ],
  },
  {
    title: "Post Graduate Certification Program in Data Science and Machine Learning",
    category: "Data & AI",
    duration: "12 Months",
    mode: "Online",
    icon: "🤖",
    officialUrl: "https://sabakharbor.com/post-graduate-certification-data-science-machine-learning",
    summary: "Develop end-to-end data science skills, from preparing datasets to training, evaluating and presenting machine-learning models.",
    modules: [
      "Python programming patterns for analytical work",
      "Dataset loading, validation and transformation",
      "Exploratory analysis and visualization",
      "Probability, sampling and statistical inference",
      "Regression methods and diagnostic checks",
      "Classification methods and decision thresholds",
      "Clustering and dimensionality reduction concepts",
      "Feature engineering and selection",
      "Cross-validation and model-comparison strategy",
      "Performance metrics, overfitting and model interpretation",
      "Reproducible experiments and model documentation",
      "End-to-end machine-learning capstone",
    ],
  },
  {
    title: "Post Graduate Certification Program in Data Science and Analytics with GenAI",
    category: "Data & AI",
    duration: "10 Months",
    mode: "Online",
    icon: "✨",
    officialUrl: "https://sabakharbor.com/post-graduate-certification-data-science-analytics-genai",
    summary: "Combine analytics foundations with responsible generative-AI workflows for research, insight development and business problem solving.",
    modules: [
      "Python and SQL foundations for analytics",
      "Data cleaning, joins and aggregation",
      "Descriptive statistics and analytical reasoning",
      "Exploratory analysis and visualization",
      "Business metrics and question framing",
      "Machine-learning concepts for analytics teams",
      "Generative-AI capabilities and limitations",
      "Prompt design, context and structured outputs",
      "Grounding generated answers in supplied information",
      "Output review, evaluation and safety checks",
      "Data privacy and responsible AI workflows",
      "Integrated analytics and GenAI portfolio project",
    ],
  },
  {
    title: "Post Graduation Program in Banking and Finance",
    category: "Banking & Finance",
    duration: "8 Months",
    mode: "Online",
    icon: "🏦",
    officialUrl: "https://sabakharbor.com/post-graduation-program-banking-finance",
    summary: "Explore financial services, banking operations and core finance concepts through practical business scenarios.",
    modules: [
      "Financial-services ecosystem and banking roles",
      "Retail, commercial and corporate banking overview",
      "Deposits, lending and payment products",
      "Interest, time value of money and basic calculations",
      "Financial statements and key accounting terms",
      "Customer onboarding and service lifecycle",
      "Payment and transaction-processing concepts",
      "Credit, operational and market-risk fundamentals",
      "Compliance, conduct and control awareness",
      "Reconciliation, records and data quality",
      "Service scenarios and operational problem solving",
      "Banking and finance case-study presentation",
    ],
  },
  {
    title: "Post Graduation Certification Program in Investment Banking",
    category: "Banking & Finance",
    duration: "8 Months",
    mode: "Online",
    icon: "💹",
    officialUrl: "https://sabakharbor.com/post-graduation-certification-investment-banking",
    summary: "Learn the foundations of investment banking, financial analysis and transaction support with applied finance exercises.",
    modules: [
      "Investment-banking functions and market structure",
      "Capital markets, equity and debt instruments",
      "Accounting principles and financial statements",
      "Historical financial analysis and ratio interpretation",
      "Forecast assumptions and integrated model structure",
      "Company valuation concepts and comparable analysis",
      "Discounted cash-flow model concepts",
      "Transaction stages, diligence and deal documentation",
      "Mergers and acquisitions process overview",
      "Market research and company profile preparation",
      "Spreadsheet checks and model presentation",
      "Applied valuation and transaction case",
    ],
  },
  {
    title: "Investment Banking Operations Professional Program",
    category: "Banking & Finance",
    duration: "8 Months",
    mode: "Online",
    icon: "📈",
    officialUrl: "https://sabakharbor.com/investment-banking-operations-professional-program",
    summary: "Understand the operational workflows, documentation and controls that support investment-banking services.",
    modules: [
      "Investment-banking business and support functions",
      "Trade lifecycle from capture through settlement",
      "Equity, fixed-income and derivative product basics",
      "Trade confirmation and matching concepts",
      "Clearing, settlement and exception handling",
      "Corporate-action and reference-data workflows",
      "Reconciliation and break investigation",
      "Operational risk and control checkpoints",
      "Client records, documentation and data accuracy",
      "Compliance awareness and escalation procedures",
      "Service-level tracking and operational reporting",
      "Trade-operations case simulation",
    ],
  },
  {
    title: "Cybersecurity Foundation Certificate Program",
    category: "Cybersecurity",
    duration: "6 Months",
    mode: "Online",
    icon: "🛡️",
    officialUrl: "https://sabakharbor.com/cybersecurity-foundation-certificate-program",
    summary: "Build core security knowledge across networks, endpoints, threats and practical defensive habits.",
    modules: [
      "Security principles, terminology and asset value",
      "Operating-system and endpoint foundations",
      "Network addressing, protocols and common services",
      "Authentication, authorization and account hygiene",
      "Common attack patterns and social engineering",
      "Malware, phishing and safe handling practices",
      "Vulnerability, patching and configuration concepts",
      "Encryption, certificates and secure communication",
      "Logging, monitoring and evidence basics",
      "Backup, recovery and business continuity concepts",
      "Security policies, ethics and responsible practice",
      "Foundational defensive-security lab",
    ],
  },
  {
    title: "Specialization Program in Cybersecurity Operations",
    category: "Cybersecurity",
    duration: "8 Months",
    mode: "Online",
    icon: "🔐",
    officialUrl: "https://sabakharbor.com/specialization-program-cybersecurity-operations",
    summary: "Practice monitoring and response workflows used by security operations teams to investigate and manage alerts.",
    modules: [
      "Security operations centre roles and workflow",
      "Log sources, event fields and normalization concepts",
      "Alert prioritization and initial triage",
      "SIEM searches, filters and investigation pivots",
      "Endpoint and network detection fundamentals",
      "Threat-intelligence context and indicator review",
      "Phishing and suspicious-activity investigations",
      "Incident severity, escalation and case notes",
      "Incident containment and response lifecycle",
      "Evidence handling and investigation timelines",
      "Detection tuning and false-positive review",
      "SOC investigation and incident-report exercise",
    ],
  },
  {
    title: "Advanced Executive Program in Cyber Defense with Internship",
    category: "Cybersecurity",
    duration: "9 Months",
    mode: "Online",
    icon: "🔎",
    officialUrl: "https://sabakharbor.com/advanced-executive-program-cyber-defense-internship",
    summary: "Advance defensive security skills through incident analysis, threat detection and a career-oriented practical experience.",
    modules: [
      "Defensive architecture, assets and trust boundaries",
      "Threat modelling and attack-surface review",
      "Security telemetry and detection engineering concepts",
      "Endpoint, identity and network investigation",
      "Threat hunting questions and hypothesis building",
      "Incident command, containment and recovery planning",
      "Vulnerability assessment and remediation tracking",
      "Secure configuration and exposure reduction",
      "Cloud-security and access-control foundations",
      "Executive reporting and incident communications",
      "Professional practice, ethics and evidence handling",
      "Supervised internship activity or applied defense capstone",
    ],
  },
  {
    title: "Post Graduate Certification Program in Business Analytics",
    category: "Business Analytics",
    duration: "10 Months",
    mode: "Online",
    icon: "📊",
    officialUrl: "https://sabakharbor.com/post-graduate-certification-business-analysis",
    summary: "Translate business questions into analysis, clear visualizations and evidence-informed recommendations.",
    modules: [
      "Business objectives, stakeholders and problem framing",
      "Requirements gathering and analytical question design",
      "Spreadsheet formulas, lookup and data-cleaning techniques",
      "Relational data concepts and SQL query structure",
      "Filtering, joins, grouping and aggregation in SQL",
      "Descriptive statistics and trend analysis",
      "KPI definition and metric-quality checks",
      "Dashboard layout, chart selection and interaction",
      "Data interpretation and insight validation",
      "Root-cause analysis and recommendation development",
      "Presentation skills and stakeholder communication",
      "End-to-end business analytics case study",
    ],
  },
  {
    title: "DevOps Certification Training",
    category: "Cloud & DevOps",
    duration: "6 Months",
    mode: "Online",
    icon: "⚙️",
    officialUrl: "https://sabakharbor.com/devops-certification-training",
    summary: "Learn the tools and team practices that help automate software build, test and release workflows.",
    modules: [
      "Linux filesystem, processes and permissions",
      "Shell commands and scripting fundamentals",
      "Git repositories, branches and collaboration",
      "Build automation and dependency management",
      "Continuous-integration pipeline stages",
      "Automated test execution and result review",
      "Environment variables and secret-handling basics",
      "Container images and runtime concepts",
      "Application deployment and configuration",
      "Logs, service health and basic monitoring",
      "Release coordination and rollback concepts",
      "Build-to-deploy pipeline exercise",
    ],
  },
  {
    title: "Advanced Certification in Cloud Computing and DevOps",
    category: "Cloud & DevOps",
    duration: "12 Months",
    mode: "Online",
    icon: "☁️",
    officialUrl: "https://sabakharbor.com/advanced-certification-cloud-computing-devops",
    summary: "Develop practical cloud architecture and DevOps knowledge for deploying and operating modern applications.",
    modules: [
      "Cloud service models, regions and shared responsibility",
      "Identity, access and account security foundations",
      "Virtual networks, subnets, routing and firewalls",
      "Compute, storage and managed database concepts",
      "Linux administration and practical scripting",
      "Containers, registries and orchestration foundations",
      "Infrastructure-as-code concepts and change review",
      "Continuous integration and delivery pipeline design",
      "Configuration, secrets and environment management",
      "Availability, scaling, backup and recovery planning",
      "Monitoring, logging and cloud cost awareness",
      "Secure cloud deployment capstone",
    ],
  },
  {
    title: "SAP FICO",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "💼",
    officialUrl: "https://sabakharbor.com/sap-fico-certification-training-course",
    summary: "Explore how finance and controlling processes are represented in SAP through guided business scenarios.",
    modules: [
      "SAP navigation and finance-process landscape",
      "Company-code and finance organizational concepts",
      "General-ledger accounts and journal postings",
      "Document types, posting periods and validations",
      "Accounts-payable vendor and invoice workflow",
      "Accounts-receivable customer and receipt workflow",
      "Bank accounting and reconciliation concepts",
      "Asset-accounting lifecycle overview",
      "Cost centres, internal orders and allocations",
      "Profitability and controlling fundamentals",
      "Period-end close and financial reporting concepts",
      "Integrated record-to-report business scenario",
    ],
  },
  {
    title: "SAP SD",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "📦",
    officialUrl: "https://sabakharbor.com/sap-sd-certification-training-course",
    summary: "Study the sales and distribution lifecycle, from customer orders through delivery and billing.",
    modules: [
      "Sales and distribution organizational structure",
      "Customer, material and sales master-data concepts",
      "Inquiry, quotation and sales-order lifecycle",
      "Order-to-cash process and document flow",
      "Pricing conditions and basic determination logic",
      "Availability checks and delivery scheduling",
      "Delivery creation, picking and goods issue",
      "Billing documents and invoice flow",
      "Returns, credit and dispute-process overview",
      "Integration points with inventory and finance",
      "Sales reporting and order-status review",
      "End-to-end sales-process case exercise",
    ],
  },
  {
    title: "SAP MM",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🧾",
    officialUrl: "https://sabakharbor.com/sap-mm-certification-training-course",
    summary: "Learn procurement and inventory concepts that support material planning and purchasing workflows.",
    modules: [
      "Procurement organization and purchasing roles",
      "Material and supplier master-data concepts",
      "Purchase requisitions and sourcing overview",
      "Requests for quotation and vendor comparison",
      "Purchase orders, confirmations and changes",
      "Goods receipt and stock updates",
      "Invoice verification and payment integration",
      "Inventory types, transfers and stock counts",
      "Valuation and account-determination concepts",
      "Procurement reporting and document tracking",
      "Procure-to-pay controls and exception handling",
      "End-to-end procurement scenario",
    ],
  },
  {
    title: "SAP PP",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🏭",
    officialUrl: "https://sabakharbor.com/sap-pp-certification-training-course",
    summary: "Understand production planning concepts, from demand and materials planning to shop-floor execution.",
    modules: [
      "Production planning organizational foundations",
      "Material requirements planning concepts",
      "Bills of material and production versions",
      "Work centres, routings and operation sequences",
      "Demand management and planned requirements",
      "Capacity evaluation and scheduling concepts",
      "Planning runs and exception messages",
      "Planned orders and production-order conversion",
      "Order release, confirmations and goods movements",
      "Production costing and variance overview",
      "Manufacturing reporting and completion checks",
      "Integrated production-planning scenario",
    ],
  },
  {
    title: "SAP HCM",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "👥",
    officialUrl: "https://sabakharbor.com/sap-hcm-certification-training-course",
    summary: "Explore the employee and organizational processes managed in human-capital systems.",
    modules: [
      "Enterprise and personnel structure foundations",
      "Organizational units, positions and relationships",
      "Employee master records and personnel actions",
      "Hiring, transfers and employee lifecycle events",
      "Infotypes and effective-dated HR data concepts",
      "Time recording, work schedules and absences",
      "Leave and attendance process overview",
      "Payroll inputs, calculations and outputs overview",
      "Benefits and compensation data concepts",
      "HR reporting, privacy and access awareness",
      "Integration with finance and organizational data",
      "Employee lifecycle process exercise",
    ],
  },
  {
    title: "SAP ABAP",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "💻",
    officialUrl: "https://sabakharbor.com/sap-abap-certification-training-course",
    summary: "Get introduced to ABAP development concepts for creating and extending SAP applications.",
    modules: [
      "ABAP development environment and syntax",
      "Variables, elementary types and data declarations",
      "Conditions, loops and control-flow patterns",
      "Procedures, methods and modular program design",
      "Structures, internal tables and table operations",
      "Open SQL concepts and database access",
      "Selection screens and user input validation",
      "Classical reports and output formatting",
      "Exceptions, messages and error handling",
      "Debugging, breakpoints and runtime inspection",
      "Code quality, performance and authorization awareness",
      "Small ABAP reporting application",
    ],
  },
  {
    title: "SAP HANA",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🗄️",
    officialUrl: "https://sabakharbor.com/sap-hana-certification-training-course",
    summary: "Learn in-memory data-platform concepts and how analytical models support enterprise reporting.",
    modules: [
      "SAP HANA architecture and in-memory concepts",
      "Schemas, tables, data types and SQL foundations",
      "Relational modelling and analytical data design",
      "Calculation-view concepts and reusable models",
      "Joins, measures, attributes and aggregations",
      "SQL queries and analytical filtering",
      "Data loading and provisioning overview",
      "Data quality, lineage and model validation",
      "Performance concepts for analytical queries",
      "Security roles and data-access principles",
      "Connecting models to reporting tools",
      "Analytical model and reporting exercise",
    ],
  },
  {
    title: "SAP GRC",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🛡️",
    officialUrl: "https://sabakharbor.com/sap-security-certification-training-course",
    summary: "Understand governance, risk and compliance concepts for access controls and enterprise processes.",
    modules: [
      "Governance, risk and compliance landscape",
      "Business roles and access-governance concepts",
      "Segregation-of-duties risks and examples",
      "Risk rules, functions and access analysis concepts",
      "Access-request and approval workflows",
      "User provisioning and de-provisioning overview",
      "Emergency access and privileged-use controls",
      "Risk review, mitigation and remediation tracking",
      "Control monitoring and audit evidence",
      "Compliance reporting and ownership concepts",
      "GRC issue escalation and follow-up",
      "Access-risk control scenario",
    ],
  },
  {
    title: "SAP Security",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🔒",
    officialUrl: "https://sabakharbor.com/sap-grc-certification-training-course",
    summary: "Explore user administration, authorization concepts and secure access practices in SAP environments.",
    modules: [
      "SAP user types and account lifecycle",
      "Authorization objects, fields and checks",
      "Single, composite and derived role concepts",
      "Role design, menu structure and maintenance",
      "Authorization defaults and profile generation",
      "User assignment and access provisioning",
      "Troubleshooting authorization failures",
      "Critical access, least privilege and SoD awareness",
      "Periodic access review and audit evidence",
      "Change transport and role testing concepts",
      "Security monitoring and configuration controls",
      "Role-design and access-review exercise",
    ],
  },
  {
    title: "SAP EWM",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🚚",
    officialUrl: "https://sabakharbor.com/sap-ewm-certification-training-course",
    summary: "Study warehouse-management processes for receiving, storing, picking and dispatching inventory.",
    modules: [
      "Warehouse organizational structure and storage types",
      "Products, packaging and warehouse master data",
      "Inbound delivery and receiving processes",
      "Putaway strategies and warehouse tasks",
      "Storage-bin management and stock visibility",
      "Replenishment planning and execution",
      "Physical inventory and stock adjustments",
      "Wave, picking and packing concepts",
      "Outbound staging, loading and dispatch",
      "Handling units and warehouse monitoring",
      "Exception processing and operational metrics",
      "End-to-end warehouse-flow simulation",
    ],
  },
  {
    title: "SAP Ariba",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🤝",
    officialUrl: "https://sabakharbor.com/sap-ariba-certification-training-course",
    summary: "Review digital procurement and supplier-collaboration workflows used across the purchasing lifecycle.",
    modules: [
      "Digital procurement landscape and Ariba concepts",
      "Supplier registration, qualification and records",
      "Sourcing events and bid-comparison workflow",
      "Contracts, approvals and lifecycle tracking",
      "Catalog content and guided buying concepts",
      "Purchase requisitions and purchase-order flow",
      "Supplier collaboration and order confirmations",
      "Invoice submission, matching and exceptions",
      "Spend visibility and procurement reporting",
      "Approval rules, roles and compliance controls",
      "Integration with ERP purchasing processes",
      "Procurement case exercise",
    ],
  },
  {
    title: "SAP SuccessFactors",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🌱",
    officialUrl: "https://sabakharbor.com/sap-success-factors-certification-training-course",
    summary: "Explore cloud-based HR workflows that support employee records, talent processes and workforce development.",
    modules: [
      "SuccessFactors suite and cloud HR concepts",
      "Employee Central records and organizational data",
      "Employee lifecycle events and data changes",
      "Recruiting requisitions and candidate workflow",
      "Onboarding tasks and employee experience",
      "Goal planning and performance-review cycles",
      "Learning assignments and completion tracking",
      "Talent profiles and succession concepts",
      "Compensation-process overview",
      "Role-based access, privacy and HR reporting",
      "Workflow configuration and process testing concepts",
      "Integrated HR workflow exercise",
    ],
  },
  {
    title: "SAP PM",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🔧",
    officialUrl: "https://sabakharbor.com/sap-pm-certification-training-course",
    summary: "Learn how maintenance planning and work orders support reliable plant and equipment operations.",
    modules: [
      "Plant-maintenance organization and process overview",
      "Functional locations and equipment master data",
      "Maintenance task lists and work-centre concepts",
      "Notifications, symptoms and damage coding",
      "Corrective and breakdown maintenance workflow",
      "Preventive maintenance plans and scheduling",
      "Maintenance-order creation and planning",
      "Materials, services and capacity in work orders",
      "Order release, execution and technical completion",
      "Cost tracking and maintenance history",
      "Reliability reporting and backlog review",
      "End-to-end asset-maintenance scenario",
    ],
  },
  {
    title: "SAP BASIS",
    category: "SAP",
    duration: "6 Months",
    mode: "Online",
    icon: "🖥️",
    officialUrl: "https://sabakharbor.com/sap-basis-certification-training-course",
    summary: "Build an introduction to SAP system administration, monitoring and operational maintenance.",
    modules: [
      "SAP application and system architecture",
      "Instances, clients and landscape concepts",
      "User administration and operational access",
      "Background jobs, spool and workload basics",
      "Transport landscape and change movement",
      "System monitoring and key health indicators",
      "Logs, traces and troubleshooting workflow",
      "Database and application availability concepts",
      "Patch, upgrade and maintenance overview",
      "Backup, recovery and operational continuity",
      "Security hardening and audit awareness",
      "System-operations troubleshooting exercise",
    ],
  },
];

officialPrograms.forEach((program) => {
  courseCatalog[program.title] = program;
});

const allProgramGrid = document.getElementById("allProgramGrid");
const programSelect = document.getElementById("program");
const programCategoryOrder = [
  "Data & AI",
  "Banking & Finance",
  "Cybersecurity",
  "Business Analytics",
  "Cloud & DevOps",
  "SAP",
];

function createProgramCard(program) {
  const card = document.createElement("article");
  card.className = "course-card all-program-card";
  card.dataset.program = program.title;
  card.tabIndex = 0;

  const image = document.createElement("div");
  image.className = "course-image";
  image.setAttribute("aria-hidden", "true");
  image.textContent = program.icon;

  const body = document.createElement("div");
  body.className = "course-body";

  const category = document.createElement("span");
  category.className = "program-category";
  category.textContent = program.category;

  const title = document.createElement("h3");
  title.textContent = program.title;

  const summary = document.createElement("p");
  summary.textContent = program.summary;

  const outline = document.createElement("details");
  outline.className = "program-outline";
  const outlineHeading = document.createElement("summary");
  outlineHeading.textContent = "View full course topics";
  const outlineTopics = document.createElement("ul");
  program.modules.forEach((module) => {
    const topic = document.createElement("li");
    topic.textContent = module;
    outlineTopics.append(topic);
  });
  outline.append(outlineHeading, outlineTopics);

  const meta = document.createElement("div");
  meta.className = "course-meta";
  const duration = document.createElement("span");
  duration.textContent = `⏱ ${program.duration}`;
  const mode = document.createElement("span");
  mode.textContent = program.mode;
  meta.append(duration, mode);

  const actions = document.createElement("div");
  actions.className = "course-actions";
  const brochure = document.createElement("button");
  brochure.className = "brochure-btn";
  brochure.type = "button";
  brochure.textContent = "View Brochure";
  const apply = document.createElement("button");
  apply.className = "apply-btn";
  apply.type = "button";
  apply.textContent = "Apply Now";
  actions.append(brochure, apply);

  body.append(category, title, summary, outline, meta, actions);
  card.append(image, body);
  return card;
}

const programGroups = new Map();
programCategoryOrder.forEach((category) => {
  const programs = officialPrograms.filter((program) => program.category === category);
  if (!programs.length) return;

  const group = document.createElement("details");
  group.className = "program-group";

  const heading = document.createElement("summary");
  heading.className = "program-group-heading";
  const title = document.createElement("h3");
  title.textContent = category;
  const count = document.createElement("span");
  count.textContent = `${programs.length} ${programs.length === 1 ? "program" : "programs"}`;
  heading.append(title, count);

  const grid = document.createElement("div");
  grid.className = "course-grid all-program-grid";
  grid.setAttribute("aria-label", `${category} programs`);
  group.append(heading, grid);
  allProgramGrid.append(group);
  programGroups.set(category, grid);
});

officialPrograms.forEach((program) => {
  const categoryGrid = programGroups.get(program.category);
  if (!categoryGrid) {
    throw new Error(`Missing program category group: ${program.category}`);
  }
  categoryGrid.append(createProgramCard(program));
  const option = document.createElement("option");
  option.value = program.title;
  option.textContent = program.title;
  programSelect.append(option);
});

const brochureModal = document.getElementById("brochureModal");
const brochureBody = document.getElementById("brochureBody");
const brochureTitle = document.getElementById("brochureTitle");
const brochureClose = document.getElementById("brochureClose");
const brochureBrowse = document.getElementById("brochureBrowse");
const brochureDownload = document.getElementById("brochureDownload");
let activeBrochureProgram = null;
const brochureNote =
  "This original, illustrative course outline is not the official complete syllabus. Contact an advisor to confirm exact topics, schedule, eligibility and fees.";

function openBrochure(programName) {
  const course = courseCatalog[programName];
  if (!course) return;

  activeBrochureProgram = course;
  brochureTitle.textContent = programName;
  brochureBody.replaceChildren();

  const summary = document.createElement("p");
  summary.className = "brochure-summary";
  summary.textContent = course.summary;
  brochureBody.append(summary);

  const details = document.createElement("dl");
  details.className = "brochure-details";
  [
    ["Duration", course.duration],
    ["Learning mode", course.mode],
    ...(course.category ? [["Program area", course.category]] : []),
  ].forEach(([label, value]) => {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value;
    item.append(term, description);
    details.append(item);
  });
  brochureBody.append(details);

  const topicsHeading = document.createElement("h4");
  topicsHeading.textContent = "Learning topics";
  brochureBody.append(topicsHeading);

  const topics = document.createElement("ul");
  topics.className = "brochure-topics";
  course.modules.forEach((module) => {
    const topic = document.createElement("li");
    topic.textContent = module;
    topics.append(topic);
  });
  brochureBody.append(topics);

  const note = document.createElement("p");
  note.className = "brochure-note";
  note.textContent = brochureNote;
  brochureBody.append(note);

  brochureModal.classList.add("active");
  brochureModal.setAttribute("aria-hidden", "false");
  brochureClose.focus();
}

function closeBrochure() {
  brochureModal.classList.remove("active");
  brochureModal.setAttribute("aria-hidden", "true");
}

brochureClose.addEventListener("click", closeBrochure);
brochureBrowse.addEventListener("click", () => {
  const selectedProgram = activeBrochureProgram;
  closeBrochure();
  const card = [...allProgramGrid.querySelectorAll(".all-program-card")].find(
    (programCard) => programCard.dataset.program === selectedProgram?.title,
  );
  const group = card?.closest(".program-group");
  if (group instanceof HTMLDetailsElement) group.open = true;
  const outline = card?.querySelector(".program-outline");
  if (outline instanceof HTMLDetailsElement) outline.open = true;
  (card || document.getElementById("all-programs"))?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  card?.focus({ preventScroll: true });
});
brochureDownload.addEventListener("click", () => {
  const course = activeBrochureProgram;
  if (!course) return;

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[character]);
  const metadata = [
    ["Duration", course.duration],
    ["Learning mode", course.mode],
    ...(course.category ? [["Program area", course.category]] : []),
  ]
    .map(([label, value]) => `<dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd>`)
    .join("");
  const topics = course.modules
    .map((topic) => `<li>${escapeHtml(topic)}</li>`)
    .join("");
  const brochure = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(course.title)} — Program Brochure</title>
  <style>
    body{max-width:850px;margin:40px auto;padding:0 24px;color:#173323;font:16px/1.6 Arial,sans-serif}
    h1{color:#14532d;line-height:1.2}h2{margin-top:30px;color:#166534}
    dl{display:flex;flex-wrap:wrap;gap:12px}dl>*{margin:0;padding:10px 14px;background:#f0f7f1;border-radius:8px}
    dt{font-weight:bold}ul{padding-left:22px}li{margin:7px 0}
    .note{margin-top:28px;padding:14px;border-left:4px solid #22c55e;background:#f0f7f1}
    @media print{body{margin:0 auto;padding:0 12mm}a{color:inherit}}
  </style>
</head>
<body>
  <p>Sabak Harbor · Program Brochure</p>
  <h1>${escapeHtml(course.title)}</h1>
  <p>${escapeHtml(course.summary)}</p>
  <dl>${metadata}</dl>
  <h2>Course topics</h2>
  <ul>${topics}</ul>
  <p class="note">${escapeHtml(brochureNote)}</p>
</body>
</html>`;
  const file = new Blob([brochure], { type: "text/html;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(file);
  const link = document.createElement("a");
  const filename = course.title
    .normalize("NFKD")
    .replace(/[^\w -]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
  link.href = downloadUrl;
  link.download = `${filename || "program"}-brochure.html`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
});
brochureModal.addEventListener("click", (event) => {
  if (event.target === brochureModal) closeBrochure();
});

const quickInfoModal = document.getElementById("quickInfoModal");
const quickInfoClose = document.getElementById("quickInfoClose");
const quickInfoTitle = document.getElementById("quickInfoTitle");
const quickInfoIntro = document.getElementById("quickInfoIntro");
const quickInfoDetails = document.getElementById("quickInfoDetails");
const quickInfoNote = document.getElementById("quickInfoNote");
const quickInfoContact = document.getElementById("quickInfoContact");
const quickInfoContent = {
  blog: {
    title: "Learning and career insights",
    intro:
      "Explore practical ideas for building skills, planning a career transition and preparing for work in technology, finance and analytics.",
    items: [
      ["Build skills through projects", "Turn lessons into small, demonstrable projects and explain the decisions behind your work."],
      ["Prepare for your next role", "Keep your resume focused, practice role-specific questions and use feedback to improve."],
      ["Keep learning consistently", "Break a large learning goal into regular study sessions and revisit concepts through practice."],
    ],
    note: "These are original learning notes for this website, not copied articles from the reference site.",
  },
  terms: {
    title: "Terms & Conditions",
    intro:
      "This page provides a brief, original orientation to using this website and its enquiry tools.",
    items: [
      ["Website information", "Program information here is an overview and may change. Confirm current details with the Sabak Harbor team before making a decision."],
      ["Enquiries", "Submitting an enquiry allows the team to respond using the contact details you provide."],
      ["Learning outcomes", "Course completion does not guarantee admission, certification, employment or a particular career result."],
    ],
    note: "This is not the complete official Terms & Conditions and is not legal advice. Contact info@sabakharbor.com for the current official wording.",
  },
  privacy: {
    title: "Privacy information",
    intro:
      "Use the enquiry form only for information you are comfortable sharing so an advisor can respond to your request.",
    items: [
      ["Information you submit", "The form requests your name, email, phone number, program interest and an optional message."],
      ["Use of enquiry details", "Your details are intended to help the team understand and respond to your enquiry."],
      ["Questions or requests", "Contact the team if you have questions about your information or how an enquiry is handled."],
    ],
    note: "This is a plain-language summary for this website, not the full official Privacy Policy. Contact info@sabakharbor.com for the current official policy.",
  },
  refund: {
    title: "Refund information",
    intro:
      "Refund eligibility and timelines can depend on the program and the terms that apply when you enroll.",
    items: [
      ["Before enrolling", "Review the applicable program and payment terms and ask for clarification before making payment."],
      ["Requesting assistance", "Contact the team with your enrollment details and explain the request so they can guide you through the applicable process."],
      ["Official decision", "The current official refund terms govern eligibility, timelines and processing."],
    ],
    note: "This is only an original general summary, not a copied or complete Refund Policy. Contact info@sabakharbor.com for the current official wording.",
  },
  about: {
    title: "About Sabak Harbor",
    intro:
      "Sabak Harbor offers career-focused learning across technology, data and AI, finance, cybersecurity, cloud and SAP subject areas.",
    items: [
      ["Learn", "Explore structured programs and speak with an advisor about the path that fits your goals."],
      ["Practice", "Use projects and guided exercises to apply concepts and develop work-ready skills."],
      ["Grow", "Get support with career preparation as you work toward your next professional step."],
    ],
    note: "Program availability, schedules, fees and support can change. Contact the team for current details.",
  },
};

function openQuickInfo(key, trigger) {
  const content = quickInfoContent[key];
  if (!content) return;

  quickInfoTitle.textContent = content.title;
  quickInfoIntro.textContent = content.intro;
  quickInfoDetails.replaceChildren();
  content.items.forEach(([heading, description]) => {
    const item = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = heading;
    const text = document.createElement("p");
    text.textContent = description;
    item.append(title, text);
    quickInfoDetails.append(item);
  });
  quickInfoNote.textContent = content.note;
  quickInfoModal.dataset.returnFocus = trigger;
  quickInfoModal.classList.add("active");
  quickInfoModal.setAttribute("aria-hidden", "false");
  quickInfoClose.focus();
}

function closeQuickInfo() {
  if (!quickInfoModal.classList.contains("active")) return;
  quickInfoModal.classList.remove("active");
  quickInfoModal.setAttribute("aria-hidden", "true");
  document
    .querySelector(`[data-quick-info="${quickInfoModal.dataset.returnFocus}"]`)
    ?.focus();
}

document.querySelectorAll("[data-quick-info]").forEach((button) => {
  button.addEventListener("click", () => {
    openQuickInfo(button.dataset.quickInfo, button.dataset.quickInfo);
  });
});
quickInfoClose.addEventListener("click", closeQuickInfo);
quickInfoContact.addEventListener("click", closeQuickInfo);
quickInfoModal.addEventListener("click", (event) => {
  if (event.target === quickInfoModal) closeQuickInfo();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && brochureModal.classList.contains("active")) {
    closeBrochure();
  }
  if (event.key === "Escape") closeQuickInfo();
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value,
    program = document.getElementById("program").value;
  alert(`Thank you ${name}! Your enquiry for ${program} has been received.`);
  e.target.reset();
});

const programCards = document.querySelectorAll(".course-card");
programCards.forEach((card) => {
  const programName = card.dataset.program;
  const programSelect = document.getElementById("program");

  card.addEventListener("click", (event) => {
    if (event.target.closest(".brochure-btn")) {
      event.stopPropagation();
      openBrochure(programName);
      return;
    }

    if (event.target.closest(".apply-btn")) {
      event.stopPropagation();
      if (programSelect) {
        programSelect.value = programName;
      }
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (programSelect) {
      programSelect.value = programName;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (programSelect) {
        programSelect.value = programName;
      }
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const brochureApplyButtons = document.querySelectorAll(".brochure-apply");
brochureApplyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeBrochure();
    const selectedProgram = document.getElementById("brochureTitle")?.textContent;
    const programSelect = document.getElementById("program");
    if (programSelect && selectedProgram) {
      programSelect.value = selectedProgram;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  });
});

const chatbotButton = document.getElementById("chatbotButton"),
  chatbot = document.getElementById("chatbot");
const closeChatbot = document.getElementById("closeChatbot"),
  messages = document.getElementById("chatbotMessages");
const input = document.getElementById("chatbotInput"),
  send = document.getElementById("sendMessage");
chatbotButton.addEventListener("click", () =>
  chatbot.classList.toggle("active"),
);
closeChatbot.addEventListener("click", () =>
  chatbot.classList.remove("active"),
);

function addMessage(message, type = "bot") {
  const d = document.createElement("div");
  d.className = type === "user" ? "user-message" : "bot-message";
  d.innerHTML = message;
  messages.appendChild(d);
  messages.scrollTop = messages.scrollHeight;
}
function showTyping() {
  const d = document.createElement("div");
  d.id = "typing";
  d.className = "bot-message";
  d.innerHTML =
    '<div class="typing"><span></span><span></span><span></span></div>';
  messages.appendChild(d);
  messages.scrollTop = messages.scrollHeight;
}
function removeTyping() {
  document.getElementById("typing")?.remove();
}

function quickReply(program) {
  addMessage(program, "user");
  showTyping();
  setTimeout(() => {
    removeTyping();
    const info = {
      "Data Science & AI":
        "Our Data Science & AI program focuses on Python, analytics, machine learning, AI and practical projects.",
      "Investment Banking":
        "Investment Banking covers financial markets, valuation, financial modelling and banking concepts.",
      "Cyber Security":
        "Cyber Security covers security fundamentals, SOC operations and practical security skills.",
      "SAP / ERP":
        "ERP/SAP learning paths can include SAP FICO, SD, MM and related career skills.",
      "Other Programs":
        "We have programs across technology, finance, analytics, cloud and ERP.",
    };
    addMessage(
      `${info[program]}<br><br><button class="btn btn-primary" style="padding:9px 14px;font-size:12px" onclick="showEnquiryForm()">Register Enquiry</button>`,
    );
  }, 650);
}

function showEnquiryForm() {
  addMessage(`<strong>Let's register your enquiry 📝</strong><form class="chat-form" id="chatEnquiryForm">
 <input id="chatName" placeholder="Your Name" required>
 <input id="chatPhone" type="tel" placeholder="Phone Number" required>
 <input id="chatEmail" type="email" placeholder="Email Address" required>
 <select id="chatProgram" required><option value="">Select Program</option><option>Data Science & AI</option><option>Investment Banking</option><option>Cyber Security</option><option>Cloud & DevOps</option><option>Full Stack Development</option><option>Business Analytics</option><option>SAP / ERP</option></select>
 <button type="submit">Submit Enquiry</button></form>`);
  document.getElementById("chatEnquiryForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("chatName").value,
      phone = document.getElementById("chatPhone").value,
      program = document.getElementById("chatProgram").value;
    addMessage("Enquiry submitted successfully! 🎉", "user");
    showTyping();
    setTimeout(() => {
      removeTyping();
      addMessage(
        `Thank you, <strong>${name}</strong>! 🎉<br><br>We received your enquiry for <strong>${program}</strong>.<br><br>A career advisor can contact you on <strong>${phone}</strong>.`,
      );
    }, 700);
    e.target.reset();
  });
}

function sendChatMessage() {
  const m = input.value.trim();
  if (!m) return;
  addMessage(m, "user");
  input.value = "";
  showTyping();
  setTimeout(() => {
    removeTyping();
    const x = m.toLowerCase();
    if (x.includes("fee") || x.includes("price"))
      addMessage(
        `Course fees vary by program. Submit your details and our advisor can share current fees.<br><br><button class="btn btn-primary" style="padding:9px 14px;font-size:12px" onclick="showEnquiryForm()">Check Course Fee</button>`,
      );
    else if (x.includes("placement") || x.includes("job"))
      addMessage(
        `Career support can include resume guidance, profile optimization and interview preparation.<br><br><button class="btn btn-primary" style="padding:9px 14px;font-size:12px" onclick="showEnquiryForm()">Talk to Advisor</button>`,
      );
    else if (x.includes("course") || x.includes("program"))
      addMessage(
        `We offer Data Science & AI, Investment Banking, Cyber Security, Cloud & DevOps, Full Stack Development, Business Analytics and SAP / ERP.<br><br>Which one interests you?`,
      );
    else if (x.includes("hi") || x.includes("hello") || x.includes("hey"))
      addMessage(
        `Hello! 👋 Welcome to Sabak Harbor. Ask me about courses, fees, duration, career support or admissions.`,
      );
    else
      addMessage(
        `I can help with courses, fees, program duration, career support and enquiry registration.<br><br><button class="btn btn-primary" style="padding:9px 14px;font-size:12px" onclick="showEnquiryForm()">Register Enquiry</button>`,
      );
  }, 650);
}
send.addEventListener("click", sendChatMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendChatMessage();
});

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
      }
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(".course-card,.category,.testimonial,.why-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(25px)";
    el.style.transition = "all .6s ease";
    observer.observe(el);
  });


/* Premium motion enhancements */
document.addEventListener("DOMContentLoaded", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Add subtle floating particles to the hero.
  const hero = document.querySelector(".hero");
  if (hero && !reduceMotion.matches) {
    for (let i = 0; i < 18; i++) {
      const particle = document.createElement("span");
      particle.className = "site-particle";
      particle.style.left = `${Math.random() * 96 + 2}%`;
      particle.style.top = `${Math.random() * 92 + 4}%`;
      particle.style.setProperty("--duration", `${5 + Math.random() * 6}s`);
      particle.style.animationDelay = `${Math.random() * -7}s`;
      particle.style.opacity = `${0.2 + Math.random() * 0.5}`;
      hero.appendChild(particle);
    }
  }

  // Smooth reveal for major content blocks.
  const revealItems = document.querySelectorAll(
    ".section-title,.course-card,.category,.testimonial,.why-item,.alumni-card,.alumni-benefit,.contact-form,.contact-item"
  );
  revealItems.forEach((el, index) => {
    el.classList.add("reveal-ready");
    el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach(el => revealObserver.observe(el));

  // Animate visible number counters without changing their displayed targets.
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.trim();
      const match = raw.match(/^([\d,]+)(\+)?$/);
      if (!match) return;
      const target = parseInt(match[1].replace(/,/g, ""), 10);
      const suffix = match[2] || "";
      const duration = 1300;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(target * eased);
        el.textContent = value.toLocaleString("en-IN") + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.7 });

  document.querySelectorAll(".stat h3,.hero-stat strong,.alumni-stat strong")
    .forEach(el => counterObserver.observe(el));

  // Lightweight card tilt on pointer devices for a more realistic interactive feel.
  if (window.matchMedia("(pointer:fine)").matches) {
    document.querySelectorAll(".course-card,.alumni-card,.category").forEach(card => {
      card.addEventListener("pointermove", e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateX(${(-y * 2.5).toFixed(2)}deg) rotateY(${(x * 2.5).toFixed(2)}deg) translateY(-7px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }
});
