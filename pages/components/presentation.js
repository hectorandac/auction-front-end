import styled from "styled-components"
import Typist from 'react-typist'

const Container = styled.div`
    position: relative;
`

const Title = styled(Typist)`
    font-size: 56px;
    margin: 32px;
    max-width: 480px;
    background: #ffffff;
    padding: 8px;
    border-radius: 8px;
    @media (max-width: 600px) {
        font-size: 40px;
        margin-top: 96px;
    }
`

const AccentedText = styled.span`
    color: #06AED5;
`

export default function Presentation() {
    return (
        <Container>
            <Title avgTypingDelay={35} startDelay={1000} cursor={{
                show: true,
                blink: true,
                element: '|',
                hideWhenDone: true,
                hideWhenDoneDelay: 5000
            }}>
                Are you ready to <AccentedText>Sell</AccentedText>?
                <Typist.Backspace count={22} delay={1000} />
                Or <AccentedText>bid</AccentedText> it to win it?
                <Typist.Backspace count={22} delay={1000} />
                <AccentedText>GoPostor</AccentedText> makes it possible 👌
            </Title>
        </Container>
    )
}