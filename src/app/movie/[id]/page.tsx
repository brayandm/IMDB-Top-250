import styles from './page.module.css';
import { MovieType } from '@/app/types/movie';
import MoviePage from '@/componets/MoviePage/MoviePage';

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
            <MoviePage movie={movie} />
        </div>
    );
}
