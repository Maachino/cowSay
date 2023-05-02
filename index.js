const info = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Bonjour, je suis ${info.name} du campus ${info.campus}!`,
    e: "oO",
    T: "U "
  })
);
