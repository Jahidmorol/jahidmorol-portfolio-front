import { useGetProfileQuery } from "../redux/api/apis";

function Header() {
  const { data } = useGetProfileQuery(undefined);

  console.log("data----=>", data);

  return (
    <>
      <header className="main-header">
        <div className="header-titile">
          <h1>{data?.data?.name}</h1>
          <h4>{data?.data?.designation}</h4>
        </div>
        <a
          // data-src="images/main.jpg"
          data-src={data?.data?.profilePicture}
          className="image-popup header-popup color-bg"
        >
          <i className="fal fa-plus"></i>
        </a>

        <div className="header-titile-img">
          <div
            className="bg"
            //  data-bg="images/main.jpg"
            style={{
              backgroundImage: `url(${
                data?.data?.profilePicture || "images/main.jpg"
              })`,
            }}
          ></div>
        </div>

        {/* <-- nav --> */}
        <div className="main-menu-wrap">
          <nav className="nav-inner fl-wrap sliding-menu" id="menu">
            <ul>
              <li>
                <a href="/">
                  <i className="fal fa-home"></i> Home
                </a>
              </li>
              <li>
                <a href="/resume">
                  <i className="fal fa-address-card"></i> Resume
                </a>
              </li>
              <li>
                <a href="/portfolio">
                  <i className="fal fa-images"></i> Portfolio
                </a>
              </li>
              <li>
                <a href="/contact">
                  <i className="fal fa-envelope"></i> Contacts
                </a>
              </li>
              <li>
                <a href="/blog">
                  <i className="fal fa-book"></i> Blog
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <a
          href={data?.data?.resumeLink}
          // download="My_CV.pdf"
          className="header_btn gradient-bg"
        >
          <i className="fas fa-eye"></i> View CV
        </a>
      </header>

      {/* <!-- top-opt --> */}
      <div className="top-opt">
        <div className="nav-button-wrap c_sb gradient-bg2">
          <div className="nav-button">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="page-subtitle">
          <a href="index-2.html" className="ajax">
            <i className="fal fa-home"></i>
          </a>
          <span></span>
        </div>
        <a href="index-2.html" className="ajax mob-logo">
          <span></span>
          <strong></strong>
        </a>
        <a href="contacts.html" className="ajax to_contacts">
          <i className="far fa-envelope"></i> Get in Touch
        </a>
        <div className="share-btn show-share isShare gradient-bg2">
          <span>Share</span>
          <i className="fas fa-share-alt"></i>
        </div>
      </div>
      {/* <!-- top-opt --> */}
    </>
  );
}

export default Header;
