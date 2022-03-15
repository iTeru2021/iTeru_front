import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Header from "../header";
import { actionTypes } from "redux-form";

let container: HTMLDivElement;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
});

it("拠点名の有無に関わらず正常に描画されること", () => {
  act(() => {
    ReactDOM.render(<Header />, container);
  });
  expect(container.textContent).toBe("iTeru＝");

  act(() => {
    ReactDOM.render(<Header showingLocationName="新宿" />, container);
  });
  expect(container.textContent).toBe("iTeru新宿＝");
});
