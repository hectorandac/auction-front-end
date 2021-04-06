import styles from "../styles/SignIn.module.css"
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import Divider from '@material-ui/core/Divider';
import Api from "./components/api";
import { useRouter } from 'next/router'

export default function SignIn() {
    const router = useRouter();
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [errors, setErrors] = React.useState([])
    const [query, setQuery] = React.useState("stop")

    const onStart = () => {
        setErrors([])
        setQuery('progress')
    }

    const onFinish = () => {
        setQuery('stop')
    }

    return <div className={styles.container}>
        <img className={styles.image} src="/undraw_Login_re_4vu2.svg" />
        <main className={styles.form}>
            <div>
                <GoogleLogin
                    className={styles.basicTextFields}
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Sign in with Google"
                    cookiePolicy={'single_host_origin'}
                />
            </div>

            <br/>

            <div>
                <FacebookLogin
                    cssClass={styles.facebookButton}
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                    icon="fa-facebook"
                    textButton = "&nbsp;&nbsp;Sign in with Facebook"
                />
            </div>

            <h3 style={{fontWeight: '100', marginTop: '16px', marginBottom: '0'}}>Or sign in using your email</h3>
            <Divider style={{margin: '16px 0'}} />

            <TextField error={errors.length > 0} className={styles.basicTextFields} color="secondary" id="email" label="Email" defaultValue={email} onChange={(t) => setEmail(t.target.value)} />
            <TextField error={errors.length > 0} className={styles.basicTextFields} color="secondary" id="password" label="Password" type="password" defaultValue={password} onChange={(t) => setPassword(t.target.value)}/>
            <Button onClick={() => Api.signIn(email, password, () => router.push('/dashboard'), (r) => setErrors(r), onStart, onFinish)} style={{ marginTop: '16px' }} variant="contained" color="secondary">Sign In</Button>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Fade
                    in={query === 'progress'}
                    unmountOnExit
                >
                    <CircularProgress />
                </Fade>
            </div>
        </main>
    </div>
}