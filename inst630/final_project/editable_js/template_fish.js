
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

    const fishFallHTML = data.fish.fall
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

    const fishWinterHTML = data.fish.winter
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
                    <h5 class="difficulty">Catch Difficulty: ${fish["Catch Difficulty"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");
     /*html*/ 
  return `
                <div class="scrollerContainer">
                  <div class="season spring fish">
                     <div class="seasonTitle"><img class="seasonIcon" src="img/flower.png" alt=""> Spring <img class="seasonIcon" src="img/flower.png" alt=""></div>
                    ${fishSpringHTML}
                  </div>
                  <div class="season summer fish">
                    <div class="seasonTitle"><img class="seasonIcon" src="img/shell.png" alt=""> Summer <img class="seasonIcon" src="img/shell.png" alt=""></div>
                    ${fishSummerHTML}
                  </div>
                  <div class="season fall fish">
                     <div class="seasonTitle"><img class="seasonIcon" src="img/mushroom.png" alt=""> Fall <img class="seasonIcon" src="img/mushroom.png" alt=""></div>
                    ${fishFallHTML}
                  </div>
                  <div class="season winter fish">
                     <div class="seasonTitle"><img class="seasonIcon" src="img/snowflake.png" alt=""> Winter <img class="seasonIcon" src="img/snowflake.png" alt=""></div>
                    ${fishWinterHTML}
                  </div>
                </div>
            `;
}

export default showFish;