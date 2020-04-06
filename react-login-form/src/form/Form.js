import React from 'react';
import EmailComponent from "./smart/EmailComponent";
import NameComponent from "./smart/NameComponent";
import {connect} from "react-redux";

class Form extends React.Component {
    constructor() {
        super();
        this.handleSubmitRegistrationForm = this.handleSubmitRegistrationForm.bind(this)
    }

    handleSubmitRegistrationForm(event) {
        event.preventDefault()
        let user = {name: this.props.name, email: this.props.email};
        console.log(JSON.stringify({
            user: {
                name: this.props.name,
                email: this.props.email,
            }
        }))


        let response = fetch('http://localhost:3001/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        })

        console.log(response)
    }

    render() {
        return <>
            <form onSubmit={this.handleSubmitRegistrationForm}>
                <EmailComponent/>
                <NameComponent/>
                <button>Register</button>
            </form>
        </>
    }
}

const mapStateToProps = state => {
    return {name: state.name, email: state.email}
}

export default connect(mapStateToProps)(Form)