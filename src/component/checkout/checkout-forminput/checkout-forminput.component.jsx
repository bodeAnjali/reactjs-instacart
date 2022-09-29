import React from 'react';
import './checkout-forminput.styles.scss';

const CheckoutFormInput = ({ handleChange, label, className , ...otherProps }) => {
    return (
        <div className='checkout-form'>
            <input className={className ? 'zip' : 'checkout-form-input'} onChange={handleChange} {...otherProps} />
            {
                label ?
                    (<label className={`${otherProps.value.length ? 'shrink' : ''
                        } checkout-forminput-label`}
                    >
                        {label}
                    </label>)
                    : null
            }
        </div>
    )
};

export default CheckoutFormInput;