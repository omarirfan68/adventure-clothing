import {  useState } from "react";
import Button from "./button";
import { createuserwithdocument, signInWithGoogle, SIGNINWITHEMAILANDPASSWORD } from "./firebase"
import Forminput from './Forminput';
import './Signin.scss';

const defaultforms = { EMAIL: '', PASSWORD: '' }
const Signinform = () => {
    const [formfields, setformfields] = useState(defaultforms);
    const { EMAIL, PASSWORD } = formfields;
    

    const resetform = () => {
        setformfields(defaultforms);
    }
    const GoogleSignIn = async () => {
     await signInWithGoogle();
        
      
       

    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const { user } = await SIGNINWITHEMAILANDPASSWORD(
                EMAIL,
                PASSWORD)
            resetform();
          
        }
        catch (error) {console.log(error) }
    }




    const handleChange = (event) => {
        const { name, value } = event.target;
        setformfields({ ...formfields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>HAVE AN ACCOUNT ! LOG IN</h2>
            <span>SIGN-IN WITH EMAIL AND PASSWORD</span>
            <form onSubmit={handleSubmit}>
                <Forminput label="EMAIL" type='email' required onChange={handleChange} name='EMAIL' value={EMAIL} />
                <Forminput label="PASSWORD" type='password' required onChange={handleChange} name='PASSWORD' value={PASSWORD} />
                <div className="buttons-container">
                    <Button type="submit">SIGN-IN </Button>
                    <Button buttonType={'google'} type='button' onClick={GoogleSignIn}>GOOGLE SIGN-IN</Button>
                </div>
            </form>
        </div>
    )
}
export default Signinform;
