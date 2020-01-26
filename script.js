                              
const spinningCircs = document.querySelectorAll(".circle");
const circsOne = document.querySelectorAll(".circle1");  
const circsTwo = document.querySelectorAll(".circle2");
const circsThree = document.querySelectorAll(".circle3"); 
const circsFour = document.querySelectorAll(".circle4");
const circsFive = document.querySelectorAll(".circle5");
const circsSix = document.querySelectorAll(".circle6");
const circsSev = document.querySelectorAll(".circle7");
const circsEight = document.querySelectorAll(".circle8"); 

const weirdSquares = document.querySelectorAll(".square");
const squaresOne = document.querySelectorAll(".square1");
const squaresTwo = document.querySelectorAll(".square2");
const squaresThree = document.querySelectorAll(".square3");
const squaresFour = document.querySelectorAll(".square4");
const squaresFive = document.querySelectorAll(".square5");
const squaresSix = document.querySelectorAll(".square6");
const squaresSev = document.querySelectorAll(".square7");
const squaresEight = document.querySelectorAll(".square8");

const weirdRings = document.querySelectorAll(".spinner-ring");
const ringsOne = document.querySelectorAll(".ring1");
const ringsTwo = document.querySelectorAll(".ring2");
const ringsThree = document.querySelectorAll(".ring3");
const ringsFour = document.querySelectorAll(".ring4");
const ringsFive = document.querySelectorAll(".ring5");
const ringsSix = document.querySelectorAll(".ring6");
const ringsSev = document.querySelectorAll(".ring7");
const ringsEight = document.querySelectorAll(".ring8");

function removePurp() {
   spinningCircs.forEach(function(el) {
  el.classList.remove("purp");
})
   weirdSquares.forEach(function(el) {
  el.classList.remove("lightpurp");
     })
  weirdRings.forEach(function(el) {
  el.classList.remove("lighterpurp");
     })
   }
                              //  circs


 function circOnePurp() { 
  circsOne.forEach(function(el) {
  el.classList.add("purp");    
})
}
 function circTwoPurp() { 
  circsTwo.forEach(function(el) {
  el.classList.add("purp");    
})
}
 function circThreePurp() { 
  circsThree.forEach(function(el) {
  el.classList.add("purp");    
})
}
 function circFourPurp() { 
  circsFour.forEach(function(el) {
  el.classList.add("purp");    
})
}
 function circFivePurp() { 
  circsFive.forEach(function(el) {
  el.classList.add("purp");    
})
}
 function circSixPurp() { 
  circsSix.forEach(function(el) {
  el.classList.add("purp");    
})
}
function circSevPurp() { 
  circsSev.forEach(function(el) {
  el.classList.add("purp");    
})
}
function circEightPurp() { 
  circsEight.forEach(function(el) {
  el.classList.add("purp");    
})
}

                             // square
 function squareOnePurp() { 
  squaresOne.forEach(function(el) {
  el.classList.add("lightpurp");    
})
}
 function squareTwoPurp() { 
  squaresTwo.forEach(function(el) {
  el.classList.add("lightpurp");    
})
}
 function squareThreePurp() { 
  squaresThree.forEach(function(el) {
  el.classList.add("lightpurp");    
})
}
 function squareFourPurp() { 
  squaresFour.forEach(function(el) {
  el.classList.add("lightpurp");    
})
}
 function squareFivePurp() { 
  squaresFive.forEach(function(el) {
  el.classList.add("lightpurp");    
})
}
 function squareSixPurp() { 
  squaresSix.forEach(function(el) {
  el.classList.add("lightpurp");    
})
}
 function squareSevPurp() { 
  squaresSev.forEach(function(el) {
  el.classList.add("lightpurp");    
})
}
 function squareEightPurp() { 
  squaresEight.forEach(function(el) {
  el.classList.add("lightpurp");    
})
}
                            // rings
 function ringOnePurp() { 
  ringsOne.forEach(function(el) {
  el.classList.add("lighterpurp");    
})
}
 function ringTwoPurp() { 
  ringsTwo.forEach(function(el) {
  el.classList.add("lighterpurp");    
})
}
  function ringThreePurp() { 
  ringsThree.forEach(function(el) {
  el.classList.add("lighterpurp");    
})
}
  function ringFourPurp() { 
  ringsFour.forEach(function(el) {
  el.classList.add("lighterpurp");    
})
}
 function ringFivePurp() { 
  ringsFive.forEach(function(el) {
  el.classList.add("lighterpurp");    
})
}
 function ringSixPurp() { 
  ringsSix.forEach(function(el) {
  el.classList.add("lighterpurp");    
})
}
 function ringSevPurp() { 
  ringsSev.forEach(function(el) {
  el.classList.add("lighterpurp");    
})
}
 function ringEightPurp() { 
  ringsEight.forEach(function(el) {
  el.classList.add("lighterpurp");    
})
}

  
                            // SYNTH

