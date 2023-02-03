sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageBox',
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, JSONModel) {
        "use strict";

        return Controller.extend("zui5hr0007nut.controller.View1", {
            onInit: function () {
                var oData = {};
                var oModel = new JSONModel(oData);

                this.getView().setModel(oModel);
    
            },
            onPress: function(){
                var oService = this.getOwnerComponent().getModel();

                oService.read("/CompensationSet()", {
                    success: function (oData, response) {

                        this.getView().getModel().setProperty("/Compensation", oData.results[0]);

                    }.bind(this),
                    error: function (oError) {
                        
                    }.bind(this)
                });
            }
        });
    });