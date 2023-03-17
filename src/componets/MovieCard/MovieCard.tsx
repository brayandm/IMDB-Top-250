import styles from './MovieCard.module.css'
import { MovieType } from '@/app/types/movie'
import Image from 'next/image';

type Props = {
    movie: MovieType
}

export default function MovieCard({ movie }: Props) {

    return (
        <div className={styles.movie_card}>
            <Image className={styles.movie_image} src={movie.image_url} alt={movie.name} width={150} height={225} />
            <p>{movie.name}</p>
        </div >
    );
};