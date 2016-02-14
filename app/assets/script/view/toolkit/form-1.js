(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    var templateInputError1 = require('../../template/toolkit/input-error-1');
    require('jquery-validation');
    module.exports = Backbone.View.extend({
        initialize: function(options) {
            this.options = options;
            var _this = this;
            // init validation plugin
            this.$el.validate({
                rules: (options.rules || {}),
                //overide default error display plugin functionalty
                showErrors: function(errorMap, errorList) {
                    //clean up error messages boxes
                    Backbone.$.each(_this.$el.find('.input-error-1'), function() {
                        var $this = Backbone.$(this);
                        // the the input for the error message
                        var $inputFor = Backbone.$('[name=' + $this.data('for') + ']');
                        // if the input is valid then remove the error message container
                        if ($inputFor.size() && $inputFor.first().attr('aria-invalid') === 'false') {
                            $this
                                .remove();
                        }
                    });
                    //loop over all elements in error
                    Backbone.$.each(errorList, function() {
                        var $errorElement = Backbone.$(this.element);
                        //remove error message box if present already
                        Backbone.$('#' + $errorElement.attr('name') + '-error-message')
                            .remove();
                        //add the error message box
                        $errorElement
                            .attr('aria-describedby', $errorElement.attr('name') + '-error-message')
                            .attr('aria-invalid', true)
                            .after(_this.template({
                                title: this.message,
                                id: $errorElement.attr('name') + '-error-message',
                                for: $errorElement.attr('name')
                            }));
                    });
                }
            });
        },
        events: {
            'submit': 'submitEvent'
        },
        template: function(data) {
            return Backbone.$(templateInputError1(data));
        },
        submitEvent: function(e) {
            e.preventDefault();
            // check if form is valid
            if (this.$el.valid()) {
                //send click event to metrics
                Backbone.Mediator.publish('metrics:event:send', {
                    hitType: 'event',
                    eventCategory: 'form',
                    eventAction: 'submit',
                    eventLabel: ''
                });
                // callback if form is valid
                if (this.options.isValid) {
                    this.options.isValid(this.$el);
                }
            }
        }
    });
})();
