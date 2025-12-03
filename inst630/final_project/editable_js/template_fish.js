
/**
 * CARD VIEW - PROVIDED AS EXAMPLE
 * Display data as browsable cards - good for comparing individual items
 */
function showFish(data) {
  const fishSpringHTML = data.fish.spring
    .map(
       /*html*/ 
      (fish) => `
                <div class="animalObject">
                  <div class="catchphrase">${fish["Catch phrase"]}</div>
                  <img class="animalImage" src="${fish.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${fish.Name}</h3>
                    <h5 class="bells">Bells: ${fish.Sell}</h5>
                    <h5 class="location">Location: ${fish["Where/How"]}</h5>
                    <h5 class="shadow">Shadow: ${fish.Shadow}</h5>
                    <h5 class="difficulty">Catch Difficulty: ${fish["Catch Difficulty"]}
                  </div>
                </div>
            `
    )
    .join("");

    const fishSummerHTML = data.fish.summer
    .map(
       /*html*/ 
      (fish) => `
                <div class="animalObject">
                  <img class="animalImage" src="${fish.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${fish.Name}</h3>
                    <h5 class="bells">Bells: ${fish.Sell}</h5>
                    <h5 class="location">Location: ${fish["Where/How"]}</h5>
                    <h5 class="shadow">Shadow: ${fish.Shadow}</h5>
                    <h5 class="difficulty">Catch Difficulty: ${fish["Catch Difficulty"]}
                  </div>
                </div>
            `
    )
    .join("");

    const fishFallHTML = data.fish.fall
    .map(
       /*html*/ 
      (fish) => `
                <div class="animalObject">
                  <img class="animalImage" src="${fish.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${fish.Name}</h3>
                    <h5 class="bells">Bells: ${fish.Sell}</h5>
                    <h5 class="location">Location: ${fish["Where/How"]}</h5>
                    <h5 class="shadow">Shadow: ${fish.Shadow}</h5>
                    <h5 class="difficulty">Catch Difficulty: ${fish["Catch Difficulty"]}
                  </div>
                </div>
            `
    )
    .join("");

    const fishWinterHTML = data.fish.winter
    .map(
       /*html*/ 
      (fish) => `
                <div class="animalObject">
                  
                  <img class="animalImage" src="${fish.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${fish.Name}</h3>
                    <h5 class="bells">Bells: ${fish.Sell}</h5>
                    <h5 class="location">Location: ${fish["Where/How"]}</h5>
                    <h5 class="shadow">Shadow: ${fish.Shadow}</h5>
                    <h5 class="difficulty">Catch Difficulty: ${fish["Catch Difficulty"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");
     /*html*/ 
  return `
                <div class="scrollerContainer">
                  <div class="season spring">
                    <h2>Spring</h2>
                    ${fishSpringHTML}
                  </div>
                  <div class="season summer">
                    <h2>Summer</h2>
                    ${fishSummerHTML}
                  </div>
                  <div class="season fall">
                    <h2>Fall</h2>
                    ${fishFallHTML}
                  </div>
                  <div class="season winter">
                    <h2>Winter</h2>
                    ${fishWinterHTML}
                  </div>
                </div>
            `;
}

export default showFish;