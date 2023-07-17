import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notFound';
import Calculator from './content/calculator';
import Home from './content/home';
import { Navigate } from 'react-router-dom';
import $ from 'jquery';

class App extends Component {
    state = { 
        is_login: false,
        username: 'weiwei',
    } 
    
    componentDidMount() {
        $.ajax({
            url: '/api2/get_status/',
            // url: 'https://app5593.acapp.acwing.com.cn/calculator/get_status/',
            type: 'get',
            success: resp => {
                console.log(resp.result);
                if (resp.result === 'login') {
                    this.setState({
                        is_login: true,
                        username: resp.username,
                    });
                } else {
                    this.setState({
                        is_login: false,
                    })
                }
            },
        })
    }

    render() { 
        return (
            <React.Fragment>
                <NavBar is_login={this.state.is_login} username={this.state.username} />
                <div className='container'>
                    <Routes>
                        <Route path='/calculator' element={<Home />} />
                        <Route path='/calculator/home' element={<Home />} />
                        <Route path='/calculator/calculator' element={this.state.is_login ? <Calculator /> : <Navigate replace to='/calculator/login'/>} />
                        <Route path='/calculator/login' element={!this.state.is_login ? <Login /> : <Navigate replace to='/calculator/home' />} />
                        <Route path='/calculator/register' element={!this.state.is_login ? <Register /> : <Navigate replace to='/calculator/home' />} />
                        <Route path='/calculator/404' element={<NotFound />} />
                        <Route path='/calculator/*' element={<NotFound />} />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;