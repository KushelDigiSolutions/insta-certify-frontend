import Image from "next/image";
import React, { useRef, useState } from "react";
import style from "./css/equipment-rental.module.scss";
import Link from "next/link";

import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";

export default function EquipmentRental(pageProp) {
  
  const banner = pageProp?.page_content?.banner?.banner[0];
  const category = pageProp?.page_content?.category;

  return (
    <div className="page_shopping_list">
      <HeadSEO
        title={banner[0]?.title}
        description={"equipment-rental"}
        image={null}
      />

      {/* Section banner */}
      <div className={style.page_top_banner}>
        <div className="container">
          <div className={style.banner_heading}>
            <h1>{banner?.title}</h1>
          </div>
        </div>
        <Image
          className={style.banner_image}
          src={banner?.image_path}
          width="100"
          height="304"
          layout="responsive"
          objectFit="cover"
          alt={banner?.title}
        />
      </div>

      {/* Section category */}
      <div className={style.categoryList}>
        <div className="container">
          <h2>PRODUCT CATALOG</h2>
          <ul>
            {category?.length > 0 && category?.map((ls,i)=>(
              <li key={i}>
                <Link href={"/equipment-rentals/"+ls.slug}>{ls.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}


        
export async function getServerSideProps(context) {
  const globalSettings = await GlobalHeaderFooter();

  try {

    //banner
    const reqBannerFetch = await fetch(process.env.server.api+"get-equipment-home");
    const reqBannerDetial = await reqBannerFetch.json();

    //categorys
    const reqFetch = await fetch(process.env.server.api+"get-equipment-category");
    const reqDetial = await reqFetch.json();

    const data = {
      banner : reqBannerDetial,
      category : reqDetial
    }

    return {
        props: {
            page_content: data,
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

	
}
