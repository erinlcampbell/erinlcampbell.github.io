
/**
 * CARD VIEW - PROVIDED AS EXAMPLE
 * Display data as browsable cards - good for comparing individual items
 */
function showFish(data) {
  const cardHTML = data
    .map(
       /*html*/ 
      (camera) => `
                <div class="restaurant-card">
                    test
                </div>
            `
    )
    .join("");
     /*html*/ 
  return `
                <h2 class="view-title"><img class="view_image" src="https://i.pinimg.com/736x/28/ae/e5/28aee52766b152950e62c543dc867df0.jpg" alt="mario"> Card View</h2>
                <div class="card-grid">
                    <img src="https://media.tenor.com/KXWh0Y-P9iEAAAAe/lakitu-mario-kart.png" alt="lakitu">
                    ${cardHTML}
                </div>
            `;
}

export default showFish;