$(document).ready(function() {
	$('#next').on('click', function() {
		var username = $('#logUsername').val();
		var password = $('#logPassword').val();

		if(username!="" && password!=""){
			$.ajax({
				url: "log.php",
				type: "POST",
				data: {
					username: username			
				},
				cache: false,
				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					if(dataResult.passwordResponse==password){
						alert(dataResult.passwordResponse);						
					}
					else if(dataResult.passwordResponse!=password){
					   alert("Error occured !");
					}
					
				}
			});
		}
		else{
			alert('Please fill all the field !');
		}
	});
});