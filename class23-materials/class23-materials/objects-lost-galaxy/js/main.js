//Create a dog object that has four properties and three methods
let dog = {
    name: 'Suzy',
    age: 2,
    color: 'white',
    breed: 'jack russell terrier',
    sit: function() {
        return `${this.name} will sit`
    },
    bark: function() {
        return `Aw Aw Aw`
    },
    play: function() {
        return `${this.name} Play Dead!`
    }
}

console.log(dog.sit())