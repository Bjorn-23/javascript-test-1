
function showAlert() {
    const alertBox = document.querySelector('#alert-box')
    const hideButton = document.querySelector('#btn')

    hideButton.classList.add('hidden')
    alertBox.classList.remove('doNotShow')
    alertBox.classList.remove('hidden')
    alertBox.classList.add('show')

setTimeout(() => {
    hideButton.classList.remove('hidden')
    alertBox.classList.add('hidden')
    alertBox.classList.remove('show')
}, 5000)

}
