'use client';

import styles from './page.module.css'
import top250 from '../../public/top250.json'
import MovieList from '@/componets/MovieList';

function GetMovies() {
  return top250;
}

export default function Home() {

  const movies = GetMovies();

  movies.sort((a, b) => {
    return a.rating - b.rating;
  });

  return (
    <div className={styles.page}>
      <h1> Hello World </h1>
      {
        <MovieList movies={movies} />
      }
    </div>
  )
}
