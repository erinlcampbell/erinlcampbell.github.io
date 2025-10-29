




/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */
function showTable(data) {
  // TODO: Students implement this function
  // Requirements:
  // - Show data in a table format
  // - Include all important fields
  // - Make it easy to scan and compare
  // - Consider adding sorting functionality
  /*html*/ 
    console.log("show table entered");
    // Initialize sortable table buttons
    
  const cardHTML = data
    .map(
       /*html*/ 
      (camera) => `
                <tr>
                    <td>${camera.object_id}</td>
                    <td>${camera.street_address}</td>
                    <td>${camera.district}</td>
                    <td>${camera.school}</td>
                    <td>${camera.posted_speed}</td>
                    <td>${camera.enforcement}</td>
                </tr>
            `
    )
    .join("");
     /*html*/ 
  return `
                <h2 class="view-title"><img class="view_image" src="https://preview.redd.it/share-your-ideas-a-new-luigi-themed-race-course-for-the-v0-dy10mrt217cc1.jpeg?width=640&crop=smart&auto=webp&s=01a4f28bac8072a0584f15fedad3a883c0451048" alt="luigi"> Table View</h2>
                <div class="table-wrap"><table class="sortable">
                        <thead>
                            <tr>
                                <th class="num">
                                    <button>
                                        Camera Id
                                            <span aria-hidden="true"></span>
                                    </button>
                                </th>
                                <th class="no-sort">Street Address</th>
                                <th class="no-sort">Disctrict</th>
                                <th aria-sort="ascending">
                                    <button>
                                        School
                                            <span aria-hidden="true"></span>
                                    </button>
                                </th>
                                <th class="num">
                                    <button>
                                        Posted Speed
                                            <span aria-hidden="true"></span>
                                    </button>
                                </th>
                                
                                <th class="num">
                                    <button>
                                        Enforced Speed
                                            <span aria-hidden="true"></span>
                                    </button>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            ${cardHTML}
                        </tbody>
                    </table></div>
            `;
}

export default showTable;