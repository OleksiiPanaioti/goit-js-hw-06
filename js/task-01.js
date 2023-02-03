const listWithItems = document.querySelectorAll('.item')

console.log('Number of categories:', listWithItems.length)


// const titleEl = document.querySelectorAll('.item > h2')

const listWithText = listWithItems.forEach(item => {
    const itemText = item.firstElementChild;
    const itemLi = item.querySelectorAll('li')
    console.log('category :', itemText.textContent);
    console.log('Elements:', itemLi.length);
});



 