
var listofDistrict=[];

//method to load all district
async function loadDistrictJson(){
try{
let response= await fetch('https://raw.githubusercontent.com/DenilNair/WeatherMap/main/district_json.json');
let data=await response.json();
  listofDistrict=data.states;
  console.log(listofDistrict);
  return listofDistrict;
}catch(error){
  console.log('Error Fetching data ',error);
  throw error;
}
}
//get all district 
(async () =>{
  try{
    //const districtList=await loadDistrictJson();

  loadData();
}
catch (error) {
  console.error("There was a problem fetching data : ", error);
}
})();
var DistrictWiseTempMap={};
var globalVariable="Denil";
//get weather info based on district list
function loadData() {
  var temp = "";
  var location = "";
 
          
   (async () => {
              try {
                const responsePromise = getDistrictWiseTemp();
                responsePromise
                  .then((responseData) => {
                    for(i=0;i<responseData.length;i++){
                      DistrictWiseTempMap[responseData[i].Location]=[responseData[i].Temperature,responseData[i].tempcolor];
                    }
                    console.log("hashmap value ",DistrictWiseTempMap);
                   
                  })
                  .catch((error) => {
                    console.error("There was a problem fetching data ", error);
                  });
              } catch (error) {
                console.error("There was a problem fetching data : ", error);
              }
            })();
          
  
}

async function getDistrictWiseTemp(){
  const apiUrl ="http://localhost:3000/api/getDistrictListJson";

  const body = {};
  

  
  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(apiUrl);
  return fetch(apiUrl, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network not responsding");
      }
      //console.log("response json",response.json())
      return response.json();
    })
    .catch((error) => {
      console.error("Error occurred ", error);
    });
}

async function updateDistrictWiseTemp(){
  const url ="localhost:3000/api/updatemaptemperature";
}

async function updateTempOfParticularDistrict(districtName,temp){
  const url ="localhost:3000/api/updatemaptemperature";
  
  const apiUrl ="http://localhost:3000/api/updatemaptemperature";

  const body = 
    {"temp":temp,
"district":districtName}
  ;
  

  
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(apiUrl);
  return fetch(apiUrl, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network not responsding");
      }
      //console.log("response json",response.json())
      return response.json();
    })
    .catch((error) => {
      console.error("Error occurred ", error);
    });
}

//async function getListOfDistrict(){}
//weather api
async function callWeatherapi(place) {
  const url = "http://api.weatherapi.com/v1/current.json";

  const body = {};
  const apiKey = "1d5279c0e48c4dd4a4e101603241002";

  const queryParams = {
    key: apiKey,
    q: place,
  };

  const queryString = Object.keys(queryParams)
    .map(
      (key) =>
        encodeURIComponent(key) +
        "=" +
        encodeURIComponent(queryParams[key])
    )
    .join("&");
  console.log(queryString);
  const apiUrl = url + "?" + queryString;

  const fetchOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  console.log(apiUrl);
  return fetch(apiUrl, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network not responsding");
      }
      //console.log("response json",response.json())
      return response.json();
    })
    .catch((error) => {
      console.error("Error occurred ", error);
    });
}


// fetch weather api

 
