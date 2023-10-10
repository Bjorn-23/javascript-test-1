
// let elementByQuery = document.querySelector('#demo')
//     console.log(elementByQuery.innerHTML = `<div class="box" style="background-color: yellow;">hello world</div>`)


// let elementById = document.getElementById('#demo')
// let elementByClassName = document.getElementsByClassName('demo')
// let getElementsByName = document.getElementsByName('info')
// let getElementsByTagName = document.getElementsByTagName('div')


// elementByClassName[0].innerText = "Björn"
// elementByClassName[1].innerText = "Andersson"


// console.log('blablabla')
// console.warn('do not!')
// console.error('Better run now....')


/*
ENKEL SWITCH

let value = 17

switch (true) {
    case value < 17:
        console.log("mindre än 17")
        break;
    
    case value == 17:
        console.log("17")
        break;

    case value > 17:
        console.log("större än 17")
        break;
}

*/

/* WHILE LOOPS BELOW

const members = [ 'hans', 'tommy', 'joakim']
members.push ('anki', 'björn', 'ted') LÄGGER TILL
console.log(members)
members.pop() TAR BORT SISTA

for each loop
for (let member of members)
    console.log(member)

members.forEach(member => {
    console.log(member)
})

for (let i = 0; i < 6; i++) {
    console.log(members[i])
}

console.log(members)

const members = ['hans', 'tommy', 'joakim', 'björn', 'ted', 'bla', 'bajs']
// console.log(members)

let i = 0;
while (i < 3) {
    console.log(members[i])
    i++
}


function greet(name) {
    console.log(`Hej och välkommnen ${name}`)
}



const greet = (name) => {
    console.log(`Hej och välkommnen ${name}`)
}

greet("Björn Andersson")

 

function calculateVat(amount, rate = 0.25) {
    let vat = amount * rate;
    console.log(vat)
}

function calculateVatAndReturn(amount, rate = 0.25) {
    return amount * rate
}



let vat = calculateVatAndReturn(54359)
console.log(vat)

*/


/*
HUR MAN SKRIVER HTML IN I ETT ELEMENT PÅ SIN SIDA MED JAVASCRIPT
----------------------------------------------------------------------------


// box one


let boxOne = document.getElementById('box-one')

boxOne.innerHTML = '<div style="background-color: red; color: yellow;">Björn Andersson</div>'
boxOne.innerHTML += '<div style="background-color: green; color: orange;">Björn Andersson</div>'

// box two

let boxTwo = document.getElementById('box-two')

boxTwo.innerHTML = 'Björn är bäst'
*/

let getById = document.getElementById('box-one')
let className = document.getElementsByClassName('box')
let getByName = document.getElementsByName('info')
let getByTagName = document.getElementsByTagName('div')
let getByQuery = document.querySelectorAll('.box')
    console.log(getById)

// className[0].innerText = 'Vänster'
// className[1].innerText = 'Höger'

// getByName[0].innerText = 'test'
// getByName[1].innerText = 'test 1'

// getByTagName[0].innerText = 'test 3'
// getByTagName[1].innerText = 'test två'
// getByTagName[2].innerText = 'test två'



// FOR LOOP

// for (let element of getByName) {
//     element.innerText = 'Hejsan'
// }

// getByQuery[0].innerText = 'test'
// getByQuery[1].innerText = 'test'
// getByQuery[2].innerText = 'test'

for (let element of getByQuery) {
    element.innerText = 'test5'
}


getById.innerHTML = `<div style=" padding: 50px; ">padding</div>`