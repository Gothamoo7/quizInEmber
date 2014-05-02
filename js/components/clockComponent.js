Quiz.QuestionTimerComponent = Ember.Component.extend({

	tagName:'span',
	classNames: ['statusContent'],
	timer:ClockService.create(),
	clock:function()
		{
			this.set('timer',ClockService.create());
			return this.get('timer');
		}.property()
});
