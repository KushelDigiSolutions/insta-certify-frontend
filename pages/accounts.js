import { useEffect, useState } from 'react';
import Head from 'next/head';
import style from "./css/cart.module.scss";

export default function Account(props) {
   
    const [pageLoad, setPageLoad] = useState(false);
    const [message, setMessage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    // const submitHandler = async (e) => {
    //     e.preventDefault(); 

    //     setPageLoad(true); 

    //     try {
    //         const response = await fetch("https://admin.instacertify.com/instacertify-backend/public/api/profile-update", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 first_name: firstName,
    //                 last_name: lastName,
    //                 email: email
                 
    //             })
    //         });

    //         const data = await response.json();
            
    //         if (response.ok) {
    //             setMessage("Profile updated successfully!");
    //         } else {
    //             setMessage(data.error || "Failed to update profile");
    //         }
    //     } catch (error) {
    //         setMessage("An error occurred while updating profile");
    //     } finally {
    //         setPageLoad(false); 
    //     }
    // };

    //   useEffect(() => {
    //     const fetchUserProfile = async () => {
    //         setPageLoad(true); 

    //         try {
    //             const response = await fetch("https://admin.instacertify.com/api/user-profile", {
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     // Add authorization header if needed
    //                     // "Authorization": `Bearer ${yourAuthToken}`
    //                 }
    //             });

    //             console.log("response" , response);

    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setFirstName(data.first_name);
    //                 setLastName(data.last_name);
    //                 setEmailAddress(data.email);
    //             } 
    //         } catch (error) {
    //             setMessage("An error occurred while fetching profile data");
    //         } finally {
    //             setPageLoad(false); // Hide loading overlay
    //         }
    //     };

    //     fetchUserProfile();
    // }, []); 

    return (
        <div className={style.pageAccountBG}>
            <div className={style.pageAccount}>
                <Head>
                    <title>Account Details</title>
                    <meta name="description" content="We're the 92d Force Support Squadron, at Fairchild Air Force Base, delivering exceptional experiences to REFUEL Airmen, their families and the Fairchild community. Join the FUN!" />
                </Head>

                {pageLoad && <span className='loadingOverlay' style={{ display: 'block', position: 'fixed' }} />}

                <div className="container">
                    <h1 className={style.pageHead}>Account settings</h1>

                    <div className={style.accountContainer}>
                        <div className={style.formBuilder}>
                            <form method='POST' encType="multipart/form-data"
                            //  onSubmit={submitHandler}
                             >
                                {/* Form fields go here, e.g., firstName, lastName, etc. */}
                                <div className={style.formGroup}>
                                    <div className={style.formControl}>
                                        <label>First Name <small>*</small></label>
                                        <input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength="30" />
                                    </div>
                                    <div className={style.formControl}>
                                        <label>Last Name <small>*</small></label>
                                        <input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} maxLength="30" />
                                    </div>
                                    <div className={style.formControl}>
                                        <label>Email <small>*</small></label>
                                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="30" />
                                    </div>
                                </div>
                                
                                {/* Add the rest of your form fields here */}

                                <div className={style.formAction}>
                                    <button type="submit" className={style.buttonSubmit}>Update Details</button>
                                </div>

                                {message && <span className={style.formMessage}>{message}</span>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
