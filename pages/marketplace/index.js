import styled from "styled-components";
import { MenuBar } from "../components/menuBar";
import ProductSearchView from "../components/productSearchView";
import SearchBar from "../components/searchBar";

const Container = styled.div`
    margin-top: 72px;
    left: 0;
    right: 0;
    margin: 72px auto;
    max-width: 768px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ProductsShowcase = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    padding: 16px;
`

export default function Marketplace () {
    return <MenuBar viewSearch={false} position={'marketplace'}>
        <Container>
            <SearchBar allowFilter={true} style={{ position: 'sticky' }}/>
            <ProductsShowcase>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
                <ProductSearchView/>
            </ProductsShowcase>
        </Container>
    </MenuBar>
}