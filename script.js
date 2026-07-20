// ============================================
// URL DEL GOOGLE SHEET
// ============================================

const csvURL = "https://docs.google.com/spreadsheets/d/17K51aY-j6fMURmp-55wiVGyzNJDJLSK3-sEEzEgcDVM/export?format=csv&gid=0";


// ============================================
// CARGAR DATOS
// ============================================

Papa.parse(csvURL, {

    download: true,
    header: true,
    skipEmptyLines: true,

    complete: function (results) {

        console.log("Datos cargados correctamente");
        console.table(results.data);

    },

    error: function (error) {

        console.error("Error al cargar el CSV:", error);

    }

});
