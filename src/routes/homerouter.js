const express = require('express'); 
const homeRouter = express.Router();

function router(nav) {//Part #2 Point 6
    homeRouter.get('/', function (req, res) {

        res.render('home', {nav});
    
    })

    return homeRouter;
}

module.exports = router;