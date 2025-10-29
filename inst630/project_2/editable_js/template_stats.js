/**
 * STATS VIEW - STUDENTS IMPLEMENT
 * Show aggregate statistics and insights - good for understanding the big picture
 */
function showStats(data) {
  // TODO: Students implement this function
  // Requirements:
  // - Calculate meaningful statistics from the dataset
  // - Present insights visually
  // - Show distributions, averages, counts, etc.
  // - Help users understand patterns in the data
  /*html*/

  let speeds = data.map(function(camera){
    return (Number(camera.posted_speed))
  });

  let enforcements = data.map(function(camera){
    return camera.enforcement
  });

  let countOver30 = 0;
  let over30html = '<ul>';
    data.forEach(function(camera){
    if (camera.posted_speed >= 30){
        countOver30 +=1;
        over30html+=`<li>${camera.object_id}</li>`;
    } 
  });
  over30html+=`</li>`

const sum = speeds.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const districts_calc = [...new Set(data.map((item) => item.district))];

const districts = ["I", "II", "III", "IV", "V", "VI"]
  let districtHTML = "";
  districts.forEach(
    (district) => {
      console.log(district);
      
      let filteredList = data.filter(
        (camera) => {
          return camera.district === district
        }
      )
      let count = 0;
      filteredList.forEach(
        (camera) =>{
            if (camera.posted_speed >= 30){
                count+= 1;
            }
        }
      )

      
      districtHTML += `<div class="districtList restaurant-card"><h3>District ${district}:</h3> ${count}</div>`;
    }
  )


  console.log(speeds)
  return `
                <h2 class="view-title">📈 Statistics View</h2>
                <div class="stats-grid">
                    <div class="stat-card"> 
                        <div class="stat-label">Number of Districts</div>
                        <div class="stat-number">${districts_calc.length}</div>
                    </div>
                    <div class="stat-card"> 
                        <div class="stat-label">Minimum Posted Speed</div>
                        <div class="stat-number">${Math.min(...speeds)} mph</div>
                    </div>
                    <div class="stat-card"> 
                        <div class="stat-label">Maximum Posted Speed</div>
                        <div class="stat-number">${Math.max(...speeds)} mph</div>
                    </div>
                    <div class="stat-card"> 
                        <div class="stat-label">Average Posted Speed</div>
                        <div class="stat-number">${Math.trunc(sum/speeds.length)} mph</div>
                    </div>
                    <div class="stat-card"> 
                        <div class="stat-label">Number of Posted Speeds Over 30mph</div>
                        <div class="stat-number">${countOver30}</div>
                    </div>
                </div>    
                <div>${districtHTML}</div>
            `;
}

export default showStats