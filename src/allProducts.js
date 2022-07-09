const itemContainer = document.getElementById("cardContainer");
const categoriesContainer = document.getElementById("categories");

const api = "https://bsale-store-d.herokuapp.com/";
// const api = "http://localhost:3001/";

const card = (item) => {
  return `
    <div  class="col s8 m4 l4">
    <div style="border-radius: 10%" class="card medium hoverable">
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

const getAllItems = () => {
  fetch(api + "products")
    .then((response) => response.json())
    .then((response) => {
      itemContainer.innerHTML = "";
      let section = [];
      response.forEach((item) => {
        if (!section.includes(item.category)) {
          itemContainer.innerHTML += 
          `<section class="section center">
                <button class="myBtnFilter col s8 m8 l8 offset-s2 offset-m2 offset-l2 btn left red">${item.category}</button>
          </section>`;

          section.push(item.category);
        }
        itemContainer.innerHTML += card(item);
      });
    })
    .catch((error) => console.error(error));
};

const getAllCategories = () => {
  fetch(`${api}categories`)
    .then((response) => response.json())
    .then((response) => {
      response.forEach((category) => {
        categoriesContainer.innerHTML += `<button id="${category.id}" class="myBtn col s5 m3 l3 btn red" onClick="filterByCategory(${category.id})">${category.name}</button>`;
      });
    })
    .catch((error) => console.error(error));
};

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
