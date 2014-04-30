Quiz.ResultController = Ember.ArrayController.extend({
	
	actions:
	{
		playagain:function()
		{
			this.store.unloadAll(Quiz.Questions);
			this.transitionTo('/questions/1');
		},
		newgame:function()
		{
			document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
			this.transitionTo('index');
		}
	},

	totalScore:function()
	{
		var points = 0;
		var model = this.get('model');
		uservalue = this.getEach('uservalue');
		expected = this.getEach('expected');
		for(i=0;i<uservalue.length;i++)
		{
			if(expected[i] !== undefined)
			{
				if(uservalue[i]==expected[i])
				{
					points+=5;
				}
			}
		}
		
		return points+"/"+(expected.length*5);
	}.property("content.@each.uservalue"),
	user:function()
	{
		return getUser();
	}.property()
});
