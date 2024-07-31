import Image from "next/image";
import React, { useRef, useState } from "react";
import style from "./../css/shoppings-plp.module.scss";

import HeadSEO from "../../components/common/Head/head";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import ShoppingCards from "../../components/common/shopping/cards";
import ShoppingSidebar from "../../components/common/shopping/sidebar";
import ShoppingCollections from "../../components/common/shopping/collections";
import { useRouter } from "next/router";

export default function ShoppingsListsMain(pageProp) {
  

	const router = useRouter();
	const collectionsRoute = router.query.slug.join("/");

	const productRoute  = pageProp.page_content?.products?.data?.site?.route?.node;
	const seo = productRoute?.seo;

	const totalItems = productRoute?.products?.collectionInfo?.totalItems;
	const pageInfo = productRoute?.products?.pageInfo;

	const [currentPage, SetCurrentPage] = useState(pageInfo?.endCursor);
	const [hasNextPage, SetHasNextPage] = useState(pageInfo?.hasNextPage);
	const productsTemp = productRoute?.products?.edges;
	const [products, SetProducts] = useState(productsTemp);
	const [pageSatus, setPageSatus] = useState(false);
	
	
  //Load More
  const loadMore = async (cursor) => {
    setPageSatus(true);
    let defaultSort = "NEWEST";
    if(typeof router.query.sort != "undefined"){
        defaultSort = router.query.sort;
    }

    //Collections
    const reqFetchProduct = await fetch(process.env.next.api_url+"collections/products", {method:"POST", headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify({"route":collectionsRoute, "sort": defaultSort, "page": cursor}) });

    const resultProduct = await reqFetchProduct.json();

    const cs_products = resultProduct?.data?.site?.route?.node;
    const cs_pageInfo = cs_products?.products?.pageInfo;
    SetCurrentPage(cs_pageInfo?.endCursor)
    SetHasNextPage(cs_pageInfo?.hasNextPage)
    productsTemp.push(...cs_products?.products?.edges);
    SetProducts(productsTemp);
    setPageSatus(false);
  }


  
  return (
    <div className="page_shopping_list">
      <HeadSEO title={seo?.pageTitle == "" ? productRoute?.name : seo?.pageTitle} description={seo?.metaDescription} image={null} />

      {/* Section banner */}
      {productRoute?.defaultImage != null ? 
        <div className={style.page_top_banner}>
          <Image
            className={style.banner_image}
            src={productRoute?.defaultImage?.urlOriginal}
            width="100"
            height="304"
            layout="responsive"
            objectFit="cover"
            alt={productRoute?.name}
          />
        </div>
        :""}


      {/* All collections */}
      <ShoppingCollections title={productRoute?.name} collections={pageProp.page_content.collections} />


      {/* Section Head */}
      {/* <div className={style.pageHead}>
        <div className="container">
          <div className={style.parent}>
            <div className={style.left}>
              <h2>NEW ARRIVALS</h2>
              <p><b>ALL PRODUCTS</b> 1259 Products</p>
            </div>
          </div>
        </div>
      </div> */}


      {/* Section category Full */}
      <div className="container" role="article">
        <div className={style.plpParent}>
          
          { products?.length == 0 || productRoute == null ? "" : <div className={style.plpLeft}><ShoppingSidebar /></div> }

          <div className={`${style.plpRight} ${products?.length == 0 || productRoute == null ? style.isFullWidth:""}`}>
            <div className={style.categoryLayoutFull}>
                <div className={style.rentalCardGrids}>
                  {products?.length > 0 && products.map((ls)=>(
                      <ShoppingCards items={ls.node} key={ls.node.entityId} />
                    ))}

                    {products?.length == 0 || productRoute == null ? <p className={style.noProduct}>There are no products listed under this category.</p>:""}
                </div>
            </div>
          </div>
          
        </div>
      </div>


      {/* pageInfo */}
      {hasNextPage == true ? 
        (
          <div className={style.loadMore}>
            <div className="container">
                {
                  pageSatus == true ?
                  (<button className={`${style.buttonLoadMore} ${style.buttonLoadMoreOff}`}>Wait...</button>)
                  :
                  (<button className={style.buttonLoadMore} onClick={() => { loadMore(currentPage); }}>LOAD MORE</button>)
                }
                
            </div>
          </div>
        )
      :""}
      

    </div>
  );
	
	
}


export async function getServerSideProps(context) {
  const globalSettings = await GlobalHeaderFooter();

  const collectionsRoute = context.params.slug.join("/");

  let defaultSort = "NEWEST";
  if(typeof context.query.sort != "undefined"){
      defaultSort = context.query.sort;
  }

  if(context.params.slug.length > 0){
  	
	  //Collections
    const reqFetchCollections = await fetch(process.env.next.api_url+"collections/all");
    const resultCollections = await reqFetchCollections.json();
	  
	  //Collections
    const reqFetchProduct = await fetch(process.env.next.api_url+"collections/products", {method:"POST", headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, body: JSON.stringify({"route":collectionsRoute, "sort": defaultSort}) });
    const resultProduct = await reqFetchProduct.json();
	  
	  const page_content = { collections : resultCollections, products: resultProduct };
  
  	return {
      props: {
        page_content: page_content,
        navbar: globalSettings?.header,
        footer: globalSettings?.footer,
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

