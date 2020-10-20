export default function Barner() {
    return(
        <div>
             <div className="slider_area">
            <div className="single_slider single_slider2  d-flex align-items-center property_bg overlay2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="property_wrap">
                                        <div className="slider_text text-center justify-content-center">
                                                <h3>Chercher une propriété</h3>
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
                                                                                <a href="#">
                                                                                        <i className="ti-search"></i>
                                                                                </a>
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
        </div>
    )
}