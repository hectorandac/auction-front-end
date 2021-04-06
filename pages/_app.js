import '../styles/globals.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head'
import Api from './components/api';
import 'react-typist/dist/Typist.css';

function MyApp({ Component, pageProps }) {
  new Api();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#035263",
        contrastText: '#fff'
      },
      secondary: {
        main: "#035263"
      },
      error: {
        main: "#EE6C4D"
      },
      warning: {
        main: "#ff9800"
      },
      info: {
        main: "#2196f3",
      },
      success: {
        main: "#69995D"
      }
    },
  });  

  return <ThemeProvider theme={theme}>
    <Head>
      <title>Need help?</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display+SC&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
