import React, { useEffect, useRef, useState } from "react";
import style from "./../css/rentalDetails.module.scss";
import HeadSEO from "../../components/common/Head/head";
import Image from "next/image";
import transition from "react-element-popper/animations/transition";
import "react-multi-date-picker/styles/layouts/mobile.css";
import Cookies from "js-cookie";
import $ from "jquery";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

//Slider css files
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//ICONS
import EventDetGrid from "../../components/common/svg/eventDetials/grid";
import GlobalClose from "../../components/common/svg/global/close";
import GlobalHeaderFooter from "../../utils/common/global-header-footer";
import GlobalArrowDown from "../../components/common/svg/global/arrowDown";
import DatePicker, { DateObject } from "react-multi-date-picker";
import EventDetMinus from "../../components/common/svg/eventDetials/minus";
import EventDetPlus from "../../components/common/svg/eventDetials/plus";
import useBodyOutsideClick from "../../utils/body-outside-click";
import RentalBed from "../../components/common/svg/rentals/bed";
import RentalComfortableBeds from "../../components/common/svg/rentals/comfortable-beds";
import RentalHikingTrails from "../../components/common/svg/rentals/hiking-trails";
import RentalAiConditioner from "../../components/common/svg/rentals/ai-conditioner";
import RentalHotTub from "../../components/common/svg/rentals/hot-tub";
import RentalWiFi from "../../components/common/svg/rentals/wi-fi";
import RentalHousekeeping from "../../components/common/svg/rentals/housekeeping";
import RentalPrivateBathrooms from "../../components/common/svg/rentals/private-bathrooms";
import RentalSecurity from "../../components/common/svg/rentals/security";
import RentalBath from "../../components/common/svg/rentals/bath";
import RentalKitchenette from "../../components/common/svg/rentals/kitchenette";
import RentalHeatingAndCooling from "../../components/common/svg/rentals/heating-and-cooling";
import RentalLaundryFacilities from "../../components/common/svg/rentals/laundry-facilities";
import RentalSmartTvs from "../../components/common/svg/rentals/smart-tvs";
import RentalFitnessCenter from "../../components/common/svg/rentals/fitness-center";
import RentalCoffeeMaker from "../../components/common/svg/rentals/coffee-maker";
import EventDetLocation from "../../components/common/svg/eventDetials/location";
import GlobalArrowUp from "../../components/common/svg/global/arrowUp";
import RentalContactLess from "../../components/common/svg/rentals/contact-less";
import GlobalCall from "../../components/common/svg/global/call";
import GlobalEmail from "../../components/common/svg/global/email";

var settingsMorePhotos = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: "linear",
};

