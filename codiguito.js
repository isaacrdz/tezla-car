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
		margin:0,
		overflow:"hidden",
		padding:0,
		width:0

	};

	$("#historia").css(cambiosCSS);
}