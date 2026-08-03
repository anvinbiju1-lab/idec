import { EventItem } from "@/types";

export const EVENTS_DATA: EventItem[] = [
  {
    id: "hack-thrissur-2026",
    title: "BUILDATHON 2026: Hardware & Embedded AI Summit",
    category: "Hackathon",
    status: "Upcoming",
    date: "2026-09-15T09:00:00Z",
    displayDate: "SEPTEMBER 15-16, 2026",
    time: "09:00 AM IST",
    venue: "Main Innovation Lab, Holy Grace Campus, Mala",
    description: "36-hour intense hardware and micro-kernel prototyping hackathon. Build real-world physical solutions with live mentorship from industry architects.",
    longDescription: "BUILDATHON 2026 brings together 150+ engineers, designers, and system developers across Kerala. Participants receive direct access to high-speed oscilloscopes, CNC mills, 3D printing farms, and NVIDIA Jetson edge compute kits. Top 3 projects win direct seed funding from Holy Grace IEDC Venture Fund.",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    registrationUrl: "#register",
    seatsTotal: 120,
    seatsAvailable: 24,
    speaker: {
      name: "Dr. Vikram Seth",
      role: "Lead Embedded Architect",
      company: "Robotics Research Council"
    }
  },
  {
    id: "pitch-day-q3",
    title: "IEDC Seed Pitch Day Q3",
    category: "Pitch Day",
    status: "Upcoming",
    date: "2026-08-28T14:00:00Z",
    displayDate: "AUGUST 28, 2026",
    time: "02:00 PM IST",
    venue: "Auditorium Hall B & Virtual Telecast",
    description: "Student founders present prototype traction to angel investors, Kerala Startup Mission executives, and Holy Grace Alumni Founders.",
    longDescription: "Ten shortlisted student startups will pitch live for up to ₹500,000 in non-dilutive prototype development grants and workspace incubation rights.",
    poster: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop",
    registrationUrl: "#pitch-register",
    seatsTotal: 80,
    seatsAvailable: 15,
    speaker: {
      name: "Lakshmi Nair",
      role: "Venture Partner",
      company: "Apex Tech Ventures"
    }
  },
  {
    id: "pcb-design-workshop",
    title: "High-Speed PCB Design & Signal Integrity",
    category: "Workshop",
    status: "Past",
    date: "2026-07-10T10:00:00Z",
    displayDate: "JULY 10, 2026",
    time: "10:00 AM IST",
    venue: "Electronics Simulation Lab",
    description: "Hands-on KiCad masterclass covering multi-layer impedance matching, differential pair routing, and EMC compliance testing.",
    longDescription: "A intensive 2-day workshop focused on practical hardware routing techniques, thermal relief design, and preparation for automated SMD pick-and-place fabrication.",
    poster: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200&auto=format&fit=crop",
    seatsTotal: 50,
    seatsAvailable: 0,
    speaker: {
      name: "Rahul Krishnan",
      role: "Hardware Design Lead",
      company: "IEDC Holy Grace"
    }
  },
  {
    id: "ai-edge-summit",
    title: "Edge AI & TensorRT Micro-Kernels",
    category: "Summit",
    status: "Past",
    date: "2026-06-22T09:30:00Z",
    displayDate: "JUNE 22, 2026",
    time: "09:30 AM IST",
    venue: "Seminar Complex 1",
    description: "Technical lectures on quantizing LLMs and computer vision models for microcontrollers with 256KB RAM constraints.",
    longDescription: "Explored quantization-aware training, Int8 tensor operations, and custom micro-VM runtimes for resource-constrained robotics applications.",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    seatsTotal: 100,
    seatsAvailable: 0,
    speaker: {
      name: "Dr. Mathew Joseph",
      role: "AI Fellow",
      company: "Indus AI Research"
    }
  }
];
