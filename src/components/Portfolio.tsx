import { useGetProjectsQuery } from "../redux/api/apis";

const portfoliosData = {
  portfolioItems: [
    {
      _id: "1",
      categories: ["javascript"],
      images: ["images/folio/1.jpg"],
      title: "Fitness Studio Website",
      description: "dddddddddddddddddddddd",
      liveLink: "",
      githubFrontend: "",
      githubBackend: "",
    },
    {
      _id: "2",
      categories: ["javascript", "react"],
      images: ["images/folio/2.jpg"],
      title: "Architecture Agensy",
      description: "dddddddddddddddddddddd",
      liveLink: "",
      githubFrontend: "",
      githubBackend: "",
    },
    {
      _id: "3",
      categories: ["next-js", "javascript"],
      images: ["images/folio/3.jpg"],
      title: "Video Project",
      description: "dddddddddddddddddddddd",
      liveLink: "",
      githubFrontend: "",
      githubBackend: "",
    },
    {
      _id: "4",
      categories: ["next-js"],
      images: ["images/folio/4.jpg"],
      title: "Photography Project",
      description: "dddddddddddddddddddddd",
      liveLink: "",
      githubFrontend: "",
      githubBackend: "",
    },
    {
      _id: "5",
      categories: ["javascript"],
      images: ["images/folio/5.jpg"],
      title: "Kent Brant Concept",
      description: "dddddddddddddddddddddd",
      liveLink: "",
      githubFrontend: "",
      githubBackend: "",
    },
    {
      _id: "6",
      categories: ["react"],
      images: ["images/folio/6.jpg"],
      title: "Corporate website",
      description: "dddddddddddddddddddddd",
      liveLink: "",
      githubFrontend: "",
      githubBackend: "",
    },
    {
      _id: "7",
      categories: ["react", "javascript"],
      images: ["images/folio/7.jpg"],
      title: "Travel Agensy",
      description: "dddddddddddddddddddddd",
      liveLink: "",
      githubFrontend: "",
      githubBackend: "",
    },
    {
      _id: "8",
      categories: ["typescript", "react"],
      images: ["images/folio/8.jpg"],
      title: "Sport Agensy",
      description: "dddddddddddddddddddddd",
      liveLink: "",
      githubFrontend: "",
      githubBackend: "",
    },
  ],
};

const filters = [
  {
    label: "All",
    filter: "*",
    active: true,
  },
  {
    label: "Javascript",
    filter: ".javascript",
    active: false,
  },
  {
    label: "React",
    filter: ".react",
    active: false,
  },
  {
    label: "Next js",
    filter: ".next-js",
    active: false,
  },
  {
    label: "Typescript",
    filter: ".typescript",
    active: false,
  },
];

const Portfolio = () => {
  const { data } = useGetProjectsQuery(undefined);

  console.log("projects data---=>", data);

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
                    {filters.map((filter, index) => (
                      <a
                        href="#"
                        className={`gallery-filter ${
                          filter.active ? "gallery-filter-active" : ""
                        }`}
                        data-filter={filter.filter}
                        key={index}
                      >
                        {filter.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* <!-- portfolio start --> */}
              <div className="gallery-items min-pad hover-dir fl-wrap">
                {portfoliosData.portfolioItems.map((item, index) => (
                  <div
                    className={`gallery-item ${item?.categories.join(" ")}`}
                    key={index}
                  >
                    <div className="grid-item-holder hov_zoom">
                      <img src={item?.images[0]} alt="image" />
                      <div className="grid-det">
                        <a
                          href={item?.images[0]}
                          className="grid-media-zoom image-popup"
                        >
                          <i className={`far fa-eye`}></i>
                        </a>
                        <div className="grid-det_category">
                          {item?.categories.map((category, i) => (
                            <a href="#" key={i}>
                              {category}
                            </a>
                          ))}
                        </div>
                        <div className="grid-det-item">
                          <a
                            href={`/portfolio/${item?._id}`}
                            className="ajax grid-det_link"
                          >
                            {item?.title}
                            <i className="fal fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div className="gallery-item  web branding">
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
                </div> */}
              </div>
            </section>

            {/* scroll bar */}
            <div className="to-top-wrap">
              <div className="to-top color-bg">
                <i className="fas fa-caret-up" />
              </div>
            </div>
          </div>
        </div>
        {/* <!--scroll-bar end --> */}

        <div className="share-wrapper">
          <div className="share-container isShare"></div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
