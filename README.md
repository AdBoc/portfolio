<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<h1 align="center">
  Portfolio Website
</h1>

* Website made with Gatsby, 
* Written mainly in Typescript,  
* Styled components were used to style it,
* Internationalization with React i18n.

Biggest challenge that I overcomed in this project: 
    
It is server side rendered app so while implementing dark mode with local storage,
generated webside has no idea about window object in which localstorage is found. 
In order to get rid of flashing effect during app rehydration I had to write small script in gatsby-sr.js that 
checks localstorage and attaches html class .dark before websites first render.
