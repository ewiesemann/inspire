function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		var template = `
			<h4>${quote.quote}</h4>
			<h4>${quote.author}</h4>
		`
		document.getElementById("quote").innerHTML = template
		console.log('What is the quote', quote)
	})
	
}
