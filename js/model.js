"use strict";

// Model.js by George Fischer
// Fall 2016



// Data Model Content Collections for;
//      Projects
//      Skills
//      Bio
//      Connect



//
// PROJECTS
//

// Data Objects

var projects = [{
    title: 'Map',
    image: 'img/projects/map.png',
    demo: 'http://geosynchronous.us/RoundRiver/',
    code: 'https://github.com/Geosynchronous/P7-Neighborhood-Map',
    textInfoList: 'HTML, CSS, JAVASCRIPT DESIGN PATTERNS, DOM, AJAX, GOOGLE MAPS API, OPEN WEATHER MAP API, MVVM, KNOCKOUT, JQUERY',
    textInfoDescription: [
        'The "Neighborhood Map Project" is the capstone project for the Udacity FEND Nanodegree course.  In addition,this project has real world application. It is a prototype for Outreach Education at ROUND RIVER CONSERVATION, which is a NGO Non-Profit.',
        'The purpose of this Map App is to provide live data to update geolocations information windows on a map.  Selecting a marker on the map or a listed item on the options box will open an information window on the map.  The open window renders an image for that location, and real time weather data.  The markers and list locations can be filtered by selecting various buttons for that purpose. The info link on the info window links to the specific Round River website page for that location.  The weather icon links to a worldwide weather map, that can be used to access more detailed weather reports.',
        'Third party APIs were handled with AJAX to provide real time data. API loading error messages are invoked when a load failure occurs. Google Map API provides the map and mapping functionalities, and Open Weather Map API provides real time weather data for specific locations.',
        'The KNOCKOUT framework was used to make the UI and MVVM code model optimal.  For instance, the listed locations and marker locations highlight simultaneously when a user hovers the cursor over them.  Typically this is a tricky thing to code for, but with Knockout it is much easier to do, with a lot less code.  JQUERY is needed by KNOCKOUT. All code the DOM updating was done using KNOCKOUT, though JQUERY could have provided some of that functionality as well.',
        'The MVVM model paragdigm was used to serperate concerns of model data,  user view, and user control. The options box and google map code were also seperated concerns as google maps itself does not work with KNOCKOUT',
        'The design is responsive for desktop, tablet and phone hardware platforms. Using different platforms to view this app, and changing browser window width will reveal the responsiveness of this design.'
    ]
}, {
    title: 'Game',
    image: 'img/projects/game.png',
    demo: 'http://geosynchronous.github.io/P5-Game/',
    code: 'https://github.com/Geosynchronous/P5-Game',
    textInfoList: 'HTML5 CANVAS, CSS, OBJECT ORIENTED JAVASCRIPT, ANIMATIONS, WRITING READMEs',
    textInfoDescription: [
        'The "Arcade Game Project" in the Udacity FEND course focuses on the above listed coding topics. The Arcade Game was designed to work on the desktop with UI controls using a keyboard. It can be viewed on tablets and phones, though no touch gaming controls will be available.',
        'The basic object of the game is for the avatar to cross the jittering and moving stream of bugs without getting touched to score points.  There are 5 increasingly difficult levels to this game called LIFECYCLES.  The INFO button explains details of how to play the Game.'
    ]
}, {
    title: 'Portfolio',
    image: 'img/projects/portfolio.png',
    demo: 'http://geosynchronous.github.io/P3-Portfolio/',
    code: 'https://github.com/Geosynchronous/P3-Portfolio',
    textInfoList: 'HTML5 SEMANTIC TAGS, BOOTSTRAP CSS, FLEXBOX, RESPONSIVE DESIGN and IMAGES',
    textInfoDescription: [
        'The "Build a Portfolio Site Project" in the Udacity FEND course focuses on the above listed coding topics.  The responsive design can be viewed on desktops, tablets, and phones.  Changing the browser window width, reveals responsive transitions. The menu items are not actively linked in this demo',
        'Currently, some examples screen shots of my previous client web site developments are shown. I like the basic clean design of this Portfolio, and may develop it further in the future to make available projects from all my skilled disciplines.'
    ]
}, {
    title: 'Resume',
    image: 'img/projects/resume.png',
    demo: 'http://geosynchronous.github.io/P4-Resume/',
    code: 'https://github.com/Geosynchronous/P4-Resume',
    textInfoList: 'HTML, CSS, JS, DATA TYPES, ENCAPSULATION, JQUERY, DOM MANIPULATION, EVENT HANDLERS, FLOW CONTROL, JSLINT, BEAUTIFIERS, BOOTSTRAP CSS, JSON ',
    textInfoDescription: [
        'The "Online Resume Project" in the Udacity FEND course focuses on the above listed coding topics.  The content of each contained in Bootstrap Collapseable Container.  Only one Container can be open at a time. The content of the resume is not complete, and still needs to be updated. It is a response design that works on desktop, tablet, and phones.  There is a lot about this design I like, and I will probably use a version of this for my professional profiles.'
    ]
}, {
    title: 'Optimization',
    image: 'img/projects/optimize.png',
    demo: 'http://geosynchronous.github.io/P6-Mobile-Portfolio/views/pizza.html',
    code: 'https://github.com/Geosynchronous/P6-Mobile-Portfolio',
    textInfoList: 'HTML, CSS, JAVASCRIPT, BOOTSTRAP-GRID, ANIMATION, CRP, RAIL, OPTIMIZATION, JANK, COMPOSITING, CHROME DEV TOOLS, GOOGLE PAGESPEED',
    textInfoDescription: [
        'The "Website Optimization Project" in the Udacity FEND course focuses on the above listed coding topics. The important web page for working on optimization, is the one invoked by pizza.html. When scrolling the web page, or changing the width of the browser window, the background pizzas would animate. I learned a lot about how to use Chrome Dev Tools to observe the inner workings of the Critical Rendering Path (CRP), and determine if my optimization efforts were working to create a smooth rendering UI experience.'
    ]
}, {
    title: 'Testing',
    image: 'img/projects/testing.png',
    demo: 'https://github.com/Geosynchronous/',
    code: 'https://github.com/Geosynchronous/P8-Feed-Reader-Testing',
    textInfoList: 'HTML, CSS, JAVASCRIPT, JASMINE, BDD, TDD, RSS FEEDS',
    textInfoDescription: [
        'The "Feed Reader Testing Project" in the Udacity FEND course focuses on the above listed coding topics. Sample Feed Reader App code needed to have a specified set of Suites written to Test if the Expecations work. Test and Behaviour driven designs were used.  The test code was actually scripted at the end of the App, so it would automatically run everytime the App is invoked. The current state of the App has no errors evident.  Changing the code, or turning off the internet connection can cause the JASMINE code to dispay error messages.'
    ]
}, {
    title: 'Tracker',
    image: 'img/projects/tracker.png',
    demo: undefined,
    code: undefined,
    textInfoList: 'HTML, CSS, JS, BACKBONE, FIREBASE, MVVM, BOWER, GULP, GIT',
    textInfoDescription: [
        'I plan on doing the optional Health Tracker Project to learn about BACKBONE and FIREBASE frameworks.I also plan on strenghting my skills, with BOWER, GULP, and GIT.'
    ]
}, {
    title: 'Splash',
    image: 'img/projects/splash.png',
    demo: undefined,
    code: 'https://github.com/Geosynchronous/geosynchronous.github.io',
    textInfoList: 'HTML,CSS, JS, SPA, MATERIALIZE FRAMEWORK, MVVM',
    textInfoDescription: [
        'This is my Splash Website Project. It is the Splash Page for my Github Repository, which introduces the User to an overview of my Web Projects and Skills. It is the webpage you are currently on.  It is a SINGLE PAGE APPLICATION (SPA)  I used the Materialize Framework on this project for the first time, and like how easy it is to develop my ideas with. I started with a simple template and refactored it to meet my needs. It is a responsive design that works well on desktop, tablet and mobile phones.'
    ]
}, {
    title: 'Repository',
    image: 'img/projects/repository.png',
    demo: undefined,
    code: 'https://github.com/Geosynchronous',
    textInfoList: 'GIT, GITHUB',
    textInfoDescription: [
        'You can see all my coding projects in my Github Repository. I just started using this tool when I began the Udacity FEND Nanodegree course.  I have mainly used it so far for cloning, downloading, pulling and creating repositories, and versioning commits of my ongoing development work.  I am so thankful to Github for providing this essential service for free. I look forward to collobrating on open source projects here.'
    ]
}];


