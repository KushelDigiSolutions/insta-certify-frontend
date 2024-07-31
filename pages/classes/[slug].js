import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import style from "../css/classesList.module.scss";
import Link from "next/link";
import HeadSEO from "../../components/common/Head/head";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import moment from "moment";
import GlobalClock from "../../components/common/svg/global/clock";
import { useRouter } from "next/router";

export default function ClassesLists(pageProp) {
  
  const router = useRouter()
  const { slug } = router.query

  
  let classesCategory = [];
  const category_all = pageProp.page_content?.classes?.categories;
  const media_url = pageProp.page_content?.classes?.media_url;
  const classesTotal = pageProp.page_content?.classes?.count;

  const classesListTemp = pageProp.page_content?.classes?.vclasses;
  const [classesList, setClassesList] = useState(classesListTemp);

  const [isLoadmoreButton, setIsLoadmoreButton] = useState(true);
  const [loadMoreStatus, setLoadMoreStatus] = useState(false);
  const [pageRecode, setPageRecode] = useState(20);
  const [pageOffset, setPageOffset] = useState(20);

  const topBanner = pageProp?.top_banner?.banners[0];
  const topBannerMediaUrl = pageProp?.top_banner?.media_url;

  
  if(category_all.length > 0){
    category_all.map((ls)=>{
      if(ls.slug == slug){
        classesCategory = ls;
      }
    })
  }


  const loadMore = async () => {
    setLoadMoreStatus(true);
    setPageOffset(pageOffset + pageRecode)
    let endpoint = `${slug}?filter=desc&limit=${pageRecode}&offset=${pageOffset}`;
    // if(pageOffset > classesTotal){ console.log('DONE') }
    const reqFetch = await fetch(process.env.server.api+"get-vclasses/"+endpoint);
    const classes = await reqFetch.json();
    classesListTemp.push(...classes.vclasses);
    setClassesList(classesListTemp);
    if(classes.vclasses.length != pageRecode){
      setIsLoadmoreButton(false);
      setPageOffset(classesTotal);
    }    
    setLoadMoreStatus(false);
  }


  return (
    <div>

    <HeadSEO title={classesCategory?.seo_title} description={classesCategory?.seo_description} image={classesCategory?.image}  />

    {loadMoreStatus}
      { loadMoreStatus == true ? (<span className='loadingOverlay' style={{position:'fixed',display:'block'}} />) : "" }

      {/* Section banner */}
      <div className={style.page_top_banner}>
        <div className="container">
          <div className={style.banner_heading}>
            <h1>{classesCategory?.name}</h1>
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
              alt={classesCategory?.name}
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
              alt={classesCategory?.name}
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
              <li key={ls.id} className={classesCategory?.id == ls?.id ? style.card +" "+ style.is_active: style.card }>
                  <a href={'/classes/'+ls.slug}>{ls.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section Head */}
      <div className={style.pageHead}>
        <div className="container">
          <div className={style.parent}>
            <div className={style.left}>
              <h4>{classesCategory?.name}</h4>
            </div>
            <div className={style.right}>
              {classesTotal > 0 ? ( <p>Viewing 1 - {classesList?.length} of {classesTotal} products</p> ) : ""}
            </div>
          </div>
        </div>
      </div>

      {/* Section Classes List */}
      
      <div className={style.classesList}>
        <div className="container">

        {classesList?.length > 0 ? (
          <ul className={style.classsGrid}>
            {classesList?.map((ls, index)=>(
            <li key={ls?.id}>
              <div className={style.figureContainer}>
                <Link href={"/classe/"+ls?.slug}>
                  {
                    ls?.images.length > 0 ? (
                      <Image
                        className={style.figure}
                        src={media_url+"/"+ls?.images[0]}
                        width="200"
                        height="212"
                        alt={"ls.title"}
                        quality={100}
                      />
                    ) : ''
                    }
                </Link>
              </div>
              <div className={style.contentBody}>
                <div className={style.dateTime}>
                  {
                    ls.start_date != null ? <p>{ moment(ls.start_date).format('M/D/Y') } </p> : ""
                  }
                  {
                    ls.class_length != null ? <p><GlobalClock /> {ls?.class_length}</p> : ""
                  }
                </div>
                <p className={style.instructor}>{ls?.instruct_name}</p>
                <h4 className={style.title}>
                  <Link href={"/classe/"+ls?.slug}>{ls?.title}</Link>
                </h4>
                <p className={style.total}>{ls?.total_student} students</p>
              </div>
            </li>
            ))}
          </ul>
          )
          :
          (
            <p className={style.notEvent}>There are no classes in {classesCategory?.name?.toLowerCase()} category.</p>
          )
          }
        </div>
      </div>

    {/* Section LoadMore */}
    {isLoadmoreButton && classesTotal > pageRecode ? (
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
  const urlSlug = context.params.slug;
  const globalSettings = await GlobalHeaderFooter();

  if(urlSlug != ""){
	  
	  
	  //check filter start
     let filterStr = "?filter=desc&limit=20&offset=0";
     const filter = context?.query?.filter;
     if(typeof filter != "undefined"){
       filterStr = "?filter="+filter;
     }
     //check filter end
 
     
      //banner
      const reqFetchBanner = await fetch(process.env.server.api+"get-banners/vclasses");
      const resultBanner = await reqFetchBanner.json();
      
      const reqFetch = await fetch(process.env.server.api+"get-vclasses/"+urlSlug+filterStr);
      const classes = await reqFetch.json();
      const page_content = { classes: classes }

      
      return {
        props: {
          top_banner : resultBanner,
          page_content: page_content,
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
