// Creá un objeto donde vamos a guardar información sobre una playlist de spotify
// El objeto va a tener las propiedades nombre (un string), privada (un booleano) y canciones (un array de strings).
// En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:

// Lista de Nirvana
// Privada: Si
// Canciones:
// Smells Like Teen Spirit
// In Bloom
// Come As You Are
// Privada tiene que mostrar Si en el caso que la propiedad privada sea true, o No si la prop

const playlistInfo = {
   name: 'List of Nirvana',
   private: true,
   songs: ['Smells Like Teen Spirit', 'In Bloom', 'Come As You Are']
}

console.log(playlistInfo.name)
console.log(playlistInfo.private)

//Show every song
const showSongs = (songs) =>{
   for(const song of songs){
      console.log(song)
   }
}


//Function that checks if the list is private or public
const check = (boolean) => {
   if(boolean == true){
      showSongs(playlistInfo.songs)
   }else{
      console.log('List private')
   }
}
check(playlistInfo.private)












