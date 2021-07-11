import React, { useState, useEffect } from 'react';
import calculateTotalPrice from './calculateTotalPrice';
import './Form.css'
const Form = () => {

    const [price, setPrice] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setPrice(calculateTotalPrice.map(x=>x.totalPrice));
        
    }

    return <form onSubmit={handleSubmit} className="form">

        {calculateTotalPrice.map((x, i) => {
            return <>
                <label htmlFor={`${x.totalPrice}-${i}`}> Total Price <i> : </i>
                    <input
                        key={`${x.totalPrice}-${i}`}
                        defaultValue={price[i]}
                        className="form-price"
                        id={`${x.totalPrice}-${i}`}
                        readOnly
                    />
                    <i> -</i>  {x.startDay}:{x.endDay}
                </label>
                <br></br>
            </>
        })}

        <input type="submit" value="Calculate Price"/>
    </form>
}

export default Form;


