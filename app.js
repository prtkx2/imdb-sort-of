var expr= require('express')
var request= require('request')

app= expr()

app.get("/",function(req,res){
request("https://api.themoviedb.org/3/trending/all/day?api_key=49f0065593cacbf8eac38e6fe9aa5350",function(error,response,body){
    if (!error) {
        var trending = JSON.parse(body)
        res.render("home.ejs",{trending:trending})
    }
})
    

})
app.get('/search',function (req,res) {
    title=req.query.title
    var url = "https://api.themoviedb.org/3/search/movie?api_key=49f0065593cacbf8eac38e6fe9aa5350&language=en-US&query=" + title
    request(url, function (error, response, body) {

        if (!error) {
            var result = JSON.parse(body)
            res.render("searchresult.ejs",{result: result})
        }

    })
    
})

app.listen(8080, process.env.IP,function() {
    console.log('app works')
})