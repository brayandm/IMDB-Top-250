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
            <h1>{movie.name}</h1>
            <Image
                className={styles.movie_image}
                src={movie.image_url}
                alt={movie.name}
                width={150}
                height={220}
            />
        </div>
    );
}
