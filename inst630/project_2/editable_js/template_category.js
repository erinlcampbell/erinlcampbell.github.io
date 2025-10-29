/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories - good for understanding relationships and patterns
 */
function showCategories(data) {
  // TODO: Students implement this function
  // Requirements:
  // - Group data by a meaningful category (cuisine, neighborhood, price, etc.)
  // - Show items within each group
  // - Make relationships between groups clear
  // - Consider showing group statistics
  /*html*/
  //const districts = [...new Set(data.map((item) => item.district))];

  const districts = ["I", "II", "III", "IV", "V", "VI"]
  let districtHTML = ``;
  districts.forEach(
    (district) => {
      console.log(district);
      let distListItemHtml = `<div class="category-items">`;
      let filteredList = data.filter(
        (camera) => {
          return camera.district === district
        }
      )

      filteredList.forEach(
        (camera) =>{
          distListItemHtml += `<div class="category-item"><strong>${camera.object_id}</strong>  ${camera.school}</div>`;
        }
      )

      distListItemHtml +=`</div>`
      districtHTML += `<div class="category-section"><div class="category-header">District ${district}:</div> ${distListItemHtml}</div>`;
    }
  )

  const cities = [...new Set(data.map((item) => item.location.latitude))];
  console.log(cities);


  return `
                <h2 class="view-title"><img class="view_image" src="https://w0.peakpx.com/wallpaper/700/667/HD-wallpaper-peach-mario-kart-wii-bike-pink.jpg" alt="peach"> Category View</h2>
                <h1> Cameras by District </h1>
                <div class="districtCategory card-grid">${districtHTML}</div>
            `;
}

export default showCategories;