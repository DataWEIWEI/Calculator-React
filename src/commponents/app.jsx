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
                        <Route path='/calculator' element={<Home />} />
                        <Route path='/calculator/home' element={<Home />} />
                        <Route path='/calculator/calculator' element={<Calculator />} />
                        <Route path='/calculator/login' element={<Login />} />
                        <Route path='/calculator/register' element={<Register />} />
                        <Route path='/calculator/404' element={<NotFound />} />
                        <Route path='/calculator/*' element={<NotFound />} />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;