/* globals MPageUI */

/**
 * @class $CLASS_NAME
 * @classdesc $CLASS_DESC
 * @public
 */
$CLASS_NAME = (function() {
    return MPageUI.createClass({
        emitter: true,

        /**
         * Customized initialization method that is called within the
         * constructor.
         * @returns {$CLASS_NAME} self for chaining
         * @private
         */
        init: function() {

            this.attachListeners();
            return this;
        },

        /**
         * Generates html markup
         * @returns {$CLASS_NAME} self for chaining
         * @public
         */
        render: function() {
            var html = "";

            return html;
        },

        /**
         * Attaches DOM events
         * @returns {$CLASS_NAME} self for chaining
         * @public
         */
        attachEvents: function() {
            return this;
        },

        /**
         * Attaches MPageUI mixed-in EventEmitter Events
         * @returns {$CLASS_NAME} self for chaining
         * @private
         */
        attachListeners: function() {
            return this;
        }
    });
})();