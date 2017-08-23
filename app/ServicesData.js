
const ServicesData = {

  services: [
    {id: '3d-printing',
    title: '3D Printing',
    subtitle: 'Fast Local 3D Printing in Denver',
    leadOne: 'Got a fun design you would like to print out? Or need a mockup for that big meeting? We can 3D print designs within an envelope of 6.2" x 6.0" x 6.0" in various colors of PLA and ABS.',
    leadTwo: "Visit the Luhu Design 3D Printing Services page on 3D Hubs to get started with your order.",
    image: '/app/img/3d-printer.jpg',
    description: "Fast local 3D printing services in Denver, CO. We can 3D print designs in various colors in both PLA and ABS filaments.",
    metaTitle: "Fast Local 3D Printing Services in Denver",
    buttonText: "Start Your Order",
    buttonLink: "https://www.3dhubs.com/service/223729"
    },
    {id: '3d-cad-modeling-mechanical-design',
    title: '3D CAD Modeling and Mechanical Design',
    subtitle: '3D Modeling Services',
    leadOne: "Wanna print something out, but don't quite have the model up to snuff?",
    leadTwo: "Let's chat about how we can help create 3D CAD models, and tailor it to whatever manufacturing application you need.",
    image: '/app/img/3d-modeling-2.jpg',
    description: "3D CAD modeling and mechanical design services in Denver, CO. Luhu Design offers 3D CAD modeling services for a variety of manufacturing applications.",
    metaTitle: "3D CAD Modeling and Mechanical Design Services in Denver",
    buttonText: "Contact Us Today",
    buttonLink: "/contact"
    },
    {id: 'industrial-design',
    title: 'Industrial Design',
    subtitle: 'Industrial Design Services',
    leadOne: "We would be more than happy to exercise our right brain to bring you creative and beautiful concepts for your new project.",
    leadTwo: "But don't worry, we'll keep those left brain engineering concepts in mind when we do.",
    image: '/app/img/electronics-chip-cropped.jpg',
    description: "Industrial design services in Denver, CO. See how Luhu design can bring creative and beautiful concepts to your industrial design project.",
    metaTitle: "Industrial Design Services in Denver",
    buttonText: "Contact Us Today",
    buttonLink: "/contact"
    },
    {id: 'physical-product-design',
    title: 'Physical Product Design',
    subtitle: 'Building Beautifully Functional Products',
    leadOne: "Got that new great idea, but not sure where to start? We can help you take that idea off the napkin, and into CAD and beyond. We will use our engineering background and knack for design to create you something both beautiful and functional.",
    leadTwo: "Manufacturing and ease of use is kept in mind during the design process to make sure you don't lose ground when getting to mass production.",
    image: '/app/img/electronics-chip-cropped.jpg',
    description: "Physical product design services in Denver, CO. Luhu Design helps inventors and startups build beautiful and functional products from concept to CAD design and beyond.",
    metaTitle: "3D Modeling and CAD Mechanical Design Services in Denver",
    buttonText: "Contact Us Today",
    buttonLink: "/contact"
    },
    {id: 'internet-of-things-iot-product-development',
    title: 'Internet of Things (IoT) Product Development',
    subtitle: 'Building Your Own Connected Device',
    leadOne: "The future is in connected devices, from the home to the car to even the grocery store.",
    leadTwo: "We can help you to develop your new Internet of Things (IoT) connected hardware device, utilizing our knowledge and resources in hardware and firmware design, as well as our expertise in mechanical packaging.",
    image: '/app/img/electronics-chip-cropped.jpg',
    description: "Internet of Things (IoT) product development services in Denver, CO. Utilize Luhu Design's expertise in hardware and firmware design to develop your IoT connected device or new IoT project.",
    metaTitle: "Internet of Things (IoT) Product Development Services in Denver",
    buttonText: "Contact Us Today",
    buttonLink: "/contact"
    },
    {id: 'rapid-prototyping',
    title: 'Rapid Prototyping',
    subtitle: 'Rapid Prototyping Services',
    leadOne: "We can help you jump that big hurdle to your first prototype. Not only can we provide the end package of a working first prototype, but we will involve you every step of the way: from concept creations, to refinement, to build.",
    leadTwo: "",
    image: '/app/img/electronics-chip-cropped.jpg',
    description: "Rapid prototyping services in Denver, CO. Luhu Design can deliver the end package of a working first prototype and also walk you through every step of the way from concept to refinement to build.",
    metaTitle: "Rapid Prototyping Services in Denver",
    buttonText: "Contact Us Today",
    buttonLink: "/contact"
    },
    {id: 'engineering-consultation',
    title: 'Engineering Consultation',
    subtitle: 'Talk to The Mechanical Engineering Problem Solvers',
    leadOne: "Have a mechanical engineering problem you can't solve?",
    leadTwo: "Using our experience of solving engineering problems with limited resources and time, we can create realistic solutions for you, so you can focus on more important things.",
    image: '/app/img/engineering-consultation.jpg',
    description: "Mechanical engineering consultation services in Denver, CO. Have a mechanical engineering problem and limited resources and time? Let Luhu Design help.",
    metaTitle: "Mechanical Engineering Consultation Services in Denver",
    buttonText: "Contact Us Today",
    buttonLink: "/contact"
    },
    {id: 'coffee-consultation',
    title: 'Coffee Consultation',
    subtitle: "Getting Started With Your Idea",
    leadOne: "Not sure where to start? We're more than happy to chat with you about your idea and where to go from here.",
    leadTwo: "We'll also settle for a beer.",
    image: '/app/img/coffee-consultation.jpg',
    description: "Mechanical design and engineering consultation services in Denver, CO. Have an idea and not sure where to start? Talk with Luhu Design about your idea.",
    metaTitle: "Talk To An Expert About Your Engineering Problem",
    buttonText: "Contact Us Today",
    buttonLink: "/contact"
    }
  ],
  all: function() { return this.services},
  get: function(id) {
    const isService = s => s.id === id
    return this.services.find(isService)
  }
}

export default ServicesData
