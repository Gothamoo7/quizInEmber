Quiz.QuestionsController = Ember.ObjectController.extend({

	actions:
	{
	
		moveNext:function()
		{
			model = this.get('model');
			var self=this;
			var ans = this.get('answer');
			if(ans != undefined)
			{
				model.set('uservalue',ans);
				model.save();
			var id =model.id;
			this.store.find('questions').then(function(model){
				var length = model.get("length");
				var newRoute =parseInt(id)+1;
				if(id<length)
				{
					self.transitionToRoute('/questions/'+newRoute);
				}
				else
				{
					self.transitionToRoute('/result');	
				}
			});
			}
		},
		pass:function()
		{
			var id = this.get('model.id');
			var self=this;
			this.store.find('questions').then(function(model){
				var length = model.get("length");
				var newRoute =parseInt(id)+1;
				if(id<length)
				{
					self.transitionToRoute('/questions/'+newRoute);
				}
				else
				{
					self.transitionToRoute('/result');
				}
			});
		},
		quit:function()
		{
			document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
			this.transitionTo('index');
		}
	},
	answer:null,
	completed:function()
	{
		var id = this.get('model.id');
		return id;
	}.property('id')
});


Quiz.Radio = Ember.View.extend(Ember.Validations.Mixin,{
	tagName : "input", 
	type : "radio", 
	attributeBindings : [ "name", "type", "value" ],
	click : function() 
	{
		this.checked()
	},
	validations: //ember validation 
	{
		answer: 
		{
			presence: true,
		}
	},
	answer:null,
	checked : function() 
	{
		var self = this;
		this.validate().then(null, function()  //ember validation 
		{
			if(self.get('isValid')==true)
			{
				$('.start').attr('disabled', false);
			}
			else
			{
				$('.start').attr('disabled', true);
			}
		});
		this.set('answer',this.get("value"));
		this.set('controller.answer',this.get("value"));
	} 
});
