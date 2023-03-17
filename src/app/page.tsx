'use client';

import styles from './page.module.css'
import MovieCard from '@/componets/MovieCard'
import top250 from '../../public/top250.json'
import { MovieType } from '@/app/types/movie'

function GetMovies() {
  return top250;
}

export default function Home() {

  const movies = GetMovies();

  const movieCards = movies.map((movie: MovieType, index: number) => {
    return (
      <MovieCard key={index} movie={movie} />
    )
  })

  return (
    <div className={styles.page}>
      <h1> Hello World </h1>
      {
        movieCards
      }
    </div>
  )
}
