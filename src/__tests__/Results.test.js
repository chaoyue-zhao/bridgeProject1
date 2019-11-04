import React from 'react';
import Results from '../components/Results';
import renderer from 'react-test-renderer';
import { Provider } from "react-redux";
import {store} from "../store";

describe ('Results', () => {
  it('render properly', () => {
    const element = renderer.create(
      <Provider store={store}>
        <Results
        />
      </Provider>
    ).toJSON();
    expect(element).toMatchSnapshot();
  });
});