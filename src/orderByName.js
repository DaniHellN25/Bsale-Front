const ASC = document.getElementById('ASC')
const DESC = document.getElementById('DESC')

const orderByNameAsc = () => {
    fetch(`${api}products/order/name?option=ASC`)
    .then(response => response.json())
    .then(response => {
        itemContainer.innerHTML = ''
        response.forEach(item => {
            itemContainer.innerHTML+= card(item)
        });
    }).catch(error => console.error(error))
}

    const orderByNameDesc = () => {
    fetch(`${api}products/order/name?option=DESC`)
    .then(response => response.json())
    .then(response => {
        itemContainer.innerHTML = ''
        response.forEach(item => {
            itemContainer.innerHTML+= card(item)
        });
    }).catch(error => console.error(error))
}

ASC.addEventListener('click', orderByNameAsc)
DESC.addEventListener('click', orderByNameDesc)