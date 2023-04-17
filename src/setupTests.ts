import '@testing-library/jest-dom/extend-expect';
import { server } from './mocks/server';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  // This is the solution to clear RTK Query cache after each test
  //store.dispatch(apiSlice.util.resetApiState());
});
afterAll(() => server.close());
