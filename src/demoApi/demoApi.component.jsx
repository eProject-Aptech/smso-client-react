import React, { useState } from 'react'

const DemoApi = () => {
    const [typesOfProduct, setTypesOfProduct] = useState([]);
    const [inputValue, setInputValue] = useState({
        name: "",
        quantity: "",
        price: "",
        typeOfProduct: "",
    });

    return (
        <div>DemoApi</div>
    )
}

export default DemoApi