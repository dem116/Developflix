import peliculas from './peliculas.js'

const URL_BASE = 'https://image.tmdb.org/t/p/w500';

function mostrarPeliculas(generoId, contenedorId) {
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genre_ids.includes(generoId));

    const contenedor = document.getElementById(contenedorId);

    peliculasFiltradas.forEach(pelicula => {
        const divPelicula = document.createElement('div');
        divPelicula.className = 'pelicula';

        const imgPelicula = document.createElement('img');
        imgPelicula.src = `${URL_BASE}${pelicula.poster_path}`;
    

        const tituloPelicula = document.createElement('h3');
        tituloPelicula.textContent = pelicula.title;

        divPelicula.appendChild(imgPelicula);
        divPelicula.appendChild(tituloPelicula);

        contenedor.appendChild(divPelicula);
    });
}

// Llamar para mostrar películas 
mostrarPeliculas(28, 'genero-28'); // Acción
mostrarPeliculas(53, 'genero-53'); // Thriller
mostrarPeliculas(12, 'genero-12'); // Aventura
