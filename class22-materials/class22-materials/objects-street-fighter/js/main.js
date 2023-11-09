//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function fighter(name, health) {
    this.name = name
    this.health = health
    this.power = function() {
        console.log('Fire')
    }
    this.exp = function() {
        console.log(100 + this.health)
    }
    this.attack = function(){
        console.log('Kick')
    }
}

let zen = new fighter('Shirayuki', 80);
let Shirayuki = new fighter('Zen', 90);

console.log(zen)
console.log(Shirayuki)
