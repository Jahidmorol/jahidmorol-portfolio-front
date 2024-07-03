import { useParams } from "react-router-dom";

const data = {
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
    views: 164,
    commentsCount: 6,
  },
  comments: [
    {
      author: "Kevin Antony",
      date: "January 02, 2022",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.",
      replies: [],
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

const BlogSingle = () => {
  const { id } = useParams();

  return (
    <>
      <div id="wrapper">
        {/* <!--scroll-bar --> */}
        <div className="scr-bar_dec"></div>
        <div className="scr-bar_container">
          <div
            className="content  no_tp"
            data-pagetitle="Blog Post Title"
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
                      <h3>{data.post.title}</h3>
                      <span className="post-date">
                        <i className="far fa-calendar"></i>
                        {data?.post?.date}{" "}
                      </span>
                    </div>
                    <div className="post-media fl-wrap">
                      <div className="single-slider-wrap fl-wrap">
                        <div className="single-slider fl-wrap">
                          <div className="swiper-container">
                            <div className="swiper-wrapper lightgallery">
                              {data?.post?.photos.map((photo, index) => (
                                <div
                                  key={index}
                                  className="swiper-slide hov_zoom"
                                >
                                  <img src={photo} alt="image" />
                                  <a
                                    href={photo}
                                    className="box-media-zoom popup-image"
                                  >
                                    <i className="fas fa-eye"></i>
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
                    <div className="box-text-wrap fl-wrap">
                      <div className="post-opt single_post-opt">
                        <ul className="no-list-style">
                          <li>
                            <i className="fal fa-eye"></i>{" "}
                            <span>{data?.post?.views} views</span>
                          </li>
                          <li>
                            <i className="far fa-comments-alt"></i>{" "}
                            <span>{data?.post?.commentsCount} comments</span>
                          </li>
                        </ul>
                      </div>
                      <p>{data?.post?.content}</p>
                      <ul className="post-tags">
                        {data?.post?.tags.map((tag, index) => (
                          <li key={index}>
                            <a href="#">{tag}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* <!--post  end--> 	 */}
                  <div className="fl-wrap content-box">
                    <div className="pr-subtitle"> Comments </div>
                    <div id="comments" className="single-post-comm fl-wrap">
                      <ul className="commentlist clearafix">
                        {data?.comments?.map((comment, index) => (
                          <li key={index} className="comment">
                            <div className="comment-author">
                              <img
                                alt="image"
                                src="../../images/avatar/2.jpg"
                                width="50"
                                height="50"
                              />
                            </div>
                            <div className="comment-body">
                              <h4> {comment?.author} </h4>
                              <div className="comment-num">{index + 1}.</div>
                              <div className="clearfix"></div>
                              <p>{comment?.content}</p>
                              <a className="comment-reply-link" href="#">
                                <i className="fas fa-reply"></i> Reply
                              </a>
                              <div className="comment-meta">
                                {comment?.date}
                              </div>
                              <div className="comment-body_dec"></div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <!--comments end --> */}
                  </div>
                  <div id="addcom" className="fl-wrap">
                    <div className="pr-subtitle"> Leave A Comment</div>
                    <div className="comment-reply-form fl-wrap">
                      <form
                        id="add-comment"
                        className="add-comment custom-form"
                      >
                        <fieldset>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-wrap">
                                <i className="far fa-user-plus"></i>
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  placeholder="Your Name *"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-wrap">
                                <i className="far fa-envelope"></i>
                                <input
                                  type="text"
                                  name="email"
                                  id="email"
                                  placeholder="Email Address*"
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="input-wrap">
                            <i className="far fa-comment-alt"></i>
                            <textarea
                              name="comments"
                              id="comments2"
                              cols={40}
                              rows={3}
                              placeholder="YourComment:"
                            ></textarea>
                          </div>
                        </fieldset>
                        <button className="btn float-btn color-bg" id="submit">
                          {" "}
                          <span>Add Commnet</span>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* <!--end respond--> */}
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
                          {sidebar?.tags.map((tag, index) => (
                            <li key={index}>
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
                          {sidebar?.categories.map((category, index) => (
                            <li key={index} className="cat-item">
                              <a href="#">{category.name}</a>{" "}
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
                          {sidebar?.lastPosts.map((post, index) => (
                            <li className="clearfix" key={index}>
                              <a href="#" className="widget-posts-img">
                                <img
                                  src={post.imageSrc}
                                  className="respimg"
                                  alt=""
                                />
                              </a>
                              <div className="widget-posts-descr">
                                <h4>
                                  <a href="#">{post.title}</a>
                                </h4>
                                <span className="widget-posts-date">
                                  <i className="fa fa-calendar-check"></i>{" "}
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
        {/* <!--share end -->*/}
      </div>
    </>
  );
};

export default BlogSingle;
