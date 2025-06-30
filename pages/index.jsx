import Counter from "@/src/components/Counter";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
const Index = () => {
  return (
    <Layout header={1} footer={1}>
      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-one gray-bg">
          <div className="shape shape-one animate-float-y">
            <span>
              <img src="assets/images/hero/shape-1.png" alt="shape" />
            </span>
          </div>
          <div className="shape shape-two animate-float-x">
            <span>
              <img src="assets/images/hero/shape-2.png" alt="shape" />
            </span>
          </div>
          <div className="shape shape-three animate-float-x">
            <span>
              <img src="assets/images/hero/shape-3.png" alt="shape" />
            </span>
          </div>
          <div className="container">
            <div className="row align-items-lg-center">
              <div className="col-xl-6 col-lg-12">
                {/*=== Hero Content ===*/}
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">
                  EXTEND THE<br/> LIFE OF YOUR <br/> OFFICE FURNITURE
                  </h1>
                  <p className="wow fadeInDown" data-wow-delay=".6s">
                   Repair, Restore, and Revitalize for a Sustainable Future.
                  </p>
                  <div
                    className="hero-button mb-30 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <Link legacyBehavior href="/about">
                      <a className="main-btn golden-btn mb-10">Explore More</a>
                    </Link>
                    <Link legacyBehavior href="/service">
                      <a className="main-btn filled-btn mb-10">Our Service</a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                {/*=== Hero Image Box ===*/}
                <div
                  className="hero-image-box d-xl-block d-none wow fadeInRight"
                  data-wow-delay=".75s"
                >
                  <img
                    src="assets/images/allimg/home/home.webp"
                    alt="Hero Image"
                  />
                  <div className="shape hero-svg">
                    <svg
                      width={237}
                      height={569}
                      viewBox="0 0 237 569"
                      fill="none"
                    >
                      <path
                        d="M0.552583 568.307L1.99989 0.226473C1.99989 0.226473 237.025 -9.37181 236.276 284.731C235.527 578.834 0.552583 568.307 0.552583 568.307Z"
                        fill="#C98D40"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Banner Section ======*/}



 {/*====== Start About Section  ======*/}
      <section className="about-section pt-100 pb-50 ">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-xl-6">
              {/*====== About Image Box  ======*/}
              <div className="about-one_image-box mb-50 p-r z-1 wow fadeInLeft">
                <div className="shape shape-one">
                  <span />
                </div>
                <img
                  src="assets/images/allimg/home/two.png"
                  className="about-img-one"
                  alt="About Image"
                />
                <img
                  src="assets/images/allimg/home/one.png"
                  className="about-img-two"
                  alt="About Image"
                />
                {/* <img
                  src="assets/images/about/tree.png"
                  className="about-img-three"
                  alt="About Image"
                /> */}
                <div className="experience-item">
                  {/* <h2 className="number">
                    <Counter end={25} />+
                  </h2> */}
                  <img src='assets/images/allimg/home/2030.png' style={{height:'80px'}}></img>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              {/*====== About Content Box  ======*/}
              <div className="about-content-box pl-lg-60 mb-50 wow fadeInRight">
                <div className="section-title mb-30">
                  <span className="sub-title">
                    {/* <i className="flaticon-plant" /> */}
                  About Us
                  </span>
                  <h2>We Care Your Garden & Landscaping</h2>
                </div>
                <p className="mb-30">
                 Our story is all about creating sustainable Future, in a world of fast furniture, we have a different approach: REPAR & RESTORATION. WoodPrism is committed to sustainability and the belief that well-made furniture deserves a second life. We expertly repair structural damage, restore finishes, and revitalize upholstery, significantly extending the lifespan of your furniture. By choosing repair over replacement, you're not only saving money and preserving sentimental value -you're actively reducing waste and conserving resources. We're your partners in sustainable living, maximizing the beauty and function of your furniture for years to come.
                </p>
                {/* <ul className="check-style-one mb-35">
                  <li>
                    <i className="far fa-check" />
                    We’re Experience Gardening
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Awards Winning &amp; Professional Team Member
                  </li>
                </ul> */}
                <Link legacyBehavior href="/about">
                  <a className="main-btn primary-btn">Learn More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section  ======*/}

      {/*====== Start Features Section ======2222*/}
      {/* <section className="features-section-two p-r z-1">
        <div className="features-wrapper-two main-bg wow fadeInDown">
          <div className="shape shape-one">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-two">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="shape shape-three">
            <span>
              <img src="assets/images/shape/leaf-5.png" alt="Leaf" />
            </span>
          </div>
          <div className="features-area pb-30">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Garden Maintenance</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-features-item-two mb-40 wow fadeInDown">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Garden Overhauls</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-features-item-two mb-40 wow fadeInUp">
                  <div className="text">
                    <div className="icon">
                      <i className="fl-icon flaticon-watering-plants" />
                      <a href="#" className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </div>
                    <h5 className="title">Landscape Design</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-area">
            <div className="row pt-70">
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={859} />
                    </h2>
                    <p>Projects Complete</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={99} />%
                    </h2>
                    <p>Satisfactions Rate</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-item-two mb-30 wow fadeInDown">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={683} />+
                    </h2>
                    <p>Expert Team Member</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="single-counter-item-two mb-30 wow fadeInUp">
                  <div className="inner-counter">
                    <div className="icon">
                      <i className="fas fa-check" />
                    </div>
                    <h2 className="number">
                      <Counter end={860} />+
                    </h2>
                    <p>Awards Winning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-box-two wow fadeInRight">
          <h2 className="number">
            <Counter end={25} />
          </h2>
          <h6>Years Of Experience</h6>
          <Link legacyBehavior href="/about">
            <a className="icon-btn">
              <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </section> */}
      {/*====== End Features Section ======222*/}


      {/*====== Start Category Section ======*/}
        {/* <section className="category-section pt-100 pb-60">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-category-item mb-40 wow fadeInLeft">
                  <div className="inner-category">
                    <div className="text">
                      <h3 className="title">Gardening</h3>
                    </div>
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-category-item mb-40 wow fadeInUp">
                  <div className="inner-category">
                    <div className="text">
                      <h3 className="title">Landscape</h3>
                    </div>
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-category-item mb-40 wow fadeInDown">
                  <div className="inner-category">
                    <div className="text">
                      <h3 className="title">Garden Overhauls</h3>
                    </div>
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="single-category-item mb-40 wow fadeInRight">
                  <div className="inner-category">
                    <div className="text">
                      <h3 className="title">Nature Green</h3>
                    </div>
                    <div className="icon">
                      <i className="fal fa-long-arrow-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      {/* <section className="about-section" >
        <div className="container-fluid">
          <div className="about-wrapper gray-bg wow fadeInUp">
            <div className="container">
              <div className="row align-items-xl-center justify-content-center">
  <div className="col-xl-12 col-lg-12">
    <div className="about-two_image-box wow fadeInLeft d-flex justify-content-center">
      <img src="assets/images/allimg/home/Why Choose .webp" alt="Why Choose" style={{width:"100%"}}/>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </section> */}
      <img src="assets/images/allimg/home/Why Choose .webp" alt="Why Choose" style={{padding:'50px'}}/>
      {/*====== End About Section ======*/}
       <section
        className="choose-bg-section bg_cover p-r z-1 pt-100 pb-100"
        style={{ backgroundImage: "url(assets/images/allimg/home/vandm.webp)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title  ======*/}
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                {/* <span className="sub-title">
                  <i className="flaticon-plant" />
                  Why Choose Us
                </span> */}
                <h2>Repairing, Restoring, Transforming, Revitalizing, Preserving</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*====== Choose Wrapper  ======*/}
              <div className="choose-wrapper wow fadeInUp">
                <div className="row">
                  <div className="col-lg-7">
                    {/*====== Choose Tab Pane  ======*/}
                    <Tab.Container defaultActiveKey={"tab1"}>
                      <div className="choose-tab-pane">
                        {/*====== Choose Tab  ======*/}
                        <div className="choose-nav-tab">
                          <Nav as={"ul"} className="nav">
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab1"
                              >
                                Mission
                              </Nav.Link>
                            </li>
                            <li className="nav-item">
                              <Nav.Link
                                as="button"
                                className="nav-link"
                                data-toggle="tab"
                                eventKey="tab2"
                              >
                                Vision
                              </Nav.Link>
                            </li>
                          </Nav>
                        </div>
                        {/*====== Tab Content  ======*/}
                        <Tab.Content className="tab-content">
                          <Tab.Pane className="tab-pane" eventKey="tab1">
                            <div className="choose-content-box">
                              <p>
                                Our facility and dedicated team enable us to optimize our clients' office assets, returning them to their original condition at a significantly reduced cost compared to purchasing new furniture. We specialize in the remanufacturing and refurbishing of desks, chairs, and other office furniture. This process diverts substantial quantities of discarded furniture into a reusable state, thereby mitigating the release of significant amounts of CO2 into the atmosphere. Our services empower our clients make the most of their existing furniture assets, ensuring their continued use for as long as possible, significantly reducing the carbon footprint of furnishing your office while saving the Cost.
                              </p>
                              {/* <div className="thumb-content">
                                <img
                                  src="assets/images/gallery/choose-2.jpg"
                                  alt="Image"
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Trusted Gardening Partners
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Shipping Cost Low
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Professional Team Member
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Awards Winning Company
                                  </li>
                                </ul>
                              </div> */}
                            </div>
                          </Tab.Pane>
                          <Tab.Pane className="tab-pane" eventKey="tab2">
                            <div className="choose-content-box">
                              <p>
                               Leading the movement towards a more sustainable future by restoring furniture to its full potential, extending lifespans, reducing waste, and maximizing the enduring value and beauty of every piece.
                              </p>
                              {/* <div className="thumb-content">
                                <img
                                  src="assets/images/gallery/choose-3.jpg"
                                  alt="Image"
                                />
                                <ul className="check-style-one">
                                  <li>
                                    <i className="far fa-check" />
                                    Trusted Gardening Partners
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Shipping Cost Low
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Professional Team Member
                                  </li>
                                  <li>
                                    <i className="far fa-check" />
                                    Awards Winning Company
                                  </li>
                                </ul>
                              </div> */}
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>
                  <div className="col-lg-5">
                    {/*====== Choose Image Box  ======*/}
                    <div className="choose-image-box">
                      <img
                        src="assets/images/allimg/home/vandm.webp"
                        alt="Choose Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


     {/* <section className="about-bg-section">
        <div
          className="about-bg bg_cover wow fadeInLeft"
          style={{ backgroundImage: "url(assets/images/allimg/home/team.webp)" }}
        />
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-6">
              <div className="about-two_content-box pb-80 wow fadeInRight">
                <div className="section-title">
                  <div className="section-title mb-10">
                    <span className="sub-title">
                    Eco-Friendly Solutions, Cost-Effective Results..
                    </span>
                    <h2>Our Team</h2>
                  </div>
                  <p className="mb-45 " >
                    Our team combines technical mastery with a mission, to fight waste by extending the life of furniture. With backgrounds in sustainable design, we approach every project with innovation and environmental care. We're communicators, problem-solvers, and perfectionists-here to give you peace of mind and stunning results.
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

  <section className="service-details-section pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              {/*====== Service Details Wrapper ======*/}
              <div className="service-info-wrapper pr-lg-40 wow fadeInDown">
                <div className="section-title mb-10 " style={{textAlign:'center'}}>
                  <h2 style={{textAlign:'center'}}>Our Team</h2>
                    <span className="sub-title"  style={{textAlign:'center'}}>
                    Eco-Friendly Solutions, Cost-Effective Results..
                    </span>
                    
                  </div>
                <p>
                 Our team combines technical mastery with a mission, to fight waste by extending the life of furniture. With backgrounds in sustainable design, we approach every project with innovation and environmental care. We're communicators, problem-solvers, and perfectionists-here to give you peace of mind and stunning results.
                </p>
                <div className="block-image wow fadeInDown">
                  <img
                    src="assets/images/allimg/home/team.webp"
                    alt="Service Image"
                  />
                </div>
                </div>

                </div>

                </div>

                </div>
                </section>








       <section className="service-bgc-section p-r z-1 main-bg pt-150 pb-70">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/leaf-1.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/shape/leaf-2.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="shape shape-three">
          <span>
            <img src="assets/images/shape/leaf-3.png" alt="Leaf Png" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              {/*====== Section Title ======*/}
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                {/* <span className="sub-title">
                  <i className="flaticon-plant" />
                  Popular Services
                </span> */}
                <h2>Our Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/service">
                      <a>Office Desk Restoration</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home/s1.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>


               <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/service">
                      <a> Sofa Re-upholstery</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home/s2.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>





               <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/service">
                      <a>Chairs Re-upholstery</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home/s3.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>



               <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/service">
                      <a>Chairs Repair</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home/s4.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>


           
            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/service">
                      <a>Fabrics Replacement</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home/s7.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>


            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/service">
                      <a>Modernize Partitions</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home/s6.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>


 <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/service">
                      <a >Repair Of Storage Furniture</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home/s5.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>




            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/service">
                      <a className="text-center">Moving Parts/runner/hinges/locks</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home/s6.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>





            <div className="col-xl-4 col-lg-6 col-sm-12">
              {/*====== Service Item ======*/}
              <div
                className="single-service-item mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    {/* <i className="flaticon-agriculture" /> */}
                  </div>
                  <h4 className="title mb-4" >
                    <Link legacyBehavior href="/service">
                      <a>Reconditioning Scratches Paint</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/allimg/home/s8.webp"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
      
      {/*====== Start Services Section ======*/}
      {/* <section className="service-section pt-100 pb-20">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-100 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  What We Do
                </span>
                <h2>We Care Your Garden &amp; Landscape</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <i className="flaticon-scissors" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Spring Cleaning</a>
                    </Link>
                  </h4>
                  <p>Sed ut perspiciatis omnisey natus voluptate accusa</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                  <i className="flaticon-watering" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Irrigation &amp; Drainage</a>
                    </Link>
                  </h4>
                  <p>Quis autem reprehe volutate esse quam molestiae</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <i className="flaticon-yard" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Snow &amp; Ice Removal</a>
                    </Link>
                  </h4>
                  <p>We denounce with righteous indignation and dislike</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="icon">
                  <i className="flaticon-growing" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Lawn Fertilization</a>
                    </Link>
                  </h4>
                  <p>To take triviale exam which undertakes laborious</p>
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Services Section ======*/}
      {/*====== Start Project Section ======*/}
      {/* <section className="project-section">
        <div className="container-fluid">
          <Slider
            {...sliderProps.projectsSliderFour}
            className="projects-slider-four wow fadeInUp"
            data-wow-delay=".2s"
          >
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-1.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">01</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Garden Caring</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-2.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">02</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-3.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">03</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Cutting Hedge</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-project-item-four">
              <div className="project-img">
                <img
                  src="assets/images/gallery/project-4.jpg"
                  alt="Project Image"
                />
                <div className="hover-content">
                  <div className="number">04</div>
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Water in Garden</a>
                      </Link>
                    </h3>
                    <p>Professional Gardener for Garden Care</p>
                    <Link legacyBehavior href="/project-details">
                      <a className="icon-btn">
                        <i className="fal fa-long-arrow-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="project-content">
                  <div className="text text-white">
                    <h3 className="title">
                      <Link legacyBehavior href="/project-details">
                        <a>Plants Greenhouse</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
      {/*====== End Project Section ======*/}
      {/*====== Start Team Section ======*/}
      {/* <section className="team-section pt-95 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Team Member
                </span>
                <h2>Meet Our Expert Gardener</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-team-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="member-img">
                  <img src="assets/images/team/team-10.jpg" alt="Team Image" />
                  <div className="social-box">
                    <ul className="social-link">
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
                    </ul>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Benjamin Hughes</a>
                    </Link>
                  </h4>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-team-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="member-img">
                  <img src="assets/images/team/team-11.jpg" alt="Team Image" />
                  <div className="social-box">
                    <ul className="social-link">
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
                    </ul>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Chester J. Thurman</a>
                    </Link>
                  </h4>
                  <p>Junior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-team-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="member-img">
                  <img src="assets/images/team/team-12.jpg" alt="Team Image" />
                  <div className="social-box">
                    <ul className="social-link">
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
                    </ul>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4 className="title">
                    <Link legacyBehavior href="/single-team">
                      <a>Benjamin Hughes</a>
                    </Link>
                  </h4>
                  <p>Senior Gardener</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div
                className="experience-box mt-25 mb-40 text-center wow fadeInUp"
                data-wow-delay=".35s"
              >
                <h2 className="fill-text">25+</h2>
                <h4>Experience Team Member</h4>
                <Link legacyBehavior href="/team">
                  <a className="btn-link">
                    View All Member <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Team Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-seciton pb-50">
        <div className="container">
       
          <div className="row align-items-xl-end">
            <div className="col-lg-12">
  {/*====== Features Image Box ======*/}
  <div className="features-image-box mb-50 wow fadeInLeft mt-4">
     <h2 className="text-center mb-3"> Operation Network</h2>
    <img
      src="assets/images/allimg/home/Map.webp"
      alt="Features Image"
      style={{
        // boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
        borderRadius: "12px", // Optional: removes sharp corners
        // padding:'10px'
      }}
    />
  </div>
</div>

           
          </div>
        </div>
      </section>


       <section
        className="cta-bg-section bg_cover pt-100 pb-50 p-r z-1"
        style={{ backgroundImage: "url(assets/images/allimg/home/Image.webp)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*======  CTA Content Box  ======*/}
              <div className="cta-content-box text-white mb-50 wow fadeInLeft">
                <div className="section-title mb-20">
                  {/* <span className="sub-title">
                    <i className="flaticon-plant" />
                    Need a Expert
                  </span> */}
                  <h2>Extend The Life Of Your Office Furniture</h2>
                </div>
                <p className="mb-35">
                 Repair, Restore, and Revitalize for a Sustainable Future.
                </p>
                
              </div>
            </div>
            <div className="col-lg-7 mb-95">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box mb-50 wow fadeInRight">
                <img src="assets/images/allimg/home/Image.webp" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="working-process-section pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                {/* <span className="sub-title">
                  <i className="flaticon-plant" />
                  Working Process
                </span> */}
                <h2> Industries We Serve</h2>
              </div>
            </div>
          </div>
          <div className="working-process-wrapper wow fadeInUp">
            <div className="row no-lg-gutters">
              {/*====== Working Process Wrapper ======*/}
              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    {/* <div className="step">Step 01</div> */}
                    <div className="icon">
                      <img src="assets/images/allimg/icon/Airports.webp" alt="Image"  style={{height:'60px'}}/>
                    </div>
                    <div className="text">
                      <h4 className="title">Airports</h4>
                      {/* <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" /> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    {/* <div className="step">Step 01</div> */}
                    <div className="icon">
                      <img src="assets/images/allimg/icon/Commercial Property.webp" alt="Image"  style={{height:'60px'}}/>
                    </div>
                    <div className="text">
                      <h4 className="title">Commercial Property</h4>
                      {/* <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" /> */}
                    </div>
                  </div>
                </div>
              </div>




              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    {/* <div className="step">Step 01</div> */}
                    <div className="icon">
                      <img src="assets/images/allimg/icon/Compounds.webp" alt="Image"  style={{height:'60px'}}/>
                    </div>
                    <div className="text">
                      <h4 className="title">Compounds</h4>
                      {/* <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" /> */}
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    {/* <div className="step">Step 01</div> */}
                    <div className="icon">
                      <img src="assets/images/allimg/icon/Hospitals.webp" alt="Image"  style={{height:'60px'}}/>
                    </div>
                    <div className="text">
                      <h4 className="title">Hospitals</h4>
                      {/* <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" /> */}
                    </div>
                  </div>
                </div>
              </div>


               <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    {/* <div className="step">Step 01</div> */}
                    <div className="icon">
                      <img src="assets/images/allimg/icon/Hotels.webp" alt="Image"  style={{height:'60px'}}/>
                    </div>
                    <div className="text">
                      <h4 className="title">Hotels</h4>
                      {/* <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" /> */}
                    </div>
                  </div>
                </div>
              </div>


               <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    {/* <div className="step">Step 01</div> */}
                    <div className="icon">
                      <img src="assets/images/allimg/icon/Offices.webp" alt="Image"  style={{height:'60px'}}/>
                    </div>
                    <div className="text">
                      <h4 className="title">Offices</h4>
                      {/* <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" /> */}
                    </div>
                  </div>
                </div>
              </div>


               <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    {/* <div className="step">Step 01</div> */}
                    <div className="icon">
                      <img src="assets/images/allimg/icon/University.webp" alt="Image"  style={{height:'60px'}}/>
                    </div>
                    <div className="text">
                      <h4 className="title">University</h4>
                      {/* <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" /> */}
                    </div>
                  </div>
                </div>
              </div>


               <div className="col-lg-3 col-md-6">
                {/*====== Single Process Item ======*/}
                <div className="single-process-item">
                  <div className="inner-process-item">
                    {/* <div className="step">Step 01</div> */}
                    <div className="icon">
                      <img src="assets/images/allimg/icon/Villas.webp" alt="Image"  style={{height:'60px'}}/>
                    </div>
                    <div className="text">
                      <h4 className="title">Villas</h4>
                      {/* <p>Sed ut perspiciatis omnis volunteer accusa</p>
                      <img src="assets/images/line.png" alt="Line" /> */}
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      {/* <section className="testimonial-section">
        <div className="container-fluid">
          <div className="testimonial-quote-area p-r z-1 main-bg">
            <div className="shape shape-one">
              <span>
                <img src="assets/images/shape/leaf-4.png" alt="Leaf" />
              </span>
            </div>
            <div className="quote-wrapper wow fadeInDown">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-10 col-lg-12">
                    <div className="client-quote-box">
                      <div className="icon">
                        <i className="fal fa-long-arrow-right" />
                      </div>
                      <div className="text">
                        <h2 className="number">
                          <Counter end={372} />+
                        </h2>
                        <h4>
                          Global Clients Happy to Get Our gardening Services{" "}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-area pt-70 pb-50 pl-15 pr-15 wow fadeInUp">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-1 order-md-1 order-2">
                    <div className="testimonial-dots mb-20" />
                  </div>
                  <div className="col-lg-11 order-md-2 order-1">
                    <Slider
                      {...sliderProps.testimonialSliderThree}
                      className="testimonial-slider-three mb-20"
                    >
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Norman M. Devore</h6>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Douglas D. Hall</h6>
                              <p className="position">Senior Gardener</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Norman M. Devore</h6>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                      <div className="single-testimonial-item-three d-flex">
                        <div className="testimonial-inner-content mb-30">
                          <ul className="ratings">
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                            <li>
                              <i className="far fa-star" />
                            </li>
                          </ul>
                          <p>
                            On the other hand we denounce with righteous
                            indignation and dislike men who are beguiled and
                            demoralized by the charms of pleasure
                          </p>
                          <div className="quote-title">
                            <div className="icon">
                              <img
                                src="assets/images/testimonial/quote3.png"
                                alt="Quote Image"
                              />
                            </div>
                            <div className="title">
                              <h6>Douglas D. Hall</h6>
                              <p className="position">Senior Gardener</p>
                            </div>
                          </div>
                        </div>
                        <div className="testimonial-author mb-30">
                          <img
                            src="assets/images/testimonial/img-4.jpg"
                            className="rounded-circle"
                            alt="testimonial image"
                          />
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      {/* <section className="blog-section pt-100 pb-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  News &amp; Blog
                </span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="single-blog-post-four mb-40 wow fadeInLeft">
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <i className="far fa-calendar-alt" />
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Progressively an Enhanced Accessible Filterable</a>
                    </Link>
                  </h4>
                  <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-15.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="single-blog-post-four mb-40 wow fadeInRight">
                <div className="entry-content">
                  <div className="post-meta">
                    <span className="date">
                      <Link legacyBehavior href="/blog-details">
                        <a>25 December 2022</a>
                      </Link>
                    </span>
                  </div>
                  <h4 className="entry-title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Build Up Progressively Enhanced Accessible</a>
                    </Link>
                  </h4>
                  <p>Quis autem vel reprehenderit voluptate velit esse quam</p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="btn-link">
                      Read More
                      <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
                <div className="post-thumbnail">
                  <img
                    src="assets/images/blog/blog-16.jpg"
                    alt="Post Thumbnail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};
export default Index;
