var React = require('react');

class About extends React.Component {
  render() {
    return (
      <div className="jumbotron get-in-touch about">
        <div className="main">
          <div className="content-container">
            <div className="content">
              <div className="row text-center about-main">
                <div className="heading-container">
                  <h1 className="heading">Meet Luhu Design</h1>
                  <h2 className="sub-heading">Mechanical Design and<br/> Engineering Firm</h2>
                  {/* <h2 className="sub-heading">Denver, Colorado</h2> */}
                </div>
                <div className="spacer"></div>
                <p className="lead">Luhu Design is an innovative and intelligent mechanical product design firm located in Denver, Colorado. We strive to provide creative designs and solutions that stay true to the basics of mechanical engineering. We promise to give your product and idea that personal touch and attention.</p>
                <div className="divider">
                  <hr/>
                </div>
                <div className="profile">
                  <img className="rounded-circle" src="/app/img/lindsey-profile.jpg" alt="lindsey-cross-profile-luhu-design"/>
                  <div className="spacer"></div>
                  <h2 className="sub-heading">Lindsey Cross</h2>
                  <h3 className="sub-heading">Founder and Chief Problem Solver</h3>
                  <div className="spacer"></div>
                  <p className="lead">Lindsey graduated from the University of Southern California with a BS in Aerospace Engineering. While there, she helped to optimize wave dynamics for the Kelly Slater Wave Co and helped develop intelligent prosthetic fingertips for SynTouch, LLC.<br/><br/>
                  After graduation, Lindsey returned to Denver to work as a mechanical engineer in the aerospace industry for over 6 years, taking numerous electronics products from concept to production and test.<br/><br/>
                  Lindsey brings her mechanical design aptitude, attention to detail, and creative mind to all projects at Luhu Design. She utilizes her extensive network of hardware engineers, software developers, and UX designers to help provide complete products to clients. </p>
                </div>
              <div className="divider">
                <hr/>
              </div>
            <div className="callout-container">
              <div className="callout">
                <p className="lead">Talk to us today to see how<br/>we can help solve your mechanical<br/>engineering and design challenges.</p>
                <div className="button-wrapper get-in-touch">
                <a className="button get-in-touch" href="/contact" role="button"><span>Talk to us today</span></a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>






    )
  }
}

module.exports = About;
