import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import "@polymer/polymer/lib/elements/dom-repeat";

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
        </style>
        <div>
            <input id="taskName" type="text" placeholder="New Task Name" value="{{taskName::change}}" on-keyup="taskNameKeyUp">
            <button on-click="addTask">Add Task</button>
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
