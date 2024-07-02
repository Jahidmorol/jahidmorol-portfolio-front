import { useParams } from "react-router-dom";
import { useGetProjectQuery } from "../redux/api/apis";

const portfolioData = {
  title: "Portfolio Project Title",
  images: [
    "../../images/folio/1.jpg",
    "../../images/folio/2.jpg",
    "../../images/folio/3.jpg",
    "../../images/folio/4.jpg",
  ],
  description:
    "Jahid Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dolore magna aliqua.",
  liveLink: "",
  githubFrontend: "",
  githubBackend: "",
  navigationLinks: {
    prev: {
      title: "Prev - Project Title",
      link: "portfolio-single.html",
      imageUrl: "../../images/folio/1.jpg",
    },
    next: {
      title: "Next - Project Title",
      link: "portfolio-single2.html",
      imageUrl: "../../images/folio/2.jpg",
    },
  },
};

const PortfolioSingle = () => {
  const { id } = useParams();
  const { data } = useGetProjectQuery(id);

  console.log("single portfolio data---=>", data);
  console.log("id---=>", id);

  return (
    <>
      <div id="wrapper">
        {/* <!--scroll-bar --> */}
        <div className="scr-bar_dec"></div>
        <div className="scr-bar_container">
          <div
            className="content"
            data-pagetitle="Project Details"
            data-pagesubtitle="Portfolio"
          >
            <div className="bg-top"></div>
            <div className="bg-bottom"></div>
            {/* <!--section  -->  */}
            <section>
              <div className="section-title fl-wrap">
                <h3>{portfolioData.title}</h3>
              </div>
              <div className="center-carousel-wrap fl-wrap">
                <div className="center-carousel fl-wrap">
                  <div className="swiper-container">
                    <div className="swiper-wrapper lightgallery">
                      {portfolioData.images.map((image, index) => (
                        <div className="swiper-slide hov_zoom" key={index}>
                          <img src={image} alt="image" />
                          <a
                            href={image}
                            className="box-media-zoom popup-image"
                          >
                            <i className="fal fa-search"></i>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ts-controls">
                  <div className="tc-button  ccsw-prev">
                    <i className="fal fa-angle-left"></i>
                  </div>
                  <div className="tc-button  ccsw-next">
                    <i className="fal fa-angle-right"></i>
                  </div>
                </div>
                <div className="ss-pagination-wrap">
                  <div className="tc-pagination2 slider-pag"></div>
                </div>
              </div>
              <div className="box-text-wrap fl-wrap">
                <div className="row">
                  <div className="col-md-8">
                    <div className="fl-wrap content-box single_pb">
                      <h4 className="bold-title">Project Info</h4>
                      <p>{portfolioData?.description}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="box-text-wrap_item content-box">
                      <h5>Project Details</h5>
                      <ul>
                        <li>
                          <span>Category : Branding</span>
                        </li>

                        <li>
                          <a
                            href={portfolioData?.githubFrontend}
                            target="_blank"
                            style={{ color: "#f89020" }}
                          >
                            Frontend Github
                          </a>
                        </li>
                        <li>
                          <a
                            href={portfolioData?.githubBackend}
                            target="_blank"
                            style={{ color: "#f89020" }}
                          >
                            Backend Github
                          </a>
                        </li>
                        <li>
                          <a
                            href={portfolioData?.liveLink}
                            target="_blank"
                            style={{ color: "#f89020" }}
                          >
                            Live
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--content-nav_holder--> */}
              <div className="content-nav_holder fl-wrap cnh_sin-post">
                <div className="content-nav fl-wrap">
                  <ul>
                    <li>
                      <a href="portfolio-single.html" className="ln ajax">
                        <i className="fas fa-caret-left"></i>
                        <span>Prev - Project Title</span>
                      </a>
                      <div className="content-nav_mediatooltip cnmd_leftside">
                        <img src="../../images/folio/1.jpg" alt="image" />
                      </div>
                    </li>
                    <li>
                      <a href="portfolio-single2.html" className="rn ajax">
                        <span>Next - Project Title</span>{" "}
                        <i className="fas fa-caret-right"></i>
                      </a>
                      <div className="content-nav_mediatooltip cnmd_rightside">
                        <img src="../../images/folio/2.jpg" alt="image" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- content-nav_holder end-->								 */}
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

export default PortfolioSingle;
