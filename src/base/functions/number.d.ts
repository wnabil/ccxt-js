declare const TRUNCATE = 0;
declare const ROUND = 1;
declare const ROUND_UP = 2;
declare const ROUND_DOWN = 3;
declare const DECIMAL_PLACES = 2;
declare const SIGNIFICANT_DIGITS = 3;
declare const TICK_SIZE = 4;
declare const NO_PADDING = 5;
declare const PAD_WITH_ZERO = 6;
declare const precisionConstants: {
    ROUND: number;
    TRUNCATE: number;
    ROUND_UP: number;
    ROUND_DOWN: number;
    DECIMAL_PLACES: number;
    SIGNIFICANT_DIGITS: number;
    TICK_SIZE: number;
    NO_PADDING: number;
    PAD_WITH_ZERO: number;
};
declare function numberToString(x: any): string | undefined;
declare const truncate_to_string: (num: number | string, precision?: number) => string;
declare const truncate: (num: number | string, precision?: number) => number;
declare function precisionFromString(str: string): number;
declare const decimalToPrecision: (x: string, roundingMode: number, numPrecisionDigits: any, countingMode?: number, paddingMode?: number) => string;
declare function omitZero(stringNumber: string): string;
export { numberToString, precisionFromString, decimalToPrecision, truncate_to_string, truncate, omitZero, precisionConstants, ROUND, TRUNCATE, ROUND_UP, ROUND_DOWN, DECIMAL_PLACES, SIGNIFICANT_DIGITS, TICK_SIZE, NO_PADDING, PAD_WITH_ZERO, };