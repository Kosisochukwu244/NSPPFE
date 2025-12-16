import { 
  type User, type InsertUser, 
  type Event, type InsertEvent,
  type ContactMessage, type InsertContactMessage 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllEvents(): Promise<Event[]>;
  getEventById(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private events: Map<string, Event>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.contactMessages = new Map();
    
    this.seedEvents();
  }

  private seedEvents() {
    const seedData: Event[] = [
      {
        id: "fusion-summer-school-2024",
        title: "Nigerian Fusion Summer School",
        year: "2024",
        description: "Intensive two-week program covering fusion reactor fundamentals, plasma confinement, and magnetic field theory with hands-on laboratory sessions.",
        images: ["/api/images/workshop", "/api/images/lab"],
        tags: ["School", "Training", "Fusion"],
        order: 1
      },
      {
        id: "plasma-diagnostics-workshop-2024",
        title: "Plasma Diagnostics Workshop",
        year: "2024",
        description: "Advanced workshop on plasma measurement techniques including spectroscopy, interferometry, and probe diagnostics for fusion research.",
        images: ["/api/images/lab", "/api/images/facility"],
        tags: ["Workshop", "Research"],
        order: 2
      },
      {
        id: "international-fusion-conference-2023",
        title: "West African Fusion Energy Conference",
        year: "2023",
        description: "International gathering of fusion scientists and researchers from across Africa and global institutions discussing collaborative research initiatives.",
        images: ["/api/images/conference", "/api/images/workshop"],
        tags: ["Conference", "International"],
        order: 3
      },
      {
        id: "reactor-engineering-school-2023",
        title: "Tokamak Engineering School",
        year: "2023",
        description: "Specialized training program on tokamak reactor design, superconducting magnets, and plasma heating systems for aspiring fusion engineers.",
        images: ["/api/images/facility", "/api/images/lab"],
        tags: ["School", "Engineering"],
        order: 4
      },
      {
        id: "plasma-physics-fundamentals-2022",
        title: "Plasma Physics Fundamentals",
        year: "2022",
        description: "Foundation course covering plasma behavior, magnetohydrodynamics, and particle transport phenomena for graduate students and researchers.",
        images: ["/api/images/workshop", "/api/images/conference"],
        tags: ["Training", "Research"],
        order: 5
      },
      {
        id: "capacity-building-summit-2022",
        title: "African Capacity Building Summit",
        year: "2022",
        description: "Strategic summit focused on developing fusion research infrastructure and training programs across African institutions.",
        images: ["/api/images/conference", "/api/images/facility"],
        tags: ["Conference", "Collaboration"],
        order: 6
      }
    ];

    for (const event of seedData) {
      this.events.set(event.id, event);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values()).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  }

  async getEventById(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const event: Event = { ...insertEvent, order: this.events.size + 1 };
    this.events.set(event.id, event);
    return event;
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = { ...insertMessage, id };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
