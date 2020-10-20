import Link from 'next/link'

export default function HomeHeader () {
    return (
        <div>
            
            <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="slider_text text-center justify-content-center">
                                <h3>Trouvez votre meilleur démeure</h3>
                                <p>En quelque maison que vous entriez dîtes d'abord : paix à cette maison.</p>
                            </div>
                            <div className="property_form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="form_wrap d-flex">
                                                    <div className="single-field max_width ">
                                                            <label for="#">Localité</label>
                                                            <select className="wide" >
                                                                    <option data-display="NewYork">NewYork</option>
                                                                    <option value="1">Bangladesh</option>
                                                                    <option value="2">India</option>
                                                            </select>
                                                        </div>
                                                    <div className="single-field max_width ">
                                                            <label for="#">Type maison</label>
                                                            <select className="wide" >
                                                                    <option data-display="Apartment">Apartment</option>
                                                                    <option value="1">Apartment</option>
                                                                    <option value="2">Apartment</option>
                                                            </select>
                                                        </div>
                                                        <div className="single_field range_slider">
                                                                <label for="#">Price ($)</label>
                                                            <div id="slider"></div>
                                                        </div>
                                                    <div className="single-field min_width ">
                                                            <label for="#">Pièces</label>
                                                            <select className="wide" >
                                                                    <option data-display="01">01</option>
                                                                    <option value="1">02</option>
                                                                    <option value="2">03</option>
                                                            </select>
                                                    </div>
                                                   
                                                    <div className="serach_icon">
                                                        <Link href="#">
                                                            <a>
                                                                <i className="ti-search"></i>
                                                            </a>
                                                        </Link>
                                                                
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
        </div>
        
    )
}