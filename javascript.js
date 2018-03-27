// responsive navigation
function myFunction() {
	    var x = document.getElementById("myTopnav");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
	    }
	};

$(document).ready(function(){

	var prvi = ["matematika", "fizika", "hrvatski jezik", "informatika", "engleski jezik", "likovna umjetnost"]

	var $subjectName = "";
	var $studentName = "";

	$(".nontoggle").children("a").on("click", function() {
		$subjectName = $(".nontoggle").children("a").val();
		$studentName = $(".nontoggle").children("h6").val();
		console.log($subjectName + " " + $studentName + "fsdg")

		$(".subject-from-imenik").text($subjectName);
		$(".name-from-imenik").text($studentName);
		
	})
	
	myFunction();

	



// toggle 
	function myToggle() {
		$(".kontejner").click(function(){
			if ($(this).hasClass("nontoggle")) {
		    	console.log("chill");
		    }
		    else {
		    	$(this).next().toggle();
		    }
		});
	};

	myToggle();	

	function displayEdit() {
		$(".edit").click(function(e){
			e.stopPropagation();
			var $done = $(this).prev(".done")
			console.log($done)
			var $full = $(this).parents('.full');
			var $maintitle = $('h3', $full);
			var $teacher = $('p:first', $full);
			var $description = $('p:last', $full);
			var $birthday = $('td:first', $full);
			var $address = $('td:nth-child(2)', $full);
			var $parentName = $('td:last', $full);
			var $td = $('td', $full);

			$maintitle.attr({'contenteditable':'true'});
			$maintitle.click(function(e){
				e.stopPropagation();
			});
			$teacher.attr({'contenteditable':'true'});
			$description.attr({'contenteditable':'true'});
			$birthday.attr({'contenteditable':'true'});
			$address.attr({'contenteditable':'true'});
			$parentName.attr({'contenteditable':'true'});
			$td.attr({'contenteditable':'true'});

			$done.show()

			$($done).click(function(e){
				e.stopPropagation();
				$maintitle.attr({'contenteditable':'false'});
				$teacher.attr({'contenteditable':'false'});
				$description.attr({'contenteditable':'false'});
				$birthday.attr({'contenteditable':'false'});
				$address.attr({'contenteditable':'false'});
				$parentName.attr({'contenteditable':'false'});
				$td.attr({'contenteditable':'false'});
				$done.hide()
			})
		});
	};

	displayEdit();

  	function myNote() {
  		$("#note").click(function(e) {
  			$(".lightbox").show()
  		})
  		
  		$("#saved").click(function(e) {

  		$note = $("#grade-note").val()
  		$grade = $("#grade").val()
  		$dateG = $("#date-graded").val().split('-');
  		$dateN = $("#date-noted").val().split('-');

  		$("<tr></tr>")
  			.appendTo(".grades")

  		$("<td></td>")
  			.text($note)
  			.appendTo("tr:last")

  		$("<td></td>")
  			.text($grade)
  			.appendTo("tr:last")

  		$("<td></td>")
  			.text($dateG[2]+'.'+$dateG[1]+'.'+$dateG[0])
  			.appendTo("tr:last")

  		$("<td></td>")
  			.text($dateN[2]+'.'+$dateN[1]+'.'+$dateN[0])
  			.appendTo("tr:last")

  		$(".lightbox").hide()
  		})
  		$("#canceled").click(function(e) {
  			$(".lightbox").hide()
  		})
  	}

  	myNote()


// delete 
	function myDelete() {
		$(".trash").click(function(e){
			e.stopPropagation();
			$toDelete = $(this).closest(".full")
				$(".confirmation").show()		
			});
		$("#confirm").click(function() {
			$toDelete.remove()
			$(".confirmation").hide()
		})
		$("#cancel").click(function() {
			$(".confirmation").hide()
		})
	};

	myDelete();

//move element up
	function moveUp() {
		$(".arrow-up").click(function(e){
			e.stopPropagation();
			var $active = $(this).parents('.full');
			var $prevSibling = $active.prev('.full');
			if ($prevSibling.length > 0) {
				$active.insertBefore($prevSibling);
			}
    	});
	};

	moveUp();

//move element down
	function moveDown() {
		$(".arrow-down").click(function(e){
			e.stopPropagation();
			var $active = $(this).parents('.full');
			var $nextSibling = $active.next('.full');
			if ($nextSibling.length > 0) {
				$active.insertAfter($nextSibling);
			}
    	});
	};

	moveDown();


// processing form #subject-entry with jquery
	$("#subject-entry").on('submit', function (e) {
		var $subject = $('#subject').val();
		var $teacher = $('#teacher').val();
		var $description = $('#description').val();

	   myToggle();

	    $('<div></div>')
		   	.addClass("full")
		   	.insertBefore(".subject-entry");

	    $('<div></div>')
		   	.addClass("kontejner")
		   	.appendTo(".full:last");

	   	$('<div></div>')
		   	.addClass("subjects")
		   	.appendTo(".kontejner:last");

		$('<h3></h3>')
		   	.text($subject)
		   	.appendTo(".subjects:last");

		$('<img></img>')
			.addClass("done")
			.attr("src","https://freeiconshop.com/wp-content/uploads/edd/document-done-outline.png")
			.on("click", function(event){
				e.stopPropagation();
				var $done = $(this).prev(".done")
				console.log($done)
				var $full = $(this).parents('.full');
				var $maintitle = $('h3', $full);
				var $teacher = $('p:first', $full);
				var $description = $('p:last', $full);

				$maintitle.attr({'contenteditable':'true'});
				$maintitle.click(function(e){
					e.stopPropagation();
				});
				$teacher.attr({'contenteditable':'true'});
				$description.attr({'contenteditable':'true'});

				$done.show()

				$($done).click(function(e){
					e.stopPropagation();
					$maintitle.attr({'contenteditable':'false'});
					$teacher.attr({'contenteditable':'false'});
					$description.attr({'contenteditable':'false'});
					$done.hide()
				})
			})
			.appendTo(".kontejner:last");

		$('<img></img>')
			.addClass("edit")
			.attr("src","https://www.shareicon.net/data/256x256/2016/08/06/807928_edit_512x512.png")
			.on("click", function(event){
				e.stopPropagation();
				var $done = $(this).prev(".done")
				console.log($done)
				var $full = $(this).parents('.full');
				var $maintitle = $('h3', $full);
				var $teacher = $('p:first', $full);
				var $description = $('p:last', $full);

				$maintitle.attr({'contenteditable':'true'});
				$maintitle.click(function(e){
					e.stopPropagation();
				});
				$teacher.attr({'contenteditable':'true'});
				$description.attr({'contenteditable':'true'});

				$done.show()

				$($done).click(function(e){
					e.stopPropagation();
					$maintitle.attr({'contenteditable':'false'});
					$teacher.attr({'contenteditable':'false'});
					$description.attr({'contenteditable':'false'});
					$done.hide()
				})
			})
			.appendTo(".kontejner:last");

		$('<img></img>')
			.addClass("arrow-down")
			.attr("src", "https://www.shareicon.net/data/256x256/2015/10/08/114124_down_512x512.png")
			.on("click", function(event) {
				event.stopPropagation();
				var $active = $(this).parents('.full');
				var $nextSibling = $active.next('.full');
				if ($nextSibling.length > 0) {
					$active.insertAfter($nextSibling);
				}
    		})
			.appendTo(".kontejner:last");
			
		$('<img></img>')
			.addClass("arrow-up")
			.attr("src", "https://www.shareicon.net/download/2015/10/08/114125_arrow.ico")
			.on("click", function(event) {
				event.stopPropagation();
				var $active = $(this).parents('.full');
				var $prevSibling = $active.prev('.full');
				if ($prevSibling.length > 0) {
					$active.insertBefore($prevSibling);
				}
			 })
			.appendTo(".kontejner:last");   	

		$('<img></img>')
			.addClass("trash")
			.attr("src", "https://image.flaticon.com/icons/png/128/61/61391.png")
			.on("click", function(event) {
				e.stopPropagation();
				$toDelete = $(this).closest(".full")
				$(".confirmation").show()		
					
				$("#confirm").click(function() {
					$toDelete.remove()
					$(".confirmation").hide()
				})
				$("#cancel").click(function() {
					$(".confirmation").hide()
				})
			 })
			.appendTo(".kontejner:last");

		$('<div></div>')
		   	.addClass("description")
		   	.appendTo(".full:last");

		$('<p></p>')
			.addClass("teacher-name")
			.text($teacher)
			.appendTo(".description:last");

		$('<p></p>')
			.addClass("subject-description")
			.text($description)
			.appendTo(".description:last");

		myToggle();	

	   e.preventDefault();
	});

// add new student to imenik

	function newStudentEntry (e) {
		$("#new-student-entry").on('submit',function(e) {
			var $newStudentName = $('.new-student-name').val();
			var $newStudentSurname = $('.new-student-surname').val();
			var $description = $(this).parents(".description")
			myToggle();

			$('<div></div>')
			   	.addClass("full")
			   	.addClass("student-list")
			   	.insertAfter($description.children(".student-list:last"));

			var $thisFull = $description.children(".student-list:last");

		    $('<div></div>')
			   	.addClass("kontejner")
			   	.appendTo($thisFull);

			var $thisKont = $thisFull.children(".kontejner:last");

			$('<div></div>')
			   	.addClass("students")
			   	.appendTo($thisKont);

			var $thisStudents = $thisKont.children(".students:last");

			$('<h6></h6>')
			   	.text($newStudentName)
			   	.append(" " + $newStudentSurname)
			   	.appendTo($thisStudents);

			$('<div></div>')
			   	.addClass("description")
			   	.appendTo($thisFull);

			var $descToFill = $thisFull.children(".description");

			 for (var i = 0; i < prvi.length; i++) {
			 	$('<div></div>')
				   	.addClass("kontejner")
				   	.addClass("nontoggle")
				   	.appendTo($descToFill);

				var $loopingKont = $descToFill.children(".kontejner:last");

			   	$('<div></div>')
			   		.addClass("subjects")
			   		.appendTo($loopingKont);

			   	$('<h3></h3>')
			   		.addClass("new-subject-from-for")
			   		.text(prvi[i])
			   		.appendTo($loopingKont.children(".subjects"));

			   	$('<a></a>')	
			   		.text(prvi[i])
			   		.attr("href", "ocjene.html")
			   		.appendTo($loopingKont.children(".new-subject-from-for:last"));


			 }

			myToggle();

			e.preventDefault();
		});
	}

	newStudentEntry();
// processing form #student-entry with jquery
	$("#student-entry").on('submit', function (e) {

		var $studentName = $('#studentName').val();
		var $studentFamilyName = $('#studentFamilyName').val();
		var $birthday = $('#birthday').val().split('-');
		var $adress = $('#adress').val();
		var $parent = $('#parentName').val();

	    myToggle();

	    $('<div></div>')
		   	.addClass("full")
		   	.insertBefore(".student-entry");

	    $('<div></div>')
		   	.addClass("kontejner")
		   	.appendTo(".full:last");

	   	$('<div></div>')
		   	.addClass("students")
		   	.appendTo(".kontejner:last");

		$('<h3></h3>')
		   	.text($studentName)
		   	.append(" " + $studentFamilyName)
		   	.appendTo(".students:last");

		$('<img></img>')
			.addClass("done")
			.attr("src","https://freeiconshop.com/wp-content/uploads/edd/document-done-outline.png")
			.on("click", function(event){
				event.stopPropagation();
			})
			.appendTo(".kontejner:last");

		$('<img></img>')
			.addClass("edit")
			.attr("src","https://www.shareicon.net/data/256x256/2016/08/06/807928_edit_512x512.png")
			.on("click", function(event){
				$(".edit").click(function(e){
					e.stopPropagation();
					var $done = $(this).prev(".done")
					console.log($done)
					var $full = $(this).parents('.full');
					var $maintitle = $('h3', $full);
					var $birthday = $('td:first', $full);
					var $address = $('td:nth-child(2)', $full);
					var $parentName = $('td:last', $full);

					$maintitle.attr({'contenteditable':'true'});
					$maintitle.click(function(e){
						e.stopPropagation();
					});
					$birthday.attr({'contenteditable':'true'});
					$address.attr({'contenteditable':'true'});
					$parentName.attr({'contenteditable':'true'});

					$done.show()

					$($done).click(function(e){
						e.stopPropagation();
						$maintitle.attr({'contenteditable':'false'});
						$birthday.attr({'contenteditable':'false'});
						$address.attr({'contenteditable':'false'});
						$parentName.attr({'contenteditable':'false'});
						$done.hide()
					})
				});
			})
			.appendTo(".kontejner:last");

		$('<img></img>')
			.addClass("arrow-down")
			.attr("src", "https://www.shareicon.net/data/256x256/2015/10/08/114124_down_512x512.png")
			.on("click", function(event) {
				event.stopPropagation();
				var $active = $(this).parents('.full');
				var $nextSibling = $active.next('.full');
				if ($nextSibling.length > 0) {
					$active.insertAfter($nextSibling);
				}
    		})
			.appendTo(".kontejner:last");
			
		$('<img></img>')
			.addClass("arrow-up")
			.attr("src", "https://www.shareicon.net/download/2015/10/08/114125_arrow.ico")
			.on("click", function(event) {
				event.stopPropagation();
				var $active = $(this).parents('.full');
				var $prevSibling = $active.prev('.full');
				if ($prevSibling.length > 0) {
					$active.insertBefore($prevSibling);
				}
			 })
			.appendTo(".kontejner:last");   	

		$('<img></img>')
			.addClass("trash")
			.attr("src", "https://image.flaticon.com/icons/png/128/61/61391.png")
			.on("click", function(event) {
				e.stopPropagation();
				$toDelete = $(this).closest(".full")
				$(".confirmation").show()		
				
				$("#confirm").click(function() {
					$toDelete.remove()
					$(".confirmation").hide()
				})
				$("#cancel").click(function() {
					$(".confirmation").hide()
				})

			 })
			.appendTo(".kontejner:last");


		$('<div></div>')
		   	.addClass("description")
		   	.appendTo(".full:last");

		$('<table></table>')
		   	.appendTo(".description:last");

		$('<tr></tr>')
			.appendTo("table:last");

		$('<th></th>')
			.text("Datum rođenja:")
			.appendTo("tr:last");

		$('<td></td>')
			.text($birthday[2]+'.'+$birthday[1]+'.'+$birthday[0])
			.appendTo("tr:last");

		$('<tr></tr>')
			.appendTo("table:last");

		$('<th></th>')
			.text("Adresa: ")
			.appendTo("tr:last");

		$('<td></td>')
			.text($adress)
			.appendTo("tr:last");

		$('<tr></tr>')
			.appendTo("table:last");

		$('<th></th>')
			.text("Ime roditelja:")
			.appendTo("tr:last");

		$('<td></td>')
			.text($parent)
			.appendTo("tr:last");

	   myToggle();	

	   e.preventDefault();
	});

// new class
	$("#new-class").on('submit', function (e) {

		var $class = $('#student-classes').val();
		
	    myToggle();

	    $('<div></div>')
		   	.addClass("full")
		   	.insertBefore(".student-entry");

	    $('<div></div>')
		   	.addClass("kontejner")
		   	.appendTo(".full:last");

		$('<img></img>')
			.addClass("trash")
			.attr("src", "https://image.flaticon.com/icons/png/128/61/61391.png")
			.on("click", function(event) {
				e.stopPropagation();
				$toDelete = $(this).closest(".full")
				$(".confirmation").show()		
					
				$("#confirm").click(function() {
					$toDelete.remove()
					$(".confirmation").hide()
				})
				$("#cancel").click(function() {
					$(".confirmation").hide()
				})
			 })
			.appendTo(".kontejner:last");

	   	$('<div></div>')
		   	.addClass("students")
		   	.appendTo(".kontejner:last");

		$('<h3></h3>')
		   	.text($class)
		   	.appendTo(".students:last");

		$('<div></div>')
		   	.addClass("description")
		   	.appendTo(".full:last");

		$('<div></div>')
			.addClass("student-entry")
			.addClass("differential")
			.appendTo(".description:last");

		$('<form></form>')
			.addClass("new-student-entry")
			.on('submit',function(e) {
			var $newStudentName = $('.new-student-name').val();
			var $newStudentSurname = $('.new-student-surname').val();
			var $thisElem = $(this).closest(".student-entry");
			myToggle();

			$('<div></div>')
			   	.addClass("full")
			   	.addClass("student-list")
			   	.insertBefore($thisElem);

			var $thisFull = $thisElem.prev(".student-list:last");

		    $('<div></div>')
			   	.addClass("kontejner")
			   	.appendTo($thisFull);

			var $thisKont = $thisFull.children(".kontejner:last");

			$('<div></div>')
			   	.addClass("students")
			   	.appendTo($thisKont);

			var $thisStudents = $thisKont.children(".students:last");

			$('<h6></h6>')
			   	.text($newStudentName)
			   	.append(" " + $newStudentSurname)
			   	.appendTo($thisStudents);

			$('<div></div>')
			   	.addClass("description")
			   	.appendTo($thisFull);

			var $descToFill = $thisFull.children(".description");

			 for (var i = 0; i < prvi.length; i++) {
			 	$('<div></div>')
				   	.addClass("kontejner")
				   	.appendTo($descToFill);

				var $loopingKont = $descToFill.children(".kontejner:last");

			   	$('<div></div>')
			   		.addClass("subjects")
			   		.appendTo($loopingKont);

			   	$('<h3></h3>')	
			   		.text(prvi[i])
			   		.appendTo($loopingKont.children(".subjects"));

			 }

			myToggle();

			e.preventDefault();
		})
			.appendTo(".differential:last");


		$('<p></p>')
			.text("Novi učenik:")
			.appendTo(".new-student-entry:last");

		$('<input>')
			.attr({
			    type: 'text',
			    placeholder: 'Ime',
			    required: ""
			})
			.addClass("new-student-name")
			.appendTo('.new-student-entry:last');

		$('<input type="text" class="new-student-surname" placeholder="Prezime" required>')
			.appendTo('.new-student-entry:last');

		$('<input type="submit" class="btn btn-default classes-button" value="Unesi">')
			.appendTo('.new-student-entry:last')

		var $newStudentName = $('.new-student-name').val();
		var $newStudentSurname = $('.new-student-surname').val();
		myToggle();	
	   e.preventDefault();
	});



})
