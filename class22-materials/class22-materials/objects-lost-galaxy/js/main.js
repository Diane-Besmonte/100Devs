//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.brand = 'Logitech'
mouse.color = 'black'
mouse.model = 'MX Ergo'
mouse.wireless = true

mouse.leftClick = function(){
    console.log('left click!')
}

mouse.rightClick = function(){
    console.log('right click!')
}

mouse.scroll = function(){
    console.log('Scroll!')
}

console.log(mouse)