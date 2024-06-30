import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <main>
      {/* <--Loader --> */}
      <div className="body-preload">
        <div className="pl-spinner2">
          <span></span>
        </div>
      </div>

      <div id="main">
        <div className="main-container">
          <Header />
          <div className="content-holder">
            <Home />

            {/* <-- page-load --> */}
            <div className="page-load">
              <div className="pl-spinner">
                <span></span>
              </div>
            </div>
          </div>
          <Footer />
          <div className="nav-overlay"></div>
        </div>
      </div>

      <div className="body-bg">
        <div className="slider-thumb"></div>
        <div className="cavas-wrap">
          <canvas id="liquid" />
        </div>
        <div className="dynamic-title">
          <span>Resume</span>
        </div>
      </div>
    </main>
  );
}

export default App;
