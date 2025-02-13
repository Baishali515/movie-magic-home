
const SAMPLE_MOVIES = [
    {
        title: "Inception",
        rating: 8.8,
        imageUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80",
        year: "2010"
    },
    {
        title: "The Dark Knight",
        rating: 9.0,
        imageUrl: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
        year: "2008"
    },
    {
        title: "Interstellar",
        rating: 8.6,
        imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
        year: "2014"
    },
    {
        title: "Pulp Fiction",
        rating: 8.9,
        imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80",
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
    trendingSection.innerHTML = SAMPLE_MOVIES
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
