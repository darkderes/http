import { subirImagen } from './http-provider.js';
const body = document.body;
let inputFile,imgFoto;

const crearInputFileHtml = () => {
    const html = `
    <h1 class="mt-5">Subir archivos</h1>
    <hr>
    <label>Seleccione una foto</label>
    <input type="file" accept="image/png, image/jpeg" />
    <br>
    <img id="foto" class="img-thumbnail" src="">
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

export const init = () => {
    crearInputFileHtml();

    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        // console.log(file);
        // console.log(file.type);
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            imgFoto.src = reader.result;
        }
        subirImagen(file).then(url => console.log(url));
    });
}