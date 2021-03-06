import Link from 'next/link'

export default function Home() {
    return(
<div>
<div className="popular_property">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="section_title mb-40 text-center">
                        <h3>Maisons populaires</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-md-6 col-lg-4">
                    <div className="single_property">
                        <div className="property_thumb">
                            <div className="property_tag">
                                    For Sale
                            </div>
                            <img src="images/property/1.png"  alt=""/>
                        </div>
                        <div className="property_content">
                            <div className="main_pro">
                                    <h3><Link href="property_details.html"><a>Comfortable Apartment in Palace</a></Link></h3>
                                    <div className="mark_pro">
                                        <img src="images/svg_icon/location.svg"  alt=""/>
                                        <span>Popular Properties</span>
                                    </div>
                                    <span className="amount">From $20k</span>
                            </div>
                        </div>
                        <div className="footer_pro">
                                <ul>
                                    <li>
                                        
                                        <div className="single_info_doc">
                                            <img src="images/svg_icon/square.svg"  alt=""/>
                                            <span>1200 Sqft</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single_info_doc">
                                            <img src="images/svg_icon/bed.svg"  alt=""/>
                                            <span>2 Bed</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single_info_doc">
                                            <img src="images/svg_icon/bath.svg"  alt=""/>
                                            <span>2 Bath</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                    <div className="single_property">
                        <div className="property_thumb">
                            <div className="property_tag red">
                                    For Rent
                            </div>
                            <img src="images/property/2.png"  alt=""/>
                        </div>
                        <div className="property_content">
                            <div className="main_pro">
                                    <h3><Link href="property_details.html"><a>Comfortable Apartment in Palace</a></Link></h3>
                                    <div className="mark_pro">
                                        <img src="images/svg_icon/location.svg"  alt=""/>
                                        <span>Popular Properties</span>
                                    </div>
                                    <span className="amount">$563/month</span>
                            </div>
                        </div>
                        <div className="footer_pro">
                                <ul>
                                    <li>
                                        <div className="single_info_doc">
                                            <img src="images/svg_icon/square.svg"  alt=""/>
                                            <span>1200 Sqft</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single_info_doc">
                                            <img src="images/svg_icon/bed.svg"  alt=""/>
                                            <span>2 Bed</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single_info_doc">
                                            <img src="images/svg_icon/bath.svg"  alt=""/>
                                            <span>2 Bath</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-lg-4">
                    <div className="single_property">
                        <div className="property_thumb">
                            <div className="property_tag">
                                    For Sale
                            </div>
                            <img src="images/property/3.png"  alt=""/>
                        </div>
                        <div className="property_content">
                            <div className="main_pro">
                            <h3><Link href="property_details.html"><a>Comfortable Apartment in Palace</a></Link></h3>
                                    <div className="mark_pro">
                                        <img src="images/svg_icon/location.svg"  alt=""/>
                                        <span>Popular Properties</span>
                                    </div>
                                    <span className="amount">From $20k</span>
                            </div>
                        </div>
                        <div className="footer_pro">
                                <ul>
                                    <li>
                                        <div className="single_info_doc">
                                            <img src="images/svg_icon/square.svg"  alt=""/>
                                            <span>1200 Sqft</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single_info_doc">
                                            <img src="images/svg_icon/bed.svg"  alt=""/>
                                            <span>2 Bed</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single_info_doc">
                                            <img src="images/svg_icon/bath.svg"  alt=""/>
                                            <span>2 Bath</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
               
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="more_property_btn text-center">
                        <Link href="Property.html" >
                            <a className="boxed-btn3-line">More Properties</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}