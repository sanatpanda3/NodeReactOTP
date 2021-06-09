import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { login } from './api';
import App from './App';

(async () => {
  // try to login with cookie
  const { user, requireMfa } = await login();

  // init app
  const domContainer = document.createElement('div');
  document.body.appendChild(domContainer);
  if(user) {
    console.log('Your OTP is : ' + user.otp);
  }
  ReactDOM.render(<App user={user} requireMfa={requireMfa} />, domContainer);
})();
