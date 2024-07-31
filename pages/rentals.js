import Image from "next/image";
import React from "react";
import style from "./css/rentalList.module.scss";
import Link from "next/link";

import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import SearchRental from "../components/common/SearchRental/SearchRental";
import RentalCamping from "../components/common/svg/rentals/camping";
import RentalProductSlider from "../components/common/Rentals/product-slider";


var settingsSliders = {
  arrows: false,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

export default function RentalsLists(pageProp) {

  const category_all = pageProp?.category_all;
  const imagePath = pageProp?.page_content?.data?.image_path;
  const section_1 = pageProp?.page_content?.data?.listing_first;
  const section_2 = pageProp?.page_content?.data?.listing_second;
  const section_3 = pageProp?.page_content?.data?.listing_third;
  const section_4 = pageProp?.page_content?.data?.listing_fourth;

  return (
    <div className="page_rental_list">
      <HeadSEO title={"All Rental"} description={"All Rental"} image={null} />

      {/* Section banner */}
      <div className={style.page_top_banner}>
        <div className="container">
          <div className={style.banner_heading}>
            <h1>Find the Perfect Spot for Your Next Adventure</h1>
            <p>Campsites, RV Parks, Pavilions and more...</p>

            <SearchRental />
          </div>
        </div>
        <Image
          className={style.banner_image}
          src={"https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/rentals-banner-2103.png"}
          width="100"
          height="304"
          layout="responsive"
          objectFit="cover"
          alt="Event List"
        />
      </div>

      {/* Section category */}
      <div className={style.categoryList}>
        <div className="container">
          <h2>Catalog</h2>
          <ul>
            {category_all?.map((ls, i) => (
              <li key={ls.id}>
                  <Link href={'/rentals/'+ls.slug}>
                    {ls.name}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Section category One */}
      <div className={style.categoryLayoutOne}>
        <div className="container">
          <div className={style.categoryHead}>
            <RentalCamping />
            <h2>{section_1?.name}</h2>
          </div>
          
          {
            section_1?.items?.length > 0 ? (
              <ul>
                {
                  section_1?.items?.map((ls,i)=>(
                    <li key={i}>
                      <Link href={"/rental/"+ls.slug}>
                        {
                          ls.images?.length > 0 ?
                          (
                            <Image
                              className={style.banner_image}
                              src={imagePath+"/"+ls.images[0]}
                              width="100"
                              height="304"
                              layout="responsive"
                              objectFit="cover"
                              alt={ls.title}
                            />
                          )
                          :
                          (
                            <Image
                              className={style.banner_image}
                              src={'https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/coming-soon.png'}
                              width="100"
                              height="304"
                              layout="responsive"
                              objectFit="cover"
                              alt={ls.title}
                            />
                          )
                        }
                      </Link>
                    </li>
                  ))
                }
              </ul>
            ) : ""
          }
          
          <div className={style.categoryOneAction}>
            <Link href={"/rentals/"+ section_1?.link}>Explore Camping</Link>
          </div>
        </div>
      </div>

      {/* Section category Full */}
      {/* 
      <RentalProductSlider imagePath={imagePath} section={section_2} />
      <RentalProductSlider imagePath={imagePath} section={section_3} />
      <RentalProductSlider imagePath={imagePath} section={section_4} />
      */}



    </div>
  );
}

export async function getServerSideProps(context) {
  const globalSettings = await GlobalHeaderFooter();

  //category_all
  const categorysFetch = await fetch(process.env.server.api + "get-lodging-category");
  const resultCategorys = await categorysFetch.json();

  const dataFetch = await fetch(process.env.server.api + "get-lodging-home");
  const results = await dataFetch.json();
  const page_content = { data: results };

  return {
    props: {
      category_all:resultCategorys,
      page_content: page_content,
      navbar: globalSettings?.header,
      footer: globalSettings?.footer,
    },
  };
}
