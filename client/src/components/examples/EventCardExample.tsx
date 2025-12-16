import EventCard from "../EventCard";
import { events } from "@/data/events";

export default function EventCardExample() {
  return (
    <div className="max-w-sm">
      <EventCard
        event={events[0]}
        index={0}
        onViewGallery={(event) => console.log("View gallery for:", event.title)}
      />
    </div>
  );
}
