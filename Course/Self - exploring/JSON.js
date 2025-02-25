// JSON examples
const activiteitJSON = '{"activity":"Learn Javascript","type":"education","participants":1,"price":0,"link":"","key":"3469378","accessibility":0.9}';
const activiteit = JSON.parse(activiteitJSON);

console.log("Huidige activiteit: " + activiteit.activity);
activiteit.activity = "Revise JavaScript";


const outputJSON = JSON.stringify(activiteit);
console.log(outputJSON);