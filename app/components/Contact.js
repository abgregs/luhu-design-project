var React = require('react');
var Connect = require('./Connect');
var Helmet = require('react-helmet').default;

class Contact extends React.Component {
  render() {

    return (
      <div className="contact-container">

        <Helmet>
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <base href="/"/>
            <meta charset="utf-8"/>
            <title>Contact Luhu Design Engineering and Mechancial Product Design Firm in Denver CO | Luhu Design</title>
            <meta name="description" content="Contact us today to get started with your idea. Luhu design provides physical product design and engineering services for startups and inventors and is located in Denver, Colorado."/>
            <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
            <link rel="canonical" href="http://www.luhudesign.com/contact"/>
            <meta property="og:site_name" content="Luhu Design, LLC"/>
            <meta property="og:title" content="Contact Luhu Design Engineering and Mechancial Product Design Firm in Denver CO | Luhu Design"/>
            <meta property="og:url" content="http://www.luhudesign.com/contact"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Contact us today to get started with your idea. Luhu design provides physical product design and engineering services for startups and inventors and is located in Denver, Colorado."/>
            <meta property="og:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta property="og:image:width" content="488"/>
            <meta property="og:image:height" content="486"/>
            <meta itemprop="name" content="Services"/>
            <meta itemprop="url" content="http://www.luhudesign.com/contact"/>
            <meta itemprop="thumbnailUrl" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <link rel="image_src" href="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta itemprop="image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta name="twitter:title" content="Contact"/>
            <meta name="twitter:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
            <meta name="twitter:url" content="http://www.luhudesign.com/contact"/>
            <meta name="twitter:card" content="summary"/>

        </Helmet>


        <Connect/>
      </div>

    )
  }
}

module.exports = Contact;
