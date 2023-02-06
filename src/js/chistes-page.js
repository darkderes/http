import { obtenerChiste } from "./http-provider.js";
const body = document.body;
let btnOtro, olLista;

const crearChisteHtml = () => {
   
   const html = ` 
   <h1 class="mt-5">Chistes</h1>
    <hr>
     <button class="btn btn-primary">Nuevo chiste</button>
     <ol class="mt-2 list-group">
     </ol> 
     `;


const divChistes = document.createElement('div');
divChistes.innerHTML = html;

body.append( divChistes );

}

const eventos = () => {
    olLista = document.querySelector('ol');
    btnOtro = document.querySelector('button');
    btnOtro.addEventListener('click', async () => {
        btnOtro.disabled = true;
        dibujarChiste(await obtenerChiste());
        btnOtro.disabled = false;
    });
}
const dibujarChiste = (chiste) => {
    const olItem = document.createElement('li');
    olItem.innerHTML = `<b>${chiste.id}</b>: ${chiste.value}`;
    olItem.classList.add('list-group-item');
    olLista.append(olItem);
}
export const init = () => {
    crearChisteHtml();
    eventos();
    
}