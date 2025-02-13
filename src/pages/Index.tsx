
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

const CATEGORIES = ["All", "Action", "Drama", "Comedy", "Horror", "Romance"];

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <section className="container px-4 pt-16 pb-8 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-white">
          Movie Recommendation System
        </h1>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative group mb-12">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-white transition-colors duration-300" />
        </div>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide justify-center">
          {CATEGORIES.map((category, index) => (
            <CategoryChip key={category} active={index === 0}>
              {category}
            </CategoryChip>
          ))}
        </div>
      </section>

      {/* Recommended Movies */}
      <section className="container px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-white">Recommended for You</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SAMPLE_MOVIES.slice(0, 4).map((movie) => (
            <MovieCard key={movie.title} {...movie} />
          ))}
        </div>
      </section>

      {/* Trending Movies */}
      <section className="container px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-white">Trending Now</h2>
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
