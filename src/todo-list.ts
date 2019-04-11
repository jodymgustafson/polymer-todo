import { LitElement, html, TemplateResult, css, PropertyDeclarations } from 'lit-element';
import "./todo-item";
import { TodoItemModel } from './todoItemModel';

/**
 * @customElement
 * @polymer
 */
class TodoList extends LitElement
{
    items: TodoItemModel[] = [];

    static get properties(): PropertyDeclarations {
        return {
            items: { type: Array }
        };
    }

    constructor() {
        super();
    }

    static styles = [
        css`
          :host {
            display: block;
            margin-top: 1em;
          }
        `
    ];

    render(): TemplateResult {
        return html`
            <p ?hidden="${this.items.length > 0}">Your todo list is empty</p>
            ${this.items.map(item => html`
                <todo-item .item="${item}"></todo-item>
            `)}
        `;
    }
}

window.customElements.define('todo-list', TodoList);
