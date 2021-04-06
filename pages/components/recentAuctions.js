import styled from 'styled-components'
import Slider from "react-slick";
import ItemQuickView from './itemQuickView';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Container = styled.div`
    overflow-x: hidden;
`

export default function RecentAuctions() {

    const matches = useMediaQuery('(max-width:600px)');

    var settings = {
        autoplay: true,
        autoplaySpeed: 5000,
        focusOnSelect: true,
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: matches ? 1 : 3,
        slidesToScroll: 1
    };

    return (
        <Container>
            <Slider style={{marginTop: '24px'}} {...settings}>
                <ItemQuickView/>
                <ItemQuickView/>
                <ItemQuickView/>
                <ItemQuickView/>
                <ItemQuickView/>
                <ItemQuickView/>
                <ItemQuickView/>
            </Slider>
        </Container>
    )
}