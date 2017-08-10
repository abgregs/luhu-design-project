var React = require('react');

function Hubs () {
  return (
    <div className="jumbotron hubs feature">
      <div className="main">
        <div className="content-container">
          <div className="content">
            <div className="heading-container">
              {/* <span className="brand-big">Luhu Design</span> */}
              <h2 className="heading">
                Fast Local 3D Printing
              </h2>
              <h2 className="sub-heading">
                Get your parts in 48 hours.</h2>
            </div>
            <p className="lead">Need to print your parts fast? Located in the greater Denver area? Luhu Design can 3D print designs in various colors in both PLA or BLA filament materials.</p>
            <p className="lead">Luhu Design's services are listed on 3D Hubs. 3D Hubs streamlines the process of finding local 3D printing services and ordering your 3D prints. Visit the <a href="https://www.3dhubs.com/service/223729">Luhu Design 3D Printing Services</a> page on 3D Hubs to place an order.</p>
      <div className="callout-container">
          <div className="callout">

            <div className="button-wrapper hero">

            <a className="button hero" target="_blank" href="https://www.3dhubs.com/service/223729" role="button">
              <span>3D Printing</span>
            </a>
            </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>

  )
}

module.exports = Hubs;
