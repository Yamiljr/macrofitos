// ============================================
// CONFIGURACIÓN
// ============================================

// Sustituye esta URL por la de tu Google Sheet publicado como CSV
const csvURL = "PEGA_AQUÍ_LA_URL_DE_TU_CSV";


// ============================================
// CARGAR LOS DATOS
// ============================================

Papa.parse(csvURL, {

    download: true,

    header: true,

    skipEmptyLines: true,

    complete: function(resultado) {

        console.log("Datos cargados correctamente:");

        console.table(resultado.data);

    },

    error: function(error) {

        console.error("Error al cargar el CSV:", error);

    }

});
