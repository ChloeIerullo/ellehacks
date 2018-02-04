/**
 * 
 */
//function myfunction(){ //to save the value of drop down menu on the menu and in var x
//		var x = document.getElementById("mySelect").value;
//		document.getElementById("demo").innerHTML = x;
//	}

$("#add").click(function(){
	var x = $("#mySelect").val();
	var y = $("#amount").val();
	$("#table tr:last").after('<tr> <th>' + x +'</th> <th>'+ y + '</th> </tr>');
});