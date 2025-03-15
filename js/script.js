document.addEventListener('DOMContentLoaded', function() {
    const player = document.getElementById('radioPlayer');

    // Función para mezclar aleatoriamente un array (algoritmo Fisher-Yates)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Función para reproducir el audio del dueño
    function playOwnerAudio() {
        player.src = ownerAudio;
        player.play();
    }

    // Función para reproducir la siguiente canción
    function playNextSong() {
        if (shuffledSongs.length === 0) {
            // Si no hay más canciones, reiniciar la lista
            shuffledSongs = shuffleArray([...audioFiles]);
        }
        const nextSong = `audio/${shuffledSongs.pop()}`; // Obtener la siguiente canción
        player.src = nextSong;
        player.play();
    }

    // Mezclar las canciones al inicio
    let shuffledSongs = shuffleArray([...audioFiles]);

    // Cargar la primera canción al iniciar
    playNextSong();

    // Evento cuando termina la reproducción de una canción
    player.addEventListener('ended', function() {
        // Reproducir el audio del dueño
        playOwnerAudio();

        // Cuando termine el audio del dueño, reproducir la siguiente canción
        player.addEventListener('ended', function() {
            playNextSong();
        }, { once: true }); // El evento se ejecutará solo una vez
    });
});