import React, { useEffect, useRef, useState } from "react";
import style from "../../../pages/css/header.module.scss";
import Image from "next/image";
import Link from "next/link";
import GlobalArrowDown from "../svg/global/arrowDown";
import GlobalAccount from "../svg/global/account";
import GlobalSearch from "../svg/global/search";
import GlobalVerified from "../svg/global/verified";
import useBodyOutsideClick from "../../../utils/body-outside-click";
import GlobalMenu from "../svg/global/menu";
import GlobalClose from "../svg/global/close";
import MenuToggel from "../../../utils/common/menu";
import GlobalLogout from "../svg/global/logout";
import GlobalLogin from "../svg/global/login";
import { useSession } from "next-auth/react";
import GlobalOrder from "../svg/global/order";
import GlobalCart from "../svg/global/cart";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function Navbar(props) {
  const [menuToggel, setMenuToggel] = useState(false);
  const [authPopup, setAuthPopup] = useState(false);
  const [authPopup1,setAuthPopup1] = useState(false)
  const refAuthPopup = useRef(null);
  const refAuthPopup1 = useRef(null)
  const { data: userSession } = useSession();
  const router = useRouter();
  MenuToggel();
  useBodyOutsideClick(refAuthPopup, () => {
    setAuthPopup(false);
  });

  useBodyOutsideClick(refAuthPopup1, () => {
    setAuthPopup1(false);
  });

  useEffect(() => {
    console.log(userSession);
    if (userSession?.user.error === "invalid-version") {
      document.cookie =
        "access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      document.cookie =
        "next-auth.session-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      signOut();
    }
  }, [userSession?.user?.error, router]);

  if (typeof props.navbarProps == "undefined" || props.navbarProps == false) {
    return "";
  } else {
    const navbarData = props?.navbarProps;
    const settings = navbarData?.settings;
    const navigation = navbarData?.navigation;

    let navbarItems = null;
    if (navigation?.items) {
      navbarItems = JSON.parse(navigation?.items);
    }

    const itemsSetting = {
      "--headerBCColor": settings?.background_color,
      "--headerItemColor": navigation?.parent_text_color,
      "--headerItemHoverColor": navigation?.parent_text_hover_color,
      "--headerSubmenuBCColor": navigation?.background_color,
      "--headerSubmenuHoverBCColor": navigation?.hover_background_color,
      "--headerSubmenuItemColor": navigation?.text_link_color,
      "--headerSubmenuItemHoverColor": navigation?.link_hover_color,
    };

    return (
      <header
        id="lower_head"
        className={style.header}
        style={itemsSetting}
        role="banner"
      >
        <div className="nav_cont">
          <div className="">
            <div id="some" className={style.headerParent}>
              <div id="left_nav" className={style.hpLeft}>
                <a href={"/"}>
                  {settings?.default_logo == "" ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: settings?.text }}
                    ></div>
                  ) : settings ? (
                    <Image
                      className={style.headerLogo}
                      src={settings?.default_logo}
                      width="200"
                      height="60"
                      alt={"Logo"}
                      quality={100}
                    />
                  ) : (
                    ""
                  )}
                </a>

                <div class="insta-certify-header-searchbar">
                  <div class="insta-certify-header-searchbar-menu">
                    <input
                      type="text"
                      placeholder="What can we help you find today?"
                    />
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.7547 13.7078V13.9149L14.9012 14.0614L19.4113 18.5713L18.5724 19.4111L14.0604 14.9006L13.7497 14.59L13.4017 14.8581C11.7892 16.1004 9.76435 16.6824 7.73832 16.4858C5.71229 16.2893 3.83703 15.329 2.49341 13.7999C1.14979 12.2709 0.438561 10.2878 0.504167 8.25341C0.569772 6.21901 1.40729 4.28585 2.84664 2.84656C4.28598 1.40727 6.21921 0.56977 8.2537 0.504166C10.2882 0.438563 12.2714 1.14977 13.8005 2.49335C15.3295 3.83692 16.2899 5.7121 16.4864 7.73805C16.683 9.764 16.101 11.7888 14.8587 13.4012L14.7547 13.5361V13.7064V13.7078ZM18.724 19.5626L18.7236 19.5622C18.7238 19.5625 18.724 19.5627 18.7242 19.5629L18.724 19.5626ZM8.50489 15.9684C9.48508 15.9684 10.4557 15.7753 11.3612 15.4002C12.2668 15.0251 13.0897 14.4754 13.7828 13.7823C14.4759 13.0892 15.0257 12.2664 15.4008 11.3609C15.7759 10.4553 15.9689 9.48475 15.9689 8.50459C15.9689 7.52443 15.7759 6.55386 15.4008 5.64831C15.0257 4.74276 14.4759 3.91996 13.7828 3.22688C13.0897 2.53381 12.2668 1.98403 11.3612 1.60894C10.4557 1.23385 9.48508 1.04079 8.50489 1.04079C6.52531 1.04079 4.6268 1.82715 3.22702 3.22688C1.82724 4.62661 1.04085 6.52506 1.04085 8.50459C1.04085 10.4841 1.82724 12.3826 3.22702 13.7823C4.6268 15.182 6.52531 15.9684 8.50489 15.9684Z"
                        stroke="#808080"
                      />
                    </svg>
                  </div>
                </div>
                <div className="insta-cartify-bbtn">
                  <div className="insta-cartify-leftbttm">
                    <div className="headline">
                      <hr />
                    </div>
                    <div>
                     
                       <ul id="hjhj"  className={style.navItemsUser} style={{ display: "block" }}>
                  <li>
                    <span
                      onClick={() => setAuthPopup1((value) => !value)}
                      ref={refAuthPopup1}
                    >
                      {/* <GlobalAccount /> */}
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.875 20.75V20.625C6.875 18.875 9.375 17.5 12.5 17.5C15.625 17.5 18.125 18.875 18.125 20.625V20.75C20.75 19 22.5 15.875 22.5 12.5C22.5 7 18 2.5 12.5 2.5C7 2.5 2.5 7 2.5 12.5C2.5 16 4.25 19 6.875 20.75ZM12.5 25C5.625 25 0 19.375 0 12.5C0 5.625 5.625 0 12.5 0C19.375 0 25 5.625 25 12.5C25 19.375 19.375 25 12.5 25ZM12.5 13.75C10.75 13.75 9.375 12.375 9.375 10.625C9.375 8.875 10.75 7.5 12.5 7.5C14.25 7.5 15.625 8.875 15.625 10.625C15.625 12.375 14.25 13.75 12.5 13.75Z"
                          fill="#444444"
                        />
                      </svg>
                    </span>
                    {authPopup1 == true ? (
                      <div className={style.hdrAuthPopup}>
                        <div className={style.apParent}>
                          <div className={style.apLeft}>
                            <span>
                              Go to Account to <br /> download QR Code
                            </span>
                            <GlobalVerified />
                          </div>
                          <div className={style.apRight}>
                            <ul>
                              {userSession == null ||
                              typeof userSession == "undefined" ? (
                                <>
                                  <li>
                                    <Link href={"/cart"}>View Cart</Link>
                                  </li>
                                  <li>
                                    <Link href={"/login"}>login</Link>
                                  </li>
                                  <li>
                                    <Link href={"/create-account"}>
                                      Create on account
                                    </Link>
                                  </li>
                                </>
                              ) : (
                                <>
                                  <li>
                                    <Link href={"/cart"}>View Cart</Link>
                                  </li>
                                  <li>
                                    <Link href={"/account/order"}>Orders</Link>
                                  </li>
                                  <li>
                                    <Link href={"/account/account-details"}>
                                      Account info
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/logout"}>Logout</Link>
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>

                  {userSession == null ? (
                    <>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/cart"}>
                          <GlobalCart /> View Cart
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/login"}>
                          <GlobalLogin /> login
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/create-account"}>
                          <GlobalAccount /> Create on account
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/cart"}>
                          <GlobalCart /> View Cart
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/account/order"}>
                          <GlobalOrder /> Orders
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/account/account-details"}>
                          <GlobalAccount /> Account info
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/logout"}>
                          <GlobalLogout /> Logout
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
                    </div>
                    <div className="headline">
                      <hr />
                    </div>
                    <div>
                      {
                        userSession == null || typeof userSession == "undefined" ? <Link href={"/cart"}><svg
                        width={25}
                        height={23}
                        viewBox="0 0 25 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_290_478)">
                          <path
                            d="M8.33333 4.05882H25L22.2222 16.2353H5.55556V2.70588H0V0H8.33333V4.05882ZM8.33333 6.76471V13.5294H20L21.5278 6.76471H8.33333ZM5.55556 23V20.2941H10.6944V23H5.55556ZM15.2778 23V20.2941H20.4167V23H15.2778Z"
                            fill="#444444"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_290_478">
                            <rect width={25} height={23} fill="white" />
                          </clipPath>
                        </defs>
                      </svg></Link> :
                        <Link href={"/cart"}> <svg
                         width={25}
                         height={23}
                         viewBox="0 0 25 23"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                       >
                         <g clipPath="url(#clip0_290_478)">
                           <path
                             d="M8.33333 4.05882H25L22.2222 16.2353H5.55556V2.70588H0V0H8.33333V4.05882ZM8.33333 6.76471V13.5294H20L21.5278 6.76471H8.33333ZM5.55556 23V20.2941H10.6944V23H5.55556ZM15.2778 23V20.2941H20.4167V23H15.2778Z"
                             fill="#444444"
                           />
                         </g>
                         <defs>
                           <clipPath id="clip0_290_478">
                             <rect width={25} height={23} fill="white" />
                           </clipPath>
                         </defs>
                       </svg></Link>

                      }
                    
                    </div>
                    <div className="headline">
                      <hr />
                    </div>
                  </div>
                  <div className="insta-cartify-flex">
                    <svg
                      width={52}
                      height={40}
                      viewBox="0 0 52 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 30C17.5228 30 22 25.5228 22 20C22 14.4772 17.5228 10 12 10C6.47715 10 2 14.4772 2 20C2 25.5228 6.47715 30 12 30Z"
                        stroke="#7D7D7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 20H22"
                        stroke="#7D7D7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 10C14.5013 12.7384 15.9228 16.292 16 20C15.9228 23.708 14.5013 27.2616 12 30C9.49872 27.2616 8.07725 23.708 8 20C8.07725 16.292 9.49872 12.7384 12 10Z"
                        stroke="#7D7D7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M34.5134 16.288L33.9214 19.664H37.7614L37.5214 21.072H33.6814L33.0574 24.576H37.3774L37.1214 26H30.9774L32.9454 14.864H39.0894L38.8334 16.288H34.5134ZM45.4 17.04C46.328 17.04 47.064 17.2907 47.608 17.792C48.1627 18.2827 48.44 18.992 48.44 19.92C48.44 20.1547 48.4133 20.448 48.36 20.8L47.432 26H45.624L46.504 21.072C46.5467 20.7733 46.568 20.56 46.568 20.432C46.568 19.8453 46.4027 19.3973 46.072 19.088C45.752 18.7787 45.304 18.624 44.728 18.624C44.0347 18.624 43.448 18.8373 42.968 19.264C42.4987 19.68 42.2 20.2827 42.072 21.072V21.024L41.192 26H39.368L40.92 17.184H42.744L42.568 18.208C42.9307 17.8453 43.3573 17.5627 43.848 17.36C44.3493 17.1467 44.8667 17.04 45.4 17.04Z"
                        fill="#7D7D7D"
                      />
                    </svg>
                    <span>
                      <svg
                        width={14}
                        height={8}
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L7 7L13 1"
                          stroke="#7D7D7D"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={style.hdrToggelIcon}
                onClick={() => setMenuToggel((value) => !value)}
              >
                {menuToggel == true ? <GlobalClose /> : <GlobalMenu />}
              </div>

              {/* yaha dalna hai  */}

              <div
                id="right_men"
                className={
                  menuToggel == true
                    ? style.hpRight + " " + style.isMenuOpen
                    : style.hpRight
                }
              >
                <ul className={style.navItems + " navItems"} role="menu">
                  {navbarItems != null &&
                    navbarItems?.length > 0 &&
                    navbarItems?.map((ls, i) => (
                      <li key={i}>
                        <a
                          href={
                            ls?.parentItems?.link == null ||
                            ls?.parentItems?.link == ""
                              ? "#"
                              : "" + ls?.parentItems?.link
                          }
                          target={
                            ls?.parentItems?.linkType == "true"
                              ? "_blank"
                              : "_self"
                          }
                        >
                          {ls?.parentItems?.title}
                          {ls?.subItems?.length > 0 ? (
                            <span className={style.menuIcon + " menuIcon"}>
                              <GlobalArrowDown />
                            </span>
                          ) : (
                            ""
                          )}
                        </a>

                        {/* Leval 2 Start */}
                        {ls?.subItems?.length > 0 ? (
                          <ul
                            className={style.navItemsLeave1 + " navItemsLeave1"}
                          >
                            {ls?.subItems?.length > 0 &&
                              ls?.subItems?.map((lss, ii) => (
                                <li key={ii}>
                                  <a
                                    className="listmi"
                                    href={
                                      lss.link == null || lss.link == ""
                                        ? "#"
                                        : lss.link
                                    }
                                    target={
                                      lss.linkType == "true"
                                        ? "_blank"
                                        : "_self"
                                    }
                                  >
                                    <nav
                                      style={{
                                        backgroundColor: "#065175",
                                        height: "54px",
                                        width: "950px",
                                        transform:"translateX(-13px)" , 
                                        marginTop: "30px",
                                        padding: "6px 50px",
                                        color: "white",
                                        fontWeight: "700",
                                        fontSize: "24px",
                                        borderBottom: "1.5px solid  #F07A40"
                                      }}
                                      className="fosty"
                                    >
                                      {ls.title}
                                    </nav>

                                    <div
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        padding: "50px",
                                        display: "flex",
                                        alignItems: "flex-start",
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "grid",
                                          width: "40%",
                                          gridTemplateColumns: "repeat(2 , 1fr)",
                                          gap: "20px 50px",
                                          zIndex:"100" , 
                                          backgroundColor:"white"

                                        }}
                                        className="sosty"
                                      >
                                        <p className="hoving" style={{color:"black"}}>{lss?.title}</p>
                                        {/* <p style={{color:"black"}}>Case Study</p>
                                        <p style={{color:"black"}}>Events</p>
                                        <p style={{color:"black"}}>Products</p>
                                        <p style={{color:"black"}}>QCO Orders</p> */}
                                      </div>

                                      <img className="sofa" src="./images/rightimg.png" alt="" />

                                    </div>


                                    {lss?.childrenItems?.length > 0 ? (
                                      <span
                                        className={style.menuIcon + " menuIcon"}
                                      >
                                        <GlobalArrowDown />
                                      </span>
                                    ) : (
                                      ""
                                    )}
                                  </a>
                                
                                  {lss?.childrenItems?.length > 0 ? (
                                    <ul
                                      className={
                                        style.navItemsLeave2 + " navItemsLeave2"
                                      }
                                    >
                                      {lss?.childrenItems?.length > 0 &&
                                        lss?.childrenItems?.map((lsss, iii) => (
                                          <li key={iii}>
                                            <a
                                              href={
                                                lsss.link == null ||
                                                lsss.link == ""
                                                  ? "#"
                                                  : lsss.link
                                              }
                                              target={
                                                lsss.linkType == "true"
                                                  ? "_blank"
                                                  : "_self"
                                              }
                                            >
                                              {lsss?.title}
                                            </a>
                                          </li>
                                        ))}
                                    </ul>
                                  ) : (
                                    ""
                                  )}
                                </li>
                              ))}
                          </ul>
                        ) : (
                          ""
                        )}
                        {/* Leval 2 End */}
                      </li>
                    ))}

                  <div className="hj">
                    <div class="insta-certify-header-searchbar">
                      <div class="insta-certify-header-searchbar-menu">
                        <input
                          type="text"
                          placeholder="What can we help you find today?"
                        />
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.7547 13.7078V13.9149L14.9012 14.0614L19.4113 18.5713L18.5724 19.4111L14.0604 14.9006L13.7497 14.59L13.4017 14.8581C11.7892 16.1004 9.76435 16.6824 7.73832 16.4858C5.71229 16.2893 3.83703 15.329 2.49341 13.7999C1.14979 12.2709 0.438561 10.2878 0.504167 8.25341C0.569772 6.21901 1.40729 4.28585 2.84664 2.84656C4.28598 1.40727 6.21921 0.56977 8.2537 0.504166C10.2882 0.438563 12.2714 1.14977 13.8005 2.49335C15.3295 3.83692 16.2899 5.7121 16.4864 7.73805C16.683 9.764 16.101 11.7888 14.8587 13.4012L14.7547 13.5361V13.7064V13.7078ZM18.724 19.5626L18.7236 19.5622C18.7238 19.5625 18.724 19.5627 18.7242 19.5629L18.724 19.5626ZM8.50489 15.9684C9.48508 15.9684 10.4557 15.7753 11.3612 15.4002C12.2668 15.0251 13.0897 14.4754 13.7828 13.7823C14.4759 13.0892 15.0257 12.2664 15.4008 11.3609C15.7759 10.4553 15.9689 9.48475 15.9689 8.50459C15.9689 7.52443 15.7759 6.55386 15.4008 5.64831C15.0257 4.74276 14.4759 3.91996 13.7828 3.22688C13.0897 2.53381 12.2668 1.98403 11.3612 1.60894C10.4557 1.23385 9.48508 1.04079 8.50489 1.04079C6.52531 1.04079 4.6268 1.82715 3.22702 3.22688C1.82724 4.62661 1.04085 6.52506 1.04085 8.50459C1.04085 10.4841 1.82724 12.3826 3.22702 13.7823C4.6268 15.182 6.52531 15.9684 8.50489 15.9684Z"
                            stroke="#808080"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="insta-cartify-bbtn">
                      <div className="insta-cartify-leftbttm">
                        <div className="headline">
                          <hr />
                        </div>
                        <div>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.875 20.75V20.625C6.875 18.875 9.375 17.5 12.5 17.5C15.625 17.5 18.125 18.875 18.125 20.625V20.75C20.75 19 22.5 15.875 22.5 12.5C22.5 7 18 2.5 12.5 2.5C7 2.5 2.5 7 2.5 12.5C2.5 16 4.25 19 6.875 20.75ZM12.5 25C5.625 25 0 19.375 0 12.5C0 5.625 5.625 0 12.5 0C19.375 0 25 5.625 25 12.5C25 19.375 19.375 25 12.5 25ZM12.5 13.75C10.75 13.75 9.375 12.375 9.375 10.625C9.375 8.875 10.75 7.5 12.5 7.5C14.25 7.5 15.625 8.875 15.625 10.625C15.625 12.375 14.25 13.75 12.5 13.75Z"
                              fill="#444444"
                            />
                          </svg>
                        </div>
                        <div className="headline">
                          <hr />
                        </div>
                        <div>
                          <svg
                            width={25}
                            height={23}
                            viewBox="0 0 25 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_290_478)">
                              <path
                                d="M8.33333 4.05882H25L22.2222 16.2353H5.55556V2.70588H0V0H8.33333V4.05882ZM8.33333 6.76471V13.5294H20L21.5278 6.76471H8.33333ZM5.55556 23V20.2941H10.6944V23H5.55556ZM15.2778 23V20.2941H20.4167V23H15.2778Z"
                                fill="#444444"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_290_478">
                                <rect width={25} height={23} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="headline">
                          <hr />
                        </div>
                      </div>
                      <div className="insta-cartify-flex">
                        <svg
                          width={52}
                          height={40}
                          viewBox="0 0 52 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 30C17.5228 30 22 25.5228 22 20C22 14.4772 17.5228 10 12 10C6.47715 10 2 14.4772 2 20C2 25.5228 6.47715 30 12 30Z"
                            stroke="#7D7D7D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M2 20H22"
                            stroke="#7D7D7D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 10C14.5013 12.7384 15.9228 16.292 16 20C15.9228 23.708 14.5013 27.2616 12 30C9.49872 27.2616 8.07725 23.708 8 20C8.07725 16.292 9.49872 12.7384 12 10Z"
                            stroke="#7D7D7D"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M34.5134 16.288L33.9214 19.664H37.7614L37.5214 21.072H33.6814L33.0574 24.576H37.3774L37.1214 26H30.9774L32.9454 14.864H39.0894L38.8334 16.288H34.5134ZM45.4 17.04C46.328 17.04 47.064 17.2907 47.608 17.792C48.1627 18.2827 48.44 18.992 48.44 19.92C48.44 20.1547 48.4133 20.448 48.36 20.8L47.432 26H45.624L46.504 21.072C46.5467 20.7733 46.568 20.56 46.568 20.432C46.568 19.8453 46.4027 19.3973 46.072 19.088C45.752 18.7787 45.304 18.624 44.728 18.624C44.0347 18.624 43.448 18.8373 42.968 19.264C42.4987 19.68 42.2 20.2827 42.072 21.072V21.024L41.192 26H39.368L40.92 17.184H42.744L42.568 18.208C42.9307 17.8453 43.3573 17.5627 43.848 17.36C44.3493 17.1467 44.8667 17.04 45.4 17.04Z"
                            fill="#7D7D7D"
                          />
                        </svg>
                        <span>
                          <svg
                            width={14}
                            height={8}
                            viewBox="0 0 14 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L7 7L13 1"
                              stroke="#7D7D7D"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </ul>

                <ul id="jhjhj" className={style.navItemsUser} style={{ display: "block",opacity:"0" }}>
                  <li>
                    <span
                      onClick={() => setAuthPopup((value) => !value)}
                      ref={refAuthPopup}
                    >
                      <GlobalAccount />
                    </span>
                    {authPopup == true ? (
                      <div className={style.hdrAuthPopup}>
                        <div className={style.apParent}>
                          <div className={style.apLeft}>
                            <span>
                              Go to Account to <br /> download QR Code
                            </span>
                            <GlobalVerified />
                          </div>
                          <div className={style.apRight}>
                            <ul>
                              {userSession == null ||
                              typeof userSession == "undefined" ? (
                                <>
                                  <li>
                                    <Link href={"/cart"}>View Cart</Link>
                                  </li>
                                  <li>
                                    <Link href={"/login"}>login</Link>
                                  </li>
                                  <li>
                                    <Link href={"/create-account"}>
                                      Create on account
                                    </Link>
                                  </li>
                                </>
                              ) : (
                                <>
                                  <li>
                                    <Link href={"/cart"}>View Cart</Link>
                                  </li>
                                  <li>
                                    <Link href={"/account/order"}>Orders</Link>
                                  </li>
                                  <li>
                                    <Link href={"/account/account-details"}>
                                      Account info
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href={"/logout"}>Logout</Link>
                                  </li>
                                </>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>

                  {userSession == null ? (
                    <>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/cart"}>
                          <GlobalCart /> View Cart
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/login"}>
                          <GlobalLogin /> login
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/create-account"}>
                          <GlobalAccount /> Create on account
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/cart"}>
                          <GlobalCart /> View Cart
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/account/order"}>
                          <GlobalOrder /> Orders
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/account/account-details"}>
                          <GlobalAccount /> Account info
                        </Link>
                      </li>
                      <li className={style.navUserLinkMobile}>
                        <Link href={"/logout"}>
                          <GlobalLogout /> Logout
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {settings?.background_image != null &&
        settings?.background_image != "" ? (
          <Image
            className={style.headerImage}
            src={settings?.background_image}
            width="200"
            height="212"
            alt={"Background"}
            quality={100}
          />
        ) : (
          ""
        )}
      </header>
    );
  }
}

/* <>                     
<div
  style={{
    width: "900px",
    height: "500px",
    position: "absolute",
    backgroundColor: "white",
    transform: "translateX(-400px)",
    boxShadow: "0px 16px 40px 0px #7090B026"

  }}
>



//  
// </div>
// </> */
