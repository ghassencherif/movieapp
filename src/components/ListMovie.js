import React from 'react'
import { Card } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';

const ListMovie = (props) => {
    return (
        <div className="listMovies">
            {props.filteredMovie.map((el) => 
                <div  className="movie">
                <Card  className="poster" style={{width: "18rem"}} >
                    <Card.Img className="imageF" variant="top"  src={el.posterUrl} />
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