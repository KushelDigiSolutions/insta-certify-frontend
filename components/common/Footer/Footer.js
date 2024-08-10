import React from 'react'
import style from "../../../pages/css/footer.module.scss";
import Link from 'next/link';
import FaceBookSocial from '../svg/social/facebook';
import LinkedinSocial from '../svg/social/linkedin';
import InstagramSocial from '../svg/social/instagram';
import TwitterSocial from '../svg/social/twitter';
import moment from 'moment';
import Image from 'next/image';
// import ins1 from '../../../public/images/fb.svg';
// import ins2 from '../../../public/images/twitter.svg';
// import ins3 from '../../../public/images/linkedin.svg';
// import ins4 from '../../../public/images/insta.svg'

import twitter from '../../../components/img/twitter.svg'

export default function Footer(footerProps) {
  if(typeof footerProps.footerProps == "undefined" || footerProps.footerProps == false){ return ""; }
  else{

    const footerData = footerProps.footerProps;

    let footerItems = null;
    if(footerData?.items){
      footerItems = JSON.parse(JSON.parse(footerData?.items));
    }
   
   const itemsSetting = {
      "--footerBCColor": footerData?.background_color,
      "--footerItemColor": footerData?.parent_text_color,
      "--footerItemHoverColor": footerData?.parent_text_hover_color
    }

    return (
      
      <footer className={style.footer} style={itemsSetting} role="contentinfo">


        <div className='container foot_coming'>

          <div className={style.parent}>
            
            <div className={style.left}>

              {

                footerData?.footer_logo != null ? (
                  <Image className={style.footerLogo} src={footerData?.footer_logo} width="200" height="60" alt={"Logo"} quality={100} />
                )
                :
                (<h4 className={style.footerTitle} dangerouslySetInnerHTML={ {__html:footerData?.global_title} }></h4>)
               }

              -<div className={style.footerSubTitle} dangerouslySetInnerHTML={ {__html:footerData?.sub_title} }></div>
              
            </div>

            <div className={style.right}>
                {footerItems != null ? (
                  footerItems.map((ls, i)=>(
                    <div key={i} id={ls.parentId} className={style.footerItems}>

                      <h4 className={style.footerItemsHead}>
                        {ls.parentItems.link != '' ? (<a href={ls.parentItems.link} target={ls.parentItems.linkType == 'true' ? "_blank" : "_self" }>{ls.parentItems.title}</a>): ls.parentItems.title}
                      </h4>
                      

                      {ls.subItems.length > 0 ? (
                      <ul className={style.footerItemsUL}>
                          {ls.subItems.map((lss, ii)=>(
                            <li key={ii}>

                              
                              {
                                lss.link?.match('tel:') ? (
                                    <a href={""+lss?.link} target={lss?.linkType == 'true' ? "_blank" : "_self" }>{lss?.title}</a>
                                  )
                                  :
                                  (
                                    lss.link?.match('mailto:') ? (
                                      <a href={lss?.link} target={lss?.linkType == 'true' ? "_blank" : "_self" }>{lss?.title}</a>
                                    ):(
                                      <a href={lss?.link} target={lss?.linkType == 'true' ? "_blank" : "_self" }>{lss?.title}</a>
                                    )
                                    
                                  )
                              }
                              
                            </li>
                          ))}
                      </ul>
                      ) :""}

                    </div>
                  ))
                ):""}
            </div>

          </div>

          
          
        </div>

        <div className={style.copyRight}>
          <div className='container'>
            <div className={style.crParent}>
              <div className={style.crLeft}>
                <p>Copyrights ©{ moment().format('Y') } MadFish Solutions.</p>
              </div>
              <div className={style.crRight}>
                <ul>
                <p className='connect'>Connect:</p>
                  <li>
                    <Link href={'https://twitter.com/'} target='_blank' >
                      <img src='./images/fb.svg'/>
                    </Link>
                  </li> 
                  <li>
                    <a href={'https://www.facebook.com/FUNaddictFairchild/'} target='_blank' >
                      {/* <FaceBookSocial /> */}
                      <img src='./images/twitter.svg'/>
                    </a>
                  </li>
                  <li>
                    <a href={'https://www.linkedin.com/company/fairchildairforcebase/'} target='_blank' >
                      {/* <LinkedinSocial /> */}
                      <img src='./images/linkedin.svg'/>
                    </a>
                  </li>
                  <li>
                    <a href={'https://www.instagram.com/fairchildfun/'} target='_blank' >
                      {/* <InstagramSocial /> */}
                      <img src='./images/insta.svg'/>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>


      </footer>
      
    )
  }
}
