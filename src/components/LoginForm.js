import React from 'react';
import {renderField} from "../reducers/form";
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {userLoginAttempt} from "../actions/actions";

const mapStateToProps = state => ({
   ...state.auth
});

const mapDispatchToProps = {
  userLoginAttempt
};

class LoginForm extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token) {
            console.log(prevProps);
            console.log(this.props);
            this.props.history.push('/');
        }
    }

    onSubmit(values) {
        return this.props.userLoginAttempt(
            values.username,
            values.password
        );
    }

    render() {
        const {handleSubmit, error} = this.props;

        console.log(error);

        return (
           <div className="text-center">
               {error && <div className="alert alert-danger">{error}</div>}
               <form className="mt-4" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                   <Field name="username" label="Username" type="text" component={renderField}/>
                   <Field name="password" label="Password" type="password" component={renderField}/>
                   <button type="submit" className="btn btn-primary btn-big btn-block">Log in</button>
               </form>
           </div>
        )
    }
}

export default reduxForm({
    form: 'LoginForm'
})(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