//  HTML styled content elements

var HTMLprojectsImage = '<img class="activator" src="%image%" alt="Map Project Image">',
    HTMLprojectsTitle = '<span class="card-title activator grey-text text-darken-4">%title%</span>',
    HTMLprojectsDemo = '<a class="light-blue-text" href="%demo%">Demo</a>',
    HTMLprojectsCode = '<a class="light-blue-text" href="%code%">Code</a>',
    HTMLprojectsList = '<p class="info-code-txt">%list%</p>',
    HTMLprojectsDescription = '<p>%description%</p>';

var HTMLprojectsCardReveal = '<div class="card-reveal">' +
    '<span class="card-title grey-text text-darken-4">%title%<i class="material-icons right">close</i></span>';


// Encapsulated Data Functions
// Data Added to DOM (index.html)

projects.display = function() {

    var len1 = skills.length;
    for (var i = 0; i < len1; i++) {

        var formattedImage = HTMLprojectsImage.replace("%image%", projects[i].image),
            formattedTitle = HTMLprojectsTitle.replace("%title%", projects[i].title),
            formattedDemo = HTMLprojectsDemo.replace("%demo%", projects[i].demo),
            formattedCode = HTMLprojectsCode.replace("%code%", projects[i].code),
            formattedList = HTMLprojectsList.replace("%list%", projects[i].textInfoList);

        // BUILD CARD
        // format and content
        var formattedCardReveal = HTMLprojectsCardReveal.replace("%title%", projects[i].title),
            formattedProjectsEntry =
            '<div class="col s12 m4">' +
            '<div class="card">' +
            '<div class="card-image waves-effect waves-block waves-light">' +
            formattedImage +
            '</div>' +
            '<div class="card-content">' +
            formattedTitle +
            '</div>' +
            '<div class="card-action">' +
            '<a class="light-blue-text activator" href="#!">Info</a>';

        if (projects[i].demo === undefined) {
            // Do Nothing;
        } else {
            formattedProjectsEntry = formattedProjectsEntry.concat(formattedDemo);
        }
        if (projects[i].code === undefined) {
            // Do Nothing;
        } else {
            formattedProjectsEntry = formattedProjectsEntry.concat(formattedCode);
        }

        formattedProjectsEntry = formattedProjectsEntry.concat('</div>' + formattedCardReveal + formattedList);



        var len2 = projects[i].textInfoDescription.length,
            formattedDescription;

        for (var j = 0; j < len2; j++) {
            formattedDescription = HTMLprojectsDescription.replace("%description%", projects[i].textInfoDescription[j]);
            formattedProjectsEntry = formattedProjectsEntry.concat(formattedDescription);
        }

        formattedProjectsEntry = formattedProjectsEntry.concat('</div></div></div>');
        $(".projects-entries")
            .append(formattedProjectsEntry);
    }

    var formattedProjectsEntryFinalized = '</div></div></div>';

    $(".projects-entries")
        .append(formattedProjectsEntryFinalized);
};



