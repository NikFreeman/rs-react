import React from 'react';
import { render } from '@testing-library/react';

import DetailForm from '../src/components/card-form';

describe('render DetailForm component', () => {
  const testData = {
    firstName: 'John',
    lastName: 'Smith',
    birthday: '2023-03-27',
    birthplace: 'Belarus',
    sex: 'male',
    personalData: true,
    avatar: '111.jpg',
  };
  it('test First Name', () => {
    const { getByText } = render(<DetailForm detail={testData} />);
    const linkElement = getByText(/John/);
    expect(linkElement).toBeInTheDocument();
  });
  it('test Last Name', () => {
    const { getByText } = render(<DetailForm detail={testData} />);
    const linkElement = getByText(/Smith/);
    expect(linkElement).toBeInTheDocument();
  });
  it('test Birthday', () => {
    const { getByText } = render(<DetailForm detail={testData} />);
    const linkElement = getByText(/2023-03-27/);
    expect(linkElement).toBeInTheDocument();
  });
  it('test Birthplace', () => {
    const { getByText } = render(<DetailForm detail={testData} />);
    const linkElement = getByText(/Belarus/);
    expect(linkElement).toBeInTheDocument();
  });
  it('test sex', () => {
    const { getByText } = render(<DetailForm detail={testData} />);
    const linkElement = getByText(/male/);
    expect(linkElement).toBeInTheDocument();
  });
  it('test PersonalData true', () => {
    const { getByText } = render(<DetailForm detail={testData} />);
    const linkElement = getByText(/Yes/);
    expect(linkElement).toBeInTheDocument();
  });
  it('test Avatar', () => {
    const { getByText } = render(<DetailForm detail={testData} />);
    const linkElement = getByText(/111.jpg/);
    expect(linkElement).toBeInTheDocument();
  });
});
