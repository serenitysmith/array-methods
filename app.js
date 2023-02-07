var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
 //removed lettuce from vegtables ie last item
vegetables.splice(3,1) 
    //console.log(vegetables)

//removed bannana from array using .shift ie first item
fruit.splice(0,1)
//console.log(fruit)

////found the index ie number where orange was
var index = fruit.indexOf("orange")
//console.log(index)

//pushed 1 to the end of the frut array
fruit.push(1)
//console.log(fruit)

//found the length of veg array
//console.log(vegetables.length)

//pushed 4 into vegtable array
vegetables.push(3)
//console.log(vegetables)

//joined the two arrays
var newArr = fruit.concat(vegetables)
//console.log(newArr)

//removed carrot and tomato from array with splce starting at index 4 removing two items
var removed = newArr.splice(4, 2)
//console.log(newArr)

//reversed my  new array
newArr.reverse();
//console.log(newArr)

var reverse = newArr.join("")
console.log(newArr)
//push