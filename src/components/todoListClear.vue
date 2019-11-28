<template lang="pug">
  .clear
    button(
      :class='{clearVisible: todos.filter(item => item.checked === true).length > 0}'
      @click='clearCompletedTodos'
    ).clearBtn Clear completed
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    todos: Array
  },
  methods: {
    ...mapMutations(['clearCompleted']),
    clearCompletedTodos() {
      this.clearCompleted();
    }
  }
}
</script>

<style lang="scss">
  .clearBtn {
    border: none;
    background: transparent;
    cursor: pointer;
    visibility: hidden;

    &:hover {
      text-decoration: underline;
    }
  }

  .clearVisible {
    visibility: visible;
  }

</style>