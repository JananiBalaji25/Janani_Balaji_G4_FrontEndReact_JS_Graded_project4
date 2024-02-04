import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Badge, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import IMovie from "../../models/IMovies";
import { LoadingStatus } from "../../models/types";
import { getComingMoviesById } from "../../services/comingSoon";
import { getMoviesById } from "../../services/getMovies";
import { getTopMoviesById } from "../../services/topRatedMovies";
import LoadingIndicator from "../Common/LoadingIndicator";
import Rating from "../Common/rating";


const TopRatedMoviesDetails = () => {

    const [status, setStatus] = useState<LoadingStatus>('LOADING');
    const [movie,setMovie] = useState<IMovie | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const {id} = useParams() as  {id:string};

    useEffect(()=>{
        const fetchMovie = async ()=>{
            try{
                const data = await getTopMoviesById(+id);
                setMovie(data);
                setStatus('LOADED');
            }catch (error){
                const err = error as AxiosError;
                setError(err);
                setStatus('ERROR_LOADING');
            }
        };
        fetchMovie();
    },
    [id]
    );
     
    let el;
    switch(status) {
        case 'LOADING':
            el=(
                <LoadingIndicator
                size="large"
                message="Movie data is being fetched, be cool and enjoy the thrill....😎...🤖..👻.☠️" />
            );
            break;
        case 'LOADED':
            const{
                id,
                title,
                year,
                genres,
                duration,
                releaseDate,
                storyline,
                imdbRating,
                posterurl,
                actors,
                averageRating,
                ratings
            } = movie as IMovie;
            el=(
                <>
                 <Row className="my-3">
                        <Col xs={12}>
                            <h1>{title}</h1>
                            <hr />
                        </Col>
                        <Col xs={12} sm={12} lg={4} className="my-2">
                            <img src={posterurl}
                                alt={title}
                                className="w-100"
                                style={{height:'25rem'}}
                            />
                        </Col>
                        <Col xs={12} sm={12} lg={8} className="my-2">
                            <div className="ms-3">
                                {
                                    genres.map(
                                        geren => (
                                            <Badge pill bg="primary me-2" key={geren} className="text-lg"
                                            >
                                                {geren}
                                            </Badge>
                                        )
                                    )
                                }
                            </div>
                            {/* <div>
                            {
                                actors.map(
                                    actor => (
                                        <Badge bg="danger me-2" key={actor}
                                        >
                                            {actor}
                                        </Badge>
                                    )
                                )
                            }
                        </div> */}

                            {/* from */}
                            <div className="my-3">
                                <Card bg="light" border="dark">
                                    <Card.Header>{
                                        actors.map(
                                            actor => (
                                                <Badge bg="danger me-2" key={actor} className="text-lg"
                                                >
                                                    {actor}
                                                </Badge>
                                            )
                                        )
                                    }</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {storyline}.
                                            </p>
                                            <footer className="blockquote-footer">
                                                {title} <cite title="Source Title">{year}</cite>
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </div>

                            {/* to */}

                            {/* <div className="fs-5 my-2">
                            {storyline}
                        </div> */}
                            <Row xs={3} className="text-sm">
                                <Col>
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span className="ms-2">{releaseDate} || {year}</span>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faClock} />
                                    <span className="ms-2">movie duration: {duration}</span>
                                </Col>
                                <Col>
                                    <Rating value={imdbRating} className="me-2" />
                                    {imdbRating} ({ratings.length} ratings)
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </>

            );
            break;
        case 'ERROR_LOADING':
            el = (
                <Alert variant="danger my-4">
                    {error?.message}
                </Alert>
            );
            break;
    }
    return el;
}
 
export default TopRatedMoviesDetails;