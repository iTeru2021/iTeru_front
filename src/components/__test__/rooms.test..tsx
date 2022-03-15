import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Rooms from "../rooms";
import { actionTypes } from "redux-form";

let div: HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render target
  div = document.createElement("div");
  document.body.appendChild(div);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(div);
  div.remove();
});

it("正常に描画されること", () => {
  act(() => {
    ReactDOM.render(<Rooms />, div);
  });
});

it("与えた部屋数と描画した部屋数が一致すること", () => {
  act(() => {
    ReactDOM.render(<Rooms rooms={[]} />, div);
  });

  expect(div.getElementsByClassName("rooms")[0].childNodes.length).toBe(0);

  act(() => {
    ReactDOM.render(<Rooms rooms={[{}, {}]} />, div);
  });

  expect(div.getElementsByClassName("rooms")[0].childNodes.length).toBe(2);
});
