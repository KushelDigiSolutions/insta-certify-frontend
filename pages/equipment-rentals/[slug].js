// import Image from "next/image";
// import React, { useRef, useState } from "react";
// import style from "../css/equipment-rental.module.scss";
// import Link from "next/link";

// import HeadSEO from "../../components/common/Head/head";
// import GlobalHeaderFooter from "../../utils/common/global-header-footer";
// import EquipmentRentalCards from "../../components/common/EquipmentRental/cards";
// import { useRouter } from "next/router";

// // export default function EquipmentRentals(pageProp) {

//   const router = useRouter()
//   const { slug } = router.query

//   const banner = pageProp?.page_content?.banner?.banner[0];
  
//   let equipmentCategory = [];
//   const category_all = pageProp.page_content?.category?.categories;
//   const media_url = pageProp.page_content?.category?.media_url;
//   const cat_url = pageProp.page_content?.category?.cat_url;
//   const equipmentTotal = pageProp.page_content?.category?.count;

//   const equipmentListTemp = pageProp.page_content?.category?.equipment;
//   const [equipmentList, setClassesList] = useState(equipmentListTemp);

//   const [isLoadmoreButton, setIsLoadmoreButton] = useState(true);
//   const [loadMoreStatus, setLoadMoreStatus] = useState(false);
//   const [pageRecode, setPageRecode] = useState(15);
//   const [pageOffset, setPageOffset] = useState(15);

  
//   if(category_all?.length > 0){
//     category_all?.map((ls)=>{
//       if(ls.slug == slug){
//         equipmentCategory = ls;
//       }
//     })
//   }




//   const loadMore = async () => {
//     setLoadMoreStatus(true);
//     setPageOffset(pageOffset + pageRecode)
//     let endpoint = `${slug}?filter=desc&limit=${pageRecode}&offset=${pageOffset}`;
//     // if(pageOffset > equipmentTotal){ console.log('DONE') }
//     const reqFetch = await fetch(process.env.server.api+"get-equipment/"+endpoint);
//     const equipment = await reqFetch.json();
//     equipmentListTemp.push(...equipment.equipment);
//     setClassesList(equipmentListTemp);
//     if(equipment.equipment.length != pageRecode){
//       setIsLoadmoreButton(false);
//       setPageOffset(equipmentTotal);
//     }    
//     setLoadMoreStatus(false);
//   }


//   return (
//     <div className={`page_equipment_rentals_list ${style.page_equipment_rentals_main}`}>
      
//       <HeadSEO title={equipmentCategory?.seo_title} description={equipmentCategory?.seo_description} image={equipmentCategory?.image}  />
//       {/* Section banner */}
//       <div className={style.page_top_banner}>
//         <div className="container">
//           <div className={style.banner_heading}>
//             <h1>{equipmentCategory?.name}</h1>
//           </div>
//         </div>
//           <Image
//           className={style.banner_image}
//           src={cat_url+"/"+equipmentCategory?.image}
//           width="100"
//           height="304"
//           layout="responsive"
//           objectFit="cover"
//           alt={equipmentCategory?.name}
//         />
//       </div>

//       {/* Section category */}
//       <div className={style.categoryList}>
//         <div className="container">
//           <h2>PRODUCT CATALOG</h2>
//           <ul>
//             {category_all?.map((ls, i) => (
//               <li key={ls.id} className={equipmentCategory?.id == ls?.id ? style.card +" "+ style.is_active: style.card }>
//                   <a href={'/equipment-rentals/'+ls.slug}>{ls.name}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Section category Full */}
//       <div className={style.categoryLayout}>
//         <div className="container">
//           {equipmentList?.length > 0 ? (
//             <ul className={style.cardGrids}>
//               {equipmentList?.map((ls, index)=>(
//                 <EquipmentRentalCards key={ls} item={ls} imagePath={media_url} />
//               ))}
//             </ul>
//             ) : ""
//             }
//         </div>
//       </div>

//       {/* No Data */}
//       { equipmentList?.length == 0 ? (
//         <div className={style.noData}>
//           <Image
//             src={
//               "https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/equipment-rental-icon.png?t=1704526587"
//             }
//             width="80"
//             height="80"
//             layout="responsive"
//             objectFit="cover"
//             alt={"No Data"}
//           />
//           <p>No product to display!</p>
//         </div>
//       ) : (
//           isLoadmoreButton && equipmentTotal > pageRecode ? (
//             <div className={style.loadMore}>
//               <div className="container">
//                 <button className={style.buttonLoadMore} onClick={() => { loadMore(); }}>LOAD MORE</button>
//               </div>
//             </div>
//           ):""
//       ) }

     
//     </div>
//   );
// }



// export async function getServerSideProps(context) {

//   const urlSlug = context.params.slug;
//   const globalSettings = await GlobalHeaderFooter();

//   try {

//     if(urlSlug != ""){

//         //banner
//         const reqBannerFetch = await fetch(process.env.server.api+"get-equipment-home");
//         const reqBannerDetial = await reqBannerFetch.json();

//         //check filter start
//         let filterStr = "?filter=desc&limit=15&offset=0";
//         const filter = context?.query?.filter;
//         if(typeof filter != "undefined"){
//           filterStr = "?filter="+filter;
//         }
//         //check filter end
    

//         const reqFetch = await fetch(process.env.server.api+"get-equipment/"+urlSlug+filterStr);
//         const reqResult = await reqFetch.json();
//         const data = {
//           banner : reqBannerDetial,
//           category : reqResult
//         }

//         return {
//             props: {
//                 page_content: data,
//                 navbar: globalSettings?.header,
//                 footer: globalSettings?.footer
//             },
//         };

//     }else{

//       return {
//         props: {
//           page_content: false,
//           navbar: globalSettings?.header,
//           footer: globalSettings?.footer
//         },
//         notFound: true
//       };

//     }
    
//   } catch (error) {

//     return {
//       props: {
//         page_content: false,
//         navbar: globalSettings?.header,
//         footer: globalSettings?.footer
//       },
//       notFound: true
//     };
    
//   }

	
// }
