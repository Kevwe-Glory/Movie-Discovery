import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '574cf5f71934e72f9ea4dae5640ea158'; // Replace with your TMDb API key
const API_URL = 'https://api.themoviedb.org/3';

const Featured = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await axios.get(`${API_URL}/movie/top_rated`, {
          params: {
            api_key: API_KEY,
            language: 'en-US',
            page: 1,
          },
        });

        if (response.status === 200) {
          const data = response.data.results.slice(0, 10); // Get the top 10 movies
          setTopMovies(data);
          setIsLoading(false);
        } else {
          throw new Error('API request failed');
        }
      } catch (error) {
        console.error('Error:', error);
        setIsLoading(false);
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <div className="app">
      <h2>Featured</h2>
      <p data-testid="see-more">see more</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          {topMovies.map((movie) => (
            <div key={movie.id} className="movie" data-testid="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                data-testid="movie-poster"
              />
              <h3 data-testid="movie-title">{movie.title}</h3>
              <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Featured;
