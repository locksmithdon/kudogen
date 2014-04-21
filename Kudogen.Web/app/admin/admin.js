﻿(function () {
    'use strict';
    var controllerId = 'admin';
    angular.module('app').controller(controllerId, ['common', 'datacontext', admin]);

    function admin(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Admin';
        vm.teamMembers = [];

        activate();

        function activate() {
            common.activateController([getTeamMembers()], controllerId)
                .then(function () { log('Activated Admin View'); });
        }

        function getTeamMembers() {
            return datacontext.getTeamMembers().then(function(data) {
                return vm.teamMembers = data;
            });
        }
    }
})();