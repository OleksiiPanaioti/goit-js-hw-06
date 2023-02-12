const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text')




// const refs = {
//     minEl: document.querySelector('input[min]'),
//     maxEL: document.querySelector('input[max]'),
// }


inputEl.addEventListener('input', onSlideTextChange);

function onSlideTextChange(event) {
    textEl.style.fontSize = event.currentTarget.value + 'px'
}