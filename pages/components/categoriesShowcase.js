import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    position: relative;
`

const CategoriesHolder = styled.div`
    display: flex;
    width: 100%;
    max-width: 765px;
    padding: 16px;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
    align-content: center;
    flex-direction: row;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`

const Category = styled.div`
    width: 25%;
    margin: 8px;
    height: ${props => props.height || '160px'};
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    box-shadow: 0 3px 10px 2px rgba(0, 0, 0, .1);
    border-radius: 8px;
    position: relative;
    background-color: ${props => props.backgroundColor || 'white'};
    cursor: pointer;
    transition: 0.5s;
    :after {
        content: '${props => props.label}';
        color: ${props => props.color || 'black'};
        position: absolute;
        bottom: 12px;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;

        @media (max-width: 600px) {
            margin: auto;
            top: 0;
            bottom: 0;
            height: 18px;
        }
    }
    :hover {
        transform: scale(1.1);
    }
    @media (max-width: 600px) {
        flex-direction: row;
        justify-content: flex-start;
        padding: 16px;
        width: 80%;
        height: 80px;
    }
`

const ImageHolder = styled.img`
    width: 50%;
    @media (max-width: 600px) {
        width: auto;
        height: 50px;
    }
`

export default function CategoriesShowcase() {

    return (
        <Container>
            <h3>Explore our various categories</h3>
            <CategoriesHolder>
                <Category label={'Electronics'}><ImageHolder  src="/loudspeaker.png"/></Category>
                <Category label={'Houses'}><ImageHolder src="/address.png" /></Category>
                <Category label={'Cars'}><ImageHolder src="/car.png" /></Category>
                <Category label={'Cloathing'}><ImageHolder src="/dress.png"/></Category>
                <Category label={'Furnitures'}><ImageHolder src="/sofa.png"/></Category>
                <Category label={'Apliances'}><ImageHolder src="/washing-machine.png"/></Category>
                <Category label={'Shoes'}><ImageHolder src="/running-shoes.png"/></Category>
                <Category label={'Jewelry'}><ImageHolder src="/necklace.png"/></Category>
                <Category label={'Artwork'}><ImageHolder src="/picture.png"/></Category>
            </CategoriesHolder>
        </Container>
    )
}