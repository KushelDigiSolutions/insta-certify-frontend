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


    //  const []

    

    const [addressDetail, setAddressDetail] = useState({
        name: "",
        state: "",
        city: "",
        status: "",
        address1: "",
        address2: "",
        pincode: "",
        landmark: "",
        phone: "",
        address_type: ""
    });

    const handleAddressChange = (e) => {

        const { name, value } = e.target;
        setAddressDetail((prevAddressDetail) => ({
            ...prevAddressDetail,
            [name]: value,
        }));

    };

    // useEffect(() => {
    //     const checkUser = localStorage.getItem("insta_User");
    
    //     if (checkUser) {
    //       var storedUserObject = JSON.parse(checkUser);
    
    //       const { name,state,city } = storedUserObject;
    
    //       setFormData((prev) => ({
    //         ...prev,
    //         name: name,
    //         state: state,
    //         city: city,
    //       }));
    
          
    //     }
    //   }, []);

    const createAddressHandler = async (e) => {
        // let token = localStorage.getItem("ecomm_userToken");
        e.preventDefault();
        try {
            const response = await fetch(
                "https://admin.instacertify.com/api/createaddress",
                {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json",
                        "Authorization": `Bearer ${JSON?.parse(localStorage.getItem("insta_Access"))}`

                    },
                    body: JSON.stringify(addressDetail),
                }
            );

            const formattedResponse = await response.json();
            console.log(formattedResponse);

            //  if(formattedResponse.success){
            //   localStorage.removeItem("ecomm_user");
            //   var userObjectString = JSON.stringify(formattedResponse.userDetails);

            //   localStorage.setItem("ecomm_user" , userObjectString);
            //   setUserDetails(formattedResponse?.userDetails);

            //   alert("succesfuly Updated the address");
            //   onNext();
            //  }
            //  else{
            //   alert(formattedResponse.message);
            //  }

        } catch (error) {
            console.log(error);
        }
    }




    return (
        <div className={style.cartBody}>
            <HeadSEO
                title={"Shopping Cart"}
                description={"Shopping Cart"}
                image={false}
            />
            <div className="container">
                <div className="form_address">
                    <form className="form_add" onSubmit={createAddressHandler}>

                        <div className="address_flex">
                            <div className="address_input">
                                <input name="name" onChange={handleAddressChange} value={addressDetail?.name} className="form-control" type="text" placeholder="Name" />
                            </div>
                            <div className="address_input">
                                <input name="landmark" onChange={handleAddressChange} value={addressDetail?.landmark} type="text" placeholder="Landmark" />
                            </div>
                        </div>
                        <div className="address_flex">

                            <div className="address_input">
                                <textarea name="address1" onChange={handleAddressChange} value={addressDetail?.address1} placeholder="Address1" />
                            </div>
                            <div className="address_input">
                                <textarea name="address2" onChange={handleAddressChange} value={addressDetail?.address2} placeholder="Address2" />
                            </div>
                        </div>



                        <div className="address_flex">
                            <div className="address_input">
                                <input name="phone" value={addressDetail?.phone} onChange={handleAddressChange} type="number" placeholder="Phone Number" />
                            </div>
                            <div className="address_input">
                                <input name="city" onChange={handleAddressChange} value={addressDetail?.city} type="text" placeholder="City" />
                            </div>
                        </div>


                        <div className="address_flex">
                            <div className="address_input">
                                <input name="state" onChange={handleAddressChange} value={addressDetail?.state} type="text" placeholder="State" />
                            </div>
                            <div className="address_input">
                                <input value={addressDetail?.pincode} name="pincode" onChange={handleAddressChange} type="text" placeholder="PinCode" />
                            </div>
                        </div>


                        <div className="address_flex">
                            <div className="address_input">
                                <input name="address_type" value={addressDetail?.address_type} onChange={handleAddressChange} type="text" placeholder="Address_type" />
                            </div>
                            <div className="address_input">
                                <input name="status" value={addressDetail?.status} onChange={handleAddressChange} type="text" placeholder="Status" />
                            </div>
                        </div>

                        <button type="submit" className="btn save_address">Save Address</button>

                    </form>

                </div>
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
