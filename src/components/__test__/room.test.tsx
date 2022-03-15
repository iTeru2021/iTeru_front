import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Room from "../room";
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
    ReactDOM.render(<Room />, div);
  });
});

it("正常に部屋名が表示できること", () => {
  act(() => {
    ReactDOM.render(<Room roomName="A12" />, div);
  });
  expect(div.textContent).toBe("A12");
});

it("isUsing === true なら赤、false なら緑であること", () => {
  act(() => {
    ReactDOM.render(<Room isUsing={true} />, div);
  });
  expect(
    div.getElementsByClassName("room")[0].classList.contains("room-close")
  ).toBe(true);

  act(() => {
    ReactDOM.render(<Room isUsing={false} />, div);
  });
  expect(
    div.getElementsByClassName("room")[0].classList.contains("room-open")
  ).toBe(true);
});

it("isUsing === true ならelapsedMinutesを表示しないこと", () => {
  act(() => {
    ReactDOM.render(<Room elapsedMinutes={10} isUsing={true} />, div);
  });
  expect(div.getElementsByClassName("room-elapsedMinutes")[0].textContent).toBe(
    ""
  );
});

it("elapsedMinutesが60分ごとに繰り上げられた上で描画されること", () => {
  // Note: isUsingの初期値は true

  act(() => {
    ReactDOM.render(<Room elapsedMinutes={0} isUsing={false} />, div);
  });
  expect(div.getElementsByClassName("room-elapsedMinutes")[0].textContent).toBe(
    "0:0"
  );

  act(() => {
    ReactDOM.render(<Room elapsedMinutes={59} isUsing={false} />, div);
  });
  expect(div.getElementsByClassName("room-elapsedMinutes")[0].textContent).toBe(
    "0:59"
  );

  act(() => {
    ReactDOM.render(<Room elapsedMinutes={60} isUsing={false} />, div);
  });
  expect(div.getElementsByClassName("room-elapsedMinutes")[0].textContent).toBe(
    "1:0"
  );
});
