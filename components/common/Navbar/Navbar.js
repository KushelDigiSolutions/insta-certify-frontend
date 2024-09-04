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
  const [authPopup1, setAuthPopup1] = useState(false)
  const refAuthPopup = useRef(null);
  const refAuthPopup1 = useRef(null)
  const [start, setStart] = useState(1);
  // const [sus,setSus] = useState(false);
  const { data: userSession } = useSession();
  const router = useRouter();
  MenuToggel();
  useBodyOutsideClick(refAuthPopup, () => {
    setAuthPopup(false);
  });

  useBodyOutsideClick(refAuthPopup1, () => {
    setAuthPopup1(false);
  });

  // const styleOff = {
  //   display: sus ? "block" : "none"
  // }

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

    const tab1 = () => {
      setStart(1);
      document.getElementById("one").style.background = "#F07A40"
      document.getElementById("two").style.background = "none"
      document.getElementById("three").style.background = "none"
    }

    const tab2 = () => {
      setStart(2);
      document.getElementById("one").style.background = "none"
      document.getElementById("two").style.background = "#F07A40"
      document.getElementById("three").style.background = "none"
    }

    const tab3 = () => {
      setStart(3);
      document.getElementById("one").style.background = "none"
      document.getElementById("two").style.background = "none"
      document.getElementById("three").style.background = "#F07A40"
    }


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const router = useRouter();
    const currentPath = router.asPath;

    console.log("cur",currentPath);

    const dropdownRef = useRef(null);
    const dropdownRef2 = useRef(null);
  
    const handleDropdownToggle = () => {
      setIsDropdownOpen((prev) => !prev);
      // setIsDropdownOpen2(false);
    };
    
    const handleDropdownToggle2 = () => {
      setIsDropdownOpen(false);
      setIsDropdownOpen2((prev) => !prev);
    };
  
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false); // Close dropdown if click is outside of it
      }
    };
  
    const handleClickOutside2 = (e) => {
      if (dropdownRef2.current && !dropdownRef2.current.contains(e.target)) {
        setIsDropdownOpen2(false); // Close dropdown if click is outside of it
      }
    };
  
    useEffect(() => {
      if (isDropdownOpen) {
        document.addEventListener("click", handleClickOutside);
      } else {
        document.removeEventListener("click", handleClickOutside);
      }
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [isDropdownOpen]);

    useEffect(() => {
      if (isDropdownOpen2) {
        document.addEventListener("click", handleClickOutside2);
      } else {
        document.removeEventListener("click", handleClickOutside2);
      }
      return () => {
        document.removeEventListener("click", handleClickOutside2);
      };
    }, [isDropdownOpen2]);

    return (
      <>

    
        <nav className="navbars">
          
          <div className="nav_test">
            <div className="nav_logo">
              <Link href="/"><img src="./images/safari.png" alt="" /></Link>
            </div>
            <div className="ul_nav">
              <ul className="ul_sofa">

                <li ref={dropdownRef} className="sog">

                  <div  className={`normailcs ${isDropdownOpen && "makecolor"}`}  onClick={handleDropdownToggle}  href="">Our Services
                  {isDropdownOpen && <div className="dropdownTriangle" />}
                    </div>  

                   {
                    isDropdownOpen  && 
                   
                  <div  className="navItem">
                    <div className="sidebar_nav1">
                      <ul className="certify">
                        <li id="one" onClick={tab1} className="cert">
                          <span className="sft">Certifications</span>
                        </li>
                        <li id="two" onClick={tab2}>
                          <span className="sft">Testing</span>
                        </li>
                        <li id="three" onClick={tab3}>
                          <span className="sft">Equipment</span>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar_nav2">

                      {
                        start === 1 && (
                          <div>
                          <div className="some">
                              <span>Certifications</span>
                            </div> 
                            <div className="bs">
                              <div className="bs1">
                                <div>
                                  <hr className="bis" />
                                  <h3>BIS</h3>
                                  <ul className="soj">
                                    <li>
                                      <a href="">
                                        BIS (ISI MARK) for Foreign <br />
                                        Manufacturers

                                      </a>
                                    </li>
                                    <li>
                                      <a href="">
                                        BIS (ISI Mark) for Domestic <br />
                                        Product Certification
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/bis-mark">
                                        BIS (CRS Mark) for Compulsory <br /> Registration
                                        Scheme
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="so">
                                  <hr className="bis" />
                                  <h3>EPR</h3>
                                  <ul className="soj">
                                    <li>
                                      <a href="">
                                        EPR Plastic Waste
                                      </a>
                                    </li>
                                    <li>
                                      <a href="">
                                        EPR E-Waste
                                      </a>
                                    </li>
                                    <li>
                                      <a href="">
                                        EPR Battery Waste
                                      </a>
                                    </li>
                                    <li>
                                      <a href="">
                                        EPR for Used Oil
                                      </a>
                                    </li>
                                    <li>
                                      <a href="">
                                        EPR for Tyre
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="bs1">
                                <div>
                                  <hr className="bis" />
                                  <h3>OTHER</h3>
                                  <ul className="soj">
                                    <li>
                                      <a href="">Peso Certification</a>
                                    </li>
                                    <li>
                                      <a href="">NSIC of MSME</a>
                                    </li>
                                    <li>
                                      <a href="">STQC Certification</a>
                                    </li>
                                    <li>
                                      <a href="">FSSAI Registration</a>
                                    </li>
                                    <li>
                                      <a href="">CDSCO Registration</a>
                                    </li>
                                    <li>
                                      <a href="">NOC for Steel</a>
                                    </li>
                                    <li>
                                      <a href="">BEE Certification</a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="so">
                                  <hr className="bis" />
                                  <h3>TELECOM</h3>
                                  <ul className="soj">
                                    <li>
                                      <a href="">WPC-ETA Approval</a>
                                    </li>
                                    <li>
                                      <a href="">FCC Certification</a>
                                    </li>
                                    <li>
                                      <a href="">IMEI Registration</a>
                                    </li>
                                    <li>
                                      <a href="">IMEI ICDR Registration</a>
                                    </li>
                                    <li>
                                      <a href="">TEC Approval</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="bs1">
                                <hr className="bis" />
                                <h3>GLOBAL</h3>
                                <ul className="soj">
                                  <li>
                                    <a href="">
                                      ISO Certification
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      HACCP
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      HALAL
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      SABER
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      G MARK for Toys
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      G MARK for Low Voltage <br /> Electrical Devices (LVED)
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      SFDA for Rice
                                    </a>
                                  </li>
                                  <li>
                                    <a href={"/food-testing"}>
                                      SFDA for Food

                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      SFDA for Cosmetics
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      CE Certification
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        )
                      }

                      {
                        start === 2 && (
                          <div>
                            <div className="some">
                              <span>Testing</span>
                            </div>
                            <div className="img_item">
                              <div className="nav_img">
                                <ul>
                                  <li>
                                    <a href="">Electronic and Electricity</a>
                                  </li>
                                  <li>
                                    <a href="">Construction and Engineering</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="">Chemicals</a>
                                  </li>
                                  <li>
                                    <a href="">Wireless</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                  <a href={"/food-testing"}>
                                       Food
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">Cosmetics</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="">Toys</a>
                                  </li>
                                  <li>
                                    <a href="">Software</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="">Metal and Alloys</a>
                                  </li>
                                  <li>
                                    <a href="">Environment</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="">Polymers and Plastics</a>
                                  </li>

                                </ul>
                              </div>
                              <div className="logo_img">
                                <img src="./images/apk.png" alt="" />
                              </div>
                            </div>
                          </div>
                        )
                      }

                      {
                        start === 3 && (
                          <div>
                            <div className="some">
                              <span>Equipment</span>
                            </div>
                            <div className="img_item">
                              <div className="nav_img">
                                <ul>
                                  <li>
                                    <a href="">Labware</a>
                                  </li>
                                  <li>
                                    <a href="">Lab Chemicals </a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="">General Laboratory Consumables </a>
                                  </li>
                                  <li>
                                    <a href="">Occupational Safety, Security</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="">Cleaning and Sterilization</a>
                                  </li>
                                  <li>
                                    <a href="">Life Sciences</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="">Analytical Measurement and Testing</a>
                                  </li>
                                  <li>
                                    <a href="">Optical Instruments and Microscopes</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="">Vacuum Technology, Drying, Dry Storage</a>
                                  </li>
                                  <li>
                                    <a href="">Distillation, Separation, Filtration</a>
                                  </li>
                                </ul>
                                <ul>
                                  <li>
                                    <a href="">Industry Specific Bundle</a>
                                  </li>

                                </ul>
                              </div>
                              <div className="logo_img">
                                <img src="./images/apk.png" alt="" />
                              </div>
                            </div>
                          </div>
                        )
                      }

                    </div>
                  </div>

                    }

                </li>

                <li>
                  <Link href={"/aboutus"} className={`${currentPath === "/aboutus"? "makecolor2":""}`}> About Us </Link>
                </li>

                <li ref={dropdownRef2} className="soki">
                  <div onClick={handleDropdownToggle2}   className={`normailcs ${isDropdownOpen2 && "makecolor"}`} >Resources
                  {isDropdownOpen2 && <div className="dropdownTriangle" />}

                  </div>
                  {
                    isDropdownOpen2 && 
                  
                  <div className="navItem2">
                    <div className="some">
                      <p>Resources</p>
                    </div>
                    <div className="img_item lime_item">
                      <div className="nav_img">
                        <ul>
                          <li>
                            <a href={"/news"}> News </a>
                          </li>
                          <li>
                            <a href="">Case Study</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={"/eventsnew"}> Events </a>
                          </li>
                          <li>
                            <a href="/catalog">Products</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="">QCO Orders</a>
                          </li>

                        </ul>
                      </div>
                      <div className="logo_img">
                        <img src="./images/latest.png" alt="" />
                      </div>
                    </div>
                  </div>

  }
                </li>

                <li>
                  <Link href={"/contact-us"}  className={`${currentPath === "/contact-us"? "makecolor2":""}`}> Contact us </Link>
                </li>

                <li>
                  <div className="search_bar">
                    <input type="text" placeholder="Search" />
                    <svg
                      width={20}
                      height={20}
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
                </li>

                <li className="ponh">
                  <div className="logo_photo">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.6 19.92V19.8C6.6 18.12 9 16.8 12 16.8C15 16.8 17.4 18.12 17.4 19.8V19.92C19.92 18.24 21.6 15.24 21.6 12C21.6 6.72 17.28 2.4 12 2.4C6.72 2.4 2.4 6.72 2.4 12C2.4 15.36 4.08 18.24 6.6 19.92ZM12 24C5.4 24 0 18.6 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 18.6 18.6 24 12 24ZM12 13.2C10.32 13.2 9 11.88 9 10.2C9 8.52 10.32 7.2 12 7.2C13.68 7.2 15 8.52 15 10.2C15 11.88 13.68 13.2 12 13.2Z"
                        fill="#444444"
                      />
                    </svg>
                  </div>
                  <div className="sofar1">
                     <Link href={"/create-account"}><span>Create an account</span></Link>
                     <Link href={"/login"}><span>login</span></Link>
                  </div> 
                </li>
                <li>
                 <Link href={"/cart"}><div className="cart">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 4.23529H24L21.3333 16.9412H5.33333V2.82353H0V0H8V4.23529ZM8 7.05882V14.1176H19.2L20.6667 7.05882H8ZM5.33333 24V21.1765H10.2667V24H5.33333ZM14.6667 24V21.1765H19.6V24H14.6667Z"
                        fill="#444444"
                      />
                    </svg>
                    <span className="e_cart">Cart</span>
                  </div></Link>
                </li>
             
                <li className="ponh1" style={{cursor:"pointer"}}>
                  <div className="lng">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="#7D7D7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 12H22"
                        stroke="#7D7D7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                        stroke="#7D7D7D"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="en">En</span>
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
                  </div>
                 
                  <div  className="sofar">
                     <span>Hindi</span>
                     <span>English</span>
                  </div>
                
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

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
                      <img className="kalish" src="https://res.cloudinary.com/ecommerce-website/image/upload/v1725269227/logoFoot_cm3uxr.png" alt="" />
                    ) : (
                      ""
                    )}
                  </a>

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
                                            transform: "translateX(-13px)",
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
                                          className="klk"
                                        >
                                          <div
                                            style={{
                                              display: "grid",
                                              width: "40%",
                                              gridTemplateColumns: "repeat(2 , 1fr)",
                                              gap: "20px 50px",
                                              zIndex: "100",
                                              backgroundColor: "white"

                                            }}
                                            className="sosty"
                                          >


                                            <p className="hoving" style={{ color: "black" }}>{lss?.title}</p>

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
                                        <div className="sofas">
                                          <ul
                                            id="iko"
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
                                        </div>
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
                              placeholder="Search"
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

                    <ul id="jhjhj" className={style.navItemsUser} style={{ display: "none", opacity: "0" }}>
                      <li>
                        <span
                          onClick={() => setAuthPopup((value) => !value)}
                          ref={refAuthPopup}
                        >
                          {/* <GlobalAccount /> */}
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8" clip-path="url(#clip0_295_359)">
                              <path d="M6.6 19.92V19.8C6.6 18.12 9 16.8 12 16.8C15 16.8 17.4 18.12 17.4 19.8V19.92C19.92 18.24 21.6 15.24 21.6 12C21.6 6.72 17.28 2.4 12 2.4C6.72 2.4 2.4 6.72 2.4 12C2.4 15.36 4.08 18.24 6.6 19.92ZM12 24C5.4 24 0 18.6 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 18.6 18.6 24 12 24ZM12 13.2C10.32 13.2 9 11.88 9 10.2C9 8.52 10.32 7.2 12 7.2C13.68 7.2 15 8.52 15 10.2C15 11.88 13.68 13.2 12 13.2Z" fill="#444444" />
                            </g>
                            <defs>
                              <clipPath id="clip0_295_359">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>

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
                  <div
                    className={style.hdrToggelIcon}
                    onClick={() => setMenuToggel((value) => !value)}
                  >
                    {menuToggel == true ? <GlobalClose /> : <GlobalMenu />}
                  </div>
                  {/* <div class="insta-certify-header-searchbar">
                  <div class="insta-certify-header-searchbar-menu">
                    <input
                      type="text"
                      placeholder="Search"
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
                </div> */}
                  <div className="search_das">
                    <input type="text" placeholder="Search" />
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
                  <div className="insta-cartify-bbtn">
                    <div className="insta-cartify-leftbttm">
                      {/* <div className="headline">
                      <hr />
                    </div> */}
                      <div>

                        <ul id="hjhj" className={style.navItemsUser} style={{ display: "block" }}>
                          <li>
                            <span
                              onClick={() => setAuthPopup1((value) => !value)}
                              ref={refAuthPopup1}
                            >
                              {/* <GlobalAccount /> */}
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.8" clip-path="url(#clip0_295_359)">
                                  <path d="M6.6 19.92V19.8C6.6 18.12 9 16.8 12 16.8C15 16.8 17.4 18.12 17.4 19.8V19.92C19.92 18.24 21.6 15.24 21.6 12C21.6 6.72 17.28 2.4 12 2.4C6.72 2.4 2.4 6.72 2.4 12C2.4 15.36 4.08 18.24 6.6 19.92ZM12 24C5.4 24 0 18.6 0 12C0 5.4 5.4 0 12 0C18.6 0 24 5.4 24 12C24 18.6 18.6 24 12 24ZM12 13.2C10.32 13.2 9 11.88 9 10.2C9 8.52 10.32 7.2 12 7.2C13.68 7.2 15 8.52 15 10.2C15 11.88 13.68 13.2 12 13.2Z" fill="#444444" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_295_359">
                                    <rect width="24" height="24" fill="white" />
                                  </clipPath>
                                </defs>
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
                      <div className="safaio">
                        {
                          userSession == null || typeof userSession == "undefined" ? <Link href={"/cart"}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8" clip-path="url(#clip0_295_362)">
                              <path d="M8 4.23529H24L21.3333 16.9412H5.33333V2.82353H0V0H8V4.23529ZM8 7.05882V14.1176H19.2L20.6667 7.05882H8ZM5.33333 24V21.1765H10.2667V24H5.33333ZM14.6667 24V21.1765H19.6V24H14.6667Z" fill="#444444" />
                            </g>
                            <defs>
                              <clipPath id="clip0_295_362">
                                <rect width="24" height="24" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          </Link> :
                            <Link href={"/cart"}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.8" clip-path="url(#clip0_295_362)">
                                <path d="M8 4.23529H24L21.3333 16.9412H5.33333V2.82353H0V0H8V4.23529ZM8 7.05882V14.1176H19.2L20.6667 7.05882H8ZM5.33333 24V21.1765H10.2667V24H5.33333ZM14.6667 24V21.1765H19.6V24H14.6667Z" fill="#444444" />
                              </g>
                              <defs>
                                <clipPath id="clip0_295_362">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            </Link>

                        }
                        <p>Cart</p>
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



                {/* yaha dalna hai  */}


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

      </>
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
