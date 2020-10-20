import Link from 'next/link'


export default function Header() {
    return(
       <div>
           
        <div className="header-area ">
            <div className="header-top_area d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-5">
                            <div className="header_left">
                                <p>Welcome to Conbusi consulting service</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-7">
                            <div className="header_right d-flex">
                                    <div className="short_contact_list">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <a><i className="fa fa-envelope"> info@docmed.com</i></a>
                                                        
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a><i className="fa fa-envelope">  1601-609 6780</i></a>
                                                        
                                                    </Link>
                                                </li>
                                                {/* <li> <Link href="#"><a> <i className="fa fa-envelope"></i> info@docmed.com</a> </Link></li>
                                                <li> <Link href="#"><a> <i className="fa fa-phone"></i> 1601-609 6780</a> </Link></li> */}
                                            </ul>
                                        </div>
                                        <div className="social_media_links">
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </Link>
                                            
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </Link>
                                            
                                            <Link href="#">
                                                <a>
                                                    <i className="fa fa-google-plus"></i>
                                                </a>
                                            </Link>
                                            
                                        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className='col-xl-3 col-lg-2'>
                                <div className="logo">
                                     <Link href="index.html">
                                        <a>
                                            <img src="images/logo.png" alt=""/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-7'>
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <Link href="/">
                                                    <a >Acceuil</a>
                                                </Link>
                                            </li> 
                                            <li> 
                                                <Link href="/about">
                                                    <a>Apropos</a>
                                                </Link>
                                            </li> 
                                            <li> 
                                                <Link href="/property">
                                                    <a>Nos maisons</a> 
                                                </Link>
                                            </li>
                                            <li> 
                                                <Link href="/contact">
                                                    <a>Contact</a> 
                                                </Link>
                                            </li> 
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                           
                            <div className='col-12'>
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
   
       </div>
    )
}