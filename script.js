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
    // GALERÍA
    // -----------------------

    const fotos = [
        especie.foto1,
        especie.foto2,
        especie.foto3,
        especie.foto4,
        especie.foto5
    ].filter(f => f && f.trim() !== "");

    console.log(especie.taxon, fotos);

    if (fotos.length > 0) {

        const galeria = document.createElement("div");
        galeria.className = "galeria";

        // Imagen grande
        const imagenPrincipal = document.createElement("img");
        imagenPrincipal.className = "imagen-principal";
        imagenPrincipal.src = fotos[0];
        imagenPrincipal.alt = especie.taxon;

        galeria.appendChild(imagenPrincipal);

        // Miniaturas
        const miniaturas = document.createElement("div");
        miniaturas.className = "miniaturas";

        fotos.forEach((foto, indice) => {

            const miniatura = document.createElement("img");

            miniatura.src = foto;
            miniatura.alt = especie.taxon;
            miniatura.className = "miniatura";

            if (indice === 0) {
                miniatura.classList.add("activa");
            }

            miniatura.addEventListener("click", () => {

                imagenPrincipal.src = foto;

                // Quitar borde solo en ESTA galería
                miniaturas
                    .querySelectorAll(".miniatura")
                    .forEach(img => img.classList.remove("activa"));

                miniatura.classList.add("activa");

            });

            miniaturas.appendChild(miniatura);

        });

        galeria.appendChild(miniaturas);

        tarjeta.appendChild(galeria);

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
    // Descripción
    // -----------------------

    const descripcionTitulo = document.createElement("h3");
    descripcionTitulo.textContent = "Descripción";

    tarjeta.appendChild(descripcionTitulo);

    const descripcion = document.createElement("p");
    descripcion.textContent = especie.descripcion || "";

    tarjeta.appendChild(descripcion);

    contenedor.appendChild(tarjeta);

}
