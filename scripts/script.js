
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

