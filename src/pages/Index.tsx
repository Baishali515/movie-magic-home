
import { Search } from 'lucide-react';
import { MovieCard } from '@/components/MovieCard';
import { CategoryChip } from '@/components/CategoryChip';

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
  },
];

const CATEGORIES = ["All", "Action", "Drama", "Comedy", "Sci-Fi", "Horror", "Romance"];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Discover Your Next Favorite Movie
        </h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          Personalized movie recommendations based on your taste. Find the perfect movie for any mood.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative group">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
        </div>
      </section>

      {/* Categories */}
      <section className="container px-4 py-8">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {CATEGORIES.map((category, index) => (
            <CategoryChip key={category} active={index === 0}>
              {category}
            </CategoryChip>
          ))}
        </div>
      </section>

      {/* Movie Grid */}
      <section className="container px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SAMPLE_MOVIES.map((movie) => (
            <MovieCard key={movie.title} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
