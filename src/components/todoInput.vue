<template lang="pug">
  .todo-input
    input(
      type='checkbox'
      :class='{"check-all-visible": todos.length > 0}'
      @change='checkAllTodos'
      :value='checkAllTodos'
    ).check-all-btn
    .error {{validation.firstError('todo.name')}}
    input(
      type='text',
      placeholder='to do',
      autofocus
      v-model='todo.name'
      :class='{"valid-error": validation.hasError("todo.name")}'
      @keydown.enter='addNewTodo'
    ).input
</template>

<script>
import { Validator } from 'simple-vue-validator';
import { mapMutations } from 'vuex';

let uniqId = 0;

export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'todo.name'(value) {
      return Validator.value(value).required('This field cannot be empty')
    }
  },
  props: {
    todos: Array
  },
  data() {
    return {
      todo: {
        id: 0,
        name: '',
        checked: false
      }
    }
  },
  methods: {
    ...mapMutations(['addTodo', 'checkAll']),
    addNewTodo() {
      this.$validate().then(success => {
        if (!success) return;

        uniqId++;
        this.todo.id = uniqId;

        this.addTodo({...this.todo});
        this.todo.name = '';

        this.validation.reset();
      })
    },
    checkAllTodos(e) {
      this.checkAll(e.target.checked);
    }
  }
}
</script>

<style lang="scss" scoped>
  .todo-input {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .check-all-btn {
    transform: rotate(90deg);
    width: 10%;
    height: 100%;
    padding: 0;
    visibility: hidden;
    display: flex;
    justify-content: center;
    opacity: 0;


    &::after {
      content: '❯';
      color: #e6e6e6;
      transform: translate(0%,0%);
      font-size: 22px;
      visibility: visible;
    }

    &:checked:after {
      content: '❯';
      color: #000;
    }
  }

  .check-all-visible {
    opacity: 1;
  }

  .input {
    font-size: 24px;
    padding: 16px 16px 16px 20px;
    border: 1px solid transparent;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1 px rgba(0, 0, 0, 0.03);
    line-height: 1.4em;
    outline: none;
    color: inherit;
    width: 90%;
    background: #fff;
  }

  .todo-input {
    position: relative;
  }

  .error {
    position: absolute;
    top: -25px;
    left: 15%;
    color: firebrick;
  }

  .valid-error {
    border: 1px solid firebrick;
  }
</style>