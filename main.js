// Tenemos un objeto en la variable banda, con datos de una banda (nombre, año de lanzamiento, si sigue en actividad, una foto, los integrantes y una lista de sus discos).
// Queremos mostrar:
// La duración total del disco (suma de la duración de cada canción)
// La duración promedio por canción (un promedio entre todas las duraciones)

const banda = {
   name: "Led Zeppelin",
   year: 1968,
   active: false,
   thumbnail:
     "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
   members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
   albums: [
     {
       name: "Led Zeppelin",
       year: 1969,
       songs: ["Good Times, Bad Times", "Communication Breakdown"],
       duration: 2691,
     },
     {
       name: "Led Zeppelin II",
       year: 1969,
       songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
       duration: 2502,
     },
     {
       name: "Led Zeppelin III",
       year: 1970,
       songs: ["Immigrant Song"],
       duration: 2489,
     },
     {
       name: "Led Zeppelin IV",
       year: 1971,
       songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
       duration: 2559,
     },
   ],
 };
 

 const showData = (value) =>{
   const anioLanzamiento = value.year
   const cantidadMiembros = value.members.length
   const miembros = value.members
   console.log("Led Zeppelin se fundó en el año " + anioLanzamiento);
   console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
   const cantidadDiscos = value.albums.length
   console.log("Tiene en total " + cantidadDiscos + " discos");

   let cantidadTotalCanciones = 0
   let duracion = 0
   let promedioDuracion 
   for(const albums of value.albums){
       cantidadTotalCanciones += albums.songs.length
       duracion += albums.duration
   }
   console.log(
      "Tiene en total " +
        cantidadTotalCanciones +
        " canciones entre todos los discos."
    );

    promedioDuracion = duracion / cantidadTotalCanciones
    console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");

 }

 showData(banda)