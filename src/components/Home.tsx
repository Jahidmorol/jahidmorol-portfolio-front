function Home() {
  return (
    <div id="wrapper">
      <div className="scr-bar_container">
        <div
          className="content"
          data-pagetitle="About Me"
          data-pagesubtitle="Home"
        >
          <div className="bg-top"></div>
          <div className="bg-bottom"></div>

          <section className="hero-section">
            <div className="bg-wrap hero-section_bg">
              <div
                className="bg"
                style={{ backgroundImage: "url(images/bg/1.jpg)" }}
              ></div>
            </div>
            <div className="hero-section-title">
              <div className="row">
                <div className="col-md-7">
                  <div className="rotate_text hero-decor-let">
                    <div>Web Design</div>
                    <div>
                      <span>Ui/Ux Design</span>
                    </div>
                    <div>Branding</div>
                    <div>
                      <span>Ecommerce</span>
                    </div>
                  </div>
                  <h2>Welcome to My portfolio</h2>
                  <div className="video_btn-wrap fl-wrap">
                    <a
                      href="https://vimeo.com/176916362"
                      className="image-popup gradient-bg"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                    <span>Play Video Presentation</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="row">
              <div className="col-md-7">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="facts-container fl-wrap">
                  <div className="inline-facts-wrap">
                    <div className="inline-facts">
                      <div className="milestone-counter">
                        <div className="stats animaper">
                          <div className="num" data-content="0" data-num="145">
                            145
                          </div>
                        </div>
                      </div>
                      <h6>Finished projects</h6>
                    </div>
                  </div>
                  <div className="inline-facts-wrap">
                    <div className="inline-facts">
                      <div className="milestone-counter">
                        <div className="stats animaper">
                          <div className="num" data-content="0" data-num="825">
                            825
                          </div>
                        </div>
                      </div>
                      <h6>Working hours</h6>
                    </div>
                  </div>
                  <div className="inline-facts-wrap">
                    <div className="inline-facts">
                      <div className="milestone-counter">
                        <div className="stats animaper">
                          <div className="num" data-content="0" data-num="15">
                            15
                          </div>
                        </div>
                      </div>
                      <h6>Awards won</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="hero-info-list fl-wrap">
                  <ul>
                    <li>
                      <strong>Age</strong>
                      <span>24</span>
                    </li>
                    <li>
                      <strong>Freelance</strong>
                      <span>Available</span>
                    </li>
                    <li>
                      <strong>Residence</strong>
                      <span>Ukraine</span>
                    </li>
                    <li>
                      <strong>Address</strong>
                      <span>Kharkiv</span>
                    </li>
                    <li>
                      <strong>Hobby</strong>
                      <span>Footbal, Traveling</span>
                    </li>
                  </ul>
                  <a href="/portfolio" className="btn ajax fl-btn color-bg">
                    <span>My Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="serv-sec">
            <div className="section-title fl-wrap">
              <h3>Services That I Provide</h3>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="column-wrapper_text services-item fl-wrap">
                  <span className="serv-number">01.</span>
                  <i className="fal fa-desktop"></i>
                  <h4>Web Design</h4>
                  <p>
                    Praesent nec leo venenatis elit semper aliquet id ac enim.
                    Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit.
                    Integer dictum, diam vitae blandit accumsan, dolor odio
                    tempus arcu.
                  </p>
                  <ul className="serv-list">
                    <li>Code</li>
                    <li>Design</li>
                    <li>Photoshop</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="column-wrapper_text services-item fl-wrap">
                  <span className="serv-number">02.</span>
                  <i className="fab fa-pagelines"></i>
                  <h4>Branding</h4>
                  <p>
                    Praesent nec leo venenatis elit semper aliquet id ac enim.
                    Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit.
                    Integer dictum, diam vitae blandit accumsan, dolor odio
                    tempus arcu.
                  </p>
                  <ul className="serv-list">
                    <li>Logos</li>
                    <li>Design</li>
                    <li>Concept</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="column-wrapper_text services-item fl-wrap">
                  <span className="serv-number">03.</span>
                  <i className="fab fa-pagelines"></i>
                  <h4>Consultation</h4>
                  <p>
                    Praesent nec leo venenatis elit semper aliquet id ac enim.
                    Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit.
                    Integer dictum, diam vitae blandit accumsan, dolor odio
                    tempus arcu.
                  </p>
                  <ul className="serv-list">
                    <li>Consulting</li>
                    <li>Idea</li>
                    <li>Planing</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="column-wrapper_text services-item fl-wrap">
                  <span className="serv-number">04.</span>
                  <i className="fas fa-users"></i>
                  <h4>Marketing</h4>
                  <p>
                    Praesent nec leo venenatis elit semper aliquet id ac enim.
                    Maecenas nec mi leo. Etiam venenatis ut dui non hendrerit.
                    Integer dictum, diam vitae blandit accumsan, dolor odio
                    tempus arcu.
                  </p>
                  <ul className="serv-list">
                    <li>SEO</li>
                    <li>SMM</li>
                    <li>Advertising</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="scroll_sec" id="sec5">
            <div className="section-title fl-wrap">
              <h3>Clents And Testimonilas</h3>
            </div>
            <div className="testilider fl-wrap">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {/* <!-- swiper-slide --> */}
                  <div className="swiper-slide">
                    <div className="testi-item fl-wrap">
                      <span className="testi-number">01.</span>
                      <div className="testi-avatar">
                        <img src="images/avatar/1.jpg" alt="image3" />
                      </div>
                      <h3>Liza Mirovsky</h3>
                      <p>
                        "All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a
                        dictionary of over "
                      </p>
                      <a href="#" className="teti-link" target="_blank">
                        Via Twitter
                      </a>
                    </div>
                  </div>
                  {/* <!-- swiper-slide end--> */}
                  {/* <!-- swiper-slide --> */}
                  <div className="swiper-slide">
                    <div className="testi-item fl-wrap">
                      <span className="testi-number">02.</span>
                      <div className="testi-avatar">
                        <img src="images/avatar/2.jpg" alt="" />
                      </div>
                      <h3>Andy Smith</h3>
                      <p>
                        "Vestibulum orci felis, ullamcorper non condimentum non,
                        ultrices ac nunc. Mauris non ligula suscipit, vulputate
                        mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla
                        auctor sit amet sem non porta. "
                      </p>
                      <a href="#" className="teti-link" target="_blank">
                        Via Facebook
                      </a>
                    </div>
                  </div>
                  {/* <!-- swiper-slide end--> */}
                  {/* <!-- swiper-slide --> */}
                  <div className="swiper-slide">
                    <div className="testi-item fl-wrap">
                      <span className="testi-number">03.</span>
                      <div className="testi-avatar">
                        <img src="images/avatar/3.jpg" alt="image" />
                      </div>
                      <h3>Mery Trust</h3>
                      <p>
                        "All the Lorem Ipsum generators on the Internet tend to
                        repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a
                        dictionary of over "
                      </p>
                      <a href="#" className="teti-link" target="_blank">
                        Via Twitter
                      </a>
                    </div>
                  </div>
                  {/* <!-- swiper-slide end--> */}
                  {/* <!-- swiper-slide --> */}
                  <div className="swiper-slide">
                    <div className="testi-item fl-wrap">
                      <span className="testi-number">04.</span>
                      <div className="testi-avatar">
                        <img src="images/avatar/4.jpg" alt="" />
                      </div>
                      <h3>Centa Simpson</h3>
                      <p>
                        "Vestibulum orci felis, ullamcorper non condimentum non,
                        ultrices ac nunc. Mauris non ligula suscipit, vulputate
                        mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla
                        auctor sit amet sem non porta. "
                      </p>
                      <a href="#" className="teti-link" target="_blank">
                        Via Facebook
                      </a>
                    </div>
                  </div>
                  {/* <!-- swiper-slide end--> */}
                </div>
              </div>
            </div>
            <div className="ts-controls">
              <div className="tc-button tc-button-prev">
                <i className="fal fa-angle-left"></i>
              </div>
              <div className="tc-button tc-button-next">
                <i className="fal fa-angle-right"></i>
              </div>
            </div>
            <div className="ss-pagination-wrap">
              <div className="tc-pagination slider-pag"></div>
            </div>
            {/* <!-- client-list --> */}
            <div className="fl-wrap client-list">
              <ul className="">
                <li>
                  <a href="#" target="_blank">
                    <img src="images/clients/1.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="images/clients/2.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="images/clients/3.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <img src="images/clients/4.png" alt="" />
                  </a>
                </li>
              </ul>
              {/* <!-- client-list end--> */}
            </div>
          </section>

          {/* page up  */}
          <div className="to-top-wrap">
            <div className="to-top color-bg">
              <i className="fas fa-caret-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
