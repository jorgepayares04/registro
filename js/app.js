let tabla=[    {Nombres:'Jorge Eliezer',Apellidos:'Gaitan',TipoIdentificacion:'CC',Identificación:'123456789',Dirección:'c 23 23 2',CorreoElectronico:'abcdf@gmail.com',Usuario:'Jgaitan',Contrasena:'123456'},        
               {Nombres:'Jorge Eliezer',Apellidos:'Gaitan',TipoIdentificacion:'CC',Identificación:'123456789',Dirección:'c 23 23 2',CorreoElectronico:'abcdf@gmail.com',Usuario:'Jgaitan',Contrasena:'123456'},        
               {Nombres:'Jorge Eliezer',Apellidos:'Gaitan',TipoIdentificacion:'CC',Identificación:'123456789',Dirección:'c 23 23 2',CorreoElectronico:'abcdf@gmail.com',Usuario:'Jgaitan',Contrasena:'123456'}]

let cuerpotabla=document.getElementById('tabla-usuarios')
let i=1;
const listar=()=>{
    let usuarios="";
    for (let i = 0; i < tabla.length; i++) {
        usuarios += `<tr><th scope="row">${i + 1}</th><td>${tabla[i].Nombres}</td><td>${tabla[i].Apellidos}</td><td>${tabla[i].TipoIdentificacion}</td><td>${tabla[i].Identificación}</td><td>${tabla[i].Dirección}</td><td>${tabla[i].CorreoElectronico}</td><td>${tabla[i].Usuario}</td><td>${tabla[i].Contrasena}</td></tr>`;
    }
    cuerpotabla.innerHTML = usuarios;
} // faltaba esta llave de cierre

//listar(); // llamar a la función para que se ejecute

const Registrar=()=>{
    const Nombres=document.getElementById('Nombres').value;
    const Apellidos=document.getElementById('Apellidos').value;
    const TipoIdentificacion=document.getElementById('TipoIdentificacion').value;
    const Identificación=document.getElementById('Identificación').value;
    const Dirección=document.getElementById('Dirección').value;
    const CorreoElectronico=document.getElementById('CorreoElectronico').value;
    const Usuario=document.getElementById('Usuario').value;
    const Contrasena=document.getElementById('Contrasena').value;
    tabla.push([{
        Nombres: Nombres,
        
    }])
    //cuerpotabla.innerHTML += `<tr><th scope="row">${i}</th><td>${tabla[i].Nombres}</td><td>${tabla[i].Apellidos}</td><td>${tabla[i].TipoIdentificacion}</td><td>${tabla[i].Identificación}</td><td>${tabla[i].Dirección}</td><td>${tabla[i].CorreoElectronico}</td><td>${tabla[i].Usuario}</td><td>${tabla[i].Contrasena}</td></tr>`;
    i++

}

function toggleTabla() {
    let tabla = document.getElementById('tabla-usuarios');
    tabla.classList.toggle("d-none");
  }
  let toggleBtn = document.getElementById('tabla-usuarios');
if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleTabla);
} else {
  console.log("Element with ID 'toggleTabla' not found.");
}

function toggleTabla() {
    let tabla = document.getElementById('cabecera');
    tabla.classList.toggle("d-none");
  }
  let toggleBtn2 = document.getElementById('cabecera');
if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleTabla);
} else {
  console.log("Element with ID 'toggleTabla' not found.");
}