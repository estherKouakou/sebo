import Link from 'next/link'

export default function Footer() {
    return(
        <footer className="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <div className="footer_logo">
                            <Link href="#">
                                <a>
                                    <img src="img/footer_logo.png" alt=""/>
                                </a>
                            </Link>
                                
                            </div>
                            <p>

                            <Link href="#">
                                <a>
                                conbusi@support.com
                                </a>
                            </Link>
                            <p>
                            +10 873 672 6782 <br/>
                                    600/D, Green road, NewYork
                            </p>
                            
                            </p>
                            <div className="socail_links">
                                <ul>
                                    
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="ti-facebook"></i>
                                            </a>
                                        </Link>
                                        
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="ti-twitter-alt"></i>
                                            </a>
                                        </Link>
                                       
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </Link>
                                        
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-lg-3">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                    Services
                            </h3>
                            <ul>
                                <li><Link href="#"><a>Marketing  SEO</a></Link></li>
                                <li><Link href="#"><a> Startup</a></Link></li>
                                <li><Link href="#"><a>Finance solution</a></Link></li>
                                <li><Link href="#"><a>Food</a></Link></li>
                                <li><Link href="#"><a>Travel</a></Link></li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-lg-2">
                        <div className="footer_widget">
                            <h3 className="footer_title">
                                    Useful Links
                            </h3>
                            <ul>
                                <li><Link href="#"><a>About</a></Link></li>
                                <li><Link href="#"><a>Blog</a></Link></li>
                                <li><Link href="#"><a> Contact</a></Link></li>
                                <li><Link href="#"><a>Appointment</a></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer_widget">
                                    <h3 className="footer_title">
                                            Subscribe
                                    </h3>
                                    <form action="#" className="newsletter_form">
                                        <input type="text" placeholder="Enter your mail"/>
                                        <button type="submit">Subscribe</button>
                                    </form>
                                    <p className="newsletter_text">Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                                </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-12">
                        <p className="copy_right text-center">
                           
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}