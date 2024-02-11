fetch('https://raw.githubusercontent.com/DenilNair/WeatherMap/main/district_json.json').
then(response => response.json())
.then(data =>{
  console.log(data.states.length);
})
.catch(error =>
console.error('Error loading JSOn file',error));
