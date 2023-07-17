import React, { Component } from 'react';
import Base from './base';
import $ from 'jquery';

class Register extends Component {
    state = { 
        error_message: "",
        username: "",
        password: "",
        password_confirm: "",
    } 
    
    handleClick = e => {
        e.preventDefault();

        if (this.state.username === '') {
            this.setState({error_message: 'username is not empty'})
        } else if (this.state.password === '') {
            this.setState({error_message: 'password is not empty'})
        } else if (this.state.password_confirm === '') {
            this.setState({error_message: 'password_confirm is not empty'})
        } else if (this.state.password_confirm === '') {
            this.setState({error_message: 'two password are not same'})
        } else {
            $.ajax({
                // url: '/api2/register/',
                url: 'https://app5593.acapp.acwing.com.cn/calculator/register/',
                type: 'get',
                data: {
                    username: this.state.username,
                    password: this.state.password,
                    password_confirm: this.state.password_confirm,
                },
                dataType: 'json',
                success: resp => {
                    if (resp.result === 'success') {
                        window.location.href = '/calculcator/'
                    } else {
                        this.setState({error_message: resp.result});
                    }
                },
            })
        }
    }

    render() { 
        return (
            <Base>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-sm-3">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">username</label>
                                    <input onChange={e => { this.setState({ username: e.target.value }) }} type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input onChange={e => {this.setState({password: e.target.value})}} type="password" className="form-control" id="password"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password_confirm" className="form-label">Confirm Password</label>
                                    <input onChange={e => {this.setState({password_confirm: e.target.value})}} type="password" className="form-control" id="password_confirm"/>
                                </div>
                                <div style={{ height: "2rem", color: 'red'}}>
                                    {this.state.error_message}
                                </div>
                                <button onClick={this.handleClick} style={{ width: "100%" }} type="submit" className="btn btn-primary">login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Base>
        );
    }
}
 
export default Register;