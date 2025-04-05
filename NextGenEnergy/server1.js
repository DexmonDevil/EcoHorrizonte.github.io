const express = require("express");
const app = express();
const path = require("path");

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rutas adicionales
app.get("/informacion", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "informacion.html"));
});

app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "contacto.html"));
});

app.get("/equipo", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "equipo.html"));
});

// Servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
