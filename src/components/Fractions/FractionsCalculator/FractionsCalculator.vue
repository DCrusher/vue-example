<template>
  <article>
      <h3>{{ caption }}</h3>
      <Expression :count="count" />
      <button @click="onClickAdd">Add</button>
  </article>
</template>

<script>
import Expression from 'components/Fractions/Expression/Expression'

export default {
  name: 'FractionsCalculator',
  components: {
    Expression
  },
  data () {
    return {
      caption: 'Fractions Calculator',
      count: 0
    }
  },
  methods: {
    onClickAdd (event) {
      this.count++
    }
  }
}
</script>
