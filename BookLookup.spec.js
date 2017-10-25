function BookSearch(isbnService) {
    this.isbnService = isbnService

    this.search = (name, cover,isbn) => {
        var web = this.isbnService(name, cover,isbn)
        return {
            name: web.name,
            cover: web.cover,
            isbn: '978-1117891-234'
        }
    }
}

test('AmazonSearch', ()=> {
    //Arrange
    const mockAmazonSearch = jest.fn()
        .mockReturnValue({
            isbn:'978-1117891-234',
            title:'JavaScript Good Ports',
            image:'/cover/xyzji.jpg'
        })
    var app = new BookSearch(mockAmazonSearch)

    //Act
    var name = 'JavaScript Good Ports'
    var cover = '/cover/xyzji.jpg'
    var isbn = '978-1117891-234'
    var result = app.search(name, cover,isbn)

    //Assert
    expect(mockAmazonSearch).toHaveBeenCalled()
    expect(mockAmazonSearch).toHaveBeenCalledWith(name, cover,isbn)
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('cover')
    expect(result).toHaveProperty('isbn')
    expect(result.title).toEqual('JavaScript Good Ports')
    expect(result.image).toEqual('/cover/xyzji.jpg')
    expect(result.isbn).toEqual('978-1117891-234')

})