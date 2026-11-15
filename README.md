# Abandoned, But Never Forgotten — NASA Space Apps 2026

An interactive 3D scrollytelling web application honoring the robotic explorers and lunar stages left behind on other worlds (Mars and the Moon). Built with React 18, Vite, Three.js, and `@react-three/fiber` / `@react-three/drei`.

---

## 🚀 Quickstart

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open the printed URL (typically `http://localhost:5173/`) in your browser.

3. **Production Build:**
   ```bash
   npm run build
   ```
   Outputs optimized static assets to the `dist/` directory.

4. **Preview Production Build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Architecture & Clean Folder Structure

The project has been modularized into clean, cohesive directories:

```
abandoned-react/
├── public/                       # Static public assets served as-is
│   ├── draco/                    # Local Draco decoders for offline mesh decompression
│   ├── favicon.svg               # Space Apps themed vector favicon
│   ├── images/                   # High-resolution mission photography
│   ├── models/                   # Compressed 3D GLTF (.glb) mission models
│   └── textures/                 # Mars and Moon surface diffuse textures
├── src/
│   ├── components/               # Modular UI and 3D components
│   │   ├── common/               # Shared utilities & overlays
│   │   │   ├── ErrorBoundary.jsx # Error boundary to catch 3D/render errors gracefully
│   │   │   └── Lightbox.jsx      # Accessible image modal (Esc/click to close)
│   │   ├── layout/               # Top header & challenge footer
│   │   │   ├── Header.jsx        # Sticky navigation bar with quick jumps
│   │   │   └── Footer.jsx        # NASA Space Apps & data attribution
│   │   ├── scene/                # Three.js 3D Canvas and Scene entities
│   │   │   ├── Ground.jsx        # Surface plane with dynamic texture and tinting
│   │   │   ├── HudOverlay.jsx    # Real-time HUD showing active craft & coordinates
│   │   │   ├── Model.jsx         # Draco GLTF loader with auto-centering & bounding
│   │   │   ├── SceneCanvas.jsx   # Three.js Canvas container with lighting & controls
│   │   │   ├── Spots.jsx         # Animated pulsating surface light pools
│   │   │   └── index.js          # Unified scene exports
│   │   └── story/                # Scrollytelling content column
│   │       ├── ChapterCard.jsx   # Mission card (facts, timeline, coordinates, links)
│   │       ├── Intro.jsx         # Hero introduction
│   │       └── StoryFeed.jsx     # Scrollable feed observed by IntersectionObserver
│   ├── data/                     # Data definitions
│   │   ├── bodies.js             # Celestial body configs (textures, sun, spots, sky)
│   │   ├── chapters.js           # Full mission datasets (Opportunity, Spirit, etc.)
│   │   └── index.js              # Unified data exports
│   ├── styles/                   # Modular CSS stylesheets
│   │   ├── index.css             # Main stylesheet aggregating all styles
│   │   ├── layout.css            # Sticky bar & two-column grid layout
│   │   ├── lightbox.css          # Image modal backdrop and layout
│   │   ├── scene.css             # 3D stage and HUD styling
│   │   ├── story.css             # Cards, timeline, facts grid styling
│   │   └── variables.css         # Theme tokens and typography
│   ├── App.jsx                   # Root coordinator component
│   ├── main.jsx                  # Application entry point
│   ├── Scene.jsx                 # Backwards-compatible Scene re-export
│   ├── data.js                   # Backwards-compatible data re-export
│   └── styles.css                # Backwards-compatible styles re-export
├── index.html                    # HTML entry template with fonts and favicon
├── package.json                  # Dependencies and build scripts
└── vite.config.js                # Vite configuration
```

---

## 🛠️ Customizing Missions & Data

- **Add or edit missions:** Modify [`src/data/chapters.js`](file:///c:/Users/Athham_Stark/Downloads/abandoned-react/src/data/chapters.js) to adjust timelines, facts, coordinates, images, and 3D models.
- **Add or edit planetary bodies:** Modify [`src/data/bodies.js`](file:///c:/Users/Athham_Stark/Downloads/abandoned-react/src/data/bodies.js) to change planetary surface maps, sky background colors, ambient lighting, and pulsating light spot palettes.
