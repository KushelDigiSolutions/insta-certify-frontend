import Image from "next/image";
import React, { useRef, useState } from "react";
import style from "./../css/equipmentRentalDetails.module.scss";
import $ from "jquery";

import HeadSEO from "../../components/common/Head/head";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import EventDetMinus from "../../components/common/svg/eventDetials/minus";
import EventDetPlus from "../../components/common/svg/eventDetials/plus";
import GlobalAddToBag from "../../components/common/svg/global/addToBag";
import GlobalArrowDown from "../../components/common/svg/global/arrowDown";
import ShoppingProductSlider from "../../components/common/shopping/product-slider";

//Slider css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GlobalClose from "../../components/common/svg/global/close";


import Swatch from "../../components/common/shopping/option/Swatch";
import Rectangle from "../../components/common/shopping/option/Rectangle";
import RadioButtons from "../../components/common/shopping/option/RadioButtons";
import DropdownList from "../../components/common/shopping/option/DropdownList";
import PickList from "../../components/common/shopping/option/PickList";
import Text from "../../components/common/shopping/option/Text";
import Number from "../../components/common/shopping/option/Number";
import Date from "../../components/common/shopping/option/Date";
import MultiLine from "../../components/common/shopping/option/MultiLine";
import Checkbox from "../../components/common/shopping/option/Checkbox";
import { useSession } from "next-auth/react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import EquipmentRentalSlider from "../../components/common/EquipmentRental/product-slider";
import GlobalArrowUp from "../../components/common/svg/global/arrowUp";
import DateModern from "../../components/common/shopping/option/DateModern";


var settingsMorePhotos = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'linear',
};

