import React from 'react'
import { Card } from 'react-bootstrap'
import { ButtonStyle, NavStyle } from '../styles/style'

const FirstContainer = () => {
    return (
            <NavStyle className="text-center">
                <Card.Body>
                <img src="https://i.ibb.co/3CTswt5/illustration-intro.png"
                    alt="illustration-intro" width="50%"/>
                    <Card.Title>All your files in one secure location, accesible anywhere.</Card.Title>
                    <Card.Text>
                        Fyle stores all your most important files in one secure location.<br>
                        </br> Access them wherever you need, share and collaborate with <br>
                        </br> fiends, family, and co-workers.
                    </Card.Text>
                    <ButtonStyle variant="primary">Get started</ButtonStyle>
                </Card.Body>
            </NavStyle>
    )
}

export default FirstContainer