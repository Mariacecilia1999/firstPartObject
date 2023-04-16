// Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados

// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS
// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890


const userOne  = {
   id : 1 ,
   name: 'Ada Lovelace',
   email: 'ada@gmail.com',
   phone: 1234567890
}

console.log(userOne.name)

const userTwo  = {
   id : 2 ,
   name: 'Grace Hopper',
   email: 'grace@hotmail.com',
   phone: 0987654321
}

console.log(userTwo.id)

const userThree = {
   id : 3 ,
   name: 'Hedy Lamarr' ,
   email: 'hedy@gmail.com',
   phone: 6789054321
}

console.log(userThree.email)

const userFour = {
   id : 4 ,
   name: 'Radia Perlam',
   email: 'radia@yahoo.com',
   phone: 1234509876
}

console.log(userFour.id, userFour.name)

const userFive = {
   id: 5 ,
   name: 'Sheryl Sandberg',
   email: 'Sheryl@facebook.com',
   phone: 5432167890
}

console.log(userFive.phone)

