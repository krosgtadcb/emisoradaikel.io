<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Emisora de Radio Live</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Emisora de Radio Live</h1>
        <!-- Reproductor de audio (oculto) -->
        <audio id="radioPlayer" autoplay>
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>
    <script src="js/script.js"></script>
    <script>
        // Pasar la lista de archivos de audio desde PHP a JavaScript
        const audioFiles = <?php
            $audioDir = 'audio/';
            $files = scandir($audioDir);
            $audioFiles = array_filter($files, function($file) {
                return pathinfo($file, PATHINFO_EXTENSION) === 'mp3' && $file !== 'dueño.m4a';
            });
            echo json_encode(array_values($audioFiles));
        ?>;
        const ownerAudio = 'audio/dueño.m4a';
    </script>
</body>
</html>
