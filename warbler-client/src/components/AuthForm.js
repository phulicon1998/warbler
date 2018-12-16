import React, {Component} from "react";

export default class AuthForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            profileImageUrl: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.onAuth(authType, this.state).then(() => {
            this.props.history.push("/");
        }).catch(() => {
            return;
        })
    }

    render(){
        const {email, username, profileImageUrl, password} = this.state;
        const {heading, buttonText, signUp, errors, history, removeError} = this.props;

        //listen to any changes in Routes
        history.listen(() => removeError());

        return(
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-6">
                        <form onSubmit={this.handleSubmit}>
                            <h2>{heading}</h2>
                            {errors.message && <div className="alert alert-danger">{errors.message}</div>}
                            <label htmlFor="email">Email:</label>
                            <input type="text" className="form-control" id="email" name="email" onChange={this.handleChange} value={email}/>
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange}/>
                            {
                                signUp && (
                                    <div>
                                        <label htmlFor="username">Username:</label>
                                        <input type="text" className="form-control" id="username" name="username" onChange={this.handleChange} value={username}/>
                                        <label htmlFor="image-url">Image Url:</label>
                                        <input type="text" className="form-control" id="image-url" name="profileImageUrl" value={profileImageUrl} onChange={this.handleChange}/>
                                    </div>
                                )
                            }
                            <button type="submit" className="btn btn-primary btn-block btn-lg">{buttonText}</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}