const Resume = () => {
  return (
    <>
      <div id="wrapper">
        {/* <!--scroll-bar --> */}
        <div className="scr-bar_dec"></div>
        <div className="scr-bar_container">
          <div
            className="content"
            data-pagetitle="My story"
            data-pagesubtitle="Resume"
          >
            <div className="bg-top"></div>
            <div className="bg-bottom"></div>
            {/* <!--section  -->  */}
            <section>
              <div className="section-title fl-wrap">
                <h3>Professhional Summary</h3>
              </div>
              <div className="box-text-wrap fl-wrap">
                <div className="row">
                  <div className="col-md-8">
                    <div className="fl-wrap content-box single_pb cb_dec">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="box-text-wrap_item content-box">
                      <h5>Language Knowledge</h5>
                      <ul>
                        <li>
                          <span>Dutch</span>
                        </li>
                        <li>
                          <span>French</span>
                        </li>
                        <li>
                          <span>Portuguese</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--section end-->                							 */}
            {/* <!--section  -->  */}
            <section>
              <div className="row">
                <div className="col-md-6">
                  <div className="section-title fl-wrap">
                    <h3>Work History</h3>
                  </div>
                  <div className="resume-item-container fl-wrap">
                    {/* <!--resume-item-->  */}
                    <div className="resume-item fl-wrap">
                      <h4>SoftService Company</h4>
                      <h5>Web Developer</h5>
                      <p>
                        {" "}
                        Dolore magna aliqua. Consectetur adipisicing elit.
                        Iusto, optio, dolorum provident rerum aut hic quasi
                        placeat iure tempora laudantium ipsa ad debitis unde.
                      </p>
                      <span className="resume-date">
                        2022 and to the present
                      </span>
                    </div>
                    {/* <!--resume-item end-->  */}
                    {/* <!--resume-item-->  */}
                    <div className="resume-item fl-wrap">
                      <h4>KharkivIT Soft</h4>
                      <h5>Front-end Developer</h5>
                      <p>
                        {" "}
                        Iusto, optio, dolorum provident rerum aut hic quasi
                        placeat iure tempora laudantium ipsa ad debitis unde.
                      </p>
                      <span className="resume-date">2016 - 2021</span>
                    </div>
                    {/* <!--resume-item end-->  */}
                    {/* <!--resume-item-->  */}
                    <div className="resume-item fl-wrap">
                      <h4>Envato Market</h4>
                      <h5>Senior Developer</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor ncididunt ut labore et
                        dolore magna aliqua. Ut veniam.
                      </p>
                      <span className="resume-date">2015 - 2016</span>
                    </div>
                    {/* <!--resume-item end--> 												 */}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-title fl-wrap">
                    <h3>Education</h3>
                  </div>
                  <div className="resume-item-container ric_nom fl-wrap">
                    {/* <!--resume-item-->  */}
                    <div className="resume-item fl-wrap">
                      <h4>Programming Course</h4>
                      <h5>New York</h5>
                      <p>
                        {" "}
                        Iusto, optio, dolorum provident rerum aut hic quasi
                        placeat iure tempora laudantium ipsa ad debitis unde.
                      </p>
                      <span className="resume-date">2021 - 2022</span>
                    </div>
                    {/* <!--resume-item end-->  */}
                    {/* <!--resume-item-->  */}
                    <div className="resume-item fl-wrap">
                      <h4>University of Design</h4>
                      <h5>London</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor ncididunt ut labore et
                        dolore magna aliqua. Ut veniam.
                      </p>
                      <span className="resume-date">2012 - 2016</span>
                    </div>
                    {/* <!--resume-item end--> 											 */}
                    {/* <!--resume-item-->  */}
                    <div className="resume-item fl-wrap">
                      <h4>Academy of Art University</h4>
                      <h5>Paris</h5>
                      <p>
                        {" "}
                        Dolore magna aliqua. Consectetur adipisicing elit.
                        Iusto, optio, dolorum provident rerum aut hic quasi
                        placeat iure tempora laudantium ipsa ad debitis unde.
                      </p>
                      <span className="resume-date">2008 - 2012</span>
                    </div>
                    {/* <!--resume-item end-->  */}
                  </div>
                </div>
              </div>
            </section>
            {/* <!--section end-->  							 */}
            {/* <!--section  -->  */}
            <section>
              <div className="fl-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="section-title fl-wrap">
                      <h3>Design Skills</h3>
                    </div>
                    <div className="skillbar-box animaper">
                      {/* <!-- skill  --> */}
                      <div className="custom-skillbar-title">
                        <span>Photoshop</span>
                      </div>
                      <div className="skill-bar-percent">95%</div>
                      <div className="skillbar-bg" data-percent="95%">
                        <div className="custom-skillbar"></div>
                      </div>
                      {/* <!-- skill  --> */}
                      <div className="custom-skillbar-title">
                        <span>Figma</span>
                      </div>
                      <div className="skill-bar-percent">65%</div>
                      <div className="skillbar-bg" data-percent="65%">
                        <div className="custom-skillbar"></div>
                      </div>
                      {/* <!-- skill  --> */}
                      <div className="custom-skillbar-title">
                        <span>Sketch</span>
                      </div>
                      <div className="skill-bar-percent">75%</div>
                      <div className="skillbar-bg" data-percent="75%">
                        <div className="custom-skillbar"></div>
                      </div>
                      {/* <!-- skill  --> */}
                      <div className="custom-skillbar-title">
                        <span>LightRoom</span>
                      </div>
                      <div className="skill-bar-percent">65%</div>
                      <div className="skillbar-bg" data-percent="65%">
                        <div className="custom-skillbar"></div>
                      </div>
                      {/* <!-- skill  --> */}
                      <div className="custom-skillbar-title">
                        <span>Adobe XD</span>
                      </div>
                      <div className="skill-bar-percent">75%</div>
                      <div className="skillbar-bg" data-percent="75%">
                        <div className="custom-skillbar"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="section-title fl-wrap">
                      <h3>Developer Skills</h3>
                    </div>
                    <div className="clearfix"></div>
                    <div
                      className="piechart-holder fl-wrap animaper"
                      data-skcolor="#F89020"
                    >
                      {/* <!-- 1  --> */}
                      <div className="piechart">
                        <span className="chart" data-percent="85">
                          <span className="percent"></span>
                        </span>
                        <div className="clearfix"></div>
                        <div className="skills-description">
                          <h4>Jqeury</h4>
                        </div>
                      </div>
                      {/* <!-- 1 end --> */}
                      {/* <!-- 2  --> */}
                      <div className="piechart">
                        <span className="chart" data-percent="95">
                          <span className="percent"></span>
                        </span>
                        <div className="clearfix"></div>
                        <div className="skills-description">
                          <h4>Phyton</h4>
                        </div>
                      </div>
                      {/* <!-- 2 end  --> */}
                      {/* <!-- 3  --> */}
                      <div className="piechart">
                        <span className="chart" data-percent="80">
                          <span className="percent"></span>
                        </span>
                        <div className="clearfix"></div>
                        <div className="skills-description">
                          <h4>React JS</h4>
                        </div>
                      </div>
                      {/* <!-- 3  end--> */}
                      {/* <!-- 3  --> */}
                      <div className="piechart">
                        <span className="chart" data-percent="70">
                          <span className="percent"></span>
                        </span>
                        <div className="clearfix"></div>
                        <div className="skills-description">
                          <h4>PHP / MYSQL</h4>
                        </div>
                      </div>
                      {/* <!-- 3  end-->											 */}
                      <div className="chart-dec">
                        <span>
                          <i className="fal fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!--section end--> 								 */}
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
      {/* <!--wrapper end --> */}

      {/* <!--page-load -->	 */}
      <div className="page-load">
        <div className="pl-spinner">
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Resume;
