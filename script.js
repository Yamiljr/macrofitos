// ============================================
// URL DEL GOOGLE SHEET
// ============================================

const csvURL = "https://docs.google.com/spreadsheets/d/17K51aY-j6fMURmp-55wiVGyzNJDJLSK3-sEEzEgcDVM/export?format=csv&gid=0";

// Contenedor donde se añadirán las especies
const contenedor = document.getElementById("species-container");

console.log("Script cargado");
console.log(contenedor);

// ============================================
// CARGAR DATOS
// ============================================

Papa.parse(csvURL, {

    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {

        console.log("Datos cargados correctamente");
        console.table(results.data);

        results.data.forEach(function(especie){

            console.log(especie);

            crearTarjeta(especie);

        });

    },

    error: function(error) {

        console.error("Error:", error);

    }

});


// ============================================
// CREAR TARJETA
// ============================================

function crearTarjeta(especie) {
console.log("Creando tarjeta:", especie.taxon);
    const tarjeta = document.createElement("section");
    tarjeta.className = "especie";

    const titulo = document.createElement("h2");
    titulo.textContent = especie.taxon || "Sin nombre";

    tarjeta.appendChild(titulo);

    if (especie.foto) {

        const imagen = document.createElement("img");
        imagen.src = especie.foto;
        imagen.alt = especie.taxon;

        tarjeta.appendChild(imagen);

    }

    const familiaTitulo = document.createElement("h3");
    familiaTitulo.textContent = "Familia";

    tarjeta.appendChild(familiaTitulo);

    const familia = document.createElement("p");
    familia.textContent = especie.familia || "-";

    tarjeta.appendChild(familia);

    const habitatTitulo = document.createElement("h3");
    habitatTitulo.textContent = "Hábitat";

    tarjeta.appendChild(habitatTitulo);

    const habitat = document.createElement("p");
    habitat.textContent = especie.habitat || "-";

    tarjeta.appendChild(habitat);

    contenedor.appendChild(tarjeta);
    console.log(contenedor.innerHTML);
}
