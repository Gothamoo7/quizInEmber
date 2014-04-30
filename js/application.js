var ClockService = Ember.Object.extend({
  pulse: Ember.computed.oneWay('_seconds').readOnly(),
  tick: function () {
    var clock = this;
    Ember.run.later(function () {
      var seconds = clock.get('_seconds');
      if (typeof seconds === 'number') {
        clock.set('_seconds', seconds + (1/4));
      }
    }, 250);
  }.observes('_seconds').on('init'),
  _seconds: 0,
});




Ember.Application.initializer({
  name: 'clockServiceInitializer',
  initialize: function(container, application) {
    container.register('clock:service', ClockService);
    application.inject('controller:interval', 'clock', 'clock:service');
  }
});


window.Quiz = Ember.Application.create({
		LOG_TRANSITIONS : true,
		LOG_BINDINGS : true,
		LOG_VIEW_LOOKUPS : true,
		LOG_STACKTRACE_ON_DEPRECATION : true,
		LOG_VERSION : true,
		debugMode : true
		});
		

Quiz.ApplicationAdapter = DS.FixtureAdapter.extend();
/*Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});*/
