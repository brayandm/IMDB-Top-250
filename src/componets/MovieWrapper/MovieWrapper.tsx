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

    const [filterType, setFilterType] = useState('name');

    if (filterType == 'name') {
        movies = movies.filter((movie) => {
            return movie.name.toLowerCase().includes(filter.toLowerCase());
        });
    } else if (filterType == 'genre') {
        movies = movies.filter((movie) => {
            for (let i = 0; i < movie.genre.length; i++) {
                if (movie.genre[i].toLowerCase().includes(filter.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    } else if (filterType == 'actor') {
        movies = movies.filter((movie) => {
            for (let i = 0; i < movie.actors.length; i++) {
                if (movie.actors[i].toLowerCase().includes(filter.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    } else if (filterType == 'director') {
        movies = movies.filter((movie) => {
            for (let i = 0; i < movie.directors.length; i++) {
                if (movie.directors[i].toLowerCase().includes(filter.toLowerCase())) {
                    return true;
                }
            }
            return false;
        });
    }

    return (
        <div className={styles.movie_wrapper}>
            <h1> Search </h1>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <div>
                <button className={filterType == 'name' ? styles.filter_active : styles.filter} onClick={() => setFilterType('name')}>Name</button>
                <button className={filterType == 'genre' ? styles.filter_active : styles.filter} onClick={() => setFilterType('genre')}>Genre</button>
                <button className={filterType == 'actor' ? styles.filter_active : styles.filter} onClick={() => setFilterType('actor')}>Actor</button>
                <button className={filterType == 'director' ? styles.filter_active : styles.filter} onClick={() => setFilterType('director')}>Director</button>
            </div>
            {<MovieList movies={movies} />}
        </div>
    );
}
