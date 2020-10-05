<template>
  <div>
    <p>
      function <span class="function">onCreate</span>()<br />

      <span v-for="(value, name, i) of settings" :key="`${value}` + i">
        server.<span class="function">setGameSetting</span> 
          (<span class="string">"{{ name }}"</span>, 
          <span class="bool"> {{ value }}</span>)
          <br />
      </span><br />
      <span class="bool">if</span> (is_start) <span class="bool">then</span> <br />
      server.<span class="function">setCurrency</span>
        (<span class="number">{{currency.cash}}</span>, 
        <span class="number">{{currency.research}}</span>)
        <br />
      <span class="bool">end</span><br />
      <br />
    </p>
  </div>
</template>
<script>
export default {
  props: {
    settings: Object,
    currency: Object,
  },
};
</script>
<style scoped>
p {
  color: white !important;
}
.function {
  color: var(--function);
}
.bool {
  color: var(--boolean);
  font-weight: bold;
}
.number {
  color: var(--number);
}
.string {
  color: var(--string);
}
.comment {
  color: var(--comment);
}
</style>