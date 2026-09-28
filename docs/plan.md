Absolutely. For **Leela Travel**, I would avoid making it feel like a normal travel agency website with `Hero → About → Destinations → Services → Testimonials → Footer`.

The concept should feel more like an **interactive cinematic travel journal** — dark, calm, premium, and heavily driven by motion, imagery and scrolling.

# LEELA TRAVEL — E2E WEBSITE PLAN

### Core visual direction

**Mood:** Cinematic · Calm · Premium · Mysterious · Natural
**Theme:** Dark glass + Sri Lankan landscapes
**Interaction:** Scroll-driven storytelling + hover exploration + cinematic transitions
**Tech:** Next.js + TypeScript + Tailwind CSS + Framer Motion / Motion + optimized video/images

---

# 1. Brand / Design System

## Color Palette

The palette should be intentionally restrained.

### Primary

| Token          | Color                    | Usage               |
| -------------- | ------------------------ | ------------------- |
| `obsidian`     | `#071112`                | Main background     |
| `deep-forest`  | `#0B1D1B`                | Section backgrounds |
| `glass`        | `rgba(255,255,255,0.06)` | Glass cards         |
| `glass-border` | `rgba(255,255,255,0.12)` | Card borders        |
| `white`        | `#F5F7F4`                | Main text           |
| `muted`        | `#9BAAA7`                | Secondary text      |

### Accent

| Token      | Color     | Usage                    |
| ---------- | --------- | ------------------------ |
| `sea-mist` | `#7DD9D0` | Primary accent           |
| `aqua`     | `#4CC9C0` | Interactive states       |
| `sky`      | `#5DA9D6` | Travel / ocean accents   |
| `sand`     | `#D9C7A3` | Luxury / heritage accent |

### Gradient

```text
Leela Gradient

#071112
    ↓
#0B2523
    ↓
#123B38
    ↓
#4CC9C0
```

Use the accent **sparingly**.

The website should remain approximately:

**75% dark / 15% white / 10% accent**

That keeps it premium instead of looking like a colorful tourism website.

---

# 2. Typography System

I'd use **Poppins + Inter**.

### Primary Display — Poppins

Use for:

* Hero headings
* Destination names
* Large numbers
* Section titles
* Major CTAs

```text
Poppins
Weight: 400 / 500 / 600
```

Poppins gives the brand a more geometric, modern travel identity.

### Body — Inter

Use for:

* Paragraphs
* Navigation
* Buttons
* Metadata
* Destination descriptions
* Forms

```text
Inter
Weight: 400 / 500 / 600
```

### Optional Editorial Font

For a few **very large cinematic phrases**, you could introduce:

```text
Cormorant Garamond
```

or

```text
DM Serif Display
```

But don't make it the main font.

Example:

> **Poppins:**
> Discover Sri Lanka

> **Editorial:**
> *Where the journey becomes the story.*

This can create a beautiful luxury-travel contrast.

---

# 3. Font Hierarchy

### Display XL

```text
Poppins
96–128px
Weight 400
Line-height 0.9–1
Letter-spacing -0.04em
```

Desktop hero:

> More than
> **a destination.**

---

### Display Large

```text
64–80px
Weight 400
Line-height 0.95
```

---

### H1

```text
48–64px
Weight 500
```

---

### H2

```text
36–48px
Weight 500
```

---

### H3

```text
24–30px
Weight 500
```

---

### Body Large

```text
18px
Inter
Line-height 1.6
```

### Body

```text
15–16px
Inter
Line-height 1.6
```

### Labels

```text
11–12px
Inter
Weight 600
Letter spacing: 0.12em
text-transform: uppercase
```

Example:

```text
01 — HILL COUNTRY
```

This tiny uppercase metadata style will work extremely well with the dark cinematic design.

---

# 4. Site Architecture

I recommend exactly **3 primary pages**:

```text
/
├── Home
│
├── /destinations
│   └── Interactive destination explorer
│
└── /journey
    └── Leela Travel story / trip planning / brand
```

But the navigation shouldn't feel like:

> Home | Destinations | About | Contact

Instead:

```text
LEELA

Explore
Journeys
Our Story

                    Plan a Journey →
```

