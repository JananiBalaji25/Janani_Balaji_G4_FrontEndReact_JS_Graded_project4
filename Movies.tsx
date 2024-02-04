import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import IMovie from "../models/IMovies";
import { LoadingStatus } from "../models/types";
import { getMovies } from "../services/getMovies";
import LoadingIndicator from "./Common/LoadingIndicator";
import MovieListItem from "./movieList/movieListItems";
import InThreaterSearch from "./Searching/InThreaterSearch";

type Props={

}
type State = {
    status: LoadingStatus,
    movies?:IMovie[],
    error?: Error
};

 
class Movies extends React.Component<Props, State> {
    
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
                            <InThreaterSearch />
                            {
                                movies?.map(
                                    movie => (
                                        <Col key={movie.id} className="d-flex align-items-stretch my-3">
                                            <MovieListItem 
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
            const data = await getMovies();
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
 

 
export default Movies;