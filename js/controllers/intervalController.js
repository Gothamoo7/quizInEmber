Quiz.IntervalController = Ember.ObjectController.extend({
  secondsBinding: 'clock.pulse',
  fullSecond: function () {
    return (this.get('seconds') % 1 === 0);
  }.property('seconds'),
  quarterSecond: function () {
    return (this.get('seconds') % 1 === 1/4);
  }.property('seconds'),
  halfSecond: function () {
    return (this.get('seconds') % 1 === 1/2);
  }.property('seconds'),
  threeQuarterSecond: function () {
    return (this.get('seconds') % 1 === 3/4);
  }.property('seconds')
});









Ember.Handlebars.registerBoundHelper('digital_clock', function(seconds) {
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  if(seconds ==30)
  {
	 	 Ember.Instrumentation.instrument("message.received");
  }
  var addZero = function (number) {
    return (number < 10) ? '0' + number : '' + number;
  };
  var formatHMS = function(h, m, s) {
    if (h > 0) {
      return '%@:%@:%@'.fmt(h, addZero(m), addZero(s));
    }
    return '%@:%@'.fmt(m, addZero(s));
  };
  return new Ember.Handlebars.SafeString(formatHMS(h, m, s));
});
