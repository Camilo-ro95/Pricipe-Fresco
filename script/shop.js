
const datos = 'http://localhost:3000/Products';

const cards = document.getElementById('cont');

const getData = async () =>{
    console.log(cards);
    const res = await fetch(datos);
    const data = await res.json();
    
        data.forEach(element => {
            const {id, nombre, imagen, imagen2, imagen3, precio} = element;
       
        cards.innerHTML += `
        <div style="margin: auto; width: 18%">
            <img style="width: 60%" src="${imagen}" title="${nombre}" alt="">
            <h4>${nombre}</h4>
            <a class="btn " href="">Ver Detalle</a>
        </div>
    </div>
        `
    });
}

document.addEventListener('DOMContentLoaded', getData)