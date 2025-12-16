import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar, X } from "lucide-react";
import EventCard from "./EventCard";
import { events, type Event } from "@/data/events";

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [filter, setFilter] = useState<string | null>(null);

  const allTags = Array.from(new Set(events.flatMap((e) => e.tags)));

  const filteredEvents = filter
    ? events.filter((e) => e.tags.includes(filter))
    : events;

  const handleViewGallery = (event: Event) => {
    setSelectedEvent(event);
    setGalleryIndex(0);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const nextGalleryImage = () => {
    if (selectedEvent) {
      setGalleryIndex((prev) => (prev + 1) % selectedEvent.images.length);
    }
  };

  const prevGalleryImage = () => {
    if (selectedEvent) {
      setGalleryIndex(
        (prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length
      );
    }
  };

  return (
    <section id="events" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Past Events & Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our workshops, schools, conferences, and training programs that have 
            shaped the future of fusion research in Africa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <Button
            variant={filter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(null)}
            data-testid="filter-all"
          >
            All Events
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(tag)}
              data-testid={`filter-${tag.toLowerCase()}`}
            >
              {tag}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                index={index}
                onViewGallery={handleViewGallery}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground">No events found for this filter.</p>
            <Button
              variant="ghost"
              onClick={() => setFilter(null)}
              className="mt-2"
            >
              Show all events
            </Button>
          </motion.div>
        )}

        <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && closeModal()}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedEvent && (
              <>
                <div className="relative aspect-video bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={galleryIndex}
                      src={selectedEvent.images[galleryIndex]}
                      alt={`${selectedEvent.title} - Image ${galleryIndex + 1}`}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {selectedEvent.images.length > 1 && (
                    <>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                        onClick={prevGalleryImage}
                        data-testid="modal-prev-image"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                        onClick={nextGalleryImage}
                        data-testid="modal-next-image"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-md text-sm">
                        {galleryIndex + 1} / {selectedEvent.images.length}
                      </div>
                    </>
                  )}

                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
                    onClick={closeModal}
                    data-testid="modal-close"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-6 space-y-4">
                  <DialogHeader>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedEvent.year}</span>
                      </div>
                      {selectedEvent.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <DialogTitle className="text-2xl">
                      {selectedEvent.title}
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                      {selectedEvent.description}
                    </DialogDescription>
                  </DialogHeader>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
