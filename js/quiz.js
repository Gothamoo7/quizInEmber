function isCookie()
{
	allcookies = document.cookie;
	cookiearray  = allcookies.split(';');
	cookie = false;
	for(var i=0; i<cookiearray.length; i++){
		name = cookiearray[i].split('=')[0];
		value = cookiearray[i].split('=')[1];
		if(name =='username')
		{
			cookie= true;
		}
		else
		{
			cookie= false;
			break;
		}
	}
	return cookie;
}
function getUser()
{
	allcookies = document.cookie;
	cookiearray  = allcookies.split(';');
	cookie = false;
	for(var i=0; i<cookiearray.length; i++){
		name = cookiearray[i].split('=')[0];
		value = cookiearray[i].split('=')[1];
		if(name =='username')
		{
			return value;
		}
	}
}

