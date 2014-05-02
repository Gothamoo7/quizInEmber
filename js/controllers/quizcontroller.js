Quiz.IndexController = Ember.Controller.extend({
	 actions: 
	 {
	 	 saveUser:function()
	 	 {
	 	 	var user=this.get('name');
	 	 	var regex = /^[a-zA-Z]*$/;
	 	 	textonly = regex.test(user);
	 	 	if (user==null || user=="" || user==undefined ||textonly==false	)
	 	 	{
	 	 		alert('please enter the valid name ');
	 	 	}
	 	 	else
	 	 	{
		 	 	document.cookie="username="+user;
		 	 	this.transitionToRoute('/questions/1');
	 	 	}
	 	 }
	 
	 }
});
