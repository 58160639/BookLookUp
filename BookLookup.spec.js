function AmazonService(authService) {
    this.authService = authService

    this.signIn = (Search) => {
        var book = this.authService(Search)
        return {
            title: book.title,
            image: book.image,
            isbn: "9781117891234"
        }
    }
}

test('AmazonSearch', ()=> {
    //Arrange
    const mockAmazonSearch = jest.fn()
        .mockReturnValue({
            title:'JavaScript Good Ports',
            image:'/cover/xyzji.jps',
            isbn:'9781117891234'
        })
    var app = new AmazonService(mockAmazonSearch)

    //Act
   
    var Search = "9781117891234"
    var result = app.signIn(Search)

    //Assert
    expect(mockAmazonSearch).toHaveBeenCalled()
    expect(mockAmazonSearch).toHaveBeenCalledWith(Search)
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('cover')
    expect(result).toHaveProperty('isbn')
    expect(result.title).toBe('JavaScript Good Ports')
    expect(result.image).toBe('/cover/xyzji.jps')
    expect(result.isbn).toHaveLength(13)

})