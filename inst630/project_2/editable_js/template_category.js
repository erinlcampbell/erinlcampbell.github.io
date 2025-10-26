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
  let districtHTML = "";
  districts.forEach(
    (district) => {
      console.log(district);
      let distListItemHtml = `<ul>`;
      let filteredList = data.filter(
        (camera) => {
          return camera.district === district
        }
      )

      filteredList.forEach(
        (camera) =>{
          distListItemHtml += `<li><strong>${camera.object_id}</strong> - ${camera.school}</li>`;
        }
      )

      distListItemHtml +=`</ul>`
      districtHTML += `<div class="districtList restaurant-card"><h3>District ${district}:</h3> ${distListItemHtml}</div>`;
    }
  )

  const cities = [...new Set(data.map((item) => item.location.latitude))];
  console.log(cities);


  return `
                <h2 class="view-title">📂 Category View</h2>
                <h1> Cameras by District </h1>
                <div class="districtCategory card-grid">${districtHTML}</div>
            `;
}

export default showCategories;