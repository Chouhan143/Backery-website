import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <>

  <header className="header">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg col-md-12">

              <Image src='/main-logo.png' alt="logo" width={132}
                height={83} />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                <ul className={styles.navbar_nav}>
              
                  <Link legacyBehavior className="nav-item text-hover active " href="/">
                    <a className={styles.navlink}> Home </a>
                  </Link>
                  
                 
                  <Link legacyBehavior className="nav-item" href="/About">
                  <a className={styles.navlink}>About Us</a>
                  </Link>
                  
                  <Link legacyBehavior className="nav-item" href="/Blog">
                    <a className={styles.navlink}>Blog</a> 
                  </Link>

                  <Link legacyBehavior className="nav-item" href="/About">
                     <a className={styles.navlink}>Contact Us</a>
                   </Link>
                   
                  <Link  className="nav-item dropdown" href="/" id="dropdown_menu" >
                  
                    <a className="nav-link dropdown-toggle " id="navbarDropdown " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className={styles.navlink} >  Page </span>
                    </a>
                    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link href="/" className="dropdown-item"> Home </Link>
                      <Link href="/About" className="dropdown-item"> About Us </Link>
                      <Link href="/Blog" className="dropdown-item"> Blog </Link>
                      <Link href="/Single_post" className="dropdown-item"> Single Post </Link>
                      <Link href="/Contact Us" className="dropdown-item"> Contact Us </Link>
                      <Link href="/Shop" className="dropdown-item"> Shop </Link>
                      <Link href="/Single_product" className="dropdown-item"> Single Product </Link>

                    </ul>
                  
                  </Link>
                

                </ul>
                <div className='icons d-flex align-items-baseline'>
                  <div className={styles.search_bar}><i class="fa-solid fa-magnifying-glass" /></div>
                  <div><i class="fa-solid fa-cart-shopping"/></div>

                </div>

              </div>
            </nav>
          </div>
        </div>
      </header>




    </>

  )
}
export default Navbar