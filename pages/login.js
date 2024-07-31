import Image from 'next/image'
import React, { useRef, useState } from 'react'
import style from "./css/login.module.scss";
import moment from 'moment';
import Link from 'next/link';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


export default function Login() {

    const [formSubmit, setFormSubmit] = useState(false);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();
    const { status } = useSession()

    if(status == "authenticated"){
        router.push("/");
        return;
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        if(status == "authenticated"){
            router.push("/");
            return;
        }
        if(email == ""){
            setMessage("Please enter the correct email address.")
            setFormSubmit(false);
            emailRef.current.focus();
            return false;
        }
        else if(password == ""){
            setMessage("Please enter the password.")
            setFormSubmit(false);
            passwordRef.current.focus();
            return false;
        }
        else {
            setFormSubmit(true);

            signIn("nextjs-mainlogin-form", {username: email, password:password, redirect:false, callbackUrl:'/account/order'}).then(async ({ ok, error }) => {
                console.log('ok')
                console.log(ok)
                console.log(error)
                if (ok) {
                    setMessage("User Login Successfully.");
                    window.location.href = "/account/order"
                } else {
                    signOut({redirect:false})
                    setMessage("Credentials do not match!")
                    setFormSubmit(false);
                }
            })

            return true;
        }
    }


  return (
    <div>
        <Head>
            <title>Log in</title>
            <meta name="description" content='Log in'></meta>
        </Head>
      <div className="page_auth">
            <div className={style.parent_registeration}>
                <div className={style.left}>
                    <div className={style.loginForm}>

                        { formSubmit == true ? (<span className='loadingOverlay' style={{display:'block'}} />) : "" }
                        
                        
                        {/* <Link href={'/'}>
                            <Image
                            className={style.faf_logo}
                            src={'https://cdn11.bigcommerce.com/s-suzeuussqe/images/stencil/original/image-manager/fairchild-fun-logo.png'}
                            width="182"
                            height="65"
                            quality={100}
                            alt={'fairchild'} />
                        </Link> */}

                        <h1>Log in</h1>

                        <p>
                            New to MadFish Solutions?
                            <Link className={style.faf_anchor} href="/create-account"> <span>Create on account</span> </Link>
                        </p>
                        
                        {message != '' ? (<span className={style.formMessge}>{message}</span>):""}

                        <form onSubmit={submitLogin}>
                            <div className={style.form_control}>
                                <input ref={emailRef} required type="email" placeholder="Email" value={email} onChange={(e)=>{ setEmail(e.target.value);setMessage("") }} maxLength={'50'}  />
                            </div>
                            <div className={style.form_control}>
                                <input ref={passwordRef} required type="password" placeholder="Password" value={password} onChange={(e)=>{ setPassword(e.target.value);setMessage("") }} maxLength={'20'}  />
                            </div>

                            <Link className={style.forgot_anchor} href="/forgot-password">
                                <p className={style.forget_password}>Forgot your password?</p>
                            </Link>

                            <button className={style.faf_btn_primary}>Log in</button>
                        </form>
                    </div>
                    <p className={style.footerCopyrgiht}>
                        Copyright @{  moment(new Date()).format('Y') } MadFish Solutions.
                    </p>
                </div>
                <div className={style.right}>
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                    <Image
                        className={style.faf_logo}
                        src={'/images/login-back.png'}
                        width="800"
                        height="1024"
                        quality={100}
                        alt={'fairchild'} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
