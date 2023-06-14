
 
 /*
 for (var i = 0; i < 10; i++) {
    let texto = 'me encanta javascript'
    console.log(texto);
 }

 const numeros = [1,2,3,4,5,6,]; 
 for (const numero of numeros){
    console.log(numero)
 }

 let notas = [1,2,3,4]
 let contador = 0;
 for (let nota of notas) {
    if (nota < 3) {let reporte ='usted perdio'
    console.log(reporte);
 } else {let reporte ='usted gano'
    console.log(reporte);

 */
 /*

    let miRefran
    miRefran = "mas vale lo conocido que por conocer";
    let longitudRefran = miRefran.length;
    let novenaLetra = miRefran [9];
    let ultimaLetra = miRefran[longitudRefran-1];
    let indicePalabra = miRefran.indexOf('que');
    miRefran=miRefran.replace('que','palabra robada');
    miRefran = miRefran.toLocaleUpperCase();

    console.log(miRefran,longitudRefran,novenaLetra,ultimaLetra,indicePalabra);
*/
/*
let myString = 'Javascript+es+super+cool';
let miArray = myString.split('+');
let arrayLength = miArray.length - 1;
let lastItem = miArray[arrayLength];
let myInverseArray = [];
for (let i = arrayLength; i > -1; i--) {
   const element = miArray[i];
   myInverseArray.push(miArray[i]);
   console.log(myInverseArray);
}
 console.log(miArray);
 console.log(arrayLength);
 console.log(lastItem); 

*/

/*
for (const propiedad in perro) {
   console.log(´${propiedad}: ${perro[propiedad]}´);
``
   }
} 
*/
/*
const persona = {
   nombre: "juan",
   edad: 25,
   profesion: "ingeniero",


   saludo:function(){
      console.log("hola soy "+persona.nombre);
   }
};

persona.saludo();
console.log(persona.edad)
console.log(persona.profesion)
*/


/*
{  
for (int i=4; i<=8; i++)
 {
   for (int j=5;j<=10; j++)
  {
 system.out.println(i+ "*"+j+"="+i*j);
  }
 }
}
*/
/*
function ejercicioUno(a, b, operation){
   switch(operation){
      case "suma":
       return console. log(a + b);
   
      case "resta":
       return console. log(a - b);
      
      case "multiplicacion":
       return console. log(a * b);
       
      case "division":
       return console. log(a / b);
      
       default:
      console.error(`la operacion ${operation} no es valida!!`);

   }

}

  ejercicioUno(12, 5, "suma");
  ejercicioUno(15, 10, "resta");
  ejercicioUno(20, 25, "multiplicacion" );
  ejercicioUno(30, 35, "division");
  */
  
/*
  let listaContactos = [
   "henry pinzon",
   "fabio ortiz",
   "gustavo vergel",
   "william cruz",
   "cesar perez",
   "andres rodriguez",
   "daniel vera",
   "david barbosa",
   "william jimenez",
   "anyer casas",
   "junior gomez",
   "yesid neira",
   
  ]
  function añadirContacto (nuevo){
   listaContactos.push(nuevo);
  }
  añadirContacto("camilo ortiz");

  console.log(listaContactos);

  function eliminar (){
   listaContactos.pop();
  }
  eliminar();

  console.log(listaContactos);

*/



  

let datosPersonales=[
   {id: 1016017398,
   nombres:'Alberto Jose', 
   apellidos:'Sanchez Ortiz',
   telefonos: 323678900,
   ubicaciones:[{
      ciudad: 'Bogota',
      direccion: 'calle 9 # 6-96',
   }

   ]
},
  
];
/*
console.log(datosPersonales); 


 function create(id, nombre,apellidos, tel, ciudad,direccion) {
   datosPersonales.push({
      id:id, nombres:nombre , apellidos: apellidos , telelefonos: tel ,ubicaciones: [{ciudad:ciudad,direccion}]
    });
   
   
 }

 create("123456","andrea","ruiz", "3216789089","bogota","calle 5");
 create("1123432", "sandra","paez","3134567890","bogota","calle 5");


 console.log(datosPersonales);



 function borrarContacto(nombres){
   for (var i = 0; i<datosPersonales.length; i++) {
      if (datosPersonales[i].nombres===nombres){
         datosPersonales.splice(i,1);
      }
   }
   console.log(datosPersonales);



 }

borrarContacto("andrea");


*/

function update(id, value, property){
   for (var i = 0; i<datosPersonales.length; i++) {
      if (datosPersonales[i].id===id){
         datosPersonales[i][property] = value
      }
   }
   console.log(datosPersonales);

}





update(1016017398,361247476157, "telefonos")

 