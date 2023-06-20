import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFound';
import Calculator from './content/calculator';
import Home from './content/home';

class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/calculator' element={<Calculator />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/404' element={<NotFound />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;