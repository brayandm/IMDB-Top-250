'use client';

import styles from './MovieCard.module.css'
import { MovieType } from '@/app/types/movie'
import Image from 'next/image';
import { useState } from 'react';

type Props = {
    movie: MovieType
}

export default function MovieCard({ movie }: Props) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className={!isHovered ? styles.movie_card : styles.movie_card_hover} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >

            <div className={styles.container}>
                <Image className={!isHovered ? styles.movie_image : styles.movie_image_hover} src={movie.image_url} alt={movie.name} width={!isHovered ? 150 : 75} height={!isHovered ? 220 : 110} />
                <div className={styles.movie_info}>
                    {isHovered && <p className={styles.movie_name}> {movie.name}</p>}
                    {isHovered && <p className={styles.movie_rating}> Rating: {movie.rating}</p>}
                    {isHovered && <p className={styles.movie_year}> Year: {movie.year}</p>}
                </div>
            </div>
            {isHovered && <p className={styles.movie_desc}> {movie.desc}</p>}
        </div >
    );
};