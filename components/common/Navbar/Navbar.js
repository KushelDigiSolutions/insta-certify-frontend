import React, { useEffect, useRef, useState } from 'react'
import style from "../../../pages/css/header.module.scss";
import Image from 'next/image';
import Link from 'next/link';
import GlobalArrowDown from '../svg/global/arrowDown';
import GlobalAccount from '../svg/global/account';
import GlobalSearch from '../svg/global/search';
import GlobalVerified from '../svg/global/verified';
import useBodyOutsideClick from '../../../utils/body-outside-click';
import GlobalMenu from '../svg/global/menu';
import GlobalClose from '../svg/global/close';
import MenuToggel from '../../../utils/common/menu';
import GlobalLogout from '../svg/global/logout';
import GlobalLogin from '../svg/global/login';
import { useSession } from 'next-auth/react';
import GlobalOrder from '../svg/global/order';
import GlobalCart from '../svg/global/cart';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react'

export default function Navbar(props) {
  const [menuToggel, setMenuToggel] = useState(false);
  const [authPopup, setAuthPopup] = useState(false);
  const refAuthPopup = useRef(null);
  const { data: userSession } = useSession();
  const router = useRouter();
  MenuToggel();
  useBodyOutsideClick(refAuthPopup, () => { setAuthPopup(false) });

  useEffect(() => {
    console.log(userSession)
    if (userSession?.user.error === "invalid-version") {
      document.cookie = 'access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'next-auth.session-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      signOut();
    }
  }, [userSession?.user?.error, router]);
  
  if(typeof props.navbarProps == "undefined" || props.navbarProps == false) {
    return "";
  }
  else{

    const navbarData = props?.navbarProps;
    const settings = navbarData?.settings;
    const navigation = navbarData?.navigation;

    let navbarItems = null;
    if(navigation?.items){
      navbarItems = JSON.parse(navigation?.items);
    }

    
    const itemsSetting = {
      "--headerBCColor": settings?.background_color,
      "--headerItemColor": navigation?.parent_text_color,
      "--headerItemHoverColor": navigation?.parent_text_hover_color,
      "--headerSubmenuBCColor": navigation?.background_color,
      "--headerSubmenuHoverBCColor": navigation?.hover_background_color,
      "--headerSubmenuItemColor": navigation?.text_link_color,
      "--headerSubmenuItemHoverColor": navigation?.link_hover_color
    }

    return (
      <header className={style.header} style={itemsSetting} role="banner">
        <div className='container'>
          <div className={style.headerParent}>

            <div className={style.hpLeft}>
              <a href={'/'}>
                {
                settings?.default_logo == "" ? 
                  (<div dangerouslySetInnerHTML={ {__html:settings?.text} }></div>)
                :
                settings ? (<Image className={style.headerLogo} src={settings?.default_logo} width="200" height="60" alt={"Logo"} quality={100} />) : ""                  
                }
                
              </a>
            </div>

            <div className={style.hdrToggelIcon} onClick={() => setMenuToggel(value => !value)} >
                {menuToggel == true ? (<GlobalClose />) : (<GlobalMenu />) }
            </div>
            
            <div className={menuToggel == true ? style.hpRight + " " + style.isMenuOpen : style.hpRight }>

              <ul className={style.navItems+" navItems"} role="menu">

                {
                  navbarItems != null && navbarItems?.length > 0 && navbarItems?.map((ls,i)=>(
                    <li key={i}>
                      <a  href={ls?.parentItems?.link == null || ls?.parentItems?.link == ""? "#" : ""+ls?.parentItems?.link} target={ls?.parentItems?.linkType == 'true' ? "_blank" : "_self" } >
                        {ls?.parentItems?.title}
                        {ls?.subItems?.length > 0 ? (<span className={style.menuIcon+ " menuIcon"}><GlobalArrowDown /></span>):""}
                      </a>

                      {/* Leval 2 Start */}
                      { ls?.subItems?.length > 0 ? (
                        <ul className={style.navItemsLeave1+" navItemsLeave1"}>
                          {
                            ls?.subItems?.length > 0 && ls?.subItems?.map((lss, ii)=>(
                                <li key={ii}>
                                  <a href={lss.link == null || lss.link == "" ? "#" : lss.link} target={lss.linkType == 'true' ? "_blank" : "_self" } >
                                    {lss?.title}
                                    {lss?.childrenItems?.length > 0 ? (<span className={style.menuIcon+ " menuIcon"}><GlobalArrowDown /></span>):""}
                                  </a>
                                  {/* Leval 3 Start */}
                                  { lss?.childrenItems?.length > 0 ? (
                                      <ul className={style.navItemsLeave2+" navItemsLeave2"}>
                                        {
                                          lss?.childrenItems?.length > 0 && lss?.childrenItems?.map((lsss, iii)=>(
                                              <li key={iii}>
                                                <a  href={lsss.link == null || lsss.link == "" ? "#" : lsss.link} target={lsss.linkType == 'true' ? "_blank" : "_self" } >{lsss?.title}</a>
                                              </li>
                                          ))
                                        }
                                      </ul>
                                    ) : "" }
                                  {/* Leval 3 End */}
                                </li>
                            ))
                          }
                        </ul>
                      ) : "" }
                      {/* Leval 2 End */}

                    </li>    
                  ))
                }

              </ul>

              <ul className={style.navItemsUser} style={{display:'block'}}>
                {/* <li>
                  <Link href={'/search'}><GlobalSearch /></Link>
                </li> */}
                <li>
                    <span onClick={() => setAuthPopup(value => !value)} ref={refAuthPopup}>
                      <GlobalAccount  />
                    </span>
                    {authPopup == true ?(
                    <div className={style.hdrAuthPopup}>
                      <div className={style.apParent}>
                        <div className={style.apLeft}>
                            <span>Go to Account to <br /> download QR Code</span>
                            <GlobalVerified />
                        </div>
                        <div className={style.apRight}>
                          <ul>
                            {userSession == null || typeof userSession == "undefined" ? 
                              (
                                <>
                                  <li><Link href={'/cart'}>View Cart</Link></li>
                                  <li><Link href={'/login'}>login</Link></li>
                                  <li><Link href={'/create-account'}>Create on account</Link></li>
                                </>
                              )
                              :
                              (
                                <>
                                  <li><Link href={'/cart'}>View Cart</Link></li>
                                  <li><Link href={'/account/order'}>Orders</Link></li>
                                  <li><Link href={'/account/account-details'}>Account info</Link></li>
                                  <li><Link href={'/logout'}>Logout</Link></li>
                                </>
                              )
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                    ):""}
                </li>

                {userSession == null ? 
                  (
                    <>
                      <li className={style.navUserLinkMobile}><Link href={'/cart'}><GlobalCart /> View Cart</Link></li>
                      <li className={style.navUserLinkMobile}><Link href={'/login'}><GlobalLogin  /> login</Link></li>
                      <li className={style.navUserLinkMobile}><Link href={'/create-account'}><GlobalAccount  /> Create on account</Link></li>
                    </>
                  )
                  :
                  (
                    <>
                      <li className={style.navUserLinkMobile}><Link href={'/cart'}><GlobalCart /> View Cart</Link></li>
                      <li className={style.navUserLinkMobile}><Link href={'/account/order'}><GlobalOrder /> Orders</Link></li>
                      <li className={style.navUserLinkMobile}><Link href={'/account/account-details'}><GlobalAccount /> Account info</Link></li>
                      <li className={style.navUserLinkMobile}><Link href={'/logout'}><GlobalLogout /> Logout</Link></li>
                    </>
                  )
                }
               
              </ul>
              

            </div>
            
          </div>

        </div>

        {settings?.background_image != null && settings?.background_image != "" ? (<Image className={style.headerImage} src={settings?.background_image} width="200" height="212" alt={"Background"} quality={100} />):""}

      </header>
    )
  }
}
