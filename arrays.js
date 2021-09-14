//solve problems with arrays 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const crazyArray = Array.from(Array(15).keys(), (x)=>(x * 100) / 32 + 79 % 20)
//console.log(crazyArray)

const moreCrazy = () => crazyArray.forEach((e)=>{
    crazyArray.push(e * 3 + 45 /3)
})

moreCrazy()
moreCrazy()
moreCrazy() 

////console.log(crazyArray)

crazyArray.map((x,i)=>{
    if(i % 2 === 0){
        crazyArray.push(Math.trunc(x))
    }
})

//console.log(crazyArray)

crazyArray.sort()

//console.log(crazyArray)

crazyArray.sort((a, b) => a - b)

//console.log(crazyArray)

module.exports = crazyArray