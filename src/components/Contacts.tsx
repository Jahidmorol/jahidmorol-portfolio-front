const Contacts = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!--scroll-bar --> */}
        <div className="scr-bar_dec"></div>
        <div className="scr-bar_container">
          <div
            className="content"
            data-pagetitle="Get In Touch"
            data-pagesubtitle="Contacts"
          >
            <div className="bg-top"></div>
            <div className="bg-bottom"></div>
            <section>
              <div className="section-title fl-wrap">
                <h3>Contact Information</h3>
              </div>
              <div className="row">
                {/* <!--card-item --> */}
                <div className="col-md-6">
                  <div className="card-item fl-wrap">
                    <i className="fal fa-envelope"></i>
                    <span className="card-item_num">01.</span>
                    <h4>My Emails</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </p>
                    <a href="#" className="card-link">
                      yourmail@domain.com
                    </a>
                  </div>
                </div>
                {/* <!--card-item end --> */}
                {/* <!--card-item --> */}
                <div className="col-md-6">
                  <div className="card-item fl-wrap">
                    <i className="fas fa-phone"></i>
                    <span className="card-item_num">02.</span>
                    <h4>My Phones </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </p>
                    <a href="#" className="card-link">
                      +7(111)123456789
                    </a>
                    <a href="#" className="card-link">
                      +3(333)987654321
                    </a>
                  </div>
                </div>
                {/* <!--card-item end --> */}
              </div>
            </section>
            <section>
              <div className="section-title fl-wrap">
                <h3>Write me Mesagge</h3>
              </div>
              {/* <!--contact-form-wrap -->	 */}
              <div className="contact-form-wrap">
                <div id="contact-form" className="contact-form fl-wrap">
                  <div id="message"></div>
                  <form
                    className="custom-form"
                    action="https://vbook.kwst.net/php/contact.php"
                    name="contactform"
                    id="contactform"
                  >
                    <fieldset>
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
                      <div className="input-wrap">
                        <i className="far fa-comment-alt"></i>
                        <textarea
                          name="comments"
                          id="comments"
                          cols={40}
                          rows={3}
                          placeholder="Your Message:"
                        ></textarea>
                      </div>
                    </fieldset>
                    <button className="btn float-btn color-bg" id="submit">
                      {" "}
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
                {/* <!-- contact form  end--> 					 */}
              </div>
              {/* <!--contact-form-wrap end-->								 */}
            </section>
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

export default Contacts;
