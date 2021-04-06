import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #ECF5FE;
    padding: 32px;
`

const InfoConatiner = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    max-width: 765px;
    justify-content: space-between;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    width: ${props => props.src !== undefined ? '56%' : '36%'};
    height: 180px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${props => props.src || ''});
    @media (max-width: 600px) {
        width: 90%;
        height: auto;
    }
`

export default function CanDo() {
    return (
        <Container>
            <h2>With GoPostor you can</h2>
            <InfoConatiner>
                <Info src={'/undraw_best_place.svg'}/>
                <Info><h3>Participate in live auctions</h3>Compete in an hour long private event in which you can make multiple offers toping the previews one.</Info>
                <Info><h3>Paticipate in proxy biddings</h3>Set your maximun price on public biddings and win at the minimun highest amount possible, you'll be notify whenever your offer has been exceeded.</Info>
                <Info src={'/undraw_sharing_articles.svg'}/>
            </InfoConatiner>
        </Container>
    )
}