function Aboutus() {
  return (
    <section className="aboutus py-5" id="about">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase small fw-semibold text-muted mb-2">Who We Are</p>
          <h1 className="fw-bold display-5" style={{ color: "#0a1f44" }}>
            About Banker
          </h1>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: "42rem" }}>
            We provide next-generation financial services, combining modern technology with time-tested institutional stability.
          </p>
          <div
            className="mx-auto mt-3"
            style={{ width: "60px", height: "3px", backgroundColor: "#0a1f44" }}
          ></div>
        </div>

        <div className="row g-4 text-center mt-2">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-4 bg-white rounded-3 shadow-sm border h-100">
              <h2 className="fw-bold text-primary mb-1">25+</h2>
              <p className="text-muted mb-0">Years of Experience</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-4 bg-white rounded-3 shadow-sm border h-100">
              <h2 className="fw-bold text-primary mb-1">$15B+</h2>
              <p className="text-muted mb-0">Assets Managed</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-4 bg-white rounded-3 shadow-sm border h-100">
              <h2 className="fw-bold text-primary mb-1">450K+</h2>
              <p className="text-muted mb-0">Active Customers</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="p-4 bg-white rounded-3 shadow-sm border h-100">
              <h2 className="fw-bold text-primary mb-1">99.9%</h2>
              <p className="text-muted mb-0">Uptime & Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Aboutus;
