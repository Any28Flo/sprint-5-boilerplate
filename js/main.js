var url = "http://examen-laboratoria-sprint-5.herokuapp.com/topics/";


var cargarPagina = function(){
	 muestraLista();
	 cargaModal();
	 $("#enviarTopic").click(agregarTopic);
}

var agregarTopic = function (){

	var $autor = $("#autor").val();
	var $contenido = $("#contenido").val();
	$.post(url,{author_name: $autor, content: $contenido});
	muestraLista();
}




var cargaModal = function (){
	$('.modal').modal();
}
var muestraLista = function (){

	
	// Mandamos a ejecutar la funcion get

	$.getJSON(url, function(data){
		cargaLista(data);
	});
}

var plantillaTopic = "<p class='col l8'>__temaTopic__</p>"+
		"<p class='col l4'>__respuestas__</p>";

var cargaLista = function(data){

	data.forEach(function(tema){
		var $contenedor = $("#listaTopics");
		var $nuevoTopic = $("<div/>");
		$contenedor.append($nuevoTopic);
		var nombreTema =tema.content;
		var numeroRespuestas = tema.responses_count;
		$nuevoTopic.append(plantillaTopic.replace("__temaTopic__",nombreTema)
									   .replace("__respuestas__",numeroRespuestas))

	});
	
};




$(document).ready(cargarPagina);