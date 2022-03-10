import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { CardStyle2, NavStyle, StyImg } from '../styles/style';
import img6 from '../images/profile-1.jpg';
import img7 from '../images/profile-2.jpg';
import img8 from '../images/profile-3.jpg'

const Cards2 = () => {


    const dataList2 = [
        {
            "id": "0",
            "img": img6,
            "title": "Satish Patel",
            "title2": "Founder & CEO, Huddle",
            "desc": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        },
        {
            "id": "1",
            "img": img7,
            "title": "Bruce McKenzie",
            "title2": "Founder & CEO, Huddle",
            "desc": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        },
        {
            "id": "2",
            "img": img8,
            "title": "Iva Boyd",
            "title2": "Founder & CEO, Huddle",
            "desc": "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        }
    ];


    return (
        <div>
            <NavStyle >
                <Row xs={1} md={3} className="cardss">
                    {dataList2.map(data => (
                        <Col>
                            <CardStyle2 >                               
                                <Card.Body className="card_Select">                                    
                                    <Card.Text>
                                        {data.desc}
                                    </Card.Text>
                                    <StyImg style={{display: 'inline-block'}}  src={data.img} alt="" width="36px" />
                                    <h6 style={{display: 'inline-block'}} >{data.title}</h6>
                                    <h6 >{data.title2}</h6>
                                </Card.Body>
                            </CardStyle2>
                        </Col>
                    ))}
                </Row>
            </NavStyle>
        </div>
    )
}

export default Cards2