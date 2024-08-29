// import Image from "next/image";
// import React, { useRef, useState } from "react";
// import style from "./../css/shoppingDetails.module.scss";
// import $ from "jquery";

// import HeadSEO from "../../components/common/Head/head";
// import GlobalHeaderFooter from "../../utils/common/global-header-footer";
// import EventDetMinus from "../../components/common/svg/eventDetials/minus";
// import EventDetPlus from "../../components/common/svg/eventDetials/plus";
// import GlobalAddToBag from "../../components/common/svg/global/addToBag";
// import GlobalArrowDown from "../../components/common/svg/global/arrowDown";
// import ShoppingProductSlider from "../../components/common/shopping/product-slider";

// //Slider css files
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import GlobalClose from "../../components/common/svg/global/close";


// import Swatch from "../../components/common/shopping/option/Swatch";
// import Rectangle from "../../components/common/shopping/option/Rectangle";
// import RadioButtons from "../../components/common/shopping/option/RadioButtons";
// import DropdownList from "../../components/common/shopping/option/DropdownList";
// import PickList from "../../components/common/shopping/option/PickList";
// import Text from "../../components/common/shopping/option/Text";
// import Number from "../../components/common/shopping/option/Number";
// import Date from "../../components/common/shopping/option/Date";
// import MultiLine from "../../components/common/shopping/option/MultiLine";
// import Checkbox from "../../components/common/shopping/option/Checkbox";
// import { useSession } from "next-auth/react";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";


// var settingsMorePhotos = {
//   arrows: true,
//   dots: false,
//   infinite: true,
//   speed: 700,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   cssEase: 'linear',
// };

// export default function ShoppingDetails(pageProp) {


//   const router = useRouter();
//   const [quantity, setQuantity] = useState(1);
//   const [isOpen, setOpen] = useState(true);
//   const [showPhotos, setShowPhotos] = useState(false);
//   const { data: session, status } = useSession();

//   const [formSubmit, setFormSubmit] = useState(false);
//   const [message, setMessage] = useState('');
  

//   const product = pageProp?.page_content?.product;
//   const productOptions = product?.productOptions;
  
//   //custom info
//   let customInfo = false;
//   if(product?.customFields?.edges?.length > 0){
//     product?.customFields?.edges?.map(ls => {
//       if(ls.node.name.match("info_")){
//         customInfo = true;
//       }
//     })
//   }

//   //price
//   let storePrice = product?.prices?.salePrice?.value.toFixed(2);
//   if(product?.prices?.salePrice?.value == null){
//     storePrice = product?.prices?.basePrice?.value.toFixed(2);
//   }
//   const [price, setPrice] = useState(storePrice);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormSubmit(true)
//     let product_id = 0;
//     const option_selections = [];
//     const nx_cart_id = Cookies.get('nx_cart_id');
    
//     const formData = $("#optionForm").serializeArray()
//     console.log('formData')
//     console.log(formData)

//     //formData set
//     formData?.length > 0 && formData?.map((ls)=>{
//       if(ls.name == "product_id"){
//         product_id = ls.value;
//       }else {
//         if(ls.value != "" && ls.value != "none"){
//           const dateValue = ls.value.split('-')
//           if(dateValue.length == 3){
//             option_selections.push({"option_id":ls.name, "option_value": {"day":dateValue[2],"month":dateValue[1],"year":dateValue[0]} })
//           }else{
//             option_selections.push({"option_id":ls.name, "option_value":ls.value })
//           }
//         }
//       }
//     })
    
//     const cartData = [{
//       customer_id: session ? session?.user?.bcId : 0,
//       nx_cart_id: typeof nx_cart_id != "undefined" ? nx_cart_id : 0,
//       channel_id: process.env.bc.channel_ecommerce,
//     }];

//     const itemsData = [{
//         "quantity": quantity,
//         "product_id": product_id,
//         "option": JSON.stringify(option_selections)
//     }];
    
//     cartData.push({"products":itemsData});

//     const createCart = await fetch(process.env.next.api_url+"cart/create",{
//         method:"post",
//         headers:{
//             "Accept": 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(cartData)
//     });
//     const cartRes = await createCart.json();

//     console.log('cartRes')
//     console.log(cartRes)

//     if(cartRes?.status && cartRes?.status == 404){
//         setMessage("Something went wrong");
//         setFormSubmit(false)
//         return false;
//     }
//     if(cartRes?.status && cartRes?.status == 422){
//         setMessage("Classe is not available for now.");
//         setFormSubmit(false)
//         return false;
//     }

