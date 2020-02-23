//OBJETOS: tipos de datos (luego de ver todos los datos primitivos: numeros, strings, booleanos, funciones y arrays )
// se asocian a una variable
//tienen propiedades que se separan por comas, de la forma clave: valor
//informcion compleja , bien organizada.
//no reemplaza leguaje de datos (php, phyton) lo mandan en JSON javascriot objet notation.
//leer en internet sobre objetos
//son dinamicos
/*const productos=[
    [1,"computadora",100,true],
    [1,"computadora",100,true],
    [1,"computadora".100,true]
]

producto[0][3] */

const alumnas = ["Lili", "Pieri", "Sol", "Sabri"]
alumnas[0]
ñ
const persona = {
    nombre: "Ada",
    edad: 29,
    email: "ada@lovelace.com",
    sabeProgramar: true,
    listaDeLenguajesConocidos: ["javascript", "C++", "Java"],
    direccion: {
        calle: "Anzorena",
        numero: 100,
        "Cp": 1425,
        provincia: {
            nombre: "Buenos Aires",
            id: 1,
            localidades: ["SAn MArtin", "Caseros", "Olivos"]
        }
    },
    hijos: [
        {
            nombre: "Sonny",
            edad: 10
        },
        {
            nombre: "Ladislao",
            edad: 5
        },
        {
            nombre: "Maicol",
            edad: 2,
        },
    ]
}

console.log(persona)
console.log(persona.nombre)
persona.apellido = "Lovelace"
console.log(persona.apellido)
console.log(`El nombre es : ${persona.nombre}` + ` ${persona.apellido}`)
console.log(`La calle donde vive el usuario es ${persona.direccion.calle}`)
console.log(`El primer lenguaje que conoce es ${persona.listaDeLenguajesConocidos[0]}`)
console.log(`Ada conoce los sigueintes lenguajes: ${persona.listaDeLenguajesConocidos.join(" , ")}`)

for (let i = 0; i < persona.listaDeLenguajesConocidos.length; i++) {
    console.log(`Lenguaje: ${persona.listaDeLenguajesConocidos[i]}`)
}

let hijos = []

for (let i = 0; i < persona.hijos.length; i++) {
    hijos.push(persona.hijos[i].nombre)
}

console.log(`Los hijos de Ada son: ${hijos.join(", ")}`)

//o si se usa un string se puede resolver asi:*/

/*let hijos = ""

for (let i = 0; i < persona.hijos.length; i++) {
hijos= hijos.concat(persona.hijos[i].nombre, "' ")
}

console.log(`Los hijos de Ada son : ${hijos}`)*/
//Para un elemento que esta dentro de un array:
/*objeto*/
/* | */
persona.hijos[1].nombre  /*<---propiedad*/

const producto = {
    id: 1,
    nombre: "Computadora Lenovo 210",
    precio: 35000,
    tieneDescuento: false,
    cantidadAComprar: 2
}

console.log(persona.nombre)
console.log(persona.edad)

if (persona.edad > 18) {
    console.log(persona.nombre + " puede tomar alcohol legalmente")
}


console.log(producto)

/*Hacer ejercicios 4 y 5*/

/*Ejercicio 4
Tenemos un objeto con información de un disco:*/

const disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
        nombre: 'Foo Fighters',
        anioFormacion: 1994
    },
    canciones: [`1`, `2`, `3`],
};


/*Mostrar en consola el siguiente mensaje usando las propiedades del objeto:
El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011*/

console.log(`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzo en el año ${disco.anioLanzamiento}`)


/*Ejercicio 5
Crear un array llamado tecnologiasConocidas donde se listen las tecnologias que aprendiste durante el curso y las que ya supieras de antes

Agregar al objeto creado en el ejercicio 1 dos propiedades:

sabeProgramar: true
tecnologiasConocidas: [el array que creaste recien]*/

const tecnologiasConocidas = ["HTML", "CSS", "Sass", "Javascript "]
const user = {
    firstName: "Malena",
    lastName: "Rey",
    email: "malena@gmail.com",
    age: 32
}

user.sabeProgramar = true
user.tecnologiasConocidas = tecnologiasConocidas

console.log(user)


/*ejercicio 6*/

/*const mostrarTecnologias = usuario => {
    if (usuario.sabeProgramar){
console.log(`HOla, mi nombre es ${usuario.firstName} 
y programa en ${usuario.tecnologiasConocidas}`)
    }
}

mostrarTecnologias(user)

const mostrarTecnologias = (nombre, programa, tecnologias) => {
   if (programa) {
       console.log(` 
       Hola, mi nombre es ${nombre}
       y programo en ${tecnologias}`)
   }
}

mostrarTecnologias(user.firstName, user.sabeProgramar, user.tecnologiasConocidas)


/*ejercicios 7 y 8*/

