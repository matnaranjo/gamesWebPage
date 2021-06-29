$(document).ready(function() {
	$('#submit').on('click', function() {
		var username = $('#regUsername').val();
		var password = $('#regPassword').val();
        var passwordconf = $('#regPasswordConf').val();
		if(username!="" && password!="" && passwordconf!="" && (password==passwordconf)){
			$.ajax({
				url: "reg.php",
				type: "POST",
				data: {
					username: username,
					password: password,				
				},
				cache: false,
				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						alert("Too good");						
					}
					else if(dataResult.statusCode==201){
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