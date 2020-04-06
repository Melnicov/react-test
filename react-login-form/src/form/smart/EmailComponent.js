import React, {Component} from "react";
import InputRow from "../dump/InputRow";
import {SaveUserEmailAction} from "../actions/SaveUserEmailAction";
import {connect} from "react-redux";

class EmailComponent extends Component {
    constructor() {
        super();
        this.state = {
            emailError: null,
            email: '',
        }
        this.onEmailChange = this.onEmailChange.bind(this)
    }

    onEmailChange(e) {
        const email = e.target.value
        const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)

        if (isValid) {
            this.setState({
                emailError: null,
                email: email,
            })
            setTimeout(() => this.props.dispatch(SaveUserEmailAction({email: this.state.email})), 1000)
        } else {
            this.setState({
                emailError: 'email must be valid'
            })
        }
    }

    render() {
        return <InputRow placeholder="email" onChange={this.onEmailChange} error={this.state.emailError}/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapDispatchToProps)(EmailComponent)