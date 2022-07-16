//Constantes para añadir los elementos de cards
//y los botones de filtro por categoría
const itemContainer = document.getElementById("cardContainer");
const categoriesContainer = document.getElementById("categories");


//URL de la API
const api = "https://bsale-store-d.herokuapp.com/";
// const api = "http://localhost:3001/";

//Estructura que tendrá la card de cada item
const card = (item) => {
  return `
    <div   class="col s8 m4 l4">
    <div  class="card medium hoverable">
      <div  class="card-image">
        <img  src="${item.image}">
        
      </div>
      <div  class="card-content center-align red">
        <p><i class="material-icons col s1 m1 l1">attach_money</i></p>
        <p style="font-weight: bold" class="col s1 m1 l1 left">${item.price}</p>
        ${
          item.discount > 0
            ? `<p><i class="material-icons col s1 m1 l1 offset-s2 offset-m2 offset-l2">money_off</i></p> <p style="font-weight: bold; font-size: 2rem" class="col s3 m3 l3 left">${item.priceWithDiscount}</p>`
            : ""
        }
      </div>
      <div  class="card-action left">
        <a href="#"><i class="material-icons">add_shopping_cart</i></a>
        <span style="font-size: 1rem; font-weight: bold" class="card-title blue-text  right">${
          item.name
        }</span>
      </div>
    </div>
  </div>
    `;
};



//Petición de todos los item a la API

const getAllItems = () => {
  fetch(api + "products")
    .then((response) => response.json())
    .then((response) => {
      itemContainer.innerHTML = "";
      //Array para controlar que secciones ya se crearon 
      let section = [];
      response.forEach((item) => {
        if (!section.includes(item.category)) {
          //Creamos la división
          itemContainer.innerHTML += 
          `<section class="section center">
                <button class="myBtnFilter col s8 m8 l8 offset-s2 offset-m2 offset-l2 btn left red">${item.category}</button>
          </section>`;

          section.push(item.category);
        }
        //Creamos las cards
        itemContainer.innerHTML += card(item);
      });
    })
    .catch((error) => console.error(error));
};


//Petición para tener un array de las categorías disponibles
const getAllCategories = () => {
  fetch(`${api}categories`)
    .then((response) => response.json())
    .then((response) => {
      response.forEach((category) => {
        //generamos los botones
        categoriesContainer.innerHTML += `<button id="${category.id}" class="myBtn col s5 m3 l3 btn red" onClick="filterByCategory(${category.id})">${category.name}</button>`;
      });
    })
    .catch((error) => console.error(error));
};


//Este evento nos permite cargar las cards y los botones al momento que el usuario ingresa a la página y se haya cargado el DOM
document.addEventListener("loadstart", getAllItems());
document.addEventListener("loadstart", getAllCategories());

const form = document.getElementById("searchBar");
const query = document.querySelector("input");

form.onsubmit = (e) => {
  e.preventDefault();
  fetch(`${api}products`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
      mode: "cors"
    },
    body: JSON.stringify({
      name: query.value,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      itemContainer.innerHMTL = "";
      if (response.msg) {
        itemContainer.innerHTML = `<h1>No existe el producto</h1>`;
      } else {
        itemContainer.innerHTML = "";
        response.forEach((item) => {
          itemContainer.innerHTML += card(item);
        });
      }
    })
    .catch((error) => console.error(error));
    query.value = ''
};
