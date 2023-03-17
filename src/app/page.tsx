'use client';

import styles from './page.module.css'
import top250 from '../../public/top250.json'
import MovieList from '@/componets/MovieList';
import { useState } from 'react';

function GetMovies() {
  return top250;
}

export default function Home() {

  const [filter, setFilter] = useState('');

  let movies = GetMovies();

  movies.sort((a, b) => {
    return a.rating - b.rating;
  });

  movies = movies.filter((movie) => {
    return movie.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className={styles.page}>
      <h1> Search </h1>
      <input type="text" value={filter} onChange={e => setFilter(e.target.value)} />
      {
        <MovieList movies={movies} />
      }
    </div>
  )
}
