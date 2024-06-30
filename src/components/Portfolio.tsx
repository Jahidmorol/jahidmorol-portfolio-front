const Portfolio = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!--scroll-bar --> */}
        {/* <div className="scr-bar_dec"></div> */}
        <div className="scr-bar_container">
          <div
            className="content"
            data-pagetitle="My Portfolio"
            data-pagesubtitle="Portfolio"
          >
            <div className="bg-top"></div>
            <div className="bg-bottom"></div>
            {/* <!--section  -->  */}
            <section>
              <div className="section-title fl-wrap">
                <h3>Portfolio</h3>
                <div className="gallery-filters-wrap">
                  <div className="gallery-filters init_hidden_filter">
                    <a
                      href="#"
                      className="gallery-filter  gallery-filter-active"
                      data-filter="*"
                    >
                      All
                    </a>
                    <a href="#" className="gallery-filter" data-filter=".web">
                      Web Design
                    </a>
                    <a
                      href="#"
                      className="gallery-filter"
                      data-filter=".photography"
                    >
                      Photo
                    </a>
                    <a
                      href="#"
                      className="gallery-filter"
                      data-filter=".branding"
                    >
                      Branding
                    </a>
                    <a href="#" className="gallery-filter" data-filter=".uides">
                      Ui Design
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- portfolio start --> */}
              <div className="gallery-items min-pad hover-dir   fl-wrap  ">
                {/* <!-- gallery-item--> */}
                <div className="gallery-item  web branding">
                  <div className="grid-item-holder hov_zoom">
                    <img src="images/folio/1.jpg" alt="image" />
                    <div className="grid-det">
                      <a
                        href="images/folio/1.jpg"
                        className="grid-media-zoom   image-popup"
                      >
                        <i className="far fa-search"></i>
                      </a>
                      <div className="grid-det_category">
                        <a href="#">Design </a> <a href="#"> Branding</a>
                      </div>
                      <div className="grid-det-item">
                        <a
                          href="portfolio-single.html"
                          className="ajax grid-det_link"
                        >
                          Fitness Studio Website
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- gallery-item end--> */}
                {/* <!-- gallery-item--> */}
                <div className="gallery-item  photography uides">
                  <div className="grid-item-holder hov_zoom">
                    <img src="images/folio/2.jpg" alt="image" />
                    <div className="grid-det">
                      <a
                        href="images/folio/2.jpg"
                        className="grid-media-zoom   image-popup"
                      >
                        <i className="far fa-search"></i>
                      </a>
                      <div className="grid-det_category">
                        <a href="#">Design </a> <a href="#"> UI/UX</a>
                      </div>
                      <div className="grid-det-item">
                        <a
                          href="portfolio-single.html"
                          className="ajax grid-det_link"
                        >
                          Architecture Agensy
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- gallery-item end--> */}
                {/* <!-- gallery-item--> */}
                <div className="gallery-item  web">
                  <div className="grid-item-holder hov_zoom">
                    <img src="images/folio/3.jpg" alt="image" />
                    <div className="grid-det">
                      <a
                        href="https://vimeo.com/6698875"
                        className="grid-media-zoom   image-popup"
                      >
                        <i className="far fa-play"></i>
                      </a>
                      <div className="grid-det_category">
                        <a href="#">Design </a> <a href="#"> Photography</a>
                      </div>
                      <div className="grid-det-item">
                        <a
                          href="portfolio-single.html"
                          className="ajax grid-det_link"
                        >
                          Video Project
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- gallery-item end--> */}
                {/* <!-- gallery-item--> */}
                <div className="gallery-item branding   photography">
                  <div className="grid-item-holder hov_zoom">
                    <img src="images/folio/4.jpg" alt="image" />
                    <div className="grid-det">
                      <a
                        href="images/folio/4.jpg"
                        className="grid-media-zoom   image-popup"
                      >
                        <i className="far fa-search"></i>
                      </a>
                      <div className="grid-det_category">
                        <a href="#">Design </a> <a href="#"> Branding</a>
                      </div>
                      <div className="grid-det-item">
                        <a
                          href="portfolio-single.html"
                          className="ajax grid-det_link"
                        >
                          Photography Project
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- gallery-item end-->                            */}
                {/* <!-- gallery-item--> */}
                <div className="gallery-item  uides web">
                  <div className="grid-item-holder hov_zoom">
                    <img src="images/folio/5.jpg" alt="image" />
                    <div className="grid-det">
                      <a
                        href="images/folio/5.jpg"
                        className="grid-media-zoom   image-popup"
                      >
                        <i className="far fa-search"></i>
                      </a>
                      <div className="grid-det_category">
                        <a href="#">Design </a> <a href="#"> Branding</a>
                      </div>
                      <div className="grid-det-item">
                        <a
                          href="portfolio-single.html"
                          className="ajax grid-det_link"
                        >
                          Kent Brant Concept
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- gallery-item end-->                             */}
                {/* <!-- gallery-item--> */}
                <div className="gallery-item    branding">
                  <div className="grid-item-holder hov_zoom">
                    <img src="images/folio/6.jpg" alt="image" />
                    <div className="grid-det">
                      <a
                        href="images/folio/6.jpg"
                        className="grid-media-zoom   image-popup"
                      >
                        <i className="far fa-search"></i>
                      </a>
                      <div className="grid-det_category">
                        <a href="#">Design </a> <a href="#"> Branding</a>
                      </div>
                      <div className="grid-det-item">
                        <a
                          href="portfolio-single.html"
                          className="ajax grid-det_link"
                        >
                          Corporate website
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- gallery-item end-->                             */}
                {/* <!-- gallery-item--> */}
                <div className="gallery-item  uides">
                  <div className="grid-item-holder hov_zoom">
                    <img src="images/folio/7.jpg" alt="image" />
                    <div className="grid-det">
                      <a
                        href="images/folio/7.jpg"
                        className="grid-media-zoom   image-popup"
                      >
                        <i className="far fa-search"></i>
                      </a>
                      <div className="grid-det_category">
                        <a href="#">Design </a> <a href="#"> Branding</a>
                      </div>
                      <div className="grid-det-item">
                        <a
                          href="portfolio-single.html"
                          className="ajax grid-det_link"
                        >
                          Travel Agensy
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- gallery-item end-->                             */}
                {/* <!-- gallery-item--> */}
                <div className="gallery-item  web  photography">
                  <div className="grid-item-holder hov_zoom">
                    <img src="images/folio/8.jpg" alt="image" />
                    <div className="grid-det">
                      <a
                        href="images/folio/8.jpg"
                        className="grid-media-zoom   image-popup"
                      >
                        <i className="far fa-search"></i>
                      </a>
                      <div className="grid-det_category">
                        <a href="#">Design </a> <a href="#"> Branding</a>
                      </div>
                      <div className="grid-det-item">
                        <a
                          href="portfolio-single.html"
                          className="ajax grid-det_link"
                        >
                          Sport Agensy
                          <i className="fal fa-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- gallery-item end-->                               */}
              </div>
              {/* <!-- portfolio end --> 									 */}
            </section>
            {/* <!--section end-->                							 */}
            <div className="to-top-wrap">
              <div className="to-top color-bg">
                <i className="fas fa-caret-up"></i>
              </div>
            </div>
          </div>
        </div>
        {/* <!--scroll-bar end --> */}
        {/* <!--share end --> */}
        <div className="share-wrapper">
          <div className="share-container isShare"></div>
        </div>
        {/* <!--share end -->							 */}
      </div>
    </>
  );
};

export default Portfolio;
