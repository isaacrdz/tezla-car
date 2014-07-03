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
	var cambiosPersonalizacion =
	{
		height: "auto",
		opacity: 1,
		width: "30%"
	}

	$("#historia").css(cambiosCSS);
	$("#personalizacion").css(cambiosPersonalizacion);
	$("#color div").on("click",cambiarColor);
}

function cambiarColor(datos)
{
	//console.log(datos); saber lo de abajo en la consola al dar click en el div de color 
	var colorito = datos.currentTarget.id;
	var nuevoCoche = "c" + colorito +".jpg";
	$("#cochecito img").attr("src",nuevoCoche);
}