const mostrarTecnologias = usuario => {
    if (usuario.sabeProgramar) {
        console.log(`HOla, mi nombre es ${usuario.firstName} 
y programo en ${usuario.tecnologiasConocidas}`)
    }
}

mostrarTecnologias(user)

tecnologiasConocidas.push("proximamente DOM")

mostrarTecnologias(user)


const newUser = {
    name: {
        first: user.firstName,
        last: user.lastName,
    },
    email: user.email,
    age: user.age,
    peorDocenteDelMundo: user.peorDocenteDelMundo,
    sabeProgramar: user.sabeProgramar,
    tecnologiasConocidas: user.tecnologiasCoocidas
}


const carrito = [
    {
        id: 1,
        nombre: "Computadora",
        precio: 200,
        descuento: true
    },
    {
        id: 2,
        nombre: "Celular",
        precio: 100,
        descuento: false
    },
    {
        id: 3,
        nombre: "Planta",
        precio: 50,
        descuento: true
    },
]

let precio = 0;
for (let i = 0; i < carrito.length; i++) {
    precio = precio + carrito[i] 
}


/*Ejercicio 9
Tenemos un array de objetos con las ganadoras de algunas temporadas de Rupaul.
Cada objeto tiene las propiedades nombre, temporada y foto.
Crea una funcion con el nombre mostrarGanadoras, que reciba el objeto como parametro.
Dentro de la funcion, recorrer el array utilizando un ciclo for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6
*/

const ganadoras = [
  {
    nombre: 'Bebe Zahara Benet',
    temporada: '1',
    foto: 'http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg'
  },
  {
    nombre: 'Tyra Sanchez',
    temporada: '2',
    foto: 'http://www.nokeynoshade.party/images/tyra-sanchez.jpg'
  },
  { nombre: 'Raja',
    temporada: '3',
    foto: 'http://www.nokeynoshade.party/images/raja.jpg'
  },
  {
    nombre: 'Sharon Needles',
    temporada: '4',
    foto: 'http://www.nokeynoshade.party/images/sharon-needles.jpg'
  },
  {
    nombre: 'Jinkx Monsoon',
    temporada: '5',
    foto: 'http://www.nokeynoshade.party/images/jinkx-monsoon.jpg'
  },
  {
    nombre: 'Bianca Del Rio',
    temporada: '6',
    foto: 'http://www.nokeynoshade.party/images/bianca-del-rio.jpg'
  }
];

///// RETORNO DE LA FUNCION
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6

const mostrarGanadoras = (arraydeganadoras) =>{
for (let i = 0; i < arraydeganadoras.length; i++) {
  let ganadora = arraydeganadoras[i]
  console.log(`${ganadora.nombre} gana la temporada ${ganadora.temporada}`)  
}
}

mostrarGanadoras(ganadoras)

/*Ejercicio 10
Tenemos un array de objetos, con las canciones de un disco de Nirvana
Cada objeto representa una canción, y tiene las propidades id, nombre, duracion (en segundos)
Queremos calcular:
La duración total del disco (suma de la duración de cada canción)
La duración promedio por canción (un promedio entre todas las duraciones)
Para ello crear las funciones calcularDuracionTotal y calcularPromedioPorCancion*/

const nevermind = [
  { id: 1, nombre: "Smells Like Teen Spirit", duracion: 302 },
  { id: 2, nombre: "In Bloom", duracion: 255 },
  { id: 3, nombre: "Come As You Are", duracion: 219 },
  { id: 4, nombre: "Breed", duracion: 184 },
  { id: 5, nombre: "Lithium", duracion: 257 }
];

const calcularDuracionTotal = disco =>{
 let duracion = 0;
    for (let i = 0; i < disco.length; i++) {
        const cancion = disco[i];
        duracion = duracion + cancion.duracion
    } 
    return duracion
}

console.log(calcularDuracionTotal(nevermind))

const calcularPromedioPorCancion = disco =>{
    let duracion = 0;
       for (let i = 0; i < disco.length; i++) {
           const cancion = disco[i];
           duracion = duracion + cancion.duracion
       } 
       let promedio = duracion / disco.length
       return promedio
   }

   console.log(calcularPromedioPorCancion(nevermind))