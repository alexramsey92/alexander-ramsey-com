var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "template.html",
    controller : "templateCtrl"
  })
});

app.controller('templateCtrl', function($scope){
  $scope.colors = _.shuffle([
    "#ec008c",
    "#e43e22",
    "#a1ce5e",
    "#1a86a8",
    "#002b54",
    "#985396",
    "#391242",
    "#572c29",
    "#b38e50"
  ]);

  $scope.getRandomColor = function () {
    $scope.bgColor = $scope.colors[Math.floor(Math.random() * $scope.colors.length)];
  };

  $scope.viewCard = function (buttonUrl) {
    console.log("clicked " + buttonUrl);
    // make closable modal popover
    // insert buttonUrl to doc display code
  }

  $scope.cards = _.shuffle([
    {
      title: "Resume",
      description: "My latest comprehensive skills and experience resume.",
      buttonText: "Open PDF",
      buttonUrl: "www.alexanderramsey.com/pdf",
      priority: 1
    },
    {
      title: "The Future of Autonomous Vehicles",
      description: "Graduate level trends discussion geared toward autnomous vehicle technology.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 2
    },
    {
      title: "Next Generation (5G) Cellular Networks",
      description: "Graduate level trends discussion of fifth generation cellular technology.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 2
    },
    {
      title: "Application User Interface Analysis and Redesign",
      description: "Graduate level analysis of Adobe Illustrator graphic design software including recommendations for usability.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 3
    },
    {
      title: "AngularJS Data Grid UIX Study",
      description: "Graduate level user interface analysis, implementing a data grid view that supports CRUD operations.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 4
    },
    {
      title: "Enterprise Architecture and The TOGAF Framework",
      description: "A presentation on implementing the TOGAF framework to establish Enterprise Architecture for a Large Enterprise Corporation",
      buttonText: "View",
      buttonUrl: "test",
      priority: 4
    },
    {
      title: "Slack Technologies Software Requirements Specification Part One: Basic Requirements",
      description: "Graduate level SRS documentation centered around core requirements of the popular Slack messaging utility.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 5
    },
    {
      title: "Slack Technologies Software Requirements Specification Part Two: IEEE 830 Conformant Format",
      description: "Graduate level IEEE 830 conforming SRS documentation created around the extended requirements of the popular Slack messaging utility.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 5
    }
  ]);

  $scope.cardsSdlc = [
    {
      title: "Waterfall Software Development Methodology",
      description: "A short informative paper on the Waterfall SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Rapid Application (RAD) Software Development Methodology",
      description: "A short informative paper on the RAD SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Scrum Software Development Methodology",
      description: "A short informative paper on the SCRUM SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Extreme Programming Development Methodology",
      description: "A short informative paper on the XP SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Unified Process Development Methodology",
      description: "A short informative paper on the UP SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Evo Development Methodology",
      description: "A short informative paper on the Evo Project Management SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Lean Development Methodology",
      description: "A short informative paper on the Lean SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Test Driven Development Methodology",
      description: "A short informative paper on Test Driven SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Feature Driven Development Methodology",
      description: "A short informative paper on Feature Driven SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Crystal Clear Development Methodology",
      description: "A short informative paper on the Crystal Clear SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Rational Unified Process Development Methodology",
      description: "A short informative paper on the RUP SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    },
    {
      title: "Dynamic Systems Development Methodology",
      description: "A short informative paper on the DSDM SDM.",
      buttonText: "View",
      buttonUrl: "test",
      priority: 1
    }
  ];

});
