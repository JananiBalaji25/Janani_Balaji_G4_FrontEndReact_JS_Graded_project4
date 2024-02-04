import { faAnchor, faBookmark, faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { Axios } from "axios";
import { useState } from "react";
import { Alert, Button, Card, Container, Toast, ToastContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import IFavourites from "../../models/IFavourites";
import IMovie from "../../models/IMovies"
import { getFavMovies } from "../../services/favourite";
import LiveSearchFilter from "../Common/LiveSearchFilter";
import Rating from "../Common/rating";
import ToastMessage from "../Common/ToastMessage";
import FavouriteDetails from "../Details/FavouriteDetails";

type Props = {
    movie: IMovie
};


const CommingSoon = ({ movie }: Props) => {

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

    // const showToast = ()=>{
       
    //    if(responseState){
    //      <Alert>Movie added</Alert>
    //    }
    // };

    return (
        
        <Container className="me-auto">
            
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={posterurl} alt={title} style={{ height: '18rem' }} />
                <Card.Body>
                    <div>
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
                                <Link to={`/movies-coming/${id}`} className="btn btn-dark btn-sm"
                                ><FontAwesomeIcon icon={faInfo} className="me-2" />
                                </Link>
                            </div>
                            <div>

                                <Button className="btn btn-light btn-sm" onClick={() => onClickHandler()}
                                ><FontAwesomeIcon icon={faHeart} className="me-2" />
                                </Button>
                                {
                                    showResult ? <ToastMessage message='added to favourite'/> : null
                                }

                            </div>
                        </Card.Title>
                        <Card.Text>
                            {year}|{releaseDate}
                        </Card.Text>
                    </div>
                </Card.Body>

            </Card>
        </Container>
        
        
    );
}

export default CommingSoon;
