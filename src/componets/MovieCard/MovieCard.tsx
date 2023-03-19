import styles from './MovieCard.module.css';
import { MovieType } from '@/app/types/movie';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    movie: MovieType;
};

export default function MovieCard({ movie }: Props) {
    return (
        <Link href={`/movie/${movie.id}`}>
            <div className={styles.movie_card}>
                <div className={styles.container}>
                    <Image
                        className={styles.movie_image}
                        src={movie.image_url}
                        alt={movie.name}
                        width={150}
                        height={220}
                    />
                    <div className={styles.movie_info}>
                        <p className={styles.movie_name}> {movie.name}</p>
                        <p className={styles.movie_rating}>
                            {' '}
                            Rating: {movie.rating}
                        </p>
                        <p className={styles.movie_year}> Year: {movie.year}</p>
                    </div>
                </div>
                <p className={styles.movie_desc}> {movie.desc}</p>
            </div>
        </Link>
    );
}
