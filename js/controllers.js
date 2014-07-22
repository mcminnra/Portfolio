'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ProjectController', function() {
  	this.projects = projects;
  });

var projects = [
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
		'sourcecode' : '*Source code not publicly available, but can be produced on request',
		'sourcecodelink' : ''
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
		'sourcecode' : '*Source code not publicly available, but can be produced on request',
		'sourcecodelink' : ''
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
		'sourcecode' : 'GradeCalculatorIU (GitHub)',
		'sourcecodelink' : 'https://github.com/rmcminn/GradeCalculatorIU'
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
			}
		],
		'description' : 'My portfolio website that I use to display my projects and other assorted things.',
		'sourcecode' : 'Portfolio (GitHub)',
		'sourcecodelink' : 'https://www.github.com/rmcminn/Portfolio'
	},
	{
		'classtags' : 'PROJECT JAVA PERSONAL',
		"name" : "BitCoinInvestor",
		"imgsrc" : "img/bitcoininvestor.png",
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
		'description' : 'A simple program used to track bitcoin prices and saves them to a .csv',
		'sourcecode' : 'BitCoinInvestor (GitHub)',
		'sourcecodelink' : 'https://www.github.com/rmcminn/BitCoinInvestor'
	},
	{
		'classtags' : 'PROJECT CSHARP PERSONAL',
		"name" : "VideoGameDatabaseManager",
		"imgsrc" : "img/videogamedatabasemanager.png",
		'type' : 'Personal',
		'languages' : [
			{
				'name' : 'C#'
			}
		],
		'frameworks' : [
			{
				'name' : '.NET'
			}
		],
		'description' : 'A simple program used to manipulate an access database of video games',
		'sourcecode' : 'VideoGameDatabaseManager (GitHub)',
		'sourcecodelink' : 'https://www.github.com/rmcminn/VideoGameDatabaseManager'
	}
];