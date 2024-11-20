import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";


const Register = () => {
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        const terms = event.target.terms.checked

        console.log(email, password, terms);

        setErrorMessage('')
        setSuccess(false)


        if (password.length < 6) {
            setErrorMessage("Password must be contain atleast 6 characters")
            return
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {

            setErrorMessage("Atleast one UpperCase, Atleast one lower case, one special Character");
            return
        }


        if(!terms){
            setErrorMessage("Please Accept Our Terms and conditions!")
            return
        }


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(true)
            })

            .catch(error => {
                console.log("ERROR", error.message)
                setErrorMessage(error.message)
                setSuccess(false)
            })
    }







    return (
        <div className="max-w-lg mx-auto">

            <h1 className="text-4xl text-center font-bold mt-10">Register</h1>

            <form onSubmit={handleRegister} className="card-body border border-blue-300 rounded-3xl shadow-2xl mt-8">

                <div className="form-control">
                    <label className="label">

                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />

                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="password"
                        name="password"
                        className="input input-bordered" required />
                    <label className="label">

                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 bottom-8">

                            {
                                showPassword ? <FaRegEye /> : <FaEyeSlash />
                            }

                        </button>

                        {
                            errorMessage && <p className="text-red-600 font-bold"> {errorMessage} </p>
                        }

                        {
                            success && <p className="text-green-600 font-bold"> Successfully SignUp!  </p>
                        }

                    </label>
                </div>

                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-2">
                        <input
                         type="checkbox"
                            name="terms"
                            className="checkbox checkbox-info" />
                        <span className="label-text text-lg">Accept Our Terms and Conditions</span>

                    </label>
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary bg-indigo-600 text-white font-bold border-none">Register</button>


                </div>
            </form>


        </div>
    );
};

export default Register;