/* DO WHATEVER YOU WANT HERE */

const createEnumerableProperty = prop => prop;
const createNotEnumerableProperty = prop => prop;   // don't work
const createProtoMagicObject = () => {
    let magicObject = () => {};
    magicObject.prototype = magicObject.__proto__;
    return magicObject;
};

let count = 0;
const incrementor = () => {
    count++;
	return incrementor;
};
incrementor.valueOf = () => count;

let countForAsyncIncr = 0;
const asyncIncrementor = () => {
    countForAsyncIncr++;
    return countForAsyncIncr;
};

const createIncrementer = () => {};                 // don't work

/* Return same argument not earlier than in one second, and not later, than in two */

const returnBackInSecond = back => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(back);
        }, 1000);
    });
    return promise;
};

const getDeepPropertiesCount = () => {};            // don't work

const createSerializedObject = () => null;

const toBuffer = () => {};                          // don't work
const sortByProto = (array) => array.sort((a, b) => a - b);

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;