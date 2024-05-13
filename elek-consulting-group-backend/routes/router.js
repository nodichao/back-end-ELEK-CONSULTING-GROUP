const router  = require('express').Router();
const {AuthMiddleware} = require('../Middlewares/AuthMiddleware');
const {createUser, findUsers, updateUser, deleteUser, findOneUser, loginUser,logoutUser} = require('../controllers/UserController');
const{createArticle,findArticles,updateArticle,deleteArticle, findOneArticle} = require('../controllers/ArticleController');
const {createRDV,findOneRDV,findRDVs,updateRDV,deleteRDV, findProRelatedToRDV} = require('../controllers/RDVController');
//liste des routes relatives a la gestion des utilisateurs
router.post('/api/user',createUser);
router.post('/api/login',loginUser);
router.get('/api/user_logout',logoutUser);
router.get('/api/user', AuthMiddleware,findUsers);
router.get('/api/user/:id',AuthMiddleware, findOneUser);
router.put('/api/user/:id',AuthMiddleware, updateUser);
router.delete('/api/user/:id',AuthMiddleware, deleteUser);


//liste des routes relatives aux Articles
router.post('/api/article',AuthMiddleware,createArticle);
router.get('/api/article',AuthMiddleware, findArticles);
router.get('/api/article/:id',AuthMiddleware,findOneArticle);
router.put('/api/article/:id',AuthMiddleware, updateArticle);
router.delete('/api/article/:id',AuthMiddleware, deleteArticle);

//liste des routes relatives aux RDVs
router.post('/api/rdv',AuthMiddleware,createRDV);
router.get('/api/rdv',AuthMiddleware,findRDVs);
router.get('/api/rdv/:id',AuthMiddleware,findOneRDV);
router.put('/api/rdv/:id', AuthMiddleware,updateRDV);
router.delete('/api/rdv/:id', AuthMiddleware, deleteRDV);

/*router.get('/cookie',(req,res)=>{
    res.cookie('name','jojo',{maxAge:1000*60*60,httpOnly:true});
    res.cookie('isEmployee',true,{maxAge:1000*60*60,httpOnly:true});
    res.send('cookies received');
})*/
/*router.get('/read-cookies',(req,res)=>{
    const cookies = req.cookies;
    console.log(cookies);
    res.json(cookies);
})*/
/*router.get('/read-cookies', (req, res) => {
    try {
      const cookies = req.cookies;
      console.log(cookies.name);
      console.log(cookies.isEmployee);
      res.json(cookies);
    } catch (error) {
      console.error('Erreur lors de la récupération des cookies :', error);
      res.status(500).send('Erreur lors de la récupération des cookies');
    }
  });*/
  



module.exports = router;