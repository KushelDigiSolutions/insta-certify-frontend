import React, { useEffect, useState } from 'react'
import style from "./../css/classeDetails.module.scss";
import HeadSEO from '../../components/common/Head/head';
import $ from "jquery";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import Image from 'next/image';
import moment from "moment";

//Slider css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//ICONS
import EventDetLocation from '../../components/common/svg/eventDetials/location';
import GlobalArrowUp from '../../components/common/svg/global/arrowUp';
import GlobalArrowDown from '../../components/common/svg/global/arrowDown';
import GlobalClose from '../../components/common/svg/global/close';
import { useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';


var settingsMorePhotos = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
};


export default function ClassDetails(pageProp) {

    const router = useRouter();
    const [message, setMessage] = useState('');
    const [formSubmit, setFormSubmit] = useState(false);
    const [showPhotos, setShowPhotos] = useState(false);
    const { data: session, status } = useSession();

    const classesObj = pageProp.page_content?.classes;

    var categories_name = "";
    if(classesObj?.categories?.length > 0){
        classesObj?.categories.map((lss)=>{
            categories_name += lss.name+", ";
        });
    }
    if(categories_name != ""){ categories_name = categories_name.substring(0, categories_name.length - 2); }


    useEffect(function(){
        $(".classe_image_thumbnails").on('click', 'li', function(){
            $(".classe_image_thumbnails li").removeClass('is_active');
            $(this).addClass('is_active')
            const img_src = $(this).attr('data-src');
            const is_vedio = $(this).hasClass('is_vedio');
            if(is_vedio == true){
                $('.classe_image').addClass('classe_video');
                $(".classe_image .is_video").html(`<iframe width="560" height="315" src="${img_src}" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`).show();
            }else{
                $('.classe_image').removeClass('classe_video');
                $(".classe_image > img").attr('src',img_src).attr('srcset',img_src).show();
                $(".classe_image .is_video").html('').hide();
            }
        })
    },[])

    const handleSubmit = async (id) => {
        setFormSubmit(true)
        const nx_cart_id = Cookies.get('nx_cart_id');
        const cartData = [{
            customer_id: session ? session?.user?.bcId : 0,
            nx_cart_id: typeof nx_cart_id != "undefined" ? nx_cart_id : 0,
        }];

        const itemsData = [{
            "quantity": 1,
            "product_id": id
        }];
        
        cartData.push({"products":itemsData});

        const createCart = await fetch(process.env.next.api_url+"cart/create",{
            method:"post",
            headers:{
                "Accept": 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(cartData)
        });
        const cartRes = await createCart.json();

        console.log('cartRes')
        console.log(cartRes)

        if(cartRes?.status && cartRes?.status == 404){
            setMessage("Something went wrong");
            setFormSubmit(false)
            return false;
        }
        if(cartRes?.status && cartRes?.status == 422){
            setMessage("Classe is not available for now.");
            setFormSubmit(false)
            return false;
        }

        const cart_id = cartRes?.data?.id;
        if(typeof cart_id != "undefined" && cart_id != ""){
            console.log(cartRes?.data)
            Cookies.set('nx_cart_id', cart_id, { expires: 4 });
            router.push('/cart');
        }else{
            Cookies.remove('nx_cart_id');
            setMessage("Something went wrong");
            setFormSubmit(false)
            $(".priceWithIcon .count").text('0.00')
            $(".btnCheckout span").html('0.00');
            return false;
        }

        
    }

    return (
        <div className={style.eventDetails}>
            <HeadSEO title={classesObj?.seo_title} description={classesObj?.seo_description} image={classesObj?.banner != null ? classesObj?.banner : classesObj?.image?.length > 0 ? classesObj?.image[0] : false}  />

            {/* Section banner */}
            <div className={style.page_top_banner}>
                <div className="container">
                <div className={style.banner_heading}>
                    <h1>{classesObj?.title}</h1>
                </div>
                </div>
                <Image
                className={style.banner_image}
                src={classesObj?.banner != null ? classesObj?.banner[0] : classesObj?.image?.length > 0 ? classesObj?.image[0] :"/images/event-top-banner.png" }
                width="100"
                height="304"
                layout="responsive"
                objectFit="cover"
                alt="Event List"
                />
            </div>



            <div className='container container_classe'>

                <div className={style.classe_view_info}>

                    {/* Left */}
                    <div className={style.left}>

                        <h2 className={style.classe_title}>{classesObj?.title}</h2>

                        {/* Main Image */}
                        
                        { classesObj?.image?.length > 0 ? (
                            <div className={style.classe_image + " classe_image"}>
                                    <Image
                                        className={style.figure}
                                        src={classesObj?.image[0]}
                                        width="400"
                                        height="425"
                                        alt={"ls.title"}
                                        quality={100}
                                        style={{display: classesObj?.video == null ? "block":"none" }}
                                    />
                                    { classesObj?.video != null ? 
                                    (<div className={style.is_video+ " is_video"}>
                                        <iframe width="560" height="315" src={classesObj?.video} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
                                    </div>)
                                    : "" }
                            </div>
                        ):""}
                        
                        {/* Thumbnails Image */}
                        <ul className={style.classe_image_thumbnails + ' classe_image_thumbnails'}>
                            
                            { classesObj?.video != null ? 
                                (<li className={"is_vedio"} data-src={classesObj?.video}>
                                    <iframe src={classesObj?.video} width="80" height="80" title={classesObj?.title} frameBorder="0"></iframe>
                                    <span className={style.play_icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                            <path d="M11.1503 10.8493L17.6603 14.9998L11.1503 19.1504V10.8493ZM8.67969 6.35278V23.6469L22.2679 14.9998L8.67969 6.35278Z" fill="#F8FAFC"/>
                                        </svg>
                                    </span>
                                </li>)
                                :""}

                            {
                                classesObj?.image?.length > 0 ? (
                                    classesObj?.image.map((ls,i)=>(
                                        <li key={i} data-src={ls}>
                                            <Image
                                                className={style.figure}
                                                src={ls}
                                                width="86"
                                                height="86"
                                                alt={"ls.title"}
                                                quality={100}
                                            />
                                        </li>
                                    ))
                                ):""
                            }

                            {
                                classesObj?.image?.length > 4 ? (
                                    <li onClick={()=>{ setShowPhotos(true) }}>
                                        
                                        <Image
                                            className={style.figure}
                                            src={classesObj?.image[classesObj?.image?.length-1]}
                                            width="86"
                                            height="86"
                                            alt={"ls.title"}
                                            quality={100}
                                        />
                                        <span className={style.viewMore}>
                                            View <br /> More
                                        </span>
                                    </li>
                                ):""
                            }
                        </ul>

                        
                        <div className={style.classe_description}>
                            <h2>Description</h2>
                            <div className={style.classe_desc_info} dangerouslySetInnerHTML={ {__html:classesObj?.description} }></div>
                        </div>

                        {/* Knowledge Desc */}
                        <div className={style.knowledge_desc}>
                            <p className={style.knowledge_Head}>Prerequisite</p>
                            <div dangerouslySetInnerHTML={ {__html:classesObj?.prerequisites} }></div>
                        </div>
                        
                    </div>

                    {/* Right */}
                    <div className={style.right}>


                        <div className={style.classe_summry}>
                            { message != '' ? (<span className={style.errorMessage+" errorMessage"}>{message}</span>) : "" }
                            { formSubmit == true ? (<span className='loadingOverlay' style={{display:'block'}} />) : "" }

                            {
                                classesObj?.start_date != null ? (
                                    <div className={style.summry_info}>
                                        <span className={style.name}>Date</span>
                                        <span className={style.value}>{moment(classesObj?.start_date).format('M/D/Y')}</span>
                                    </div>
                                )
                                 : ""
                            }

                            <div className={style.summry_info}>
                                <span className={style.name}>Class Length</span>
                                <span className={style.value}>{classesObj?.class_length}</span>
                            </div>

                            { 
                                classesObj?.instruct_name != "" ? (
                                    <div className={style.summry_info}>
                                        <span className={style.name}>Instructor</span>
                                        <span className={style.value}>{classesObj?.instruct_name}</span>
                                    </div>
                                ) : ""
                            }
                            

                            

                            {
                                classesObj?.categories?.length > 0 ?(
                                    <div className={style.summry_info}>
                                        <span className={style.name}>Category</span>
                                        <span className={style.value}>
                                            {categories_name}
                                        </span>
                                    </div>
                                ) :""
                            }


                            <div className={style.summry_info +" "+ style.summry_info_total}>
                                <span className={style.name}>Total</span>
                                <span className={style.value}>
                                    {classesObj?.price == 0 ? "Free" : "$"+classesObj?.price?.toFixed(2)}
                                </span>
                            </div>

                            {classesObj?.bigcommerce_id > 0 ? (
                                <div className={style.summry_action}>
                                    <button className={style.add_to_cart} onClick={() => { handleSubmit(classesObj?.bigcommerce_id) }} >Add to Cart</button>
                                </div>
                            ) : (
                                <div className={style.summry_action}>
                                    <p>Not available for now</p>
                                </div>
                            )}

                        </div>

                    </div>

                </div>


                { 
                    classesObj?.instruct_name != "" ? (
                        <div className={style.author_details}>
                            <div className={style.author_profile}>
                                {classesObj?.instruct_pic != null ?(
                                    <Image
                                        className={style.author_figure}
                                        src={classesObj?.instruct_pic?.[0]}
                                        width="100"
                                        height="100"
                                        alt={"ls.title"}
                                        quality={100}
                                    />
                                ):""}
                                
                                <div className={style.author_content}>
                                    <span className={style.author_tag}>INSTRUCTOR</span>
                                    <span className={style.author_name}>{classesObj?.instruct_name}</span>
                                </div>
                            </div>
                            <div className={style.author_info} dangerouslySetInnerHTML={ {__html:classesObj?.instruct_bio} }></div>
                        </div>
                    ) : ""
                }


                <div className={style.location_details}>
                    <span className={style.icon}><EventDetLocation /></span>
                    <div className={style.content}>
                        <h4>Location</h4>
                        <p>{classesObj?.location}</p>
                    </div>
                </div>

                {/* Google Map */}
                {classesObj?.iframe != null ? (
                    <div className={style.googleMap}>
                        <div dangerouslySetInnerHTML={ {__html:classesObj?.iframe} }></div>
                    </div>
                ) : ""}


                {/* Show more photos gallrey */}
                {showPhotos ? (
                    <div className={style.morePhotosPopups+ " morePhotosPopups"}>
                        <div className={style.inner}>
                            <div className={style.author_details}>
                                <div className={style.author_profile}>
                                    {classesObj?.instruct_pic != null ?(
                                        <Image
                                            className={style.author_figure}
                                            src={classesObj?.instruct_pic}
                                            width="200"
                                            height="212"
                                            alt={"ls.title"}
                                            quality={100}
                                        />
                                    ):""}
                                    <div className={style.author_content}>
                                        <span className={style.author_tag}>INSTRUCTOR</span>
                                        <span className={style.author_name}>{classesObj?.instruct_name}</span>
                                    </div>
                                </div>
                            </div>
                            <Slider {...settingsMorePhotos}>
                                { classesObj?.video != null ? 
                                    (<iframe width="200" height="200" src={classesObj?.video} title="YouTube video player" frameBorder="0"></iframe>) :""
                                }
                                {
                                    classesObj?.image?.length > 0 ? (
                                        classesObj?.image.map((ls,i)=>(
                                            <Image key={ls} src={ls} width="1280" height="600" alt={'eventObj?.title'} quality={100} />
                                        ))
                                    ):""
                                }
                            </Slider>
                            <span className={style.close} onClick={()=>{ setShowPhotos(false) }}><GlobalClose /> </span>
                        </div>
                    </div>
                ) :""}


            </div>
        </div>
    )
}


export async function getServerSideProps(context) {
    const globalSettings = await GlobalHeaderFooter();
    const urlSlug = context.params.slug;
    if(urlSlug != ""){
        
        const reqFetch = await fetch(process.env.server.api+"get-vclasses-details/"+urlSlug);
        const reqDetial = await reqFetch.json();

        return {
            props: {
                page_content: reqDetial,
                navbar: globalSettings?.header,
                footer: globalSettings?.footer
            },
        };
            
    }else{
  
        return {
            props: {
              page_content: false,
              navbar: globalSettings?.header,
              footer: globalSettings?.footer
            },
            notFound: true
        };
  
    }
  }
  