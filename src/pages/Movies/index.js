import { Link } from 'react-router-dom';
import Card from '../../components/Cards';
import movies from '../../services/movies';
import arrow from '../../assets/arrow.svg'
import './style.css';

const Movies = () => {
    return (
        <>
            <div className="links">
                <Link to="/"><img src={arrow} className="return"/></Link>
                <h1 className="title-page">Filmes</h1>
                <Link to="/bio" className="page">Bio</Link>
            </div>
            <div className="movies">
                {movies.map(movie => (
                    <Card title={movie.title} img={movie.img} year={movie.year} description={movie.description} className="movie" />
                ))}
            </div>
        </>
    );
}

export default Movies;