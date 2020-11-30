import { Link } from 'react-router-dom';
import './style.css';
import bio from '../../assets/bio.jpg';
import arrow from '../../assets/arrow.svg'

const Bio = () => {
    return (
        <>
            <div className="links">
                <Link to="/"><img src={arrow} className="return" /></Link>
                <h1 className="title-page">Sobre a autora</h1>
                <Link to="/movies" className="page">Filmes</Link>
            </div>

            <div className="bio-info">
                <div>
                    <img src={bio} className="img" />
                    <h1>Thaysa Gomes</h1>
                    <div className="social">
                        <a href="https://github.com/thaysagomes" target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/tcgms/" target="_blank">LinkedIn</a>
                        <a href="https://dribbble.com/tcgms" target="_blank">Dribbble</a>
                    </div>
                </div>
                <p className="bio-paragraph">Sou formada em Ciências Biológicas pela Universidade Federal Rural de Pernambuco, mas atualmente sou estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal de Pernambuco. Este é um projeto em React, realizado no curso de Front-end da Reprograma.</p>
            </div>
        </>
    );
}

export default Bio;