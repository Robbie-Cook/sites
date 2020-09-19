/**
 * A Breaker.
 */
export default class Breaker {
  static breaker(
    breakpoints: number[]
  ): (type: string, values: string[]) => string {
    return (cssType, input): string =>
      this.getQueries({
        type: cssType,
        values: input,
        breakpoints,
      });
  }

  static getQueries(args: {
    type: string;
    values: string[];
    breakpoints: number[];
  }): string {
    const { values, breakpoints, type } = args;

    if (values?.length < 2) {
      return "";
    }
    if (values.length !== breakpoints.length) {
      return "";
    }

    const queries = [];
    for (let index = 0; index < values.length; index++) {
      queries.push(`
  @media only screen and (max-width: ${breakpoints[index]}px) {
    ${type}: ${values[index]}s;
  }
      `);
    }
    const queriesString = queries.join("\n");

    return queriesString;
  }
}
