import Image from "next/image";
import React, { useRef, useState } from "react";
import style from "./css/shoppings-lists.module.scss";
import Link from "next/link";

import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";


//Slider css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingProductSlider from "../components/common/shopping/product-slider";
import ShoppingCollections from "../components/common/shopping/collections";


var settingsMorePhotos = {
  arrows: true,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
};


export default function ShoppingsLists(pageProp) {
  
  const product = pageProp.page_content.product;
  const customFields = product?.customFields;

  const [section1, SetSection1] = useState(()=>{
    if(customFields?.edges?.length > 0) {
      customFields?.edges?.map(async (ls)=>{
        if(ls.node.name == "Section - 1"){
          const reqFetchProduct = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, body: JSON.stringify({"id": ls.node.value }) });
          const resultProduct = await reqFetchProduct.json();
          SetSection1(resultProduct);
        }
      });
    }
  });
  const [section2, SetSection2] = useState(()=>{
    if(customFields?.edges?.length > 0) {
      customFields?.edges?.map(async (ls)=>{

        if(ls.node.name == "Section - 2"){ 
          const reqFetchProduct_2 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, body: JSON.stringify({"id": ls.node.value }) });
          const resultProduct_2 = await reqFetchProduct_2.json();
          SetSection2(resultProduct_2);
        }

      });
    }
  });
  const [section3, SetSection3] = useState(()=>{
    if(customFields?.edges?.length > 0) {
      customFields?.edges?.map(async (ls)=>{

        if(ls.node.name == "Section - 3"){ 
          const reqFetchProduct_3 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, body: JSON.stringify({"id": ls.node.value }) });
          const resultProduct_3 = await reqFetchProduct_3.json();
          SetSection3(resultProduct_3); 
        }

      });
    }
  });
  const [section4, SetSection4] = useState(()=>{
    if(customFields?.edges?.length > 0) {
      customFields?.edges?.map(async (ls)=>{

        if(ls.node.name == "Section - 4"){ 
          const reqFetchProduct_4 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, body: JSON.stringify({"id": ls.node.value }) });
          const resultProduct_4 = await reqFetchProduct_4.json();
          SetSection4(resultProduct_4); 
        }

      });
    }
  });
  const [section5, SetSection5] = useState(()=>{
    if(customFields?.edges?.length > 0) {
      customFields?.edges?.map(async (ls)=>{
        
        if(ls.node.name == "Section - 5"){ 
          const reqFetchProduct_5 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, body: JSON.stringify({"id": ls.node.value }) });
          const resultProduct_5 = await reqFetchProduct_5.json();
          SetSection5(resultProduct_5); 
        }

      });
    }
  });
  const [section6, SetSection6] = useState(()=>{
    if(customFields?.edges?.length > 0) {
      customFields?.edges?.map(async (ls)=>{

        if(ls.node.name == "Section - 6"){ 
          const reqFetchProduct_6 = await fetch(process.env.next.api_url+"collections/category", {method:"POST", headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, body: JSON.stringify({"id": ls.node.value }) });
          const resultProduct_6 = await reqFetchProduct_6.json();
          SetSection6(resultProduct_6); 
        }

      });
    }
  });


  return (
    <div className="page_shopping_list">
      <HeadSEO title={product?.seo?.pageTitle == "" ? product?.name : product?.seo?.pageTitle} description={product?.seo?.metaDescription} image={null} />

      {/* Section banner */}
      {product?.images?.edges?.length > 0 ? (
      <div className={style.page_main_banner} role="article">
        <Slider {...settingsMorePhotos}>
            {product?.images?.edges?.map((ls,i) => (
              <><Image key={i} className={style.bannerImage} src={ls?.node?.url960wide} width="1920" height="512" alt={ls?.node?.altText} quality={100} /></>
            ))}
        </Slider>
      </div>
      ):""}

      {/* All collections */}
      <ShoppingCollections title="ALL COLLECTIONS" collections={pageProp.page_content.collections} />


      {/* Section category Full */}
      {typeof section1 != "undefined" ? <ShoppingProductSlider title={section1?.data?.site?.item_0?.name} link={section1?.data?.site?.item_0?.seo?.pageTitle} items={section1?.data?.site?.item_0?.products?.edges} dataClass={'homePage'}  /> : <div style={{minHeight:'300px',width:'100%'}}>&nbsp;</div> }

      {/* Hero Banner */}
      {typeof section2 != "undefined" ? 
      <div className={style.heroBanner} role="article">
        <div className={style.parent}>
          <div className="container">
            <h2>{section2?.data?.site?.item_0?.name}</h2>
            <div dangerouslySetInnerHTML={ {__html:section2?.data?.site?.item_0?.description}}></div>
            <Link href={""+section2?.data?.site?.item_0?.seo?.pageTitle}>SHOP NOW</Link>
          </div>
        </div>
        <Image className={style.bannerImage} src={section2?.data?.site?.item_0?.defaultImage?.urlOriginal} width="1920" height="400" alt={section2?.data?.site?.item_0?.name} quality={100} />
      </div>
      : ""}

      {/* Section category Full */}
      {typeof section3 != "undefined" ? <ShoppingProductSlider title={section3?.data?.site?.item_0?.name} link={section3?.data?.site?.item_0?.seo?.pageTitle} items={section3?.data?.site?.item_0?.products?.edges} /> : <div style={{minHeight:'300px',width:'100%'}}>&nbsp;</div> }

      {/* Section category Half */}
      { typeof section4 != "undefined" ? 
      <div className={style.categoryLayoutTwo} role="article">
        <div className="container">
          <ul>
            <li>
                <Link className={style.linkImage} href={""+section4?.data?.site?.item_0?.seo?.pageTitle}>
                  <Image className={style.bannerImage} src={section4?.data?.site?.item_0?.defaultImage?.urlOriginal} width="1920" height="400" alt={section4?.data?.site?.item_0?.name} quality={100} />
                </Link>
                <div className={style.content}>
                  <h4>{section4?.data?.site?.item_0?.name}</h4>
                  <div dangerouslySetInnerHTML={ {__html:section4?.data?.site?.item_0?.description}}></div>
                  <Link href={""+section4?.data?.site?.item_0?.seo?.pageTitle}>SHOP NOW</Link>
                </div>
            </li>
            <li>
                <Link className={style.linkImage} href={""+section2?.data?.site?.item_1?.seo?.pageTitle}>
                  <Image className={style.bannerImage} src={section4?.data?.site?.item_1?.defaultImage?.urlOriginal} width="1920" height="400" alt={section4?.data?.site?.item_1?.name} quality={100} />
                </Link>
                <div className={style.content}>
                  <h4>{section4?.data?.site?.item_1?.name}</h4>
                  <div dangerouslySetInnerHTML={ {__html:section4?.data?.site?.item_1?.description}}></div>
                  <Link href={""+section4?.data?.site?.item_1?.seo?.pageTitle}>SHOP NOW</Link>
                </div>
            </li>
          </ul>
        </div>
      </div>
      : "" }

      {/* Section category Full */}
      {typeof section5 != "undefined" ? <ShoppingProductSlider title={section5?.data?.site?.item_0?.name} link={section5?.data?.site?.item_0?.seo?.pageTitle} items={section5?.data?.site?.item_0?.products?.edges} /> : <div style={{minHeight:'300px',width:'100%'}}>&nbsp;</div> }

      {/* Section category Three */}
      {typeof section6 != "undefined" ? 
      <div className={style.categoryLayoutThree} role="article">
        <div className="container">
          <ul>
            <li>
                <Link className={style.linkImage} href={""+section6?.data?.site?.item_0?.seo?.pageTitle}>
                  <Image className={style.bannerImage} src={section6?.data?.site?.item_0?.defaultImage?.urlOriginal} width="1920" height="400" alt={section6?.data?.site?.item_0?.name} quality={100} />
                </Link>
                <div className={style.content}>
                  <Link href={""+section6?.data?.site?.item_0?.seo?.pageTitle}>{section6?.data?.site?.item_0?.name}</Link>
                </div>
            </li>
            <li>
                <Link className={style.linkImage} href={""+section6?.data?.site?.item_1?.seo?.pageTitle}>
                  <Image className={style.bannerImage} src={section6?.data?.site?.item_1?.defaultImage?.urlOriginal} width="1920" height="400" alt={section6?.data?.site?.item_1?.name} quality={100} />
                </Link>
                <div className={style.content}>
                  <Link href={""+section6?.data?.site?.item_1?.seo?.pageTitle}>{section6?.data?.site?.item_1?.name}</Link>
                </div>
            </li>
            <li>
                <Link className={style.linkImage} href={""+section6?.data?.site?.item_2?.seo?.pageTitle}>
                  <Image className={style.bannerImage} src={section6?.data?.site?.item_2?.defaultImage?.urlOriginal} width="1920" height="400" alt={section6?.data?.site?.item_2?.name} quality={100} />
                </Link>
                <div className={style.content}>
                  <Link href={""+section6?.data?.site?.item_2?.seo?.pageTitle}>{section6?.data?.site?.item_2?.name}</Link>
                </div>
            </li>
          </ul>
        </div>
      </div>
      : "" }

  </div>
  );
}

export async function getServerSideProps(context) {
  const globalSettings = await GlobalHeaderFooter();
  
  //Collections
  const reqFetchCollections = await fetch(process.env.next.api_url+"collections/all");
  const resultCollections = await reqFetchCollections.json();

  //Collections
  const reqFetchProduct = await fetch(process.env.next.api_url+"collections/product", {method:"POST", headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, body: JSON.stringify({"route":"home-page-layout"}) });
  const resultProduct = await reqFetchProduct.json();
  
  const page_content = { collections : resultCollections, product: resultProduct?.data?.site?.route?.node };

  return {
    props: {
      page_content: page_content,
      navbar: globalSettings?.header,
      footer: globalSettings?.footer,
    },
  };
}
