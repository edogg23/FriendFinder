console.log('hello js file');



$('#submit').on('click', function(event) {
	event.preventDefault();
	console.log('in submitbutton app.js');
	// Gather user inputs
	var userInput = {
		name: $('#name').val().trim(),
		// photo: $('#userPhoto').val().trim(),
		scores:[
			$('#q1').val().trim(),
			$('#q2').val().trim(),
			$('#q3').val().trim(),
			$('#q4').val().trim(),
			$('#q5').val().trim(),
			$('#q6').val().trim(),
			$('#q7').val().trim(),
			$('#q8').val().trim(),
			$('#q9').val().trim(),
			$('#q10').val().trim()
		]
	};
	console.log('userInput from app.js = ' + JSON.stringify(userInput));
	
	// Add user inputs to friends list
	$.post('/api/friends', userInput)
      		.done(function(data) {
      			console.log('response = ' + JSON.stringify(data));
      			// Set the name and image values of friend match
      			$('#userMatch').html(data.matchName);
		    	// $("#userMatchImage").attr("src", data.matchImage);
		    	// Pop open the modal dialog
      			// $('#modal1').modal('open');
      		});
		});

