import { IconButton, makeStyles } from "@material-ui/core"
import styled from "styled-components"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const customStyle = makeStyles({
    button: {
        margin: '4px',
        backgroundColor: 'white',
        '&:hover': {
            backgroundColor: 'white'
        }
    }
})

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #ECF5FE;
    padding: 32px;
    padding-bottom: 80px;
`

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ShadoweIconButon = styled(IconButton)`
    box-shadow: 0 3px 10px 2px rgba(0, 0, 0, .05);
`

export default function SocialButtons() {
    const styles = customStyle()

    return (
        <Container>
            <SocialContainer>
                <ShadoweIconButon classes={{ root: styles.button }}><FacebookIcon/></ShadoweIconButon>
                <ShadoweIconButon classes={{ root: styles.button }}><TwitterIcon/></ShadoweIconButon>
                <ShadoweIconButon classes={{ root: styles.button }}><InstagramIcon/></ShadoweIconButon>
                <ShadoweIconButon classes={{ root: styles.button }}><WhatsAppIcon/></ShadoweIconButon>
            </SocialContainer>
            <h4 style={{marginBottom: 0, marginTop: '16px'}}>Powered by GoPostor S.R.L.</h4>
            <h5 style={{marginBottom: 0, marginTop: '8px'}}>Based in Dominican Republic</h5>
            <h6 style={{marginBottom: 0, marginTop: '8px'}}>Made with ❤️ by HectorAndAc</h6>
            <h5 style={{marginBottom: 0, marginTop: '16px', width: '90%'}}>Contact us at:< br/>📞 +1 (829) 957-0268< br/>✉️ hector.acosta.pozo@gmail.com</h5>
        </Container>
    )
}