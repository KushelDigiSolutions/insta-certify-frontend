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
import { format } from "path";

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

  //    const products = cart.map(product => product._id);

  //  console.log(cartData[0].total)

  

      // console.log("rpduct" , products);

    //  const token = localStorage.getItem("ecomm_userToken");


     const response = await fetch("https://admin.instacertify.com/api/order/create",
       {
         method: "POST",
         headers: {
           "content-type": "application/json",
           "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("insta_Access"))}`
 
         },
         body: JSON.stringify(
          {"products":[{
            id:cartData[0]?.product_id,
            qty:cartData[0].quantity
          }],
            "address_id":3
          }
         ),
       }
     );
    

     const formattedResponse = await response.json();
    console.log(formattedResponse);
    //  let amount = formattedResponse.message.amount/100;
     
  

     const options = {
    // key:"rzp_live_qmaktzPiRRIRtX", 
    key:"rzp_test_CwqqqkGACAHRpy",
    amount:1, 
    currency: "INR",
    name: "Nikhil",
    description: "product transaction",
    order_id: 2,
    callback_url: `https://ecomm-backend-aopz.onrender.com/api/v1/payment/verifySignature/${JSON?.parse(localStorage.getItem("insta_Access"))}`,
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

      {cartUpdate == true ? (<span className='loadingOverlay' style={{ display: 'block', position: 'fixed' }} />) : ""}

      {cartEnpty === false ? (
        <div className="container cart_container">
          {
            cartData?.length > 0 ?
              <table
                className={

                  style.cartTabel
                }
              >
                <thead>
                  <tr>
                    <th className={style.item_th_1}>Product</th>
                    <th className={style.item_th_2}>Price</th>
                    <th className={style.item_th_3}>Quantity</th>
                    <th className={style.item_th_4}>Total</th>
                  </tr>
                </thead>
                {
                  cartData?.map((val, index) => {
                    return (
                      <tbody className="test_carting" key={index}>


                        <>

                          <td className={style.item_td_1}>
                            <div className={style.imageWithContent}>
                              <div className={style.left}>

                                <img width="200" height="212" src={val?.image || val?.images} />
                              </div>
                              <div className={style.right}>
                                <h4>{val?.name || val?.product_name}</h4>
                                <button onClick={() => {
                                  const isLoggedIn = JSON?.parse(localStorage.getItem("insta_Access"));
                                  if (isLoggedIn) {
                                    removeCarts(val.product_id, val.quantity);

                                  }
                                  else {
                                    const filterdata = cartData?.filter(data => data?.id !== val?.id);
                                    setCartData(filterdata);
                                    sessionStorage.setItem("cartItems", JSON.stringify(filterdata));
                                    toggleBoolValue();

                                  }

                                }} type="button">Remove</button>
                              </div>
                            </div>
                          </td>

                          <td className={style.item_td_2}>
                            {/* <span className={style.eleTitle}>Price: </span> */}
                            <span>₹{val?.price}</span>
                          </td>

                          <td className={style.item_td_3}>
                            <div className={style.formIncrement + " parentFormIncrement"}>
                              <button onClick={() =>
                                setCartData((prev) => (
                                  prev.map((item) => (
                                    item.product_id === val.product_id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
                                  ))
                                ))
                              } className={style.btnIncDec + " qtyDecrement"} type="button">
                                <EventDetMinus />
                              </button>
                              <span className={style.inputQty}>{val?.quantity}</span>
                              <button onClick={() =>
                                setCartData((prev) => (
                                  prev.map((item) => (
                                    item.product_id === val.product_id ? { ...item, quantity: Math.max(1, item.quantity + 1) } : item
                                  ))
                                ))
                              } className={style.btnIncDec + " qtyIncrement"} type="button">
                                <EventDetPlus />
                              </button>
                            </div>
                          </td>

                          <td className={style.item_td_4}>
                            {/* <span className={style.eleTitle}>Total:</span> */}
                            <span>₹{val?.price * val?.quantity}</span>
                          </td>
                        </>


                      </tbody>
                    )

                  })




                }

              </table>
              :

              <div className="container">
                <div className={style.cart_empty}>
                  <svg fill="#1C2E33" width="26" height="28" viewBox="0 0 26 28">
                    <path d="M10 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM24 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM26 7v8c0 0.5-0.391 0.938-0.891 1l-16.312 1.906c0.078 0.359 0.203 0.719 0.203 1.094 0 0.359-0.219 0.688-0.375 1h14.375c0.547 0 1 0.453 1 1s-0.453 1-1 1h-16c-0.547 0-1-0.453-1-1 0-0.484 0.703-1.656 0.953-2.141l-2.766-12.859h-3.187c-0.547 0-1-0.453-1-1s0.453-1 1-1h4c1.047 0 1.078 1.25 1.234 2h18.766c0.547 0 1 0.453 1 1z"></path>
                  </svg>
                  <h2>Your cart is empty</h2>
                  <Link href={"/"}>Go to Home</Link>
                </div>
              </div>

          }


          {
            cartData?.length > 0 && <button onClick={() => {

              const isLoggedIn = JSON?.parse(localStorage.getItem("insta_Access"));
              if (isLoggedIn) {
                clearCarts();

              }
              else {
                sessionStorage.setItem("cartItems", JSON.stringify([]));
                setCartData([]);
                toggleBoolValue();
              }

            }} className="site-button site_button1">Clear Carts</button>
          }

          {
            cartData?.length > 0 && <button onClick={() => {

              const isLoggedIn = JSON?.parse(localStorage.getItem("insta_Access"));
              if (isLoggedIn) {
                paymentHandler();
              }
              else {
                router.push('/login');
              }

            }} className="site-button site_button1">Checkout</button>
          }

          {cartLoad == false ? (
            <div className={style.cartSummary}>
              <ul>
                <li>
                  <span>Subtotal</span>
                  <span>${cartData?.cart_amount.toFixed(2)}</span>
                </li>
                <li>
                  <span>Shipping & Tax</span>
                  <span>Calculated at Checkout</span>
                </li>
                <li className={style.grandTotal}>
                  <span>Total</span>
                  <span>${cartData?.cart_amount.toFixed(2)}</span>
                </li>
              </ul>
              <p className={style.discountInfo}>
                Discount codes can be applied during checkout.
              </p>

              {status == "authenticated" ? (<Link href={cartData?.redirect_urls?.checkout_url} className={style.btnCheckout}>Checkout</Link>) : (<Link href={'/login'} className={style.btnCheckout}>Checkout</Link>)}


            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="container">
          <div className={style.cart_empty}>
            <svg fill="#1C2E33" width="26" height="28" viewBox="0 0 26 28">
              <path d="M10 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM24 24c0 1.094-0.906 2-2 2s-2-0.906-2-2 0.906-2 2-2 2 0.906 2 2zM26 7v8c0 0.5-0.391 0.938-0.891 1l-16.312 1.906c0.078 0.359 0.203 0.719 0.203 1.094 0 0.359-0.219 0.688-0.375 1h14.375c0.547 0 1 0.453 1 1s-0.453 1-1 1h-16c-0.547 0-1-0.453-1-1 0-0.484 0.703-1.656 0.953-2.141l-2.766-12.859h-3.187c-0.547 0-1-0.453-1-1s0.453-1 1-1h4c1.047 0 1.078 1.25 1.234 2h18.766c0.547 0 1 0.453 1 1z"></path>
            </svg>
            <h2>Your cart is empty</h2>
            <Link href={"/"}>Go to Home</Link>
          </div>
        </div>
      )}
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
