
const SAMPLE_MOVIES = [
    {
        title: "Inception",
        rating: 8.8,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        year: "2010"
    },
    {
        title: "The Dark Knight",
        rating: 9.0,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        year: "2008"
    },
    {
        title: "Interstellar",
        rating: 8.6,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        year: "2014"
    },
    {
        title: "Pulp Fiction",
        rating: 8.9,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        year: "1994"
    },
    {
        title: "The Shawshank Redemption",
        rating: 9.3,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        year: "1994"
    },
    {
        title: "The Godfather",
        rating: 9.2,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        year: "1972"
    },
    {
        title: "Fight Club",
        rating: 8.8,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        year: "1999"
    },
    {
        title: "Forrest Gump",
        rating: 8.8,
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        year: "1994"
    }
];

function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-image">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-details">
                    <span class="movie-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        ${movie.rating}
                    </span>
                    <span class="movie-year">${movie.year}</span>
                </div>
            </div>
        </div>
    `;
}

function initializeMovies() {
    const recommendedSection = document.getElementById('recommended-movies');
    const trendingSection = document.getElementById('trending-movies');
    
    // Add recommended movies (first 4)
    recommendedSection.innerHTML = SAMPLE_MOVIES.slice(0, 4)
        .map(movie => createMovieCard(movie))
        .join('');
    
    // Add trending movies (all)
    trendingSection.innerHTML = SAMPLE_MOVIES.slice(4)
        .map(movie => createMovieCard(movie))
        .join('');
}

// Handle category selection
document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        // Remove active class from all chips
        document.querySelectorAll('.category-chip').forEach(c => {
            c.classList.remove('active');
        });
        // Add active class to clicked chip
        chip.classList.add('active');
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', initializeMovies);
