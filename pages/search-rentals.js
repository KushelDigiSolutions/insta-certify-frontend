import Image from "next/image";
import React, { useRef, useState } from "react";
import style from "./css/rentalList.module.scss";
import HeadSEO from "../components/common/Head/head";
import GlobalHeaderFooter from "../utils/common/global-header-footer";
import SearchRental from "../components/common/SearchRental/SearchRental";
import RentalCards from "../components/common/Rentals/cards";
import { useRouter } from "next/router";


export default function RentalsLists(pageProp) {

  const router = useRouter();
  const { slug } = router.query;


  let lodgingCategory = [];
  const category_all = pageProp.page_content?.data?.categories;
  const media_url = pageProp.page_content?.data?.image_path;
  const lodgingTotal = pageProp.page_content?.data?.total_count;

  const lodgingListTemp = pageProp.page_content?.data?.items;
  const [lodgingList, setClassesList] = useState(lodgingListTemp);

  const [isLoadmoreButton, setIsLoadmoreButton] = useState(true);
  const [loadMoreStatus, setLoadMoreStatus] = useState(false);
  const [pageRecode, setPageRecode] = useState(18);
  const [pageOffset, setPageOffset] = useState(18);

  
  if(category_all?.length > 0){
    category_all?.map((ls)=>{
      if(ls.slug == slug){
        lodgingCategory = ls;
      }
    })
  }


  const loadMore = async () => {
    setLoadMoreStatus(true);
    setPageOffset(pageOffset + pageRecode)
    let endpoint = `${slug}?filter=desc&limit=${pageRecode}&offset=${pageOffset}`;
    // if(pageOffset > lodgingTotal){ console.log('DONE') }
    const reqFetch = await fetch(process.env.server.api+"search-lodging-home/"+endpoint);
    const lodging = await reqFetch.json();

    lodgingListTemp.push(...lodging.lodging);
    setClassesList(lodgingListTemp);
    if(lodging.lodging.length != pageRecode){
      setIsLoadmoreButton(false);
      setPageOffset(lodgingTotal);
    }    
    setLoadMoreStatus(false);
  }

  return (
    <div className={`page_rental_list ${style.pageRentalMain}`}>

      <HeadSEO title={lodgingCategory?.seo_title} description={lodgingCategory?.seo_description} image={lodgingCategory?.image}  />

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


      {/* Section Head */}
      <div className={style.pageHead}>
        <div className="container">
          <div className={style.parent}>
            <div className={style.left}>
              <h4>{lodgingCategory?.name}</h4>
            </div>
            <div className={style.right}>
              {lodgingTotal > 0 ? ( <p>Viewing 1 - {lodgingList?.length} of {lodgingTotal} products</p> ) : ""}
            </div>
          </div>
        </div>
      </div>


      {/* Section category Full */}
      <div className={style.categoryLayoutFull}>
        <div className="container">
          {lodgingList?.length > 0 ? (
          <ul className={style.rentalCardGrids}>
            {lodgingList?.map((ls, index)=>(
                <RentalCards key={ls} item={ls} imagePath={media_url} />
              ))}
          </ul>
          )
          :
          (<p className={style.notEvent}>No data found.</p>)
          }

        </div>
      </div>


          {/* Section LoadMore */}
          {isLoadmoreButton && lodgingTotal > pageRecode ? (
            <div className={style.loadMore}>
              <div className="container">
                  <button className={style.buttonLoadMore} onClick={() => { loadMore(); }}>LOAD MORE</button>
              </div>
            </div>
          ):""}

    </div>
  );
}

export async function getServerSideProps(context) {
  const urlSlug = context?.params?.slug;
  const globalSettings = await GlobalHeaderFooter();

  if(urlSlug != ""){

    const query = context?.query?.query;
    const checkin = context?.query?.checkin;
    const guest = context?.query?.guest;

    //check filter start
    let filterStr = "&filter=desc&limit=18&offset=0";
    const filter = context?.query?.filter;
    if(typeof filter != "undefined"){
      filterStr = "&filter="+filter;
    }
    //check filter end

    const dataFetch = await fetch(process.env.server.api + "search-lodging-home/?query="+query+"&checkin="+checkin+"&guest="+guest+filterStr);
    const results = await dataFetch.json();
    const page_content = { data:results };
    
    return {
      props: {
        page_content: page_content,
        navbar: globalSettings?.header,
        footer: globalSettings?.footer,
      },
    };

  } else{
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