The CTA should always be:

### `Plan a Journey`

rather than boring `Contact Us`.

---

# 5. PAGE 01 — HOME

The homepage should feel like an **interactive movie**.

Not a collection of website sections.

---

## SECTION 01 — Cinematic Opening

### Full viewport video

```text
┌──────────────────────────────────────┐
│ LEELA                    Explore     │
│                           Journeys   │
│                                      │
│                                      │
│           [ FULL VIDEO ]             │
│                                      │
│                                      │
│  SRI LANKA, REIMAGINED               │
│                                      │
│  Where every road                    │
│  becomes a story.                    │
│                                      │
│  Explore Sri Lanka →                 │
│                                      │
│                     ↓ Scroll         │
└──────────────────────────────────────┘
```

### Video

Loop:

```text
Drone → mountains → train → tea → ocean
```

But instead of simply looping the video, use **scroll-controlled video** if possible.

For example:

```text
0% scroll → misty mountains
20% → train
40% → Ella
60% → waterfall
80% → coastline
100% → ocean
```

This would immediately make Leela feel different.

---

# SECTION 02 — "THE ISLAND UNFOLDS"

Instead of immediately showing cards.

Use an enormous Sri Lanka map.

```text
                 SRI LANKA

                     ● Jaffna

              ● Sigiriya

                  ● Kandy

                       ● Nuwara Eliya
                             ● Ella

         ● Colombo

                           ● Yala

               ● Galle

                    ● Mirissa

                        ● Arugam Bay
```

As the user scrolls:

* map slowly rotates
* destinations illuminate
* photos appear
* route lines animate

This becomes one of the site's signature interactions.

---

# SECTION 03 — 10 DESTINATIONS

Don't use a normal grid.

Use a **horizontal cinematic rail**.

```text
01
ELLA

The hills
call quietly.

        [ LARGE IMAGE ]
```

Then scroll horizontally.

### 10 destinations

1. **Ella**
2. **Sigiriya**
3. **Kandy**
4. **Nuwara Eliya**
5. **Galle**
6. **Mirissa**
7. **Yala**
8. **Bentota**
9. **Trincomalee**
10. **Arugam Bay**

Each card should have:

```text
01
ELLA

Hill Country

Train journeys
Tea plantations
Mountain trails

EXPLORE →
```

---

# SECTION 04 — THE ROUTES

This should be a **route visualization**, not cards.

Title:

> **Don't just visit Sri Lanka.
> Follow a route.**

Then animate a road across the island.

---

# 5 Signature Routes

### 01 — The Classic Island

```text
Colombo
   ↓
Kandy
   ↓
Nuwara Eliya
   ↓
Ella
   ↓
Yala
   ↓
Mirissa
   ↓
Galle
```

---

### 02 — The Hill Country

```text
Kandy
 ↓
Nuwara Eliya
 ↓
Haputale
 ↓
Ella
 ↓
Badulla
```

This is your requested:

**Colombo → Kandy → Nuwara Eliya → Ella → Badulla → Down South**

expanded into a complete journey.

---

### 03 — Heritage Trail

```text
Colombo
 ↓
Dambulla
 ↓
Sigiriya
 ↓
Polonnaruwa
 ↓
Kandy
```

---

### 04 — Southern Escape

```text
Colombo
 ↓
Bentota
 ↓
Galle
 ↓
Weligama
 ↓
Mirissa
 ↓
Yala
```

---

### 05 — Wild East

```text
Kandy
 ↓
Dambulla
 ↓
Pasikuda
 ↓
Trincomalee
 ↓
Arugam Bay
```

---

# SECTION 05 — "CHOOSE YOUR MOOD"

This is where the website becomes highly interactive.

Instead of:

> Our Services

Give visitors experiences.

```text
WHAT ARE YOU LOOKING FOR?

     MOUNTAINS
         ↓

     WILDLIFE
         ↓

     OCEAN
         ↓

     CULTURE
         ↓

     ADVENTURE
```

Hovering/clicking changes the entire background.

For example:

### MOUNTAINS

Background:

Ella / Nuwara Eliya

