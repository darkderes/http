const urlCrud = 'https://reqres.in/api/users';


const getUsuario = async(id) => {
    const resp = await fetch(`${urlCrud}/${id}`);
    const {data} = await resp.json();
    return data;
}
const crearUsuario = async(usuario) => {
    const resp = await fetch(urlCrud, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}
const actualizarUsuario = async(id, usuario) => {
    const resp = await fetch(`${urlCrud}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}
const borrarUsuario = async(id) => {
    const resp = await fetch(`${urlCrud}/${id}`, {
        method: 'DELETE'
    });
    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}