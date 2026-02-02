function saludar(){
    alert ("Bienvenido a Astral gaming")
}

let contador = 0;
function like() {
    contador++;
    document.getElementById("likes").innerText= "like:" + contador;

}

function mensajegamer() {
    const mensajes = [
        "clutch total",
        "ace confirmado",
        "victoria epica",
        "jugada perfecta",
    ];

    const random = Math.floor(Math.random() * mensajes.length);
    alert(mensajes[random]);
}

function ataque() {
    const dano = Math.floor(Math.random() * 100)+1;
    if (dano>70) {
        alert("critico! daño:" + dano);
    }else{
        alert("daño normal:" + dano);
    }

}

let puntos = 0;
function iniciarjuego() {
    setTimeout(()=> {
        document.getElementById("btnjuego").style.display="inline-block";
    }, Math.random()*3000+1000); 
}

function sumarpunto(){
    puntos++;
    document.getElementById("puntos").innerText="puntos: "+puntos;
    document.getElementById("btnjuego").style.display="none";
    iniciarjuego();
}

iniciarjuego();

function obtenermensaje() {
    fetch("http://127.0.0.1:5000/api/mensaje")
    .then(response=>response.json())
    .then(data=>{
        alert(data.mensaje);
    });
}