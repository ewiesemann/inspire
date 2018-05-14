function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		var template = `
			<p>${quote.quote}</p>
			<p>${quote.author}</p>
		`
		document.getElementById("quote").innerHTML = template
		console.log('What is the quote', quote)
	})
	
}
