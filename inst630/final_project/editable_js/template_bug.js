




/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */
function showBugs(data) {
  const bugsSpringHTML = data.bugs.spring
    .map(
       /*html*/ 
      (bug) => `
                <div class="animalObject">
                  <div class="catchphrase">${bug["Catch phrase"]}</div>
                  <img class="animalImage" src="${bug.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${bug.Name}</h3>
                    <h5 class="bells">Bells: ${bug.Sell}</h5>
                    <h5 class="location">Location: ${bug["Where/How"]}</h5>
                    <h5 class="weather">Weather: ${bug["Weather"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");

    const bugsSummerHTML = data.bugs.summer
    .map(
       /*html*/ 
      (bug) => `
                <div class="animalObject">
                  <div class="catchphrase">${bug["Catch phrase"]}</div>
                  <img class="animalImage" src="${bug.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${bug.Name}</h3>
                    <h5 class="bells">Bells: ${bug.Sell}</h5>
                    <h5 class="location">Location: ${bug["Where/How"]}</h5>
                    <h5 class="weather">Weather: ${bug["Weather"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");

    const bugsFallHTML = data.bugs.fall
    .map(
       /*html*/ 
      (bug) => `
                <div class="animalObject">
                  <div class="catchphrase">${bug["Catch phrase"]}</div>
                  <img class="animalImage" src="${bug.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${bug.Name}</h3>
                    <h5 class="bells">Bells: ${bug.Sell}</h5>
                    <h5 class="location">Location: ${bug["Where/How"]}</h5>
                    <h5 class="weather">Weather: ${bug["Weather"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");

    const bugsWinterHTML = data.bugs.winter
    .map(
       /*html*/ 
      (bug) => `
                <div class="animalObject">
                  <div class="catchphrase">${bug["Catch phrase"]}</div>
                  <img class="animalImage" src="${bug.Image_Url}" alt="">
                  <div class="description">
                    <h3 class="animalName">${bug.Name}</h3>
                    <h5 class="bells">Bells: ${bug.Sell}</h5>
                    <h5 class="location">Location: ${bug["Where/How"]}</h5>
                    <h5 class="weather">Weather: ${bug["Weather"]}</h5>
                  </div>
                </div>
            `
    )
    .join("");
     /*html*/ 
  return `
                <div class="scrollerContainer">
                  <div class="season spring bugs">
                     <div class="seasonTitle"><img class="seasonIcon" src="img/flower.png" alt=""> Spring <img class="seasonIcon" src="img/flower.png" alt=""></div>
                    ${bugsSpringHTML}
                  </div>
                  <div class="season summer bugs">
                    <div class="seasonTitle"><img class="seasonIcon" src="img/shell.png" alt=""> Summer <img class="seasonIcon" src="img/shell.png" alt=""></div>
                    ${bugsSummerHTML}
                  </div>
                  <div class="season fall bugs">
                     <div class="seasonTitle"><img class="seasonIcon" src="img/mushroom.png" alt=""> Fall <img class="seasonIcon" src="img/mushroom.png" alt=""></div>
                    ${bugsFallHTML}
                  </div>
                  <div class="season winter bugs">
                     <div class="seasonTitle"><img class="seasonIcon" src="img/snowflake.png" alt=""> Winter <img class="seasonIcon" src="img/snowflake.png" alt=""></div>
                    ${bugsWinterHTML}
                  </div>
                </div>
            `;
}

export default showBugs;