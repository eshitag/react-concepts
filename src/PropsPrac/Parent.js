import React, { useState } from 'react';
import AnotherChild from './AnotherChild';
import Child from './Child';


function Parent() {

    const [total, setTotal] = useState('')


    const calculateTotal = (price, qty) => {
        setTotal(total * price * qty)
        console.log(total)
    }

    const show = (name) => {
        alert("You selected : " + name)
    }

    return (
        <React.Fragment>
            <Child name="Android" price="121"
                handleShow={show}
                handleTotal={calculateTotal}></Child>
            <Child name="Apple" price="205"
                handleShow={show}
                handleTotal={calculateTotal}></Child>
            <Child name="Windows" price="75"
                handleShow={show}
                handleTotal={calculateTotal}></Child>
            <AnotherChild total></AnotherChild>
            {console.log(typeof (total))}
            {console.log(total)}
            {console.log(typeof (price))}
        </React.Fragment>
    )
}

export default Parent;