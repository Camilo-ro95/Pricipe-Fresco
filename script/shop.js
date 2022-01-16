
const datos = 'http://localhost:3000/Products';

const cards = document.getElementById('cont');

const getData = async () =>{
    console.log(cards);
    const res = await fetch(datos);
    const data = await res.json();
    
        data.forEach(element => {
            const {id, nombre, imagen, imagen2, imagen3, precio} = element;
       
        cards.innerHTML += `
        <div id="card" style="margin: auto; width: 30%">
            <img class="d-block (display-block) mx-auto (margin-auto) " style="width: 60% " src="${imagen}" title="${nombre}" alt="">
            <h4 style="font-size: .9rem">${nombre}</h4>
            <a class="btn d-block (display-block) mx-auto (margin-auto)" href="./pages/${nombre}.html">Ver Detalle</a>
        </div>
    </div>
        `
    });
}

document.addEventListener('DOMContentLoaded', getData)