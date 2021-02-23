const form = document.querySelector("#signinform");

const creditCard = document.querySelector('#cc');

const veggies = document.getElementById('veggie')

const formData = {};

creditCard.addEventListener('input', (e) => {
    formData['cc'] = e.target.value;
})

veggies.addEventListener('input', (e) => {
    formData['veggie'] = e.target.value;
})

// writing multiple eventListeners
[creditCard,]

form.addEventListener('submit', (e) => {
    console.log('cc', creditCard.value)
    e.preventDefault();
    // prevent the default, and then on submit we can get all the information from all of the different paths
})