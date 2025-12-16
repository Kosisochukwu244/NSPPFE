# NSFEPP Design Guidelines

## Design Approach
**Scientific & Modern Web Application** - Inspired by CERN, ITER, NASA science pages, and academic conference websites. The design should feel scientific, credible, modern, clean, Africa-forward but globally professional.

## Typography
- **Font Families**: Inter or Poppins (clean sans-serif)
- **Hierarchy**: Clear distinction between titles, subtitles, and body text
- **Style**: Professional, readable, academic

## Color Palette
- **Primary**: Deep blue
- **Accent**: Plasma purple  
- **Neutrals**: Scientific gray, white
- **Usage**: Generous white space for clarity and scientific feel

## Layout System
- **Approach**: Mobile-first responsive design
- **Spacing**: Use Tailwind spacing units consistently (recommend: 4, 8, 16, 24, 32 for common patterns)
- **Desktop Events**: Grid layout
- **Mobile Events**: Swipeable slider

## Site Structure & Sections

### 1. Hero Section
- **Title**: "Nigerian School on Fusion Energy & Plasma Physics"
- **Subtitle**: "Advancing Fusion Science, Plasma Research & Capacity Building in Africa"
- **CTAs**: Two buttons
  - "Explore Our Work"
  - "View Past Events"
- **Animation**: Smooth fade-in on load
- **Background**: Use a large hero image relevant to fusion energy/plasma physics (scientific equipment, plasma visualization, or educational setting)

### 2. About Section
- **Content**: Mission, vision, scientific focus
- **Key Points**: 
  - Capacity building
  - Research
  - Collaboration
- **Layout**: Clean, text-focused with strategic white space

### 3. Events Section (PRIMARY FOCUS)
- **Title**: "Past Events & Activities"
- **Layout**: Grid on desktop, horizontal slider on mobile
- **Card Structure**: Each event card contains:
  - Event name
  - Year
  - Short description
  - Animated image gallery (slideshow)
  - Tags (Workshop/Conference/Training/School)

## Animation Strategy

### Framer Motion Animations (60fps target):
- **Card Entry**: Fade-in + slide-up on scroll
- **Card Stagger**: Sequential reveal of multiple cards
- **Image Hover**: Smooth zoom effect
- **Image Gallery**: Cross-fade slideshow within cards
- **Optional**: Subtle parallax scroll effect

**Animation Tone**: Smooth, professional, NOT flashy or childish

## Images

### Hero Section
- **Image**: Large, high-quality background image
  - Suggested: Fusion reactor interior, plasma visualization, or NSFEPP event photograph
  - Should convey scientific credibility and educational mission

### Events Section  
- **Structure**: Multiple images per event (slideshow format)
- **Implementation**: Lazy-loaded, optimized, responsive
- **Folder Structure**: `/public/events/[event-id]/img1.jpg, img2.jpg, etc.`
- **Behavior**: Auto-playing cross-fade slideshow on each card

## Component Library

### Event Card Component
- Image gallery area (slideshow)
- Title overlay or below images
- Year badge
- Description text
- Tag pills
- Hover state with image zoom
- Click behavior: Trigger modal (bonus feature)

### Buttons
- Primary CTA style for hero buttons
- If placed on hero image: blurred background for readability
- No custom hover states needed (use default)

### Modal (Bonus Feature)
- Full event gallery viewer
- Extended description
- "View Gallery" trigger button

## Responsiveness

### Desktop (lg+)
- Events in grid layout (2-3 columns)
- Full animations enabled
- Generous spacing

### Tablet (md)
- Events in 2-column grid or transition to slider
- Maintained animations

### Mobile (base)
- Single column
- Swipeable event slider
- Touch-optimized interactions
- Animations simplified if needed for performance

## Performance Requirements
- Component-based architecture
- Reusable EventCard component
- Semantic HTML
- Alt text on all images
- 60fps animation target
- Image optimization and lazy loading

## Data Structure Reference
Events stored in `/data/events.js` with objects containing: id, title, year, description, images array, tags array

## Optional Enhancement
- Dark mode toggle with scientific theme variations