import { LitElement, html, css } from 'lit-element';
import "./todo-item";
/**
 * @customElement
 * @polymer
 */
class TodoList extends LitElement {
    constructor() {
        super();
        this.items = [];
    }
    static get properties() {
        return {
            items: { type: Array }
        };
    }
    render() {
        return html `
            <p ?hidden="${this.items.length > 0}">Your todo list is empty</p>
            ${this.items.map(item => html `
                <todo-item .item="${item}"></todo-item>
            `)}
        `;
    }
}
TodoList.styles = [
    css `
          :host {
            display: block;
            margin-top: 1em;
          }
        `
];
window.customElements.define('todo-list', TodoList);
