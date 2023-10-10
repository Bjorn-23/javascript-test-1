/*
const boxOne = document.querySelector('#box-one')


// boxOne.style.backgroundColor = 'red'
boxOne.style.border = '5px solid lightgrey'
boxOne.style.color = '#fff';
boxOne.style.background = 'linear-gradient(to bottom right, red, blue, grey, black)';

*/

/*
const boxes = document.querySelectorAll('.box')
    
boxes.forEach(element => {
    element.style.border = '5px solidlightgrey '
    element.style.color = '#fff';
    element.style.background = 'linear-gradient(to bottom right, red, blue, grey, black)';
    element.style.padding = '20px'
})
*/


// boxOne.style.backgroundColor = 'red'
/*
boxes[0].style.border = '5px solidlightgrey '
boxes[0].style.color = '#fff';
boxes[0].style.background = 'linear-gradient(to bottom right, red, blue, grey, black)';
*/

// const boxOne = document.querySelector('#box-one')
// const boxTwo = document.querySelector('#box-two')

/*

function changeState(elementName, state) {
    const element = document.querySelector(elementName)
    const name = element.querySelector('.name')
    const status = element.querySelector('.status')

    if (state) {
       element.classList.add('active')
       element.classList.remove('inactive')
       status.innerText = `${name.innerText} är aktiv`
    }
    else {
        element.classList.add('inactive')
        element.classList.remove('active')
        status.innerText = `${name.innerText} är inaktiv`
    }
}

changeState('#box-one', true)
changeState('#box-two', false)
// boxOne.classList.add('active')
// boxTwo.classList.add('inactive')

*/

/*
const clearBtn = document.querySelector('#btn-clear')

clearBtn.addEventListener('click', (e) => {
    main.innerHTML = ''

})  



const button = document.querySelector('#btn-main')

button.addEventListener('click', (e) => {
 
    for  (let user of users) {

        main.innerHTML +=
        `
            <div class="${user.isActive ? "active": "inactive"}">
            <p>${user.firstName} ${user.lastName}</p>
            <div>${user.isActive ? "Aktiv": "Inaktiv"}</div>
        `
    }

})




// button.innerHTML = '

console.log(users)

for  (let user of users) {

    main.innerHTML +=
        `
        <div class="${user.isActive ? "active": "inactive"}">
        <p>${user.firstName} ${user.lastName}</p>
        <div>${user.isActive ? "Aktiv": "Inaktiv"}</div>
        `

   if (user.isActive) {
        main.innerHTML +=
        `
            <div class="active">
                <p>${user.firstName} ${user.lastName}</p>
                <p>aktiv</p>
            </div>
        `
   }
   else
        main.innerHTML +=
            `
                <div class="inactive">
                    <p>${user.firstName} ${user.lastName}</p>
                    >p>aktiv</p>
                </div>
            `
    

}
*/

// console.log(`${user.firstName} ${user.lastName} ${user.state} ${user.isActive}`)

/*
 main.innerHTML +=
`
<div>
<p>${user.firstName} ${user.lastName}</p>
<p>${user.state} ${user.isActive}</p>
</div>
`
*/



const main = document.querySelector('main')
const users = [
    {
        firstName: 'Björn',
        lastName: 'Andersson',
        isActive: false
    },
    {
        firstName: 'Aimee',
        lastName: 'Andersson',
        isActive: true
    },
]

function showList() {
    clearList()

    for  (let user of users) {

        main.innerHTML +=
        `
            <div class="${user.isActive ? "active": "inactive"}">
            <p>${user.firstName} ${user.lastName}</p>
            <div>${user.isActive ? "Aktiv": "Inaktiv"}</div>
        `
    }
}

function clearList() {
    main.innerHTML = ''
}
