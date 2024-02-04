import { faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Badge, Button, Card, Container, NavItem, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import ICommingSoon from "../../models/ICommingSoon";
import IFavourites from "../../models/IFavourites";
import IMovie from "../../models/IMovies";
import { getComingMovies, getComingMoviesByTitle } from "../../services/comingSoon";
import { getFavMoviesByTitle } from "../../services/favourite";
import { getTopMoviesByTitle } from "../../services/topRatedMovies";




const TopSearch = () => {
    const [data, setData] = useState<ICommingSoon[]>([]);
    const [title, setTitle] = useState<string>('');
    const [showResult, setShowResult] = useState(false);



    // useEffect(() => {
    //     getComingMoviesByTitle.then(data => setData(data));
    //   }, []);
    //   useEffect(() => {
    //     const fetchMovie = async () => {
    //         try {
    //             const data = await getComingMoviesByTitle(title);
    //             setData(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchMovie();
    // },
    //     [title]
    // );
    useEffect(() => {
        getTopMoviesByTitle(title)
    }, [title])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const title = e.target.value;

        setTitle(title);
    }

    const retrieveData = () => {
        getComingMovies().then((response) => {
            setData(response);
            console.log(response);
        })
            .catch((e: Error) => {
                console.log(e);
            })
    }

    const findByTitle = () => {
        console.log(title, "title")
        console.log(getTopMoviesByTitle(title), "titledata")
        // console.log(data,"data");
        const data = getTopMoviesByTitle(title)
            .then((response) => {
                setData(response)
                console.log(response, "response");
                console.log(data, "data");
                // console.log(response.data);
                // console.log(data,"data");
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };



    // const addFav = (fav: IFavourites) => {
    //     console.log(fav, "fav");

    // };

    // const onClickHandler = () => {
    //     setShowResult(true);
    //     axios.post('http://localhost:3001/favourite', movie)
    //         .then(response => {
    //             addFav(movie)
    //         })
    //         .catch(error => {
    //             alert("something wrong")
    //         })
    // }
    return (
        <span className="input-group justify-content-end" >
            <div>
                <Badge bg="secondary">Search with Perfect name(case Sensetive)</Badge>
                <input type="text" placeholder="search" value={title} onChange={handleInputChange} />
            </div>
            <div className="">
                <button className="btn btn-primary" type="button" onClick={findByTitle}>Search</button>
            </div>

            {data && data.map((item) => (

                <div key={item.id}>
                    <Container className="me-auto">

                        <Card border="info" style={{ width: '14rem' }}
                            bg='danger' text="white">
                            <Card.Img variant="top" src={item.posterurl} alt={item.title} style={{ height: '18rem' }} />
                            <Card.Body>
                                <div>
                                    <Card.Title className="d-flex justify-content-between" >
                                        <div>
                                            {title}

                                        </div>
                                        <div>
                                            <Link to={`/top-rated-movies/${item.id}`} className="btn btn-dark btn-sm"
                                            ><FontAwesomeIcon icon={faInfo} className="me-2" />
                                            </Link>
                                        </div>
                                        {/* <div>

                                <Button className="btn btn-light btn-sm" onClick={() => onClickHandler()}
                                ><FontAwesomeIcon icon={faHeart} className="me-2" />
                                </Button>
                                {
                                    showResult ? <ToastMessage message='added to favourite'/> : null
                                }

                            </div> */}
                                    </Card.Title>

                                </div>
                            </Card.Body>

                        </Card>
                    </Container>
                </div>
            )

            )}
            <hr />
            <hr />
        </span>

    );
}

export default TopSearch;