import React, { useEffect, useState } from "react";
import style from "./css/cart.module.scss";
import Link from "next/link";
import Cookies from "js-cookie";
import HeadSEO from "../components/common/Head/head";
import CartItemsLoading from "../components/common/Cart/cart-items-loading";
import { useSession } from "next-auth/react";
import CartItems from "../components/common/Cart/cart-items";
import { useRouter } from 'next/router';
import EventDetMinus from "../components/common/svg/eventDetials/minus";
import EventDetPlus from "../components/common/svg/eventDetials/plus";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import { constrainedMemory } from "process";

export default function Cart(props) {

  // console.log("cartprob",props);

  const { toggleBoolValue, boolValue } = props;

  const [cartLoad, setCartLoad] = useState(true);
  const [cartEnpty, setCartEnpty] = useState(false);
  const [cartUpdate, setCartUpdate] = useState(false);
  const [cartData, setCartData] = useState([]);
  const { data: session, status } = useSession();
  const nx_cart_id = Cookies.get("nx_cart_id");

  const router = useRouter();


  const [count, setCount] = useState(1);

  // const [refreshFlag,setrefreshFlag] = useState(false);


  //Get Cart
  // const getCartDetails = async () => {

  //   if (typeof nx_cart_id != "undefined" && nx_cart_id != "") {
  //     const getCart = await fetch(process.env.next.api_url + "cart/get", {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ cart_id: nx_cart_id }),
  //     });
  //     const cartRes = await getCart.json();


  //     if (cartRes?.status && cartRes?.status == 404) {
  //       setCartEnpty(true);
  //       setCartLoad(false);
  //       Cookies.remove("nx_cart_id");
  //       setCartUpdate(false);
  //       return false;
  //     }
  //     if (typeof cartRes?.data != "undefined") {
  //       setCartEnpty(false);
  //       setCartLoad(false);
  //       setCartData(cartRes?.data);
  //       setCartUpdate(false);
  //       return false;
  //     }
  //   }else{
  //     setCartEnpty(true);
  //     setCartLoad(false);
  //     setCartUpdate(false);
  //     Cookies.remove("nx_cart_id");
  //     return false;
  //   }
  // };

  // useEffect(function () {
  //   getCartDetails();
  // }, []);


  const getCarts = async () => {

    try {
      const response = await fetch("https://admin.instacertify.com/api/cart", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("insta_Access"))}`
        }
      });

      const data = await response.json();
      console.log(data?.cart);
      setCartData(data?.cart);
    } catch (error) {
    }
  };

  const removeCarts = async (id, qty) => {
    try {
      const response = await fetch("https://admin.instacertify.com/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("insta_Access"))}`
        },
        body: JSON.stringify({
          product_id: id,
          quantity: qty
        }),
      });


      // if (response.ok) {
      const data = await response.json();
      console.log(data);
      toggleBoolValue();
      setCartData(data?.cart);

      // } 
    } catch (error) {
      console.log(error);
    }
  }

  const clearCarts = async () => {
    try {
      const response = await fetch("https://admin.instacertify.com/api/cart/clear", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("insta_Access"))}`
        },

      });
      const data = await response.json();
      alert(data?.message)
      setCartData(data?.cart);
      toggleBoolValue();


    } catch (error) {
    }
  }


  useEffect(() => {
    const isLoggedIn = JSON?.parse(localStorage.getItem("insta_Access"));
    if (isLoggedIn) {
      sessionStorage.removeItem("cartItems");
      getCarts();
    }
    else {
      let allCarts = JSON.parse(sessionStorage.getItem("cartItems")) || [];
      setCartData(allCarts);
    }
  }, [boolValue])

  useEffect(() => {
    const loadRazorpayScript = async () => {
      // Check if Razorpay script is not already loaded
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    loadRazorpayScript();
  }, []); // Empty dependency array ensures it runs only once after mount

  
   const paymentHandler = async()=>{

    //  const products = cart.map(product => product._id);

  //  console.log(cartData[0].total)

  

      // console.log("rpduct" , products);

    //  const token = localStorage.getItem("ecomm_userToken");


    //  const response = await fetch("https://ecomm-backend-aopz.onrender.com/api/v1/payment/capturePayment",
    //    {
    //      method: "POST",
    //      headers: {
    //        "content-type": "application/json",
    //       //  Authorization: `Bearer ${token}`,
 
    //      },
    //      body: JSON.stringify({products}),
    //    }
    //  );
    

    //  const formattedResponse = await response.json();

    //  let amount = formattedResponse.message.amount/100;
     
    for ( let index in cartData){
      let val = cartData[index];
      console.log(val.total);
    }

     const options = {
    key:"rzp_live_qmaktzPiRRIRtX", 
    amount:(cartData[0].total) * 100, 
    currency: "INR",
    name: "Nikhil",
    description: "product transaction",
    // order_id: formattedResponse?.message?.id,
    // callback_url: `https://ecomm-backend-aopz.onrender.com/api/v1/payment/verifySignature/${token}`,
    prefill: {
        name: "login user name",
        email: "loginEmail.com",
        contact: "contactNumber" , 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#121212"
    }
     }
 
     const paymentObject = new window.Razorpay(options);

      paymentObject.open();

   
 
   }



  return (
    <div className={style.cartBody}>
      <HeadSEO
        title={"Shopping Cart"}
        description={"Shopping Cart"}
        image={false}
      />

       <div>
          <h2>hi</h2>
       </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {

    const globalSettings = await GlobalHeaderFooter();
    return {
      props: {
        page_content: false,
        navbar: globalSettings?.header,
        footer: globalSettings?.footer
      },
    };

  } catch (error) {

    return {
      props: {
        page_content: false,
        navbar: false,
        footer: false
      },
      notFound: true
    };

  }
}
