const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';
// fetch(jokeUrl).then( resp => resp.json() )
// .then( ({id, value}) => {
//     console.log(id,value);
// });

const cloudPreset = 'c0bkzswm';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dbj8eedny/upload';

const obtenerChiste = async() => {
    try {
        const resp = await fetch(jokeUrl);
        if(!resp.ok) throw 'No se pudo realizar la petición';
        const {icon_url, id, value} = await resp.json();
        return {icon_url, id, value};
    } catch (err) {
        throw err;
    }
}
const obtenerUsuarios = async() => {
    const resp = await fetch(urlUsuarios);
    const {data: usuarios} = await resp.json();
    return usuarios;
}
const subirImagen = async(archivoSubir) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);
    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        return await resp.json();
    } catch (err) {
        throw err;
    }
}
export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
}