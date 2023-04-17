// Tenemos la variable datos que tiene un objeto con los datos de una persona
// El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
// También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

var datos = {
   id: 1,
   nombre: "Ada",
   apellido: "Lovelace",
   email: "ada.lovelace@gmail.com",
   telefono: "1234567890",
   edad: "29",
   programa: true,
 };

 datos.edad = 29
 datos.telefono = '0192837465'

 console.log(datos)
