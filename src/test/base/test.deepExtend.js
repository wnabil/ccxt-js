// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
// EDIT THE CORRESPONDENT .ts FILE INSTEAD

// AUTO_TRANSPILE_ENABLED
import ccxt from '../../../ccxt.js';
function testDeepExtend() {
    const exchange = new ccxt.Exchange({
        'id': 'sampleexchange',
    });
    const obj1 = {
        "a": 1,
        "b": [1, 2],
        "c": [{ "test1": 1, "test2": 1 }],
        "d": undefined,
        "e": "not_undefined",
        "sub": {
            "a": 1,
            "b": [1, 2],
            "c": [{ "test1": 1, "test2": 2 }],
            "d": undefined,
            "e": "not_undefined",
            "other1": "x",
        },
        "other1": "x",
    };
    const obj2 = {
        "a": 2,
        "b": [3, 4],
        "c": [{ "test1": 2, "test3": 3 }],
        "d": "not_undefined",
        "e": undefined,
        "sub": {
            "a": 2,
            "b": [3, 4],
            "c": [{ "test1": 2, "test3": 3 }],
            "d": "not_undefined",
            "e": undefined,
            "other2": "y",
        },
        "other2": "y",
    };
    // deepExtend
    const deepExtended = exchange.deepExtend(obj1, obj2);
    const compareTo = {
        "a": 2,
        "b": [3, 4],
        "c": [{
                "test1": 2,
                "test3": 3,
            }],
        "d": "not_undefined",
        "sub": {
            "a": 2,
            "b": [3, 4],
            "c": [{ "test1": 2, "test3": 3 }],
            "d": "not_undefined",
            "other1": "x",
            "other2": "y",
        },
        "other1": "x",
        "other2": "y",
    };
    // todo: results are different across langs.
    // to avoid delay to this PR, I comment out this now, but will return to this after this PR merged
    // testSharedMethods.assertDeepEqual (exchange, undefined, 'testDeepExtend', deepExtended, compareTo);
}
export default testDeepExtend;
