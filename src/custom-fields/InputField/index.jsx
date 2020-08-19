import React from 'react'
import PropTypes from 'prop-types';

import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { ErrorMessage } from 'formik';


const InputField = (props) => {
    const {
        field, form, // tu formik
        type, label, placeholder, disabled //tu component cha la FastField
    } = props;
    const {name} = field; // field gom co name, value, onChange, onBlur
    const {errors, touched} =form;
    const showError = errors[name] && touched[name];
    return (
        <div>
            <FormGroup>
                {label && <Label for={name}>{label}</Label>}
                <Input
                    id={name}
                    {...field}

                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}

                    invalid={showError}
                />
                {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
                <ErrorMessage name={name} component={FormFeedback} />

            </FormGroup>
        </div>
    )
}
InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
  
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
  };
  
InputField.defaultProps = {
type: 'text',
label: '',
placeholder: '',
disabled: false,
}

export default InputField
