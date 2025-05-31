const element = document.querySelector('input');
const setInput = document.querySelector('.input-wrapper');
const itemContainer = document.querySelector('.items');

function makeList() {
    const product = element.value;
    const container = document.createElement('li');
    container.textContent = product;

    container.addEventListener('click', function() {
        container.classList.toggle('done')
    })

    if (product != '') {
        itemContainer.append(container);
    }
    element.value = '';

    return makeList;
}

setInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        makeList()
    }
})