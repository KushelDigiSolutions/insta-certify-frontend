import React from 'react'
import HeadSEO from '../components/common/Head/head';

export default function ContentDetails(pageProp) {
  const pageBuilder = pageProp?.page_content?.page;

 

  
  return (
    <div>
      <HeadSEO title={pageBuilder?.seo_title} description={pageBuilder?.seo_description} image={false} />
      <div  dangerouslySetInnerHTML={{ __html: pageProp?.page_content }}></div>
    </div>
  )
}

export async function getServerSideProps(context) {

  try {

    const contentFetch = await fetch(process.env.server.api + "homepage");
    const contentDetial = await contentFetch.json();

    if (contentDetial.page == null) {
      return {
        props: {
          page_content: false,
          navbar: false,
          footer: false,
        },
        notFound: true
      };
    } else {

      const headerData = {
        settings: contentDetial?.header,
        navigation: contentDetial?.navigation
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

  } catch (error) {
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
