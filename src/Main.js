import React, { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer';

const Main = () => {
    const [clicked, setClicked] = useState('Order History');
    return (
        <div style={{ backgroundColor: "#F7CAC9" }}>
            <Header />
            <div className='container' style={{fontFamily:"roboto", backgroundColor: "#FFC0CB" }}>
                <div className='row justify-content-around mt-3'>
                    <div className='col-4 my-2  col-lg-2  g-0 d-flex align-items-center justify-content-center '><i style={{ color: "#F4C0FF" }} className="me-1  fa-solid fa-comment"></i> Realesed in June</div>
                    <div className='col-4 my-2   col-lg-1 g-0 d-flex align-items-center justify-content-center '><i className="me-1 text-warning fa-solid fa-bullhorn"></i>Restock</div>
                    <div className='col-4 my-2  col-lg-2  g-0 d-flex align-items-center justify-content-center '><i style={{ color: "#87CEEB" }} className="me-1  fa-solid fa-clock"></i>Ltd. Merchandise</div>
                    <div className='col-4 my-2  col-lg-2  g-0 d-flex align-items-center justify-content-center '><i className="me-1 text-primary px-1 fa-solid fa-gift"></i>Made to Order<span className='m-1 dropdown-toggle'></span></div>
                    <div className='col-4 my-2  col-lg-1 g-0 d-flex align-items-center justify-content-center '><i style={{ color: "#FF8096" }} className="me-1  fa-solid fa-snowflake"></i>Character<span className='m-1 dropdown-toggle'></span></div>
                    <div className='col-4 my-2  col-lg-2 g-0 d-flex align-items-center justify-content-center '><i className="me-1  text-primary fa-regular fa-file-lines"></i>Product Category<span className='m-1 dropdown-toggle'></span></div>
                    <div className='col-12 my-2  col-lg-2 g-0 d-flex align-items-center justify-content-center '><i className="me-1  text-primary fa-solid fa-book"></i>List of special features</div>
                </div>
                <div className='mt-4 d-flex justify-content-between'>
                    <span className='bg-light rounded-circle p-1'><i className="fs-4 fa-solid fa-circle-half-stroke"></i></span>
                    <i className="fs-4 text-warning fa-solid fa-crown"></i>
                </div>
                <div className='mt-2 mb-5'>
                    <div className="card" style={{ color: "#964B00", width: "18rem;", height: "35rem" }}>
                        <div className="d-flex align-items-end card-body" style={{ backgroundImage: 'url(https://wallpapers.com/images/hd/sumikko-gurashi-in-bento-box-cbwovztzd7i8sp3d.jpg)', backgroundRepeat: "no-repeat", backgroundSize: "100% 80%", backgroundPosition: "top" }}>
                            <div className='row  w-100'>
                                <div className='mt-2 g-0 container col-sm col-md-3 d-flex flex-column align-items-sm-center align-items-md-start justify-content-end ps-3 '>
                                    <span className=' bg-md-light bg-sm-none  rounded-circle'><img src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=1024x1024&w=is&k=20&c=y4FFqpMLolCvEqoxlr4oypQqhAL1ta0ojXUnOofQXHk=" width={130} height={130} className="rounded-circle" alt="profile picture" /></span>
                                    <span className='fw-bold'>Jagat Verma</span>
                                    <span>9999444555</span>
                                    <span>abcd6788@gmail.com</span>
                                </div>
                                <div className='mt-2 col-sm col-md-4 g-0 d-flex flex-column align-items-sm-center align-items-md-start justify-content-end'>
                                    <span className='fw-bold'>Current Number of points</span>
                                    <span>0 points</span>
                                    <span className='fw-bold'>Date of Expiry</span>
                                    <span>There are currently no point with a expiration date</span>
                                </div>
                                <div className='mt-2 col-sm col-md-4 d-flex flex-column'>
                                    <div className='w-100 d-flex justify-content-center justify-content-md-end  align-items-sm-center align-items-md-end'>
                                        <button type='button' className='mt-5 btn btn-warning rounded-pill'><i className="m-2 fa-solid fa-camera"></i>Upload Cover Photo</button>
                                    </div>
                                    <div className='w-100 d-flex justify-content-center justify-content-md-start align-items-sm-center align-items-md-start'>
                                        <span className='p-1 bg-light rounded-circle'><img src="https://img-08.stickers.cloud/packs/7499666b-ca58-429f-b25c-2b69d6527ec6/webp/619b0410-f895-4621-8b74-4261ab295912.webp" width={130} height={130} className="rounded-circle m-2" alt="profile picture" /></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col d-flex flex-column'>
                        <div className='pe-0 ps-2 col'>
                            <div  className='rounded-pill mt-1 ps-2' style={{ backgroundColor: "blue" }}>
                                <div onClick={()=>setClicked('favrouite')} className="card rounded-pill">
                                    <div className="card-body align-items-top d-flex justify-content-between">
                                        <span>
                                            Favorite
                                        </span>
                                        <span className='dropdown-toggle'></span>
                                    </div>
                                </div>
                            </div>
                            <div  className='rounded-pill mt-1 ps-2' style={{ backgroundColor: "#F4C0FF" }}>
                                <div onClick={()=>setClicked('Order History')}  className="card rounded-pill">
                                    <div className="card-body align-items-top d-flex justify-content-between">
                                        <span>
                                            Order History
                                        </span>
                                        <span className='dropdown-toggle'></span>
                                    </div>
                                </div>
                            </div>
                            <div  className='rounded-pill mt-1 ps-2 bg-warning' >
                                <div onClick={()=>setClicked('Coupon')} className="card rounded-pill">
                                    <div className="card-body align-items-top d-flex justify-content-between">
                                        <span>
                                            Coupons
                                        </span>
                                        <span className='dropdown-toggle'></span>
                                    </div>
                                </div>
                            </div>
                            <div  className='rounded-pill mt-1 ps-2' style={{ backgroundColor: "orange" }}>
                                <div onClick={()=>setClicked('Edit')} className="card rounded-pill">
                                    <div className="card-body align-items-top d-flex justify-content-between">
                                        <span>
                                            Edit delivery list
                                        </span>
                                        <span className='dropdown-toggle'></span>
                                    </div>
                                </div>
                            </div>
                            <div  className='rounded-pill mt-1 ps-2' style={{ backgroundColor: "brown" }}>
                                <div onClick={()=>setClicked('Delete')} className="card rounded-pill">
                                    <div className="card-body align-items-top d-flex justify-content-between">
                                        <span>
                                            Delete credit card information
                                        </span>
                                        <span className='dropdown-toggle'></span>
                                    </div>
                                </div>
                            </div>
                            <div  className='rounded-pill mt-1 ps-2' style={{ backgroundColor: "grey" }}>
                                <div onClick={()=>setClicked('Withdraw')} className="card rounded-pill">
                                    <div className="card-body align-items-top d-flex justify-content-between">
                                        <span>
                                            Those who wish to withdraw from membership
                                        </span>
                                        <span className='dropdown-toggle'></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-6 bg-light'>
                        {clicked === 'Order History' &&
                            <div className='w-100 bg-light text-start pt-3'>
                                <div className='ps-2'>
                                    <strong><h4>Recent 5 Orders</h4></strong>
                                </div>
                                <div className='w-100 '>
                                    <div className="w-100 mt-4 border border-0">
                                        <div className="w-100 card-body d-flex ">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lQjEFrKvQLeqi9KsS1tNEgJcMms7nw8FQg&s" width={30} height={30}  alt="profile picture" />
                                        <div className='d-flex flex-column w-100 text-start '>
                                            <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                            <span>Delivered 16th March</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-100 mt-3 border border-0">
                                        <div className="w-100 card-body d-flex ">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lQjEFrKvQLeqi9KsS1tNEgJcMms7nw8FQg&s" width={30} height={30}  alt="profile picture" />
                                        <div className='d-flex flex-column w-100 text-start '>
                                            <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                            <span>Delivered 16th March</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-100 mt-3 border border-0">
                                        <div className="w-100 card-body d-flex ">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lQjEFrKvQLeqi9KsS1tNEgJcMms7nw8FQg&s" width={30} height={30}  alt="profile picture" />
                                        <div className='d-flex flex-column w-100 text-start '>
                                            <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                            <span>Delivered 16th March</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-100 mt-3 border border-0">
                                        <div className="w-100 card-body d-flex ">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lQjEFrKvQLeqi9KsS1tNEgJcMms7nw8FQg&s" width={30} height={30}  alt="profile picture" />
                                        <div className='d-flex flex-column w-100 text-start '>
                                            <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                            <span>Delivered 16th March</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {clicked==='favrouite'&& 
                                <div className='w-100 bg-light text-start pt-3'>
                                <div className='ps-2'>
                                    <strong><h4>Favrouite Orders</h4></strong>
                                </div>
                                <div className='w-100 '>
                                    <div className="w-100 mt-4 border border-0">
                                        <div className="w-100 card-body d-flex ">
                                        <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw969109e8/images/Sonata/Catalog/7128WL02_1.jpg?sw=800&sh=800" width={30} height={30}  alt="profile picture" />
                                        <div className='d-flex flex-column w-100 text-start '>
                                            <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                            <span>Added 16th March</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-100 mt-3 border border-0">
                                        <div className="w-100 card-body d-flex ">
                                        <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw969109e8/images/Sonata/Catalog/7128WL02_1.jpg?sw=800&sh=800" width={30} height={30}  alt="profile picture" />
                                        <div className='d-flex flex-column w-100 text-start '>
                                            <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                            <span>Delivered 16th March</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-100 mt-3 border border-0">
                                        <div className="w-100 card-body d-flex ">
                                        <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw969109e8/images/Sonata/Catalog/7128WL02_1.jpg?sw=800&sh=800" width={30} height={30}  alt="profile picture" />
                                        <div className='d-flex flex-column w-100 text-start '>
                                            <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                            <span>Delivered 16th March</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-100 mt-3 border border-0">
                                        <div className="w-100 card-body d-flex ">
                                        <img src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw969109e8/images/Sonata/Catalog/7128WL02_1.jpg?sw=800&sh=800" width={30} height={30}  alt="profile picture" />
                                        <div className='d-flex flex-column w-100 text-start '>
                                            <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                            <span>Delivered 16th March</span>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                            {clicked==='Coupon'&&
                            <div className='w-100 bg-light text-start pt-3'>
                            <div className='ps-2'>
                                <strong><h4>Your Coupons</h4></strong>
                            </div>
                            <div className='w-100 '>
                                <div className="w-100 mt-4 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://t4.ftcdn.net/jpg/04/65/12/75/360_F_465127589_BfwtgftgEboy01GSVVQZP5hC9XJGXTO1.jpg" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Added 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://t4.ftcdn.net/jpg/04/65/12/75/360_F_465127589_BfwtgftgEboy01GSVVQZP5hC9XJGXTO1.jpg" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://t4.ftcdn.net/jpg/04/65/12/75/360_F_465127589_BfwtgftgEboy01GSVVQZP5hC9XJGXTO1.jpg" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://t4.ftcdn.net/jpg/04/65/12/75/360_F_465127589_BfwtgftgEboy01GSVVQZP5hC9XJGXTO1.jpg" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            }
                            {clicked==='Edit' &&
                            <div className='w-100 bg-light text-start pt-3'>
                            <div className='ps-2'>
                                <strong><h4>Edit Dilevery List</h4></strong>
                            </div>
                            <div className='w-100 '>
                                <div className="w-100 mt-4 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://as1.ftcdn.net/v2/jpg/03/02/89/20/1000_F_302892062_cRWZwNSahfWO2tQ323gdEZlOfnCUBMZd.jpg" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Added 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://as1.ftcdn.net/v2/jpg/03/02/89/20/1000_F_302892062_cRWZwNSahfWO2tQ323gdEZlOfnCUBMZd.jpg" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://as1.ftcdn.net/v2/jpg/03/02/89/20/1000_F_302892062_cRWZwNSahfWO2tQ323gdEZlOfnCUBMZd.jpg" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://as1.ftcdn.net/v2/jpg/03/02/89/20/1000_F_302892062_cRWZwNSahfWO2tQ323gdEZlOfnCUBMZd.jpg" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            }
                            {clicked==='Delete'&&
                            <div className='w-100 bg-light text-start pt-3'>
                            <div className='ps-2'>
                                <strong><h4>Delete credit card information</h4></strong>
                            </div>
                            <div className='w-100 '>
                                <div className="w-100 mt-4 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://cdn-icons-png.freepik.com/512/6048/6048190.png" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Added 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://cdn-icons-png.freepik.com/512/6048/6048190.png" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://cdn-icons-png.freepik.com/512/6048/6048190.png" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://cdn-icons-png.freepik.com/512/6048/6048190.png" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            }
                            {clicked==='Withdraw'&&
                            <div className='w-100 bg-light text-start pt-3'>
                            <div className='ps-2'>
                                <strong><h4>Those who wish to withdraw from membership</h4></strong>
                            </div>
                            <div className='w-100 '>
                                <div className="w-100 mt-4 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://cdn-icons-png.flaticon.com/512/9976/9976760.png" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Added 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://cdn-icons-png.flaticon.com/512/9976/9976760.png" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://cdn-icons-png.flaticon.com/512/9976/9976760.png" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                                <div className="w-100 mt-3 border border-0">
                                    <div className="w-100 card-body d-flex ">
                                    <img src="https://cdn-icons-png.flaticon.com/512/9976/9976760.png" width={30} height={30}  alt="profile picture" />
                                    <div className='d-flex flex-column w-100 text-start '>
                                        <span>Lorem Ipsum dolor sit amet consectetur adipisicind elit.</span>
                                        <span>Delivered 16th March</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                            <div className='d-flex align-items-start mt-3'>
                            <button type='button' className='btn btn-outline-dark  rounded'>View All <i className="fa-solid fa-greater-than"></i></button>
                            </div>
                    </div>
                    <div className='d-flex align-items-start mt-3'>
                            <button type='button' className='btn btn-outline-dark  rounded'>LogOut</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Main
