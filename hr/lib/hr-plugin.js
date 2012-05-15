/*global documents: true define: true */
/*!
 * Aloha Editor
 * Author & Copyright (c) 2011 Gentics Software GmbH
 * aloha-sales@gentics.com
 * Licensed under the terms of http://www.aloha-editor.com/license.html
 *
 * Author : Aurélien MANCA - www.amanca.fr
 */
define([
	'aloha/jquery',
	'aloha/plugin',
	'i18n!hr/nls/i18n',
	'i18n!aloha/nls/i18n',
	'aloha/floatingmenu',
	'css!hr/css/hr.css',
],
function (aQuery, Plugin, i18n, i18nCore, FloatingMenu) {
	'use strict';
	var jQuery = aQuery;
	var $ = aQuery;
	var GENTICS = window.GENTICS;
	var Aloha = window.Aloha;

	return Plugin.create('hr', {
		/**
		 * Add the button into the Floating menu
		 */
		init: function () {
			var
				that = this,
				tabInsert = i18nCore.t('floatingmenu.tab.insert')
			;

			this.insertHrButton = new Aloha.ui.Button({
				'name' : 'inserthr',
				'iconClass': 'aloha-button aloha-hr-insert',
				'size' : 'small',
				'onclick' : function () {
					that.insertHr();
				},
				'tooltip' : i18n.t('button.addhr.tooltip'),
				'toggle' : false
			});

			FloatingMenu.addButton(
				'Aloha.continuoustext',
				this.insertHrButton,
				tabInsert,
				1
			);
		},

		insertHr: function () {
			var
				range = Aloha.Selection.getRangeObject(),
				config = this.getEditableConfig(Aloha.activeEditable.obj),
				tag = jQuery('<hr />');
			;

			GENTICS.Utils.Dom.insertIntoDOM(tag, range, jQuery(Aloha.activeEditable.obj));
		},
	});
});