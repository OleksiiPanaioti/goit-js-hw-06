
const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email;
    const password = formElements.password;

  if (email.value === "" || password.value === "") {
    return console.log("ти шо дикий??? треба заповнити всі поля!!!!");
  } else {  const formElResult = {
      email: email.value,
      password:  password.value ,
  }
         console.log(formElResult); 
  }


    
  event.currentTarget.reset();
}