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