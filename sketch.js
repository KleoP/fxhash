// Measurement constants
const inchesDPI = 300;

// Page size variables, A3 paper
let pageWInches = 16.5;
let pageHInches = 11.7;
let borderWInches = 0.75;
let borderHInches = 0.85;

// Page size in DPI
let pageW, pageH;
let borderW, borderH;
let centerW, centerH;

// FEATURES DEFINE

window.$fxhashFeatures = {
  "Feature 1": 25,
  "Feature 2": "bird",
  "Feature 3": true,
}


function setup() {
  noLoop();
  colorMode(HSB, 360, 100, 100, 255);
  
  seed = fxrand() * 9999999;  
  console.log("setup(): hash and seed", fxhash, seed);
  randomSeed(seed);  
  noiseSeed(seed);

  createCanvas(400, 400);
}

function draw() {
  background(220);
}
