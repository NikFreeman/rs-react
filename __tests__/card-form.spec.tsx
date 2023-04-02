import React from 'react';
import { render } from '@testing-library/react';
import { BirthplaceEnum } from '../src/models/inform-form';
import DetailForm from '../src/components/card-form';

describe('render DetailForm component', () => {
  const testData = {
    firstName: 'John',
    lastName: 'Smith',
    birthday: '2023-03-27',
    birthplace: BirthplaceEnum.belarus,
    sex: 'male',
    personalData: true,
    picture: '111.jpg',
  };
  it('test render test', () => {
    const { getByText } = render(<DetailForm detail={testData} />);
    expect(getByText(/John/)).toBeInTheDocument();
    expect(getByText(/Smith/)).toBeInTheDocument();
    expect(getByText(/2023-03-27/)).toBeInTheDocument();
    expect(getByText(/Belarus/)).toBeInTheDocument();
    expect(getByText(/male/)).toBeInTheDocument();
    expect(getByText(/Yes/)).toBeInTheDocument();
    expect(getByText(/111.jpg/)).toBeInTheDocument();
  });
});
