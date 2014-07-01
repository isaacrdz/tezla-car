$(document).on("ready",inicio);
function inicio()
{	
	//Aqui va todo lo relacionado con el DOM
	$("#personalizar").on("click", movida);
}

function movida()
{
	//JSON
	var cambiosCSS = 
	{
		background:"red",
		color:"#222"
	};

	$("#historia").css(cambiosCSS);
}