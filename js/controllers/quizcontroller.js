Quiz.IndexController = Ember.Controller.extend({
	 actions: 
	 {
	 	 saveUser:function()
	 	 {
	 	 	var user =this.get('name');
	 	 	if (user!=null || user!="")
	 	 	{
		 	 	document.cookie="username="+user;
		 	 	this.transitionToRoute('/questions/1');
	 	 	}
	 	 }
	 
	 }
});
