import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "./css/shoppings-lists.module.scss";
import Link from "next/link";

import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import Navbar from '../components/common/Navbar/Navbar'
//Slider css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingProductSlider from "../components/common/shopping/product-slider";
import ShoppingCollections from "../components/common/shopping/collections";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useRouter } from 'next/router';

// import { stat } from "fs";


var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
};


export default function newssdetail(pageProp) {

    const product = pageProp.page_content.product;
    const customFields = product?.customFields;

    const [count, setCount] = useState(1);

    const [start, setStart] = useState(1);

    const [popup, setPopup] = useState(false);

    const func1 = () => {
        setStart(1);
        document.getElementById("fast").style.color = "#EC691F"
        document.getElementById("fast").style.borderBottom = "4px solid #EC691F"
        document.getElementById("fast").style.fontWeight = "600"

        document.getElementById("second").style.color = "#444444"
        document.getElementById("second").style.borderBottom = "none"
        document.getElementById("second").style.fontWeight = "500"

        document.getElementById("third").style.color = "#444444"
        document.getElementById("third").style.borderBottom = "none"
        document.getElementById("third").style.fontWeight = "500"
    }

    const func2 = () => {
        setStart(2);
        document.getElementById("fast").style.color = "#444444"
        document.getElementById("fast").style.borderBottom = "none"
        document.getElementById("fast").style.fontWeight = "500"

        document.getElementById("second").style.color = "#EC691F"
        document.getElementById("second").style.borderBottom = "4px solid #EC691F"
        document.getElementById("second").style.fontWeight = "600"

        document.getElementById("third").style.color = "#444444"
        document.getElementById("third").style.borderBottom = "none"
        document.getElementById("third").style.fontWeight = "500"
    }

    const func3 = () => {
        setStart(3);

        document.getElementById("fast").style.color = "#444444"
        document.getElementById("fast").style.borderBottom = "none"
        document.getElementById("fast").style.fontWeight = "500"

        document.getElementById("second").style.color = "#444444"
        document.getElementById("second").style.borderBottom = "none"
        document.getElementById("second").style.fontWeight = "500"

        document.getElementById("third").style.color = "#EC691F"
        document.getElementById("third").style.borderBottom = "4px solid #EC691F"
        document.getElementById("third").style.fontWeight = "600"
    }

    //   const [section1, SetSection1] = useState(()=>{
    //     if(customFields?.edges?.length > 0) {
    //       customFields?.edges?.map(async (ls)=>{
    //         if(ls.node.name == "Section - 1"){
    //           const reqFetchProduct = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           }, body: JSON.stringify({"id": ls.node.value }) });
    //           const resultProduct = await reqFetchProduct.json();
    //           SetSection1(resultProduct);
    //         }
    //       });
    //     }
    //   });
    //   const [section2, SetSection2] = useState(()=>{
    //     if(customFields?.edges?.length > 0) {
    //       customFields?.edges?.map(async (ls)=>{

    //         if(ls.node.name == "Section - 2"){ 
    //           const reqFetchProduct_2 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           }, body: JSON.stringify({"id": ls.node.value }) });
    //           const resultProduct_2 = await reqFetchProduct_2.json();
    //           SetSection2(resultProduct_2);
    //         }

    //       });
    //     }
    //   });
    //   const [section3, SetSection3] = useState(()=>{
    //     if(customFields?.edges?.length > 0) {
    //       customFields?.edges?.map(async (ls)=>{

    //         if(ls.node.name == "Section - 3"){ 
    //           const reqFetchProduct_3 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           }, body: JSON.stringify({"id": ls.node.value }) });
    //           const resultProduct_3 = await reqFetchProduct_3.json();
    //           SetSection3(resultProduct_3); 
    //         }

    //       });
    //     }
    //   });
    //   const [section4, SetSection4] = useState(()=>{
    //     if(customFields?.edges?.length > 0) {
    //       customFields?.edges?.map(async (ls)=>{

    //         if(ls.node.name == "Section - 4"){ 
    //           const reqFetchProduct_4 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           }, body: JSON.stringify({"id": ls.node.value }) });
    //           const resultProduct_4 = await reqFetchProduct_4.json();
    //           SetSection4(resultProduct_4); 
    //         }

    //       });
    //     }
    //   });
    //   const [section5, SetSection5] = useState(()=>{
    //     if(customFields?.edges?.length > 0) {
    //       customFields?.edges?.map(async (ls)=>{

    //         if(ls.node.name == "Section - 5"){ 
    //           const reqFetchProduct_5 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           }, body: JSON.stringify({"id": ls.node.value }) });
    //           const resultProduct_5 = await reqFetchProduct_5.json();
    //           SetSection5(resultProduct_5); 
    //         }

    //       });
    //     }
    //   });
    //   const [section6, SetSection6] = useState(()=>{
    //     if(customFields?.edges?.length > 0) {
    //       customFields?.edges?.map(async (ls)=>{

    //         if(ls.node.name == "Section - 6"){ 
    //           const reqFetchProduct_6 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //           }, body: JSON.stringify({"id": ls.node.value }) });
    //           const resultProduct_6 = await reqFetchProduct_6.json();
    //           SetSection6(resultProduct_6); 
    //         }

    //       });
    //     }
    //   });
    const swiperRef = useRef(null);

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    const router = useRouter();
    const { id } = router.query;

    const [productdetail, setProductDetails] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    const fetchProductDetails = async () => {
        try {

            const resp = await fetch(`https://admin.instacertify.com/api/products/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (resp.status === 200) {
                const formateddata = await resp.json();
                setProductDetails(formateddata?.product);
                setReviews(formateddata?.reviews);

            }

        } catch (error) {

            console.error("There was an error fetching the categories:", error);
        }
    };

    const getRelatedProducts = async () => {
        try {

            const resp = await fetch(`https://admin.instacertify.com/api/products/${productdetail?.id}/related`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (resp.status === 200) {
                const formateddata = await resp.json();
                setRelatedProducts(formateddata?.related_products);

            }

        } catch (error) {

            console.error("There was an error fetching the categories:", error);
        }
    };

    useEffect(() => {

        if (id) {
            fetchProductDetails();
        }
        else {
            console.log("error");
        }

    }, [id])

    useEffect(() => {
        if (productdetail) {
            getRelatedProducts();
        }
    }, [productdetail])

    return (
        <div className="page_shopping_list sop">
            <HeadSEO title={product?.seo?.pageTitle == "" ? product?.name : product?.seo?.pageTitle} description={product?.seo?.metaDescription} image={null} />

            <div className="aboutwrap">



                <div className="aboutcont">

                    <img src={"https://admin.instacertify.com/backend/admin/media/journalist-taking.png"} className="aboutbanner" alt="" />
                    {/* <img src={"https://admin.instacertify.com/backend/admin/media/journalist-taking.png"} className="bannerfilter" alt="" />

                    <img src={"https://admin.instacertify.com/backend/admin/media/journalist-taking.png"} className="linesimg" alt="lines" /> */}

                    <div className="aboutcontent3s">
                        <span>Blog detail</span>
                    </div>


                </div>


            </div>

            <div className='blgdeta2wrap'>

                <div className="blode2cont">

                    <div className="blode2leftcon">

                        <div>
                            <img src={"https://admin.instacertify.com/backend/admin/media/journalist-taking.png"} alt="" className="blogdtaimgmain" />
                            <div className="blogbantitle">  Indian Fasteners Distribution and Trading Market  </div>
                        </div>

                        <div className="blogtags">
                            <p><span>By</span> Usha Fasteners</p>
                            <p><span>In</span> Fasteners</p>
                            <p><span>On</span> 24-Sep-2024</p>
                        </div>




                        <div className="singblogw">
                            <h2>Title is very big</h2>


                            <p>
                                the lorem ipsum the things of the care of ipsum
                            </p>



                            <ul className="intedata">


                                <li ><span>the: thief</span> paragraph  </li>


                            </ul>




                            <div className="subdatablog">


                                <label>
                                    <h4>Hi</h4>
                                    <p>kese ho app</p>
                                </label>


                            </div>


                        </div>



                    </div>

                    <div className="blode2rightc">

                        <h3>Recent Blogs</h3>



                        <div className="singblosdarslidd">

                            <img className="yu" src={"https://admin.instacertify.com/backend/admin/media/journalist-taking.png"} alt="" />
                            <h4 >the title is very big</h4>

                            <p className="dateobje"><img src="./images/renim.svg" alt="" /> <span>20 july,2025</span></p>

                        </div>



                    </div>
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
