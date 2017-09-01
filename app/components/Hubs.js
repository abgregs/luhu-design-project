var React = require('react');

const Hubs = () => (
    <div className="jumbotron hero hubs feature">
      <div className="container">
        <div className="heading-container">
          {/* <span className="brand-big">Luhu Design</span> */}
          <h1 className="heading">
            Fast Local 3D Printing
          </h1>
          <h2 className="sub-heading">
            Get your parts in 48 hours.
          </h2>
        </div>

        <div className='content-container'>
          <p className="lead">Need to print your parts fast? Located in the greater Denver area? Luhu Design can 3D print designs in various colors in both PLA or ABS filament materials.</p>
          <p className="lead">Luhu Design's services are listed on 3D Hubs. 3D Hubs streamlines the process of finding local 3D printing services and ordering your 3D prints. Visit the Luhu Design 3D Printing Services page on 3D Hubs to get started with your order.</p>
        </div>

        <div className="callout-container">
            <div className="callout">
              <div className="button-wrapper hero">
                <a className="button hero dark-bg" target="_blank" href="https://www.3dhubs.com/service/223729" role="button">
                  <span>Start Your Order</span>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
)

export default Hubs
