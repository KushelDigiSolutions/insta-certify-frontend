import React, { useState } from 'react'
import Link from 'next/link';
import ReCAPTCHA from 'react-google-recaptcha';


export default function Footer(footerProps) {
  if (typeof footerProps.footerProps == "undefined" || footerProps.footerProps == false) { return ""; }
  else {

    const footerData = footerProps.footerProps;

    let footerItems = null;
    if (footerData?.items) {
      footerItems = JSON.parse(JSON.parse(footerData?.items));
    }

    const itemsSetting = {
      "--footerBCColor": footerData?.background_color,
      "--footerItemColor": footerData?.parent_text_color,
      "--footerItemHoverColor": footerData?.parent_text_hover_color
    }

    const stop = (e) => {
      document.getElementById("jj").style.scrollBehavior = "none"
    }

    const [value,setValue] = useState({
      name:"",
      email:"",
      phone:"",
      message:""
    })

    const changeHandler = (e)=>{
      const {name , value} = e.target;

      if (name === "phone" && value.length > 10) {
        return
    }
  
       setValue((prev)=>({
        ...prev ,
        [name]:value
       }))
    }

    const handleRecaptchaChange = (value) => {
      console.log('Captcha value:', value);
    };

    const [sendvalue , setsetndvalue] = useState(false);

    const submitForm = async (e) => {
      e.preventDefault();
      setsetndvalue(true);
      // https://mailer.instacertify.com/api/v1/sendMail
      const resp = await fetch('https://mailer.instacertify.com/api/v1/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
           name:value.name,
           email:value.email,
           phone:value.phone,
           message:value.message
        }),
      })
        .then(response => response.json())
        .then(data => alert(data.message))
        .catch(error => console.error('Error:', error));
  
        setValue({
          name:"",
          email:"",
          phone:"",
          message:""
        })

        console.log("resp" , resp);

        setsetndvalue(false);

    }

   
  
    return (

  
      <>
        <footer
          className="site-footer style1"
        >
          <div className="footer-top">
            <div className="container amrgin-left10px">

              <div className="row rwing">

              {/* col-md-3 col-sm-12 */}
                <div className="rwing1">
                  <div className="widget widget_getintuch" height="240px">
                    <div className='foot_logs'>
                        <img src='../images/lo.svg' alt='hh'/>
                    </div>
                    <h4 className="footer-title kl_title">Contact Us</h4>

                    <ul className="contactus-footer font-opensans">
                      <li >
                        <div className='cort'>
                          <svg width="19" height="29" viewBox="0 0 19 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2589_829)">
                              <path d="M19 9.86526C18.9911 11.4905 18.5705 13.0019 17.7783 14.4147C15.2492 18.9248 12.7179 23.4338 10.1676 27.9328C10.0241 28.1847 9.72033 28.4772 9.46776 28.5002C9.26636 28.5177 8.95815 28.1913 8.82129 27.9504C6.27327 23.4513 3.72748 18.95 1.21395 14.4312C-1.93825 8.76677 1.333 1.92065 7.7687 0.667734C12.9226 -0.335473 18.1032 3.27761 18.8454 8.39988C18.9155 8.88505 18.9488 9.3757 18.9989 9.86417L19 9.86526ZM9.49001 5.20188C6.87634 5.20188 4.74669 7.27948 4.73333 9.84336C4.71998 12.3842 6.873 14.5177 9.46108 14.5286C12.0803 14.5396 14.2578 12.4083 14.2456 9.84445C14.2333 7.28167 12.1037 5.20188 9.49001 5.20188Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_2589_829">
                                <rect width="19" height="28" fill="white" transform="translate(0 0.5)" />
                              </clipPath>
                            </defs>
                          </svg>
                          <h4>ADDRESS (CORPORATE <br /> OFFICE)</h4>
                        </div>

                        <span className='bas'>A-34, Sector 63 A, Noida, <br/>
                         Uttar Pradesh 201307</span>

                      </li>
                     
                      <li >
                        <div className='cort'>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3558 0.00792976C12.1328 -0.0240483 11.9087 0.0419064 11.7304 0.183809C11.5472 0.32771 11.4326 0.535567 11.4077 0.768408C11.355 1.23908 11.6946 1.66479 12.1646 1.71776C15.4063 2.07951 17.9259 4.60477 18.2904 7.85654C18.3392 8.29224 18.7047 8.62101 19.1409 8.62101C19.1738 8.62101 19.2057 8.61902 19.2385 8.61502C19.4666 8.59004 19.6697 8.47711 19.8132 8.29724C19.9556 8.11736 20.0203 7.89351 19.9944 7.66467C19.5403 3.60746 16.4002 0.45862 12.3558 0.00792976ZM12.4181 3.48994C11.942 3.402 11.5048 3.70579 11.4142 4.17047C11.3236 4.63515 11.6283 5.08884 12.0914 5.17978C13.4857 5.45159 14.5623 6.53085 14.8351 7.92989V7.93089C14.9128 8.33361 15.2674 8.62641 15.6757 8.62641C15.7305 8.62641 15.7852 8.62141 15.841 8.61142C16.3041 8.51849 16.6088 8.0658 16.5182 7.60012C16.1109 5.51055 14.5025 3.89666 12.4181 3.48994ZM14.0001 13.0905C14.4515 12.8302 14.9615 12.5362 15.6047 12.673C16.1873 12.7959 18.1731 14.4078 18.7169 14.9665C19.0734 15.3322 19.2716 15.7099 19.3025 16.0877C19.3562 17.5697 17.3425 19.2615 16.976 19.4724C16.489 19.8231 15.9224 20 15.286 20C14.6357 20 13.9106 19.8151 13.1199 19.4464C8.82956 17.6556 2.27553 11.231 0.542661 6.97395C-0.17638 5.38903 -0.18136 4.08193 0.53071 3.09961C0.814542 2.63892 2.43288 0.713245 3.88192 0.774204C4.26733 0.807181 4.64179 1.00505 5.00928 1.3648C5.56499 1.90942 7.13653 3.90106 7.25803 4.48565C7.39247 5.13521 7.09769 5.65185 6.83576 6.10554C6.7799 6.20307 6.70463 6.31881 6.62217 6.4456C6.3092 6.92683 5.89264 7.56735 6.04004 7.97626C7.09669 10.5705 9.53764 12.8339 12.133 13.8972C12.5343 14.0431 13.1745 13.6235 13.6542 13.3092C13.7791 13.2273 13.8932 13.1525 13.9893 13.0967L14.0001 13.0905Z" fill="white" />
                          </svg>
                          <h4>PHONE</h4>
                        </div>

                        <a style={{ textDecoration: "none" }} href='tel:+919999118039'><span className='bas'>+91 9999118039</span></a>
                      </li>

                      <li>
                        <div className='cort'>
                          <svg className='oklo' width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2589_914)">
                              <path d="M18.9907 0.125222C18.8392 0.288556 18.7564 0.383444 18.6674 0.472111C16.0029 3.136 13.3385 5.79911 10.6733 8.46222C10.1609 8.974 9.83983 8.97478 9.32897 8.46378C6.66376 5.80067 3.99934 3.13756 1.33491 0.472889C1.24508 0.383444 1.1615 0.287778 1.01074 0.126C1.3107 0.0754445 1.53488 0.00466667 1.75828 0.00466667C7.25273 -0.00155556 12.7472 -0.00155556 18.2409 0.00466667C18.465 0.00466667 18.6884 0.0746667 18.9907 0.125222Z" fill="white" />
                              <path d="M12.8825 7.89824C14.9072 9.88857 16.9045 11.8517 18.9604 13.8731C18.6949 13.9214 18.4746 13.9952 18.2543 13.996C12.7473 14.0022 7.23961 14.0022 1.73266 13.996C1.52098 13.996 1.30851 13.9276 1.07886 13.8871C3.11526 11.8859 5.11104 9.92513 7.14432 7.92779C7.58956 8.37268 8.12698 8.91091 8.66673 9.44602C9.16666 9.94302 9.77125 10.1468 10.4485 9.94302C10.7703 9.84657 11.089 9.65213 11.339 9.42579C11.8951 8.92335 12.4076 8.37346 12.8825 7.89746V7.89824Z" fill="white" />
                              <path d="M0.115607 12.9105C0.0835807 12.7184 0.00703015 12.4672 0.00624902 12.2167C-0.00234338 8.7424 -0.00156226 5.26807 0.0054679 1.79451C0.0054679 1.54329 0.0788939 1.29207 0.114045 1.06885C2.1317 3.06307 4.12904 5.03863 6.1053 6.99162C4.1431 8.93062 2.14263 10.907 0.115607 12.9105Z" fill="white" />
                              <path d="M19.8712 12.9879C17.8207 10.9587 15.8296 8.987 13.8557 7.03245C15.8538 5.05845 17.8543 3.08211 19.8727 1.08789C19.9071 1.26834 19.993 1.51022 19.9938 1.75211C20.0024 5.25134 20.0024 8.75134 19.9938 12.2506C19.9938 12.4886 19.9165 12.7273 19.8712 12.9871V12.9879Z" fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_2589_914">
                                <rect width="20" height="14" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>

                          <h4>EMAIL</h4>
                        </div>

                        <a style={{ textDecoration: "none" }} href='mailto:contact@instacertify.com'><span className='bas bask1'>Contact@instacertify.com</span></a>
                      </li>

                    </ul>
                
                  </div>
                </div>



                {
                  footerItems?.length > 0 && 
                   footerItems?.map((footer , index)=>(
                    // col-md-3 col-sm-12
                    <div key={index} className="rwing2">
                    <div className="widget">
                      <h4 className="footer-title">{footer?.parentItems?.title}</h4>
                      {
                        footer?.subItems?.length > 0 && 
                      
                      <ul className="list-2 font-opensans lopl">
                        <marquee
                          
                          
                          behavior="static"
                          direction="up"
                          scrollamount={2}
                          height="260px"
                          onmouseover={() => { this.behavior = "static" }}
                          onmouseout={() => { this.behavior = "scroll" }}
                        >
                          {
                            footer?.subItems?.map((subitem , index)=>(
                              <li key={index}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                              </svg>
    
                              <a href={subitem?.link}>{subitem?.title}</a>
                            </li>
                            ))
                          }
                        </marquee>
                      </ul>

  }
                    
  
                    </div>
                  </div>
                   ))
                }

             


