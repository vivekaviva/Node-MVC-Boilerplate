const crypto = require('crypto');

class Crypto {

    constructor(message){
        this.message = message;
        this.secret = 'abcdefg';
    }

    hash(){
        return crypto.createHmac('sha256', this.secret)
        .update(this.message)
        .digest('hex');
    }
}

export default Crypto;