const synth = new Tone.PolySynth({
  attack: 3,
  
  modulationIndex: 20,
  harmonicity: 10,
  oscillator: {
    type: "sine", 
    
  },
  
  polyphony: 20,
  modulation: {
    type: "saw"
  }
}).toDestination();

// handles keyboard events
document.addEventListener("keydown",  e => {
  switch (e.key) {
    // Roots
    case "z":
      return synth.triggerAttackRelease("C4", 0.1),
      circOnePurp();

    case "x":
      return synth.triggerAttackRelease("D4", 0.1),
         circTwoPurp();

    case "c":
      return synth.triggerAttackRelease("D#4", 0.1),
         circThreePurp();
    case "v":
      return synth.triggerAttackRelease("F4", 0.1),
         circFourPurp();

    case "b":
      return synth.triggerAttackRelease("G4", 0.1),
         circFivePurp();

    case "n":
      return synth.triggerAttackRelease("G#4", 0.1),
         circSixPurp();

    case "m":
      return synth.triggerAttackRelease("Bb4", 0.1),
         circSevPurp();

    case ",":
      return synth.triggerAttackRelease("C5", 0.1),
         circEightPurp();

    //                               3rds

    case "a":
      return synth.triggerAttackRelease("Eb4", 0.1),
        squareOnePurp();

    case "s":
      return synth.triggerAttackRelease("F4", 0.1),
         squareTwoPurp();

    case "d":
      return synth.triggerAttackRelease("G4", 0.1),
         squareThreePurp();
    case "f":
      return synth.triggerAttackRelease("G#4", 0.1),
         squareFourPurp();

    case "g":
      return synth.triggerAttackRelease("Bb4", 0.1),
         squareFivePurp();

    case "h":
      return synth.triggerAttackRelease("C5", 0.1),
         squareSixPurp();

    case "j":
      return synth.triggerAttackRelease("D5", 0.1),
          squareSevPurp();
        
    case "k":
      return synth.triggerAttackRelease("Eb5", 0.1),
         squareEightPurp();

    //                             7ths

    case "q":
      return synth.triggerAttackRelease("Bb4", 0.1),
        ringOnePurp();

    case "w":
      return synth.triggerAttackRelease("C5", 0.1),
        ringTwoPurp();

    case "e":
      return synth.triggerAttackRelease("D5", 0.1),
        ringThreePurp();

    case "r":
      return synth.triggerAttackRelease("Eb5", 0.1),
        ringFourPurp();

    case "t":
      return synth.triggerAttackRelease("F5", 0.1),
        ringFivePurp();

    case "y":
      return synth.triggerAttackRelease("G5", 0.1),
        ringSixPurp();

    case "u":
      return synth.triggerAttackRelease("Ab5", 0.1),
        ringSevPurp();
    case "i":
      return synth.triggerAttackRelease("Bb5", 0.1),
        ringEightPurp();

    default:
      return;
  }
});
document.addEventListener("keyup", e => {
  switch (e.key) {
    case "z":
    case "x":
    case "c":
    case "v":
    case "b":
    case "n":
    case "m":
    case ",":
      
    case "a":
    case "s":
    case "d":
    case "f":
    case "g":
    case "h":
    case "j":
    case "k":
    
      
    case "q":
    case "w":
    case "e":
    case "r":
    case "t":
    case "y":
    case "u":
    case "i":
    
       removePurp(); 
  }
});