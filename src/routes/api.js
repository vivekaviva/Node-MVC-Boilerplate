import router from '../config/route';

import Crypto from '../App/Http/Library/Crypto';

router.get('/test',function(req,res){
    const crypto = new Crypto(req.query.str);
    res.send(crypto.hash());
})

module.exports = router;
