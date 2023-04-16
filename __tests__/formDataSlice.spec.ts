import { FormInput } from './../src/models/inform-form';
import { BirthplaceEnum } from '../src/models/inform-form';
import reducer, { addDataForm } from './../src/store/formDataSlice';
describe('formDataSlice test', () => {
  it('should return default state', () => {
    const result = reducer(undefined, { type: '' });
    expect(result).toEqual({ data: [] });
  });
  it('should set new value', () => {
    const testData: FormInput = {
      firstName: 'John',
      lastName: 'Smith',
      birthday: '2023-03-27',
      birthplace: BirthplaceEnum.belarus,
      sex: 'male',
      personalData: true,
      picture: '111.jpg',
    };
    const action = { type: addDataForm.type, payload: testData };
    const result = reducer({ data: [] }, action);
    expect((result.data[0] as FormInput).firstName).toEqual(testData.firstName);
  });
});
