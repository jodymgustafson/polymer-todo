import { LitElement, html, TemplateResult, css, PropertyDeclarations } from 'lit-element';
import { TodoItemModel } from './todoItemModel';

/**
 * @customElement
 * @polymer
 */
class TodoItem extends LitElement
{
    item: TodoItemModel;

    static get properties(): PropertyDeclarations {
        return {
            item: { type: Object }
        };
    }
    
    constructor()
    {
        super();
    }

    static styles = [
        css`
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

    render(): TemplateResult {
        return html`
        <button @click="${this.deleteItem}" title="delete">&cross;</button>
        <span>${this.item.name}</span>
        <span class="created">(created ${this.formatDate(this.item.created)})</span>
        `;
    }

    formatDate(created: Date): string
    {
        return created.toLocaleDateString();
    }

    deleteItem(): void
    {
        this.dispatchEvent(new CustomEvent("task-deleted", {
            detail: {id: this.item.id},
            bubbles: true,
            composed: true
        }));
    }
}

window.customElements.define('todo-item', TodoItem);