export default function RentalDetails(pageProp) {

  const product =  pageProp?.page_content?.lodging;
  const aminities_url =  product?.aminities_url;
  const features_url =  product?.features_url;

  const router = useRouter();
  const [message, setMessage] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);
  const { data: session, status } = useSession();
  
  const [numberOfMonths, setNumberOfMonths] = useState(2);
  const [checkinDate, setCheckinDate] = useState(
    new DateObject().subtract(0, "days")
  );
  const [checkoutDate, setCheckoutDate] = useState();
  const funCheckinDate = (date) => {
    setCheckinDate(date);
    setCheckoutDate(null);
    //setCheckoutDate(date.add(1, "days"));
  };

  const [buttonAddtocart, SetButtonAddtocart] = useState(false);
  const [guestsPopup, setGuestsPopup] = useState(false);
  const [guestsTotal, setGuestsTotal] = useState("Add guests");
  const [quantityAdults, setQuantityAdults] = useState(0);
  const [quantityChildren, setQuantityChildren] = useState(0);
  const [quantityInfants, setQuantityInfants] = useState(0);
  const refGuestsPopup = useRef(null);

  const [cabinPopup, setCabinPopup] = useState(false);
  const [quantityCabin, setQuantityCabin] = useState(1);
  const refCabinPopup = useRef(null);

  const finalQuantity = parseFloat(checkoutDate?.day - checkinDate?.day == 0 ? 1 : checkoutDate?.day - checkinDate?.day);


  useBodyOutsideClick(refGuestsPopup, () => {
    setGuestsPopup(false);
    const total3in = quantityAdults + quantityChildren + quantityInfants;
    if (total3in > 0) {
      setGuestsTotal(total3in + " Guests");
    } else {
      setGuestsTotal("Add guests");
    }
  });

  useBodyOutsideClick(refCabinPopup, () => {
    setCabinPopup(false);
    if (
        quantityAdults + quantityChildren  > 0 && quantityCabin > 0 &&
        typeof checkinDate?.format() != "undefined" &&
        typeof checkoutDate?.format() != "undefined"
      ) {
        SetButtonAddtocart(true);
      } else {
        SetButtonAddtocart(false);
      }

  });

  const handleSubmit = async (e) => {
      e.preventDefault();
      const product_id = [];
      setMessage('')
      setFormSubmit(true);

      const bigcommerce_id = $("#bigcommerce_id").val();


      //Get product Start
      const reqFetchProduct = await fetch(process.env.next.api_url+"collections/product-by-id", {method:"POST", headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({"id":bigcommerce_id}) });
      const resultProduct = await reqFetchProduct.json();
      const product = resultProduct?.data?.site?.product;
      const productOptions = product?.productOptions?.edges;
      //Get product End

      const option_selections = [];
      productOptions?.length && productOptions?.map((ls)=>{
        if(ls?.node?.displayName == "Check-in"){
          option_selections.push({"option_id":ls.node.entityId, "option_value": checkinDate?.format() })
        }
        if(ls?.node?.displayName == "Checkout"){
          option_selections.push({"option_id":ls.node.entityId, "option_value": checkoutDate?.format() })
        }
        if(ls?.node?.displayName == "Adults"){
          option_selections.push({"option_id":ls.node.entityId, "option_value": quantityAdults })
        }
        if(ls?.node?.displayName == "Children"){
          option_selections.push({"option_id":ls.node.entityId, "option_value": quantityChildren })
        }
        if(ls?.node?.displayName == "Infants"){
          option_selections.push({"option_id":ls.node.entityId, "option_value": quantityInfants })
        }
      });


      const itemsData = [];
      if(bigcommerce_id > 0){
        itemsData.push({
          "quantity": finalQuantity,
          "product_id": bigcommerce_id,
          "option": JSON.stringify(option_selections)
        })
      }
     
      if(itemsData.length > 0){
          setFormSubmit(true)
          const nx_cart_id = Cookies.get('nx_cart_id');

          const cartData = [{
              customer_id: session ? session?.user?.bcId : 0,
              nx_cart_id: typeof nx_cart_id != "undefined" ? nx_cart_id : 0,
          }];
          
          cartData.push({"products":itemsData});

          try {

              const createCart = await fetch(process.env.next.api_url+"cart/create",{
                  method:"post",
                  headers:{
                      "Accept": 'application/json',
                      'Content-Type': 'application/json'
                  },
                  body:JSON.stringify(cartData)
              });
              const cartRes = await createCart.json();

              console.log('cartRes')
              console.log(cartRes)

              

              if(cartRes?.status && cartRes?.status == 404){
                  Cookies.remove('nx_cart_id');
                  setMessage("Something went wrong");
                  setFormSubmit(false)
                  $(".priceWithIcon .count").text('0.00')
                  $(".btnCheckout span").html('0.00');
                  return false;
              }
              if(cartRes?.status && cartRes?.status == 422){
                  setMessage("Event is not available for now.");
                  setFormSubmit(false)
                  $(".priceWithIcon .count").text('0.00')
                  $(".btnCheckout span").html('0.00');
                  return false;
              }
              if(cartRes?.status && cartRes?.status == 409){
                setMessage(cartRes?.title);
                setFormSubmit(false)
                return false;
              }

              
              const cart_id = cartRes?.data?.id;
              if(typeof cart_id != "undefined" && cart_id != ""){
                  console.log(cartRes?.data)
                  Cookies.set('nx_cart_id', cart_id, { expires: 4 });
                  router.push('/cart');
              }else{
                  Cookies.remove('nx_cart_id');
                  setMessage("Something went wrong");
                  setFormSubmit(false)
                  $(".priceWithIcon .count").text('0.00')
                  $(".btnCheckout span").html('0.00');
                  return false;
              }

              
          } catch (error) {
              Cookies.remove('nx_cart_id');
              setMessage("Something went wrong");
              setFormSubmit(false)
              $(".priceWithIcon .count").text('0.00')
              $(".btnCheckout span").html('0.00');
              return false;
          }

          
      }else{
          $(".btnCheckout").attr('disabled','disabled');
          setMessage("Please enter at least one quantity");
          setFormSubmit(false)
      }
  }

  useEffect(function () {
    if (window.innerWidth <= 991) {
      setNumberOfMonths(1);
    }
  }, []);

  return (
    <div className={style.rentalDetails}>
      <HeadSEO title={product?.seo_title} description={product?.seo_description} image={false} />

      <div className="container container_rentalDetails">


        {/* All images */}
        {product?.image?.length > 0 ? ( 
          <div className={style.rentalFigure}>

            {/* Left */}
            <div className={style.left}>
              <Image
                className={"style.figure"}
                src={product?.image[0]}
                width="620"
                height="441"
                alt={product?.title}
                quality={100}
                priority={true}
              />
            </div>

            {/* Right */}
            { product?.image?.length > 1 ? (
              <div className={style.right}>

                <div className={style.rightInner}>
                  <Image
                    className={"style.figure"}
                    src={product?.image[1]}
                    width="400"
                    height="217"
                    alt={product?.title}
                    quality={100}
                    priority={true}
                  />
                </div>

                { product?.image?.length > 2 ? (
                  <div className={style.rightInner}>
                    <Image
                      className={"style.figure"}
                      src={product?.image[2]}
                      width="400"
                      height="217"
                      alt={product?.title}
                      quality={100}
                      priority={true}
                    />
                  </div>
                ) : "" }

              </div>
            ) : "" }

            <button
              onClick={() => {
                setShowPhotos(true);
              }}
              type="button"
              className={style.btn_show_more_photos}
            >
              <EventDetGrid />
              Show More Photos
            </button>
          </div>
        ) : "" }


        {/* Body Content */}
        <div className={style.rentalBody}>
          <div className={style.left}>
            <h1 className={style.rentalTitle}>{product?.title}</h1>

            <div className={style.rentalDescription}>
            
              <div dangerouslySetInnerHTML={ {__html:product?.short_description} }></div>
              <div dangerouslySetInnerHTML={ {__html:product?.description} }></div>
            </div>
          </div>

          {/* Right */}
          {
            product?.bigcommerce_id != null ? (
            <div className={style.right}>
              {message != "" ? (
                <span className={style.errorMessage + " errorMessage"}>
                  {message}
                </span>
              ) : (
                ""
              )}
              {formSubmit == true ? (
                <span className="loadingOverlay" style={{ display: "block" }} />
              ) : (
                ""
              )}

              {product?.ticket_price != null ? 
              <p className={style.rentalPrice}>
                ${product?.ticket_price?.toFixed(2)} <span>/night</span>
              </p>
              : ""}

              <div className={style.rentalOption}>
                <div className={style.optionDates}>
                  <div className={style.optionDate}>
                    <label htmlFor="date-check-in">Check-In</label>
                    <DatePicker
                      className={numberOfMonths == 1 ? "rmdp-mobile" : ""}
                      calendarPosition={`bottom-right`}
                      id="date-check-in"
                      wrapperClassName="datepicker"
                      format="MM/DD/YYYY"
                      minDate={new Date(product?.start_date)}
                      maxDate={new Date(product?.end_date)}
                      onChange={(e) => {
                        funCheckinDate(e);
                      }}
                      placeholder="Add Date"
                      editable={false}
                      portal
                      hideOnScroll
                      numberOfMonths={numberOfMonths}
                      value={checkinDate}
                      animations={[transition({ duration: 200, from: 35 })]}
                    />
                  </div>
                  <div
                    className={style.optionDate + " " + style.optionDateCheckout}
                  >
                    <label htmlFor="date-checkout">Checkout</label>
                    <DatePicker
                      className={numberOfMonths == 1 ? "rmdp-mobile" : ""}
                      calendarPosition={`bottom-right`}
                      id="date-checkout"
                      wrapperClassName="datepicker"
                      format="MM/DD/YYYY"
                      minDate={new Date(product?.start_date)}
                      maxDate={new Date(product?.end_date)}
                      onChange={setCheckoutDate}
                      placeholder="Add Date"
                      editable={false}
                      portal
                      hideOnScroll
                      value={checkoutDate?.format()}
                      numberOfMonths={numberOfMonths}
                      animations={[transition({ duration: 200, from: 35 })]}
                    />
                  </div>
                </div>

                <div
                  className={style.optionNoGuests}
                  onClick={() => {
                    setGuestsPopup(true);
                  }}
                  ref={refGuestsPopup}
                >
                  <div className={style.optionNoGuest}>
                    <label htmlFor="date-guests">Guests</label>
                    <input
                      type="text"
                      id="date-guests"
                      name="date-guests"
                      placeholder="0 Guests"
                      value={guestsTotal}
                      readOnly
                    />
                    <span className={style.arrowDown}>
                      <GlobalArrowDown />
                    </span>
                  </div>

                  {/* guests_popup start */}
                  
                  {guestsPopup == true ? (
                    <div className={style.guests_popup}>
                      <div className={style.name_value}>
                        <div className={style.lblTitle}>
                          <span className={style.type}>Adults</span>
                        </div>
                        <div className={style.formIncrement}>
                          <button
                            onClick={() => {
                              quantityAdults > 0
                                ? setQuantityAdults(quantityAdults - 1)
                                : setQuantityAdults(0);
                            }}
                            className={style.btnIncDec + " " + style.btnMinus}
                            type="button"
                          >
                            <EventDetMinus />
                          </button>
                          <span className={style.inputQty}>{quantityAdults}</span>
                          {
                            product?.guest_allowed?.adult >= quantityAdults ? "" : setQuantityAdults(product?.guest_allowed?.adult)
                          }
                          <button
                            onClick={() => {
                              setQuantityAdults(quantityAdults + 1);
                            }}
                            className={style.btnIncDec + " " + style.btnPlus}
                            type="button"
                          >
                            <EventDetPlus />
                          </button>
                        </div>
                      </div>

                      <div className={style.name_value}>
                        <div className={style.lblTitle}>
                          <span className={style.type}>Children</span>
                          <span className={style.info}>ages 2-12</span>
                        </div>
                        <div className={style.formIncrement}>
                          <button
                            onClick={() => {
                              quantityChildren > 0
                                ? setQuantityChildren(quantityChildren - 1)
                                : setQuantityChildren(0);
                            }}
                            className={style.btnIncDec + " " + style.btnMinus}
                            type="button"
                          >
                            <EventDetMinus />
                          </button>
                          <span className={style.inputQty}>
                            {quantityChildren}
                          </span>
                          {
                            product?.guest_allowed?.child >= quantityChildren ? "" : setQuantityChildren(product?.guest_allowed?.child)
                          }
                          <button
                            onClick={() => {
                              setQuantityChildren(quantityChildren + 1);
                            }}
                            className={style.btnIncDec + " " + style.btnPlus}
                            type="button"
                          >
                            <EventDetPlus />
                          </button>
                        </div>
                      </div>

                      <div className={style.name_value}>
                        <div className={style.lblTitle}>
                          <span className={style.type}>Infants</span>
                          <span className={style.info}>under 2</span>
                        </div>
                        <div className={style.formIncrement}>
                          <button
                            onClick={() => {
                              quantityInfants > 0
                                ? setQuantityInfants(quantityInfants - 1)
                                : setQuantityInfants(0);
                            }}
                            className={style.btnIncDec + " " + style.btnMinus}
                            type="button"
                          >
                            <EventDetMinus />
                          </button>
                          <span className={style.inputQty}>
                            {quantityInfants}
                          </span>
                          {
                            product?.guest_allowed?.infant >= quantityInfants ? "" : setQuantityInfants(product?.guest_allowed?.infant)
                          }
                          <button
                            onClick={() => {
                              setQuantityInfants(quantityInfants + 1);
                            }}
                            className={style.btnIncDec + " " + style.btnPlus}
                            type="button"
                          >
                            <EventDetPlus />
                          </button>
                        </div>
                      </div>

                      <div className={style.name_value}>
                        <div className={style.lblTitle}>
                          <span className={style.info}>
                            Infants don't count toward the number of guests
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* guests_popup end */}
                </div>

                <div
                  className={style.optionNoGuests}
                  onClick={() => { setCabinPopup(true); }}
                  ref={refCabinPopup}
                  style={{display:'none'}} 
                >
                  <div className={style.optionNoGuest}>
                    <label htmlFor="date-guests">Cabin</label>
                    <input
                      type="text"
                      id="date-guests"
                      name="date-guests"
                      placeholder="0 Cabin"
                      value={quantityCabin + ' Cabin'}
                      readOnly
                    />
                    <span className={style.arrowDown}>
                      <GlobalArrowDown />
                    </span>
                  </div>

                  {/* Cabin popup start */}
                  {cabinPopup == true ? (
                    <div className={style.guests_popup}>
                      <div className={style.name_value}>
                        <div className={style.lblTitle}>
                          <span className={style.type}>Number of Cabin</span>
                        </div>
                        <div className={style.formIncrement}>
                          <button
                            onClick={() => {
                              quantityCabin > 0
                                ? setQuantityCabin(quantityCabin - 1)
                                : setQuantityCabin(0);
                            }}
                            className={style.btnIncDec + " " + style.btnMinus}
                            type="button"
                          >
                            <EventDetMinus />
                          </button>
                          <span className={style.inputQty}>{quantityCabin}</span>
                          {
                            product?.guest_allowed?.cabin >= quantityCabin ? "" : setQuantityCabin(product?.guest_allowed?.cabin)
                          }
                          <button
                            onClick={() => {
                              setQuantityCabin(quantityCabin + 1);
                            }}
                            className={style.btnIncDec + " " + style.btnPlus}
                            type="button"
                          >
                            <EventDetPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Cabin popup End */}
                </div>
              </div>

              {buttonAddtocart == true ? (
                <div className={style.rentalSelectedOption}>
                  <p className={style.minimumMessage}>Minimum stay: 1 night</p>
                  <div className={style.selectedOption}>
                    <span className={style.name}>
                      { product?.price != null ? `$${product?.price} x ` : "" }
                      {finalQuantity} {" "}
                      night
                    </span>
                    <span className={style.value}>${(product?.price * finalQuantity)?.toFixed(2)} </span>
                  </div>
                  <div className={style.selectedOption}>
                    <span className={style.name}>Service fee</span>
                    <span className={style.value}>$0.00</span>
                  </div>
                  <div className={style.selectedOption + " " + style.isBold}>
                    <span className={style.name}>Total before taxes</span>
                    <span className={style.value}>${(product?.price * (checkoutDate?.day - checkinDate?.day == 0 ? 1 : checkoutDate?.day - checkinDate?.day) + 0).toFixed(2)}</span>
                  </div>
                </div>
              ) : (
                ""
              )}

              <form method='post' id='formVariants' onSubmit={handleSubmit}>
                <input type="hidden" className='bc_id' id="bigcommerce_id" name={"bc_id"} value={product?.bigcommerce_id} />

                <div className={style.formAction}>
                  <button
                    className={style.buttonAddtocart}
                    disabled={buttonAddtocart == true ? false : true}
                  >
                    Reserve
                  </button>
                </div>
              </form>

            </div>
            ) :""}
          
        </div>

        {/* What this place offers */}
        {product?.features?.length > 0 ?  
        <div className={style.rentalPlaceDetails}>
          <h2>What this place offers</h2>
          <div className={style.rentalPlaceBody}>
            {
              product?.features?.map((ls, i)=>(
                <div key={i} className={style.rentalPlaceContent}>
                  <Image
                    className={"style.figure"}
                    src={features_url+"/"+ls?.image}
                    width="22"
                    height="22"
                    alt={ls?.name}
                    quality={100}
                    priority={true}
                  />
                  <h5>{ls.name}</h5>
                  <h6>{ls.sub_title}</h6>
                </div>
              ))
            }
          </div>
        </div>
        : ""}

        {/* Where you'll sleep */}
        {product?.aminities?.length > 0 ?  
        <div className={style.rentalSleepDetails}>
          <h2>Where you'll sleep</h2>
          <ul>
            {
              product?.aminities?.map((ls, i)=>(
              <li key={i}>
                {!ls?.image?.match("src=") ? 
                  <Image
                    className={"style.figure"}
                    src={aminities_url+"/"+ls?.image}
                    width="22"
                    height="22"
                    alt={ls?.name}
                    quality={100}
                    priority={true}
                  />
                :""}
                {ls.name}
              </li>
            ))
            }
          </ul>

            {product?.aminities?.length >= 9 ?  
            <button
              className={style.buttonMore}
              onClick={() => {
                setShowAmenities((value) => !value);
              }}
            >
              Show all {product?.aminities?.length} amenities
            </button>
            : ""}
        </div>
        : ""}

        <div className={style.location_details}>
          <h2>About this area</h2>
          <div className={style.location_detail}>
            <span className={style.icon}>
              <EventDetLocation />
            </span>
            <div className={style.content}>
              <h4>Location</h4>
              <p>
                {product?.location}
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        {product?.location_iframe != "" ?
        <div className={style.googleMap}>
          <div className={style.rentalDescInfo} dangerouslySetInnerHTML={ {__html:product?.location_iframe} }></div>
        </div>
        : ""}


        { product.owner ? 
        <div className={style.contactDetails} style={{display:'none'}}>
          <div className={style.left}>
            <RentalContactLess />
            <h4>Contact {product?.owner?.name}</h4>
            <p>{product?.owner?.respon_time}</p>
          </div>
          <div className={style.right}>
            <div className={style.contactInfo}>
              <div className={style.icon}>
                <GlobalCall />
              </div>
              <div className={style.info}>
                <p>Phone</p>
                <a href={`tel:${product?.owner?.phone}`}>{product?.owner?.phone}</a>
              </div>
            </div>

            <div className={style.contactInfo}>
              <div className={style.icon}>
                <GlobalEmail />
              </div>
              <div className={style.info}>
                <p>Email address</p>
                <a href={`mailto:${product?.owner?.email}`}>{product?.owner?.email}</a>
              </div>
            </div>
          </div>
        </div>
        : ""}

        {/* Show more photos gallrey */}
        {showPhotos ? (
          <div className={style.morePhotosPopups + " morePhotosPopups"}>
            <span
              onClick={() => {
                setShowPhotos(false);
              }}
            >
              <GlobalClose className={style.close} />{" "}
            </span>
            <div className={style.inner}>
              <Slider {...settingsMorePhotos}>
                  {product?.image?.length > 0 && product?.image?.map((data)=>(
                    <>
                      <Image
                        src={data}
                        width="1280"
                        height="600"
                        alt={product?.title}
                        quality={100}
                      />
                    </>
                  ))}
              </Slider>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* More Description Popup */}
        {showDescription ? (
          <div className={style.popupCommon}>
            <div className={style.inner}>
              <span
                onClick={() => {
                  setShowDescription(false);
                }}
              >
                <GlobalClose className={style.close} />{" "}
              </span>

              <div className={style.rentalDescMore}>
                <h2 className={style.rentalDescMoreHead}>About this hotel</h2>
                <div className={style.rentalDescInfo} dangerouslySetInnerHTML={ {__html:product?.description} }></div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Amenities Popup */}
        {showAmenities ? (
          <div className={style.popupCommon}>
            <div className={style.inner}>
              <span
                onClick={() => {
                  setShowAmenities(false);
                }}
              >
                <GlobalClose className={style.close} />{" "}
              </span>

              <div className={style.rentalSleepDetails}>
                <h2>What this place offers</h2>
                <ul>
                  {
                      product?.aminities?.map((ls, i)=>(
                      <li key={i}>
                        {!ls?.image?.match("src=") ? 
                          <Image
                            className={"style.figure"}
                            src={aminities_url+"/"+ls?.image}
                            width="22"
                            height="22"
                            alt={ls?.name}
                            quality={100}
                            priority={true}
                          />
                        :""}
                        {ls.name}
                      </li>
                    ))
                    }
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const urlSlug = context?.params?.slug;
  const globalSettings = await GlobalHeaderFooter();
  
  if (urlSlug != "") {

    
    const reqFetch = await fetch(process.env.server.api+"get-lodging-details/"+urlSlug);
    const reqDetial = await reqFetch.json();

    return {
        props: {
            page_content: reqDetial,
            navbar: globalSettings?.header,
            footer: globalSettings?.footer
        },
    };


  } else {
    return {
      props: {
        page_content: false,
        navbar: globalSettings?.header,
        footer: globalSettings?.footer
      },
      notFound: true,
    };
  }
}
