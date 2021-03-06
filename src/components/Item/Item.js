import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap'
/* renderizamos las imagenes desde la db */
/* const cargarImagen = require.context('./../../images', true); */

export default function Item({props}){
    const {description, url, id} = props;

    return <Card style={{width: '18rem'}} className="m-3 item">
            <Card.Img variant="top" src={url} className="itemImage"/>
            <Card.Body>
            
            <Card.Text className="text-center">
                <b>{description}</b>
            </Card.Text>
            <div className="text-center">
                <Link to={`/item/${id}`}><Button variant="primary">VER</Button></Link>
            </div>
                
            </Card.Body>
        </Card>
        
}
