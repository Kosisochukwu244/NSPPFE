import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft, ChevronRight, Images } from "lucide-react";
import type { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
  index?: number;
  onViewGallery?: (event: Event) => void;
}

export default function EventCard({ event, index = 0, onViewGallery }: EventCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
  }, [event.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
  }, [event.images.length]);

  useEffect(() => {
    if (!isHovered && event.images.length > 1) {
      const interval = setInterval(nextImage, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, event.images.length, nextImage]);

  const tagColors: Record<string, string> = {
    School: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    Workshop: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    Conference: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    Training: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    Research: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
    Fusion: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
    Engineering: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    International: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
    Collaboration: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="overflow-visible group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-testid={`card-event-${event.id}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-md">
          {event.images.map((image, imgIndex) => (
            <motion.img
              key={imgIndex}
              src={image}
              alt={`${event.title} - Image ${imgIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={false}
              animate={{
                opacity: imgIndex === currentImageIndex ? 1 : 0,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.5 }}
              loading="lazy"
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {event.images.length > 1 && (
            <>
              <Button
                size="icon"
                variant="ghost"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                style={{ visibility: isHovered ? "visible" : "hidden" }}
                data-testid={`button-prev-image-${event.id}`}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                style={{ visibility: isHovered ? "visible" : "hidden" }}
                data-testid={`button-next-image-${event.id}`}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {event.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(imgIndex);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      imgIndex === currentImageIndex
                        ? "bg-white w-4"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    data-testid={`button-dot-${event.id}-${imgIndex}`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute top-3 right-3 flex items-center gap-2 text-white text-sm bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
            <Calendar className="h-3.5 w-3.5" />
            <span>{event.year}</span>
          </div>
        </div>

        <div className="p-5 space-y-3">
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className={`text-xs ${tagColors[tag] || ""}`}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-foreground leading-tight">
            {event.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {event.description}
          </p>

          {onViewGallery && (
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-2"
              onClick={() => onViewGallery(event)}
              data-testid={`button-view-gallery-${event.id}`}
            >
              <Images className="mr-2 h-4 w-4" />
              View Gallery
            </Button>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
