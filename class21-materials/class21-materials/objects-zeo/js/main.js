//Create a stopwatch object that has four properties and three methods
const stopwatch = {}

stopwatch.color = 'blue'
stopwatch.shape = 'round'
stopwatch.brand = 'nike'
stopwatch.model = 'Nike+ SportWatch GPS'

stopwatch.start = function() {
    console.log('Starting...')
}

stopwatch.stop = function() {
    console.log('Stopping...')
}

stopwatch.sayBrand = function() {
    console.log(`The brand of this stopwatch is ${stopwatch.brand}`)
}
console.log(stopwatch.color, stopwatch.brand)