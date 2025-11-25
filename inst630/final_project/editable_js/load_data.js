// ============================================
// DATA LOADING - Students modify this
// ============================================
/**
 * Load data from API - Students replace with their chosen endpoint
 */

function getSeasons(animalData){
  let spring = [];
  let summer = [];
  let fall = [];
  let winter = [];

  animalData.forEach(
    (animal) =>
          {
              if (animal["NH Mar"] !== "NA" || animal["NH Apr"] !== "NA" || animal["NH May"] !== "NA"){
                    spring.push(animal);
              }
              if (animal["NH Jun"] !== "NA" || animal["NH Jul"] !== "NA" || animal["NH Aug"] !== "NA"){
                    summer.push(animal);
              }
              if (animal["NH Sep"] !== "NA" || animal["NH Oct"] !== "NA" || animal["NH Nov"] !== "NA"){
                    fall.push(animal);
              }
              if (animal["NH Dec"] !== "NA" || animal["NH Jan"] !== "NA" || animal["NH Feb"] !== "NA"){
                    winter.push(animal);
              }
          }
  );

  const seasons = {
    "spring": spring,
    "summer": summer,
    "fall": fall,
    "winter": winter
  };
  return seasons;
}

async function loadData() {
  try {

    const responseFish = await fetch('fish.json');
    let dataFish = "";
    if (responseFish.ok){
        dataFish = await responseFish.json();
        console.log(dataFish);
        

    } else {
        alert("HTTP-Error: " + responseFish.status);
    }

    const responseBugs = await fetch('insects.json');
    let dataBugs = "";
    if (responseBugs.ok){
        dataBugs = await responseBugs.json();
        console.log(dataBugs);
        

    } else {
        alert("HTTP-Error: " + responseBugs.status);
    }

    const responseCreatures = await fetch('creatures.json');
    let dataCreatures = "";
    if (responseCreatures.ok){
        dataCreatures = await responseCreatures.json();
        console.log(dataCreatures);
        

    } else {
        alert("HTTP-Error: " + responseCreatures.status);
    }

    const fishSeasons = getSeasons(dataFish);
    const bugsSeasons = getSeasons(dataBugs);
    const creaturesSeasons = getSeasons(dataCreatures);

    const data = {
      "fish": fishSeasons,
      "bugs": bugsSeasons,
      "creatures": creaturesSeasons
    }
    console.log(data);
    console.log(data.bugs.summer);
    
    return data;

  } catch (error) {
    console.error("Failed to load data:", error);
    throw new Error("Could not load data from API");
  }
}

export default loadData