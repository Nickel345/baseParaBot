// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://guiltygear-wiki-gg.translate.goog/images/thumb/SotG_single_cover.jpg/600px-SotG_single_cover.jpg?33ae04&_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc",
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
  "https://guiltygear.wiki.gg/images/thumb/Ggst_the_town_inside_me_cover.png/600px-Ggst_the_town_inside_me_cover.png?a520b4",
  "https://guiltygear.wiki.gg/images/thumb/Ggst_the_hourglass_cover.png/600px-Ggst_the_hourglass_cover.png?986eb2",
  "https://guiltygear.wiki.gg/images/thumb/Ggst_the_circle_cover.png/600px-Ggst_the_circle_cover.png?f75d1f",
  "https://guiltygear.wiki.gg/images/thumb/Ggst_the_gravity_cover.png/600px-Ggst_the_gravity_cover.png?5f0bbf",
  "https://guiltygear.wiki.gg/images/thumb/Ggst_just_lean_cover.png/600px-Ggst_just_lean_cover.png?ca5448",
  "https://guiltygear.wiki.gg/images/thumb/ExtrasCover.jpg/600px-ExtrasCover.jpg?4eb04d",
  "https://guiltygear.wiki.gg/images/thumb/SymphonyCover.jpg/600px-SymphonyCover.jpg?686836",
  "https://guiltygear.wiki.gg/images/thumb/UpsandDownsCover.jpg/600px-UpsandDownsCover.jpg?f2a704",
  "https://guiltygear.wiki.gg/images/thumb/GGST_Radiant_Dawn_Cover.png/600px-GGST_Radiant_Dawn_Cover.png?b271bf",
  "https://guiltygear.wiki.gg/images/thumb/A_Tenth_of_Myself_Cover_Image.webp/600px-A_Tenth_of_Myself_Cover_Image.webp?3e8b2c",
  "https://guiltygear.wiki.gg/images/thumb/GGST_CARPE_DIEM_Cover.png/600px-GGST_CARPE_DIEM_Cover.png?eb5f5c",
  "https://guiltygear.wiki.gg/images/thumb/THIHSITHTTH.jpg/599px-THIHSITHTTH.jpg?3f8623",
  "https://guiltygear.wiki.gg/images/thumb/Masterofyourownsoul.jpg/600px-Masterofyourownsoul.jpg?cbe1f5",
  "https://guiltygear.wiki.gg/images/thumb/TRICK_OR_CHAOS_Cover.jpg/600px-TRICK_OR_CHAOS_Cover.jpg?df0282",
  "https://guiltygear.wiki.gg/images/thumb/GGXrdR_ost_cover.jpg/600px-GGXrdR_ost_cover.jpg?97ea4f",
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
  "Talk About You",
  "The Town Inside Me",
  "The Hourglass",
  "The Circle",
  "The Gravity",
  "Just Lean",
  "Extras",
  "Symphony",
  "Ups and downs",
  "Radiant Dawn",
  "A Tenth of Myself",
  "CARPE DIEM",
  "Tryinh Hard is Hard, so I Try Hard to To Try Hard",
  "Master of Your Own Soul",
  "Shelter from the Rain",
  "Sky Should be High",
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
  "Arcade Credits",
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
  "Story Mode Credits",
  "Bridget",
  "Sin Kiske",
  "Bedman?",
  "Asuka R. Kreutz",
  "Jhonny",
  "Elphelt Valentine",
  "A.B.A.",
  "Slayer",
  "Dizzy",
  "Venom",
  "Unika",
  "Jam Kuradoberi",
  "2.0 Update Theme",
  "Alternative Arcade mode credits",
  "Pre-fight theme"
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");
const link = document.getElementById("enlace")

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