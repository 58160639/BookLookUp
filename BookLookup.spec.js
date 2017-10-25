
test('AmazonSearch', ()=> {
    //Arrange
    const AmazonSearch = jest.fn()
        .mockReturnValue({
            isbn:'978-1117891-234',
            title:'JavaScript Good Ports',
            image:'/cover/xyzji.jpg'
        })
    })