import './index.css';
import React from 'react';
import { Container, TextField } from '@material-ui/core';

const LoginForm = () => {
    return (
        <div className='login-signup-form'>
            <Container>
                <div className="login-container">
                    <form>
                        <TextField id="username-field" label="Username" variant="outlined" />
                        <TextField id="password-field" label="Password" variant="outlined" />
                    </form>
                </div>

            </Container>
        </div>
    )
}

export default LoginForm;