```text
Cool mornings.
Misty roads.
Tea-covered mountains.
```

### OCEAN

Background:

Mirissa / Galle

```text
Salt air.
Golden sunsets.
Southern roads.
```

### WILDLIFE

Background:

Yala

```text
Wild roads.
Ancient forests.
An island untamed.
```

---

# SECTION 06 — LEELA STORY

Minimal.

Huge text.

```text
WE DON'T
SELL TRIPS.

WE CREATE
JOURNEYS.
```

Then:

> From the first road out of Colombo to the last sunset by the coast, Leela creates journeys designed around the way you want to experience Sri Lanka.

---

# SECTION 07 — CINEMATIC CTA

Full-screen video.

Text:

> **Your Sri Lanka
> starts here.**

Button:

### PLAN A JOURNEY →

---

# 6. PAGE 02 — DESTINATIONS

This should NOT look like a standard destination listing.

---

## Opening

```text
DESTINATIONS

10 places.
One island.
Endless stories.
```

Large atmospheric image.

Then:

### Interactive Island Explorer

Sri Lanka map.

Click:

```text
Ella
↓
Image expands

ELLA
Hill Country

"Where the mountains
slow you down."

Explore →
```

---

# Destination Interaction

Desktop:

```text
                 MAP

      ┌──────────────────────────┐
      │                          │
      │      ● Ella              │
      │                          │
      │ ● Colombo               │
      │                          │
      │               ● Yala     │
      │                          │
      └──────────────────────────┘

                 ↓

        SELECTED DESTINATION

        ELLA
        ─────────

        [ LARGE VIDEO ]

        Hill Country
        1,041m elevation

        Best for:
        Hiking · Trains · Tea
```

Mobile becomes a vertical interactive story.

---

# 7. PAGE 03 — JOURNEY

Instead of an ordinary **About page**, call it:

# JOURNEY

This page combines:

* About Leela
* Travel philosophy
* Route planning
* Contact / inquiry

---

## Hero

```text
THE JOURNEY
MATTERS AS MUCH
AS THE DESTINATION.
```

Full-screen slow-motion travel footage.

---

## Philosophy

Three giant statements.

```text
01

GO SLOW.
```

```text
02

SEE MORE.
```

```text
03

FEEL THE PLACE.
```

Each changes the background imagery.

---

# SECTION — HOW LEELA BUILDS A JOURNEY

Interactive timeline:

```text
01
Tell us your story
        ↓
02
Choose your mood
        ↓
03
Shape your route
        ↓
04
We curate the experience
        ↓
05
You start travelling
```

Don't use ordinary cards.

Make it a **vertical animated journey line**.

---

# SECTION — PLAN YOUR JOURNEY

This is the conversion section.

Large glass panel:

```text
PLAN YOUR
SRI LANKAN
JOURNEY

Where do you want to go?

[ Mountains       ]
[ Ocean           ]
[ Wildlife        ]
[ Culture         ]
[ Adventure       ]

How many days?

[ 3 ] [ 5 ] [ 7 ] [ 10+ ]

             CONTINUE →
```

Could eventually connect to WhatsApp/contact.

---

# 8. NAVIGATION

Keep navigation extremely minimal.

### Desktop

```text
┌─────────────────────────────────────────────┐
│ LEELA       Explore   Journeys   About     │
│                                             │
│                              Plan Journey →  │
└─────────────────────────────────────────────┘
```

On scroll:

* navbar becomes glass
* 12–16px blur
* thin border
* logo reduces slightly

---

# 9. INTERACTION SYSTEM

This is where I would make the project special.

### Cursor

Desktop custom cursor:

```text
      ◉
   EXPLORE
```

On image:

```text
      +
```

On CTA:

```text
     →
```

---

### Magnetic buttons

Buttons subtly move toward cursor.

---

### Image reveal

Images should use:

```text
clip-path
scale
opacity
parallax
```

rather than simply fading in.

---

### Destination hover

When hovering:

```text
Ella
```

the entire page gets a subtle:

```text
mountain image
+
green atmospheric tint
```

---

### Page transitions

Use:

```text
black → destination image → page
```

rather than instant navigation.

---

# 10. Glassmorphism System

