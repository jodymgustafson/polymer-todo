import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icon/iron-icon';
import "./todo-list";
import "./add-task";
/**
 * @customElement
 * @polymer
 */
class PolymerTodoApp extends LitElement {
    constructor() {
        super(...arguments);
        this.todoList = [];
        this.nextId = 0;
    }
    static get properties() {
        return {
            todoList: { type: Array }
        };
    }
    render() {
        return html `
            <h2>TODO List: <iron-icon icon="polymer"></iron-icon> Polymer Style</h2>
            <p>You have ${this.todoList.length} tasks</p>
            
            <add-task @add-task="${this.addTask}"></add-task>
            <todo-list .items="${this.todoList}" @task-deleted="${this.removeTask}"></todo-list>
          `;
    }
    addTask(ev) {
        let id = ++this.nextId;
        let name = ev.detail.name;
        this.todoList = this.todoList.concat({
            id: id.toString(),
            name: name,
            created: new Date()
        });
    }
    removeTask(ev) {
        let id = ev.detail.id;
        let idx = this.todoList.findIndex(i => i.id === id);
        if (idx >= 0) {
            let newList = [...this.todoList];
            newList.splice(idx, 1);
            this.todoList = newList;
        }
    }
}
PolymerTodoApp.styles = [
    css `
          :host {
            display: block;
            font-size: 16px;
            font-family: Roboto, sans-serif;
          }
          iron-icon {
              color: cadetblue;
          }
        `
];
window.customElements.define('polymer-todo-app', PolymerTodoApp);
