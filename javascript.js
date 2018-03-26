$(document).ready(function(){

// responsive navigation
	function myFunction() {
	    var x = document.getElementById("myTopnav");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
	    }
	};

	myFunction()

// toggle 
	function myToggle() {
		$(".kontejner").click(function(){
		    $(this).next().toggle();
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
		});
	};

	displayEdit();

  	$( function() {
  		if( $( "#dialog-confirm" ).length > 0) {

  			/*
			// ovaj kod nece raditi
			// trebas naci i izvaditi cijeli dijalog iz DOMa i onda kada netko kline nacrtati lightbox i zakaciti ga u njega

		    $( "#dialog-confirm" ).dialog({
			    resizable: false,
			    height: "auto",
			    width: 400,
			    modal: true,
			    buttons: {
			        "Spremi promjene": function() {
			          $( this ).dialog( "close" );
			        },
			        Cancel: function() {
			          $( this ).dialog( "close" );
			        }
			    }
		    });
		    */
  		}
  	});

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
				$(this).closest(".full").remove()
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

	$(".new-student-entry").on('submit',function(e) {
		var $newStudentName = $('.new-student-name').val();
		var $newStudentSurname = $('.new-student-surname').val();

		myToggle();

		$('<div></div>')
		   	.addClass("full")
		   	.addClass("student-list")
		   	.insertBefore(".student-entry");

	    $('<div></div>')
		   	.addClass("kontejner")
		   	.appendTo(".full:last");

		$('<div></div>')
		   	.addClass("students")
		   	.appendTo(".kontejner:last");

		$('<h3></h3>')
		   	.text($newStudentName)
		   	.append(" " + $newStudentSurname)
		   	.appendTo(".students:last");

		myToggle();
	})

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
				event.stopPropagation();
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
				$(this).closest(".full").remove()
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


	$("#new-class").on('submit', function (e) {

		var $class = $('#student-classes').val();
		
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

		myToggle();	

	   e.preventDefault();
	});



})
