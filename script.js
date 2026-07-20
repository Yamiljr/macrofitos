// ============================================
// URL DEL GOOGLE SHEET
// ============================================

const csvURL = "https://docs.google.com/spreadsheets/d/17K51aY-j6fMURmp-55wiVGyzNJDJLSK3-sEEzEgcDVM/export?format=csv&gid=0";

// Contenedor donde se añadirán las especies
const contenedor = document.getElementById("species-container");


// ============================================
// CARGAR DATOS
// ============================================

Papa.parse(csvURL, {

    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {

        console.log("Datos cargados correctamente");

        results.data.forEach(crearTarjeta);

    },

    error: function(error) {

        console.error(error);

    }

});


// ============================================
// CREAR TARJETA
// ============================================

function crearTarjeta(especie) {

    // Tarjeta principal
    const tarjeta = document.createElement("section");
    tarjeta.className = "especie";

    // Nombre científico
    const titulo = document.createElement("h2");
    titulo.textContent = especie.taxon;

    // Imagen
    const imagen = document.createElement("img");
    imagen.src = especie.foto;
    imagen.alt = especie.taxon;

    // Familia
    const familiaTitulo = document.createElement("h3");
    familiaTitulo.textContent = "Familia";

    const familia = document.createElement("p");
    familia.textContent = especie.familia;

    // Hábitat
    const habitatTitulo = document.createElement("h3");
    habitatTitulo.textContent = "Hábitat";

    const habitat = document.createElement("p");
    habitat.textContent = especie.habitat;

    // Añadir todo a la tarjeta
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(familiaTitulo);
    tarjeta.appendChild(familia);
    tarjeta.appendChild(habitatTitulo);
    tarjeta.appendChild(habitat);

    // Añadir la tarjeta a la página
    contenedor.appendChild(tarjeta);

}
