import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import HeadSEO from '../components/common/Head/head';

export default function ContentDetails(pageProp) {

  // const [slug,setSlug] = useState({});

    const pageBuilder = pageProp?.page_content?.page;

    // const fetchCategory = async () => {
    //   try {
  
    //     const resp = await fetch(`https://admin.instacertify.com/api/pages?slug=/about`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       }
    //     });
  
       
    //       const formateddata = await resp.json();
    //       console.log(formateddata);
    //       setSlug(formateddata?.page)
  
        
  
  
    //   } catch (error) {
  
    //     console.error("There was an error fetching the categories:", error);
    //   }
    // };

    // useEffect(()=>{
    //   fetchCategory();
    // },[])
    
    return (
        <div>
          <HeadSEO title={pageBuilder?.seo_title} description={pageBuilder?.seo_description} image={false}  />
          <div role="article" dangerouslySetInnerHTML={ {__html:pageProp?.page_content} }></div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const urlSlug = context.params.slug;
    if(urlSlug != ""){
  
      try {
        const contentFetch = await fetch(process.env.server.api+"pages?slug=/"+urlSlug);
        const contentDetial = await contentFetch.json();


        if(contentDetial.page == null){
          return {
              props: {
                page_content: false,
                navbar: false,
                footer: false,
              },
              notFound: true
          };  
        }else{

          const headerData = {
            settings:contentDetial?.header,
            navigation:contentDetial?.navigation
          }

          const regex = new RegExp("../../../", "g");
          const htmlFinal = contentDetial?.page?.html.replace(regex, process.env.server.path);
          

          return {
              props: {
                  page_content: htmlFinal,
                  navbar: headerData,
                  footer: contentDetial?.footer
              },
          };
        }

        
      }
      catch(err) {
        
        return {
          props: {
            page_content: false,
            navbar: false,
            footer: false,
          },
          notFound: true
        };
  
      }
  
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
export async function addToCartApi (id)  {

  const resp = await fetch('https://admin.instacertify.com/api/cart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
       "Authorization":`Bearer ${JSON?.parse(localStorage.getItem("insta_Access"))}`
    },
    body: JSON.stringify({
      product_id: id,
      quantity: 1,
    }),
  })
    .then(response => response.json())
    .then(data => {
      alert(data?.message)
      toggleBoolValue();
    })
    .catch(error => console.error('Error:', error));

    // alert(resp)
}
  