//     const cart_id = cartRes?.data?.id;
//     if(typeof cart_id != "undefined" && cart_id != ""){
//         console.log(cartRes?.data)
//         Cookies.set('nx_cart_id', cart_id, { expires: 4 });
//         router.push('/cart');
//     }else{
//         Cookies.remove('nx_cart_id');
//         setMessage("Something went wrong");
//         setFormSubmit(false)
//         return false;
//     }

//   };

//   return (
//     <div className="page_shopping_details">

//       <HeadSEO title={product?.seo?.pageTitle == "" ? product?.name : product?.seo?.pageTitle} description={product?.seo?.metaDescription} image={null} />

//       <div className="container">
//         <div className={style.detailsViews}>
//           <div className={style.detailsLeft}>
//             <div className={style.imagesContainer}>
//               { 
//                 product?.images?.edges?.length > 0 && product?.images?.edges?.map((ls, i)=>(
//                   ls?.node?.isDefault == true ? <Image key={i}
//                   src={ls?.node?.url960wide}
//                   width="322"
//                   height="355"
//                   alt={ls?.node?.altText != "" ? ls?.node?.altText : product.name }
//                   onClick={()=>{ setShowPhotos(true) }}
//                 /> :""
//                 ))
//               }
//               { 
//                 product?.images?.edges?.length > 0 && product?.images?.edges?.map((ls, i)=>(
//                   ls?.node?.isDefault == false ? <Image key={i}
//                   src={ls?.node?.url960wide}
//                   width="322"
//                   height="355"
//                   alt={ls?.node?.altText != "" ? ls?.node?.altText : product.name }
//                   onClick={()=>{ setShowPhotos(true) }}
//                 /> :""
//                 ))
//               }
//               {
//                 product?.images?.edges?.length == 0 ? (
//                   <Image 
//                     src={"https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/coming-soon.png"}
//                     width="322"
//                     height="355"
//                     alt={product?.name}
//                     style={{margin:"0 auto"}}
//                   />
//                 )
//                 :"" 
//               }

//             </div>
//           </div>

//           <div className={style.detailsRight}>

//           { message != '' ? (<span className={style.errorMessage+" errorMessage"}>{message}</span>) : "" }
//           { formSubmit == true ? (<span className={`${style.loadingOverlay} loadingOverlay`} style={{display:'block'}} />) : "" }
            
//             <div className={style.detailsTitlePrice}>
//               <h1>{product?.name}</h1>
//               <p>
//                 {
//                   product?.prices?.salePrice?.value == null ? (
//                     <span>${price}</span>  
//                   ) : (
//                     <>
//                       <span className={style.isSale}>${product.prices.basePrice.value.toFixed(2)}</span>  
//                       <span>${product.prices.salePrice.value.toFixed(2)}</span>  
//                     </>
//                   )
//                 }
//               </p>
//             </div>

//             <p className={style.detailsBrand}>{product?.sku}</p>

//             <div className={style.detailsOptions}>
//               <form id="optionForm" encType="multipart/form-data" onSubmit={handleSubmit}>
//                 <input type="hidden" name="product_id" value={product?.entityId} />
                
//                 { productOptions?.edges?.length > 0 && productOptions?.edges?.map((ls, i) => (
//                     <div key={i} className={style.optionGroup}>
//                       {ls.node.displayStyle == "Swatch" ? <Swatch items={ls.node} /> :""}
//                       {ls.node.displayStyle == "RadioButtons" ? <RadioButtons items={ls.node} /> :""}
//                       {ls.node.displayStyle == "RectangleBoxes" ? <Rectangle items={ls.node} /> :""}
//                       {ls.node.displayStyle == "DropdownList" ? <DropdownList items={ls.node} /> :""}
//                       {ls.node.displayStyle == "ProductPickListWithImages" ? <PickList items={ls.node} /> :""}
//                       {ls.node.displayStyle == "ProductPickList" ? <PickList items={ls.node} /> :""}
                      
//                       {ls.node.__typename == "TextFieldOption" ? <Text items={ls.node} /> :""}
//                       {ls.node.__typename == "NumberFieldOption" ? <Number items={ls.node} /> :""}
//                       {ls.node.__typename == "DateFieldOption" ? <Date items={ls.node} /> :""}
//                       {ls.node.__typename == "MultiLineTextFieldOption" ? <MultiLine items={ls.node} /> :""}
//                       {ls.node.__typename == "CheckboxOption" ? <Checkbox items={ls.node} /> : ""}
//                     </div>
//                 ))}
                

