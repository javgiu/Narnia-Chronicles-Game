const seccionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
const seccionReiniciar = document.getElementById ("reiniciar")
const buttonHeroJugador = document.getElementById ("button-hero")
const botonReiniciar = document.getElementById ("button-reiniciar")
const spanHeroJugador = document.getElementById("hero-jugador")
const seccionSeleccionarHero = document.getElementById ("seleccionar-hero")
const spanHeroEnemigo = document.getElementById("hero-enemigo")
const numeroVidasJugador = document.getElementById("vidas-jugador")
const numeroVidasEnemigo = document.getElementById("vidas-enemigo")
const resultadoInicial = document.getElementById ("resultado")
const mensajesDelJugador = document.getElementById ("mensajes-del-jugador")
const mensajesDelEnemigo = document.getElementById ("mensajes-del-enemigo")
const parrafoResultadoFinal = document.getElementById ("resultado")
const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
let contenedorBotones = document.getElementById("contenedor-botones")

let ataqueJugador
let ataqueEnemigo

let opcionDeHeroe
let opcionDeBotones
let heroJugador


let vidasJugador = 3
let vidasEnemigo = 3

let inputEdmund
let inputCaspian
let inputPeter
let inputTirian
let inputRilian
let inputEustace

let botonEspada
let botonEscudo 
let botonArco 
class Heroe {
    constructor (nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }

}

let peter = new Heroe ("Peter", "./assets/Peter.png", 5)
let caspian = new Heroe ("Caspian", "./assets/Caspian.png", 5)
let rilian = new Heroe ("Rilian", "./assets/Rilian.png", 5)
let tirian = new Heroe ("Tirian", "./assets/Tirian.png", 5)
let eustace = new Heroe ("Eustace", "./assets/Eustace.jpeg", 5)
let edmund = new Heroe ("Edmund", "./assets/Edmund.png", 5)

peter.ataques.push (
    {nombre: "⚔️", id: "button-espada"},
    {nombre: "⚔️", id: "button-espada"},
    {nombre: "⚔️", id: "button-espada"},
    {nombre: "🛡️", id: "button-escudo"},
    {nombre: "🏹", id: "button-arco"},
)

caspian.ataques.push (
    {nombre: "🛡️", id: "button-escudo"},
    {nombre: "🛡️", id: "button-escudo"},
    {nombre: "⚔️", id: "button-espada"},
    {nombre: "🏹", id: "button-arco"},
    {nombre: "🏹", id: "button-arco"},
)

rilian.ataques.push (
    {nombre: "🛡️", id: "button-escudo"},
    {nombre: "🛡️", id: "button-escudo"},
    {nombre: "🛡️", id: "button-escudo"},
    {nombre: "⚔️", id: "button-espada"},
    {nombre: "🏹", id: "button-arco"},
)

tirian.ataques.push (
    {nombre: "⚔️", id: "button-espada"},
    {nombre: "⚔️", id: "button-espada"},
    {nombre: "🛡️", id: "button-escudo"},
    {nombre: "🛡️", id: "button-escudo"},
    {nombre: "🏹", id: "button-arco"},
)

eustace.ataques.push (
    {nombre: "🏹", id: "button-arco"},
    {nombre: "🏹", id: "button-arco"},
    {nombre: "🏹", id: "button-arco"},
    {nombre: "🛡️", id: "button-escudo"},
    {nombre: "⚔️", id: "button-espada"},
)

edmund.ataques.push (
    {nombre: "⚔️", id: "button-espada"},
    {nombre: "⚔️", id: "button-espada"},
    {nombre: "🏹", id: "button-arco"},
    {nombre: "🏹", id: "button-arco"},
    {nombre: "🛡️", id: "button-escudo"},
)

let heroes = []

heroes.push (peter, caspian, rilian, tirian, eustace, edmund)

let botones = []
let ataqueHeroJugador = []


