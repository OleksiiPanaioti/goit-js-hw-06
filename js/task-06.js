const form = document.querySelector('#validation-input');


form.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    const formElements = Number(event.currentTarget.value.length);

    if (formElements === Number(form.dataset.length)) {
        form.classList.remove('invalid')
        form.classList.add('valid')

    } else { form.classList.add('invalid') }

};
