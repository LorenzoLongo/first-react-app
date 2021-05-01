import React from "react";
import {Field, reduxForm} from "redux-form";
import {renderField} from "../reducers/form";
import {connect} from "react-redux";
import {userConfirm} from "../actions/actions";

const mapDispatchToProps = {
    userConfirm
};

class ConfirmationForm extends React.Component {
    onSubmit(values) {
        return this.props.userConfirm(values.confirmationToken).then(() => {
            this.props.reset();
            //this.props.history.push('/');
        });
    }

    render() {
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="card mt-3 mb-5 shadow-sm">
                <div className="card-body">
                    <p className="card-text">
                        Please confirm your account with the token received inside your e-mail.
                    </p>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="confirmationToken" label="Confirmation token:" type="text" component={renderField}/>

                        <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>Confirm your account</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'ConfirmationForm'
})(connect(null, mapDispatchToProps)(ConfirmationForm));
