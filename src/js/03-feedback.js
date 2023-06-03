import storage from "./storag.js"
const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form')
const userInfo = {};

const infoFormFields = () => {
    const infoLS = storage.load('feedback-form-state')

    if (infoLS === undefined) {
        return
    }

    // console.log(infoLS);
    for (const key in infoLS) {
        formEl.elements[key].value = infoLS[key];
    }
}

infoFormFields()

const inputFormEl = event => {
    const infoEl = event.target
    const infoValue = infoEl.value
    const infoName = infoEl.name
    userInfo[infoName] = infoValue
    
    storage.save('feedback-form-state', userInfo)
}

formEl.addEventListener('input', throttle(inputFormEl, 500))

const onSubmit = event => {
    event.preventDefault()

    const infoEl = event.target
    const { email, message } = infoEl.elements

    if (email.value === "" || message.value === "") {
        return
    }

    infoEl.reset()
    localStorage.removeItem('feedback-form-state');
    console.log(userInfo);
}


formEl.addEventListener('submit', onSubmit)

