import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "./todo-list";
import "./add-task";
import { TodoItemModel } from './todoItemModel';

/**
 * @customElement
 * @polymer
 */
class PolymerTodoApp extends PolymerElement {
    static get template() {
        return html`
          <style>
            :host {
              display: block;
              font-size: 16px;
              font-family: Roboto, sans-serif;
            }
          </style>
          <h2>TODO List: Polymer Style</h2>
          <p>You have [[todoList.length]] tasks</p>
          <add-task on-add="_addTask"></add-task>
          <todo-list items="{{todoList}}"></todo-list>
        `;
    }
    
    todoList: TodoItemModel[] = [];
    private nextId = 0;

    _addTask(ev: CustomEvent): void
    {
        let id = ++this.nextId;
        let name = ev.detail.name;
        this.push("todoList", {
            id: id.toString(),
            name: name,
            created: new Date()
        });
    }
}

window.customElements.define('polymer-todo-app', PolymerTodoApp);
