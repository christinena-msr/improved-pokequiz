import './index.css';
import React from 'react';
import { Container, Row, Col, Form, FormInput, FormGroup} from 'shards-react';

const LoginForm = () => {
    return (
        <div className='login-signup-form'>
            <Container>
                <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                Item Three
                </TabPanel>
            </Container>
        </div>
    )
}

export default Login;