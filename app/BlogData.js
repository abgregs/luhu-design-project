// Blog header  images

require("file-loader!./img/rapid-prototyping-bw.jpg");

// Blog post content images

// 3d-printing-threads
require("file-loader!./img/blog/3d-printing-threads/dimensions-thread.jpg");
require("file-loader!./img/blog/3d-printing-threads/extrusion.jpg");
require("file-loader!./img/blog/3d-printing-threads/helix-command.jpg");
require("file-loader!./img/blog/3d-printing-threads/print-1.jpg");
require("file-loader!./img/blog/3d-printing-threads/print-2.jpg");

// 3d-printing-with-PLA
require("file-loader!./img/blog/3d-printing-with-pla/cube-variations.jpg");
require("file-loader!./img/blog/3d-printing-with-pla/printing-rd-1.jpg");

const BlogData = {

  posts: [
    {slug: 'things-ive-learned-february-til-now',
    title: "Things I've Learned From February Until Now",
    subtitle: "Laser Engraving to Particle Photon to Split Boards and More...",
    description: "",
    author: 'Lindsey Cross',
    date: 'May 1, 2017',
    categories: ['3D Printing', 'Learning'],
    categorySlugs: ['3d-printing', 'learning'],
    image: './app/img/rapid-prototyping-bw.jpg',
    content: "<p>Folks, it's been awhile! We've been keeping very busy with numerous projects over here at Luhu, and I can't really say exactly what we've been working on, but can share some of the awesome things we've learned along the way.</p><h2>Laser Engraving</h2><p>One of my clients is working on neat lapel pins that help to tell a story (check out Wearrative). Together we worked on the design, and figured out the whole laser etching process together. I do have to say that watching lasers burn into wood is pretty cathartic. Pro tip for laser etching: become an Adobe Illustrator expert!</p><h2>Particle Photon is Pretty Neat</h2><p>I needed to quickly move to a wireless system for a prototype I was working on, and was struggling to find a good shield for my Arduino that wouldn't hog up all the pins I needed for other things. So, at the suggestion of a friend, I jumped onto <a href='https://www.particle.io/products/hardware/photon-wifi-dev-kit' target='_blank'>Particle Photon</a> ....and it turned out great! The IDE is super similar to Arduino, and I can easily flash my devices without a cord...which was very helpful for the application I was using it in. 13/10 would buy more</p><h2>3D Printing For Strength</h2><p>A client had some gears and tracks that they needed quickly...but there was no way we could get these custom parts machined in time, and at a reasonable cost. So we looked into some stronger 3D printed materials. Some of the highlights included Polycarbonate and Fiber reinforced Nylons. Highly suggest going this route if you are trying to quickly prototype a motor or robot, but don't want to drop the cash on custom gears!</p><h2>Software Architecture</h2><p>Although I do enjoy the hardware life, I dipped a bit into learning about software architecture, and the joys and pains on creating a good back end to compliment IoT devices and apps. If you are a hardware guru, this is not something to ignore when trying to create a full IoT solution. Contact my friends at <a target='_blank' href='https://www.littlebarnindustries.com/services'>Little Barn</a> if you wanna learn more.</p><h2>Split Boards</h2><p>I promise this is relevant to my work, but I've learned a ton about backcountry split boards. Can't say I'm upset about that research project!</p></br><p>Lindsey</p>"
    },
    {slug: 'remotely-printing-so-you-can-live-in-silence',
    title: "Remotely Printing So You Can Live In Silence",
    subtitle: "",
    description: "",
    author: 'Lindsey Cross',
    date: 'February 3, 2017',
    categories: ['3D Printing', 'Learning'],
    categorySlugs: ['3d-printing', 'learning'],
    image: './app/img/rapid-prototyping-bw.jpg',
    content: "<p>I really do love my 3D printer, but it does have it's rough side. One of those personality traits- it's loud.</p><p>I wouldn't mind if it was just me and my printer locked in a soundproof office all day, but I do happen to work in an open office atmosphere, so other people get to experience the high pitched squeal of innovation as well.</p><p>Since I own a Lulzbot Mini, I need some sort of computing device to have it run, so the solution wasn't to simply stick the printer in a broom closet and print all day and night. But luckily, I'm not the only one with this problem!</p><p>I followed the instructions provided by <a href= 'https://www.youtube.com/watch?annotation_id=annotation_140183163&amp;feature=iv&amp;src_vid=RAKrHajrMTo&amp;v=lxh5yxPvm9w' target='_blank'>Extruder Joe</a> to get my printer workely remotely, but obviously, things didn't work out perfectly the first time around.</p><p>Here are some tips on how to remotely control your 3D printer so you can stick it in the cupboard under the stairs (hello Potter nerds).</p><h2>Tip #1: Don't Mess Around With That Wifi Dongle</h2><p>I'm afraid to admit it, but I went through like 3 different wifi routers and dongles before getting one that worked well for me. Make sure you buy one that is truly &quot;plug and play&quot;. Don't mess around with Linksys guys that require some driver install.</p><p>The best way to see if your Wifi on your Raspberry Pi is working, is to see if you can see &quot;Octopi.Local&quot; on your network. I made sure that it was visible before trying to ping it.</p><p>I found that the <a href='https://www.amazon.com/gp/product/B003MTTJOY/ref=oh_aui_detailpage_o02_s00?ie=UTF8&amp;psc=1' target='_blank'>Edimax</a> one suggested in the video works PERFECTLY. Just buy it, and save yourself some heartache</p><h2>Tip #2: Protect That Motherboard!</h2><p>Before committing to sticking your printer in the dusty cupboard under the stairs, make sure to protect your valuables. I printed out <a href='http://www.thingiverse.com/thing:922740' target='_blank'>this case</a> for my Rasperry Pi 2, and it has worked great. Also, be sure to take care of the printer, as in:</p><ul><li>Properly storing the filament in a bag with dessicant when not in use</li><li>Cover your printer when not in use</li><li>Clean the bed and nozzle before every use</li></ul><h2>Tip #3: Slice Your Files Using Cura</h2><p>I found it infinitely easier to do all my slicing in Cura, before loading it into the OctoPi interface. I had much more control over feed rates, fill %, and support structure by doing it this way, rather than trying to slice in OctoPi.</p><h2>Tip #4: Troubleshooting...</h2><p>Even after getting the wifi figured out, I couldn't get OcotoPi to work. So I ended up reflashing the SD card with a new version of OctoPi, and reset everything up, and it worked. Sometimes you get a bad installation, or Win Imager screws up the writing.</p><p>Those were some of the big issues I encountered while trying to get my printer setup! Now my productivity is out the roof (well, aside from random Buzzfeed quizzes), since I don't get distracted by the high pitch singing by my printer right next to me.</p><p>Good luck!</p>"
    },
    {slug: 'updates-attending-CES',
    title: "Updates After Attending CES",
    subtitle: "",
    description: "",
    author: 'Lindsey Cross',
    date: 'January 12, 2017',
    categories: ['3D Printing', 'IoT', 'Industry'],
    categorySlugs: ['3d-printing', 'IoT', 'industry'],
    image: './app/img/rapid-prototyping-bw.jpg',
    content: "<p>Last week I was fortunate enough to be able to attend the Consumer Electronics Show (CES)! You guys have probably read all about this big stuff, like LG's super thin TV, or how Alexa is taking over the world. However, I spent a bit of time on the smaller floors, and wanted to let you guys know about all that I learned from the booths off the radar.<h2>3D Printing</h2><p>There are lots of companies investing in getting stronger 3D printed materials on the market, and some trying to make printing in metal more affordable. <a href='http://essentiummaterials.com/' target='_blank'>Essentium Materials</a> is working on filaments with strength similar to injection molded plastics, and carbon fiber reinforced materials. <p><a href='https://markforged.com/why-markforged/' target='_blank'>Markforged</a> is also working to create stronger, carbon fiber enforced materials, but is specializing in creating desktop metal 3D printers.<p>And so many scanners! Although I am partial to the ancient methods of surface modeling via pictures, some of those scanners are neat, portable, and accurate.<h2>Sensors And IoT</h2><p>I definitely enjoyed walking around and talking to the MEMS and sensor companies and seeing what they had to offer. The sensor that I personally thought was the coolest was <a href='https://www.stretchsense.com/' target='_blank'>StretchSense</a>. They have stretchable sensors that can measure motion, displacement, force, etc. They can easily be integrated into clothing and fabric, to make them perfect for the textile market. They will also work with you on developing your product, and sell you evaluation kits to help you get to the next level. I hope I get a project where I can work with them in the future!<p>People are definitely catching onto the IoT trend. There were several companies, like <a href='http://www.bosch-connectivity.com/en/' target='_blank'>Bosch</a> and <a href='https://www.rigado.com/products/' target='_blank'>Rigado</a> providing certified development modules for folks to develop their own connected devices. Bosch is even working on a LoRa add on that they anticipate to be ready towards the end of the year!<p>I was most impressed with <a href='http://www.breadware.com/' target='_blank'>Breadware</a>'s platform, however. It was end to end, including easy firmware and UX development for your product. It isn't necessarily a go to market solution for your connected device, but will help you (and me!) quickly prototype.<h2>The Coolest Thing I Saw At CES....</h2><p>was <a href='http://bondhome.io/' target='_blank'>Bond</a>. Yeah, there were lots of smart home devices and remotes and apps, but you need smart appliances to use them. With Bond, it will take the IR sensors from your &quot;dumb&quot; home items with remotes, and convert them to IR sensors. So say you are still in bed, but don't want to open up the garage door for your irresponsible roommate who lost their remote. Just pick up your phone, open the Bond app, and open and close the door without moving a muscle. <p>Seeing all the cool new devices was a great time, but the people at CES were the best. You would never know if you were talking to a marketing person, or the inventor themselves at a booth, and all the bars on the strip were filled with people in the industry, making cool things happen.<p>Hope to see you at CES 2018!</p>"
    },
    {slug: '3d-printing-threads',
    title: "3D Printing Threads",
    subtitle: "",
    description: "",
    author: 'Lindsey Cross',
    date: 'December 12, 2016',
    categories: ['3D Printing', 'PLA', 'Tips', '3D Modeling'],
    categorySlugs: ['3d-printing', 'pla', 'tips', '3d-modeling'],
    image: './app/img/rapid-prototyping-bw.jpg',
    content: "<p>I have been working on a project involving threads, and quickly realized... I don't know how to print threads!<p>Back in my machining days, we would drill and tap. But with a 3D printer...I can now save some steps and print the threads.<p>It's definitely a bit more difficult, but don't let anyone tell you otherwise...you can 3D print threads! Don't settle for creating a hole and tapping.<p>Modeling software: Solidworks 2016<h2>First off: 3D Modeling</h2><p>Printing threads first starts in the 3D model. You cannot simply use the Solidworks hole wizard and &quot;tell&quot the printer to print a 4-40 hole, or even use the &quotThread&quot command. One thing I learned in my days in the aerospace industry is to always verify CAD programs wizard commands...and that is definitely true here.<p>You are going to need to physically create the threads yourself. I did this by first creating a helix with the proper pitch of the threads I needed, then doing a Sweep extrustion or cut along the helix to create the threads. Here is a step by step for you:</p><figure><img class='img-responsive' alt='Extrude a part with the major diameter of a thread' src='./app/img/blog/3d-printing-threads/extrusion.jpg'><figcaption>Extrude a part with the major diameter of a thread</figcaption></figure><ol><li>Choose what thread size you want to use. Generally pick something larger than 1/2&quot. I also found it helpful to first stick to standard sizes and pitches so that you can verify your work against a real screw or nut (I found it helpful to verify against McMaster Carr models). For my first threads I chose 3/4&quot-10.</li><li>Extrude or cut a hole the size of the diameter of the thread you are using. Don't worry about tolerancing right now, as we are just setting everything up line to line and working backwards to make them fit later. In this case, I am making a nut, and the diameter is .75&quot:</li><li>Create a helix. Create a sketch onto the edge or plane you want the thread to start, and create a circle the same size as your diameter. You can also convert the edge of your hole or extrusion to keep the size of your helix connected to your original hole or extrusion. See below for settings. The pitch is the pitch of your screw. For UNC and UNF threads, this is 1/ the number after the nominal diameter size (the threads per inch). In the case of 3/4&quot-10 this is 1/10&quot; or 0.1 in. For ISO, the number given after the nominal diameter size is the pitch itself, no calculations needed. Also, make sure your start angle is at an angle that can be perpendicular to one of your planes.</ol><figure><img class='img-responsive' alt='Helix command settings for 3/4&quot-10 threads'src='./app/img/blog/3d-printing-threads/helix-command.jpg'><figcaption>Helix command settings for 3/4&quot-10 threads</figcaption></figure><p><ol start='4'><li> Create a sketch on a plane perpendicular to your helix start point. You will now be creating the profile for the threads. This is the proper profile for ISO, UNC, and UNF threads (yay consistency!). Be sure the construction lines intersect the real lines at the midpoint. Also, be sure the edge corner of the sketch is coincident with the helix start.</li></ol><figure><img class='img-responsive' alt='Dimensions for thread profile' src='./app/img/blog/3d-printing-threads/extrusion.jpg'><figcaption>Dimensions for thread profile</figcaption></figure><ol start='5'><li>Create either a swept extrusion (for female threads aka nut), or swept cut (for male threads aka screw). The profile will be your brand new sketch, and the path will be your helix.</li></ol><p>And voila! You have threads! But we're not done yet...<h2>Next: Tolerances :-|</h2><p>Remember how nobody's perfect? Well that applies to 3D printing as well. Maybe if you are having a luck day, your printer will print out everything perfectly nominal. In that case, you should stop printing and go pick up a lottery ticket.<p>But for those unlucky days, we have to adjust our model in order to account for our 3D printer printing either a little to small or a little too big. Generally, the printer will print holes a little bit too small, especially the less material it has surrounding it. <p>I updated my file to change the major diameter of the screw or nut by about 5%. This is a good start, and you can tighten it up if you dial in your printer a bit, or work to get more detailed prints. So for this case I increased the major diameter of the nut to .79&quot;.<h2>Finally: Printing!</h2><p>And now for the fun part...the printing!<p>First off, I stopped by Ace Hardware and picked up some actual stainless steel 3/4&quot;-10 nuts and bolts. I highly suggest doing this (so cheap, like .20c each!) so that you can easily troubleshoot if things aren't fitting right.<p>I printed with .2mm with PLA, and got my screw and nut to fit together, although the fit was a little loose. I decreased the major diameter of the nut until I got a nice tight fit.<figure><img class='img-responsive' src='./app/img/blog/3d-printing-threads/print-1.jpg' alt='3d-printed-threads-screw-and-nut-separate'/></figure><figure><img class='img-responsive' src='./app/img/blog/3d-printing-threads/print-2.jpg' alt='3d-printed-threads-screw-and-nut-fit-together'/></figure>"
    },
    {slug: '3d-printing-with-PLA',
    title: "3D Printing With PLA",
    subtitle: "",
    description: "",
    author: 'Lindsey Cross',
    date: 'December 8, 2016',
    categories: ['3D Printing', 'PLA', 'Tips'],
    categorySlugs: ['3d-printing', 'pla', 'tips'],
    image: './app/img/rapid-prototyping-bw.jpg',
    content: "<p>PLA is one of the most common 3D printing filaments, but does take a little TLC to get your prints just right. Any little change may lead to overextrusions or underextrusions, or your print lifting off the platform.<p>First off, I found this <a href='https://www.simplify3d.com/support/print-quality-troubleshooting/' target='_blank'>awesome guide</a> for help with diagnosing common printing problems. I highly suggest taking a look at it when having issues. It also has a nice glossary of terms we might refer to in the process.<p>Second off, every printer and filament is different! What works exactly for me, might not work for you. So instead of showing you a printout of the settings I used to get the print right, I'll guide you through some troubleshooting options to get your print just right.<p>Printer: Lulzbot MIni<p>Filament: Inland 33mm PLA-black<p>Slicer: Cura Lulzbot Edition<p>I printed out a &quot;calibration cube&quot; and adjusted it to by 10mm x 10mm. This made the print time fairly quick so that I could move through different settings to find the best. Eventually, I moved up to a 1&quot; x 1&quot; cube to be sure the settings worked for larger projects. You can download the cube <a href='http://www.thingiverse.com/thing:1949150' target='_blank'>HERE</a><p>I started out with the filament recommended 205C extrusion temperature, and 60C bed temperature. I did not touch any other settings in Cura (this led to a layer height of 0.2mm), and let it print:<figure><img class='img-responsive' alt='First round printing with PLA: 250C extruder, 60C bed, no changes to settings' src='./app/img/blog/3d-printing-with-pla/printing-rd-1.jpg'><figcaption>First round printing with PLA: 250C extruder, 60C bed, no changes to settings</figcaption></figure><p>The part stuck well to the bed, which indicated a good bed temperature. However, there were a lot of pimples and over-extrusions that indicated a hot extruder temperature, among other settings.<p>I next worked with the extrusion temperature, and did not see much of a difference between 190C (where it barely extruded) to 205C (where it was dumping out filament). I realized that it wasn't affecting the result that much, so settled on 200C for extrusion temperature.<p>Now for the fun settings. First thing I messed with was the minimal layer time. The intent of this setting is to allow each layer an appropriate time to cool before moving onto  the next layer. Too long a time and it will appear that the layers are not sticking together and dimensions will be off. To short a time and it might &quot;collapse&quot;. Increasing the time by 5 seconds helped out my print a ton.<p>Next thing I messed with was the filament flow %. Cura kinda screams at you if you change it, but it is dependent on what filament manufacturer you are using. It is here to cover tolerance inconsistencies in the diameter of your filament. I reset mine to 95% and this helped a bunch, and prevented over-extrusions.<p>Last thing I messed with was the speed. I made sure that outer shell speed was the slowest, to ensure proper outer dimensions. <p>One thing I also noticed is that I got better prints if I let the printer cool down appropriately. It is definitely harmful to the filament to have it at a hot temperature for awhile without printing.<figure><img class='img-responsive' alt='Different variations of the cube. Bottom U: Initial print settings with blobs and zits. H: Too long layer time, too low temp, too fast speed. Top U: Pretty decent. Top L: wrong print orientation' src='./app/img/blog/3d-printing-with-pla/cube-variations.jpg'><figcaption>Different variations of the cube. Bottom U: Initial print settings with blobs and zits. H: Too long layer time, too low temp, too fast speed. Top U: Pretty decent. Top L: wrong print orientation</figcaption></figure><p>So, for the tldr:</p><ul><li>Work to find your right extruder temperature and bed temperature</li><li>Each layer needs appropriate time to cool; adjust the minimal layer time for this</li><li>Filament flow % can help prevent over-extruding if dealing with filament with varying filament diameter</li><li>Speed matters!</li></ul><p>Happy printing!</p>"
    },
    {slug: '3d-printing-with-lulzbot',
    title: "We Luv the Lulzbot",
    subtitle: "",
    description: "",
    author: 'Lindsey Cross',
    date: 'December 7, 2016',
    categories: ['3D Printing', 'Tech', 'Tips'],
    categorySlugs: ['3d-printing', 'tech', 'tips'],
    image: './app/img/rapid-prototyping-bw.jpg',
    content: "<p>Exciting times over at the Luhu Design digs...we got a 3D printer! Now we have the capability to save time and money by building initial iterations of designs in house, and learning on the fly about the product. Nothing says more about a physical design than being able to hold it and play with it!</p><p>Purchased the&nbsp;<a href='https://www.lulzbot.com/store/printers/lulzbot-mini' target='_blank'>Lulzbot Mini</a>&nbsp;from Aleph Objects, and had it up and running in less than 30 minutes! Quick tip: Get some good headphones if you plan on printing near your desk because this guy can sing.</p><p>However, calibrating the machine to be able to consistently produce quality prints has been quite the learning curve. I'll post some tips and tricks along the way so that you don't have to go through the same struggles I did!</p><p>Best wishes and happy printing!</p>"
    },
    {slug: 'denver-startup-week-tldr',
    title: "Denver Startup Week TLDR",
    subtitle: "",
    description: "",
    author: 'Lindsey Cross',
    date: 'September 20, 2016',
    categories: ['Learning', 'Tips'],
    categorySlugs: ['learning', 'tips'],
    image: './app/img/rapid-prototyping-bw.jpg',
    content: "<p>Last week I got the opportunity to attend one of the largest startup events in North America...right in my backyard. For those of you who couldn't make the trek out, here are the biggest takeaways for a hardware company:</p><ul><li>Get drawings done! CAD models only show nominal dimensions, but drawings define your tolerances</li><li>Mock things up to see how costumers play with it. Is it intuitive and easy to turn the thing on?</li><li>Budget for certification testing. Decent FCC testing costs ~ $10,000. You can reduce this cost by using pre certified modules in your product</li><li>In early design stage...include everything you think you will need. Make the PCB huge! You can optimize before heading to production</li><li>Be inspired by nature!</li></ul><p>Lindsey</p>"
    }
  ],
  all: function() { return this.posts},
  get: function(id) {
    const isPost = p => p.slug === id
    return this.posts.find(isPost)
  },
  getPostsFromCategory: function(cat) {
    const checkCat = c => c === cat
    return this.posts.filter(
      p => p.categorySlugs.find(checkCat)
    )
  },
  // getNameFromCategory: function(cat) {
  //   const checkCat = c => c === cat
  //   const posts = this.posts.map(
  //     p => p.categorySlugs.find(checkCat) ? p.categories()
  //   )
  //
  // }
 }

export default BlogData
