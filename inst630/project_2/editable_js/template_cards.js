
/**
 * CARD VIEW - PROVIDED AS EXAMPLE
 * Display data as browsable cards - good for comparing individual items
 */
function showCards(data) {
  const cardHTML = data
    .map(
       /*html*/ 
      (camera) => `
                <div class="restaurant-card">
                    <h3><strong>Camera Id:</strong> ${camera.object_id}</h3>
                    <p><strong>Location:</strong> ${camera.street_address}</p>
                    <p><strong>District:</strong> ${
                      camera.district
                    }</p>
                     <p><strong>School Name:</strong> ${camera.school}</p>
                     <p>City: ${camera.location_1.latitude} </p>
                </div>
            `
    )
    .join("");
     /*html*/ 
  return `
                <h2 class="view-title">🃏 Card View</h2>
                <p class="view-description">Browse restaurants as individual cards - perfect for comparing options</p>
                <div class="card-grid">
                    ${cardHTML}
                </div>
            `;
}

export default showCards;