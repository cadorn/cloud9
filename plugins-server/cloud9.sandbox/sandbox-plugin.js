"use strict";

var assert = require("assert");
var path = require("path");

module.exports = function(options, imports, register) {

    assert(options.workspaceId, "option 'workspaceId' is required");
    assert(options.projectDir, "option 'projectDir' is required");

    register(null, {
        sandbox: {
            getProjectDir: function(callback) {
                callback(null, options.projectDir);
            },
            getSettingsPath: function(callback) {
                callback(null, options.settingsPath || path.resolve(options.projectDir, ".settings.xml"));
            },
            getWorkspaceId: function(callback) {
                callback(null, options.workspaceId);
            },
            getUnixId: function(callback) {
                callback(null, options.unixId || null);
            }
        }
    });
};