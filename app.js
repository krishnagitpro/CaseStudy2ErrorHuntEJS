const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
bodyParser = require('body-parser'); //Part #1, Point 2 export bodyparser 

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/books/addbook",
        title:"Add Book"
    },
    {
        link:"/authors/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter')(nav); //Part #1, Point 3 Part #2 Point 6
const booksRouter = require('./src/routes/booksroute')(nav); //Part #2 Point 6
const authorsRouter = require('./src/routes/authorsroute')(nav); //Part #2 Point 6

const app = new express; //Part #1, Point 1


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors()); //Part #2 Point 7
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter);//Part #1 Point 3 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });//Part #1 Point 5