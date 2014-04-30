Quiz.Router.map(function() {
this.resource('questions', { path: '/questions/:question_id' }/*, function() {
	this.resource('question',{
	path:':question_id'});
  }*/);
  this.route('result');
});
Quiz.IndexRoute = Ember.Route.extend({
  /*redirect: function(){
  		var fob = {"question_id":1};
		this.transitionTo('questions',1); // no i18n
	}*/
});
Quiz.QuestionsRoute = Ember.Route.extend({
	activate: function(){
		var base = this;
		Ember.Instrumentation.subscribe("message.received", { //no i18n
	      before: function() {
	        base.get('controller').send('pass'); //no i18n
	        
	        },
	      after: function() {
	      }
		});
	},
  model: function(params) {
  	if(isCookie())
  	{
	  	var model = this.store.find('questions',params.question_id);
		return model;
	}
	else
	{
		this.transitionTo('index');
	}
  }
});
Quiz.ResultRoute = Ember.Route.extend({
	model:function()
	{
		var model = this.store.find('questions');
		return model;
	}
});
