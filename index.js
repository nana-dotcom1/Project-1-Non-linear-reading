const textElements = [
  { text: "the garden of forking paths", left: 361, top: 52, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 303, top: 65, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 600, top: 47, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 552, top: 71, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 818, top: 58, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 591, top: 99, fontSize: 16, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 445, top: 127, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 714, top: 110, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 521, top: 146, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 482, top: 166, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 465, top: 209, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 377, top: 180, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 334, top: 147, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 256, top: 120, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 617, top: 230, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 475, top: 247, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 513, top: 254, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 596, top: 254, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 492, top: 272, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 465, top: 286, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 407, top: 283, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 482, top: 327, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 521, top: 307, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 600, top: 306, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 422, top: 343, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 596, top: 367, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 534, top: 412, fontSize: 20, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 465, top: 387, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 280, top: 387, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 390, top: 444, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 424, top: 467, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 492, top: 433, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 521, top: 357, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 482, top: 465, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 378, top: 504, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 318, top: 16, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 35, top: 14, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 241, top: 27, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 2, top: 0, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 536, top: 14, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 430, top: 0, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 640, top: 0, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 852, top: 0, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 1068, top: -2, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 212, top: 0, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 182, top: -27, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 513, top: 29, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 475, top: 39, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 172, top: 73, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: -16, top: 185, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 893, top: 155, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1081, top: 97, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1241, top: 155, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1120, top: 111, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1090, top: 121, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1202, top: 155, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1029, top: 181, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1068, top: 181, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1168, top: 210, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1129, top: 220, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the g", left: 1081, top: 226, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 85, top: 99, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 17, top: 48, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 54, top: 42, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 93, top: 41, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 3, top: 36, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: -67, top: -13, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: -16, top: 23, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: -110, top: -47, fontSize: 13, font: "IBM_Plex_Mono:Regular" },
  { text: "paths", left: 168, top: 155, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 124, top: 130, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 163, top: 130, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 368, top: 256, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 329, top: 255, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 279, top: 277, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 129, top: 233, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 207, top: 245, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 273, top: 200, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 212, top: 74, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 207, top: 37, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 264, top: 52, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 351, top: 301, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 212, top: 305, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 182, top: 307, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 1029, top: 118, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 1136, top: 53, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 1174, top: 45, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 1195, top: 31, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 1241, top: 26, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 1151, top: 29, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 143, top: 304, fontSize: 13, font: "League_Script:League_Script" },
  { text: "paths", left: 37, top: 120, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 920, top: 34, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 322, top: 99, fontSize: 16, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 701, top: 88, fontSize: 16, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 431, top: 84, fontSize: 16, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 806, top: 39, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 1028, top: 20, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 750, top: 20, fontSize: 13, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 627, top: 523, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 485, top: 568, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 510, top: 603, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 549, top: 603, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 588, top: 698, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 588, top: 748, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 588, top: 618, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 402, top: 663, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 588, top: 723, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 485, top: 653, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 524, top: 698, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 510, top: 748, fontSize: 24, font: "League_Script:League_Script" },
  { text: "the garden of forking paths", left: 549, top: 818, fontSize: 24, font: "League_Script:League_Script" },
];

function createTextElement(element, index) {
  const p = document.createElement('p');
  p.textContent = element.text;
  p.className = element.font === "IBM_Plex_Mono:Regular" ? 'text-element ibm-plex' : 'text-element league-script';
  p.style.left = element.left + 'px';
  p.style.top = element.top + 'px';
  p.style.fontSize = element.fontSize + 'px';
  
  // Create unique animation properties for each text element
  const seed = index * 13.7;
  const horizontalSpeed = (3 + (seed % 5)) * 1000; // Convert to milliseconds
  const verticalSpeed = (4 + (seed % 6)) * 1000;
  const flickerSpeed = (1.5 + (seed % 2.5)) * 1000;
  const horizontalDistance = 15 + (seed % 30);
  const verticalDistance = 10 + (seed % 20);
  const flickerDelay = (seed % 2) * 500;
  
  // Combine horizontal and vertical animations
  const combinedKeyframes = [
    { transform: `translate(0px, 0px)`, offset: 0 },
    { transform: `translate(${horizontalDistance}px, ${verticalDistance / 2}px)`, offset: 0.25 },
    { transform: `translate(${-horizontalDistance / 2}px, ${verticalDistance}px)`, offset: 0.5 },
    { transform: `translate(${horizontalDistance / 3}px, ${verticalDistance / 2}px)`, offset: 0.75 },
    { transform: `translate(0px, 0px)`, offset: 1 }
  ];
  
  // Opacity flickering
  const opacityKeyframes = [
    { opacity: 0.4, offset: 0 },
    { opacity: 1, offset: 0.17 },
    { opacity: 0.6, offset: 0.34 },
    { opacity: 1, offset: 0.5 },
    { opacity: 0.5, offset: 0.67 },
    { opacity: 1, offset: 0.84 },
    { opacity: 0.4, offset: 1 }
  ];
  
  // Apply animations using Web Animations API
  p.animate(combinedKeyframes, {
    duration: Math.max(horizontalSpeed, verticalSpeed),
    iterations: Infinity,
    easing: 'ease-in-out'
  });
  
  p.animate(opacityKeyframes, {
    duration: flickerSpeed,
    iterations: Infinity,
    easing: 'ease-in-out',
    delay: flickerDelay
  });
  
  return p;
}

// Initialize
const container = document.getElementById('container');
textElements.forEach((element, index) => {
  const textEl = createTextElement(element, index);
  container.appendChild(textEl);
});
