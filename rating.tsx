import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';

type Props={
    value:number,
    className?:string
};

const Rating = ({value,className}:Props) => {

    const numFullStars = Math.floor(value);
    const numHalfStars = Math.round(value) - Math.floor(value);
    const numEmptyStars = 5-(numFullStars + numHalfStars);
    return ( 
        <div>
          <span className={`rating ${className}`}>
            {
                Array.from({length: numFullStars}).map(
                    (item,idx) =>(
                        <FontAwesomeIcon icon={faStar} key={idx} />
                    )
                )
            }

{
                Array.from({length: numHalfStars}).map(
                    (item,idx) =>(
                        <FontAwesomeIcon icon={faStarHalfAlt} key={idx} />
                    )
                )
            }

{
                Array.from({length: numEmptyStars}).map(
                    (item,idx) =>(
                        <FontAwesomeIcon icon={faStarEmpty} key={idx} />
                    )
                )
            }

          </span>
        </div>
      );
}

Rating.defaultProps={
    value: 5,
};
 
export default Rating;