import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icon/iron-icon';

/**
 * @customElement
 * @polymer
 */
class AddTask extends PolymerElement {
    static get template() {
        return html`
        <style>
            :host {
                display: block;
            }
            .small-icon {
                --iron-icon-height: 1.25em;
                --iron-icon-width: 1.25em;
            }
        </style>
        <div>
            <input id="taskName" type="text" placeholder="New Task Name" value="{{taskName::change}}" on-keyup="taskNameKeyUp">
            <button on-click="addTask"><iron-icon icon="add-box" class="small-icon"></iron-icon> Add Task</button>
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

    taskNameKeyUp(ev: KeyboardEvent)
    {
        let code = ev.which;
        if (code === 13)
        {
            this.addTask();
        }
    }

    taskName = "";
    
    ready()
    {
        super.ready();
        (this.$.taskName as HTMLInputElement).focus();
    }

    addTask(): void
    {
        if (this.taskName)
        {
            this.dispatchEvent(new CustomEvent("add", {detail: {name: this.taskName}}));
            this.taskName = "";
            (this.$.taskName as HTMLInputElement).focus();
        }
    }
}

window.customElements.define('add-task', AddTask);