export default function ShoppingDetails(pageProp) {


  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setOpen] = useState(true);
  const [isOpenTerms, setOpenTerms] = useState(true);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const { data: session, status } = useSession();

  const [formSubmit, setFormSubmit] = useState(false);
  const [message, setMessage] = useState('');

  
  const product = pageProp?.page_content?.equipment;
  const productSimilar = pageProp?.page_content?.similar;
  const image_path = pageProp?.page_content?.image_path;
  
  

  //price
  let storePrice = product?.prices?.salePrice?.value.toFixed(2);
  if(product?.prices?.salePrice?.value == null){
    storePrice = product?.prices?.basePrice?.value.toFixed(2);
  }
  const [price, setPrice] = useState(storePrice);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmit(true)
    let product_id = 0;
    const option_selections = [];
    const nx_cart_id = Cookies.get('nx_cart_id');
    
    const formData = $("#optionForm")?.serializeArray()
    

    //formData set
    let startDate = null;
    let endDate = null;
    formData?.length > 0 && formData?.map((ls)=>{
      if(ls.name == "product_id"){
        product_id = ls.value;
      }else {
        if(ls.name == "Rental Start Date"){ startDate = ls.value; }
        if(ls.name == "Rental End Date"){ endDate = ls.value; }
      }
    });


    //Get product Start
    const reqFetchProduct = await fetch(process.env.next.api_url+"collections/product-by-id", {method:"POST", headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify({"id": product_id }) });
    const resultProduct = await reqFetchProduct.json();
    const product = resultProduct?.data?.site?.product;
    const productOptions = product?.productOptions?.edges;

    productOptions?.length && productOptions?.map((ls)=>{
      if(ls?.node?.displayName == "Start Date"){
        option_selections.push({"option_id":ls.node.entityId, "option_value": startDate })
      }
      if(ls?.node?.displayName == "End Date"){
        option_selections.push({"option_id":ls.node.entityId, "option_value": endDate })
      }
    });

    //Get product End

    
    const cartData = [{
      customer_id: session ? session?.user?.bcId : 0,
      nx_cart_id: typeof nx_cart_id != "undefined" ? nx_cart_id : 0,
      channel_id: process.env.bc.channel_ecommerce,
    }];

    const itemsData = [{
        "quantity": quantity,
        "product_id": product_id,
        "option": JSON.stringify(option_selections)
    }];
    
    cartData.push({"products":itemsData});

    console.log('itemsData')
    console.log(itemsData)

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
        setMessage("Item is not available for now.");
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
        return false;
    }

  };

  
  const obj1 = {
    node : {
      displayName:"Rental Start Date",
      isRequired:true,
      entityId:"Rental Start Date",
      defaultDate:null,
    }
  }
  const obj2 = {
    node : {
      displayName:"Rental End Date",
      isRequired:false,
      entityId:"Rental End Date",
      defaultDate:null,
    }
  }

  return (
    <div className="page_shopping_details">

      <HeadSEO title={product?.seo_title == "" ? product?.name : product?.seo_description } description={product?.seo_description} image={null} />

      <div className="container">
        <div className={style.detailsViews}>
          <div className={style.detailsLeft}>
            <div className={style.imagesContainer}>
                  {
                    product?.image.length > 0 && product?.image.map((ls,i)=>(
                    <Image key={i}
                      src={ls}
                      width="322"
                      height="355"
                      alt={product?.name}
                      style={{margin:"0 auto"}}
                      onClick={()=>{ setShowPhotos(true) }}
                  />
                    ))
                  }

                  {product?.image.length == 0 ? (
                    <Image
                      className={style.banner_image}
                      src={'https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/coming-soon.png'}
                      width="100"
                      height="304"
                      layout="responsive"
                      objectFit="cover"
                      alt={product?.title}
                    />
                  ):""}
            </div>
          </div>

          <div className={style.detailsRight}>

          { message != '' ? (<span className={style.errorMessage+" errorMessage"}>{message}</span>) : "" }
          { formSubmit == true ? (<span className={`${style.loadingOverlay} loadingOverlay`} style={{display:'block'}} />) : "" }
            
            <div className={style.detailsTitlePrice}>
              <h1>{product?.title}</h1>
              <p>
                  <span>${product?.price?.toFixed(2)} /1 DAY</span>  
              </p>
            </div>

            <p className={style.detailsBrand}>{product?.location}</p>

            { product?.location_frame != null ? 
            <button className={ showMap ? style.isActive+ " " + style.showMap : style.showMap } onClick={()=> { setShowMap(value => !value) }}>
                { showMap ? 'Hide store' : 'View store ' }
                { showMap ? <GlobalArrowUp /> : <GlobalArrowDown /> }
            </button>
            : ""}


            {/* Google Map */}
            {showMap ? (
              product?.location_frame != null ? 
              <div className={style.googleMap}>
                  <div dangerouslySetInnerHTML={ {__html:product?.location_frame} }></div>
                </div>
              : ""
            ) : ""}

            <div className={style.detailsOptions}>
              <form id="optionForm" encType="multipart/form-data" onSubmit={handleSubmit}>
                <input type="hidden" name="product_id" value={product?.bigcommerce_id} />
                
                  <div className={style.optionGroup}>
                    <DateModern items={obj1.node} start_date={product?.start_date} end_date={product?.end_date} /> 
                    <DateModern items={obj2.node} start_date={product?.start_date} end_date={product?.end_date} />
                  </div>


                  <div className={style.selectedDays}>
                      {/* <p className={style.content1}>Number of Days Selected: <span>4</span></p> */}
                      <p className={style.content2}>Total Rental Fee: ${(product?.price * quantity).toFixed(2) }</p>
                  </div>


                <div className={style.formIncrementS}>
                  <label>Quantity</label>
                  <div className={style.formIncrement}>
                    <button
                      onClick={() => { quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1); }}
                      className={style.btnIncDec + " " + style.btnMinus}
                      type="button"
                    >
                      <EventDetMinus />
                    </button>
                    <span className={style.inputQty}>
                      {quantity}
                    </span>
                    <button
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                      className={style.btnIncDec + " " + style.btnPlus}
                      type="button"
                    >
                      <EventDetPlus />
                    </button>
                  </div>
                </div>

                <button className={style.addToBag} type="submit">Rent Now</button>

              </form>
            </div>
            
            <div className={style.deliveredInfo}>
              <p className={style.diHead}>Delivered to your Door.</p>
              <div className={style.diContent}>
                <div><p>Refundable Security Deposit: ${(product?.security_price).toFixed(2) } </p></div>
                <div><p>Delivery & Pickup: ${(product?.delivery_price).toFixed(2) }</p></div>
              </div>
            </div>


            { product?.details != null && product?.details != "" ? 
            <div className={`${style.description} ${!isOpen ? style.isOpen : "" }`}>
              <p className={style.diHead} onClick={() => setOpen(!isOpen)}>
                Details
                <GlobalArrowDown />
              </p>
              {isOpen ? (
              <div className={style.diContent}>
                  <div dangerouslySetInnerHTML={ {__html:product?.details} }></div>
                </div>
                ) : ("")}
            </div>
            :""}

            { product?.terms != null && product?.terms != "" ? 
            <div className={`${style.description} ${!isOpenTerms ? style.isOpen : "" }`}>
              <p className={style.diHead} onClick={() => setOpenTerms(!isOpenTerms)}>
                Terms Of Use
                <GlobalArrowDown />
              </p>
              {isOpenTerms ? (
              <div className={style.diContent}>
                  <div dangerouslySetInnerHTML={ {__html:product?.terms} }></div>
                </div>
                ) : ("")}
            </div>
            :""}

          </div>
        </div>
      </div>


      {/* Section category Full */}
      {productSimilar?.length > 0 ? 
        <EquipmentRentalSlider title="Similar Products" link="false" items={productSimilar} dataClass={'similarProduct'} imagePath={image_path}  />
      : ""}


      {/* Show more photos gallrey */}
      {showPhotos ? (
          <div className={style.morePhotosPopups+ " morePhotosPopups"}>
              <div className={style.inner}>
                  <Slider {...settingsMorePhotos}>
                    {
                      product?.image.length > 0 && product?.image.map((ls,i)=>(
                      <Image key={i}
                        src={ls}
                        width="500"
                        height="500"
                        alt={product?.name}
                        style={{margin:"0 auto"}}
                      />
                      ))
                    }
                  </Slider>
                  <span className={style.close} onClick={()=>{ setShowPhotos(false) }}><GlobalClose /> </span>
              </div>
          </div>
      ) :""}

    </div>
  );
}



export async function getServerSideProps(context) {
  const globalSettings = await GlobalHeaderFooter();

  const urlSlug = context.params.slug;
    if(urlSlug != ""){
  
      	try {

            const globalSettings = await GlobalHeaderFooter();
            const eventFetch = await fetch(process.env.server.api+"get-equipment-details/"+urlSlug);
            const eventDetial = await eventFetch.json();

            return {
                props: {
                    page_content: eventDetial,
                    navbar: globalSettings?.header,
                    footer: globalSettings?.footer
                },
            };
            
        } catch (error) {

            return {
                props: {
                  page_content: false,
                  navbar: globalSettings?.header,
                  footer: globalSettings?.footer
                },
                notFound: true
              };
            
        }
  
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