//
// SKILLS
//

// Data Objects

var skills = [{
    title: 'HTML CSS JS',
    icon: 'flash_on',
    text: 'This coding ecosystem forms the foundation for web dev, and unlocks access to all other development possibilities.  I am comfortable using these languages, and confident when searching out answers that I need.  I look forward to a continual deeping of my knowledge here.'
}, {
    title: 'Frameworks',
    icon: 'account_balance',
    text: 'By utilizing frameworks, I have gained an appreciation of how much more productive and dynamic my web development work can be. I plan on spending more time learning new frameworks. So far I have used: <strong>Bootstrap, jQuery, Knockout, Materialize, and Jasmine.'
}, {
    title: 'APIs',
    icon: 'settings',
    text: 'Application Program Interfaces allow websites to bring in data in all types of forms from server providers. This allows websites to be dynamic with incoming information. To date I have used these APIs: <strong>Google Maps, Google Search, Google Places, Open Weather Map, Wikipedia, and The New York Times.</strong>'
}, {
    title: 'Dev Tools',
    icon: 'build',
    text: '<strong>Chrome Dev Tools, Google Analytics, Sublime Text Editor, CLI Terminal, Linters, Beautifiers, Minifiers, Graphic Compression, Validators, Jasmine Testing, Bower, GULP, Git, GitHub, NodeJS, NPM, and Bower.</strong>'
}, {
    title: 'Testing',
    icon: 'assignment_turned_in',
    text: 'Test Driven Design (TDD) and Behaviour Driven Design (BDD) I have recently implemeted with the FeedReader Testing project using <strong>JasmineJS Testing Framework.</strong> It really helps in the process of writing better code.'
}, {
    title: 'Communities',
    icon: 'groups',
    text: 'I am very appreciative of all the communities and teams that make web coding work and evolve. To date I have collaborated with: <strong> Udacity Course Developers, Mentors, Reviewers, Support, Students and Discussion forums.  Also Slack, Google+, and Stack Overflow.'
}, {
    title: 'Optimizations',
    icon: 'insert_charts',
    text: '<strong>Search Engine Optimization (SEO)</strong>, I had done on previous client sites. And in the recent Udacity/Google Website Optimization Course I learned about <strong>Critical Rendering Path (CRP), Document Object Model (DOM), Browser Object Model (BOM), Cascade Style Sheets Object Model (CSSOM), CSS Specificity, Asynchronous Events</strong>, how to optimize network loading, rendering paths, and animation jank.  <strong>Chrome Dev Tools</strong> was an awesome tool for this.'
}, {
    title: 'Design',
    icon: 'mode_edit',
    text: 'My <strong>Science Technology Engineering Math (STEM)</strong> and <strong>e-Learning</strong> skills involved me in all sorts of design and modeling. My recent Udacity course taught me a lot about modeling as well.  Here are some relevant skills: <strong>MVVM, MVC, Responsive, Material, Skeumorphic, Seperation of Concerns, 3D CAD, Photoshop, Storyboarding, Curriculum, Wire Frames, Schematics, BDD, TDD and Flow Charts. White Boards Rock!'
}, {
    title: 'Dev Ed',
    icon: 'account_circle',
    text: 'I love to learn. It is a continually ongoing process for me.  I just finished the <strong>Udacity FEND Nanodegree</strong>, and it was awesome.  Now I want to deepen some skills further from that course and move into the <strong>Fullstack Nanodegree</strong> to strengthen and extend my web dev skills.  My moonshot would be <strong>AI, Data Analysis, IOT, and Self Driving Car Nanodegrees</strong>, as it would leverage my <strong>Instrumentation Physics, Engineering, Biology, Research and Electronic Skills.</strong>'
}];

