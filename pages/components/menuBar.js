import styled from "styled-components"
import Api from "./api";
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StoreIcon from '@material-ui/icons/Store';
import GavelIcon from '@material-ui/icons/Gavel';
import Link from "next/link";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SearchBar from "./searchBar";

const useStyles = makeStyles({
    iconButton: {
      marginLeft: '4px',
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
      transition: '0.5s',
      '&:active': {
          boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0)'
      }
    },
    button: {
        height: '36px',
        fontWeight: "400",
        textTransform: 'none',
        borderRadius: '4px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
        transition: '0.5s',
        '&:active': {
            boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0)'
        }
    },
    iconSpacing: props => ({
        margin: '0 4px',
    }),
    modal: {
        display: 'flex',
        justifyContent: 'center'
      },
  });

const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    height: 72px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 12px;
    background: white;
`

const Menu = styled.div`
    height: 100%;
    overflow: show;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    justify-items: center;
    flex-direction: row;
    width: 100%;
    max-width: 768px;
`

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    flex-direction: row;

    font-weight: 200;
    font-size: medium;
`

const Tab = styled.div`
    color: #024150;
    padding: 8px;
    background-color: ${(props) => {return props.selected && props.removeLetters ? '#EBFBFE' : 'white';}};
    padding-right: 12px;
    padding-left: 12px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
    font-weight: ${(props) => {return props.selected ? '400' : '200';}};
    ::before {
        content: "● ";
        font-size: 8px;
        display: ${(props) => {return props.selected && !props.removeLetters ? 'initial' : 'none';}};
    }
`

const DissapearWrapper = styled.div`
    opacity: ${props => props.present ? 1 : 0};
    width: ${props => props.present ? '30px' : 0};
    height: 30px;
    transition: 0.5s;

`

export function MenuBar({children, position, viewSearch = true}) {
    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let userSection;
    if (!Api.userLoggedIn()) {
        userSection = profile(classes)
    } else {
        userSection = signIn(classes)
    }

    return <>
    {searchModal(classes, handleOpen, handleClose, open)}
    <Container>
        <Menu>
            <Link href="/"><h3 style={{ fontFamily: "'Raleway', sans-serif", color: "#035263", cursor: "pointer" }}>GoPostor</h3></Link>
            { matches ?
                <Tabs>
                    {searchButton(classes, viewSearch, handleOpen)}
                    {notificationButton(classes)}
                    {userSection}
                </Tabs>
                : 
                <Tabs>
                    <Link href={"/marketplace"}><Tab selected={position == 'marketplace'}>Marketplace</Tab></Link>
                    <Link href={"/marketplace/my_auctions"}><Tab selected={position == 'auctions'}>My auctions</Tab></Link>
                    {searchButton(classes, viewSearch, handleOpen)}
                    {notificationButton(classes)}
                    {userSection}
                </Tabs>
            }
        </Menu>
    </Container>
    {children}
    { matches ? BottomPhoneMenu(position) : <></> }
    </>
}

const ModalSearchBar = styled(SearchBar)`
    margin-top: 50px;
    position: relative;
    transition: 0.5s;
`

function searchModal(classes, handleOpen, handleClose, open) {
    return (    
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <ModalSearchBar />
        </Modal>
    )
}

function BottomPhoneMenu(position) {

    return (
        <Tabs style={{
            backgroundColor: "white",
            position: "fixed",
            bottom: "0",
            width: "100%",
            height: '64px', 
            alignContent: 'center',
            alignItems: 'center',
            justifyItems: 'center',
            borderTop: '0.5px solid #D5D5D5'
        }}>
            <Link href={"/marketplace"}><Tab style={{width: '100%', height: '100%'}} selected={position == 'marketplace'} removeLetters><StoreIcon/><br/><span style={{ fontSize: "small" }}>Marketplace</span></Tab></Link>
            <Link href={"/marketplace/my_auctions"}><Tab style={{width: '100%', height: '100%'}} selected={position == 'auctions'} removeLetters><GavelIcon /><br/><span style={{ fontSize: "small" }}>My auctions</span></Tab></Link>
        </Tabs>
    )

}

function notificationButton(classes) {
    return (
        <IconButton size={'small'} classes={{root: classes.iconSpacing}}>
            <NotificationsNoneIcon />
        </IconButton>
    )
}

function searchButton(classes, view, handleOpen) {
    return (
        <DissapearWrapper present={view}>
            <IconButton onClick={handleOpen} size={'small'} classes={{root: classes.iconSpacing}}>
                <SearchIcon />
            </IconButton>
        </DissapearWrapper>
    )
}

function profile(classes) {
    return <IconButton classes={{root: classes.iconButton}} color="primary">
         <PersonIcon />
    </IconButton>
}

function signIn(classes) {
    return <Button classes={{root: classes.button }} color="primary">
        Login
    </Button>
}