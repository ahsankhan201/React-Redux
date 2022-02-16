import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


// @ts-expect-error ts-migrate(2593) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );


  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  expect(getByText(/learn/i)).toBeInTheDocument();
});
