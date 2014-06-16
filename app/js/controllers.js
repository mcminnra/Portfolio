'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('SkillController', function() {
  	this.skills = skills
  })

var skills = [
	{
		'name' : 'Java',
		'knowledge': '80',
		'frameworks' : [],
		'tools' : [
			{
				'name':'Eclipse'
			}
		]
	},
	{
		'name' : 'HTML_CSS',
		'knowledge': '70',
		'frameworks' : [
			{
				'name':'Foundation 5'
			},
			{
				'name':'Hover.css'
			}
		],
		'tools' : []
	},
	{
		'name' : 'JavaScript',
		'knowledge': '70',
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
				'name':'Angular JS'
			}
		],
		'tools' : []
	},
	{
		'name' : 'C_Sharp',
		'knowledge': '50',
		'frameworks' : [
			{
				'name':'.NET'
			}
		],
		'tools' : [
			{
				'name':'Visual Studio'
			}
		]
	},
	{
		'name' : 'Python',
		'knowledge': '20',
		'frameworks' : [],
		'tools' : []
	},
	{
		'name' : 'Objective_C',
		'knowledge': '30',
		'frameworks' : [
			{
				'name':'iOS'
			}
		],
		'tools' : [
			{
				'name':'XCode'
			}
		]
	}
];