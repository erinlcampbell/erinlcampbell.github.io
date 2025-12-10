import showFish from './editable_js/template_fish.js';
import showCreatures from './editable_js/template_sea_creature.js';
import showBugs from './editable_js/template_bug.js';
import initializeSortable from './editable_js/sortable_table.js';
import {
  animateSeasonsFish,
  animateSeasonsBugs,
  animateSeasonsCreatures,
  animateRolodex,
  animateTitleRolodex,
  animateWiggle,
  animateCatchphrase,
  animateDisplay,
  animateTitle
 } from './editable_js/animation.js';

import loadData from './editable_js/load_data.js';

// ============================================
// DISPLAY MANAGEMENT - PROVIDED
// ============================================

/**
 * Update the display with new content
 */
function updateDisplay(content) {
  document.getElementById("data-display").innerHTML = content;
}

/**
 * Update button states
 */
function updateButtonStates(activeView) {
  document.querySelectorAll(".view-button").forEach((button) => {
    button.classList.remove("active");
  });
  document.getElementById(`btn-${activeView}`).classList.add("active");
}

/**
 * Show loading state
 */
function showLoading() {
  updateDisplay('<div class="loading">Loading data from API...</div>');
}

/**
 * Show error state
 */
 /*html*/ 
function showError(message) {
  updateDisplay(`
                <div class="error">
                    <h3>Error Loading Data</h3>
                    <p>${message}</p>
                    <button onclick="location.reload()">Try Again</button>
                </div>
            `);
}

// ============================================
// APPLICATION INITIALIZATION - PROVIDED
// ============================================

/**
 * Main application function - handles data loading and button setup
 * This pattern always works - no timing issues!
 */
document.addEventListener("DOMContentLoaded", async () => {
  console.log("Starting application...");
  

  try {
    // Load data once
    showLoading();
    const data = await loadData();
    console.log(`Loaded ${data.length} items from API`);
   
    

    // Set up button event handlers - this pattern always works!
    document.getElementById("btn-fish").onclick = () => {
      animateDisplay(data);
      document.documentElement.scrollTop = 0;

      updateDisplay(showFish(data));
      animateSeasonsFish(data);
    
      document.querySelectorAll(".animalObject").forEach((animal) => {
        animateRolodex(data, animal);
      });
      document.querySelectorAll(".seasonTitle").forEach((title) => {
        animateTitleRolodex(data, title);
      });
      document.querySelectorAll(".animalImage").forEach((animalImage) => {
        animateWiggle(data, animalImage);
      });

      animateCatchphrase(data);
      updateButtonStates("fish");
    };

    document.getElementById("btn-bugs").onclick = () => {
      //animate fade in and out of display once new display is selected
      animateDisplay(data);
      document.documentElement.scrollTop = 0;
      updateDisplay(showBugs(data));
      animateSeasonsBugs(data);
      window.onload = function() {
        document.querySelectorAll(".animalObject").forEach((animal) => {
           animateRolodex(data, animal);
        });
        document.querySelectorAll(".seasonTitle").forEach((title) => {
          animateTitleRolodex(data, title);
        });
      };
      document.querySelectorAll(".animalImage").forEach((animalImage) => {
        animateWiggle(data, animalImage);
      });
      animateCatchphrase(data);

      updateButtonStates("bugs");
    };

    document.getElementById("btn-creatures").onclick = () => {
      //animate fade in and out of display once new display is selected
      animateDisplay(data);
      document.documentElement.scrollTop = 0;
      updateDisplay(showCreatures(data));
      
      animateSeasonsCreatures(data);

      document.querySelectorAll(".animalObject").forEach((animal) => {
         animateRolodex(data, animal);
      });
      document.querySelectorAll(".seasonTitle").forEach((title) => {
        animateTitleRolodex(data, title);
      });
      document.querySelectorAll(".animalImage").forEach((animalImage) => {
        animateWiggle(data, animalImage);
      });
      animateCatchphrase(data);

      updateButtonStates("creatures");
    };

    

    // Show initial view
    animateTitle(data);
    animateDisplay(data);
    updateDisplay(showFish(data));
    animateSeasonsFish(data);
    
    document.querySelectorAll(".animalObject").forEach((animal) => {
      animateRolodex(data, animal);
    });
    document.querySelectorAll(".seasonTitle").forEach((title) => {
      animateTitleRolodex(data, title);
    });
    document.querySelectorAll(".animalImage").forEach((animalImage) => {
      animateWiggle(data, animalImage);
    });
    animateCatchphrase(data);
    updateButtonStates("fish");

    console.log("Application ready!");
  } catch (error) {
    console.error("Application failed to start:", error);
    showError(error.message);
  }
});
