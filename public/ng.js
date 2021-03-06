var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "template.html",
    controller : "templateCtrl"
  })
});

app.controller('templateCtrl', function($scope, $sce){

  $scope.cardColors = ([
    "#e43e22",
    "#789A46",
    "#1a86a8",
    "#002b54",
    "#985396",
    "#391242",
    "#572c29",
    "#b38e50"
  ]);

  // $scope.getRandomColor = function () {
  //   // some bullshit I stole from stackoverflow
  //   $scope.bgColor = $scope.cardColors[Math.floor(Math.random() * $scope.cardColors.length)];
  // };

  // set as trusted url in sce module
  // https://docs.google.com/viewer?embedded=true&url=

  $scope.viewCard = function (card) {
    // action method for button click, not necessary but triggerable via ng click. may remove for now
    //console.log("clicked " + card.buttonUrl);
    // make closable modal popover
    // insert buttonUrl to doc display code
  };

  var baseUrl = location.origin;
  //console.log(baseUrl);
  var docUrl = "https://docs.google.com/viewer?embedded=true&url=" + baseUrl;
  //console.log(docUrl);
  $scope.cards = _.shuffle([
    {
      id: 1,
      title: "Resume",
      description: "My latest comprehensive skills and experience resume.",
      buttonText: "Read My Resume",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Alexander-Ramsey-Resume.docx"),
      priority: 1
    },
    {
      id: 2,
      title: "The Future of Autonomous Vehicles",
      description: "Trends discussion geared toward Autonomous vehicle technology.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Autonomous_Vehicles.docx"),
      priority: 20
    },
    {
      id: 3,
      title: "Next Generation (5G) Cellular Networks",
      description: "Trends discussion of fifth generation cellular technology.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_5G_Trends.docx"),
      priority: 20
    },
    {
      id: 4,
      title: "Application User Interface Analysis and Redesign",
      description: "Analysis of Adobe Illustrator graphic design software including recommendations for usability.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Adobe_Illustrator_UIX_Analysis.docx"),
      priority: 3
    },
    {
      id: 5,
      title: "AngularJS Data Grid UIX Study",
      description: "User interface concept, analysis, and implementation of a data grid view that supports CRUD operations.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Angular_UI_Grid.docx"),
      priority: 4
    },
    {
      id: 6,
      title: "Portfolio Management Solution: IEEE 830 Conformant Software Requirements Specification",
      description: "SRS documentation centered around core requirements of theoretical Portfolio Management Solution. Includes GANTT burndown and cost estimation for work completion.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_SRS_PMS.docx"),
      priority: 5
    },
    {
      id: 7,
      title: "Slack Technologies Software Requirements Specification Part One: Basic Requirements",
      description: "SRS documentation centered around core requirements of the popular Slack messaging utility.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Slack_Part_One.docx"),
      priority: 6
    },
    {
      id: 8,
      title: "Slack Technologies Software Requirements Specification Part Two: IEEE 830 Conformant Format",
      description: "IEEE 830 conforming SRS documentation created around the extended requirements of the popular Slack messaging utility.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Slack_Part_Two_IEEE830.docx"),
      priority: 7
    },
    {
      id: 9,
      title: "Contextual Inquiry of Adobe Illustrator Graphic Design Software",
      description: "A follow up to the application user interface analysis of Adobe Illustrator. Contextual inquiry of participants testing their artistic ability in the application.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Contextual_Inquiry_Illustrator.docx"),
      priority: 4
    },
    {
      id: 10,
      title: "Object Oriented Design and Implementation in Java",
      description: "Semester long Graduate project exploring the use of Object Oriented and Aspect Oriented design using Java.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey-SoftwareDetailDesignDocument-SWEN646.docx"),
      priority: 4
    },
    {
      id: 11,
      title: "Website Usability Test Plan and Results Documentation",
      description: "Graduate coursework project exploring the use of Usability Testing methods on a popular Toy company website.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_SWEN647_P3_A9.docx"),
      priority: 5
    },
    {
      id: 12,
      title: "JUnit Test Plan and Results Documentation",
      description: "Java environment with JUnit.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_SWEN647_P1_A4.docx"),
      priority: 5
    },
    {
      id: 13,
      title: "Oracle Database Use Case and Design Project",
      description: "Scope of work, Entity Relationship Diagram, Data Definition Language, and Data Manipulation Language for an Oracle database designed to support data logging requirements for an IP based phone server.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/DBST 651 Ramsey Lab Project Final.docx"),
      priority: 6
    },
    {
      id: 14,
      title: "Object Oriented & Object Relational Mapping Databases",
      description: "Exploration of the Impedance Mismatch and Object oriented relational mapping (ORM) systems.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/DBST 651 Ramsey Term Paper.docx"),
      priority: 7
    },
    {
      id: 15,
      title: "Large Scale Application I.T. Infrastructure Design and SOW",
      description: "A Group Project which identifies the hardware and software I.T. infrastructure required of a large scale application hosting environment for a public university.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/GroupProject_Team5_PP_v11.pptx"),
      priority: 7
    },
    {
      id: 16,
      title: "The Influence of Emotional Intelligence on Project Outcomes",
      description: "Literature Review of Emotional Intelligence (EI) which addresses the meaning, impact, and relationship this concept has on I.T. project environments.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey-Emotional-Intelligence.docx"),
      priority: 7
    }
  ]);

  $scope.cardsVideo = [
    {
      id: 20,
      title: "Impact China 2013: Dreams are meant to be fulfilled!",
      description: "Video detailing my undergraduate study abroad experience in China with The College of Business.",
      buttonText: "Watch Video",
      buttonUrl: $sce.trustAsResourceUrl("https://www.youtube.com/embed/_lVnquxUK2c"),
      priority: 1
    },
    {
      id: 21,
      title: "4k For Cancer Team Portland: Songs of the 4k",
      description: "Candid video of my teammates from a 2012 cross-country charity bike ride for The Ulman Cancer Fund. Features our favorite music.",
      buttonText: "Watch Video",
      buttonUrl: $sce.trustAsResourceUrl("https://www.youtube.com/embed/RHrkHfzZihI"),
      priority: 2
    },
    {
      id: 22,
      title: "Experiencing Leadership Learning Community at Frostburg State University",
      description: "One University. A World of Experiences. This video aims to capture the excitement surrounding Frostburg's leadership learning communities.",
      buttonText: "Watch Video",
      buttonUrl: $sce.trustAsResourceUrl("https://www.youtube.com/embed/S8ukBz1SQbA"),
      priority: 2
    }
  ];

  $scope.cardsDesign = [
    {
      id: 52,
      title: "Website Design for Local Non-Profit",
      description: "Maryland Neighborly Networks, Inc. needed a simple website to unify communications and access to essential I.T. functions.",
      buttonText: "View",
      imgUrl: location.origin + "/img/mnn-desktop.PNG",
      priority: 1
    },
    {
      id: 53,
      title: "Website Design and Internet Marketing for Local Business",
      description: "RTS Environmental Services, Inc. needed to boost sales leads through internet marketing and targeted advertising.",
      imgUrl: location.origin + "/img/rts-desktop.PNG",
      priority: 1
    },
    {
      id: 54,
      title: "Website Design and Internet Marketing for Local Business",
      description: "10 Clarke Place wanted to capture and expand increased marketshare through internet marketing with an easy to maintain website.",
      imgUrl: location.origin + "/img/Screenshot_2015-01-21-15-30-33.png",
      priority: 1
    },
    {
      id: 55,
      title: "Custom Application Development for Financial Services Company",
      description: "An Investment Advisory firm wanted to create an asset allocation utility to guide clientele through the sign up process for a newly created Exchange-Traded-Fund product. A working prototype was developed and delivered to the client.",
      imgUrl: location.origin + "/img/aim-app.png",
      priority: 1
    },
    {
      id: 56,
      title: "Logo Design for IBM Delivery Center",
      description: "",
      imgUrl: location.origin + "/img/abl-cic-logo02_Artboard 17.png",
      priority: 1
    },
    {
      id: 57,
      title: "Logo Design for Non-Profit",
      description: "",
      imgUrl: location.origin + "/img/Full Citizenship of Maryland, Inc_concept five.png",
      priority: 1
    },
    {
      id: 58,
      title: "Logo Design for Local Business Conference",
      description: "",
      imgUrl: location.origin + "/img/innovateintegratemotivate.jpg"
    }
  ];

  $scope.cardsSdlc = [
    {
      id: 55,
      title: "Waterfall Software Development Methodology",
      description: "A short informative paper on the Waterfall SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-01_Waterfall.docx"),
      priority: 1
    },
    {
      id: 56,
      title: "Rapid Application (RAD) Software Development Methodology",
      description: "A short informative paper on the RAD SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-02_RAD.docx"),
      priority: 1
    },
    {
      id: 57,
      title: "Scrum Software Development Methodology",
      description: "A short informative paper on the SCRUM SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-03_Scrum.docx"),
      priority: 1
    },
    {
      id: 58,
      title: "Extreme Programming Development Methodology",
      description: "A short informative paper on the XP SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-04_XP.docx"),
      priority: 1
    },
    {
      id: 59,
      title: "Unified Process Development Methodology",
      description: "A short informative paper on the UP SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-05_UP.docx"),
      priority: 1
    },
    {
      id: 60,
      title: "Evo Development Methodology",
      description: "A short informative paper on the Evo Project Management SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-06_PMEVO.docx"),
      priority: 1
    },
    {
      id: 61,
      title: "Lean Development Methodology",
      description: "A short informative paper on the Lean SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-07_Lean.docx"),
      priority: 1
    },
    {
      id: 62,
      title: "Test Driven Development Methodology",
      description: "A short informative paper on Test Driven SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-08_TDD.docx"),
      priority: 1
    },
    {
      id: 63,
      title: "Feature Driven Development Methodology",
      description: "A short informative paper on Feature Driven SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-09_FDD.docx"),
      priority: 1
    },
    {
      id: 64,
      title: "Crystal Clear Development Methodology",
      description: "A short informative paper on the Crystal Clear SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-10_CrystalClear.docx"),
      priority: 1
    },
    {
      id: 65,
      title: "Rational Unified Process Development Methodology",
      description: "A short informative paper on the RUP SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-11_UPII.docx"),
      priority: 1
    },
    {
      id: 66,
      title: "Dynamic Systems Development Methodology",
      description: "A short informative paper on the DSDM SDM.",
      buttonText: "View",
      buttonUrl: $sce.trustAsResourceUrl(docUrl + "/documents/Ramsey_Week-12_DSDM.docx"),
      priority: 1
    }
  ];

});
