(function() {
    'use strict';
    var Backbone = require('../../backbone/package');
    var templateInputError1 = require('../../template/toolkit/input-error-1');
    require('jquery-validation');
    module.exports = Backbone.View.extend({
        template: function(data) {
            return Backbone.$(templateInputError1(data));
        },
        events: {
            'submit': 'submitEvent'
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
                window.console.log('vaild, submitted');
            }
        },
        initialize: function() {
            var _this = this;
            // init validation plugin
            this.$el.validate({
                //overide default error display plugin functionalty
                showErrors: function(errorMap, errorList) {
                    //clean up error messages boxes
                    Backbone.$.each(_this.$el.find('.input-error-1'), function() {
                        var $this = Backbone.$(this);
                        var $inputFor = Backbone.$('#' + $this.data('for'));
                        if ($inputFor.size() && $inputFor.attr('aria-invalid') === 'false') {
                            $this
                                .remove();
                        }
                    });
                    //loop over all elements in error
                    Backbone.$.each(errorList, function() {
                        var $errorElement = Backbone.$(this.element);
                        //remove error message box if present already
                        Backbone.$('#' + $errorElement.attr('id') + '-error-message')
                            .remove();
                        //add the error message box
                        $errorElement
                            .attr('aria-describedby', $errorElement.attr('id') + '-error-message')
                            .attr('aria-invalid', true)
                            .after(_this.template({
                                title: this.message,
                                id: $errorElement.attr('id') + '-error-message',
                                for: $errorElement.attr('id')
                            }));
                    });
                }
            });
        }
    });
})();
