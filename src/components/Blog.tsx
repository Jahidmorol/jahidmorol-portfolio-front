const Blog = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!--scroll-bar --> */}
        <div className="scr-bar_dec"></div>
        <div className="scr-bar_container">
          <div
            className="content no_tp"
            data-pagetitle="Last News"
            data-pagesubtitle="Stories"
          >
            <div className="bg-top"></div>
            <div className="bg-bottom"></div>
            {/* <!--section  -->  */}
            <section>
              <div className="row">
                <div className="col-md-8">
                  {/* <!--post  -->  */}
                  <div className="post fl-wrap">
                    <div className="section-title fl-wrap">
                      <h3>Blog Post Title</h3>
                      <span className="post-date">
                        <i className="far fa-calendar"></i>15 march 2022{" "}
                      </span>
                    </div>
                    <div className="post-media fl-wrap">
                      <div className="single-slider-wrap fl-wrap">
                        <div className="single-slider fl-wrap">
                          <div className="swiper-container">
                            <div className="swiper-wrapper lightgallery">
                              <div className="swiper-slide hov_zoom">
                                <img src="images/folio/9.jpg" alt="image" />
                                <a
                                  href="images/folio/9.jpg"
                                  className="box-media-zoom   popup-image"
                                >
                                  <i className="fas fa-search"></i>
                                </a>
                              </div>
                              <div className="swiper-slide hov_zoom">
                                <img src="images/folio/10.jpg" alt="image" />
                                <a
                                  href="images/folio/10.jpg"
                                  className="box-media-zoom   popup-image"
                                >
                                  <i className="fas fa-search"></i>
                                </a>
                              </div>
                              <div className="swiper-slide hov_zoom">
                                <img src="images/folio/11.jpg" alt="image" />
                                <a
                                  href="images/folio/11.jpg"
                                  className="box-media-zoom   popup-image"
                                >
                                  <i className="fas fa-search"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="ss-button ss-button-prev">
                            <i className="fal fa-angle-left"></i>
                          </div>
                          <div className="ss-button ss-button-next">
                            <i className="fal fa-angle-right"></i>
                          </div>
                          <div className="css-pagination-wrap">
                            <div className="tc-pagination slider-pag"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-opt single_post-opt">
                      <ul className="no-list-style">
                        <li>
                          <i className="fal fa-eye"></i> <span>164 views</span>
                        </li>
                        <li>
                          <i className="far fa-comments-alt"></i>{" "}
                          <span>3 commnets</span>
                        </li>
                      </ul>
                    </div>
                    <div className="box-text-wrap fl-wrap">
                      <p>
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Dolore magna aliqua.
                      </p>
                      <a href="blog-single.html" className="btn ajax  color-bg">
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                  {/* <!--post  end--> 	 */}
                  {/* <!--post  -->  */}
                  <div className="post fl-wrap">
                    <div className="section-title fl-wrap">
                      <h3>Blog Post Title</h3>
                      <span className="post-date">
                        <i className="far fa-calendar"></i>15 march 2022{" "}
                      </span>
                    </div>
                    <div className="post-media">
                      <img
                        src="images/folio/12.jpg"
                        className="respimg"
                        alt="image"
                      />
                    </div>
                    <div className="post-opt single_post-opt">
                      <ul className="no-list-style">
                        <li>
                          <i className="fal fa-eye"></i> <span>56 views</span>
                        </li>
                        <li>
                          <i className="far fa-comments-alt"></i>{" "}
                          <span>2 commnets</span>
                        </li>
                      </ul>
                    </div>
                    <div className="box-text-wrap fl-wrap">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <a href="blog-single.html" className="btn ajax  color-bg">
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                  {/* <!--post  end--> 										 */}
                  {/* <!--pagination--> */}
                  <div className="pagination">
                    <a href="#" className="prevposts-link">
                      <i className="fas fa-caret-left"></i>
                    </a>
                    <a href="#">01.</a>
                    <a href="#" className="current-page">
                      02.
                    </a>
                    <a href="#">03.</a>
                    <a href="#">04.</a>
                    <a href="#" className="nextposts-link">
                      <i className="fas fa-caret-right"></i>
                    </a>
                  </div>
                  {/* <!--pagination end-->										 */}
                </div>
                {/* <!-- sidebar --> */}
                <div className="col-md-4">
                  <div className="main-sidebar fixed-bar fl-wrap">
                    <div className="widget-sidebar ws_column">
                      {/* <!-- widget --> */}
                      <div className="widget-inner">
                        <form action="#">
                          <input
                            name="se"
                            id="se2"
                            type="text"
                            className="search"
                            placeholder="Search..."
                            value=""
                          />
                          <button className="search-submit  " id="submit_btn2">
                            <i className="fa fa-search transition"></i>{" "}
                          </button>
                        </form>
                      </div>
                      <h3>Tags</h3>
                      <div className="widget-inner">
                        <ul className="post-tags">
                          <li>
                            <a href="#">Paint</a>
                          </li>
                          <li>
                            <a href="#">Construction</a>
                          </li>
                          <li>
                            <a href="#">Build</a>
                          </li>
                          <li>
                            <a href="#">Poster</a>
                          </li>
                          <li>
                            <a href="#">Trends</a>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- widget end  --> */}
                      {/* <!-- widget --> */}
                      <h3>Categories</h3>
                      <div className="widget-inner">
                        <ul className="cat-wid">
                          <li className="cat-item">
                            <a href="#">Standard</a>
                            <span>3</span>
                          </li>
                          <li className="cat-item">
                            <a href="#">Video</a> <span>6</span>
                          </li>
                          <li className="cat-item">
                            <a href="#">Gallery</a> <span>12</span>
                          </li>
                          <li className="cat-item">
                            <a href="#">Quotes</a> <span>4</span>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- widget end  -->										 */}
                      {/* <!-- widget  --> */}
                      <h3>Last Posts</h3>
                      <div className="widget-inner">
                        <ul className="widget-posts">
                          <li className="clearfix">
                            <a
                              href="blog-single.html"
                              className="widget-posts-img"
                            >
                              <img
                                src="images/folio/4.jpg"
                                className="respimg"
                                alt="image"
                              />
                            </a>
                            <div className="widget-posts-descr">
                              <a href="#" title="">
                                Vivamus dapibus rutrum
                              </a>
                              <span className="widget-posts-date">
                                <i className="far fa-calendar"></i> 27 Mar 2021{" "}
                              </span>
                            </div>
                          </li>
                          <li className="clearfix">
                            <a
                              href="blog-single.html"
                              className="widget-posts-img"
                            >
                              <img
                                src="images/folio/5.jpg"
                                className="respimg"
                                alt="image"
                              />
                            </a>
                            <div className="widget-posts-descr">
                              <a href="#" title="">
                                {" "}
                                Integer sagittis
                              </a>
                              <span className="widget-posts-date">
                                <i className="far fa-calendar"></i> 12 May 2021
                              </span>
                            </div>
                          </li>
                          <li className="clearfix">
                            <a
                              href="blog-single.html"
                              className="widget-posts-img"
                            >
                              <img
                                src="images/folio/6.jpg"
                                className="respimg"
                                alt="image"
                              />
                            </a>
                            <div className="widget-posts-descr">
                              <a href="#" title="">
                                Snowy Mountains Trip
                              </a>
                              <span className="widget-posts-date">
                                <i className="far fa-calendar"></i> 22 Feb 2021{" "}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- widget end  --> */}
                      {/* <!-- widget --> */}
                      <h3>Subscribe</h3>
                      <div className="widget-inner">
                        <div className="subcribe-form fl-wrap">
                          <form id="subscribe">
                            <input
                              className="enteremail"
                              name="email"
                              id="subscribe-email"
                              placeholder="Your Email"
                              spellCheck="false"
                              type="text"
                            />
                            <button
                              type="submit"
                              id="subscribe-button"
                              className="subscribe-button gradient-bg"
                            >
                              Submit
                            </button>
                            <label
                              htmlFor="subscribe-email"
                              className="subscribe-message"
                            ></label>
                          </form>
                        </div>
                      </div>
                      {/* <!-- widget end  --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- sidebar end --> */}
              </div>
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
        {/* <!--share end --> */}
      </div>
    </>
  );
};

export default Blog;
