import Link from "next/link";
const Footer1 = () => {
  return (
    <footer className="footer-area gray-bg">
      <div className="container">
        {/*====== Footer Widget ======*/}
        <div className="footer-widget-area pt-80 pb-40">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInUp">
                <div className="widget-content">
                  <div className="footer-logo mb-25">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/allimg/Woodprism Logo.png"
                          alt="Logo"
                        />
                      </a>
                    </Link>
                  </div>
                   <div className="top-right float-lg-right">
                  {/* <ul className="social-link">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul> */}
                </div>
                  {/* <p>
                    Quis autem eum reprehenderit volutate velit quam molestiae
                    conseuatur{" "}
                  </p> */}
                  {/* <form
                    onSubmit={(e) => e.preventDefault()}
                    className="search-box"
                  >
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                      <button className="submit-btn">
                        <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget contact-info-widget mb-40 wow fadeInDown">
                <h4 className="widget-title">Get In Touch</h4>
                <div className="widget-content">
                  <ul className="info-list">
                    <li>Saudi Arabia</li>
                    <li>
                      <a href="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <a href="tel:+000(123)45688">+000 (123) 456 88</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">Quick Link</h4>
                <div className="widget-content">
                  <ul className="footer-nav">
                    
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="about">About</a>
                    </li>
                    <li>
                      <a href="service">Service</a>
                    </li>
                    <li>
                      <a href="gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-gallery-widget float-lg-right mb-40 wow fadeInDown">
                <h4 className="widget-title">Gallery</h4>
                <div className="widget-content">
                  <ul className="gallery-list">
                    <li>
                      <Link
                        href="service"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/allimg/service/1.webp"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </Link>
                    </li>


                     <li>
                      <Link
                        href="service"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/allimg/service/2.webp"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </Link>
                    </li> <li>
                      <Link
                        href="service"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/allimg/service/3.webp"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </Link>
                    </li>
                  

                   <li>
                      <Link
                        href="service"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/allimg/service/4.webp"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </Link>
                    </li>
               

                <li>
                      <Link
                        href="service"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/allimg/service/5.webp"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </Link>
                    </li>

                     <li>
                      <Link
                        href="service"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/allimg/service/6.webp"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </Link>
                    </li>


                     <li>
                      <Link
                        href="service"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/allimg/service/7.webp"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </Link>
                    </li>


                     <li>
                      <Link
                        href="service"
                        className="img-popup"
                      >
                        <img
                          src="assets/images/allimg/service/8.webp"
                          alt="Image"
                        />
                        <div className="hover-overlay">
                          <i className="fas fa-arrow-right" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Copyright Area ===*/}
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Copyright Text ======*/}
              <div className="copyright-text">
             <p>© 2025 Woodprism. Design By <a href="https://mscreation.tech/" target="_blank">M S Creation</a></p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Copyright Nav ======*/}
              <div className="copyright-nav float-lg-right">
                <ul>
                  <li>
                    <a href="#">WHATSAPP</a>
                  </li>
                  <li>
                    <a href="#">INSTAGRAM</a>
                  </li>
                  <li>
                    <a href="#">LINKEDIN</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer1;
