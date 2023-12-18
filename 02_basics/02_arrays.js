const marvel_heros = ["thor", "ironman", "spiderman"]
const Dc_heros = ["superman", "flash", "batman"]

// const allHeros = marvel_heros.concat(Dc_heros)
// console.log(allHeros); 



// spred-method (kach ki tarah chote chote tukdo me bikhar jana)

const all_new_heros = [...marvel_heros, ...Dc_heros] // =>2 thi vadhre array hoy tyare aa spred method no use thay atle programmer most of time array ne add karva ano j use kare che

console.log(all_new_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // =>flat ni ander ketli depth sudhi solve karvu te lakhavu pan ahiya ek hack che infinity lakhi devanu
console.log(real_another_array); // =>[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray("harshil")); // =>false
console.log(Array.from("harshil")); // =>[h, a, r, s, h, i, l]




// interesting case

console.log(Array.from({name: "harshil"})); // =>[]  emptyarray

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // =>[100, 200, 300]