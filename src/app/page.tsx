import styles from './page.module.css';
import { MovieType } from '@/app/types/movie';
import MovieWrapper from '@/componets/MovieWrapper';

async function getMovies() {
    const res = await fetch(
        'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json'
    );
    const movies = (await res.json()) as MovieType[];

    movies.forEach((movie, index) => {
        movie.id = index;
    }
    );

    return movies;
}

export default async function Home() {
    const movies = await getMovies();

    movies.sort((a, b) => {
        return a.rating - b.rating;
    });

    return (
        <div className={styles.page}>
            <MovieWrapper movies={movies} />
        </div>
    );
}
