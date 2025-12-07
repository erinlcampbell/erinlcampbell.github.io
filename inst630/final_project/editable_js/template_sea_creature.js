function showCreatures(data) {
  const creaturesSpringHTML = data.creatures.spring
    .map(
       /*html*/ 
      (creature) => `
                <div class="animalObject">
                  <div class="catchphrase">${creature["Catch phrase"]}</div>
                  <img class="animalImage" src="${creature.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${creature.Name}</h3>
                    <h5 class="bells">Bells: ${creature.Sell}</h5>
                    <h5 class="shadow">Shadow: ${creature["Shadow"]}</h5>
                    <h5 class="speed">Speed: ${creature["Movement Speed"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");

    const creaturesSummerHTML = data.creatures.summer
    .map(
       /*html*/ 
      (creature) => `
                <div class="animalObject">
                  <div class="catchphrase">${creature["Catch phrase"]}</div>
                  <img class="animalImage" src="${creature.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${creature.Name}</h3>
                    <h5 class="bells">Bells: ${creature.Sell}</h5>
                    <h5 class="shadow">Shadow: ${creature["Shadow"]}</h5>
                    <h5 class="speed">Speed: ${creature["Movement Speed"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");

    const creaturesFallHTML = data.creatures.fall
    .map(
       /*html*/ 
      (creature) => `
                <div class="animalObject">
                  <div class="catchphrase">${creature["Catch phrase"]}</div>
                  <img class="animalImage" src="${creature.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${creature.Name}</h3>
                    <h5 class="bells">Bells: ${creature.Sell}</h5>
                    <h5 class="shadow">Shadow: ${creature["Shadow"]}</h5>
                    <h5 class="speed">Speed: ${creature["Movement Speed"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");

    const creaturesWinterHTML = data.creatures.winter
    .map(
       /*html*/ 
      (creature) => `
                <div class="animalObject">
                  <div class="catchphrase">${creature["Catch phrase"]}</div>
                  <img class="animalImage" src="${creature.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${creature.Name}</h3>
                    <h5 class="bells">Bells: ${creature.Sell}</h5>
                    <h5 class="shadow">Shadow: ${creature["Shadow"]}</h5>
                    <h5 class="speed">Speed: ${creature["Movement Speed"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");
     /*html*/ 
  return `
                <div class="scrollerContainer">
                  <div class="season spring creatures">
                     <div class="seasonTitle"><img class="seasonIcon" src="img/flower.png" alt=""> Spring <img class="seasonIcon" src="img/flower.png" alt=""></div>
                    ${creaturesSpringHTML}
                  </div>
                  <div class="season summer creatures">
                    <div class="seasonTitle"><img class="seasonIcon" src="img/shell.png" alt=""> Summer <img class="seasonIcon" src="img/shell.png" alt=""></div>
                    ${creaturesSummerHTML}
                  </div>
                  <div class="season fall creatures">
                     <div class="seasonTitle"><img class="seasonIcon" src="img/mushroom.png" alt=""> Fall <img class="seasonIcon" src="img/mushroom.png" alt=""></div>
                    ${creaturesFallHTML}
                  </div>
                  <div class="season winter creatures">
                     <div class="seasonTitle"><img class="seasonIcon" src="img/snowflake.png" alt=""> Winter <img class="seasonIcon" src="img/snowflake.png" alt=""></div>
                    ${creaturesWinterHTML}
                  </div>
                </div>
            `;
}

export default showCreatures;