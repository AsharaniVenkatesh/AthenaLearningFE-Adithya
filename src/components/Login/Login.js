import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Login.css'
const Login = () => {
    const [currentViewStatus, setCurrentViewStatus] = React.useState("logIn")
    const changeView = (view) => {
        setCurrentViewStatus(view)
    }
    const currentView = () => {
        switch (currentViewStatus) {
            case "signUp":
                return (
                    <>
                        <Header />
                        <section id="entry-page">
                            <form>
                                <h2>Sign Up!</h2>
                                <fieldset>
                                    <legend>Create Account</legend>
                                    <ul>
                                        <li>
                                            <label for="username">Username:</label>
                                            <input type="text" id="username" required />
                                        </li>
                                        <li>
                                            <label for="email">Email:</label>
                                            <input type="email" id="email" required />
                                        </li>
                                        <li>
                                            <label for="password">Password:</label>
                                            <input type="password" id="password" required />
                                        </li>
                                    </ul>
                                </fieldset>
                                <button>Submit</button>
                                <button type="button" onClick={() => changeView("logIn")}>Have an Account?</button>
                            </form>
                        </section>
                        <Footer />

                    </>
                )
                break
            case "logIn":
                return (
                    <>
                        <Header />
                        <section id="entry-page">
                            <form>
                                <h2>Welcome Back!</h2>
                                <fieldset>
                                    <legend>Log In</legend>
                                    <ul>
                                        <li>
                                            <label for="username">Username:</label>
                                            <input type="text" id="username" required />
                                        </li>
                                        <li>
                                            <label for="password">Password:</label>
                                            <input type="password" id="password" required />
                                        </li>
                                        <li>
                                            <i />
                                            <a onClick={() => changeView("PWReset")}>Forgot Password?</a>
                                        </li>
                                    </ul>
                                </fieldset>
                                <button>Login</button>
                                <button type="button" onClick={() => changeView("signUp")}>Create an Account</button>
                            </form>
                        </section>
                        <Footer />

                    </>
                )
                break
            case "PWReset":

                return (
                    <>
                        <Header />
                        <section id="entry-page">
                            <form>
                                <h2>Reset Password</h2>
                                <fieldset>
                                    <legend>Password Reset</legend>
                                    <ul>
                                        <li>
                                            <em>A reset link will be sent to your inbox!</em>
                                        </li>
                                        <li>
                                            <label for="email">Email:</label>
                                            <input type="email" id="email" required />
                                        </li>
                                    </ul>
                                </fieldset>
                                <button>Send Reset Link</button>
                                <button type="button" onClick={() => changeView("logIn")}>Go Back</button>
                            </form>
                        </section>
                        <Footer />

                    </>
                )
            default:
                break

        }
    }
    return (
        <>

            {currentView()}

        </>
    )

}

export default Login;