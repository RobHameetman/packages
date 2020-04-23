export type Untyped<T> = Omit<T, '__type'>;

export const isUntyped = <T>(value: unknown): value is Untyped<T> => {
  return typeof value === 'object'
    && value !== null
    && !('__type' in value);
};
