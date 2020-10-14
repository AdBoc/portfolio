const React = require('react')

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `(() =>{try{var mode=localStorage.getItem('theme');if(mode === 'dark'){document.documentElement.classList.add("dark");window.__theme="dark"}else{window.__theme="light"}}catch(e){}})()`,
      },
    }),
  ])
}