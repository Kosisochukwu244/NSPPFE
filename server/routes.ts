import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";
import fs from "fs";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch events" });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEventById(req.params.id);
      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch event" });
    }
  });

  app.get("/api/images/:type", (req, res) => {
    const imageMap: Record<string, string> = {
      workshop: "nsfepp_workshop_training_session.png",
      facility: "fusion_research_facility_interior.png",
      conference: "scientific_conference_presentation_hall.png",
      lab: "plasma_physics_laboratory_training.png",
      hero: "plasma_fusion_reactor_visualization.png"
    };

    const filename = imageMap[req.params.type];
    if (!filename) {
      return res.status(404).json({ error: "Image not found" });
    }

    const imagePath = path.join(process.cwd(), "attached_assets", "generated_images", filename);
    
    if (fs.existsSync(imagePath)) {
      res.sendFile(imagePath);
    } else {
      res.status(404).json({ error: "Image file not found" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ success: true, id: message.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid form data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to submit contact message" });
    }
  });

  return httpServer;
}
