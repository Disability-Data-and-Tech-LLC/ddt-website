<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>
body {
  min-height: -webkit-fill-available;
  padding-bottom: 70px;
}
::selection {
  background-color: rgba(23, 145, 182, 0.95);
  color: rgb(215, 249, 255);
}

:root {
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  color: rgb(29, 50, 141);
}
@media screen and (max-width: 800px) {
  :root {
    font-size: 16px;
    line-height: 23px;
  }
}
@media screen and (max-width: 600px) {
  :root {
    font-size: 16px;
    line-height: 21px;
  }
}

body {
  margin: 0;
  z-index: 0;
  background-color: rgb(215, 249, 255);
}

section {
  padding: 4em 7em 3em 3em;
  min-height: calc(100vh - 7em);
}
footer {
  padding-top: 75px;
  text-align: center;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  transition: font-size 0.2s 0s ease-out;
  padding: 10px;
}

h1 {
  font-family: "Aclonica", serif;
  font-size: 3.3em;
  line-height: 1.1em;
  margin-bottom: 1.3em;
}

h2 {
  font-family: "Aclonica", serif;
  font-optical-sizing: auto;
  font-size: 2.5em;
  line-height: 1.4em;
  text-align: center;
  font-weight: 600;
  margin: 40px auto 30px 0.75rem;
}
h3 {
  font-family: "Signika Negative", serif;
  font-optical-sizing: auto;
  /* font-style: italic; */
  font-weight: 600;
  font-size: 2em;
  line-height: 1.1em;
  margin: 20px auto 50px 1.5rem;
}
h4 {
  font-family: "Signika Negative", serif;
  font-optical-sizing: auto;
  font-size: 1.75em;
  line-height: 1.1em;
  margin: 20px auto 50px 2.25rem;
}
h5 {
  font-family: "Signika Negative", serif;
  font-optical-sizing: auto;
  font-size: 1.5em;
  line-height: 1.1em;
  margin: 20px auto 30px 3rem;
}
h6 {
  font-family: "Signika Negative", serif;
  font-optical-sizing: auto;
  font-size: 1.25em;
  line-height: 1.1em;
  margin: 20px auto 30px 3.75rem;
}
p {
  font-family: "Signika Negative", serif;
  font-optical-sizing: auto;
  font-size: 1.5em;
  line-height: 1.7em;
  margin: 10px auto 10px 4.5rem;
}
ul {
  list-style: none;
}
.byline {
  font-size: 2.25em;
}
</style>
