const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); // Permite peticiones desde Live Server
app.use(express.static('uploads')); // Carpeta donde se guardarán las imágenes

// Configuración de Multer para guardar archivos en la carpeta "uploads"
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renombra la imagen
  }
});
const upload = multer({ storage });

// Ruta para subir imágenes
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ imageUrl: `http://localhost:3000/${req.file.filename}` });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:5500');
});
