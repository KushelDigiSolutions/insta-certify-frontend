import Image from "next/image";
import React, { useEffect, useRef } from "react";
import style from "./../css/eventList.module.scss";
import Link from "next/link";
import { useState } from "react";
import moment from 'moment'; 
import useBodyOutsideClick from "../../utils/body-outside-click";

import HeadSEO from "../../components/common/Head/head";
import EventDetNewest from "../../components/common/svg/eventDetials/newest";
import GlobalMoney from "../../components/common/svg/global/money";
import GlobalCalendar from "../../components/common/svg/global/calendar";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import { useRouter } from "next/router";

export default function EventLists(pageProp) {
  const router = useRouter();
  const [filterEvents, setFilterEvents] = useState(false);
  const [filterType, setFilterType] = useState(null);
  const refFilterEvents = useRef(null);
  useBodyOutsideClick(refFilterEvents, () => { setFilterEvents(false) });

  const eventCategory = pageProp.page_content?.events.category;
  const eventList = pageProp.page_content?.events?.event;
  const category_all = pageProp.page_content?.events?.category_all;
  
  
  useEffect(()=>{
    const element = document.getElementById("eventList")
    element?.scrollIntoView({ behavior: "smooth",  inline: "nearest" });
    setFilterType(router.query.filter)
  })

  return (
    <div>
      <HeadSEO title={eventCategory?.seo_title} description={eventCategory?.seo_description} image={eventCategory?.image}  />

      {/* Section banner */}
      <div className={style.page_top_banner}>
        <div className="container">
          <h1 className={style.banner_heading}>
            {eventCategory?.name}
            {/* "Creating memories that last a <br /> lifetime - Join us at our
            events!" */}
          </h1>
        </div>
        <Image
          className={style.banner_image}
          src={"/images/event-top-banner.png"}
          width="100"
          height="304"
          layout="responsive"
          objectFit="cover"
          alt="Event List"
        />
      </div>

      {/* Section category */}
      <div className="container">
        <ul className={style.categoryList}>
          {category_all?.map((ls, i) => (
            <li key={ls.id} className={eventCategory?.id == ls?.id ? style.card +" "+ style.is_active: style.card }>
              <Link href={ls.slug}>
                <div className={style.figureContainer}>
                  {ls?.image != null ? (
                    <Image
                      className={style.figure}
                      src={ls.image}
                      width="200"
                      height="204"
                      alt="Event List"
                    />
                  ):""}
                </div>
                <h4 className={style.cateTitle}>{ls?.name}</h4>
                <span className={style.cateCount}>{ls?.count} events</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Section Event Head */}
      <div className="container">
        <div className={style.event_head}>
          <div className={style.left}>
            <h4>Events in US</h4>
          </div>
          <div className={style.right}>

          {eventList?.length > 0 ? (
            <>
            
            <div className={style.filterEvents} ref={refFilterEvents}>

              <button type="button" className="ff_btn ff_btn_primary" onClick={()=> {setFilterEvents(value => !value);}}>
                Filter Events
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
                    fill="white"
                  />
                </svg>
              </button>


              {
                filterEvents == true ? (
                  <div className={style.popup_sort_filter}>
                    <ul>
                      <li>
                          <Link className={filterType == 'asc' || filterType == null ? style.isActive :''} onClick={()=>{setFilterEvents(false)}} href={'/events/'+eventCategory?.slug+'?filter=asc'}>
                            <GlobalCalendar />
                            Upcoming
                          </Link>
                        </li>
                      <li>
                        <Link className={filterType == 'desc' ? style.isActive :''} onClick={()=>{setFilterEvents(false)}} href={'/events/'+eventCategory?.slug+'?filter=desc'}>
                          <EventDetNewest />
                          Newest
                        </Link>
                      </li>
                      {/* <li>
                        <GlobalMoney />
                        Price low to high
                      </li>
                      <li>
                        <GlobalMoney />
                        Price high to low.
                      </li> */}
                    </ul>
                  </div>
                ):" "
              }


            </div>
            </>
          ) : " "}

          </div>
        </div>
      </div>

      {/* Section Event All List */}
      <div className={'container '+ style.eleEventList}>
          <span className={style.eleEventListTop} id="eventList">&nbsp;</span>
        {eventList?.length > 0 ? (
          <ul className={style.eventlistGrid}>
          {eventList?.map((ls, i) => (
            <li key={ls.id} className={style.eventlist}>
              <div className={style.parent}>

                {ls?.single_day == 0 ? (
                  <span className={style.eventDateTime}>
                    { moment(ls.start_date).format('ddd, MMMM DD') }
                  </span>
                )
                : (
                    ls.start_time == null ? 
                    (<span className={style.eventDateTime}>{ moment(ls.date).format('ddd, MMMM DD') }</span>)
                    :
                    <span className={style.eventDateTime}>{ moment(ls.date).format('ddd, MMMM DD') }, {moment(ls.start_time, 'HH:mm').format('hh:mm A')}</span>
                ) }
                

                <div className={style.figureContainer}>
                  <Link href={'/event/'+ls.slug}>
                    <Image
                      className={style.figure}
                      src={ls.image[0]}
                      width="200"
                      height="212"
                      alt={ls.title}
                      quality={100}
                    />
                  </Link> 
                </div>

                <div className={style.contentBody}>
                  <h4 className={style.eventTitle}>
                    <Link href={'/event/'+ls.slug}> {ls.title} </Link> 
                  </h4>
                  <div className={style.eventType}>
                    <span className={style.eventTypeList}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="32" height="32" rx="4" fill="#EFF8FF" />
                        <path
                          d="M19.2501 8C17.7587 8.00145 16.3288 8.59454 15.2742 9.64912C14.2196 10.7037 13.6265 12.1336 13.6251 13.625C13.6257 13.8711 13.6421 14.1169 13.6743 14.3609L8.24383 21.7672C8.06609 22.0076 7.98082 22.3039 8.00363 22.602C8.02644 22.9001 8.1558 23.1801 8.36805 23.3906L9.48446 24.507C9.69501 24.7193 9.97494 24.8486 10.273 24.8715C10.5711 24.8943 10.8675 24.809 11.1079 24.6312L18.5149 19.1992C18.7586 19.2319 19.0042 19.2489 19.2501 19.25C20.7419 19.25 22.1727 18.6574 23.2276 17.6025C24.2824 16.5476 24.8751 15.1168 24.8751 13.625C24.8751 12.1332 24.2824 10.7024 23.2276 9.64752C22.1727 8.59263 20.7419 8 19.2501 8ZM23.6251 13.625C23.6262 14.5694 23.3202 15.4885 22.7532 16.2437L16.6321 10.1219C17.2823 9.63624 18.0548 9.34104 18.8632 9.26928C19.6716 9.19751 20.484 9.35201 21.2096 9.71551C21.9352 10.079 22.5454 10.6372 22.972 11.3276C23.3986 12.018 23.6247 12.8134 23.6251 13.625ZM10.3688 23.625L9.25008 22.5062L14.1048 15.8906C14.6736 17.1749 15.7002 18.2014 16.9845 18.7703L10.3688 23.625ZM14.8751 13.625C14.8738 12.6808 15.1799 11.7619 15.747 11.007L21.8673 17.1273C21.2171 17.6127 20.4448 17.9077 19.6366 17.9794C18.8284 18.0511 18.0162 17.8966 17.2907 17.5332C16.5653 17.1698 15.9552 16.6119 15.5286 15.9217C15.102 15.2316 14.8757 14.4364 14.8751 13.625ZM14.6915 18.1828C14.8086 18.3 14.8744 18.4589 14.8744 18.6246C14.8744 18.7903 14.8086 18.9492 14.6915 19.0664L14.0665 19.6914C14.009 19.7519 13.94 19.8003 13.8636 19.8336C13.7872 19.867 13.7048 19.8848 13.6214 19.8859C13.538 19.8869 13.4552 19.8713 13.3779 19.8399C13.3006 19.8084 13.2304 19.7619 13.1714 19.7029C13.1124 19.6439 13.0659 19.5737 13.0344 19.4964C13.003 19.4191 12.9874 19.3363 12.9884 19.2529C12.9895 19.1695 13.0073 19.0871 13.0407 19.0107C13.074 18.9343 13.1224 18.8653 13.1829 18.8078L13.8079 18.1828C13.8659 18.1245 13.9348 18.0783 14.0108 18.0467C14.0867 18.0151 14.1681 17.9988 14.2503 17.9987C14.3325 17.9987 14.414 18.0148 14.4899 18.0463C14.5659 18.0777 14.6349 18.1239 14.693 18.182L14.6915 18.1828Z"
                          fill="#3595F6"
                        />
                      </svg>
                      {eventCategory?.name}
                    </span>
                    <span className={style.eventTypeList}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="32" height="32" rx="4" fill="#EFF8FF" />
                        <path
                          d="M16 11C15.3819 11 14.7777 11.1833 14.2638 11.5267C13.7499 11.87 13.3494 12.3581 13.1129 12.9291C12.8764 13.5001 12.8145 14.1285 12.935 14.7347C13.0556 15.3408 13.3533 15.8977 13.7903 16.3347C14.2273 16.7717 14.7842 17.0694 15.3903 17.19C15.9965 17.3105 16.6249 17.2486 17.1959 17.0121C17.7669 16.7756 18.255 16.3751 18.5983 15.8612C18.9417 15.3473 19.125 14.7431 19.125 14.125C19.125 13.2962 18.7958 12.5013 18.2097 11.9153C17.6237 11.3292 16.8288 11 16 11ZM16 16C15.6292 16 15.2666 15.89 14.9583 15.684C14.65 15.478 14.4096 15.1851 14.2677 14.8425C14.1258 14.4999 14.0887 14.1229 14.161 13.7592C14.2334 13.3955 14.412 13.0614 14.6742 12.7992C14.9364 12.537 15.2705 12.3584 15.6342 12.286C15.9979 12.2137 16.3749 12.2508 16.7175 12.3927C17.0601 12.5346 17.353 12.775 17.559 13.0833C17.765 13.3916 17.875 13.7542 17.875 14.125C17.875 14.6223 17.6775 15.0992 17.3258 15.4508C16.9742 15.8025 16.4973 16 16 16ZM16 7.25C14.1773 7.25207 12.4298 7.97706 11.1409 9.26592C9.85206 10.5548 9.12707 12.3023 9.125 14.125C9.125 16.5781 10.2586 19.1781 12.4062 21.6445C13.3713 22.759 14.4574 23.7626 15.6445 24.6367C15.7496 24.7103 15.8748 24.7498 16.0031 24.7498C16.1314 24.7498 16.2566 24.7103 16.3617 24.6367C17.5467 23.7623 18.6307 22.7587 19.5938 21.6445C21.7383 19.1781 22.875 16.5781 22.875 14.125C22.8729 12.3023 22.1479 10.5548 20.8591 9.26592C19.5702 7.97706 17.8227 7.25207 16 7.25ZM16 23.3438C14.7086 22.3281 10.375 18.5977 10.375 14.125C10.375 12.6332 10.9676 11.2024 12.0225 10.1475C13.0774 9.09263 14.5082 8.5 16 8.5C17.4918 8.5 18.9226 9.09263 19.9775 10.1475C21.0324 11.2024 21.625 12.6332 21.625 14.125C21.625 18.5961 17.2914 22.3281 16 23.3438Z"
                          fill="#3595F6"
                        />
                      </svg>
                      {ls.location}
                    </span>
                  </div>
                  <div className={style.eventDesc} dangerouslySetInnerHTML={ {__html:ls.short_description} }></div>
                  <div className={style.eventAction}>
                    <Link className="ff_btn ff_btn_primary_outline" href={'/event/'+ls.slug}>
                        Learn More
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="#2A78C5"/>
                        </svg>
                    </Link> 
                  </div>
                </div>
              </div>
            </li>
          ))}
          </ul>
        )
        :
        (
          <p className={style.notEvent}>There are no events in {eventCategory?.name.toLowerCase()} category.</p>
        )
        }
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {

  const urlSlug = context.params.slug;

  if(urlSlug != ""){
	  
	  
	  //check filter start
     let filterStr = "?filter=asc";
     const filter = context?.query?.filter;
     if(typeof filter != "undefined"){
       filterStr = "?filter="+filter;
     }
     //check filter end
 
     const globalSettings = await GlobalHeaderFooter();
     const eventsFetch = await fetch(process.env.server.api+"get-event-by-category/"+urlSlug+filterStr);
     const events = await eventsFetch.json();
     const page_content = { events: events }

     
     return {
       props: {
         page_content: page_content,
         navbar: globalSettings?.header,
         footer: globalSettings?.footer
       },
     };
	  


  }else{

    return {
      props: {
        page_content: false,
        navbar: false,
        footer: false,
      },
      notFound: true
    };

  }

  
}
