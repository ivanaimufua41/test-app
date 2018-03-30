//Check specific todo with clicking

$("ul").on("click", "li",  function(){
	$(this).toggleClass("done");

//click on X to close To do;	
});
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
//input of to do

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabs input text
		var todotext = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext +"</li>");
	}
});

$("#toggle-form").on("click", function(){
	if (($("input[type='text']").attr("placeholder"))) {
    	$("input[type='text']").removeAttr('placeholder').slideToggle();
  	} 
  	else {
  		$("input[type='text']").slideToggle(function() {
  			$("input[type='text']").attr("placeholder", "Add New Task");
    	})
    }
})