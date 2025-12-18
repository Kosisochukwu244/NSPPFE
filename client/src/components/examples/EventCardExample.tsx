import EventCard from "../EventCard";
import type { Event } from "@/data/events";

const mockEvent: Event = {
  id: "sample-event",
  title: "Nigerian Fusion Summer School",
  year: "2025",
  description: "Intensive one-week program covering fusion reactor fundamentals, plasma confinement, and magnetic field theory with hands-on laboratory sessions.",
  images: ["/api/images/workshop", "/api/images/lab"],
  tags: ["School", "Training", "Fusion"]
};

export default function EventCardExample() {
  return (
    <div className="max-w-sm">
      <EventCard
        event={mockEvent} 
        index={0}
        onViewGallery={(event) => console.log("View gallery for:", event.title)}
      />
    </div>
  );
}
