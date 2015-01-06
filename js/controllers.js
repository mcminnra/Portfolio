'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngSanitize'])
  .controller('ProjectController', function() {
  	this.projects = projects;
  });

var projects = [
	{
		'classtags' : 'PROJECT HTML5CSS JAVASCRIPT PERSONAL',
		"name" : "FitCalibrate",
		"imgsrc" : "img/fitcalibrate.png",
		"type" : 'Personal',
		'languages' : [
			{
				'name':'HTML5'
			},
			{
				'name':'CSS'
			},
			{
				'name':'JavaScript'
			}
		],
		'frameworks' : [
			{
				'name':'Node.js'
			},
			{
				'name':'Jade'
			},
			{
				'name':'Express.js'
			},
			{
				'name':'D3.js'
			},
			{
				'name':'BootStrap 3'
			},
			{
				'name':'Mongo DB'
			}
		],
		'description' : 'Developed a Node application using the MEN stack (Mongo DB, Express.js, Node.js) that is designed to track your fitness and display it through graphs. I utilize RedHat\'s OpenShift Cloud to deploy my application.',
		'sourcecode' : '<a href="http://fitcalibrate-mcminnra.rhcloud.com/#">FitCalibrate</a>'
	},
	{
		'classtags' : 'PROJECT HTML5CSS JAVASCRIPT PROFESSIONAL',
		"name" : "DraftOnce",
		"imgsrc" : "img/do_logo.png",
		"type" : 'Professional',
		'languages' : [
			{
				'name':'HTML5'
			},
			{
				'name':'CSS'
			},
			{
				'name':'JavaScript'
			}
		],
		'frameworks' : [
			{
				'name':'Sencha Ext.js 5'
			}
		],
		'description' : 'Worked on Blue Burro\'s DraftOnce updating the Front-End components. I was part of a team that was tasked with upgrading the application from Ext.js 3 to Ext.js 5.',
		'sourcecode' : '<a href="http://www.draftonce.com">www.draftonce.com</a>'
	},
    {
        'classtags' : 'PROJECT HTML5CSS JAVASCRIPT PROFESSIONAL',
        "name" : "www.beetownhive.com - Hive Nightclub",
        "imgsrc" : "img/hive.png",
        "type" : 'Professional',
        'languages' : [
            {
                'name':'HTML5'
            },
            {
                'name':'CSS'
            },
            {
                'name':'JavaScript'
            }
        ],
        'frameworks' : [
            {
                'name':'JQuery'
            },
            {
                'name':'Bootstrap 3'
            },
            {
                'name':'Pace.JS'
            },
            {
                'name':'Blur.JS'
            },
            {
                'name':'Countdown.JS'
            }
        ],
        'description' : 'Did some pro-bono web development and technical consulting for a new startup nightclub in Bloomington, Indiana called Hive.  I used Bootstrap and JQuery to create a sleek and modern launch page for their club.',
        'sourcecode' : '<a href="http://www.beetownhive.com">www.beetownhive.com</a>'
    },
	{
		'classtags' : 'PROJECT HTML5CSS JAVASCRIPT CSHARP PROFESSIONAL',
		"name" : "IDEM Field Notes - HTML5",
		"imgsrc" : "img/fieldnoteshtml5.png",
		"type" : 'Professional',
		'languages' : [
			{
				'name':'HTML5'
			},
			{
				'name':'CSS'
			},
			{
				'name':'JavaScript'
			},
			{
				'name':'C#'
			}
		],
		'frameworks' : [
			{
				'name':'JQuery'
			},
			{
				'name':'JQuery UI'
			},
			{
				'name':'JQuery Mobile'
			},
			{
				'name':'ASP.NET'
			}
		],
		'description' : 'An HTML5 web application developed for the Indiana Department of Environmental Management that allowed inspectors to take detailed notes regarding site inspections. The application uses ASP.NET for the business layer.',
		'sourcecode' : '<i>*Source code not publicly available, but can be produced on request</i>'
	},
	{
		'classtags' : 'PROJECT OBJECTIVEC PROFESSIONAL',
		"name" : "IDEM Field Notes - iOS",
		"imgsrc" : "img/fieldnotesios.png",
		'type' : 'Professional',
		'languages' : [
			{
				'name':'Objective C'
			}
		],
		'frameworks' : [
			{
				'name':'iOS'
			}
		],
		'description' : 'An iOS version of the original HTML5 Field Notes application. The application uses the same ASP.NET web service for the business layer.',
		'sourcecode' : '<i>*Source code not publicly available, but can be produced on request</i>'
	},
	{
		'classtags' : 'PROJECT JAVA PERSONAL',
		"name" : "Indiana University GPA Calculator",
		"imgsrc" : "img/gradecalculatoriu.jpg",
		'type' : 'Personal',
		'languages' : [
			{
				'name' : 'Java'
			}
		],
		'frameworks' : [
			{
				'name' : 'Swing'
			}
		],
		'description' : 'A simple Java Application that calculates GPA according to IU\'s standards.',
		'sourcecode' : '<a href="https://www.github.com/rmcminn/GradeCalculatorIU"><i class="fa fa-github"></i> GradeCalculatorIU</a>'
	},
	{
		'classtags' : 'PROJECT HTML5CSS JAVASCRIPT PERSONAL',
		"name" : "Portfolio",
		"imgsrc" : "img/portfolio.png",
		'type' : 'Personal',
		'languages' : [
			{
				'name' : 'HTML5'
			},
			{
				'name' : 'CSS'
			},
			{
				'name' : 'JavaScript'
			}
		],
		'frameworks' : [
			{
				'name' : 'BootStrap'
			},
			{
				'name' : 'JQuery'
			},
			{
				'name' : 'NodeJS'
			},
			{
				'name' : 'AngularJS'
			},
      {
        'name' : 'Lightbox'
      }
		],
		'description' : 'My portfolio website that I use to display my projects and other assorted things.',
		'sourcecode' : '<a href="https://www.github.com/rmcminn/Portfolio}"><i class="fa fa-github"></i> Portfolio</a>'
	}
];
