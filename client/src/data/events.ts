// todo: remove mock functionality - replace with real event data
export interface Event {
  id: string;
  title: string;
  year: string;
  description: string;
  images: string[];
  tags: string[];
}

import workshopImg from "@assets/generated_images/nsfepp_workshop_training_session.png";
import facilityImg from "@assets/generated_images/fusion_research_facility_interior.png";
import conferenceImg from "@assets/generated_images/scientific_conference_presentation_hall.png";
import labImg from "@assets/generated_images/plasma_physics_laboratory_training.png";

export const events: Event[] = [
  {
    id: "fusion-summer-school-2024",
    title: "Nigerian Fusion Summer School",
    year: "2024",
    description: "Intensive two-week program covering fusion reactor fundamentals, plasma confinement, and magnetic field theory with hands-on laboratory sessions.",
    images: [workshopImg, labImg],
    tags: ["School", "Training", "Fusion"]
  },
  {
    id: "plasma-diagnostics-workshop-2024",
    title: "Plasma Diagnostics Workshop",
    year: "2024",
    description: "Advanced workshop on plasma measurement techniques including spectroscopy, interferometry, and probe diagnostics for fusion research.",
    images: [labImg, facilityImg],
    tags: ["Workshop", "Research"]
  },
  {
    id: "international-fusion-conference-2023",
    title: "West African Fusion Energy Conference",
    year: "2023",
    description: "International gathering of fusion scientists and researchers from across Africa and global institutions discussing collaborative research initiatives.",
    images: [conferenceImg, workshopImg],
    tags: ["Conference", "International"]
  },
  {
    id: "reactor-engineering-school-2023",
    title: "Tokamak Engineering School",
    year: "2023",
    description: "Specialized training program on tokamak reactor design, superconducting magnets, and plasma heating systems for aspiring fusion engineers.",
    images: [facilityImg, labImg],
    tags: ["School", "Engineering"]
  },
  {
    id: "plasma-physics-fundamentals-2022",
    title: "Plasma Physics Fundamentals",
    year: "2022",
    description: "Foundation course covering plasma behavior, magnetohydrodynamics, and particle transport phenomena for graduate students and researchers.",
    images: [workshopImg, conferenceImg],
    tags: ["Training", "Research"]
  },
  {
    id: "capacity-building-summit-2022",
    title: "African Capacity Building Summit",
    year: "2022",
    description: "Strategic summit focused on developing fusion research infrastructure and training programs across African institutions.",
    images: [conferenceImg, facilityImg],
    tags: ["Conference", "Collaboration"]
  }
];
