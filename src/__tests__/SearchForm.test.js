import React from 'react';
import SearchForm from './../components/SearchForm.js';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'
import { Provider } from "react-redux";
import {store} from "../store";

describe ('SearchForm', () => {
  it('render properly', () => {
    const element = renderer.create(
      <Provider store={store}>
        <SearchForm
        />
      </Provider>
    ).toJSON();
    expect(element).toMatchSnapshot();
  });