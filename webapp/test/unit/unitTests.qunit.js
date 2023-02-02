/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zui5hr0007_nut/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
