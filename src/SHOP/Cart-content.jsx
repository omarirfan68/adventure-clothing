import { createContext, useState,useEffect } from "react";
const Addcarditem = (Cartitems, producttoadd) => {
    const existingcartitem =Cartitems.find((Cartitem)=>Cartitem.id===producttoadd.id
    )
    if(existingcartitem){
        return Cartitems.map((Cartitem)=>
        Cartitem.id===producttoadd.id
        ? {...Cartitem, quantity : Cartitem.quantity+1}:Cartitem
        )
    }
    return [...Cartitems,{ ...producttoadd , quantity: 1 }]
}
const Remover = (Cartitems,cartitemtoremove)=>{
    const existingcartitem =Cartitems.find((Cartitem)=>Cartitem.id===cartitemtoremove.id
    )
    if (existingcartitem.quantity===1){
        return Cartitems.filter(Cartitem =>  Cartitem.id!==cartitemtoremove.id)
    }
    return Cartitems.map((Cartitem)=>
        Cartitem.id===cartitemtoremove.id
        ? {...Cartitem, quantity : Cartitem.quantity -1}
        :Cartitem
        )
}
const Clearitemfromcart=(Cartitems,cartitemtoclear)=> Cartitems.filter( (Cartitem)  =>  Cartitem.id!==cartitemtoclear.id)

export const CardContext=createContext({
    IsCartOpen : false,
    Additemtocart :()=>{},
    Removecartitem:()=>{},
    Cartitems: [],
    Setiscartopen:()=>{},
    Cartcount:0,
    Clearcartitem:()=>{},
    Carttotal:0
})   
export const CardProvider = ({ children }) => {
    const [IsCartOpen, Setiscartopen] = useState(false)
    const [Cartitems, Setcartitem] = useState([]);
    const [Cartcount,SetCartcount] = useState(0)
    const [Carttotal,SetCarttotal] = useState(0)
    useEffect(()=>{
        const NewCartcount = Cartitems.reduce((total,Cartitem)=>total + Cartitem.quantity, 0)
        SetCartcount(NewCartcount)
    },[Cartitems]
    )
    useEffect(()=>{
        const NewCarttotal = Cartitems.reduce((total,Cartitem)=>total + Cartitem.quantity * Cartitem.price,0)
        SetCarttotal(NewCarttotal)
    },[Cartitems]
    )


    const Additemtocart = (producttoadd) => {
        Setcartitem(Addcarditem(Cartitems, producttoadd))
    }

    const Removecartitem = (cartitemtoremove) => {
        Setcartitem(Remover(Cartitems, cartitemtoremove))
    }

    const Clearcartitem = (cartitemtoclear) => {
        Setcartitem(Clearitemfromcart(Cartitems, cartitemtoclear))
    }

    const value = { IsCartOpen, Setiscartopen, Additemtocart,Removecartitem, Clearcartitem, Cartitems,Cartcount,Carttotal };
    return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}
