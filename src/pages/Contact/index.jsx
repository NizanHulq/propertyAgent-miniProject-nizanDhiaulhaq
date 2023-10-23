const Contact = () => {
    return (
        <>
            {/* Our Contact With Map */}
            <section className="p-0">
                <iframe
                    className="home8-map contact-page"
                    loading="lazy"
                    src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
                    title="London Eye, London, United Kingdom"
                    aria-label="London Eye, London, United Kingdom"
                />
            </section>
            <section>
                <div className="container">
                    <div className="row d-flex align-items-end">
                        <div className="col-lg-5 position-relative">
                            <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white">
                                <h4 className="form-title mb25">Have questions? Get in touch!</h4>
                                <form className="form-style1">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb20">
                                                <label className="heading-color ff-heading fw600 mb10">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb20">
                                                <label className="heading-color ff-heading fw600 mb10">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb20">
                                                <label className="heading-color ff-heading fw600 mb10">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb10">
                                                <label className="heading-color ff-heading fw600 mb10">
                                                    Textarea
                                                </label>
                                                <textarea
                                                    cols={30}
                                                    rows={4}
                                                    placeholder="There are many variations of passages."
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-grid">
                                                <a className="ud-btn btn-thm" href="page-contact.html">
                                                    Submit
                                                    <i className="fal fa-arrow-right-long" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-2">
                            <h2 className="mb30 text-capitalize">
                                We’d love to hear <br className="d-none d-lg-block" />
                                from you.
                            </h2>
                            <p className="text">
                                We are here to answer any question you may have. As a partner of
                                corporates, realton has more than 9,000 offices of all sizes and all
                                potential of session.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact