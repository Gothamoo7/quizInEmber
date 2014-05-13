describe('user name', function()
{
	before(function()
	{
		controller = Quiz.__container__.lookup("controller:index");
		stub = sinon.stub(controller, "transitionToRoute", function()
 	 	{
 	 		
 	 	});
	})
	it("should be valid",function()
	{
		controller = Quiz.__container__.lookup("controller:index");
		controller.set('name', 'gotham');
		controller.send('saveUser');
		console.log(stub.called);
		rendered = stub.called;
		expect(rendered).to.be.true;
	})
	
	after(function()
	{
		stub.restore();
	});
});
