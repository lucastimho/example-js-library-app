<template>
  <div class="about">
    <button @click="go">Click Here to Animate</button>
    <div ref="message">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script>
import { rotate } from "../animate.js";
export default {
  methods: {
    go() {
      rotate(this.$refs.message);
    },
  },
};
</script>
