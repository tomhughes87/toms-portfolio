import React, { useEffect } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../Application.tsx';
import userEvent from '@testing-library/user-event';
// import GeneratorFunc, { copyFunc2, checkLengthOfRandomWord } from './GeneratorFunc';
import closeNotificationBar from './index'

test('notifcation bar is in doc', () => {
  render(<App />);
  const NotiMainCont = document.getElementById('NotificationBarContainer')
  expect(NotiMainCont).toBeInTheDocument();
});

test('notifcation text doc', () => {
  render(<App />);
  const NotiText = document.getElementById('NotificationBarText')
  expect(NotiText).toBeInTheDocument();
});

test('notifcation close Btn is in doc', () => {
  render(<App />);
  const NotiCloseBtn = document.getElementById('NotificationBarCloseBtn')
  expect(NotiCloseBtn).toBeInTheDocument();
});

test('close btn remove all elements of the notification bar', () => {
  render(<App />);
  const NotiCloseBtn = document.getElementById('NotificationBarCloseBtn')
  fireEvent.click(NotiCloseBtn)
  const NotiBarContainer = document.getElementById('NotificationBarContainer')
  console.log({NotiBarContainer})
  expect(NotiBarContainer).toBeNull();
});
