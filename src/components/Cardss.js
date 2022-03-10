import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import img1 from '../images/icon-access-anywhere.svg'
import img2 from '../images/icon-any-file.svg'
import img3 from '../images/icon-collaboration.svg'
import img4 from '../images/icon-security.svg'
import { CardStyle, NavStyle } from '../styles/style';


const Cardss = () => {

    const dataList = [
        {
            "id": "0",
            "img": img1,
            "title": "Access your files, anywhere",
            "desc": "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        },
        {
            "id": "1",
            "img": img2,
            "title": "Security you can trust",
            "desc": "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        },
        {
            "id": "2",
            "img": img3,
            "title": "Real-time collaboration",
            "desc": "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        },
        {
            "id": "3",
            "img": img4,
            "title": "Store any type of file",
            "desc": "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        }
    ];

    return (
        <NavStyle >
            <Row xs={1} md={2} className="carta">
                {dataList.map(data => (
                    <Col>
                        <CardStyle >
                            <img src={data.img} alt="" width="25%"/>
                            <Card.Body className="card_Select">
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    {data.desc}
                                </Card.Text>
                            </Card.Body>
                        </CardStyle>
                    </Col>
                ))}
            </Row>
        </NavStyle>
    )
}

export default Cardss