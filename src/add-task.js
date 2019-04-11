import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icon/iron-icon';
/**
 * @customElement
 * @polymer
 */
class AddTask extends LitElement {
    constructor() {
        super(...arguments);
        this.taskName = "";
    }
    static get properties() {
        return {
            taskName: { type: String }
        };
    }
    render() {
        return html `
        <input id="taskName" type="text" placeholder="New Task Name" .value="${this.taskName}" @keyup="${this.taskNameKeyUp}" autofocus>
        <button @click="${this.addTask}"><iron-icon icon="add-box" class="small-icon"></iron-icon> Add Task</button>
        `;
    }
    taskNameKeyUp(ev) {
        this.taskName = ev.target.value;
        let code = ev.which;
        if (code === 13) {
            this.addTask();
        }
    }
    addTask() {
        if (this.taskName) {
            this.dispatchEvent(new CustomEvent("add-task", { detail: { name: this.taskName } }));
            this.taskName = "";
            this.shadowRoot.getElementById("taskName").focus();
        }
    }
}
AddTask.styles = [
    css `
            :host {
                display: block;
            }
            .small-icon {
                --iron-icon-height: 1.25em;
                --iron-icon-width: 1.25em;
            }
        `
];
window.customElements.define('add-task', AddTask);
