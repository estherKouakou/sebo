export default function HomeSection(){
    return(
        <div>
             <div className="property_details">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="property_banner">
                        <div className="property_banner_active owl-carousel">
                            <div className="single_property">
                                <img src="img/banner/property_details.png" alt=""/>
                            </div>
                            <div className="single_property">
                                <img src="img/banner/property_details.png" alt=""/>
                            </div>
                            <div className="single_property">
                                <img src="img/banner/property_details.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                    <div className="details_info">
                        <h4>Description</h4>
                       <p>While there are countless Trips out there in charity shops and car boot sales, you can also buy refurbished examples, with replacement leatherette available in all colors. I love my Trip and use it regularly something so refreshing about its simplicity.</p>
                       <p>While there are countless Trips out there in charity shops and car boot sales, you can also buy refurbished examples, with replacement leatherette available in all colors. I love my Trip and use it regularly something so refreshing about its simplicity.</p>
                       <p>While there are countless Trips out there in charity shops and car boot sales, you can also buy refurbished examples, with replacement leatherette available in all colors. I love my Trip and use it regularly something so refreshing about its simplicity.</p>

                    </div>
                  
                    <div className="contact_field">
                        <h3>Contact Us</h3>
                        <form action="#">
                                <div className="row">
                                        <div className="col-xl-6 col-md-6">
                                            <input type="text" placeholder="Your Name" />
                                        </div>
                                        <div className="col-xl-6 col-md-6">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div className="col-xl-12">
                                            <input type="number" placeholder="Phone no." />
                                        </div>
                                        <div className="col-xl-12">
                                           <textarea name="" id="" cols="30" rows="10" placeholder="Message" ></textarea>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="send_btn">
                                                <button type="submit" className="send_btn">Send</button>
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
    )
}