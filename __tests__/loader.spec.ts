import axios from 'axios';
import loader from '../src/data/loader';
jest.mock('axios');

// interface ITestData {
//   id: number;
//   url: string;
// }
// describe('fetchPhoto', () => {
//   describe('when API call is successful', () => {
//     it('should return users list', async () => {
//       const baseUrl = 'https://api.unsplash.com/search/photos?';
//       const CLIENT_ID = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
//       const url = `${baseUrl}query=test&per_page=12&orientation=landscape&client_id=${CLIENT_ID}`;

//       const photos: ITestData = { id: 1, url: 'first' };
//       (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve(photos));

//       await expect(loader<ITestData>('test')).resolves.toEqual(photos);
//       expect(axios.get).toHaveBeenCalledWith(url);
//     });
//   });
// });
// jest.mock('axios');

test('should fetch data', async () => {
  const baseUrl = 'https://api.unsplash.com/search/photos?';
  const CLIENT_ID = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
  const url = `${baseUrl}query=test&per_page=12&orientation=landscape&client_id=${CLIENT_ID}`;
  const users = [{ photo: 'Photo' }];
  const resp = { data: users };
  (axios.get as jest.Mock).mockResolvedValue(resp);

  const data = await loader('test');
  return expect(data).toEqual(users);
  return expect(axios.get).toHaveBeenCalledWith(url);
});
test('should ', async () => {
  const baseUrl = 'https://api.unsplash.com/search/photos?';
  const CLIENT_ID = 'SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
  const url = `${baseUrl}query=test&per_page=12&orientation=landscape&client_id=${CLIENT_ID}`;
  const users = [{ photo: 'Photo' }];
  const resp = { data: users };
  (axios.get as jest.Mock).mockResolvedValue(resp);

  const data = await loader('test');
  expect(data).toEqual(users);
  return expect(axios.get).toHaveBeenCalledWith(url);
});
