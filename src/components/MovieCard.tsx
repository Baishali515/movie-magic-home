
import { useState } from 'react';
import { Film, Star } from 'lucide-react';

interface MovieCardProps {
  title: string;
  rating: number;
  imageUrl: string;
  year: string;
}

export const MovieCard = ({ title, rating, imageUrl, year }: MovieCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="movie-card group cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <Film className="h-12 w-12 text-muted-foreground animate-pulse" />
          </div>
        )}
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-lg line-clamp-2">{title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-400 flex items-center gap-1">
              <Star className="h-4 w-4 fill-current" />
              {rating}
            </span>
            <span className="text-white/80 text-sm">{year}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
