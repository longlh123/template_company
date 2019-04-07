
jQuery(document).ready(function($) {

	$('#slide_1').children().each(function(index, value){
	   	
   		if($(this).attr('id') != "slide_1_1" && $(this).prop('tagName') != "A")
   		{
   			$(this).css('display', 'none');		
   		}	
    });

	$('.idx_slide').on('click', function(){

		var slide_selected = $(this).parent().prop('id').replace('breadcrumb_','');

		$('#slide_1').children().each(function(index, value){
	   		
	   		if($(this).prop('id') != slide_selected && $(this).prop('tagName') != "A")
	   		{
	   			$(this).css('display', 'none');

	   			if($(this).prop('id') !== 'slide_1_1')
	   			{
	   				$('#breadcrumb_' + $(this).prop('id')).remove();	
	   			}		
	   		}	
	    });

	    $('#' + slide_selected).show();
	});

	$('.next').on('click',function(){
	    
	    var id = "";
	    var count_slide = 0;

	    var $this = $(this).parent();
	    var $cur_slide = 'undefined';

	    $this.children().each(function(index, value){
			
			if($(this).prop('id').substring(0, 7) === $this.prop('id'))
	    	{
	    		count_slide++;

	    		if($(this).css('display') != "none")
		    	{
		    		$cur_slide = $(this);
		    		id = parseInt($(this).prop('id').replace($this.prop('id') + "_", "")) + 1;
		    		$(this).hide();
		    	}	
	    	}
	    });
		
		if($cur_slide.prop('id') !== "slide_1_1")
		{
			$('#breadcrumb_' + $cur_slide.prop('id')).remove();	
		}

	   	if(id > count_slide)
	   	{
	   		id = 1;	
	   	} 
	   	else
	   	{
	   		$('#breadcrumb').last().append('<li id="breadcrumb_' + $this.prop('id') + "_" + id + '"><a>Slide ' + id + '</a></li>');
	   	}
		
	   	$("#" + $this.prop('id') + "_" + id).show();
	});

	$('.prev').on('click',function(){
	    
	    var id = "";
	    var count_slide = 0;

	    var $this = $(this).parent();
	    var $cur_slide = 'undefined';

	    $this.children().each(function(index, value){
			
			if($(this).prop('id').substring(0, 7) === $this.prop('id'))
	    	{
	    		count_slide++;

	    		if($(this).css('display') != "none")
		    	{
		    		$cur_slide = $(this);
		    		id = parseInt($(this).prop('id').replace($this.prop('id') + "_", "")) - 1;
		    		$(this).hide();
		    	}	
	    	}
	    });
	    
	    if($cur_slide.prop('id') !== "slide_1_1")
		{
			$('#breadcrumb_' + $cur_slide.prop('id')).remove();	
		}

	   	if(id == 0)
	   	{ 
	   		id = 1;
	   	}
	   	else
	   	{
	   		if(id > 1)
	   		{
	   			$('#breadcrumb').last().append('<li id="breadcrumb_' + $this.prop('id') + "_" + id + '"><a>Slide ' + id + '</a></li>');	
	   		}
	   	}

	   	$("#" + $this.prop('id') + "_" + id).show();
	});
});