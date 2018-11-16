import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@polymer/polymer/lib/elements/dom-repeat";
/**
 * @customElement
 * @polymer
 */
class TodoItem extends PolymerElement {
    static get template() {
        return html `
        <style>
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
        </style>
        <div>
            <button on-click="_deleteItem" title="delete">&cross;</button>
            <span>[[item.name]]</span>
            <span class="created">(created [[_formatDate(item.created)]])</span>
        </div>
        `;
    }
    static get properties() {
        return {
            item: {
                type: Object,
                notify: true,
            },
        };
    }
    constructor() {
        super();
    }
    _formatDate(created) {
        return created.toLocaleDateString();
    }
    _deleteItem() {
        this.dispatchEvent(new CustomEvent("deleted", { detail: { id: this.item.id } }));
    }
}
window.customElements.define('todo-item', TodoItem);
