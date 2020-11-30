import './style.css';
import {Link} from 'react-router-dom';
import illustration from '../../assets/amico.svg';
import arrow from '../../assets/arrow.svg';

const Home = () => {
    return (
        <div className="home">

                <div>
                    <h1 className="title">Old but Gold</h1>
                    <p className="subtitle">Clássicos filminhos antigos que você precisa assistir</p>
                    <p className="author">Curadoria por <Link to="/bio"><span>Thaysa Gomes</span></Link></p>
                    
                    <Link to="/movies" className="btn">Ver filmes<span><img src={arrow}/></span></Link>
                </div>
                    <img src={illustration} className="illustration"/>

        </div>
    );
}

export default Home;