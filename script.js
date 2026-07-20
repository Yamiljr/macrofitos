// ============================================
// CONFIGURACIÓN
// ============================================

// URL del Google Sheet publicado como CSV
const csvURL = "https://docs.google.com/spreadsheets/d/17K51aY-j6fMURmp-55wiVGyzNJDJLSK3-sEEzEgcDVM/export?format=csv&gid=0";

// Contenedor donde se mostrarán las especies
const contenedor = document.getElementById("species-container");


// ============================================
// CARGAR LOS DATOS
// ============================================

Papa.parse(csvURL, {

    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function(results) {

        console.log("Datos cargados correctamente");
        console.table(results.data);

        // Ignorar filas vacías
        const especies = results.data.filter(especie => especie.taxon);

        // Crear una tarjeta para cada especie
        especies.forEach(crearTarjeta);

    },

    error: function(error) {

        console.error("Error al cargar el CSV:", error);

    }

});


// ============================================
// CREAR TARJETA DE UNA ESPECIE
// ============================================

function crearTarjeta(especie) {

    // Tarjeta principal
    const tarjeta = document.createElement("section");
    tarjeta.className = "especie";

    // -----------------------
    // Título
    // -----------------------

    const titulo = document.createElement("h2");
    titulo.textContent = especie.taxon;

    tarjeta.appendChild(titulo);

    // -----------------------
    // Imagen
    // -----------------------

    const fotos = [
        especie.foto1,
        especie.foto2,
        especie.foto3,
        especie.foto4,
        especie.foto5
    ];

    const primeraFoto = fotos.find(foto => foto && foto.trim() !== "");

    if (primeraFoto) {

        const imagen = document.createElement("img");

        imagen.src = primeraFoto;
        imagen.alt = especie.taxon;

        tarjeta.appendChild(imagen);

    }

    // -----------------------
    // Familia
    // -----------------------

    const familiaTitulo = document.createElement("h3");
    familiaTitulo.textContent = "Familia";

    tarjeta.appendChild(familiaTitulo);

    const familia = document.createElement("p");
    familia.textContent = especie.familia || "-";

    tarjeta.appendChild(familia);

    // -----------------------
    // Grupo
    // -----------------------

    const grupoTitulo = document.createElement("h3");
    grupoTitulo.textContent = "Grupo";

    tarjeta.appendChild(grupoTitulo);

    const grupo = document.createElement("p");
    grupo.textContent = especie.grupo || "-";

    tarjeta.appendChild(grupo);

    // -----------------------
    // Hábitat
    // -----------------------

    const habitatTitulo = document.createElement("h3");
    habitatTitulo.textContent = "Hábitat";

    tarjeta.appendChild(habitatTitulo);

    const habitat = document.createElement("p");
    habitat.textContent = especie.habitat || "-";

    tarjeta.appendChild(habitat);

    // -----------------------
    // Descripción / Observaciones
    // -----------------------

    const descripcionTitulo = document.createElement("h3");
    descripcionTitulo.textContent = "Descripción";

    tarjeta.appendChild(descripcionTitulo);

    const descripcion = document.createElement("p");
    descripcion.textContent = especie.descripcion || "";

    tarjeta.appendChild(descripcion);

    // Añadir la tarjeta a la página
    contenedor.appendChild(tarjeta);

}
