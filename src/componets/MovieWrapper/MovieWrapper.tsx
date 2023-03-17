'use client';

import styles from './MovieWrapper.module.css';
import { MovieType } from '@/app/types/movie';
import { useState } from 'react';
import MovieList from '../MovieList';

type Props = {
    movies: MovieType[];
};

export default function MovieWrapper({ movies }: Props) {
    const [filter, setFilter] = useState('');

    movies = movies.filter((movie) => {
        return movie.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <div className={styles.movie_wrapper}>
            <h1> Search </h1>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            {<MovieList movies={movies} />}
        </div>
    );
}
