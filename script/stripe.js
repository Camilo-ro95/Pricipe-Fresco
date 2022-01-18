import { datos } from './shop.js'
import getDatos from './getData.js'

const container = document.querySelector('.cards1');
const container2 = document.querySelector('.cards2');
const container3 = document.querySelector('.cards3')
const opciones = document.querySelector('#otrosProd')


const getData = async () =>{
    const res = await fetch(datos + 2);
    const data = await res.json();
    
   let {id, nombre, imagen, imagen2, imagen3, precio} = data

   container.innerHTML = `
         <div class="column ">
                <div class="mt-2"style="width: 60%"><a href="#${imagen}"><img style="width: 100%" src="${imagen}" alt=""></a></div>
                <div class="mt-2" style="width: 60%"><a href="#${imagen2}"><img style="width: 100%" src="${imagen2}" alt=""></a></div>
                <div class="mt-2" style="width: 60%"><a href="#${imagen3}"><img style="width: 100%" src="${imagen3}" alt=""></a></div>
        </div>
   `
    container2.innerHTML = `
    <div id ="column2"class="column">
        <div class="mt-2"style="width: 90%"><img id="${imagen}" style="width: 100%" src="${imagen}" alt=""></div>
        <div class="mt-2" style="width: 90%"><img id="${imagen2}" style="width: 100%" src="${imagen2}" alt=""></div>
        <div class="mt-2" style="width: 90%"><img id="${imagen3}" style="width: 100%" src="${imagen3}" alt=""></div>
</div>
    `
    container3.innerHTML = `
    <div id="detalle"class="column position-fixed">
        <h2>${nombre}</h2>
        <h5>$ ${precio}</h5>
        <div id="cont-size">
        <p>Choose your size</p>
        <ul id="size">
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
        </ul>
        </div>
        <center>
        <a id="${id}" href="" class="btn btn-primary mt-3 w-50">Agregar al carrito</a>
        </center>
        <section class="mt-5">Let them know you’re 90s royalty with this official The Fresh Prince crown pattern sweater. Throw vintage vibes 
        that Uncle Phil would approve of. Featuring woven The Fresh Prince logo on chest. Navy crown print crew neck sweatshirt 
        with white ribbed collar and waist band. Cotton/Poly blend.</section>
        
    </div>
    `
    opciones.innerHTML = `
    <center>
    <a id="otros" href="../shop.html" class="btn">Ver mas productos</a>
    </center>
    `
    const btnDetail = document.querySelector('.btn-primary')
    container3.addEventListener('click', e => {
        print(btnDetail);
    })

}

const print = async btnDetail => {

    if (btnDetail.classList.contains('btn-primary')) {
        const idX = btnDetail.id
        const detalles = await getDatos(datos);

        const object = detalles.find(items => items.id === Number(idX));

        localStorage.setItem('Producto', JSON.stringify(object));
    }
    bringData();
}

const modal = document.querySelector('.modal-body')
const bringData = () => {
    const info = JSON.parse(localStorage.getItem('Producto'));

    const { id, nombre,imagen, imagen2, imagen3, precio} = info;
    console.log(info);
    modal.innerHTML += `
    <li>
    <div style="width: 20%"><img style="width: 100%" src="${imagen}" alt=""></div>
    <div><h5>${nombre}</h5><p>$${precio}</p></div>
    </li>
    <hr/>
    <p>Subtotal:$${precio}</p>
    `
}



document.addEventListener('DOMContentLoaded', getData)