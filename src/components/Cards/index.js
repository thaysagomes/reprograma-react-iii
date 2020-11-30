import './style.css'

const Card = ({title, img, year, description}) => {
    return (
        <div className="card">
            <div className="info">
                <h2 className="movie-title">{title}</h2>
                <p className="year">{year}</p>
            </div>
            <img src={img} className="poster"/>
            <p className="description">{description}</p>
        </div>
    );
}

export default Card;