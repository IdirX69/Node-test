const object = require("./information");
console.log("Name: " + object.object.nom + "  Campus: " + object.object.campus);

var cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U",
  })
);
