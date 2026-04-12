// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  "https://www.arcsystemworks.com/wp-content/uploads/2023/01/GGSTORIGINAL-SOUNDTRACK-Necessary-Discrepancy_image.jpg",
  
];

const titulos = [
  "Smell of the Game",
  "Find Your One Way",
  "The Roar of the Spark",
  "Armor-clad Faith",
  "Alone Infection",
  "The Name of Heaven",
  "Love the Subhuman Self",
  "Play the Hero",
  "The disaster of Passion",
  "Out of the Box",
  "Rock and Roll, Rock Hard Maniac",
  "Let Me Carve Your Way",
  "Necessary Discrepancy",
  "Crawl",
  "What do You Fight For",
  "Perfection Can't Please Me",
  "Requiem",
  "The Kiss of Death",
  "Like a Weed, Naturally, as a Matter of Course",
  "Drift",
  "Trigger",
  "Hellfire",
  "漉祭 -Rock Parade-",
  "Mirror of the World",
  "Talk About You"
];

const frases = [
  "Main Theme",
  "Sol Badguy",
  "Ky Kiske",
  "Potempkin",
  "Faust",
  "Story Theme",
  "Millia Rage",
  "Chipp Zanuff",
  "May",
  "Axl Low",
  "Other",
  "Zato-1",
  "Ramlethal Valentine",
  "Arena Mode Boss",
  "Nagoriyuki",
  "Jack-o",
  "I-no",
  "Goldlewis Dickinson",
  "Testament",
  "Happy Chaos",
  "Giovanna",
  "Leo Whitefang",
  "Anji",
  "Baiken",
  "Story Mode Credits"
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();