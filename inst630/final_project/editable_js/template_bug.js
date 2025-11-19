




/**
 * TABLE VIEW - STUDENTS IMPLEMENT
 * Display data in sortable rows - good for scanning specific information
 */
function showBugs(data) {
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
                test
            `
    )
    .join("");
     /*html*/ 
  return `
                <h2 class="view-title"><img class="view_image" src="https://preview.redd.it/share-your-ideas-a-new-luigi-themed-race-course-for-the-v0-dy10mrt217cc1.jpeg?width=640&crop=smart&auto=webp&s=01a4f28bac8072a0584f15fedad3a883c0451048" alt="luigi"> Table View</h2>
                
                ${cardHTML}
                       
            `;
}

export default showBugs;