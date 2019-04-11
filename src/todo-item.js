import { LitElement, html, css } from 'lit-element';
/**
 * @customElement
 * @polymer
 */
class TodoItem extends LitElement {
    constructor() {
        super();
    }
    static get properties() {
        return {
            item: { type: Object }
        };
    }
    render() {
        return html `
        <button @click="${this.deleteItem}" title="delete">&cross;</button>
        <span>${this.item.name}</span>
        <span class="created">(created ${this.formatDate(this.item.created)})</span>
        `;
    }
    formatDate(created) {
        return created.toLocaleDateString();
    }
    deleteItem() {
        this.dispatchEvent(new CustomEvent("task-deleted", {
            detail: { id: this.item.id },
            bubbles: true,
            composed: true
        }));
    }
}
TodoItem.styles = [
    css `
            :host {
                display: block;
            }
            button {
                border: none;
                background: transparent;
                color: red;
                cursor: pointer;
                font-weight: bold;
            }
            .created {
                font-style: italic;
            }
            button:hover {
                background-color: silver;
            }
        `
];
window.customElements.define('todo-item', TodoItem);
