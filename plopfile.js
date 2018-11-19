'use strict';
const path = require('path');

module.exports = function (plop) {
	// Plugin generator
	plop.setGenerator('Create a plugin', {
		description: 'Lets you create a Joomla plugin',
		prompts: [
			{
				type: 'input',
				name: 'pluginType',
				default: 'system',
				message: 'What is your plugin type (eg: content / system / user) ?',
				validate: function (value) {
					if ((/.+/).test(value)) { return true; }
					return 'plugin type is required';
				}
			},
			{
				type: 'input',
				name: 'pluginName',
				message: 'What is your plugin name?',
				validate: function (value) {
					if ((/.+/).test(value)) { return true; }
					return 'plugin name is required';
				}
			},
			{
				type: 'input',
				name: 'version',
				message: 'What is your plugin version?',
				default: '1.0.0',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'creationDate',
				message: 'What is your plugin creation date?',
				default: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'author',
				message: 'What is your plugin author name?',
				default: 'Techjomla',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'authorEmail',
				message: 'What is your plugin author email?',
				default: 'contact@techjoomla.com',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'authorUrl',
				message: 'What is your plugin author Url?',
				default: 'https://techjoomla.com',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'copyright',
				message: 'What is your copyright?',
				default: 'Copyright (C) 2009 - 2018 Techjoomla. All rights reserved.',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'licence',
				message: 'What is your plugin licence?',
				default: 'http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
		],

		actions: function(data) {
			var actions = [
				{
					type: 'add',
					path: 'output/plugins/{{ lowerCase pluginName }}/{{ lowerCase pluginName }}.php',
					templateFile: 'templates/plugin/plugin.php',
					abortOnFail: true
				},
				{
					type: 'add',
					path: 'output/plugins/{{ lowerCase pluginName }}/{{ lowerCase pluginName }}.xml',
					templateFile: 'templates/plugin/plugin.xml',
					abortOnFail: true
				},
				{
					type: 'add',
					path: 'output/plugins/{{ lowerCase pluginName }}/language/en-GB/en-GB.plg_{{ lowerCase pluginType }}_{{ lowerCase pluginName }}.ini',
					templateFile: 'templates/plugin/language/en-GB/en-GB.plg_plugintype_pluginname.ini',
					abortOnFail: true
				},
				{
					type: 'add',
					path: 'output/plugins/{{ lowerCase pluginName }}/language/en-GB/en-GB.plg_{{ lowerCase pluginType }}_{{ lowerCase pluginName }}.sys.ini',
					templateFile: 'templates/plugin/language/en-GB/en-GB.plg_plugintype_pluginname.sys.ini',
					abortOnFail: true
				}
			];

			return actions;
		}
	});

	// Module generator
	plop.setGenerator('Create a module', {
		description: 'Lets you create a Joomla module',
		prompts: [
			{
				type: 'input',
				name: 'moduleName',
				message: 'What is your module name?',
				validate: function (value) {
					if ((/.+/).test(value)) { return true; }
					return 'module name is required';
				}
			},
			{
				type: 'input',
				name: 'version',
				message: 'What is your module version?',
				default: '1.0.0',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'creationDate',
				message: "What is your module's creation date?",
				default: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'author',
				message: 'What is your module author name?',
				default: 'Techjomla',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'authorEmail',
				message: 'What is your module author email?',
				default: 'contact@techjoomla.com',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'authorUrl',
				message: 'What is your module author Url?',
				default: 'https://techjoomla.com',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'copyright',
				message: 'What is your copyright?',
				default: 'Copyright (C) 2009 - 2018 Techjoomla. All rights reserved.',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
			{
				type: 'input',
				name: 'licence',
				message: 'What is your plugin licence?',
				default: 'http://www.gnu.org/licenses/gpl-2.0.html GNU/GPL',
				validate: function (value) {
					if ((/.+/).test(value)) {
						return true;
					}
				}
			},
		],

		actions: function(data) {
			var actions = [
				{
					type: 'add',
					path: 'output/modules/{{ lowerCase moduleName }}/mod_{{ lowerCase moduleName }}.php',
					templateFile: 'templates/module/mod_modulename.php',
					abortOnFail: true
				},
				{
					type: 'add',
					path: 'output/modules/{{ lowerCase moduleName }}/mod_{{ lowerCase moduleName }}.xml',
					templateFile: 'templates/module/mod_modulename.xml',
					abortOnFail: true
				},
				{
					type: 'add',
					path: 'output/modules/{{ lowerCase moduleName }}/helper.php',
					templateFile: 'templates/module/helper.php',
					abortOnFail: true
				},
				{
					type: 'add',
					path: 'output/modules/{{ lowerCase moduleName }}/tmpl/default.php',
					templateFile: 'templates/module/tmpl/default.php',
					abortOnFail: true
				},
				{
					type: 'add',
					path: 'output/modules/{{ lowerCase moduleName }}/language/en-GB/en-GB.mod_{{ lowerCase moduleName }}.ini',
					templateFile: 'templates/module/language/en-GB/en-GB.mod_modulename.ini',
					abortOnFail: true
				},
				{
					type: 'add',
					path: 'output/modules/{{ lowerCase moduleName }}/language/en-GB/en-GB.mod_{{ lowerCase moduleName }}.sys.ini',
					templateFile: 'templates/module/language/en-GB/en-GB.mod_modulename.sys.ini',
					abortOnFail: true
				}
			];

			return actions;
		}
	});
};
