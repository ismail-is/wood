import PageBanner from "@/src/components/PageBanner";
import Partners from "@/src/components/Partners";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
const Service = () => {
  return (
    <Layout  header={3} footer={1}>
      <PageBanner pageName={"Service"} />
      {/*====== Start Features Section ======*/}
      {/* <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-12">
              <div className="features-content-box p-r z-2 mb-20">
                <div className="section-title mb-50 wow fadeInDown">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    What We Do For Gardening
                  </span>
                  <h2>We Care Your Garden &amp; Landscaping</h2>
                </div>
                <div className="features-item-area">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                        <div className="shape icon-shape">
                          <i className="flaticon-landscape-1" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-landscape-1" />
                        </div>
                        <div className="text">
                          <h5 className="title">Gardens</h5>
                          <p>
                            Sed perspiciatis unde omnis volunteer accusantium
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInDown">
                        <div className="shape icon-shape">
                          <i className="flaticon-spider-plant" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-spider-plant" />
                        </div>
                        <div className="text">
                          <h5 className="title">Event &amp; Programs</h5>
                          <p>
                            Sed perspiciatis unde omnis volunteer accusantium
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInUp">
                        <div className="shape icon-shape">
                          <i className="flaticon-lawnmower" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-lawnmower" />
                        </div>
                        <div className="text">
                          <h5 className="title">Maintenance</h5>
                          <p>
                            Sed perspiciatis unde omnis volunteer accusantium
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="fancy-icon-box-two mb-30 wow fadeInDown">
                        <div className="shape icon-shape">
                          <i className="flaticon-watering-can" />
                        </div>
                        <div className="icon">
                          <i className="flaticon-watering-can" />
                        </div>
                        <div className="text">
                          <h5 className="title">Urbans</h5>
                          <p>
                            Sed perspiciatis unde omnis volunteer accusantium
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="features-two_image-box p-r z-1 text-center pr-lg-60 mb-50 wow fadeInRight">
                <img
                  src="assets/images/features/features-5.jpg"
                  className="mt-50"
                  alt="features image"
                />
                <div className="shape shape-one">
                  <span />
                </div>
                <div className="circle-logo">
                  <div className="inner-circle">
                    <i className="flaticon-carnivorous-plant" />
                    <h5>Gadden</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Features Section ======*/}
      {/*====== Start Service Section ======*/}
      {/* <section className="service-bgc-section p-r z-1 main-bg pt-95 pb-70">
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
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Popular Services
                </span>
                <h2>We Care Your Garden &amp; Landscape</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div className="single-service-item mb-30 wow fadeInUp">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-agriculture" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Yard Cleaning</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-1.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div className="single-service-item mb-30 wow fadeInDown">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-field-1" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-field-1" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Garden Makeup</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-2.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div className="single-service-item mb-30 wow fadeInUp">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-farming" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-farming" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Landscaping</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-3.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div className="single-service-item mb-30 wow fadeInLeft">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-park" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-park" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Lawn Mowing</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-4.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div className="single-service-item mb-30 wow fadeInDown">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-rake" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-rake" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Decorative Plants</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-5.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-sm-12">
              <div className="single-service-item mb-30 wow fadeInRight">
                <div className="service-info">
                  <div className="shape icon-shape">
                    <i className="flaticon-growth-1" />
                  </div>
                  <div className="icon">
                    <i className="flaticon-growth-1" />
                  </div>
                  <h4 className="title">
                    <Link legacyBehavior href="/service-details">
                      <a>Yard Maintaince</a>
                    </Link>
                  </h4>
                </div>
                <div className="service-img">
                  <Link legacyBehavior href="/service-details">
                    <a className="icon-btn">
                      <i className="far fa-plus" />
                    </a>
                  </Link>
                  <img
                    src="assets/images/service/sv-6.jpg"
                    alt="Service Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*====== End Service Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-section pt-95 pb-60">
        <div className="container">
           <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                
                <h2>Renew. Repair. Reimagine.</h2>
                <span className="sub-title" style={{textAlign:"start",color:'black'}}>
                  {/* <i className="flaticon-plant" /> */}
               We specialize in restoring and upgrading your office and commercial furniture to its best form — saving cost, extending life, and enhancing aesthetics. Whether you're revitalizing a workspace or updating worn interiors, our skilled craftsmen and technicians offer tailored solutions with attention to detail and durability
                </span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-12">
              {/*====== Section-title ======*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                {/* <span className="sub-title">
                  <i className="flaticon-plant" />
                  Pricing Plan
                </span> */}
                <h2>Our Services Include</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div className="single-pricing-item mb-40 wow fadeInUp">
                <div className="pricing-img">
                  <img
                    src="assets/images/allimg/service/1.webp"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title"> Office Desk Restoration</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      {/* <i className="fas fa-badge-check" /> */}
                     We restore damaged or aging desks, fixing surfaces, repairing legs, drawers, and restoring finishes to bring them back to like-new condition.
                    </li>
                   
                  </ul>
                  {/* <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div> */}
                </div>
              </div>
            </div>


            {/* 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div className="single-pricing-item mb-40 wow fadeInUp">
                <div className="pricing-img">
                  <img
                    src="assets/images/allimg/service/2.webp"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">  Sofa Re-Upholstery</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      {/* <i className="fas fa-badge-check" /> */}
                    Refresh your old sofas with high-quality re-upholstery. Choose from a variety of fabrics, foams, and finishes to match your space and comfort needs.

                    </li>
                   
                  </ul>
                  {/* <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div> */}
                </div>
              </div>
            </div>
               {/* 2 */}


                  {/* 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div className="single-pricing-item mb-40 wow fadeInUp">
                <div className="pricing-img">
                  <img
                    src="assets/images/allimg/service/3.webp"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title"> Chairs Re-Upholstery & Repair</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      {/* <i className="fas fa-badge-check" /> */}
                    We restore worn-out chairs with fresh padding and fabric. We also repair structure, legs, seat bases, and armrests — making them sturdy and comfortable again.
                    </li>
                   
                  </ul>
                  {/* <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div> */}
                </div>
              </div>
            </div>
             {/* 3 */}


              {/* 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div className="single-pricing-item mb-40 wow fadeInUp">
                <div className="pricing-img">
                  <img
                    src="assets/images/allimg/service/4.webp"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">  Repair of Storage Furniture</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      {/* <i className="fas fa-badge-check" /> */}
                     From broken cabinets to jammed drawers, we fix file cabinets, shelves, credenzas, and more to ensure functionality and form.
                    </li>
                   
                  </ul>
                  {/* <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div> */}
                </div>
              </div>
            </div>
             {/* 4 */}


                {/* 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div className="single-pricing-item mb-40 wow fadeInUp">
                <div className="pricing-img">
                  <img
                    src="assets/images/allimg/service/5.webp"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">  Modernize Partitions</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      {/* <i className="fas fa-badge-check" /> */}
                    Update outdated partitions with modern designs, panels, and functional enhancements — improving privacy, appearance, and space usage.
                    </li>
                   
                  </ul>
                  {/* <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div> */}
                </div>
              </div>
            </div>
             {/* 5 */}


                {/* 6 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div className="single-pricing-item mb-40 wow fadeInUp">
                <div className="pricing-img">
                  <img
                    src="assets/images/allimg/service/6.webp"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">  Moving Parts / Hinges / Runners / Locks Replacement</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      {/* <i className="fas fa-badge-check" /> */}
                    We replace or repair faulty runners, hinges, locks, and sliding mechanisms — making your furniture smooth-operating and secure.
                    </li>
                   
                  </ul>
                  {/* <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div> */}
                </div>
              </div>
            </div>
             {/* 6 */}


                {/* 7 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div className="single-pricing-item mb-40 wow fadeInUp">
                <div className="pricing-img">
                  <img
                    src="assets/images/allimg/service/7.webp"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title"> Fabric Replacement</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      {/* <i className="fas fa-badge-check" /> */}
                     Swap old or damaged fabric with new, durable, and elegant materials for chairs, sofas, partitions, and panels.

                    </li>
                   
                  </ul>
                  {/* <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div> */}
                </div>
              </div>
            </div>
             {/* 7 */}





                {/* 8 */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*====== Pricing Item ======*/}
              <div className="single-pricing-item mb-40 wow fadeInUp">
                <div className="pricing-img">
                  <img
                    src="assets/images/allimg/service/8.webp"
                    alt="Pricing Image"
                  />
                </div>
                <div className="pricing-body">
                  <div className="shape shape-one">
                    <span>
                      <img src="assets/images/pricing/leaf.png" alt="Image" />
                    </span>
                  </div>
                  <div className="pricing-title text-center mb-35">
                    <h3 className="title">  Reconditioning & Scratch Paint Repair</h3>
                  </div>
                  <ul className="mb-35">
                    <li>
                      {/* <i className="fas fa-badge-check" /> */}
                    We remove surface damage, fill scratches, and recoat your furniture with professional finishes for a flawless look.
                    </li>
                   
                  </ul>
                  {/* <h2 className="price">
                    <span className="currency">$</span>19.36
                    <span className="duration">/Per Month</span>
                  </h2>
                  <div className="pricing-button text-center">
                    <a href="#" className="main-btn primary-btn">
                      Choose Package
                    </a>
                    <p>Get 23% Save For Services</p>
                  </div> */}
                </div>
              </div>
            </div>
             {/* 8 */}
            <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="section-title text-center mb-60 wow fadeInDown">
                
                <span className="sub-title" style={{textAlign:"start",color:'black'}}>
                  {/* <i className="flaticon-plant" /> */}
               Let us help you bring your old furniture back to life — saving you money and refreshing your space without the need for full replacement.
                </span>
              </div>
            </div>
          </div>
          
          </div>


            
        </div>
      </section>



        {/* <section className="features-section p-r z-1 pb-100">
        <div className="features-wrapper">
          <div
            className="features-bg bg_cover"
            style={{
              backgroundImage: "url(assets/images/allimg/service/why.webp)",
            }}
          />
          <div className="features-bgc-content-box main-bg text-white wow fadeInRight">
            <div className="features-content-box">
              <div className="section-title mb-50 wow fadeInUp">
               
                <h2>Why Choose Us?</h2>
              </div>
            
              <div className="single-features-item mb-30 wow fadeInDown">
                
                  <h5 className="title" style={{color:'#674630'}}>Cost-effective alternative to furniture replacement</h5>
                  
              </div>
                <div className="single-features-item mb-30 wow fadeInDown">
                
                  <h5 className="title" style={{color:'#674630'}}>Wide selection of fabrics, colors & hardware</h5>
                  
              </div>
                <div className="single-features-item mb-30 wow fadeInDown">
                
                  <h5 className="title" style={{color:'#674630'}}>Skilled workmanship with quality assurance</h5>
                 
              </div>
                <div className="single-features-item mb-30 wow fadeInDown">
               
                  <h5 className="title" style={{color:'#674630'}}>Quick turnaround & minimal disruption</h5>
                 
              </div>
            </div>
          </div>
        </div>
      </section> */}



       <section
        className="cta-bg-section bg_cover pt-100 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*======  CTA Content Box  ======*/}
              <div className="cta-content-box text-white mb-50 wow fadeInLeft">
                <div className="section-title mb-20">
                 
                  <h2>Why Choose Us?</h2>
                </div>
               
                  <div className="single-features-item mb-30 wow fadeInDown">
                  <h5 className="title" style={{color:'#674630'}}>Cost-effective alternative to furniture replacement</h5>
                 </div>
                  <div className="single-features-item mb-30 wow fadeInDown">
                  <h5 className="title" style={{color:'#674630'}}>Wide selection of fabrics, colors & hardware</h5>
                 </div>
                  <div className="single-features-item mb-30 wow fadeInDown">
                  <h5 className="title" style={{color:'#674630'}}>Skilled workmanship with quality assurance</h5>
                 </div>
                  <div className="single-features-item mb-30 wow fadeInDown">
                  <h5 className="title" style={{color:'#674630'}}>Quick turnaround & minimal disruption</h5>
                 </div>
                
              </div>
            </div>
            <div className="col-lg-7">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box mb-50 wow fadeInRight">
                <img src="assets/images/allimg/service/why.webp" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Partners /> */}<br/><br/><br/>
    </Layout>
  );
};
export default Service;
