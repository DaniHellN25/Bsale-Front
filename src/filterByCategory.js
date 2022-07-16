//utilizamos el id dado en cada botón de las categorías para realizar la petición
//Usamos la const itemContainer del archivo allProducts para generar las cards

const filterByCategory = (id) => {
    fetch(`${api}products/${id}`)
    .then(response => response.json())
    .then(response => {
        itemContainer.innerHTML = ''
        response.forEach(item => {
            itemContainer.innerHTML += card(item) 
        });
    })
}