//                 <div className={style.formIncrementS}>
//                   <label>Quantity</label>
//                   <div className={style.formIncrement}>
//                     <button
//                       onClick={() => {
//                         quantity > 0
//                           ? setQuantity(quantity - 1)
//                           : setQuantity(0);
//                       }}
//                       className={style.btnIncDec + " " + style.btnMinus}
//                       type="button"
//                     >
//                       <EventDetMinus />
//                     </button>
//                     <span className={style.inputQty}>
//                       {quantity}
//                     </span>
//                     <button
//                       onClick={() => {
//                         setQuantity(quantity + 1);
//                       }}
//                       className={style.btnIncDec + " " + style.btnPlus}
//                       type="button"
//                     >
//                       <EventDetPlus />
//                     </button>
//                   </div>
//                 </div>

//                 <button className={style.addToBag} type="submit">
//                   <GlobalAddToBag />
//                   ADD TO BAG
//                 </button>

//               </form>
//             </div>
            
//             { customInfo == true ? 
//             <div className={style.deliveredInfo}>
//               <p className={style.diHead}>Delivered to your Door.</p>
//               <div className={style.diContent}>
//                 {
//                   product?.customFields?.edges?.length > 0 && product?.customFields?.edges?.map((ls, i) => (
//                     <div key={i}>
//                       {ls.node.name.includes("info_") ? <p>{ls.node.value}</p> : "" }
//                     </div>
//                   ))
//                 }
//               </div>
//             </div>
//             : "" }

//             { product?.description != "" ?
//             <div className={`${style.description} ${!isOpen ? style.isOpen : "" }`}>
//               <p className={style.diHead} onClick={() => setOpen(!isOpen)}>
//                 PRODUCT TYPE
//                 <GlobalArrowDown />
//               </p>
//               {isOpen ? (
//                 <div className={style.diContent}>
//                   {/* Knowledge Desc */}
//                   <div dangerouslySetInnerHTML={ {__html:product?.description} }></div>
//                 </div>
//               ) : ("")}
//             </div>
//              : ""}

//           </div>
//         </div>
//       </div>


//       {/* Section category Full */}
//       {product?.relatedProducts?.edges?.length > 0 ? <ShoppingProductSlider title="Similar Products" link="false" items={product?.relatedProducts?.edges} dataClass={'similarProduct'} /> :""}


//       {/* Show more photos gallrey */}
//       {showPhotos ? (
//           <div className={style.morePhotosPopups+ " morePhotosPopups"}>
//               <div className={style.inner}>
//                   <Slider {...settingsMorePhotos}>
//                       { 
//                         product?.images?.edges?.length > 0 && product?.images?.edges?.map((ls, i)=>(
//                           <Image key={i}
//                               src={ls?.node?.url960wide}
//                               width="322"
//                               height="355"
//                               layout="responsive"
//                               objectFit="cover"
//                               alt={ls?.node?.altText != "" ? ls?.node?.altText : product.name }
//                               onClick={()=>{ setShowPhotos(true) }}
//                             />
//                         ))
//                       }
//                   </Slider>
//                   <span className={style.close} onClick={()=>{ setShowPhotos(false) }}><GlobalClose /> </span>
//               </div>
//           </div>
//       ) :""}

//     </div>
//   );
// }

// export async function getServerSideProps(context) {
//   const globalSettings = await GlobalHeaderFooter();
  
//   try {

//     const productRoute = context.params.slug.join("/");

//     //Collections
//     const reqFetchProduct = await fetch(process.env.next.api_url+"collections/product", {method:"POST", headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }, body: JSON.stringify({"route":productRoute}) });
//     const resultProduct = await reqFetchProduct.json();
    
//     const page_content = { product: resultProduct?.data?.site?.route?.node };

//     if(resultProduct?.data?.site?.route?.node == null){
//       return {
//         props: {
//           page_content: false,
//           navbar: globalSettings?.header,
//           footer: globalSettings?.footer,
//         },
//         notFound: true
//       };
//     }else{
//       return {
//         props: {
//           page_content: page_content,
//           navbar: globalSettings?.header,
//           footer: globalSettings?.footer,
//         },
//       };
//     }
    
//   } catch (error) {
    
//     return {
//       props: {
//         page_content: false,
//         navbar: globalSettings?.header,
//         footer: globalSettings?.footer,
//       },
//       notFound: true
//     };

//   }
  
// }
