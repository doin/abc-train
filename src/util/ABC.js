/**
 * 65-90|A-Z 97-122|a-z
 * @author doin
 */

class ABC {
    constructor() {
    }

    /**
     * 返回大小写
     * @param _isMin boolean=true
     */
    static getRandmonLetter(_isMin=true) {
        return _isMin ?  String.fromCharCode(ABC.getRandmon(65, 90)) : String.formCharCode(ABC.getRandmon(97, 122));
    }

    static  getRandmon(n=0, m) {
        return (n-1) + Math.ceil(Math.random()*(m-n));
    }
}

export default ABC;