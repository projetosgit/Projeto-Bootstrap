/** 
* Relembrando os conteitos Bootstrap
* @author Artur
*/

/* ============= Jumbotron select ============= */

var select = document.querySelector(".select-promocoes"); //Essa linha controla os itens selecionados
var img_jumbotrom = document.querySelector(".img-jumbotron"); //Essa linha controla as imagens do jumbotron

var item_selecionado = document.querySelector(".promocoes"); //Essa linha controla o botão de ação
item_selecionado.addEventListener("click", select_promocao); //Essa linha vai execultar o método select_promocao

function select_promocao(){
	
	if (select.options[select.selectedIndex].value == 1){
		img_jumbotrom.src = "img/jumbotron-5.png";
	} else if(select.options[select.selectedIndex].value == 2){
		img_jumbotrom.src = "img/jumbotron-2.png";
	} else if(select.options[select.selectedIndex].value == 3){
		img_jumbotrom.src = "img/jumbotron-3.png";
	} else if(select.options[select.selectedIndex].value == 4){
		img_jumbotrom.src = "img/jumbotron-4.png";
	} else if(select.options[select.selectedIndex].value == 5){
		img_jumbotrom.src = "img/jumbotron-1.png";
	} else {
		alert("Escolha uma opção");
	}
}