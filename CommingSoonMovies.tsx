import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import ICommingSoon from "../../models/ICommingSoon";
import { LoadingStatus } from "../../models/types";
import { getComingMovies } from "../../services/comingSoon";
import LiveSearch from "../Common/LiveSearchFilter";
import LoadingIndicator from "../Common/LoadingIndicator";
import CommingSoon from "./CommingSoon";


type Props={

}
type State = {
    status: LoadingStatus,
    movies?:ICommingSoon[],
    error?: Error
};

 
class ComingSoonMovies extends React.Component<Props, State> {
    
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
                          <Row sx={2} md={3} lg={4}>
                            <LiveSearch />
                            {
                                movies?.map(
                                    movie => (
                                        <Col key={movie.id} className="d-flex align-items-stretch my-2">
                                            <CommingSoon 
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
            const data = await getComingMovies();
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
 

 
export default ComingSoonMovies;