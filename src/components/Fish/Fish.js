import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Fish = (props) => {

    const { strMeal, strMealThumb, strTags } = props.meal

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strTags}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Fish;