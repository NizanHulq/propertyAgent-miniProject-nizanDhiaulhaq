const CreateProperty = () => {
    return (
        <>
            <div className="dashboard__main pl0-md">
                <div className="dashboard__content property-page bgc-f7">
                    <div className="row align-items-center pb40">
                        <div className="col-lg-12">
                            <div className="dashboard_title_area">
                                <h2>Add New Property</h2>
                                <p className="text">We are glad to see you again!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ps-widget bgc-white bdrs12 default-box-shadow2 pt30 mb30 overflow-hidden position-relative">
                                <div className="navtab-style1">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab2" role="tablist">
                                            <button
                                                className="nav-link active fw600 ms-3"
                                                id="nav-item1-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-item1"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-item1"
                                                aria-selected="true"
                                            >
                                                1. Description
                                            </button>
                                            <button
                                                className="nav-link fw600"
                                                id="nav-item2-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-item2"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-item2"
                                                aria-selected="false"
                                            >
                                                2. Media
                                            </button>
                                            <button
                                                className="nav-link fw600"
                                                id="nav-item3-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-item3"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-item3"
                                                aria-selected="false"
                                            >
                                                3. Location
                                            </button>
                                            <button
                                                className="nav-link fw600"
                                                id="nav-item4-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-item4"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-item4"
                                                aria-selected="false"
                                            >
                                                4. Detail
                                            </button>
                                            <button
                                                className="nav-link fw600"
                                                id="nav-item5-tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#nav-item5"
                                                type="button"
                                                role="tab"
                                                aria-controls="nav-item5"
                                                aria-selected="false"
                                            >
                                                5. Amenities
                                            </button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div
                                            className="tab-pane fade show active"
                                            id="nav-item1"
                                            role="tabpanel"
                                            aria-labelledby="nav-item1-tab"
                                        >
                                            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                                                <h4 className="title fz17 mb30">Property Description</h4>
                                                <form className="form-style1">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Title
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Description
                                                                </label>
                                                                <textarea
                                                                    cols={30}
                                                                    rows={5}
                                                                    placeholder="There are many variations of passages."
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Select Category
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>Apartments</option>
                                                                        <option>Bungalow</option>
                                                                        <option>Houses</option>
                                                                        <option>Loft</option>
                                                                        <option>Office</option>
                                                                        <option>Townhome</option>
                                                                        <option>Villa</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Listed in
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>All Listing</option>
                                                                        <option>Active</option>
                                                                        <option>Sold</option>
                                                                        <option>Processing</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Property Status
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>All Cities</option>
                                                                        <option>Pending</option>
                                                                        <option>Processing</option>
                                                                        <option>Published</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Price in $
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Yearly Tax Rate
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    After Price Label
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="d-sm-flex justify-content-between">
                                                                <a className="ud-btn btn-white" href="">
                                                                    Prev Step
                                                                    <i className="fal fa-arrow-right-long" />
                                                                </a>
                                                                <a className="ud-btn btn-dark" href="">
                                                                    Next Step
                                                                    <i className="fal fa-arrow-right-long" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="nav-item2"
                                            role="tabpanel"
                                            aria-labelledby="nav-item2-tab"
                                        >
                                            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                                                <h4 className="title fz17 mb30">
                                                    Upload photos of your property
                                                </h4>
                                                <div className="col-lg-12">
                                                    <div className="upload-img position-relative overflow-hidden bdrs12 text-center mb30 px-2">
                                                        <div className="icon mb30">
                                                            <span className="flaticon-upload" />
                                                        </div>
                                                        <h4 className="title fz17 mb10">
                                                            Upload photos of your property
                                                        </h4>
                                                        <p className="text mb25">
                                                            Photos must be JPEG or PNG format and least 2048x768
                                                        </p>
                                                        <a className="ud-btn btn-white" href="">
                                                            Browse Files
                                                            <i className="fal fa-arrow-right-long" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-5">
                                                    <div className="profile-box position-relative d-md-flex align-items-end mb50">
                                                        <div className="profile-img position-relative overflow-hidden bdrs12 mb20-sm">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/profile-1.jpg"
                                                                alt=""
                                                            />
                                                            <a
                                                                href=""
                                                                className="tag-del"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                title=""
                                                                data-bs-original-title="Delete Image"
                                                                aria-label="Delete Item"
                                                            >
                                                                <span className="fas fa-trash-can" />
                                                            </a>
                                                        </div>
                                                        <div className="profile-img position-relative overflow-hidden bdrs12 ml20 ml0-sm">
                                                            <img
                                                                className="w-100"
                                                                src="images/listings/profile-2.jpg"
                                                                alt=""
                                                            />
                                                            <a
                                                                href=""
                                                                className="tag-del"
                                                                data-bs-toggle="tooltip"
                                                                data-bs-placement="top"
                                                                title=""
                                                                data-bs-original-title="Delete Image"
                                                                aria-label="Delete Item"
                                                            >
                                                                <span className="fas fa-trash-can" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <form className="form-style1">
                                                    <div className="row">
                                                        <h4 className="title fz17 mb30">Video Option</h4>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Video from
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>Youtube</option>
                                                                        <option>Facebook</option>
                                                                        <option>Vimeo</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Embed Video id
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <h4 className="title fz17 mb30">Virtual Tour</h4>
                                                        <div className="col-sm-6 col-xl-12">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Virtual Tour
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Virtual Tour"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="d-sm-flex justify-content-between">
                                                                <a className="ud-btn btn-white" href="">
                                                                    Prev Step
                                                                    <i className="fal fa-arrow-right-long" />
                                                                </a>
                                                                <a className="ud-btn btn-dark" href="">
                                                                    Next Step
                                                                    <i className="fal fa-arrow-right-long" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="nav-item3"
                                            role="tabpanel"
                                            aria-labelledby="nav-item3-tab"
                                        >
                                            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                                                <h4 className="title fz17 mb30">Listing Location</h4>
                                                <form className="form-style1">
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Address
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Country / State
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>Belgiul</option>
                                                                        <option>France</option>
                                                                        <option>Kewait</option>
                                                                        <option>Qatar</option>
                                                                        <option>Netherland</option>
                                                                        <option>Germany</option>
                                                                        <option>Turkey</option>
                                                                        <option>UK</option>
                                                                        <option>USA</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    City
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>California</option>
                                                                        <option>Chicago</option>
                                                                        <option>Los Angeles</option>
                                                                        <option>Manhattan</option>
                                                                        <option>New Jersey</option>
                                                                        <option>New York</option>
                                                                        <option>San Diego</option>
                                                                        <option>San Francisco</option>
                                                                        <option>Texas</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Neighborhood
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Zip
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Country
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>Belgiul</option>
                                                                        <option>France</option>
                                                                        <option>Kewait</option>
                                                                        <option>Qatar</option>
                                                                        <option>Netherland</option>
                                                                        <option>Germany</option>
                                                                        <option>Turkey</option>
                                                                        <option>UK</option>
                                                                        <option>USA</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <div className="mb20 mt30">
                                                                <label className="heading-color ff-heading fw600 mb30">
                                                                    Place the listing pin on the map
                                                                </label>
                                                                <iframe
                                                                    className="h550"
                                                                    loading="lazy"
                                                                    src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
                                                                    title="London Eye, London, United Kingdom"
                                                                    aria-label="London Eye, London, United Kingdom"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Latitude
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Longitude
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder=""
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="d-sm-flex justify-content-between">
                                                                <a className="ud-btn btn-white" href="">
                                                                    Prev Step
                                                                    <i className="fal fa-arrow-right-long" />
                                                                </a>
                                                                <a className="ud-btn btn-dark" href="">
                                                                    Next Step
                                                                    <i className="fal fa-arrow-right-long" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="nav-item4"
                                            role="tabpanel"
                                            aria-labelledby="nav-item4-tab"
                                        >
                                            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                                                <h4 className="title fz17 mb30">Listing Detail</h4>
                                                <form className="form-style1">
                                                    <div className="row">
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Size in ft (only numbers)
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Lot size in ft (only numbers)
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Rooms
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Bedrooms
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Bathrooms
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Custom ID (text)
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Garages
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Garage size
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Year built (numeric)
                                                                </label>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Available from (date)
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="99.aa.yyyy"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Basement
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Extra details
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Roofing
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Exterior Material
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Structure type
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>Apartments</option>
                                                                        <option>Bungalow</option>
                                                                        <option>Houses</option>
                                                                        <option>Loft</option>
                                                                        <option>Office</option>
                                                                        <option>Townhome</option>
                                                                        <option>Villa</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Floors no
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>1st</option>
                                                                        <option>2nd</option>
                                                                        <option>3rd</option>
                                                                        <option>4th</option>
                                                                        <option>5th</option>
                                                                        <option>6th</option>
                                                                        <option>7th</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12">
                                                            <div className="mb20">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Owner/ Agent nots (not visible on front end)
                                                                </label>
                                                                <textarea
                                                                    cols={30}
                                                                    rows={5}
                                                                    placeholder="There are many variations of passages."
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Energy Class
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>All Listing</option>
                                                                        <option>Active</option>
                                                                        <option>Sold</option>
                                                                        <option>Processing</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xl-4">
                                                            <div className="mb30">
                                                                <label className="heading-color ff-heading fw600 mb10">
                                                                    Energy index in kWh/m2a
                                                                </label>
                                                                <div className="location-area">
                                                                    <select className="selectpicker" multiple="">
                                                                        <option>All Cities</option>
                                                                        <option>Pending</option>
                                                                        <option>Processing</option>
                                                                        <option>Published</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="d-sm-flex justify-content-between">
                                                                <a className="ud-btn btn-white" href="">
                                                                    Prev Step
                                                                    <i className="fal fa-arrow-right-long" />
                                                                </a>
                                                                <a className="ud-btn btn-dark" href="">
                                                                    Next Step
                                                                    <i className="fal fa-arrow-right-long" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade"
                                            id="nav-item5"
                                            role="tabpanel"
                                            aria-labelledby="nav-item5-tab"
                                        >
                                            <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                                                <h4 className="title fz17 mb30">Select Amenities</h4>
                                                <div className="row">
                                                    <div className="col-sm-6 col-lg-3 col-xxl-2">
                                                        <div className="checkbox-style1">
                                                            <label className="custom_checkbox">
                                                                Attic
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Basketball court
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Air Conditioning
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Lawn
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Swimming Pool
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Barbeque
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Microwave
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-3 col-xxl-2">
                                                        <div className="checkbox-style1">
                                                            <label className="custom_checkbox">
                                                                TV Cable
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Dryer
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Outdoor Shower
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Washer
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Gym
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Ocean view
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Private space
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-3 col-xxl-2">
                                                        <div className="checkbox-style1">
                                                            <label className="custom_checkbox">
                                                                Lake view
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Wine cellar
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Front yard
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Refrigerator
                                                                <input type="checkbox" defaultChecked="checked" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                WiFi
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Laundry
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="custom_checkbox">
                                                                Sauna
                                                                <input type="checkbox" />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mt30">
                                                        <div className="d-sm-flex justify-content-between">
                                                            <a className="ud-btn btn-white" href="">
                                                                Prev Step
                                                                <i className="fal fa-arrow-right-long" />
                                                            </a>
                                                            <a className="ud-btn btn-thm" href="">
                                                                Submit Property
                                                                <i className="fal fa-arrow-right-long" />
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
                </div>
            </div>
        </>
    )
}

export default CreateProperty