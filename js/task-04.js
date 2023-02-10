const decrementBtn = document.querySelector('button[data-action="decrement"]');

console.log(decrementBtn);

const incrementBtn = document.querySelector('button[data-action="increment"]');

console.log(incrementBtn);

let blabla = document.querySelector('#value');

let counterValue = blabla.innerHTML;


console.log(counterValue);


decrementBtn.addEventListener('click', () => { 
    --counterValue;
    blabla.innerHTML = counterValue;
});

incrementBtn.addEventListener('click', () => { 
    ++counterValue;
    blabla.innerHTML = counterValue;
});

