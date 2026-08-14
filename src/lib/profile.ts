export const profile = {
  name: "Phumzile Nokwazi Moeketsi",
  role: "Computer Systems Engineer | Full-Stack & Embedded Developer",
  email: "lwarrhmoeketsi@gmail.com",
  phone: "0799557151",
  location: "Pretoria, South Africa",
  languages: ["English", "IsiZulu", "Setswana"],
};

export type Competency = {
  title: string;
  blurb: string;
  items: string[];
};

export const competencies: Competency[] = [
  {
    title: "Systems & Low-Level",
    blurb: "Close-to-the-metal engineering and hardware diagnostics.",
    items: ["C++", "Digital Process Control", "Hardware Troubleshooting"],
  },
  {
    title: "Databases & Backend",
    blurb: "Relational modelling and query performance.",
    items: ["SQL (Relational Design)", "Query Optimization", "Database Management Systems"],
  },
  {
    title: "Networking & Infrastructure",
    blurb: "Enterprise routing, switching and protocol analysis.",
    items: ["Cisco Routing & Switching", "Network Fundamentals", "TCP/IP", "OSI Model"],
  },
  {
    title: "Web & Modern Tech",
    blurb: "Typed, responsive interfaces over real data.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
];

export type Project = {
  title: string;
  category: string;
  tech: string[];
  description: string;
  architecture: string[];
};

export const projects: Project[] = [
  {
    title: "Relational Database Management & SQL Optimizer",
    category: "Systems / Database Engineering",
    tech: ["SQL", "C++", "Relational Architecture"],
    description:
      "Designed and implemented a structured relational database schema for high-throughput query execution, optimizing data retrieval speeds and data integrity.",
    architecture: [
      "Normalised 3NF schema with enforced referential integrity constraints",
      "Composite and covering indexes tuned against real query plans",
      "C++ access layer with prepared statements and connection reuse",
      "Benchmark harness comparing naive vs. optimized retrieval paths",
    ],
  },
  {
    title: "Network Traffic & Routing Simulator",
    category: "Cisco & Infrastructure",
    tech: ["Cisco Packet Tracer", "C++", "TCP/IP"],
    description:
      "Simulated enterprise routing and switching environments with sub-netting, VLAN configuration, and packet inspection protocols.",
    architecture: [
      "Multi-site topology with VLAN segmentation and inter-VLAN routing",
      "VLSM sub-netting plan with static and dynamic routing tables",
      "Packet inspection walkthrough across the OSI layers",
      "C++ utility for subnet calculation and route validation",
    ],
  },
  {
    title: "Full-Stack Industrial IoT Dashboard",
    category: "Systems & Web Integration",
    tech: ["Next.js", "TypeScript", "SQL", "Tailwind CSS", "Chart.js"],
    description:
      "A real-time monitoring dashboard designed for digital process control, visualization of hardware metrics, and fault alerts.",
    architecture: [
      "Sensor ingest endpoint writing time-series rows to SQL",
      "Streaming metric charts with threshold-based fault alerting",
      "Typed data contracts shared between API and UI",
      "Responsive control-room layout, mobile field view included",
    ],
  },
];

export const education = {
  qualification: "Diploma in Computer Systems Engineering",
  institution: "Tshwane University of Technology",
  graduation: "Expected Graduation: 2027",
  status:
    "Completed all theoretical modules. Seeking a 12-month Work-Integrated Learning placement to complete the qualification.",
  modules: [
    "Databases (SQL)",
    "Network Systems",
    "Digital Process Control",
    "Probability and Statistics",
  ],
};