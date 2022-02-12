<template>
  <div id="wrapper">
    <main>
      <h1>Events</h1>
      <my-component />
    </main>
  </div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'
import MyComponent from './MyComponent/MyComponent.vue'

export default {
  name: 'landing-page',
  components: { SystemInformation, MyComponent },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  padding: 3rem;
  width: 100vw;
}

</style>
