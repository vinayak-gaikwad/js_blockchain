const {STARTING_BALANCE}  = require('../util/config')

class Wallet {
    constructor(){
        this.balance = STARTING_BALANCE
        this.publicKey = ''
    }
}

module.exports = Wallet