{/* col-md-3 col-sm-12 */}
                <div className="rwing3 margin-top25">

                {/* <div className="google_translte" id="google_translate_element" ></div> */}


                  <div className="widget">
                    
                    <form onSubmit={submitForm}  >
                      <h4 className="footer-title quick jk_tit">Quick Contact</h4>
                      <div className="footerformarea">
                        <div className=" footer-form-pad0">
                          <div className="">

                            <div className="input-group">
                              
                              <span className="input-group-addon">
                                <i className="ti-user text-primary" />
                              </span>
                              <input
                                name="name"
                                value={value.name}
                                onChange={changeHandler}
                                type="text"
                                required
                                className=""
                                placeholder="Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" footer-form-pad0">
                          <div className="">
                            <div className="input-group">
                              {" "}
                              <span className="input-group-addon">
                                <i className="ti-email text-primary" />
                              </span>{" "}
                              <input
                                name="email"
                                value={value.email}
                                onChange={changeHandler}
                                type="email"
                                className=""
                                required
                                placeholder="Email Id"
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" footer-form-pad0">
                          <div className="">
                            <div className="input-group">
                              {" "}
                              <span className="input-group-addon">
                                <i className="ti-mobile text-primary" />
                              </span>{" "}
                              <input
                                name="phone"
                                value={value.phone}
                                onChange={changeHandler}
                                type="number"
                                 required
                                className=""
                                placeholder="10 digit mobile No."
                              />
                            </div>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="page_url"
                          defaultValue="https://alephindia.in/"
                        />
                        <div className=" footer-form-pad0">
                          <div className="">
                            <div className="input-group">
                              {" "}
                              <span className="input-group-addon">
                                <i className="ti-agenda text-primary" />
                              </span>
                              <textarea
                                name="message"
                                value={value.message}
                                onChange={changeHandler}
                                rows={4}
                                className=""
                                required
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <input
                          type="hidden"
                          name="utm_source"
                          id="utm_source"
                          defaultValue="Direct"
                        />
                        <input
                          type="hidden"
                          name="utm_medium"
                          id="utm_medium"
                          defaultValue="Direct"
                        />
                        <input
                          type="hidden"
                          name="utm_campaign"
                          id="utm_campaign"
                          defaultValue="Direct"
                        />

      <ReCAPTCHA className='hghglol' size='normal' sitekey="6LfCVJ0qAAAAANSJX8eycxotMBzwuCHuMndZOSbY"   onChange={handleRecaptchaChange} />


                        <div className="col-lg-12 col-md-12">
                         
                          <button
                            type="submit"
                            className="site-button width100"
                          >
                            {
                              sendvalue?  
                              <span class="loader2"></span>
                              :  <span>Submit</span>
                            }

                          </button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>

              </div>

            

            </div>
          </div>

          <div  className="footer-bottom footer-line">
            <div className='foot_map'>
              <ul className='foot_site'>
                <li><a href='https://instacertify.com/privacy-policy' >PRIVACY POLICY</a></li>
                <li><a href="https://instacertify.com/refund-policy" >REFUND POLICY</a></li>
                <li><a href="https://instacertify.com/terms-and-condition">TERMS AND CONDITIONS</a></li>
                <li><Link href={"/about"}>ABOUT US</Link></li>
                <li><Link href={"/contact"}>CONTACT US</Link></li>
              </ul>
            </div>

            <div className='lower_footer'>
              <span>Copyright © Instacertify Labs Private Limited</span>
            </div>
          </div>

        </footer >

      </>

    )
  }
}




                {/* <div className="col-md-3 col-sm-12">
                  <div className="widget">
                    <h4 className="footer-title jk_tit">Industries</h4>
                    <ul className="list-2 uppercase font-opensans lopl"
                    >
                      <marquee
                        behavior="scroll"
                        direction="up"
                        scrollamount={2}
                        height="250px"
                        onmouseover="this.stop()"
                        onmouseout="this.start()"
                      >
                        <li>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                          </svg>

                          <a href="">
                            Electronic and Electricity
                          </a>
                        </li>
                        <li>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                          </svg>

                          <a href="">
                            Chemicals
                          </a>
                        </li>
                        <li>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                          </svg>

                          <Link href="/food-testing">
                            Food
                          </Link>
                        </li>
                        <li>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                          </svg>

                          <a href="">
                            Toys
                          </a>
                        </li>
                        <li>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                          </svg>

                          <a href="">
                            Metal and Alloys
                          </a>
                        </li>
                        <li>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                          </svg>

                          <a href="">
                            Polymers and Plastics
                          </a>
                        </li>
                        <li>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00341941 11.9551C1.25998 11.8608 2.52204 11.8148 3.77091 11.6581C4.9813 11.5057 6.19498 11.3073 7.37679 11.0092C9.24899 10.5369 10.5154 9.32359 10.9486 7.44945C11.3202 5.84163 11.5071 4.18778 11.7269 2.54818C11.8402 1.70755 11.8457 0.852681 12.0051 0C12.06 0.819801 12.0853 1.64399 12.1777 2.4594C12.3371 3.87104 12.4833 5.28706 12.735 6.68335C13.1924 9.22714 14.7381 10.7933 17.2919 11.2142C19.2179 11.532 21.1737 11.6767 23.1173 11.8871C23.4043 11.9178 23.6978 11.8915 23.9891 11.8915C23.9935 11.9441 23.9968 11.9956 24.0012 12.0482C23.7561 12.0669 23.5098 12.08 23.2658 12.1063C21.3221 12.3145 19.3685 12.4592 17.437 12.7518C14.5567 13.1881 13.022 15.0162 12.6295 17.8109C12.3734 19.6325 12.2458 21.4715 12.0633 23.3029C12.0402 23.5331 12.038 23.7644 11.9061 23.9989C11.8501 23.1616 11.8237 22.3209 11.7324 21.488C11.5851 20.1487 11.4312 18.8083 11.2135 17.4789C10.7452 14.6139 8.95106 13.0697 6.14551 12.6707C4.35576 12.4165 2.54732 12.2871 0.746583 12.1085C0.500327 12.0844 0.249675 12.1052 0.0012207 12.1052C0.00232006 12.0548 0.00341941 12.0044 0.00451877 11.954L0.00341941 11.9551Z" fill="white" />
                          </svg>

                          <a href="">
                            Wireless
                          </a>
                        </li>

                      </marquee>
                    </ul>

                    <h4 className="footer-title jk_tit">Let’s Get Social</h4>

                    <ul
                      className="imagesmsme iq-greyscale-max somisk"
                    >
                      <div className='svg_flex'>
                        <a href='https://www.facebook.com/instacertifyIN/' target='_blank' ><svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.78163 20H6.09471V10.875H8.86503L9.28341 7.325H6.09471V5.05C6.09471 4.025 6.35478 3.325 7.68906 3.325H9.39648V0.1375C9.10249 0.0999999 8.09613 0 6.92015 0C4.45513 0 2.78163 1.6625 2.78163 4.7V7.325H0V10.875H2.78163V20Z" fill="white" />
                        </svg></a>

                        <a href='https://x.com/i/flow/login?redirect_after_login=%2Finstacertify' target='_blank'> <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.3965 2.01939C19.661 2.35134 18.8606 2.59025 18.0362 2.6833C18.8921 2.15126 19.5331 1.31072 19.8389 0.319389C19.0357 0.819303 18.1558 1.16985 17.2382 1.35548C16.8547 0.926527 16.3909 0.5848 15.8756 0.351597C15.3604 0.118394 14.8048 -0.00128703 14.2434 1.04374e-05C11.972 1.04374e-05 10.1453 1.92634 10.1453 4.29025C10.1453 4.6222 10.1838 4.95415 10.2463 5.27353C6.84523 5.08744 3.81194 3.38744 1.79535 0.784626C1.42791 1.44128 1.23536 2.18895 1.23773 2.94986C1.23773 4.43862 1.9612 5.75134 3.06443 6.52339C2.41428 6.4966 1.77935 6.30962 1.21129 5.97768V6.03049C1.21129 8.11525 2.61978 9.84292 4.49695 10.2403C4.14449 10.336 3.78191 10.385 3.41776 10.3861C3.15096 10.3861 2.89859 10.3584 2.64381 10.3207C3.16298 12.0207 4.67482 13.2555 6.47508 13.2957C5.0666 14.45 3.30239 15.129 1.38675 15.129C1.04304 15.129 0.725772 15.1164 0.396484 15.0762C2.21357 16.2959 4.36956 17 6.6914 17C14.229 17 18.3535 10.4666 18.3535 4.79572C18.3535 4.60963 18.3535 4.42353 18.3414 4.23744C19.1394 3.62634 19.8389 2.86939 20.3965 2.01939Z" fill="white" />
                        </svg></a>

                        <a href='https://www.linkedin.com/company/instacertify/?originalSubdomain=in' target='_blank'><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.248 19.9687C16.248 18.9284 16.2559 17.9116 16.248 16.8948C16.2324 15.307 16.2559 13.7113 16.1699 12.1235C16.0605 10.0039 14.498 9.65189 13.0605 10.129C12.3574 10.3637 11.9902 10.9346 11.8105 11.623C11.7168 11.9984 11.6465 12.3895 11.6465 12.7806C11.6309 15.0254 11.6309 17.2624 11.6309 19.5072C11.6309 19.6636 11.6309 19.8122 11.6309 19.9921C10.2402 19.9921 8.88086 19.9921 7.49805 19.9921C7.49805 15.5494 7.49805 11.1302 7.49805 6.67184C8.80273 6.67184 10.0996 6.67184 11.4434 6.67184C11.4434 7.25064 11.4434 7.8138 11.4434 8.40825C11.7949 8.03281 12.084 7.65737 12.4355 7.36014C13.5293 6.43719 14.8262 6.18689 16.2012 6.37461C16.873 6.46847 17.5527 6.64837 18.1621 6.93777C19.2637 7.454 19.8184 8.45518 20.0684 9.60496C20.2402 10.4028 20.3574 11.224 20.373 12.0375C20.4121 14.603 20.3887 17.1763 20.3887 19.7418C20.3887 19.8044 20.3809 19.8748 20.373 19.9687C19.0137 19.9687 17.6543 19.9687 16.248 19.9687Z" fill="white" />
                          <path d="M0.740234 6.66406C2.11523 6.66406 3.45117 6.66406 4.82617 6.66406C4.82617 11.1068 4.82617 15.5417 4.82617 20C3.4668 20 2.12305 20 0.740234 20C0.740234 15.5651 0.740234 11.1302 0.740234 6.66406Z" fill="white" />
                          <path d="M5.17778 2.40907C5.16996 3.73876 4.09184 4.84161 2.79496 4.84943C1.48246 4.84161 0.388713 3.71529 0.396526 2.36996C0.404338 1.06375 1.48246 0 2.78715 0C4.1309 0 5.18559 1.06375 5.17778 2.40907Z" fill="white" />
                        </svg></a>

                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_2583_485)">
                            <path d="M10.384 19.9952C8.5585 19.9952 6.7322 19.9787 4.90665 19.9952C3.8422 20.0049 2.80909 19.6353 1.99241 18.9527C1.17572 18.2701 0.628829 17.319 0.449704 16.27C0.423995 16.1213 0.410691 15.9707 0.409934 15.8199C0.409934 11.9445 0.37167 8.06846 0.421942 4.19239C0.448203 2.1347 2.07266 0.392083 4.10755 0.0582625C4.26793 0.030661 4.43028 0.0161101 4.59301 0.0147531C8.4572 0.0147531 12.3214 -0.0227541 16.1848 0.0260062C18.2655 0.0522618 20.0115 1.68011 20.3417 3.73104C20.3664 3.87982 20.3795 4.03032 20.3807 4.18114C20.3807 8.05721 20.4189 11.9333 20.3694 15.8086C20.3424 17.8828 18.6984 19.6344 16.647 19.9465C16.3236 19.9873 15.9976 20.0043 15.6716 19.9975C13.9106 19.9975 12.1496 19.9952 10.384 19.9952ZM10.375 16.4642C11.6532 16.4678 12.9038 16.0925 13.9687 15.3858C15.0336 14.679 15.8652 13.6726 16.3582 12.4936C16.8512 11.3145 16.9837 10.0159 16.7388 8.76166C16.4939 7.50743 15.8826 6.35391 14.9823 5.44684C14.0819 4.53978 12.9329 3.91987 11.6803 3.66544C10.4277 3.41101 9.12774 3.53348 7.94473 4.01737C6.76171 4.50126 5.7487 5.32486 5.03368 6.38411C4.31865 7.44336 3.93371 8.69073 3.92747 9.96862C3.91953 10.8197 4.08052 11.6639 4.40112 12.4523C4.72171 13.2407 5.19554 13.9578 5.79519 14.5619C6.39483 15.166 7.10837 15.6452 7.89451 15.9717C8.68064 16.2983 9.52376 16.4657 10.375 16.4642ZM17.0222 4.68675C17.1999 4.68926 17.3763 4.6562 17.541 4.58951C17.7057 4.52283 17.8554 4.42386 17.9812 4.29845C18.1071 4.17304 18.2066 4.02372 18.2738 3.85928C18.3411 3.69484 18.3747 3.5186 18.3728 3.34096C18.3764 3.16004 18.3437 2.98024 18.2764 2.81224C18.2092 2.64424 18.1089 2.49146 17.9814 2.36299C17.8539 2.23451 17.702 2.13296 17.5345 2.06436C17.367 1.99576 17.1874 1.96152 17.0064 1.96367C16.6479 1.9656 16.3044 2.10816 16.0498 2.36067C15.7953 2.61318 15.6501 2.95548 15.6454 3.31395C15.6428 3.49508 15.6767 3.67487 15.7451 3.84261C15.8135 4.01036 15.9149 4.16263 16.0434 4.29037C16.1719 4.41811 16.3247 4.51869 16.4929 4.58615C16.661 4.6536 16.8411 4.68653 17.0222 4.68299V4.68675Z" fill="white" />
                            <path d="M14.0742 9.98155C14.0742 12.007 12.4235 13.6716 10.4149 13.6761C8.40625 13.6806 6.72401 12.0257 6.71876 10.0168C6.71351 8.00788 8.36949 6.32603 10.3789 6.32227C12.401 6.31777 14.0705 7.97113 14.0742 9.98155Z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2583_485">
                              <rect width="20" height="20" fill="white" transform="translate(0.395752)" />
                            </clipPath>
                          </defs>
                        </svg>


                      </div>
                    </ul>

                  </div>
                </div> */}



                    // <footer className={style.footer} style={itemsSetting} role="contentinfo">


      //   <div className='container foot_coming'>

      //     <div className={style.parent}>

      //       <div className={style.left}>

      //         {

      //           footerData?.footer_logo != null ? (
      //             <img  className="kalish" src="https://res.cloudinary.com/ecommerce-website/image/upload/v1725449711/60logo_1_m7ttuc.svg" alt="" />
      //           )
      //           :
      //           (<h4 className={style.footerTitle} dangerouslySetInnerHTML={ {__html:footerData?.global_title} }></h4>)
      //          }

      //         <div className={style.footerSubTitle} dangerouslySetInnerHTML={ {__html:footerData?.sub_title} }></div>

      //       </div>

      //       <div className={style.right}>
      //           {footerItems != null ? (
      //             footerItems.map((ls, i)=>(
      //               <div key={i} id={ls.parentId} className={style.footerItems}>

      //                 <h4 className={style.footerItemsHead}>
      //                   {ls.parentItems.link != '' ? (<a href={ls.parentItems.link} target={ls.parentItems.linkType == 'true' ? "_blank" : "_self" }>{ls.parentItems.title}</a>): ls.parentItems.title}
      //                 </h4>


      //                 {ls.subItems.length > 0 ? (
      //                 <ul className={style.footerItemsUL}>
      //                     {ls.subItems.map((lss, ii)=>(
      //                       <li key={ii}>


      //                         {
      //                           lss.link?.match('tel:') ? (
      //                               <a href={""+lss?.link} target={lss?.linkType == 'true' ? "_blank" : "_self" }>{lss?.title}</a>
      //                             )
      //                             :
      //                             (
      //                               lss.link?.match('mailto:') ? (
      //                                 <a href={lss?.link} target={lss?.linkType == 'true' ? "_blank" : "_self" }>{lss?.title}</a>
      //                               ):(
      //                                 <a href={lss?.link} target={lss?.linkType == 'true' ? "_blank" : "_self" }>{lss?.title}</a>
      //                               )

      //                             )
      //                         }

      //                       </li>
      //                     ))}
      //                 </ul>
      //                 ) :""}

      //               </div>
      //             ))
      //           ):""}
      //       </div>

      //     </div>



      //   </div>

      //   <div className={style.copyRight}>
      //     <div className='container'>
      //       <div className={style.crParent}>
      //         <div className={style.crLeft}>
      //           <p>Copyrights ©{ moment().format('Y') } Instacertify Solutions.</p>
      //         </div>
      //         <div className={style.crRight}>
      //           <ul>
      //           <p className='connect'>Connect:</p>
      //             <li>
      //               <Link href={'https://twitter.com/'} target='_blank' >
      //                 <img src='./images/fb.svg'/>
      //               </Link>
      //             </li> 
      //             <li>
      //               <a href={'https://www.facebook.com/FUNaddictFairchild/'} target='_blank' >
      //                 {/* <FaceBookSocial /> */}
      //                 <img src='./images/twitter.svg'/>
      //               </a>
      //             </li>
      //             <li>
      //               <a href={'https://www.linkedin.com/company/fairchildairforcebase/'} target='_blank' >
      //                 {/* <LinkedinSocial /> */}
      //                 <img src='./images/linkedin.svg'/>
      //               </a>
      //             </li>
      //             <li>
      //               <a href={'https://www.instagram.com/fairchildfun/'} target='_blank' >
      //                 {/* <InstagramSocial /> */}
      //                 <img src='./images/insta.svg'/>
      //               </a>
      //             </li>

      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //   </div>


      // </footer>
