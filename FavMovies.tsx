import { faCoffee, faHeart, faHeartCrack, faInfo, faTrashCan, faVenusDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import IFavourites from "../../models/IFavourites";
import Rating from "../Common/rating";
import ToastMessage from "../Common/ToastMessage";

type Props={
    movie: IFavourites
};

const FavMovies = ({movie}: Props) => {
    const [status,setStatus] = useState<string>('');
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

    const favDelete=(fav:IFavourites)=>{
          console.log(fav);
    }

    const OnClickHandeler=()=>{
        setShowResult(true);
       axios.delete(`http://localhost:3001/favourite/${id}`)
       .then(response => setStatus("delete Successful"))
       .catch(error => console.log(error))
       setTimeout(()=>{
        window.location.reload()
       },100);
       
       
    };

    const Show =()=>{
        if(!movie){
            return (<div>Empty</div>);
        }
    }
    return ( 
        <>
        {Show}
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
                        <Link to={`/favourite/${id}`} className="btn btn-dark btn-sm"
                        ><FontAwesomeIcon icon={faInfo} className="me-2" />
                        </Link>
                    </div>
                    <div>
                    <Button className="btn btn-light btn-sm" onClick={() => OnClickHandeler()}
                            ><FontAwesomeIcon icon={faTrashCan} className="me-2" />
                            </Button>
                            {
                                showResult ? <ToastMessage message='removed from favourite' /> : null
                            }
                    </div>
                </Card.Title>
                <Card.Text>
                    {year}|{releaseDate}
                </Card.Text>
            </Card.Body>

        </Card>
        </Container>
        </>
     );
}
 
export default FavMovies;
