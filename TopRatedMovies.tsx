import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import ITopMovies from "../../models/ITopMovies";
import { LoadingStatus } from "../../models/types";
import { getTopMovies } from "../../services/topRatedMovies";
import LoadingIndicator from "../Common/LoadingIndicator";
import TopSearch from "../Searching/TopSearch";
import TopRated from "./TopRated";




type Props={

}
type State = {
    status: LoadingStatus,
    movies?:ITopMovies[],
    error?: Error
};

 
class TopRatedMovies extends React.Component<Props, State> {
    
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
                            <TopSearch />
                            {
                                movies?.map(
                                    movie => (
                                        <Col key={movie.id} className="d-flex align-items-stretch my-3">
                                            <TopRated
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
            const data = await getTopMovies();
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
 

 
export default TopRatedMovies;