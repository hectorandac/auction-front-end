import styled from "styled-components"
import Chip from '@material-ui/core/Chip';
import { Button, makeStyles } from "@material-ui/core";
import Countdown from 'react-countdown';

const useStyles = makeStyles({
    chip: {
        top: '8px',
        left: '8px',
        position: "absolute",
        backgroundColor: "#ECF5FE",
        color: '#035263',
        fontSize: '10px',
        height: '22px'
    },
    chipMoney: {
        backgroundColor: "#E8EFE6",
        top: '38px',
        left: '8px',
        position: "absolute",
        color: '#035263',
        fontSize: '10px',
        height: '22px'
    },
    button: {
        fontSize: '10px',
        width: '100%'
    }
  });

const Container = styled.div`
    width: 100%;
    max-width: 280px;
    height: 280px;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    margin: 0 auto;
    transition: .5s;
    overflow: show;

    @media (max-width: 600px) {
        width: 90%;
        max-width: 240px;
        height: 260px;
    }
`

const ContentContainer = styled.div`
    margin: 15% 15%;
    width: 70%;
    height: 70%;
    overflow: show;
    background-color: white;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 3px 10px 2px rgba(0, 0, 0, .05);
    transition: 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    position: relative;

    @media (max-width: 600px) {
        margin: 15% 10%;
        width: 80%;
        height: 70%;
    }
`

const QuickImage = styled.div`
    width: 70%;
    height: 70%;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const Title = styled.p`
    font-size: 8px;
    width: 70%;
    text-align: center;
`

export default function ItemQuickView() {

    const customStyle = useStyles()

    return <Container>
        <ContentContainer id="content_container">
            <Chip classes={{root: customStyle.chip}} label={<Countdown date={Date.now() + 1000000} />} color="primary" />
            <Chip classes={{root: customStyle.chipMoney}} label={'$36.99'} color="primary" />
            <QuickImage src="https://images-na.ssl-images-amazon.com/images/I/81I-G29wTjL._AC_SY879_.jpg"/>
            <Title>Sennheiser HD 559 Open Back Headphone - Black</Title>
            <Button classes={{root: customStyle.button}} color="secondary">View auction</Button>
        </ContentContainer>
    </Container>
}