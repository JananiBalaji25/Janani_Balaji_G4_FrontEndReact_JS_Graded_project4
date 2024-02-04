import {  faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import IFavourites from "../../models/IFavourites";
import ITopMovies from "../../models/ITopMovies";
import Rating from "../Common/rating";
import ToastMessage from "../Common/ToastMessage";

type Props={
    movie: ITopMovies
};

const TopRated = ({movie}: Props) => {
    const [favourite, setFavourite] = useState<IFavourites[]>([]);
    const [showResult, setShowResult] = useState(false);

    const {
        id,
        title,
        year,
        ratings,
        poster,
        releaseDate,
        imdbRating,
        contentRating,
        storyline,
        posterurl,
    } = movie;

    const addFav = (fav: IFavourites) => {
        console.log(fav, "fav");

    };

    const onClickHandler = () => {
        setShowResult(true);
        axios.post('http://localhost:3001/favourite', movie)
            .then(response => {
                addFav(movie)
            })
            .catch(error => {
                alert("something wrong")
            })
    }

    return ( 
        <Container className="me-auto">
        <Card style={{width: '14rem'}}>
            <Card.Img variant="top" src={posterurl} alt={title} style={{height:'18rem'}} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <div>
                        {title}
                        <div className="text-xs">
                            {/* <Rating value={imdbRating} className="me-2" /> */}
                            {imdbRating} ({ratings.length} rating)
                            {contentRating}
                        </div>
                    </div>
                    <div>
                        <Link to={`/top-rated-movies/${id}`} className="btn btn-dark btn-sm"
                        ><FontAwesomeIcon icon={faInfo} className="me-2" />
                        </Link>
                    </div>
                    <div>
                    <Button className="btn btn-light btn-sm" onClick={() => onClickHandler()}
                            ><FontAwesomeIcon icon={faHeart} className="me-2" />
                            </Button>
                            {
                                showResult ? <ToastMessage message='added to favourite' /> : null
                            }
                    </div>
                </Card.Title>
                <Card.Text>
                    {year}|{releaseDate}
                </Card.Text>
            </Card.Body>

        </Card>
        </Container>
     );
}
 
export default TopRated;
