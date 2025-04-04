/**
 * The logical NOT operator: !, the exclamation mark, also called a "bang". It translates truthy values to false and falsy values to true. Get it?
 * Doing that twice translates truthy values to true and falsy values to false.
 * This is double negation. If a statement is true, then it is not the case that the statement is not true. Complicated, but just remember !! results in a boolean.
 * true for truthy values, false for falsy values.
 * @href https://gist.github.com/arthurvi/66cb1e2bcfc92f99f465e0db04264367
 */
const isNotNotTrue = (value: any) => !!value;

export default isNotNotTrue;
