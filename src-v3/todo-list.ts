import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@polymer/polymer/lib/elements/dom-repeat";
import "@polymer/polymer/lib/elements/dom-if";
import "./todo-item";
import { TodoItemModel } from './todoItemModel';

/**
 * @customElement
 * @polymer
 */
class TodoList extends PolymerElement {
    static get template() {
        return html`
        <style>
            :host {
                display: block;
                margin-top: 1em;
            }
        </style>
        <div>
            <template is="dom-if" if="[[!items.length]]">
                <p>Your todo list is empty</p>
            </template>
            <template is="dom-repeat" items="{{items}}">
                <todo-item item={{item}} on-deleted="deleteItem"></todo-item>
            </template>
        </div>
        `;
    }
    static get properties() {
        return {
            items: {
                type: Array,
                notify: true,
                observer: "_itemsChanged"
            }
        };
    }

    _itemsChanged(items)
    {
        console.log("items changed " + items.length);
    }
    
    items: TodoItemModel[];

    constructor()
    {
        super();
    }

    deleteItem(ev: CustomEvent): void
    {
        let id = ev.detail.id;
        let idx = this.items.findIndex(i => i.id === id);
        if (idx >= 0)
        {
            this.splice("items", idx, 1);
        }
    }
}

window.customElements.define('todo-list', TodoList);
