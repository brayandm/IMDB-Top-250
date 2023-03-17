import styles from './MovieCard.module.css'
import { MovieType } from '@/app/types/movie'

type Props = {
    movie: MovieType
}

export default function MovieCard({ movie }: Props) {

    return (
        <div className={styles.movie_card}>
            <p>{movie.name}</p>
        </div >
    );
};