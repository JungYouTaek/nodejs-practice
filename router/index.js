module.exports = function(app) {
	//  get all books
	app.get('/api/books', function(req, res) {
		res.end();
	});

	// get single book
	app.get('/api/books/:book_id', function(req, res) {
		res.end();
	});

	// get book by author
	app.get('/api/books/author/:author', function(req, res) {
		res.end();
	});

	// create book
	app.post('/api/books', function(req, res) {
		res.end();
	});

	// update the book
	app.put('/api/books/:book_id', function(req, res) {
		res.end();
	});

	// delete book
	app.delete('/api/books/:book_id', function(req, res) {
		res.end()
	});
}
