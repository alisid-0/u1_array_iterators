// Array iterator methods

// forEach

const friends =[`ali`, `jenin`,`gabe`,`zayd`, `shoeb`]

friends.forEach((i)=> {
    console.log(`I have a friend named ${i.toUpperCase()}`)
})


//  map

const nums = [1,2,3]

const squared = nums.map((i)=> i * i)

console.log(squared) 

// filter

const numbers = [100, 2, 5, 42, 99]
const odds = numbers.filter((i) => i%2)

console.log(odds)

// find

const cars = [
    {color: `red`, make: `BMW`, year: 2001},
    {color: `green`, make: `RR`, year: 2021}
]


// reduce (acc, elem, idx)

const numArray = [25,6,7,35,500]

const sum = numArray.reduce((a, b) => a + b)

console.log(sum)

const votes = [`Yes`, `No`, `No`,`Yes`, `Yes`]

const tally = votes.reduce((a,b) => {
    a[b] = a[b] ? a[b] + 1 : 1
    return a
}, {})

console.log(tally)