import React from 'react'
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

const ListMovie = ({filteredMovie}) => {
    return (
        
        <div className="listMovies">
            {filteredMovie.map((el, i) => 
                <div key={i} className="movie">
                    <Card  className="poster" style={{width: "18rem"}} >
                    <Link to={`/movielist/${el.title}`}>
                        <Card.Img className="imageF" variant="top"  src={el.posterUrl} />
                        </Link>
                        <Card.Body className="bodyCard">
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text>{el.description}</Card.Text>
                            <StarRatingComponent value={el.rate}/>
                        </Card.Body>
                        
                    </Card>
                
                </div>
            )}
            
        </div>
        
    )
}

export default ListMovie