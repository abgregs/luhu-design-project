var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var PropTypes = require('prop-types');
var ServiceDetail = require('./ServiceDetail');
var Link = require('react-router-dom').Link;
var Helmet = require('react-helmet').default;

function ServicesList (props) {

    if (props.selectedService !== null) {
        return null
      } else {
    return (
        <div className="jumbotron services-home feature">
          <Helmet>
              <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
              <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
              <meta name="apple-mobile-web-app-capable" content="yes"/>
              <base href="/"/>
              <meta charset="utf-8"/>
              <title>Denver Engineering and Mechanical Design Services | Luhu Design</title>
              <meta name="description" content="Physical product design and engineering services for startups and inventors. Some of our services include Mechanical Engineering CAD, IoT Product Development, 3D Modeling, 3D Printing, Physical Product Design."/>
              <link rel="shortcut icon" type="image/x-icon" href="/app/img/favicon.ico"/>
              <link rel="canonical" href="http://www.luhudesign.com/services"/>
              <meta property="og:site_name" content="Luhu Design, LLC"/>
              <meta property="og:title" content="Denver Engineering and Mechanical Design Services | Luhu Design"/>
              <meta property="og:url" content="http://www.luhudesign.com/services"/>
              <meta property="og:type" content="website"/>
              <meta property="og:description" content="Physical product design and engineering services for startups and inventors. Our services include Mechanical Engineering CAD, IoT Product Development, 3D Modeling, 3D Printing, and Physical Product Design."/>
              <meta property="og:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
              <meta property="og:image:width" content="488"/>
              <meta property="og:image:height" content="486"/>
              <meta itemprop="name" content="Services"/>
              <meta itemprop="url" content="http://www.luhudesign.com/services"/>
              <meta itemprop="thumbnailUrl" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
              <link rel="image_src" href="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
              <meta itemprop="image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
              <meta name="twitter:title" content="Home"/>
              <meta name="twitter:image" content="/app/img/Luhu-Brandmark-Blue.png?format=1000w"/>
              <meta name="twitter:url" content="http://www.luhudesign.com/services"/>
              <meta name="twitter:card" content="summary"/>

          </Helmet>
          <div className="main">
            <div className="content-container">
              <div className="content">
                <div className="heading-container">
                  <h1 className="heading">
                    Engineering and Mechanical<br/>Design Services
                  </h1>
                  <h2 className="sub-heading">
                  Luhu Design
                  </h2>
                </div>

                <div className="row services-list-component text-center">
                  {props.services.map(function(serv) {

                    return (
                        <div className="col-md-3 col-sm-6 service-listing text-center" key={serv.id}>



                            <Link
                             to={"/services/"+serv.id}
                             className="service-list-item text-center"
                             onClick={props.onSelect.bind(null, serv)}>
                             <div className="overlay">
                               <div className="image-wrapper">
                                 <img className="rounded-circle service-list-item-image" src={serv.image} alt={serv.id}/>
                                 <h2 className="text-center">
                                   {serv.title}
                                 </h2>
                              </div>
                            </div>
                           </Link>


                        </div>
                    )
                  })}
               </div>

              </div>
          </div>
        </div>
      </div>

    )
  }
}

ServicesList.propTypes = {
  onSelect: PropTypes.func.isRequired,
  services: PropTypes.array.isRequired,
};


class Services extends React.Component {

