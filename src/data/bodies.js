/**
 * Planetary celestial bodies configuration:
 * textures, ambient/sun lighting, sky color, and surface spot palettes.
 */
export const BODIES = {
  mars: {
    map: '/textures/mars.jpg',
    tint: '#ffffff',
    sky: '#1a0d0a',
    spots: ['255,170,70', '56,189,248', '255,110,60'],
    ambient: 0.12,
    sun: 3.2,
  },
  moon: {
    map: '/textures/moon.jpg',
    tint: '#ffffff',
    sky: '#05070d',
    spots: ['190,225,255', '56,189,248', '255,240,200'],
    ambient: 0.03,
    sun: 4.5,
  },
}
