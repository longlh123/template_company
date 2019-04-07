
jQuery(document).ready(function($) {

	$('#slide_1').children().each(function(index, value){
	   		
   		if($(this).attr('id') != "slide_1_1" && $(this).prop('tagName') != "A")
   		{
   			$(this).css('display', 'none');		
   		}	
    });

	$('.next').on('click',function(){
	    
	    var id = "";
	    var count_slide = 0;

	    var $this = $(this).parent();

	    $this.children().each(function(index, value){
			
			if($(this).prop('id').substring(0, 7) === $this.prop('id'))
	    	{
	    		count_slide++;

	    		if($(this).css('display') != "none")
		    	{
		    		id = parseInt($(this).prop('id').replace($this.prop('id') + "_", "")) + 1;
		    		$(this).hide();
		    	}	
	    	}
	    });
	    
	   	if(id > count_slide) id = 1;

	   	$("#" + $this.prop('id') + "_" + id).show();
	   	
	});

	$('.prev').on('click',function(){
	    
	    var id = "";
	    var count_slide = 0;

	    var $this = $(this).parent();

	    $this.children().each(function(index, value){
			
			if($(this).prop('id').substring(0, 7) === $this.prop('id'))
	    	{
	    		count_slide++;

	    		if($(this).css('display') != "none")
		    	{
		    		id = parseInt($(this).prop('id').replace($this.prop('id') + "_", "")) - 1;
		    		$(this).hide();
		    	}	
	    	}
	    });
	    
	   	if(id == 0) id = count_slide;

	   	$("#" + $this.prop('id') + "_" + id).show();
	});
});