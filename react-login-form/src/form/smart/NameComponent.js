import React, {Component} from "react";
import InputRow from "../dump/InputRow";
import {SaveUserNameAction} from "../actions/SaveUserNameAction";
import {connect} from "react-redux";

class NameComponent extends Component {
    constructor() {
        super();
        this.state = {
            nameError: null,
            name: '',
        }
        this.onNameChange = this.onNameChange.bind(this)
    }

    onNameChange(e) {
        const name = e.target.value
        const isValid = name.match(/[\w]{2,}/)

        if (isValid) {
            this.setState({
                nameError: null,
                name: name,
            })
            setTimeout(() => this.props.dispatch(SaveUserNameAction({name: this.state.name})), 1000)
        } else {
            this.setState({
                nameError: 'name must be valid'
            })
        }
    }

    render() {
        return <InputRow placeholder="name" onChange={this.onNameChange} error={this.state.nameError}/>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    }
}

export default connect(mapDispatchToProps)(NameComponent)
