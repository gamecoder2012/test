/*jslint anon:true, sloppy:true, nomen:true*/ YUI.add('myMojitModel',
function(Y, NAME) {

/**
 * The myMojitModel module.
 *
 * @module myMojit
 */

    /**
     * Constructor for the myMojitModel class.
     *
     * @class myMojitModel
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            var result = 'bitch';
            var result1 = 'fsdff';
            callback(null, { some1: result,some2:result1 });
        }

    };

}, '0.0.1', {requires: []});