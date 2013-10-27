$(document).ready(function(){
	
$("#submit").click(function(){
	$("#submitmsg").css("display","block");	
});
	$("#frmcontact").validate({
		
		rules:
		{
			name:
			{
			required: true,
            maxlength: 25	
			},
			password:
			{
				required:true
			
				},
				
			confirmpass:
			{
				required:true,
                                equalTo: "#password"
			
				},	
			 email: {
       			required: true,
       			email: true
    			 },
			weburl:{
			required:true,
                         url: true
			}
			
		},
		messages:{
			name:{
				required:"Please enter your name",
				maxlength:"Max Length should be 25"
				},
                 confirmpass:{
                                equalTo: "Please enter the same password as above."
                             },
		 email: {
      		 required: "We need your email address to contact you.",
       		email: "Please enter a valid email."
   			  },
		weburl:{
			required:"Required Field",
                         url: "Invalid Website URL"
			
			}
			
		},
	
		
		});
		
		

$("#name").focus(function(){
	$(this).val("");
});
$("#email").focus(function(){
$(this).val("");
});
$("#weburl").focus(function(){
$(this).val("");
});
$("#password").focus(function(){
$(this).val("");
});
$("#confirmpass").focus(function(){
$(this).val("");
});

$('#paradigm_all').bind('click',function(){
	console.log('checked');
	if( $(this).is(':checked') )
	$('.aerainside input:checkbox').prop('checked',true);
	else
    $('.aerainside input:checkbox').prop('checked',false);
});
});




window.onload = function(){


       $('.blueberry').blueberry({interval: 2000,
		duration: 1000,
		lineheight: -15,
                hoverpause:true});
	/* bind events 
	$("#name").focus(function(){
		$(this).val("");
	});
	
	$("#name").focusout(function(){
		var statusDivId = $(this).attr("id")+"Status";
		$("#"+statusDivId).html("");
		$(this).css("border", "");
			
		if($(this).val()=="")
		{
			$("#"+statusDivId).html("This is a required field, You cant leave this field blank");
			this.focus();
			$(this).css("border", "5px solid, red");
		}
	});
	
	$("#password").focus(function(){
		$(this).val("");
	});
	
	$("#password").focusout(function(){
		var statusDivId = $(this).attr("id")+"Status";
		$("#"+statusDivId).html("");
		$(this).css("border", "");
		
		if($(this).val()=="")
		{
			$("#"+statusDivId).html("This is a required field, You cant leave this field blank");
			$(this).focus();
			$(this).css("border", "1px solid, red");
		}
		if($(this).val().length < 6)
		{
			$("#"+statusDivId).html("Password should of minimum 6 characters.");
			$(this).focus();
			$(this).css("border", "5px solid, red");
		}
	});
	
	$("#confirmpass").focus(function(){
		$(this).val("");
	});
	
	$("#confirmpass").focusout(function(){
		var statusDivId = $(this).attr("id")+"Status";
		$("#"+statusDivId).html("");
		$(this).css("border", "");
		
		if($(this).val()!= $("#password").val())
		{
			var statusDivId = $(this).attr("id")+"Status";
			$("#"+statusDivId).html("This Password Doesn't match with the value in the password field");
			$(this).val("");
			$(this).focus();
			$(this).css("border", "5px solid, red");
		}
	});
	
	$("#email").focus(function(){
		$(this).val("");
	});
	
	$("#email").focusout(function(){
		var statusDivId = $(this).attr("id")+"Status";
		$("#"+statusDivId).html("");
		$(this).css("border", "");
		
		var val= $(this).val();
		if(val.indexOf('sapient.com')>-1)
		{
			var statusDivId = $(this).attr("id")+"Status";
			$("#"+statusDivId).html("You cant use the email address containg 'sapient.com' domain");
			$(this).val("");
			$(this).focus();
			$(this).css("border", "5px solid, red");
		}		
	});
	
	$("#weburl").focus(function(){
		$(this).val("");
	});
	
	$("#weburl").focusout(function(){
		var statusDivId = $(this).attr("id")+"Status";
		$("#"+statusDivId).html("");
		$(this).css("border", "");
		
		if($(this).val()=="")
		{
			var statusDivId = $(this).attr("id")+"Status";
			$("#"+statusDivId).html("This is a required field, You cant leave this field blank");
			$(this).focus();
			$(this).css("border", "5px solid, red");
		}
	});*/
	
	$("#submit").click(function(){
		var statusDivId = $(this).attr("id")+"Status";
		$("#"+statusDivId).css("display","block");
	});
}
		