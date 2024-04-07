import React, { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < 301; index++) {
        cart[index] =  0;           
    }
    return cart;
}
const ShopContextProvider = (props)=>{
    const [all_product, setAll_product] = useState([]);
    useEffect( ()=>{
        fetch('https://test-be-8631.onrender.com/allproduct')
        .then((res)=>res.json())
        .then((data)=>{
            setAll_product(data)
        })
    },[])
    const [cartItem, setCartItem] = useState(getDefaultCart());
    const getTotal = ()=>{
        let total = 0;
        all_product.forEach( (item)=>
            
                cartItem[item.id] > 0 ? total += item.new_price*cartItem[item.id] : total
            
        )
        return total;
    }
    const getTotalCart = ()=>{
        let total = 0;
        all_product.forEach( (item)=>
            
                cartItem[item.id] > 0 ? total+=cartItem[item.id] : total
            
        )
        return total;
    }
    const addToCart = (itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        if(localStorage.getItem("auth-token")){
            fetch('https://test-be-8631.onrender.com//addtocart',{
                method: "POST",
                headers:{
                    Accept: 'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"id":itemId})
            }).then((res)=>res.json())
            .then((data)=>{
                console.log(data);
            })

        }
    }
    const removeToCart = (itemId)=>{
        setCartItem((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }
    const contextValue = {getTotalCart,getTotal, all_product, cartItem, addToCart, removeToCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider