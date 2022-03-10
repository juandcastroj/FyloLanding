import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { ButtonStyle, CardStyle3, InputStyle, NavStyle } from '../styles/style'

const SignIn = () => {

  const [correo, setCorreo] = useState("")
  const [alerta, setAlerta] = useState("")

  const handleInputChange = ({target}) =>{
    setCorreo(target.value)
    validarCorreo(target.value)
  }


  const validarCorreo = (valor) =>{
    const formatoValido = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const validacion = formatoValido.test(valor);
    if((!validacion)||(valor==="")){
      setAlerta("alerta")
    } else{
      setAlerta("")
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if((alerta==="")&&(correo!=="")){
      setCorreo("")
    }else{
      setAlerta("alerta")
    }
  }



    return (
        <NavStyle >
            <CardStyle3 onSubmit={handleSubmit}  className="text-center">
                <Card.Body>
                    <Card.Title>Get early access today</Card.Title>
                    <Card.Text>
                    It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br></br>
                     questions, our support team would be happy to help you.
                    </Card.Text>
                    {/* <p className={alerta} >Please enter a valid email address</p> */}
                    <InputStyle placeholder='email@example.com' value={correo} type='email' onChange={handleInputChange}  style={{display: 'inline-block'}}  />
                  
                    <ButtonStyle type="submit" style={{display: 'inline-block'}} variant="primary">Get started for free</ButtonStyle>
                </Card.Body>
            </CardStyle3>
        </NavStyle>
    )
}

export default SignIn