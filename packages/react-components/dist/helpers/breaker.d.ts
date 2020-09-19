/**
 * A Breaker.
 */
export default class Breaker {
    static breaker(breakpoints: number[]): (type: string, values: string[]) => string;
    static getQueries(args: {
        type: string;
        values: string[];
        breakpoints: number[];
    }): string;
}
