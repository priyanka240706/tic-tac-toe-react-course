import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from './contexts/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider> 
      {/* Provider is from index.js */}
      {/* index.js passes the app.js component */}
      {/* App is wrapped to give it access to the theme 
      state and toggle function provided by 
      the context. */}
      <App />
    </Provider>
  </React.StrictMode>
);

// the tree
// index.js
//  └── ThemeContextProvider
//       └── OtherProvider(s)
//            └── App
//                 └── ThemeProvider (styled-components)
//                      └── Router
//                           └── Pages & Components
