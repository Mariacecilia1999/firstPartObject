// Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
// Cada objeto tiene las propiedades nombre, temporada y foto.
// Iterá/Recorré el array utilizando for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6

var ganadoras = [
   {
     nombre: "Bebe Zahara Benet",
     temporada: "1",
     foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
   },
   {
     nombre: "Tyra Sanchez",
     temporada: "2",
     foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
   },
   {
     nombre: "Raja",
     temporada: "3",
     foto: "http://www.nokeynoshade.party/images/raja.jpg",
   },
   {
     nombre: "Sharon Needles",
     temporada: "4",
     foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
   },
   {
     nombre: "Jinkx Monsoon",
     temporada: "5",
     foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
   },
   {
     nombre: "Bianca Del Rio",
     temporada: "6",
     foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
   },
 ];
 
 const showWinner = (value)=>{
   const body = document.querySelector('body')
   for(const winner of value){
      body.innerHTML += `<img src=${winner.foto} alt = 'Picture de ${winner.nombre}'/>
      <h4>${winner.nombre}</h4> <p>Gano la temporada: ${winner.temporada}</p>`
      console.log(winner.nombre)
   }
 }

 showWinner(ganadoras)