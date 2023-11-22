//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHawkCharacter(name, stance, sponsor, move) {
    this.characterName = name
    this.stance = stance
    this.sponsor = sponsor
    this.specialMove = move
    this.flip = function() {
        console.log(`Kickflip!`)
    }
    this.taunt = function() {
        console.log(`Don't make me use my ${this.specialMove}`)
    }
    this.grab = function() {
        console.log('Melon Grab!')
    }
}

let kareenCampbell = new TonyHawkCharacter('Kareem', 'Goofy', 'Element', 'Ghetto Bird');
console.log(kareenCampbell)