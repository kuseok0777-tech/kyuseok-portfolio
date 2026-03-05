export const profile = {
  name: "Kyu S. Choi",
  title: "Project Engineer",
  taglines: [
    "Project Engineer @ GMODIS Inc.",
    "B.A.Sc. Mechanical Engineering, Queen's University",
    "International project experience",
  ],
  summary:
    "Project engineer with hands-on experience at very first multi-billion-dollar battery manufacturing project in Canada.            ",
  email: "kuseok0777@gmail.com",
  location: "Windsor, Ontario, Canada",
  linkedin: "https://www.linkedin.com/in/kyuchoiatgmodis",  
  github: "#",
  /** 프로필 사진: public 폴더에 넣은 파일명 (예: avatar.jpg) */
  avatar: "/avatar.png",
};

export const skills = [
  { name: "Navisworks", level: 85, category: "Software" },
  { name: "AutoCAD", level: 80, category: "Software" },
  { name: "ANSYS", level: 75, category: "Software" },
  { name: "SolidWorks", level: 78, category: "Software" },
  { name: "Python", level: 65, category: "Software" },
  { name: "Microsoft Excel", level: 90, category: "Software" },
  { name: "P&ID Reading", level: 88, category: "Engineering" },
  { name: "Piping Codes & Standards", level: 80, category: "Engineering" },
  { name: "3D Model Coordination", level: 85, category: "Engineering" },
  { name: "FEA (Finite Element Analysis)", level: 75, category: "Engineering" },
  { name: "Constructability Review", level: 82, category: "Engineering" },
  { name: "Field Instructions", level: 80, category: "Engineering" },
];

export const experiences = [
  {
    role: "Project Engineer",
    company: "GMODIS Inc.",
    logo: "/gmodis-logo.png",
    location: "Windsor, ON",
    period: "July 2025 – Present",
    description:
      "Supporting piping constructability and installation at NextStar Energy — one of Canada's largest EV battery manufacturing facilities.",
    highlights: [
      "Coordinated P&ID, isometric drawings, and 3D models across international project teams to align design intent with site conditions",
      "Identified design clashes using Navisworks, contributing to field adjustments and minimizing installation rework",
      "Reviewed piping codes and line classifications to determine hydrostatic vs. pneumatic testing requirements",
      "Prepared and issued Field Instructions to implement design revisions, applying engineering judgement to constructability issues",
      "Contributed to punch list development enabling ~70% Category C/D acceptance, reducing schedule and manpower impact",
      "Supported supplier negotiations, achieving ~4% material cost savings (~$13,000) and improved payment terms",
    ],
    tags: ["Navisworks", "P&ID", "Piping Codes", "3D Coordination", "Field Instructions"],
  },
];

export const militaryExperience = {
  role: "Squad Leader / Logistics Officer",
  org: "Republic of Korea Army",
  period: "Sep 2021 – Mar 2023",
  highlights: [
    "Managed supply and logistics for 200+ weapons and equipment with 100% accountability and zero loss incidents",
    "Led a squad through 6+ field operations, supervising 8 personnel under high-pressure conditions",
  ],
};

export const projects = [
  {
    title: "Dog Clutch Design (Reverse Gearbox)",
    subtitle: "Capstone Engineering Project",
    description:
      "Engineered a reverse gearbox for off-road racing, balancing durability, cost, and performance through bottom-up FEA validation.",
    tags: ["ANSYS FEA", "SolidWorks", "BOM Analysis", "Structural Analysis"],
    highlights: [
      "Designed and modeled a dog clutch mechanism tailored for off-road racing requirements",
      "Validated structural compliance under peak stress and thermal loading using bottom-up FEA in ANSYS",
      "Conducted BOM analysis aligned with client specifications and manufacturability targets",
    ],
    metric: { label: "Design Iterations", value: "5+" },
  },
  {
    title: "Suspension Wishbone Optimization",
    subtitle: "Mechanical Design Project",
    description:
      "Optimized a vehicle suspension wishbone arm through iterative FEA, achieving significant mass reduction without compromising structural integrity.",
    tags: ["ANSYS", "Python Automation", "FEA", "Geometry Optimization"],
    highlights: [
      "Developed five design iterations optimizing geometry under realistic boundary conditions",
      "Automated nodal coordinate input for layered FEA models using Python, reducing meshing time by 40%+",
      "Achieved 38% mass reduction while maintaining stress and deflection within allowable limits",
    ],
    metric: { label: "Mass Reduction", value: "38%" },
  },
];

export const pengSteps = [
  {
    step: 1,
    title: "Accumulate EIT Hours",
    description:
      "Document supervised engineering work at GMODIS to build the 48-month experience log required by PEO Ontario.",
    status: "active",
  },
  {
    step: 2,
    title: "Deepen Code & Standards Literacy",
    description:
      "Regularly study ASME, CSA, and Ontario-specific standards relevant to piping and pressure systems.",
    status: "active",
  },
  {
    step: 3,
    title: "Seek Engineering Mentorship",
    description:
      "Build a relationship with a licensed P.Eng for guidance, feedback, and professional reference support.",
    status: "upcoming",
  },
  {
    step: 4,
    title: "PPE Exam Preparation",
    description:
      "Study technical and professional practice exam content and register with PEO Ontario.",
    status: "upcoming",
  },
  {
    step: 5,
    title: "Submit P.Eng Application",
    description:
      "Complete the PEO application package with all experience documentation and references.",
    status: "future",
  },
];