//  HTML styled content elements

var HTMLskillsIcon = '<h2 class="center light-blue-text"><i class="material-icons">%icon%</i></h2>',
    HTMLskillsTitle = '<h5 class="center">%title%</h5>',
    HTMLskillsText = '<p class="light">%text%</p>';

// Encapsulated Data Functions
// Data Added to DOM (index.html)

skills.display = function() {

    var len = skills.length;
    for (var i = 0; i < len; i++) {

        var formattedIcon = HTMLskillsIcon.replace("%icon%", skills[i].icon),
            formattedTitle = HTMLskillsTitle.replace("%title%", skills[i].title),
            formattedText = HTMLskillsText.replace("%text%", skills[i].text),
            formattedSkillEntry =
            '<div class="col s12 m4"><div class="icon-block">' +
            formattedIcon +
            formattedTitle +
            formattedText +
            '</div></div>';


        $(".skills-entries")
            .append(formattedSkillEntry);
    }
};




//
// BIO
//

// Data Objects

var bio = {
    name: 'George Fischer',
    title1: 'Creative Technologist',
    title2: 'Front End Web Developer',
    certificate: 'Udacity Certified',
    image: 'img/logos/me.jpg',
    description: 'Developing Websites with my Front End Web skills, STEM and eLearning background. A Creative Technologist with depth and artistic eye for knocking out projects.'
};


