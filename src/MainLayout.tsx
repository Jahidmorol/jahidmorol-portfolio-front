import Header from "./components/Header";
import Footer from "./components/Footer";
// import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import React from "react";

function MainLayout() {
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
      console.error("my error-------=>", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }

      return this.props.children;
    }
  }

  return (
    <ErrorBoundary>
      <main>
        {/* <--Loader --> */}
        {/* <div className="body-preload">
        <div className="pl-spinner2">
          <span></span>
        </div>
      </div> */}

        <div id="main">
          <div className="main-container">
            <Header />
            <div className="content-holder">
              {/* <Home /> */}
              <Outlet />

              {/* <-- page-load --> */}
              {/* <div className="page-load">
              <div className="pl-spinner">
                <span></span>
              </div>
            </div> */}
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
    </ErrorBoundary>
  );
}

export default MainLayout;
