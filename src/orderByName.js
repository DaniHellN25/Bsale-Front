const ASC = document.getElementById('ASC')
const DESC = document.getElementById('DESC')
 
//Usamos la const itemContainer del archivo allProducts para generar las cards
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

//añadimos el evento click a cada botón para ejecutar la acción que corresponda
ASC.addEventListener('click', orderByNameAsc)
DESC.addEventListener('click', orderByNameDesc)