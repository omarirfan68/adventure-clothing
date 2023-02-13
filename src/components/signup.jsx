import { useState } from "react";
import Button from "./button";
import { createuserwithdocument, createuserwithEP } from "./firebase"
import Forminput from './Forminput'
import './Signup.scss'
const defaultforms = { NAME: '', EMAIL: '', PASSWORD: '', CONFIRMPASSWORD: '' }
const Signupform = () => {
    const [formfields, setformfields] = useState(defaultforms);
    const { NAME, EMAIL, PASSWORD, CONFIRMPASSWORD } = formfields;
   
 
    const resetforms = () => {
        setformfields(defaultforms);
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (PASSWORD !== CONFIRMPASSWORD) {
            alert("Password Didn't matched PLEASE write same password");
            return;
        }
        try {
            const { user } = await createuserwithEP(
                EMAIL,
                PASSWORD)
                
            await createuserwithdocument(user, {NAME})
            resetforms();
        }
        catch (error) {}
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setformfields({ ...formfields, [name]: value })
    }

    return (
        <div className="sign-up-container">
            <h2>DON'T HAVE AN ACCOUNT ! CREATE NOW</h2>
            <span>SIGN UP WITH YOUR EMAIL AND PASSWORD</span>
            <form onSubmit={handleSubmit}>
                <Forminput label="USERNAME" type='text' required onChange={handleChange} name='NAME' value={NAME} />
                <Forminput label="EMAIL" type='email' required onChange={handleChange} name='EMAIL' value={EMAIL} />
                <Forminput label="PASSWORD" type='password' required onChange={handleChange} name='PASSWORD' value={PASSWORD} />
                <Forminput label="CONFIRMPASSWORD" type='password' required onChange={handleChange} name='CONFIRMPASSWORD' value={CONFIRMPASSWORD} />
                <Button buttontype='google'type="submit">
                    SIGNUP
                </Button>
            </form>
        </div>
    )
}
export default Signupform;