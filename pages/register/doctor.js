import 'date-fns';
import styles from "../../styles/Register.Doctor.module.css"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Api from '../components/api';
import { useRouter } from 'next/router'
import Divider from '@material-ui/core/Divider';

async function createUser(name, email, password, birthdate, onSuccess, onError, progressStatus) {
    progressStatus('progress')
    onError({});
    var data = {
        name: name,
        email: email,
        password: password,
        password_confirmation: password,
        birthdate: birthdate,
        details: {
            role: "doctor"
        }
    }
    await Api.axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, data).then(function (response) {
      onSuccess(response)
    }).catch(function (error) {
        console.log(error)
      onError(error.response.data.errors);
    });
    progressStatus('stop')
};

export default function Doctor() {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [errors, setErrors] = React.useState({});
    const [query, setQuery] = React.useState("stoped")

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return <div className={styles.container}>
        <img className={styles.registrationImage} src="/undraw_teacher_35j2.svg" />
        <main className={styles.registrationForm}>
            <div>
                <GoogleLogin
                    className={styles.basicTextFields}
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Register with Google"
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
                    textButton = "&nbsp;&nbsp;Register with Facebook"
                />
            </div>

            <h3 style={{fontWeight: '100', marginTop: '16px', marginBottom: '0'}}>Or register with your email</h3>
            <Divider style={{margin: '16px 0'}} />

            <TextField error={Object.keys(errors).includes('name')} className={styles.basicTextFields} color="secondary" id="name" label="Complete name" defaultValue={name} onChange={(t) => setName(t.target.value)}/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                    <KeyboardDatePicker
                        error={Object.keys(errors).includes('birthdate')}
                        className={styles.basicTextFields}
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="birthdate"
                        label="Birthdate"
                        color="secondary"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <TextField error={Object.keys(errors).includes('email')} className={styles.basicTextFields} required color="secondary" id="email" label="Email" defaultValue={email} onChange={(t) => setEmail(t.target.value)} />
            <TextField error={Object.keys(errors).includes('password')} className={styles.basicTextFields} required color="secondary" id="password" label="Password" type="password" defaultValue={password} onChange={(t) => setPassword(t.target.value)}/>
            <Button onClick={() => createUser(name, email, password, selectedDate, () => router.push('/sign_in'), setErrors, setQuery)} style={{ marginTop: '16px' }} variant="contained" color="secondary">Register</Button>
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