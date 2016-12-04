"use strict";

// Model.js by George Fischer
// Fall 2016

// Data Model Collections for;
// 		Projects
//		Skills
//		Connect


// Projects
// TODO - Having trouble dealing with multiple and long paragraphs
var projects = [{
        title: 'Map',
        image: 'img/projects/map.png',
        imageAlt: 'Map Project Image',
        demo: 'href="http://geosynchronous.us/RoundRiver/',
        code: 'https://github.com/Geosynchronous/P7-Neighborhood-Map',
        textInfoList: 'HTML, CSS, JAVASCRIPT DESIGN PATTERNS, DOM, AJAX, GOOGLE MAPS API, OPEN WEATHER MAP API, MVVM, KNOCKOUT, JQUERY',
        textInfoDescription: ''
        }];


// Skills

var skills = [{
        title: 'HTML CSS JS',
        icon: 'flash_on',
        text: 'This coding ecosystem forms the foundation for web dev, and unlocks access to all other development possibilities.  I am comfortable using these languages, and confident when searching out answers that I need.  I look forward to a continual deeping of my knowledge here.'
    },{
        title: 'Frameworks',
        icon: 'account_balance',
        text: 'By utilizing frameworks, I have gained an appreciation of how much more productive and dynamic my web development work can be. I plan on spending more time learning new frameworks. So far I have used: <strong>Bootstrap, jQuery, Knockout, Materialize, and Jasmine.'
    },{
        title: 'APIs',
        icon: 'settings',
        text: 'Application Program Interfaces allow websites to bring in data in all types of forms from server providers. This allows websites to be dynamic with incoming information. To date I have used these APIs: <strong>Google Maps, Google Search, Google Places, Open Weather Map, Wikipedia, and The New York Times.</strong>'
    },{
        title: 'Dev Tools',
        icon: 'build',
        text: 'These tools really help me solve problems, manage tasks, and dig deep into the behaviour of the code.  To date I have used: <strong>Chrome Dev Tools, Google Analytics, Sublime Text Editor, CLI Terminal, Linters, Beautifiers, Minifiers, Graphic Compression, Validators, Jasmine Testing, Bower, GULP, Git, GitHub, NodeJS, NPM, and Bower.</strong>'
    },{
        title: 'Testing',
        icon: 'assignment_turned_in',
        text: 'Test Driven Design (TDD) and Behaviour Driven Design (BDD) I have recently implemeted with the FeedReader Testing project using <strong>JasmineJS Testing Framework.</strong> It really helps in the process of writing better code.'
    },{
        title: 'Communities',
        icon: 'groups',
        text: 'I am very appreciative of all the communities and teams that make web coding work and evolve. To date I have collaborated with: <strong> Udacity Course Developers, Mentors, Reviewers, Support, Students and Discussion forums.  Also Slack, Google+, and Stack Overflow.'
    },{
        title: 'Optimizations',
        icon: 'insert_charts',
        text: '<strong>Search Engine Optimization (SEO)</strong>, I had done on previous client sites. And in the recent Udacity/Google Website Optimization Course I learned about <strong>Critical Rendering Path (CRP), Document Object Model (DOM), Browser Object Model (BOM), Cascade Style Sheets Object Model (CSSOM), CSS Specificity, Asynchronous Events</strong>, how to optimize network loading, rendering paths, and animation jank.  <strong>Chrome Dev Tools</strong> was an awesome tool for this.'
    },{
        title: 'Design',
        icon: 'mode_edit',
        text: 'My <strong>Science Technology Engineering Math (STEM)</strong> and <strong>e-Learning</strong> skills involved me in all sorts of design and modeling. My recent Udacity course taught me a lot about modeling as well.  Here are some relevant skills: <strong>MVVM, MVC, Responsive, Material, Skeumorphic, Seperation of Concerns, 3D CAD, Photoshop, Storyboarding, Curriculum, Wire Frames, Schematics, BDD, TDD and Flow Charts. White Boards Rock!'
    },{
        title: 'Dev Ed',
        icon: 'account_circle',
        text: 'I love to learn. It is a continually ongoing process for me.  I just finished the <strong>Udacity FEND Nanodegree</strong>, and it was awesome.  Now I want to deepen some skills further from that course and move into the <strong>Fullstack Nanodegree</strong> to strengthen and extend my web dev skills.  My moonshot would be <strong>AI, Data Analysis, IOT, and Self Driving Car Nanodegrees</strong>, as it would leverage my <strong>Instrumentation Physics and Electronic Skills.</strong>'
    }];


// BIO

var bio = [{
        name: 'George Fischer',
        image: 'img/logos/me.jpg',
        description: 'Developing Websites with my Front End Web skills, e-Learning and STEM background. An adaptive developer with depth and artistic eye for knocking out pages.'
    }];

 // CONNECT

var connect = [{
        title: 'LinkedIn',
        image: 'img/logos/linkedin.png',
        url: 'www.linkedin.com/in/georgefischer1'
 	},{
        title: 'Udacity Profile',
        image: 'img/logos/udacity.png',
        url: 'https://profiles.udacity.com/u/george3'
    },{
        title: 'Twitter',
        image: 'img/logos/twitter.png',
        url: 'https://twitter.com/geosynchronous'
    },{
        title: 'Google+',
        image: 'img/logos/google-plus.png',
        url: 'https://plus.google.com/117867255083823434092'
    },{
        title: 'Slack',
        image: 'img/logos/slack.png',
        url: 'https://fend.slack.com/team/geosynchronous'
    },{
        title: 'Github Repository',
        image: 'img/logos/github.png',
        url: 'https://github.com/Geosynchronous'
    },{
        title: 'Email',
        image: 'img/logos/geo.png',
        url: 'mailto:geosynchronous@mac.com?subject= George Fischer: Your Github Splash Page'
    }];
