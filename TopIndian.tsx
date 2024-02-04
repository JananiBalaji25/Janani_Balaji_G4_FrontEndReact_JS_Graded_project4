import React from "react";
import { Alert, Col, Row } from "react-bootstrap";
import IIndian from "../../models/IIndian";
import { LoadingStatus } from "../../models/types";
import { getIndianMovies } from "../../services/topRatedIndian";
import LoadingIndicator from "../Common/LoadingIndicator";
import IndianSearch from "../Searching/IndianSearch";
import Indian from "./Indian";



type Props={

}
type State = {
    status: LoadingStatus,
    movies?:IIndian[],
    error?: Error
};

 
class TopIndian extends React.Component<Props, State> {
    
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
                            <IndianSearch />
                            {
                                movies?.map(
                                    movie => (
                                        <Col key={movie.id} className="d-flex align-items-stretch my-3">
                                            <Indian
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
            const data = await getIndianMovies();
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
 

 
export default TopIndian;