  constructor(props) {
   super();

   var services = [
     {id: '3d-printing',
     title: '3D Printing',
     subtitle: 'Fast Local 3D Printing in Denver',
     leadOne: 'Got a fun design you would like to print out? Or need a mockup for that big meeting? We can 3D print designs within an envelope of 6.2" x 6.0" x 6.0" in various colors of PLA and ABS.',
     leadTwo: "Visit the <a href='https://www.3dhubs.com/service/223729' target='_blank'>Luhu Design 3D Printing Services page on 3D Hubs</a> or contact to us today to get started.",
     image: '/app/img/3d-printer.jpg',
     description: "Fast local 3D printing services in Denver, CO. We can 3D print designs in various colors in both PLA and ABS filaments.",
     metaTitle: "Fast Local 3D Printing Services in Denver"
     },
     {id: '3d-modeling-cad-mechanical-design',
     title: '3D Modeling and CAD Mechanical Design',
     subtitle: '3D Modeling Services',
     leadOne: "Wanna print something out, but don't quite have the model up to snuff?",
     leadTwo: "Let's chat about how we can help create 3D CAD models, and tailor it to whatever manufacturing application you need.",
     image: '/app/img/electronics-chip-cropped.jpg',
     description: "3D modeling and 3D CAD mechanical design services in Denver, CO. Luhu Design offers CAD mechanical design services for a variety of manufacturing applications.",
     metaTitle: "3D Modeling and CAD Mechanical Design Services in Denver"
     },
     {id: 'industrial-design',
     title: 'Industrial Design',
     subtitle: 'Industrial Design Services',
     leadOne: "We would be more than happy to exercise our right brain to bring you creative and beautiful concepts for your new project.",
     leadTwo: "But don't worry, we'll keep those left brain engineering concepts in mind when we do.",
     image: '/app/img/electronics-chip-cropped.jpg',
     description: "Industrial design services in Denver, CO. See how Luhu design can bring creative and beautiful concepts to your industrial design project.",
     metaTitle: "Industrial Design Services in Denver"
     },
     {id: 'physical-product-design',
     title: 'Physical Product Design',
     subtitle: 'Building Beautifully Functional Products',
     leadOne: "Got that new great idea, but not sure where to start? We can help you take that idea off the napkin, and into CAD and beyond. We will use our engineering background and knack for design to create you something both beautiful and functional.",
     leadTwo: "Manufacturing and ease of use is kept in mind during the design process to make sure you don't lose ground when getting to mass production.",
     image: '/app/img/electronics-chip-cropped.jpg',
     description: "Physical product design services in Denver, CO. Luhu Design helps inventors and startups build beautiful and functional products from concept to CAD design and beyond.",
     metaTitle: "3D Modeling and CAD Mechanical Design Services in Denver"
     },
     {id: 'internet-of-things-iot-product-development',
     title: 'Internet of Things (IoT) Product Development',
     subtitle: 'Building Your Own Connected Device',
     leadOne: "The future is in connected devices, from the home to the car to even the grocery store.",
     leadTwo: "We can help you to develop your new Internet of Things (IoT) connected hardware device, utilizing our knowledge and resources in hardware and firmware design, as well as our expertise in mechanical packaging.",
     image: '/app/img/electronics-chip-cropped.jpg',
     description: "Internet of Things (IoT) product development services in Denver, CO. Utilize Luhu Design's expertise in hardware and firmware design to develop your IoT connected device or new IoT project.",
     metaTitle: "Internet of Things (IoT) Product Development Services in Denver"
     },
     {id: 'rapid-prototyping',
     title: 'Rapid Prototyping',
     subtitle: 'Rapid Prototyping Services',
     leadOne: "We can help you jump that big hurdle to your first prototype. Not only can we provide the end package of a working first prototype, but we will involve you every step of the way: from concept creations, to refinement, to build.",
     leadTwo: "",
     image: '/app/img/electronics-chip-cropped.jpg',
     description: "Rapid prototyping services in Denver, CO. Luhu Design can deliver the end package of a working first prototype and also walk you through every step of the way from concept to refinement to build.",
     metaTitle: "Rapid Prototyping Services in Denver"
     },
     {id: 'engineering-consultation',
     title: 'Engineering Consultation',
     subtitle: 'Talk to The Mechanical Engineering Problem Solvers',
     leadOne: "Have a mechanical engineering problem you can't solve?",
     leadTwo: "Using our experience of solving engineering problems with limited resources and time, we can create realistic solutions for you, so you can focus on more important things.",
     image: '/app/img/engineering-consultation.jpg',
     description: "Mechanical engineering consultation services in Denver, CO. Have a mechanical engineering problem and limited resources and time? Let Luhu Design help.",
     metaTitle: "Mechanical Engineering Consultation Services in Denver"
     },
     {id: 'coffee-consultation',
     title: 'Coffee Consultation',
     subtitle: "Getting Started With Your Idea",
     leadOne: "Not sure where to start? We're more than happy to chat with you about your idea and where to go from here.",
     leadTwo: "We'll also settle for a beer.",
     image: '/app/img/coffee-consultation.jpg',
     description: "Mechanical design and engineering consultation services in Denver, CO. Have an idea and not sure where to start? Talk with Luhu Design about your idea.",
     metaTitle: "Talk To An Expert About Your Engineering Problem"
     }
   ];

   this.state = {
     services: services,
     selectedService: null,
   };

   this.updateService = this.updateService.bind(this);

 }

 componentDidMount() {
  this.updateService(this.state.selectedService)
}

 updateService(serv) {
   console.log("'serv' (selectedService) passed to UpdateService:",  serv);
   this.setState(function () {
     return {
       selectedService: serv
   }

 });
 }

  render(){
    return (
     <div>
       <ServicesList
         services={this.state.services}
         selectedService={this.state.selectedService}
         onSelect={this.updateService} />

       <ServiceDetail selectedService={this.state.selectedService}/>

     </div>
   )
  }
}


 //       <div>
 //           <h1 className="heading">Engineering and Design Services</h1>
 //           <h2 className="sub-heading">Subheading</h2>
 //           <div className="services-nav-component">
 //           <div className="navbar area">
 //             <ul>
 //               <li>
 //                 {serviceNode}
 //               </li>
 //             </ul>
 //           </div>
 //          </div>
 //       </div>
 //     );
 //   }
 // }

module.exports = Services;
