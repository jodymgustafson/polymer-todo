import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icon/iron-icon';
import "./todo-list";
import "./add-task";
/**
 * @customElement
 * @polymer
 */
class PolymerTodoApp extends PolymerElement {
    constructor() {
        super(...arguments);
        this.todoList = [];
        this.nextId = 0;
    }
    static get template() {
        return html `
          <style>
            :host {
              display: block;
              font-size: 16px;
              font-family: Roboto, sans-serif;
            }
          </style>
          <h2>TODO List: <iron-icon icon="polymer"></iron-icon> Polymer Style</h2>
          <p>You have [[todoList.length]] tasks</p>
          
          <add-task on-add="_addTask"></add-task>
          <todo-list items="{{todoList}}"></todo-list>
        `;
    }
    _addTask(ev) {
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