function iniciarJuego () {


    seccionSeleccionarAtaque.style.display = "none"
    seccionReiniciar.style.display = "none"

    heroes.forEach ((heroe) => {
        opcionDeHeroe = `
        <input type="radio" name="Hero" id=${heroe.nombre} />
        <label class= "tarjeta-de-narnia" for=${heroe.nombre}>
            <p>${heroe.nombre}</p>
            <img src=${heroe.foto}>
        </label>
        `

        contenedorTarjetas.innerHTML += opcionDeHeroe

    inputEdmund = document.getElementById("Edmund")
    inputCaspian = document.getElementById("Caspian")
    inputPeter = document.getElementById("Peter")
    inputTirian = document.getElementById("Tirian")
    inputRilian = document.getElementById("Rilian")
    inputEustace = document.getElementById("Eustace")

    })
  
    buttonHeroJugador.addEventListener("click",seleccionarHeroJugador)

    


    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function seleccionarHeroJugador () {

   


    let comenzarSeleccion = 1

    if (inputEdmund.checked) {
        spanHeroJugador.innerHTML = inputEdmund.id
        heroJugador = inputEdmund.id
    } else if (inputCaspian.checked) {
        spanHeroJugador.innerHTML = inputCaspian.id
        heroJugador = inputCaspian.id
    } else if (inputPeter.checked) {
        spanHeroJugador.innerHTML = inputPeter.id
        heroJugador = inputPeter.id
    } else if (inputTirian.checked) {
        spanHeroJugador.innerHTML = inputTirian.id
        heroJugador = inputTirian.id
    } else if (inputRilian.checked) {
        spanHeroJugador.innerHTML = inputRilian.id
        heroJugador = inputRilian.id
    } else if (inputEustace.checked) {
        spanHeroJugador.innerHTML =  inputEustace.id
        heroJugador = inputEustace.id
    } else {
        alert("No has seleccionado un hero")
        comenzarSeleccion = 0
    } 
        
    if (comenzarSeleccion == 1) {

        extraerAtaques (heroJugador)

        seleccionarHeroEnemigo()
    }    

}

function extraerAtaques (heroJugador) {
    let ataques 
    for (let i = 0; i < heroes.length; i++) {
        if (heroJugador === heroes[i].nombre) {
            ataques = heroes[i].ataques
        }
        
    }

    mostrarAtaques (ataques)
 
}

function mostrarAtaques (ataques) {
    ataques.forEach ((ataque) => {
        opcionDeBotones = `
        <button id=${ataque.id} class="botones-ataque botonesAtaque">${ataque.nombre}</button>
        `
    contenedorBotones.innerHTML += opcionDeBotones
    
    })

    botonEspada = document.getElementById ("button-espada")
    botonEscudo = document.getElementById ("button-escudo")
    botonArco = document.getElementById ("button-arco")

    botones = document.querySelectorAll (".botones-ataque")
    

}    
 
function secuenciaAtaqueJugador () {

    botones.forEach ((boton) => {

        boton.addEventListener ("click", (e) => {
            if(e.target.textContent === "⚔️") {
                ataqueHeroJugador.push ("⚔️")
                console.log(ataqueHeroJugador)
                boton.style.background = "rgba(131, 12, 51, 0.948)"
                
            } else if (e.target.textContent === "🛡️") {
                ataqueHeroJugador.push ("🛡️")
                console.log(ataqueHeroJugador)
                boton.style.background = "rgba(131, 12, 51, 0.948)"
                
            } else {
                ataqueHeroJugador.push ("🏹")
                console.log(ataqueHeroJugador)
                boton.style.background = "rgba(131, 12, 51, 0.948)"
                
            }

        })

    })
}

function seleccionarHeroEnemigo () {

    seccionSeleccionarAtaque.style.display = "flex"

    seccionSeleccionarHero.style.display = "none"


    let numeroAleatorio = aleatorio (0, heroes.length -1)

    spanHeroEnemigo.innerHTML = heroes[numeroAleatorio].nombre  
    
    secuenciaAtaqueJugador ()

}


function combate () {

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje ("Empate")
    } else if(ataqueJugador == "ESPADA" && ataqueEnemigo == "ARCO Y FLECHA" || ataqueJugador == "ESCUDO" && ataqueEnemigo == "ESPADA" || ataqueJugador == "ARCO Y FLECHA" && ataqueEnemigo ==  "ESCUDO") {
        crearMensaje ("Ganaste")
        vidasEnemigo--
        numeroVidasEnemigo.innerHTML = vidasEnemigo
    } else { crearMensaje ("Perdiste")
        vidasJugador--
        numeroVidasJugador.innerHTML = vidasJugador
    }   

    revisarVidas ()
}    



function revisarVidas () {
    if (vidasEnemigo == 0) {
        crearMensajeFinal ("YOU WIN!!! 🏆")
    } else if (vidasJugador == 0) {
        crearMensajeFinal ("YOU LOSE!! 😭")
    }

}

function seleccionarAtaqueEnemigo () {
    let seleccionAtaqueEnemigo = aleatorio (1,3)
    if (seleccionAtaqueEnemigo == 1) {
        ataqueEnemigo = "ESPADA"
    } else if (seleccionAtaqueEnemigo == 2) {
        ataqueEnemigo = "ESCUDO"
    } else if(seleccionAtaqueEnemigo == 3) {
        ataqueEnemigo = "ARCO Y FLECHA"
    }

    combate ()
}

function reiniciarJuego () {   
    location.reload ()
}

function crearMensaje (resultado) {

    resultadoInicial.innerHTML = resultado
    
    let ataqueDelJugador = document.createElement ("p")
    let ataqueDelEnemigo = document.createElement ("p")
    
    ataqueDelJugador.innerHTML = ataqueJugador
    ataqueDelEnemigo.innerHTML = ataqueEnemigo

    mensajesDelJugador.appendChild(ataqueDelJugador)
    mensajesDelEnemigo.appendChild(ataqueDelEnemigo)
}

function crearMensajeFinal (resultadoFinal) {
    parrafoResultadoFinal.innerHTML = resultadoFinal

    botonEspada.disabled = true
    botonEscudo.disabled = true
    botonArco.disabled = true

    seccionReiniciar.style.display = "block"
}

function aleatorio (min,max) {
   return Math.floor(Math.random () * (max - min +1 ) + min)
}

window.addEventListener("load", iniciarJuego)