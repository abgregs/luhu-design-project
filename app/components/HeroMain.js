import React from 'react'

const HeroMain = () => (

  <div className="jumbotron hero home">
      <div className="container">
          <div className="heading-container">
            <h1 className="heading">Luhu Design</h1>
            <h2 className="sub-heading">
              Engineers. Designers.<br/>
              Mechanical Problem Solvers.
            </h2>

          </div>
          {/* <div className="icon-wrapper">
            <i className="fa fa-cogs" aria-hidden="true"></i>
          </div> */}
      <div className="skills">
        <ul>
          <li className="col-sm-4"><h3>Physical Product Design</h3></li>
          <li className="col-sm-4"><h3>Mechanical Design</h3></li>
          <li className="col-sm-4"><h3>3D CAD Modeling</h3></li>
          <li className="col-sm-4"><h3>Industrial Design</h3></li>
          <li className="col-sm-4"><h3>Rapid Prototyping</h3></li>
          <li className="col-sm-4"><h3>IoT Product Development</h3></li>

        </ul>
      </div>
      <div className="callout-container">
        <div className="callout">
          <div className="button-wrapper hero">
            <a className="button hero blue-bg" href="/services" role="button">
              <span>View Services</span>
            </a>
          </div>
        </div>
      </div>
  </div>
</div>
)

export default HeroMain
