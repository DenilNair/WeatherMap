fetch('district_json.json').
then(response => response.json())
.then(data =>{
  console.log(data.features.length);
})
.catch(error =>
console.error('Error loading JSOn file',error));
