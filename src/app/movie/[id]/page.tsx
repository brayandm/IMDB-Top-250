import styles from './page.module.css';
import { MovieType } from '@/app/types/movie';
import Image from 'next/image';
import ButtonBack from '@/componets/ButtonBack';

async function getMovie(id: number) {
    const res = await fetch(
        'https://raw.githubusercontent.com/theapache64/top250/master/top250_min.json'
    );
    return (await res.json())[id] as MovieType;
}

type Props = {
    params: {
        id: string;
    }
};

export default async function Home({ params }: Props) {

    const movie = await getMovie(parseInt(params.id));

    return (
        <div className={styles.page}>
            <ButtonBack />
            <h1 className={styles.title}>{movie.name}</h1>
            <div className={styles.container}>
                <Image
                    className={styles.image}
                    src={movie.image_url}
                    alt={movie.name}
                    width={150}
                    height={220}
                />
                <div className={styles.info}>
                    <p className={styles.rating}> <b>Rating:</b> {movie.rating} </p>
                    <p className={styles.year}>  <b>Year:</b> {movie.year}</p>
                    <p className={styles.desc}> <b>Description:</b> {movie.desc}</p>

                    <p className={styles.actors}> <b>Actors:</b> {
                        movie.actors.map((actor, index) => {
                            if (index === movie.actors.length - 1)
                                return <span key={index}> {actor} </span>;
                            return <span key={index}> {actor}, </span>;
                        })
                    }</p>
                    <p className={styles.directors}> <b>Directors:</b> {
                        movie.directors.map((director, index) => {
                            if (index === movie.directors.length - 1)
                                return <span key={index}> {director} </span>;
                            return <span key={index}> {director}, </span>;
                        })
                    }</p>
                    <p className={styles.genres}> <b>Genres:</b> {
                        movie.genre.map((genre, index) => {
                            if (index === movie.genre.length - 1)
                                return <span key={index}> {genre} </span>;
                            return <span key={index}> {genre}, </span>;
                        })
                    }</p>
                </div>
            </div>
        </div>
    );
}
