const provincias = [
/* Tenemos un array con múltiples objetos que incluyen un atributo con un código postal. Crea un array que incluya sólo los códigos postales. */

  { nombre: "Madrid", codigoPostal: "28223" },

  { nombre: "Albacete", codigoPostal: "02653" },

  { nombre: "Madrid", codigoPostal: "28223" },

  { nombre: "Las Palmas", codigoPostal: "35118" },

  { nombre: "Barcelona", codigoPostal: "08480" },

  { nombre: "Madrid", codigoPostal: "28001" },

  { nombre: "Barcelona", codigoPostal: "08480" },

];

const codigosPostales = provincias.map(provincia => provincia.codigoPostal);
console.log(codigosPostales);

/* Tenemos una serie de servidores que almacenan diferentes tipos de archivos. Muestra un array con los nodos que almacenan archivos mp4 y png. */

const servidores = [
  {
    almacenan: ".mp4",
    nodos: ["ordenador1", "ordenador2", "ordenador3"]
  }, {
    almacenan: ".mp3",
    nodos: ["ordenador2", "ordenador5"]
  }, {
    almacenan: ".json",
    nodos: ["ordenador1", "ordenador4", "ordenador6"]
  }, {
    almacenan: ".png",
    nodos: ["ordenador1", "ordenador4"]
  }, {
    almacenan: ".avi",
    nodos: ["ordenador1", "ordenador7"]
  },
];

/* En la base de datos de nuestra empresa hay usuarios con correos acabados en "gmail.com". Encuéntralos y descártalos, son un problema. */
const filterNodes = servidores.filter(servidor => servidor.almacenan === ".mp4" || servidor.almacenan === ".png");

const nodos = filterNodes.map(servidor => servidor.nodos).flat();

console.log(filterNodes);
console.log(nodos);

const correos = [

  { usuario: "JoseElMaquina", email: "jose.el.maquina@gmail.com" },

  { usuario: "PepeElCorrecto", email: "pepe@corecto.com" },

  { usuario: "JoseLuisDaBest", email: "joseluis@dabest.com.eu" },

  { usuario: "EsteEstaBien", email: "este@bien.com" },

  { usuario: "Elcarterista", email: "elcarterista20@gmail.com" }

];

const correosOk = correos.filter(correo => !correo.email.includes("@gmail.com"));

console.log(correosOk);

/* Una empresa de robótica tiene diferentes modelos de procesadores y quiere mostrarlos en su web. Cada procesador tiene un atributo que indica la cantidad de operaciones por segundo y otro que indica la tasa de fallos en tanto por ciento. Genera un nuevo array dónde elimines a los que tengan un porcentaje de fallos mayor al 50%. */

const procesadores = [
  { modelo: "pentiumII", operacionesPorSegundo: 10500, tasaDeFallos: 15 },
  { modelo: "i7", operacionesPorSegundo: 20000, tasaDeFallos: 60 },
  { modelo: "8086", operacionesPorSegundo: 30, tasaDeFallos: 26.3 },
  { modelo: "i3", operacionesPorSegundo: 11389, tasaDeFallos: 58.4 },
  { modelo: "i5", operacionesPorSegundo: 15000, tasaDeFallos: 10 },
  { modelo: "celeron", operacionesPorSegundo: 200, tasaDeFallos: 80 }
];

const tasaFallosMenor50 = procesadores.filter(procesador => procesador.tasaDeFallos < 50);
console.log(tasaFallosMenor50);

/*  En nuestra página de alojamientos, los usuarios valoran el sitio donde se han quedado dándole una puntuación del 1 al 10. El problema es que no sabemos la media de valoración de cada alojamiento. Crea un atributo "media" para cada alojamiento e incluye su valor.  */

const alojamientos = [
  {
    nombre: "Bahía Feliz",
    comentarios: [
      {
        usuario: "Franz Kartofen",
        comentario: "Gut",
        valoracion: 6
      },
      {
        usuario: "Ferdinando",
        comentario: "Muy bueno",
        valoracion: 9
      },
      {
        usuario: "Roberthino",
        comentario: "Molto malo",
        valoracion: 3
      },
    ]
  },
  {
    nombre: "Nacho Sol",
    comentarios: [
      {
        usuario: "Manolín",
        comentario: "Estuvo chido",
        valoracion: 10
      },
      {
        usuario: "Solete",
        comentario: "Muy sucio",
        valoracion: 2
      }
    ]
  }

];

console.log(alojamientos);
