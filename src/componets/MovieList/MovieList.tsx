import MovieCard from '../MovieCard';
import styles from './MovieList.module.css';
import { MovieType } from '@/app/types/movie';

type Props = {
    movies: MovieType[];
};

export default function MovieList({ movies }: Props) {
    return (
        <div className={styles.movie_list}>
            {movies.map((movie: MovieType, index: number) => {
                return <MovieCard key={index} movie={movie} />;
            })}
        </div>
    );
}
