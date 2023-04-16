import reducer, { setValue } from './../src/store/searchValueSlice';

describe('searchValueSlice test', () => {
  it('should return default state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual('random');
  });
  it('should set new value', () => {
    const action = { type: setValue.type, payload: 'test' };
    const result = reducer('', action);
    expect(result).toEqual('test');
  });
});