Don't overuse glass.

### Glass Card

```css
background:
rgba(255,255,255,0.05);

backdrop-filter:
blur(20px);

border:
1px solid rgba(255,255,255,0.1);

border-radius:
24px;
```

### Large cards

```text
24–32px radius
```

### Small UI

```text
999px radius
```

---

# 11. Component Architecture

For Next.js, I would structure it roughly like this:

```text
app/
│
├── page.tsx
│
├── destinations/
│   └── page.tsx
│
├── journey/
│   └── page.tsx
│
├── layout.tsx
│
└── globals.css
```

Components:

```text
components/
│
├── navigation/
│   ├── Navbar
│   ├── MobileMenu
│   └── PageTransition
│
├── hero/
│   ├── CinematicHero
│   ├── HeroVideo
│   └── ScrollIndicator
│
├── destinations/
│   ├── DestinationRail
│   ├── DestinationCard
│   ├── DestinationMap
│   └── DestinationExplorer
│
├── routes/
│   ├── RouteVisualizer
│   ├── RoutePath
│   └── RouteStops
│
├── experience/
│   ├── MoodSelector
│   └── ExperiencePanel
│
├── journey/
│   ├── JourneyTimeline
│   ├── JourneyPlanner
│   └── PhilosophySection
│
└── ui/
    ├── GlassCard
    ├── MagneticButton
    ├── Reveal
    ├── ParallaxImage
    └── CustomCursor
```

---

# 12. Motion Architecture

Use **Motion for React** for most UI animation.

### Animation levels

**Level 1 — Micro**

* hover
* buttons
* cursor
* cards

**Level 2 — Section**

* image reveals
* text reveals
* parallax
* horizontal scrolling

**Level 3 — Cinematic**

* hero video
* route animation
* destination transitions
* page transitions

Don't animate everything.

The calmness comes from **slow, intentional motion**.

---

# 13. Hero Video Strategy

For the hero, I would make this the signature:

```text
VIDEO
1920 × 1080
WebM
H.265/VP9 where appropriate
5–12 seconds
muted
loop
poster image
```

For mobile:

```text
separate mobile video
```

Don't load a huge 30–50 MB video immediately.

Use:

```text
poster
↓
low-quality preview
↓
video load
```

And lazy-load videos below the fold.

---

# 14. Image Treatment

Avoid highly saturated tourism photos.

Use:

```text
Dark overlay
+
slight desaturation
+
deep green shadows
+
cyan highlights
```

This creates the **Leela visual signature**.

---

# 15. Homepage Visual Flow

The final experience should feel approximately:

```text
             VIDEO
               ↓
       "SRI LANKA, REIMAGINED"
               ↓
        ISLAND UNFOLDS
               ↓
          10 DESTINATIONS
               ↓
        FOLLOW A ROUTE
               ↓
         CHOOSE YOUR MOOD
               ↓
          LEELA STORY
               ↓
       CINEMATIC VIDEO
               ↓
       PLAN YOUR JOURNEY
               ↓
             FOOTER
```

Not:

```text
Hero
About
Services
Destinations
Testimonials
Contact
```

That's the key difference.

---

# 16. Footer

Very minimal.

```text
                         LEELA
                    TRAVEL SRI LANKA

        Explore        Journeys       Instagram

────────────────────────────────────────────

        © 2026 Leela Travel

        Made for discovering Sri Lanka.
```

---

# 17. Final 3-Page Experience

### `/`

**THE ISLAND**

Cinematic introduction + interactive destinations + routes + moods.

### `/destinations`

**THE PLACES**

Interactive Sri Lankan map + 10 destinations + immersive destination exploration.

### `/journey`

**THE EXPERIENCE**

Leela philosophy + journey-building process + interactive trip planner + conversion.

---

## The overall identity

Think:

**Apple-style presentation + cinematic travel documentary + glassmorphism + Sri Lankan nature.**

Not:

**traditional Sri Lankan travel agency website.**

The strongest visual signature should be:

> **Darkness → landscape → glass → typography → motion → silence.**

That combination will make **Leela Travel** feel like a premium digital travel brand rather than a normal tourism website.
