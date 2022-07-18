# Bsale Store webpage

### LINK: https://bsale-store-d.vercel.app/#


---

### Tecnologías:
#### Front-end:
<li>Javascript(vanilla)</li>
<li>HTML5</li>
<li>CSS3</li>
<li>MaterializeCSS</li>

---

### Funcionalidades y características :

<li>Busqueda de producto por nombre</li>

<li>División por categoría en sección principal</li>

<li>Filtrado por categorías y orden alfabético</li>

### **Datos importantes de la Bsale Store webpage**
**<li>Esta construida con JS(Vainilla), HTML5, CSS3 y Materialize</li>**

**<li>Se hizo uso de los componentes proporcionados por Materialize para seguir los lineamientos de Material Design</li>**


**<li>Las peticiones realizadas al back se hicieron mediante la API Fetch(que ya se encuentra integrada a JS)</li>**

**<li>Los datos del back son recibidos y se crean elementos HTML, desde los archivos JS, que contendrán la información recibida</li>**

**<li>Las funciones para mostrar todos los productos y los [botones de filtro de categorías](#la-siguiente-sección-es-para-buscar-productos-según-se-categoría) se llaman cuando se carga el DOM para mostrar los datos recibidos de la API sin necesidad de que el cliente haga manualmente la petición. Esto se logra añadiendo el event listener "loadstart" al documento(Esto sucede en el archivo allProducts.js en las líneas 85-86)</li>**

**<li>Para realizar pruebas locales(en conjunto con pruebas locales del back) se deberá comentar la const api en la linea 8 del archivo allProducts.js y descomentar la línea 9 </li>**

**<li>Para prevenir un reload de la página se hizo uso del método "preventDefault" cuando se envía la información  del submit</li>**

**<li>Los scripts de JS en el archivo index.HTML se pusieron al final del body para mejorar el performace de la página y por buenas prácticas</li>**

---


## Imagenes de la página

## SearchBar y botones de filtrado

### La página cuenta con una sección para el navBar y la searchBar (que tiene una posición asignada como "fixed") para que el usuario pueda buscar productos por su nombre sin importar que tanto baje en la página .

### Justo debajo se encuentran los botones para filtrar por orden alfabético y uno para volver a traer todos los productos.

### La siguiente sección es para buscar productos según se categoría.

![image](resources/Ejemplo%20Navbar%20con%20filtro%20alfab%C3%A9tico%2C%20searchbar%20y%20botones%20de%20filtro%20por%20categor%C3%ADa.png.png)

---

## Cards y secciones

### Las card de los productos están dividas por secciones (utilizando el sistema de grid brindado por MaterializeCSS) de acuerdo a su categoría. Los datos de las cards que se muestran son  su imagen, su precio, su precio con descuento(en caso de que exista), un botón para añadir al carrito de compra y el nombre del producto.
 
![image](resources/Ejemplo%20Cards%20y%20secciones.png)

---

## Footer y botón "Subir"

### Por último se cuenta con un footer con el botón "Subir" para regresar al inicio de la página.

![image](resources/Footer%20con%20bot%C3%B3n%20para%20ir%20al%20inicio.png)
