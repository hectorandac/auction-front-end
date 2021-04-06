import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 8px;
    transition: 0.5s;
`

export default function FilterMenu() {

    filters = [
        { label: 'Price', type: 'range', details: { currentLow: '0', currentHigh: '36' } },
        { label: 'Category', type: 'multi-selection', details: { currentSelected: ['test2'], canSelected: ['test1', 'test2', 'test3', 'test4'] } }
    ]

    return <Container>

    </Container>
}