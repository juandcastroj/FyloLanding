import { Button, Card } from "react-bootstrap";
import styled from "styled-components";


export const NavStyle = styled.div`
    background-color: hsl(217, 28%, 15%);
    color: white;
    padding: 1rem;
`

export const ButtonStyle = styled(Button)`
    background-image:linear-gradient(to right, hsl(176, 68%, 64%),hsl(198, 60%, 50%));
    padding: 15px 35px ;
    font-size: large;
    border-radius: 50px;
    font-weight: bold;
    border-color: transparent;
    &:hover{
        background-color: white
    }

`

export const CardStyle = styled(Card)`
    background-color: hsl(217, 28%, 15%);
    font-family: "Raleway",sans-serif;
    color: white;
    padding: 3rem;
    text-align: center;
    align-items: center;
    border-color: transparent
`

export const CardStyle2 = styled(Card)`
    background-color: hsl(219, 30%, 18%);
    font-family: "Raleway",sans-serif;
    color: white;
    padding: 1rem;
    text-align: left;
    align-items: left;
    border-color: transparent;
    font-size: small;
    position: relative;
    bottom: -150px;
`
export const ProductiveSt = styled.section`
    width: 100%;
    padding: 40px;
    background-color: hsl(218, 28%, 13%);
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    >img{
        width: 50%;
        padding: 20px;
    }
    >div{
        width: 50%;
        padding: 20px;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        h3{
            width: 240px;
            margin: 10px 0;
            font-family: 'Raleway', sans-serif;
            font-size: 25px;
            line-height: 30px;
        }
        >p{
            font-family: 'Open Sans', sans-serif;
            margin: 10px 0;
        }
        div{
            margin: 10px 0;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            color: hsl(176, 68%, 64%);
            font-family: 'Open Sans', sans-serif;
            border-bottom: solid 1px hsl(176, 68%, 64%);
            img{
                margin: 3px;
            }
            &:hover{
                color: white;
                border-color:white;
            }
        }
    }
    @media screen and (max-width:850px){
        flex-direction: column;
        padding: 30px 10px;
        >img, >div{
            width: 400px;
        }
        >div h3{
            width: 100%;
            font-size: 18px;
        }
    }
    @media screen and (max-width:399px){
        >img, >div{
            width: 100%;
        }
    }
`


export const CardStyle3 = styled.form`
    background-color: hsl(219, 30%, 18%);
    font-family: "Raleway",sans-serif;
    color: white;
    margin: 8% 16%;
    padding: 4%;
    text-align: left;
    align-items: left;
    border-color: transparent;
    border-radius: 5px;
    box-shadow: 5px 5px 5px 0px hsl(216, 53%, 9%);
    position: relative;
    bottom: -180px;
    z-index: 10;
`

export const ContTextStyle = styled.div`
   
    padding-top: 1.5rem;
    font-size: 18px;
    font-family: "Raleway",sans-serif;
    font-weight: 200;
    display: 'inline-block';
    text-align: left

`

export const DivStyle = styled.div`

    
    background-color: hsl(217, 28%, 15%);
    color: white;
    padding: 2.5rem;

`


export const StyImg = styled.img`
    
    border-radius: 50%
`

export const InputStyle = styled.input`
    
    padding: 16px;
    border-radius: 30px;
`


