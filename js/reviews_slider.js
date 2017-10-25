var radio = document.querySelectorAll("#reviews form i");
	
	function radio_sl()
	{
		
	}

	for(var i = 0; i < radio.length ; i++)
	{
		radio[i].addEventListener("click" , radio_sl);
	}