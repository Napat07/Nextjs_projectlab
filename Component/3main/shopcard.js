import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col,CardImg} from 'reactstrap';
import './shopcardStyle.css' ;
export default function Shopcard () {
    return (
        <Row>
        <Col sm="6">
          <Card body>
          <CardImg class="container" top width="100%" src="/static/goods2.PNG" alt="Card image cap" />
          <CardTitle className="image img-fluid" herf="/shop">Sparkfun Atmospheric Sensor Breakout - BME282 ฿1011.15</CardTitle>
            <div class="overlay">
                <div class="text">Buy</div>
            </div>

          <Button color="primary" herf="/shop">BUY</Button>{' '}
          </Card>
        </Col>
        
        <Col sm="6">
          <Card body>
            <CardTitle>Special Title Treatment2</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>

        <Col sm="6">
          <Card body>
            <CardTitle>Special Title Treatment3</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
      </Row>
    );
}
