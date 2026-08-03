import { TeamMember } from "@/types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-v-s-sooraj",
    name: "Dr. V. S. Sooraj",
    role: "Nodal Officer & Executive Director",
    department: "Department of Mechanical Engineering",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    bio: "Pioneering technology transfer and student incubation programs at Holy Grace Academy of Engineering. Over 15 years of research experience in precision micro-manufacturing and academic entrepreneurship.",
    linkedIn: "https://linkedin.com",
    email: "sooraj.iedc@holygrace.ac.in",
    contributions: [
      "Secured ₹2.4M state incubation grant funding",
      "Mentored 6 patented student hardware inventions",
      "Established Holy Grace Prototyping FabLab"
    ],
    metrics: [
      { label: "PATENTS MENTORED", value: "06" },
      { label: "GRANTS APPROVED", value: "₹2.4M" },
      { label: "YEARS EXP", value: "15+" }
    ]
  },
  {
    id: "steve-k-john",
    name: "Steve K. John",
    role: "Chief Student Officer (CEO)",
    department: "Computer Science & Engineering",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "Full-stack system designer specializing in distributed systems and embedded Rust. Oversees campus startup operations, hackathon execution, and external investor relations.",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://stevejohn.dev",
    email: "ceo.iedc@holygrace.ac.in",
    contributions: [
      "Co-founder of HyperCompile engine",
      "Organized BUILDATHON 2025 with 200+ participants",
      "Led 4 student teams to National Hackathon finals"
    ],
    metrics: [
      { label: "SHIPPED PROJECTS", value: "08" },
      { label: "COMMUNITY SIZE", value: "120+" },
      { label: "HACKATHONS WON", value: "04" }
    ]
  },
  {
    id: "gopika-nair",
    name: "Gopika Nair",
    role: "Chief Technology Officer (CTO)",
    department: "Electronics & Communication Engg.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    bio: "Hardware prototyping fanatic with expertise in FPGA design, high-frequency RF telemetry, and KiCad PCB fabrication. Directs hardware lab resources and tech workshops.",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
    email: "cto.iedc@holygrace.ac.in",
    contributions: [
      "Lead architect for AeroGrid drone PCB hardware",
      "Authored 3 technical workshops on signal integrity",
      "Manager of Holy Grace SMD Assembly Bench"
    ],
    metrics: [
      { label: "PCBS DESIGNED", value: "14" },
      { label: "WORKSHOPS LED", value: "05" },
      { label: "CHIPS FABBED", value: "03" }
    ]
  },
  {
    id: "aravind-p-kurup",
    name: "Aravind P. Kurup",
    role: "Chief Operations Officer (COO)",
    department: "Robotics & Automation Engineering",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "Operations strategist bridging the gap between student hardware concepts and commercial manufacturer supply chains in South India.",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
    email: "coo.iedc@holygrace.ac.in",
    contributions: [
      "Streamlined component acquisition pipeline for 14 projects",
      "Established industry partnership with KSUM Innovation Hub",
      "Managed ₹500k event operational budget"
    ],
    metrics: [
      { label: "SUPPLIERS ONBOARDED", value: "12" },
      { label: "SPONSORSHIPS", value: "₹600K" },
      { label: "ACTIVE LEADS", value: "18" }
    ]
  },
  {
    id: "rachel-mathew",
    name: "Rachel Mathew",
    role: "Chief Financial Officer (CFO)",
    department: "Civil & Environmental Engineering",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    bio: "Financial planner and grant manager ensuring zero-friction disbursement of seed funding to verified student incubation teams.",
    linkedIn: "https://linkedin.com",
    email: "cfo.iedc@holygrace.ac.in",
    contributions: [
      "Managed micro-grant allocations for 14 active projects",
      "Created transparent auditing dashboard for campus funding",
      "Facilitated 2 corporate sponsorship agreements"
    ],
    metrics: [
      { label: "GRANTS DISBURSED", value: "₹2.4M" },
      { label: "AUDIT RATING", value: "100%" },
      { label: "TEAMS FUNDED", value: "14" }
    ]
  },
  {
    id: "aditya-krishna",
    name: "Aditya Krishna",
    role: "Creative Director & UX Architect",
    department: "Computer Science & Engineering",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    bio: "Obsessed with high-density monospaced typography, tactile UI physics, and dark mode digital aesthetics. Maintained the IEDC Design System Bible.",
    linkedIn: "https://linkedin.com",
    github: "https://github.com",
    portfolio: "https://adityakrishna.design",
    email: "creative.iedc@holygrace.ac.in",
    contributions: [
      "Created IEDC Master Design System & Creative Bible",
      "Designed the 2026 digital identity and web engine",
      "Winner of 2 regional UI/UX design challenges"
    ],
    metrics: [
      { label: "TOKENS DEFINED", value: "40+" },
      { label: "AWWARDS NOMINEES", value: "01" },
      { label: "UI COMPONENTS", value: "28" }
    ]
  }
];
