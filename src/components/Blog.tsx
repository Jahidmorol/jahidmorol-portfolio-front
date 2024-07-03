const data = {
  posts: [
    {
      _id: "1",
      post: {
        title: "Blog Post Title",
        date: "15 March 2021",
        photos: [
          "../../images/folio/9.jpg",
          "../../images/folio/10.jpg",
          "../../images/folio/11.jpg",
        ],
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.",
        tags: ["Design", "Video", "Photo"],
        categories: ["Development", "Education"],
        views: 20,
        commentsCount: 1,
      },
      comments: [
        {
          author: "Kevin Antony",
          date: "January 02, 2022",
          content:
            "Seed ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.",
          replies: [],
        },
      ],
    },
    {
      _id: "2",
      post: {
        title: "Blog Another Title",
        date: "15 March 2021",
        photos: ["../../images/folio/12.jpg"],
        content:
          "Jahid ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim.",
        tags: ["React", "Next-js", "JavaScript"],
        views: 13,
        commentsCount: 0,
      },
      comments: [
        {
          author: "Morol Antony",
          date: "January 03, 2022",
          content:
            "Morol ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.",
          replies: [],
        },
      ],
    },
  ],
};

const sidebar = {
  tags: ["Paint", "Construction", "Build", "Poster", "Trends"],
  categories: [
    { name: "Standard", count: 3 },
    { name: "Video", count: 6 },
    { name: "Gallery", count: 12 },
    { name: "Quotes", count: 4 },
  ],
  lastPosts: [
    {
      title: "Vivamus dapibus rutrum",
      date: "27 Mar 2021",
      imageSrc: "../../images/folio/4.jpg",
    },
    {
      title: "Integer sagittis",
      date: "12 May 2021",
      imageSrc: "../../images/folio/5.jpg",
    },
    {
      title: "Snowy Mountains Trip",
      date: "22 Feb 2021",
      imageSrc: "../../images/folio/6.jpg",
    },
  ],
};

const pagination = {
  previousLink: "#",
  pages: [
    { number: 1, link: "#", current: false },
    { number: 2, link: "#", current: true },
    { number: 3, link: "#", current: false },
    { number: 4, link: "#", current: false },
  ],
  nextLink: "#",
};

const Blog = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!--scroll-bar --> */}
        <div className="scr-bar_dec"></div>
        <div className="scr-bar_container" style={{ paddingBottom: "50px" }}>
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
                  {data?.posts.map((postWrapper) => {
                    const { post } = postWrapper;
                    return (
                      <div className="post fl-wrap" key={postWrapper._id}>
                        <div className="section-title fl-wrap">
                          <h3>{post.title}</h3>
                          <span className="post-date">
                            <i className="far fa-calendar"></i> {post.date}
                          </span>
                        </div>
                        {post.photos.length > 1 ? (
                          <div className="post-media fl-wrap">
                            <div className="single-slider-wrap fl-wrap">
                              <div className="single-slider fl-wrap">
                                <div className="swiper-container">
                                  <div className="swiper-wrapper lightgallery">
                                    {post.photos.map((photo, idx) => (
                                      <div
                                        className="swiper-slide hov_zoom"
                                        key={idx}
                                      >
                                        <img src={photo} alt="blog" />
                                        <a
                                          href={photo}
                                          className="box-media-zoom popup-image"
                                        >
                                          <i className="fas fa-search"></i>
                                        </a>
                                      </div>
                                    ))}
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
                        ) : (
                          <div className="post-media">
                            <img
                              src={post.photos[0]}
                              className="respimg"
                              alt="blog"
                            />
                          </div>
                        )}
                        <div className="post-opt single_post-opt">
                          <ul className="no-list-style">
                            <li>
                              <i className="fal fa-eye"></i>{" "}
                              <span>{post.views} views</span>
                            </li>
                            <li>
                              <i className="far fa-comments-alt"></i>{" "}
                              <span>{post.commentsCount} comments</span>
                            </li>
                          </ul>
                        </div>
                        <div className="box-text-wrap fl-wrap">
                          <p className="clamp-lines">{post.content}</p>
                          <a
                            // href={`/blog/${postWrapper}`}
                            className="btn ajax color-bg"
                          >
                            <span>Read More</span>
                          </a>
                        </div>
                      </div>
                    );
                  })}
                  {/* <!--post  end-->*/}

                  {/* <!--pagination--> */}
                  <div className="pagination">
                    <a
                      href={pagination?.previousLink}
                      className="prevposts-link"
                    >
                      <i className="fas fa-caret-left"></i>
                    </a>
                    {pagination?.pages.map((page, idx) => (
                      <a
                        href={page.link}
                        key={idx}
                        className={page.current ? "current-page" : ""}
                      >
                        {page.number.toString().padStart(2, "0")}.
                      </a>
                    ))}
                    <a href={pagination?.nextLink} className="nextposts-link">
                      <i className="fas fa-caret-right"></i>
                    </a>
                  </div>
                  {/* <!--pagination end-->*/}
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
                          {sidebar?.tags.map((tag, idx) => (
                            <li key={idx}>
                              <a href="#">{tag}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* <!-- widget end  --> */}
                      {/* <!-- widget --> */}
                      <h3>Categories</h3>
                      <div className="widget-inner">
                        <ul className="cat-wid">
                          {sidebar?.categories.map((category, idx) => (
                            <li className="cat-item" key={idx}>
                              <a href="#">{category.name}</a>
                              <span>{category.count}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* <!-- widget end  -->										 */}
                      {/* <!-- widget  --> */}
                      <h3>Last Posts</h3>
                      <div className="widget-inner">
                        <ul className="widget-posts">
                          {sidebar?.lastPosts.map((post, idx) => (
                            <li className="clearfix" key={idx}>
                              <a href="#" className="widget-posts-img">
                                <img
                                  src={post.imageSrc}
                                  className="respimg"
                                  alt="blog"
                                />
                              </a>
                              <div className="widget-posts-descr">
                                <a href="#" title="">
                                  {post.title}
                                </a>
                                <span className="widget-posts-date">
                                  {post.date}
                                </span>
                              </div>
                            </li>
                          ))}
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
