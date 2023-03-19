import styles from './MovieCard.module.css';
import { MovieType } from '@/app/types/movie';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
    movie: MovieType;
};

function addToFavorites(movieId: number) {
    let favorites = localStorage.getItem('favorites');
    if (favorites === null) {
        localStorage.setItem('favorites', movieId.toString());
    } else {
        let favoritesArr = favorites.split(',');
        if (!favoritesArr.includes(movieId.toString())) {
            favoritesArr.push(movieId.toString());
            localStorage.setItem('favorites', favoritesArr.join(','));
        }
    }
}

function removeFromFavorites(movieId: number) {
    let favorites = localStorage.getItem('favorites');
    if (favorites !== null) {
        let favoritesArr = favorites.split(',');
        if (favoritesArr.includes(movieId.toString())) {
            favoritesArr = favoritesArr.filter((id) => id !== movieId.toString());
            localStorage.setItem('favorites', favoritesArr.join(','));
        }
    }
}

function isInFavorites(movieId: number) {
    let favorites = localStorage.getItem('favorites');
    if (favorites === null) {
        return false;
    } else {
        let favoritesArr = favorites.split(',');
        return favoritesArr.includes(movieId.toString());
    }
}

function toggleFavorite(movieId: number) {
    if (isInFavorites(movieId)) {
        removeFromFavorites(movieId);
    } else {
        addToFavorites(movieId);
    }
}

export default function MovieCard({ movie }: Props) {

    const [isFavorite, setIsFavorite] = useState(isInFavorites(movie.id));

    function handleFavoriteClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        setIsFavorite(!isFavorite);
        toggleFavorite(movie.id);
    }

    return (
        <div className={styles.movie_card}>
            <Link href={`/movie/${movie.id}`}>
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
                {isFavorite ?
                    (<button className={styles.favorite_button} onClick={(e) => handleFavoriteClick(e)}> ❤️ </button>)
                    :
                    (<button className={styles.favorite_button} onClick={(e) => handleFavoriteClick(e)}> 🤍 </button>)
                }
            </Link>
        </div>
    );
}
