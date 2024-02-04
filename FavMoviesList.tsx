import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import IFavourites from "../../models/IFavourites";
import { LoadingStatus } from "../../models/types";
import { getFavMovies } from "../../services/favourite";
import LoadingIndicator from "../Common/LoadingIndicator";
import FavSearch from "../Searching/FavSearch";
import FavMovies from "./FavMovies";



type Props={

}
type State = {
    status: LoadingStatus,
    movies?:IFavourites[],
    error?: Error
};

 
class FavMoviesList extends React.Component<Props, State> {
    
    state: State={
        status: 'LOADING'
    };
    render() { 
        
            let el;
            const {status, movies, error} = this.state;
            switch(status){
                case 'LOADING':
                    el = (
                        <LoadingIndicator
                          size="large"
                          message="we are loading movies, please wait 🕶️"/>
                    );
                    break;
                    case 'LOADED':
                        el=(
                          <Row sx={1} md={3} lg={4}>
                            <FavSearch />
                            {
                                movies?.map(
                                    movie => (
                                        <Col key={movie.id} className="d-flex align-items-stretch my-3">
                                            <FavMovies
                                              movie={movie} />
                                        </Col>
                                    )
                                )
                            }
                          </Row>
                        );
                        break;
                    case 'ERROR_LOADING':
                        el=(
                            <Alert variant="danger my-3">
                                 {error?.message}
                            </Alert>
                        );
                        break;
            }
            return el;    
    }
    async componentDidMount(){
        this.setState({
           status:'LOADING'
        });
        try{
            const data = await getFavMovies();
            this.setState({
                status:'LOADED',
                movies:data
            });
        }catch(error){
            this.setState({
                status:'ERROR_LOADING',
            });
        }
    }
}
 

 
export default FavMoviesList;