// Esta es la base de datos de nuestros usuarios
const baseDeDatos = {
  usuarios: [
    {
      id: 1,
      name: "Steve Jobs",
      email: "steve@jobs.com",
      password: "Steve123",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "shanna@melissa.tv",
      password: "Ervin345",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "nathan@yesenia.net",
      password: "Floppy39876",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "julianne.oconner@kory.org",
      password: "MysuperPassword345",
    },
  ],
};

function validarSaludo (){ /// Muestro el saludo y creo el boton
  const h1 = document.querySelector('h1')
  const nombreUsuario = JSON.parse(window.localStorage.getItem('baseDeDatos'))
  h1.innerText= " Bienvenido al sitio 😀 " + nombreUsuario
  document.querySelector("form").style.display="none";
  const main = document.querySelector('main')
  const botonCS = document.createElement("button");
  botonCS.setAttribute("class", "login-btn");
  botonCS.setAttribute("type", "button");
  botonCS.innerText= "Cerrar Sesión"
  main.appendChild(botonCS);
  // Evento para cerrar sesión
  botonCS.addEventListener('click', () => {
    localStorage.removeItem('baseDeDatos');
    alert("Se a cerrado la sesión con exito!")
    location.reload();
  })

}

window.addEventListener("load", function(){
  if (localStorage.getItem("baseDeDatos") == null){
    // console.log("no existe");

    const boton= document.querySelector(".login-btn")
    boton.addEventListener('click', (event) => {
      console.log("Has hecho click en el boton inicio de sesión");
      let x = 0
      const mensaje = setInterval(() => {
          ++x
          document.querySelector("#loader").style.display="block";
          document.querySelector("#error-container").style.display="none";
          if ( x === 3){
              clearInterval(mensaje)
              document.querySelector("#loader").style.display="none";
    
              function validarEmail(email) { // con esta funcion valido el correo electronico
                  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                  return regex.test(email);
                }
                let emailValido
                let email = document.getElementById('email-input').value;
                for (let index = 0; index < baseDeDatos.usuarios.length; index++) {
                  if (baseDeDatos.usuarios[index].email === email) {
                    emailValido = baseDeDatos.usuarios[index].email
                    window.localStorage.setItem('baseDeDatos', JSON.stringify(baseDeDatos.usuarios[index].name))
                  }
                }
    
                if (validarEmail(emailValido)) {
                  console.log("El email es válido.");
                } else {
                  console.log("El email no es válido.");
              }
              
              validarEmail();
              
              function validarPassword(password) {  // con esta funcion valido la contraseña
                const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
                return regexp.test(password);
              }
              
              let passwordValido
              let password = document.getElementById('password-input').value;
              for (let index = 0; index < baseDeDatos.usuarios.length; index++) {
                if (baseDeDatos.usuarios[index].password === password) {
                  passwordValido = baseDeDatos.usuarios[index].password
                }
              }
              
              if (validarPassword(passwordValido)) {
                console.log("La contraseña es válida.");
              } else {
                console.log("La contraseña no es válida.");
              }
              validarPassword();
              
              /// Valido si usuario y contraseña son correctas
              if (emailValido && passwordValido){
                  validarSaludo();
              }else{
                document.querySelector("#error-container").style.display="block";
                const small = document.querySelector('small')
                small.innerText= "Alguno de los datos ingresados son incorrectos"
              }

    
              
            }
          }, 1000);
        })
        
      }else{
        console.log("si existe");
        validarSaludo();
      }
    });

// ACTIVIDAD

// Paso a paso:

// 1) Al momento de que la persona inicia sesión, si las validaciones que ya tenemos implementadas
// han sido exitosas, deberemos almacenar la información del usuario en el LocalStorage.

// 2) Al mensaje de bienvenida que ya teníamos implementado, deberemos agregarle el nombre de la
// persona y un botón de "Cerrar Sesión".

// 3) Una vez iniciada la sesión, la misma se deberá mantener en ese estado para el caso de que la persona
// recargue la página. Para ello, deberás validar si existe información del usuario al momento en
// que se produce la carga de la página, y en base a dicha condción decidir que elementos mostrar.

// 3) Para el caso de que la persona haga click en el botón "Cerrar Sesión", se deberá eliminar
// la información del usuario, mostrar un mensaje indicando que se ha cerrado la sesión, y recargar
// la página para mostrar nuevamente el formulario de login.

/* 
TIPS:
  - Para lograr los objetivos de este ejercicio, deberás valerte de algunos eventos y métodos que vimos en
    las clases anteriores. Te invitamos a que revises los recursos en caso de que tengas dudas, ya que allí
    encontrarás todas las respuestas que necesitas para completar la actividad.

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - Al momento de guardar información del usuario en el navegador, recuerda que debemos almacenar solo la 
    información necesaria, y EN NINGUN CASO DEBEMOS GUARDAR LA CONTRASEÑA. Por ello, deberás seleccionar y
    separar la información que tienes que almacenar, a partir del objeto que contiene la información del 
    usuario.

   ¡Manos a la obra!
 */
