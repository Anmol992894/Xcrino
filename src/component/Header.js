import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-collapse-sm bg-white">
                <div className='container'>
                <div className='row d-flex justify-content-between'>
                    <div className="col-md-4 my-2 d-flex justify-content-center align-items-center">
                        <a className="navbar-brand pe-1" href="#">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIp-lV27PwLNcRwJUkVRAsW4Usy7RgUcYxEN0kbPtupQ7LeM3ZEi9QoeSDhodh3H_Qw&usqp=CAU" alt="Logo" width="120" height="35" className="d-inline-block align-text-top" />
                        </a>
                        <span style={{ color: "#964B00", fontFamily: "roboto-slab" }} className='fs-1 fw-bold'>Net shop</span>
                    </div>
                    <div className='col-md-4 my-2 d-flex justify-content-center align-items-center border border-dark rounded-pill d-flex align-items-center'>
                        <input type="text" className="border border-0 rounded-pill form-control" placeholder="Keyword Search" />
                        <div className="dropdown border  ">
                            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Detailed Search
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Do Kilo Aloo</a></li>
                                <li><a className="dropdown-item" href="#">Teen Kilo Pyaz</a></li>
                                <li><a className="dropdown-item" href="#">1 Kilo Bhindi</a></li>
                            </ul>
                        </div>
                        <i className="fs-3 text-primary px-2 fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className='col-md-4 my-2 d-flex align-items-center justify-content-center'>
                    <span className='fs-6 ps-1'><i className="text-primary p-1 fa-solid fa-user"></i>MyPage</span>
                    <span className='fs-6 ps-1'><i className="fa-solid p-1 text-primary fa-heart"></i>Favrouite</span>
                    <span className='fs-6 ps-1'><i className="fa-solid p-1 text-primary fa-cart-arrow-down"></i>Cart</span>
                    <span className='fs-6 ps-1'><i className="fa-solid p-1 text-primary fa-circle-question"></i>FAQ</span>
                    <span className="ms-2 fs-6 navbar-toggler-icon"></span>
                    </div>
                </div>
                </div>
                


            </nav>
        </div>
    )
}

export default Header
