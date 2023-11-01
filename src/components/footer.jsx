import headerLogo from '@/assets/header-logo2.svg'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <section className="footer-style1 pt60 pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="footer-widget mb-4 mb-lg-5">
                            <a className="footer-logo" href="index.html">
                                <img className="mb40" src={headerLogo} alt="" style={{ width: 150 }} />
                            </a>
                            <div className="row mb-4 mb-lg-5">
                                <div className="col-auto">
                                    <div className="contact-info">
                                        <p className="info-title">Hubungi Kami</p>
                                        <h6 className="info-phone">
                                            <a href="+(0)-123-050-945-02">+(1) 123 456 789</a>
                                        </h6>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="contact-info">
                                        <p className="info-title">Membutuhkan layanan lebih lanjut?</p>
                                        <h6 className="info-mail">
                                            <a href="mailto:hi@homez.com">Genproperty@homez.com</a>
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div className="social-widget">
                                <h6 className="text-white mb20">Ikuti Sosial Media Kami</h6>
                                <div className="social-style1 ">
                                    <a className='me-2' href="">
                                        <FontAwesomeIcon icon={faFacebook} size="2xl" style={{ color: "#1c4792", }} />
                                    </a>
                                    <a className='me-2' href="">
                                        <FontAwesomeIcon icon={faTwitter} size="2xl" style={{ color: "#2977ff", }} />
                                    </a>
                                    <a className='me-2' href="">
                                        <FontAwesomeIcon icon={faInstagram} size="2xl" style={{ color: "#d1154d", }} />
                                    </a>
                                    <a className='me-2' href="">
                                        <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{ color: "#064cc6", }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="footer-widget mb-4 mb-lg-5">
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <div className="link-style1 mb-3">
                                        <h6 className="text-white mb25">Pencarian Terpopuler</h6>
                                        <div className="link-list">
                                            <a href="">Apartmen dijual murah</a>
                                            <a href="">Apartment disewakan</a>
                                            <a href="">Rumah minimalis</a>
                                            <a href="">Rumah old money</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="app-widget">
                                        <h5 className="title text-white mb10">Apps</h5>
                                        <div className="row mb-4 mb-lg-5">
                                            <div className="col-auto">
                                                <a href="">
                                                    <div className="app-info d-flex align-items-center mb10">
                                                        <div className="flex-shrink-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                                                        </div>
                                                        <div className="flex-grow-1 ml20">
                                                            <p className="app-text fz13 mb0">Download di</p>
                                                            <h6 className="app-title text-white fz14">Apple Store</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="col-auto">
                                                <a href="">
                                                    <div className="app-info d-flex align-items-center mb10">
                                                        <div className="flex-shrink-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
                                                        </div>
                                                        <div className="flex-grow-1 ml20">
                                                            <p className="app-text fz13 mb0">Dapatkan di</p>
                                                            <h6 className="app-title text-white fz14">Google Play</h6>
                                                        </div>
                                                    </div>
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
            <div className="container white-bdrt1 py-4">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="text-center text-lg-start">
                            <p className="copyright-text text-gray ff-heading">
                                © GenProperty - All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer