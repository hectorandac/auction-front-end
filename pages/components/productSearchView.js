import { Link, useMediaQuery } from "@material-ui/core";
import styled from "styled-components"
import Chip from '@material-ui/core/Chip';
import { makeStyles } from "@material-ui/core";
import Countdown from 'react-countdown';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TimerIcon from '@material-ui/icons/Timer';

const useStyles = makeStyles({
    chipTime: {
        backgroundColor: "#ECF5FE",
        color: '#035263',
    },
    chipMoney: {
        backgroundColor: "#E8EFE6",
        color: '#035263',
    },
    button: {
        fontSize: '10px',
        width: '100%'
    }
  });

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${props => props.mobile ? 92 : 140}px auto;
    grid-template-rows: auto auto auto 36px;
    border-bottom: solid lightgrey 1px;
    margin-bottom: 16px;
    padding-bottom: 16px;
`

const Image = styled.div`
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 5;
    height: 100%;
    min-height: ${props => props.mobile ? 92 : 140}px;
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
`

const Title = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: ${props => props.mobile ? 14 : 18}px;
    font-weight: bold;
    cursor: pointer;
`

export default function ProductSearchView() {
    const matches = useMediaQuery('(max-width:600px)');
    const customStyle = useStyles();

    return <Container mobile={matches}>
        <Image mobile={matches} image={'https://images-na.ssl-images-amazon.com/images/I/81I-G29wTjL._AC_SY879_.jpg'} />
        <Link><Title mobile={matches}>Audifonos que son duros mas descripciones que no se</Title></Link>
        <div style={{marginTop: matches ? '8px' : 0 }}><Chip classes={{ root: customStyle.chipTime }} icon={<TimerIcon />} label={<Countdown date={Date.now() + 1000000} />} color="primary" /></div>
        <div style={{marginTop: matches ? '8px' : 0 }}><Chip classes={{ root: customStyle.chipMoney }} icon={<MonetizationOnIcon />} label={'$36.99'} color="primary" /></div>
        <div style={{fontSize: '12px', marginTop: '8px'}}>Santo Domingo, Yamasá</div>
    </Container>
}