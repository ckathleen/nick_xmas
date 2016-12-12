$( document ).ready(function() {
	let current_section = 1
	$("#body").keydown(function(e) {
		if (e.which === 40) { //down
			e.preventDefault()
			let nextSection = $('.section_' + (current_section+1))
			if (nextSection.length) {
				$(document).trigger('newSection', nextSection)
				current_section += 1
				$('html, body').animate({
        scrollTop: $(nextSection).offset().top
      }, 500)
		}
	} 
		if (e.which === 38) { //up
			e.preventDefault()
		  let prevSection = $('.section_' + (current_section-1))
		  if (prevSection.length) {
		  	$(document).trigger('newSection', prevSection)
			  console.log('prevSection', prevSection)
		  	current_section -= 1
	  	 	$('html, body').animate({
	      scrollTop: $(prevSection).offset().top
	    }, 500)
		}
	}
})

         
  $(document).on('newSection', function(event, section) {
  	if ($(section).attr('id') === 'phoneContainer') {
  		console.log('show phone')
  	}
  })

	//PHONE SECTION
	let text_messages = ['and even though', 'we hate texing', 'soooo much']
	_.each(text_messages, function(message, index) {
		let sms = $('<div></div>')
		sms.html(message)
		sms.addClass('sms')
		if (index % 2 == 0) {
			sms.css('background', '#ccc')
		} else {
			sms.css('background', '#5BC236')
			sms.css('left','25%')
		}

		sms.stop(true, true).delay(index * 800).animate({
		opacity: 1,
    bottom: '+=' + (200 - 30 * (index + 1)),
  }, 500, function() {})
		$('#phone').append(sms)
	})

	//BAR CHART SECTION
	//text
	$(".rotate").textrotator({
	  animation: "flipUp", //fade, flip, flipUp, flipCube, flipCubeUp and spin.
	  separator: ",", //(|, &, * etc.) by yourself using this field.
	  speed: 2000 // How many milliseconds until the next word show.
	});

	//chart
	let colHeight = 50
	let columns = ['fun', 'laughter', 'growth', 'knowledge']
	let colors = ['red', 'green', 'red', 'green']

	let labeldiv = $('<div></div>')
	labeldiv.css('display', 'flex')
	.css('justify-content', 'space-around')
	.css('flex-direction', 'column')
	$('#barchart').append(labeldiv)
	_.each(columns, function(column,index) {
		let label = $('<p></p>')
		label.css('margin', colHeight/2)
		// label.css('height', colHeight)
		label.css('text-align', 'center')
		label.html(column)
		$(labeldiv).append(label)
	})

	let chart = $('<div></div>')
	chart.addClass('chart')
	chart.css('padding-left', '100px')
	chart.css('border-bottom', '1px gray')
	chart.css('border-left', '1px gray')
	chart.css('display', 'flex')
	chart.css('position', 'absolute')
	chart.css('flex-direction', 'column')
	chart.css('justify-content', 'space-between')

	$('#barchart').append(chart)

	_.each(columns, function(column, index) {
		let col = $('<div></div>')
		col.addClass('bar')
		// col.css('margin', '10px')
		col.css('border', '3px goldenrod solid')
		col.css('height', colHeight)
		col.css('width', 50 + (Math.random() * 200))
		// col.css('bottom', 0)
		col.css('background', colors[index])
		$(chart).append(col)
		if (column !== 'sleep') {
			col.stop(true, true).delay(1000).animate({
				//top: '+=300',
    		width: '+=700',
  		}, 500, function() {})
		}
	})

	// CHAPTER
	// let cover = $('<div></div>')
	// cover.addClass('cover')
	// cover.html('Nick and Casey')

	// let pageRight = $('<div></div>')
	// pageRight.addClass('page')
	// pageRight.html('As we come upon a new year...')

	// let pageLeft = $('<div></div>')
	// pageLeft.addClass('page')
	// pageLeft.html('I couldn\'t be more excited to start a new chapter with you')
	// $('#book').append(cover).append(pageRight).append(pageLeft)

	$('#book').on('click', function() {
		$(this).toggleClass('open')
	})
})
