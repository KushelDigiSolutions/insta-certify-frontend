import Image from "next/image";
import React, { useRef } from "react";
import style from "./css/classesList.module.scss";
import Link from "next/link";
import { useState } from "react";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import HeadSEO from "../components/common/Head/head";

export default function ClassesLists(pageProp) {
  const category_all = pageProp.page_content?.classes?.categories;

  const topBanner = pageProp?.top_banner?.banners[0];
  const topBannerMediaUrl = pageProp?.top_banner?.media_url;

  return (
    <div>
      <HeadSEO title={"All Classes"} description={"All Classes"} image={null} />

      {/* Section banner */}
      <div className={style.page_top_banner}>
        <div className="container">
          <div className={style.banner_heading}>
            <h1>{topBanner?.title}</h1>
            <p>{topBanner.sub_title}</p>
          </div>
        </div>
        {
          topBanner?.image == null ?
          (
            <Image
              className={style.banner_image}
              src={"/images/event-top-banner.png"}
              width="100"
              height="304"
              layout="responsive"
              objectFit="cover"
              alt={topBanner?.title}
            />
          ) 
          :
          (
            <Image
              className={style.banner_image}
              src={topBannerMediaUrl+"/"+topBanner.image}
              width="100"
              height="304"
              layout="responsive"
              objectFit="cover"
              alt={topBanner?.title}
            />
          )
        }
      </div>

      {/* Section category */}
      <div className={style.categoryList}>
        <div className="container">
          <h2>Explore Inspiring Courses</h2>
          <ul>
            {category_all?.map((ls, i) => (
              <li key={ls.id}>
                  <Link href={'/classes/'+ls.slug}>
                    {ls.name}
                  </Link>
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
    const reqFetchBanner = await fetch(process.env.server.api+"get-banners/vclasses");
    const resultBanner = await reqFetchBanner.json();

    const reqFetch = await fetch(process.env.server.api+"get-vclasses/test");
    const classes = await reqFetch.json();
    const page_content = { classes: classes }
    return {
      props: {
        top_banner : resultBanner,
        page_content: page_content,
        navbar: globalSettings?.header,
        footer: globalSettings?.footer
      }
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
