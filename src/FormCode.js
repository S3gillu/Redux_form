import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from "react-widgets-moment";
import 'react-widgets/dist/css/react-widgets.css'

momentLocaliser(moment)

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {
                touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))
            }
        </div>
    </div>
)


const renderDateTimePicker = ({ input: { onChange, value }, showTime, label, meta: { touched, error, warning } }) =>
    <div>
        <label className="control-label">{label}</label>
        <div>
            <DateTimePicker
                placeholder={label}
                onChange={onChange}
                format="DD MMM YYYY"
                time={showTime}
                value={!value ? null : new Date(value)}
            />
            {
                touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))
            }
        </div>
    </div>



const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
        errors.email = 'required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid Email Address'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
        errors.lastName = "Minimum be 2 characters or more"
    }
    if (!values.datePicker) {
        errors.datePicker = 'Required'
    }
    return errors;
}

let FormCode = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className='row'>
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <Field name="firstName" component={renderField} label="First Name" />
                    </div>

                    <div className="form-group">
                        <Field name="lastName" component={renderField} label="Last Name" />
                    </div>


                    <div className="form-group">
                        <Field name="datePicker" showTime={false} component={renderDateTimePicker} label="Date of Birth" />
                    </div>

                    <div className="form-group">
                        <Field name="email" component={renderField} label="Email" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

FormCode = reduxForm({
    form: 'contact',
    validate
})(FormCode);

export default FormCode;