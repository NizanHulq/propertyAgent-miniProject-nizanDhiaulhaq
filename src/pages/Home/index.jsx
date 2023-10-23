
const Home = () => {

    return (
        <>
            <section className="home-banner-style1 p0">
                <div className="home-style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-11 mx-auto">
                                <div className="inner-banner-style1 text-center">
                                    <h6 className="hero-sub-title animate-up-1">THE BEST WAY TO</h6>
                                    <h2 className="hero-title animate-up-2">Find Your Dream Home</h2>
                                    <p className="hero-text fz15 animate-up-3">
                                        We’ve more than 745,000 apartments, place &amp; plot.
                                    </p>
                                    <div className="advance-search-tab mt70 mt30-md mx-auto animate-up-3">
                                        <ul className="nav nav-tabs p-0 m-0" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link active"
                                                    id="home-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="home"
                                                    aria-selected="true"
                                                >
                                                    Buy
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="profile-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="profile"
                                                    aria-selected="false"
                                                >
                                                    Rent
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className="nav-link"
                                                    id="contact-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#contact"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="contact"
                                                    aria-selected="false"
                                                >
                                                    Sold
                                                </button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="home"
                                                role="tabpanel"
                                                aria-labelledby="home-tab"
                                            >
                                                <div className="advance-content-style1">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-9">
                                                            <div className="advance-search-field position-relative text-start">
                                                                <form
                                                                    action="#"
                                                                    method="get"
                                                                    className="form-search position-relative"
                                                                    acceptCharset="utf-8"
                                                                >
                                                                    <div className="box-search">
                                                                        <span className="icon flaticon-home-1" />
                                                                        <input
                                                                            className="form-control bgc-f7 bdrs12"
                                                                            type="text"
                                                                            name="search"
                                                                            placeholder="Enter an address, neighborhood, city, or ZIP code"
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-3">
                                                            <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                                                                <button
                                                                    className="advance-search-btn"
                                                                    type="button"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModal"
                                                                >
                                                                    <span className="flaticon-settings" /> Advanced
                                                                </button>
                                                                <button
                                                                    className="advance-search-icon ud-btn btn-thm ms-4"
                                                                    type="button"
                                                                >
                                                                    <span className="flaticon-search" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="profile"
                                                role="tabpanel"
                                                aria-labelledby="profile-tab"
                                            >
                                                <div className="advance-content-style1">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-9">
                                                            <div className="advance-search-field position-relative text-start">
                                                                <form
                                                                    action="#"
                                                                    method="get"
                                                                    className="form-search position-relative"
                                                                    acceptCharset="utf-8"
                                                                >
                                                                    <div className="box-search">
                                                                        <span className="icon flaticon-home-1" />
                                                                        <input
                                                                            className="form-control bgc-f7 bdrs12"
                                                                            type="text"
                                                                            name="search"
                                                                            placeholder="Enter an address, neighborhood, city, or ZIP code"
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-3">
                                                            <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                                                                <button
                                                                    className="advance-search-btn"
                                                                    type="button"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModal"
                                                                >
                                                                    <span className="flaticon-settings" /> Advanced
                                                                </button>
                                                                <button
                                                                    className="advance-search-icon ud-btn btn-thm ms-4"
                                                                    type="button"
                                                                >
                                                                    <span className="flaticon-search" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="contact"
                                                role="tabpanel"
                                                aria-labelledby="contact-tab"
                                            >
                                                <div className="advance-content-style1">
                                                    <div className="row">
                                                        <div className="col-md-8 col-lg-9">
                                                            <div className="advance-search-field position-relative text-start">
                                                                <form
                                                                    action="#"
                                                                    method="get"
                                                                    className="form-search position-relative"
                                                                    acceptCharset="utf-8"
                                                                >
                                                                    <div className="box-search">
                                                                        <span className="icon flaticon-home-1" />
                                                                        <input
                                                                            className="form-control bgc-f7 bdrs12"
                                                                            type="text"
                                                                            name="search"
                                                                            placeholder="Enter an address, neighborhood, city, or ZIP code"
                                                                        />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-lg-3">
                                                            <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0">
                                                                <button
                                                                    className="advance-search-btn"
                                                                    type="button"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#exampleModal"
                                                                >
                                                                    <span className="flaticon-settings" /> Advanced
                                                                </button>
                                                                <button
                                                                    className="advance-search-icon ud-btn btn-thm ms-4"
                                                                    type="button"
                                                                >
                                                                    <span className="flaticon-search" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#explore-property">
                        <div className="mouse_scroll animate-up-4">
                            <img src="images/about/home-scroll.png" alt="" />
                        </div>
                    </a>
                </div>
            </section>

            {/* Popular Property */}
            <section className="bgc-dark">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="00ms">
                        <div className="col-lg-9">
                            <div className="main-title2">
                                <h2 className="title text-white">Discover Popular Properties</h2>
                                <p className="paragraph text-white">
                                    Aliquam lacinia diam quis lacus euismod
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="dark-light-navtab text-start text-lg-end mt-0 mt-lg-4 mb-4">
                                <ul
                                    className="nav nav-pills justify-content-start justify-content-lg-end"
                                    id="pills-tab"
                                    role="tablist"
                                >
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link active"
                                            id="pills-home-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-home"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-home"
                                            aria-selected="true"
                                        >
                                            For Rent
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link me-0"
                                            id="pills-profile-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-profile"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-profile"
                                            aria-selected="false"
                                        >
                                            For Sale
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 wow fadeInUp" data-wow-delay="300ms">
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-home"
                                    role="tabpanel"
                                    aria-labelledby="pills-home-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="dots_none nav_none slider-dib-sm slider-4-grid3 vam_nav_style owl-theme owl-carousel">
                                                <div className="item">
                                                    <div className="listing-style1">
                                                        <div className="list-thumb">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/g1-1.jpg"
                                                                alt=""
                                                            />
                                                            <div className="list-tag fz12">
                                                                <span className="flaticon-electricity me-2" />
                                                                FEATURED
                                                            </div>
                                                            <div className="list-price">
                                                                $84,000 / <span>mo</span>
                                                            </div>
                                                        </div>
                                                        <div className="list-content pb-2">
                                                            <h6 className="list-title">
                                                                <a href="page-property-single-v1.html">
                                                                    Equestrian Family Home
                                                                </a>
                                                            </h6>
                                                            <p className="list-text">California City, CA, USA</p>
                                                            <div className="list-meta d-flex align-items-center">
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-bed" />3 bed
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-shower" />4 bath
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-expand" />
                                                                    1200 sqft
                                                                </a>
                                                            </div>
                                                            <hr className="mt-2 mb-2" />
                                                            <div className="list-meta2 d-flex justify-content-between align-items-center">
                                                                <span className="for-what">For Rent</span>
                                                                <div className="icons d-flex align-items-center">
                                                                    <a href="">
                                                                        <span className="flaticon-fullscreen" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-new-tab" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-like" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="listing-style1">
                                                        <div className="list-thumb">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/g1-2.jpg"
                                                                alt=""
                                                            />
                                                            <div className="list-price">
                                                                $12,000 / <span>mo</span>
                                                            </div>
                                                        </div>
                                                        <div className="list-content pb-2">
                                                            <h6 className="list-title">
                                                                <a href="page-property-single-v1.html">
                                                                    Luxury villa in Rego Park
                                                                </a>
                                                            </h6>
                                                            <p className="list-text">California City, CA, USA</p>
                                                            <div className="list-meta d-flex align-items-center">
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-bed" />3 bed
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-shower" />4 bath
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-expand" />
                                                                    1200 sqft
                                                                </a>
                                                            </div>
                                                            <hr className="mt-2 mb-2" />
                                                            <div className="list-meta2 d-flex justify-content-between align-items-center">
                                                                <span className="for-what">For Rent</span>
                                                                <div className="icons d-flex align-items-center">
                                                                    <a href="">
                                                                        <span className="flaticon-fullscreen" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-new-tab" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-like" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="listing-style1">
                                                        <div className="list-thumb">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/g1-3.jpg"
                                                                alt=""
                                                            />
                                                            <div className="list-price">
                                                                $19,000 / <span>mo</span>
                                                            </div>
                                                        </div>
                                                        <div className="list-content pb-2">
                                                            <h6 className="list-title">
                                                                <a href="page-property-single-v1.html">
                                                                    Villa on Hollywood Boulevard
                                                                </a>
                                                            </h6>
                                                            <p className="list-text">California City, CA, USA</p>
                                                            <div className="list-meta d-flex align-items-center">
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-bed" />3 bed
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-shower" />4 bath
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-expand" />
                                                                    1200 sqft
                                                                </a>
                                                            </div>
                                                            <hr className="mt-2 mb-2" />
                                                            <div className="list-meta2 d-flex justify-content-between align-items-center">
                                                                <span className="for-what">For Rent</span>
                                                                <div className="icons d-flex align-items-center">
                                                                    <a href="">
                                                                        <span className="flaticon-fullscreen" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-new-tab" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-like" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="listing-style1">
                                                        <div className="list-thumb">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/g1-4.jpg"
                                                                alt=""
                                                            />
                                                            <div className="list-price">
                                                                $17,000 / <span>mo</span>
                                                            </div>
                                                        </div>
                                                        <div className="list-content pb-2">
                                                            <h6 className="list-title">
                                                                <a href="page-property-single-v1.html">
                                                                    Villa on Hollywood Boulevard
                                                                </a>
                                                            </h6>
                                                            <p className="list-text">California City, CA, USA</p>
                                                            <div className="list-meta d-flex align-items-center">
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-bed" />3 bed
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-shower" />4 bath
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-expand" />
                                                                    1200 sqft
                                                                </a>
                                                            </div>
                                                            <hr className="mt-2 mb-2" />
                                                            <div className="list-meta2 d-flex justify-content-between align-items-center">
                                                                <span className="for-what">For Rent</span>
                                                                <div className="icons d-flex align-items-center">
                                                                    <a href="">
                                                                        <span className="flaticon-fullscreen" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-new-tab" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-like" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-profile"
                                    role="tabpanel"
                                    aria-labelledby="pills-profile-tab"
                                >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="dots_none nav_none slider-dib-sm slider-4-grid3 vam_nav_style owl-theme owl-carousel">
                                                <div className="item">
                                                    <div className="listing-style1">
                                                        <div className="list-thumb">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/g1-1.jpg"
                                                                alt=""
                                                            />
                                                            <div className="list-tag fz12">
                                                                <span className="flaticon-electricity me-2" />
                                                                FEATURED
                                                            </div>
                                                            <div className="list-price">
                                                                $84,000 / <span>mo</span>
                                                            </div>
                                                        </div>
                                                        <div className="list-content pb-2">
                                                            <h6 className="list-title">
                                                                <a href="page-property-single-v1.html">
                                                                    Equestrian Family Home
                                                                </a>
                                                            </h6>
                                                            <p className="list-text">California City, CA, USA</p>
                                                            <div className="list-meta d-flex align-items-center">
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-bed" />3 bed
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-shower" />4 bath
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-expand" />
                                                                    1200 sqft
                                                                </a>
                                                            </div>
                                                            <hr className="mt-2 mb-2" />
                                                            <div className="list-meta2 d-flex justify-content-between align-items-center">
                                                                <span className="for-what">For Rent</span>
                                                                <div className="icons d-flex align-items-center">
                                                                    <a href="">
                                                                        <span className="flaticon-fullscreen" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-new-tab" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-like" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="listing-style1">
                                                        <div className="list-thumb">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/g1-2.jpg"
                                                                alt=""
                                                            />
                                                            <div className="list-price">
                                                                $12,000 / <span>mo</span>
                                                            </div>
                                                        </div>
                                                        <div className="list-content pb-2">
                                                            <h6 className="list-title">
                                                                <a href="page-property-single-v1.html">
                                                                    Luxury villa in Rego Park
                                                                </a>
                                                            </h6>
                                                            <p className="list-text">California City, CA, USA</p>
                                                            <div className="list-meta d-flex align-items-center">
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-bed" />3 bed
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-shower" />4 bath
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-expand" />
                                                                    1200 sqft
                                                                </a>
                                                            </div>
                                                            <hr className="mt-2 mb-2" />
                                                            <div className="list-meta2 d-flex justify-content-between align-items-center">
                                                                <span className="for-what">For Rent</span>
                                                                <div className="icons d-flex align-items-center">
                                                                    <a href="">
                                                                        <span className="flaticon-fullscreen" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-new-tab" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-like" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="listing-style1">
                                                        <div className="list-thumb">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/g1-3.jpg"
                                                                alt=""
                                                            />
                                                            <div className="list-price">
                                                                $19,000 / <span>mo</span>
                                                            </div>
                                                        </div>
                                                        <div className="list-content pb-2">
                                                            <h6 className="list-title">
                                                                <a href="page-property-single-v1.html">
                                                                    Villa on Hollywood Boulevard
                                                                </a>
                                                            </h6>
                                                            <p className="list-text">California City, CA, USA</p>
                                                            <div className="list-meta d-flex align-items-center">
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-bed" />3 bed
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-shower" />4 bath
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-expand" />
                                                                    1200 sqft
                                                                </a>
                                                            </div>
                                                            <hr className="mt-2 mb-2" />
                                                            <div className="list-meta2 d-flex justify-content-between align-items-center">
                                                                <span className="for-what">For Rent</span>
                                                                <div className="icons d-flex align-items-center">
                                                                    <a href="">
                                                                        <span className="flaticon-fullscreen" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-new-tab" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-like" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item">
                                                    <div className="listing-style1">
                                                        <div className="list-thumb">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/g1-4.jpg"
                                                                alt=""
                                                            />
                                                            <div className="list-price">
                                                                $17,000 / <span>mo</span>
                                                            </div>
                                                        </div>
                                                        <div className="list-content pb-2">
                                                            <h6 className="list-title">
                                                                <a href="page-property-single-v1.html">
                                                                    Villa on Hollywood Boulevard
                                                                </a>
                                                            </h6>
                                                            <p className="list-text">California City, CA, USA</p>
                                                            <div className="list-meta d-flex align-items-center">
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-bed" />3 bed
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-shower" />4 bath
                                                                </a>
                                                                <a className="me-2" href="">
                                                                    <span className="flaticon-expand" />
                                                                    1200 sqft
                                                                </a>
                                                            </div>
                                                            <hr className="mt-2 mb-2" />
                                                            <div className="list-meta2 d-flex justify-content-between align-items-center">
                                                                <span className="for-what">For Rent</span>
                                                                <div className="icons d-flex align-items-center">
                                                                    <a href="">
                                                                        <span className="flaticon-fullscreen" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-new-tab" />
                                                                    </a>
                                                                    <a href="">
                                                                        <span className="flaticon-like" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid d-md-block text-center mt30 mt0-md">
                                <a href="page-grid-default-v1.html" className="ud-btn btn-thm">
                                    See All Properties
                                    <i className="fal fa-arrow-right-long" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home