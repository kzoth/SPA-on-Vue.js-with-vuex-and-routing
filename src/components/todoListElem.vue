<template lang="pug">
  .todo-elem(:class='{checked: todo.checked}')
    label.label
      .input-wrapper
        input(
          type='checkbox'
          @change='checkTodoAsCompleted'
          :checked='todo.checked'
        ).input
      .title  {{todo.name}}

    .button
      router-link(
        tag='button'
        :to='`/view/${todo.name}`'
      ).view   →
    .button
      button(
        type='button'
        @click='removeExistedTodo'
      ).remove  x

</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    todo: Object
  },
  methods: {
    ...mapMutations(['removeTodo', 'checkTodo']),
    removeExistedTodo() {
      this.removeTodo(this.todo.id);
    },
    checkTodoAsCompleted(e) {
      const todoElem = {
        ...this.todo,
        checked: e.target.checked
      }
      this.checkTodo(todoElem)
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-elem {
    display: flex;
    align-items: center;

    &:hover {
      .remove {
        visibility: visible;
      }
      .view {
        visibility: visible;
      }
    }
  }

  .checked .title {
    text-decoration: line-through;
  }

  .label {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .input-wrapper {
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    padding: 15px 0px;
    display: block;
    line-height: 1.2;
  }

  .button {
    width: 40px;
  }

  .remove {
    background: transparent;
    border: none;
    color: firebrick;
    cursor: pointer;
    font-size: 20px;
    visibility: hidden;
  }

  .view {
    visibility: hidden;
    cursor: pointer;
  }
</style>