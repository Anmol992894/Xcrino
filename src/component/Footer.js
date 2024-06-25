import React from 'react'
import './style.css'
const Footer = () => {
    return (
        <div style={{backgroundColor:"#FFFDD0", fontFamily:"roboto"}} className='p-5 my-4'>
            <div className='row'>
                <div className='col-md-4 col-sm-12 d-flex flex-column align-items-between justify-content-between text-start'>
                    <div className='d-flex flex-column pt-5 '>
                        <img id='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIp-lV27PwLNcRwJUkVRAsW4Usy7RgUcYxEN0kbPtupQ7LeM3ZEi9QoeSDhodh3H_Qw&usqp=CAU" alt="Logo" className="img-fluid" height="70" />
                        <span className='ps-2 mt-3'>Awesome Net Shop Website Template</span>
                    </div>
                    <div>
                        <h4><strong><i className="fs-5 text-primary fa-solid fa-location-dot"></i> Address</strong></h4>
                        <p className='ps-2'>6-24 Akashichiso,Chou-ku , Tokyo 104-0044</p>
                        <h4><strong><i className="pe-2 text-primary fa-solid fa-headset"></i>Call US</strong></h4>
                        <p className='ps-2'>03-5385-5434</p>
                        <h4><strong><i className="fs-5 text-primary fa-solid fa-location-dot"></i> Address</strong></h4>
                        <h4 className='ps-2'>Weekdays 10:30 to 17:30</h4>
                        <p>(excluding holidays and new- year query)</p>
                    </div>
                </div>
                <div className='col-md-2 col-sm-6 mt-3 d-flex flex-column text-start'>
                    <h5><strong>USER GUIDE</strong></h5>
                    <span className='mt-3'>About San-x Net Shop</span>
                    <span className='mt-3'>About Your Order</span>
                    <span className='mt-3'>About Handling Projects</span>
                    <span className='mt-3'>About Payment</span>
                    <span className='mt-3'>About Mail Delivery</span>
                </div>
                <div className='col-md-2 col-sm-6 mt-3 d-flex flex-column text-start'>
                    <h5><strong>INFORMATION</strong></h5>
                    <span className='mt-3'>About Us</span>
                    <span className='mt-3'>Contact Us</span>
                    <span className='mt-3'>Cookie Policy</span>
                    <span className='mt-3'>Blogs</span>
                    <span className='mt-3'>Terms & Conditions</span>
                    <span className='mt-3'>Shipping & Delivery</span>
                    <span className='mt-3'>Return & Exchanges</span>
                </div>
                <div className='col-md-2 col-sm-6 mt-3 d-flex flex-column text-start'>
                    <h5><strong>CATEGORIES</strong></h5>
                    <span className='mt-3'>Mobile Games</span>
                    <span className='mt-3'>Wedding Baby </span>
                    <span className='mt-3'>Books</span>
                    <span className='mt-3'>Jewelry</span>
                    <span className='mt-3'>Bags & Wallets</span>
                    <span className='mt-3'>Fashion Accessories</span>
                    <span className='mt-3'>Interiors/Home Appliance</span>
                </div>
                <div className='col-md-2 col-sm-6 mt-3 d-flex flex-column text-start'>
                    <h5><strong>CHARACTERS</strong></h5>
                    <span className='mt-3'>Rilakkuma</span>
                    <span className='mt-3'>Summikkogurashi </span>
                    <span className='mt-3'>Sentimental Circus</span>
                    <span className='mt-3'>Treepanda</span>
                    <span className='mt-3'>Korokoro Koroniya</span>
                    <span className='mt-3'>Mr.Jinbee</span>
                    <span className='mt-3'>Chiquip</span>
                    <span className='mt-3'>Chiquip dancers</span>
                    <span className='mt-3'>Mamegoma</span>
                    <span className='mt-3'>Dark Ban</span>
                    <span className='mt-3'>Meow meow meow</span>
                    <span className='mt-3'>Kammonohhashaki</span>
                    <span className='mt-3'>Monochrome Boo</span>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-6 col-sm-12 text-start'>
                    <p>The Copyright of documents, photographs, character designs, etc. On this website belong to San-X Co. or their respective copyright holders. Copying or modifying all or part of these works without the permission of the Copyright holder is prohibited by copyright law.</p>
                </div>
                <div className='col-md-3 col-sm-6 text-center d-flex flex-column'>
                    <h5>Install App</h5>
                    <span>From App Store or Google Play</span>
                    <div className='d-flex justify-content-center'>
                        <img style={{width:'50%', height:"70px"}} src='https://w7.pngwing.com/pngs/772/166/png-transparent-download-on-the-app-store-button-thumbnail.png' alt='icon'/>
                        <img style={{width:'50%', height:"70px"}} src='https://w7.pngwing.com/pngs/867/239/png-transparent-google-play-logo-google-play-android-app-store-play-now-button-text-label-logo-thumbnail.png' alt='icon'/>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 text-center'>
                    <h5>Secured Payment Gateway</h5>
                    <div className='d-flex justify-content-center'>
                        <img style={{width:'20%', height:"30px"}} src='https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png' alt='icon'/>
                        <img style={{width:'20%', height:"30px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png' alt='icon'/>
                        <img style={{width:'20%', height:"30px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Maestro_logo.png/640px-Maestro_logo.png' alt='icon'/>
                        <img style={{width:'20%', height:"30px"}} src='https://e7.pngegg.com/pngimages/953/232/png-clipart-payment-gateway-computer-icons-e-commerce-payment-system-payment-blue-text-thumbnail.png' alt='icon'/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
                <span>@SAN-X CO. LTD. ALL RIGHTS RESERVED</span>
                <div className='text-center'>
                    Official Account
                    <i style={{backgroundColor:"#B19CD9"}} className="p-2 fs-3 rounded-circle fa-regular fa-envelope"></i>
                    <i className="p-1 fs-3 rounded text-light bg-success fa-solid fa-comment-dots"></i>
                    <i className="p-2 text-primary rounded-circle fs-3 fa-brands fa-facebook"></i>
                    <i className="fs-2 text-primary fa-brands fa-square-twitter"></i>
                    <i className="fs-2 text-danger p-2 fa-brands fa-instagram"></i>
                    <i className="fs-2 text-danger fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
