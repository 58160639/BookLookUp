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
    const mock = jest.fn()
        .mockReturnValue({
            title:'JavaScript Good Ports',
            image:'/cover/xyzji.jps',
            isbn:'9781117891234'
        })
    var app = new AmazonService(mock)

    //Act
   
    var Search = "9781117891234"
    var result = app.signIn(Search)

    //Assert
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith(Search)
    expect(result).toHaveProperty('title')
    expect(result).toHaveProperty('image')
    expect(result).toHaveProperty('isbn')
    expect(result.title).toBe('JavaScript Good Ports')
    expect(result.image).toBe('/cover/xyzji.jps')
    expect(result.isbn).toHaveLength(13)

})