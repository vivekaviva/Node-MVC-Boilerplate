
import router from '../config/route';

router.get('/',function(req,res){
    res.send('hello world');
});


module.exports = router;