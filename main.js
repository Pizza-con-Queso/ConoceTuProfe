// ejemplo de inicio de sesion utilizando el back
data = {    // data que se envia
    "correo" : "nicolas.fernandez.r@usach.cl",
    "userPassword" : "123456"
}

let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://127.0.0.1:5500');   // url de origen

let options = {
    method: 'POST',
    mode: 'cors',
    headers: headers,
    body: JSON.stringify(data)
}

let fetchRes = fetch(
    "https://localhost:7022/api/usuarios/login", options);  // aca va la url del back
    fetchRes.then(res =>
        res.json()).then(d => {
        console.log(d)
    })