var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var PropTypes = require('prop-types');
var BlogPost = require('./BlogPost');
var Link = require('react-router-dom').Link;

function BlogList (props) {

    if (props.clickedPost !== null) {
        return null
      } else {
    return (

    <div className="bloglist-component">
      <header className="intro-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="heading-container text-center">
                        <h1 className="heading">Luhu Blog</h1>
                        <div className="divider">
                          <hr/>
                        </div>
                        <h2 className="sub-heading">A Blog About Mechanical<br/>Design and Engineering</h2>
                    </div>
                </div>
            </div>
        </div>
    </header>



      <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 list-container">

              {props.posts.map(function(post) {
                return (

                <div className="post-preview" key={post.slug}>
                    <Link to={"/blog"+post.slug}
                    onClick={props.onSelect.bind(null, post)}>
                        <h2 className="post-title">
                            {post.title}
                        </h2>
                        <h4 className="post-subtitle">
                            {post.subtitle}
                        </h4>
                    </Link>
                    <p className="post-meta">Posted by <span className="post-author">{post.author}</span> on {post.date}</p>
                  <hr/>
                </div>


              )
              })}
            </div>
          </div>
        </div>
      </div>

)}
}

BlogList.propTypes = {
  onSelect: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};


class BlogHome extends React.Component {

  constructor(props) {
   super();

   var posts = [
     {slug: '/things-ive-learned-february-til-now',
     title: "Things I've Learned From February Until Now",
     subtitle: "Problems look mighty small from 150 miles up",
     author: 'Lindsey Cross',
     date: 'May 1, 2017',
     categories: ['3D Printing', 'Learning'],
     image: '/app/img/electronics-chip-cropped.jpg',
     content: "<p>Folks, it's been awhile! We've been keeping very busy with numerous projects over here at Luhu, and I can't really say exactly what we've been working on, but can share some of the awesome things we've learned along the way.</p><h2>Laser Engraving</h2><p>One of my clients is working on neat lapel pins that help to tell a story (check out Wearrative). Together we worked on the design, and figured out the whole laser etching process together. I do have to say that watching lasers burn into wood is pretty cathartic. Pro tip for laser etching: become an Adobe Illustrator expert!</p><h2>Particle Photon is Pretty Neat</h2><p>I needed to quickly move to a wireless system for a prototype I was working on, and was struggling to find a good shield for my Arduino that wouldn't hog up all the pins I needed for other things. So, at the suggestion of a friend, I jumped onto <a href='https://www.particle.io/products/hardware/photon-wifi-dev-kit' target='_blank'>Particle Photon</a> ....and it turned out great! The IDE is super similar to Arduino, and I can easily flash my devices without a cord...which was very helpful for the application I was using it in. 13/10 would buy more</p><h2>3D Printing For Strength</h2><p>A client had some gears and tracks that they needed quickly...but there was no way we could get these custom parts machined in time, and at a reasonable cost. So we looked into some stronger 3D printed materials. Some of the highlights included Polycarbonate and Fiber reinforced Nylons. Highly suggest going this route if you are trying to quickly prototype a motor or robot, but don't want to drop the cash on custom gears!</p><h2>Software Architecture</h2><p>Although I do enjoy the hardware life, I dipped a bit into learning about software architecture, and the joys and pains on creating a good back end to compliment IoT devices and apps. If you are a hardware guru, this is not something to ignore when trying to create a full IoT solution. Contact my friends at <a target='_blank' href='https://www.littlebarnindustries.com/services'>Little Barn</a> if you wanna learn more.</p><h2>Split Boards</h2><p>I promise this is relevant to my work, but I've learned a ton about backcountry split boards. Can't say I'm upset about that research project!</p></br><p>Lindsey</p>"
     },
     {slug: '/remotely-printing-so-you-can-live-in-silence',
     title: "Remotely Printing So You Can Live In Silence",
     subtitle: "",
     author: 'Lindsey Cross',
     date: 'February 3, 2017',
     categories: ['3D Printing', 'Learning'],
     image: '/app/img/electronics-chip-cropped.jpg',
     content: "<p>Some paragraph content</p><h2>Some heading</h2><p>Some more content</p>"
     },
   ];

   this.state = {
     posts: posts,
     clickedPost: null
   };

   this.updatePost = this.updatePost.bind(this);
 }

 componentDidMount() {
  this.updatePost(this.state.clickedPost)
}

 updatePost(post) {
   console.log(post);
   this.setState(function () {
     return {
       clickedPost: post
   }

 });
 }

  render(){
    return (
     <div>
       <BlogList
         posts={this.state.posts}
         clickedPost={this.state.clickedPost}
         onSelect={this.updatePost} />

       <BlogPost clickedPost={this.state.clickedPost} />

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

module.exports = BlogHome;
