/**
 * Abandoned Missions & Explorers dataset.
 * Contains detailed mission facts, timeline events, photos, 3D model refs, and sources.
 */
export const CHAPTERS = [
  {
    id: 'opportunity',
    lat: -1.95,
    lon: -5.53,
    body: 'mars',
    model: '/models/rover.glb',
    name: 'Opportunity Rover (MER-B)',
    place: 'Meridiani Planum, Mars',
    coords: '1.95° S, 354.47° E',
    status: 'Silent since June 2018',
    text: 'Opportunity was built for a 90-sol mission and kept driving for more than 14 years. In June 2018 a planet-wide dust storm blocked the sunlight its solar panels depend on, and it never woke up. NASA declared the mission complete in February 2019.',
    image: '/images/opportunity.jpg',
    caption: 'Black-and-white mosaic from Opportunity’s cameras around sol 5000. Credit: NASA/JPL-Caltech',
    facts: [
      ['Landed', 'January 25, 2004 (UTC)'],
      ['Landing site', 'Eagle Crater, Meridiani Planum'],
      ['Planned life', '90 sols'],
      ['Last contact', 'June 10, 2018 (sol 5,111)'],
      ['Mission declared complete', 'February 13, 2019'],
      ['Distance driven', '45.16 km (28.06 mi), the off-Earth record for a wheeled vehicle'],
      ['Cause of silence', 'Global dust storm cut solar power to almost nothing']
    ],
    timeline: [
      ['Jan 2004', 'Lands in Eagle Crater after bouncing across the plain on airbags'],
      ['2011', 'Reaches the rim of Endeavour Crater, a 22 km wide impact crater'],
      ['Jul 2014', 'Passes the Moon-rover distance record set by Lunokhod 2'],
      ['Jun 2018', 'Dust storm blots out the Sun; last signal received'],
      ['Feb 2019', 'NASA ends recovery attempts']
    ],
    sources: [
      ['NASA Science: Mars Exploration Rovers', 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity'],
      ['NASA/JPL: Opportunity passes 25 miles', 'https://www.jpl.nasa.gov/images/pia18404-opportunitys-journey-exceeds-25-miles/']
    ]
  },
  {
    id: 'spirit',
    lat: -14.57,
    lon: 175.47,
    body: 'mars',
    model: '/models/rover.glb',
    tilt: [0.11, 0.35, -0.09],
    name: 'Spirit Rover (MER-A)',
    place: 'Gusev Crater, Mars',
    coords: '14.57° S, 175.47° E',
    status: 'Silent since March 2010',
    text: 'Spirit explored the floor of Gusev Crater and climbed the Columbia Hills. In 2009 it broke through a crust into soft sand at a site called Troy. NASA could not free it, and it went silent as its fourth Martian winter began. The 3D view shows the twin MER model.',
    image: '/images/spirit.jpg',
    caption: 'Spirit’s instrument arm placed against a rock, seen by a hazard camera. Credit: NASA/JPL-Caltech',
    facts: [
      ['Landed', 'January 4, 2004'],
      ['Landing site', 'Gusev Crater'],
      ['Planned life', '90 sols'],
      ['Stuck in sand', 'May 1, 2009, at Troy near Home Plate'],
      ['Last contact', 'March 22, 2010 (sol 2,208)'],
      ['Recovery efforts ended', 'May 24, 2011'],
      ['Distance driven', '7.73 km (4.8 mi)']
    ],
    timeline: [
      ['Jan 2004', 'Lands in Gusev Crater, three weeks before Opportunity'],
      ['2005', 'Photographs dust devils and climbs the Columbia Hills'],
      ['May 2009', 'Drives onto a hidden sand-filled crater and becomes embedded'],
      ['Jan 2010', 'NASA turns Spirit into a stationary science platform'],
      ['Mar 2010', 'Final signal as winter begins'],
      ['May 2011', 'NASA stops trying to reach it']
    ],
    sources: [
      ['NASA Science: Mars Exploration Rovers', 'https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity'],
      ['Planetary Society: NASA ends Spirit mission', 'https://www.planetary.org/explore/space-topics/space-missions/mer-updates/2011/05-26-mer-update.html']
    ]
  },
  {
    id: 'ingenuity',
    lat: 18.44,
    lon: 77.45,
    body: 'mars',
    model: '/models/ingenuity.glb',
    scale: 2.6,
    name: 'Ingenuity Mars Helicopter',
    place: 'Jezero Crater, Mars',
    coords: '18.44° N, 77.45° E',
    status: 'Grounded since January 2024',
    text: 'Ingenuity was a technology demonstration planned for five flights in 30 days. It became the first aircraft to fly on another world and flew 72 times before a damaged rotor blade ended its mission in January 2024.',
    image: '/images/ingenuity.jpg',
    caption: 'Ingenuity standing on the surface of Mars. Credit: NASA/JPL-Caltech',
    facts: [
      ['Landed', 'February 18, 2021, with Perseverance'],
      ['First flight', 'April 19, 2021: 39 seconds, hovering about 3 m up'],
      ['Planned', '5 flights over 30 days'],
      ['Flown', '72 flights, about 128.8 minutes, roughly 17 km'],
      ['Highest altitude', '24 m'],
      ['Final flight', 'January 18, 2024, rotor blade damaged on landing'],
      ['Mission ended', 'Announced January 25, 2024']
    ],
    timeline: [
      ['Feb 2021', 'Lands in Jezero Crater attached to Perseverance'],
      ['Apr 2021', 'First powered, controlled flight on another planet'],
      ['2022-23', 'Flies as a scout for Perseverance over rough terrain'],
      ['Jan 2024', 'Flight 72 ends with rotor damage; no more flights']
    ],
    sources: [
      ['NASASpaceflight: Ingenuity’s final flight', 'https://nasaspaceflight.com/2024/01/ingenuity-final-flight'],
      ['Astrobiology.com: Understanding Ingenuity’s last flight', 'https://astrobiology.com/2024/12/26/understanding-mars-helicopter-ingenuitys-last-flight-on-mars/']
    ]
  },
  {
    id: 'insight',
    lat: 4.5,
    lon: 135.62,
    body: 'mars',
    model: '/models/insight.glb',
    name: 'InSight Geophysical Lander',
    place: 'Elysium Planitia, Mars',
    coords: '4.50° N, 135.62° E',
    status: 'Ended December 2022',
    text: 'InSight listened to the inside of Mars. Its seismometer recorded more than 1,300 marsquakes, and dust slowly covered its solar panels until it lost power. NASA declared the mission over on December 21, 2022.',
    image: '/images/insight.jpg',
    caption: 'Artist’s concept of InSight firing its descent engines above Mars. Credit: NASA/JPL-Caltech',
    facts: [
      ['Launched', 'May 5, 2018'],
      ['Landed', 'November 26, 2018'],
      ['Landing site', 'Elysium Planitia, near the equator'],
      ['Marsquakes detected', 'More than 1,300'],
      ['Largest marsquake', 'Magnitude 5.0, May 2022'],
      ['Last image', 'December 11, 2022 (sol 1,436)'],
      ['Mission declared over', 'December 21, 2022'],
      ['Heat probe', 'The “mole” could not dig deep in the clumpy soil']
    ],
    timeline: [
      ['Nov 2018', 'Touches down on Elysium Planitia'],
      ['Jan 2021', 'Heat-probe digging attempts are retired'],
      ['May 2022', 'Records the largest marsquake of the mission'],
      ['Dec 2022', 'Misses two contacts; NASA ends the mission']
    ],
    sources: [
      ['SpaceflightNow: InSight bows out', 'https://spaceflightnow.com/2022/12/21/nasas-insight-lander-bows-out-after-ground-shaking-mars-mission/'],
      ['The Weather Network: InSight falls silent', 'https://www.theweathernetwork.com/en/news/science/space/mars-insight-mission-ends-after-nasa-loses-contact-with-lander']
    ]
  },
  {
    id: 'apollo',
    lat: 0.67,
    lon: 23.47,
    body: 'moon',
    model: '/models/apollo.glb',
    name: 'Apollo 11 Eagle Descent Stage',
    place: 'Sea of Tranquility, Moon',
    coords: '0.67° N, 23.47° E',
    status: 'On the surface since July 1969',
    text: 'Eagle carried Neil Armstrong and Buzz Aldrin to the Moon. When they lifted off, the descent stage stayed behind as the launch platform and is still at Tranquility Base.',
    image: '/images/apollo.jpg',
    caption: 'An Apollo lunar module being prepared on Earth before flight, not Eagle on the Moon. Credit: NASA',
    facts: [
      ['Launched', 'July 16, 1969, on a Saturn V'],
      ['Landed', 'July 20, 1969, 20:17 UTC'],
      ['Landing site', 'Sea of Tranquility (0.674° N, 23.473° E)'],
      ['Surface stay', '21.6 hours, one moonwalk of 2 h 31 min'],
      ['Samples returned', 'About 20 kg'],
      ['Empty weight', '3,920 kg (8,650 lb)'],
      ['Ascent stage', 'Left in lunar orbit after docking with Columbia; its fate is uncertain']
    ],
    timeline: [
      ['Jul 16, 1969', 'Launch from Kennedy Space Center'],
      ['Jul 20, 1969', 'Eagle lands; “The Eagle has landed”'],
      ['Jul 21, 1969', 'Ascent stage lifts off; descent stage stays on the Moon'],
      ['Jul 24, 1969', 'Crew splashes down in the Pacific']
    ],
    sources: [
      ['NASA Apollo Lunar Surface Journal: Apollo 11 overview', 'https://nasa.gov/wp-content/uploads/static/history/alsj/a11/a11ov.html'],
      ['Smithsonian NASM: Apollo 11 spacecraft', 'https://airandspace.si.edu/amp-stories/lunar-module']
    ]
  }
]
