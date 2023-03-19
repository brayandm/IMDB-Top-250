import styles from './page.module.css';
import { MovieType } from '@/app/types/movie';

async function getMovie(id : number) {
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

export default async function Home({params} : Props) {

    const id = parseInt(params.id);
   
    const movie = await getMovie(1);

    return (
        <div className={styles.page}>
            <h1>Movie Page {id}</h1>

        </div>
    );
}