//  HTML styled content elements

var HTMLbioPic = '<img src="%data%" class="bio-pic" alt="Bio Photo">',
    HTMLbioTitle = '<figcaption class="white-text"> %data% </figcaption>',
    HTMLbioCertified = '<a class="black-text" href="img/certificates/udacity-fend-certificate.pdf">%data%</a>',
    HTMLbioName = '<p class="bio-name-text white-text"> %data% </p>',
    HTMLbioDescription = '<p class="bio-pad white-text"> %data% </p>';


// Encapsulated Data Functions
// Data Added to DOM (index.html)

bio.display = function() {

    var formattedImage = HTMLbioPic.replace("%data%", bio.image),
        formattedTitle1 = HTMLbioTitle.replace("%data%", bio.title1),
        formattedTitle2 = HTMLbioTitle.replace("%data%", bio.title2),
        formattedCertificate = HTMLbioCertified.replace("%data%", bio.certificate),
        formattedName = HTMLbioName.replace("%data%", bio.name),
        formattedDescription = HTMLbioDescription.replace("%data%", bio.description);

    $(".bio-name")
        .append(formattedName);

    $(".bio-fig")
        .append(formattedImage)
        .append(formattedTitle1)
        .append(formattedTitle2)
        .append(formattedCertificate);

    $(".bio-description")
        .append(formattedDescription);

};



//
// CONNECT
//

// Data Objects

var connect = [{
    title: 'LinkedIn',
    image: 'img/logos/linkedin.png',
    url: 'www.linkedin.com/in/georgefischer1'
}, {
    title: 'Udacity Profile',
    image: 'img/logos/udacity.png',
    url: 'https://profiles.udacity.com/u/george3'
}, {
    title: 'Twitter',
    image: 'img/logos/twitter.png',
    url: 'https://twitter.com/geosynchronous'
}, {
    title: 'Google+',
    image: 'img/logos/google-plus.png',
    url: 'https://plus.google.com/117867255083823434092'
}, {
    title: 'Slack',
    image: 'img/logos/slack.png',
    url: 'https://fend.slack.com/team/geosynchronous'
}, {
    title: 'Github Repository',
    image: 'img/logos/github.png',
    url: 'https://github.com/Geosynchronous'
}, {
    title: 'Email',
    image: 'img/logos/geo.png',
    url: 'mailto:geosynchronous@mac.com?subject= George Fischer: Your Github Splash Page'
}];


// <ul class"connectChips">
//   <li>
//     <div class="chip">
//       <img src="img/logos/linkedin.png" alt="LinkedIn Logo">
//       <a class="black-text" href="https://www.linkedin.com/in/georgefischer1">LinkedIn</a>
//     </div>
//   </li>


//  HTML styled content elements

var HTMLconnectPic = '<img src="%img%" alt="%title% Logo">',
    HTMLconnectUrl = '<a class="black-text" href="%url%">%title%</a>';

// Encapsulated Data Functions
// Data Added to DOM (index.html)


connect.display = function() {

    var len = connect.length;
    for (var i = 0; i < len; i++) {

        var formattedImage1 = HTMLconnectPic.replace("%img%", connect[i].image);
        var formattedImage2 = formattedImage1.replace("%title%", connect[i].title);

        var formattedUrl1 = HTMLconnectUrl.replace("%url%", connect[i].url);
        var formattedUrl2 = formattedUrl1.replace("%title%", connect[i].title);

        var formattedChip = '<li><div class="chip">' + formattedImage2 + formattedUrl2 + '</div></li>';

        $(".connectChips")
            .append(formattedChip);
    }
};
