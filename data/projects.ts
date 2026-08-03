import { Project } from "@/types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "aero-grid",
    title: "AeroGrid Autonomous Drone Inspection",
    tagline: "Autonomous LiDAR-equipped micro-drones for thermal power grid diagnostics.",
    description: "Real-time structural integrity telemetry and thermal fault detection built for high-voltage transmission lines.",
    fullDescription: "AeroGrid combines edge-computed computer vision with sub-centimeter LiDAR mapping to inspect electrical grid infrastructure autonomously. Developed by mechanical and electronics engineering researchers at Holy Grace IEDC, the unit operates in heavy electromagnetic environments with zero GPS reliance.",
    category: "Hardware",
    status: "Live",
    year: "2026",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1200&auto=format&fit=crop",
    techStack: ["LiDAR", "Embedded Rust", "ROS2", "OpenCV", "STM32"],
    githubUrl: "https://github.com/iedc-holygrace/aerogrid",
    demoUrl: "https://aerogrid.iedc-holygrace.edu",
    fundingRaised: "₹500,000",
    teamLeads: ["Nikhil K. Nair", "Devika S."],
    highlights: [
      "Sub-10ms sensor telemetry processing",
      "Field tested across 40km of high-voltage transmission corridors",
      "Kerala State Innovation Grant recipient"
    ]
  },
  {
    id: "neural-pulse",
    title: "NeuralPulse EEG BCI Architecture",
    tagline: "Ultra-low latency non-invasive neural interface for prosthetics control.",
    description: "Compact 8-channel EEG telemetry system mapping motor cortex signals directly to robotic joint micro-actuators.",
    fullDescription: "NeuralPulse processes microvolt motor intent signals using on-device spiking neural networks. Designed to affordably restore upper-limb movement, the system achieves 94% classification precision with sub-30ms hardware latency.",
    category: "DeepTech",
    status: "Incubating",
    year: "2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    techStack: ["PyTorch Mobile", "C++20", "DSP", "BLE 5.3", "Custom PCB"],
    githubUrl: "https://github.com/iedc-holygrace/neural-pulse",
    fundingRaised: "₹350,000",
    teamLeads: ["Arjun V. Menon", "Ananya Paul"],
    highlights: [
      "8-channel analog front-end with 120dB CMRR",
      "On-chip inference running under 400mW total system power",
      "Finalist at National BioEngineering Summit"
    ]
  },
  {
    id: "sentinel-mesh",
    title: "SentinelMesh Industrial IoT Node",
    tagline: "Zero-configuration LoRaWAN mesh network for industrial vibration telemetry.",
    description: "Self-healing acoustic micro-nodes deployed across heavy rotating machinery for predictive failure prevention.",
    fullDescription: "SentinelMesh nodes utilize high-bandwidth piezoelectric sensors and edge FFT analyzers to detect early ball-bearing degradation weeks before physical failure occurs.",
    category: "IoT",
    status: "Patented",
    year: "2025",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    techStack: ["LoRaWAN", "ESP32-S3", "FreeRTOS", "TimescaleDB", "Grafana"],
    githubUrl: "https://github.com/iedc-holygrace/sentinel-mesh",
    demoUrl: "https://sentinelmesh.io",
    fundingRaised: "₹750,000",
    teamLeads: ["Rohan Joseph", "Sneha E."],
    highlights: [
      "Indian Patent Granted: #IN2025-410982",
      "Deployed in 3 manufacturing plants in Thrissur industrial corridor",
      "5-year battery operating lifespan on solar energy harvesting"
    ]
  },
  {
    id: "hyper-compile",
    title: "HyperCompile Distributed Build Engine",
    tagline: "Deterministic distributed C++/Rust build orchestrator over local developer clusters.",
    description: "Accelerates firmware compilation times by 12x through peer-to-peer object caching and AST delta distribution.",
    fullDescription: "HyperCompile leverages idle workstation CPUs across engineering labs to distribute compilation DAGs safely. Features cryptographically verified binary outputs and zero central server dependencies.",
    category: "AI & Software",
    status: "Live",
    year: "2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Rust", "gRPC", "WebAssembly", "Docker", "eBPF"],
    githubUrl: "https://github.com/iedc-holygrace/hyper-compile",
    demoUrl: "https://hypercompile.dev",
    fundingRaised: "₹400,000",
    teamLeads: ["Gokul Das", "Kevin Thomas"],
    highlights: [
      "1,400+ GitHub Stars",
      "Used daily by 200+ Holy Grace computer science students",
      "Reduces 20-minute firmware build times down to 90 seconds"
    ]
  },
  {
    id: "hydra-sense",
    title: "HydraSense Subsurface Water Monitor",
    tagline: "Multispectral optical sensors for agricultural aquifer salinity and pollutant profiling.",
    description: "Submersible telemetry probes monitoring ground water purity levels across rural farming sectors.",
    fullDescription: "HydraSense provides real-time nitrate, turbidity, and heavy metal concentrations via cellular IoT uplink to local agricultural cooperatives.",
    category: "IoT",
    status: "Prototype",
    year: "2026",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200&auto=format&fit=crop",
    techStack: ["Spectroscopy", "NB-IoT", "MicroPython", "Solar Hardware"],
    githubUrl: "https://github.com/iedc-holygrace/hydrasense",
    fundingRaised: "₹200,000",
    teamLeads: ["Meera R.", "Siddharth Mohan"],
    highlights: [
      "Sub-ppm ion concentration measurement accuracy",
      "Hermetically sealed IP68 underwater chassis"
    ]
  }
];
