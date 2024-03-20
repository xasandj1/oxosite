import React from 'react'

const primaryButton = 'py-[10px] px-4 rounded-lg text-base font-medium flex items-center bg-primary text-white';
const secondaryButton = 'py-[12px] px-[50px] rounded-lg text-base font-medium flex items-center bg-primary text-white';

const Button = ({ children, classes, type, disable, click }) => {
    return (
        <button className={classes} type={type} disabled={disable} onClick={click}>{children}</button>
    )
}
export default Button
export { primaryButton, secondaryButton }
