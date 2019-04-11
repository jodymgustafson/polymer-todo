import { LitElement, html, TemplateResult, css, PropertyDeclarations } from 'lit-element';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icon/iron-icon';

/**
 * @customElement
 * @polymer
 */
class AddTask extends LitElement
{
    private taskName = "";

    static get properties(): PropertyDeclarations {
        return {
            taskName: { type: String }
        };
    }

    static styles = [
        css`
            :host {
                display: block;
            }
            .small-icon {
                --iron-icon-height: 1.25em;
                --iron-icon-width: 1.25em;
            }
        `
    ];
    
    render(): TemplateResult {
        return html`
        <input id="taskName" type="text" placeholder="New Task Name" .value="${this.taskName}" @keyup="${this.taskNameKeyUp}" autofocus>
        <button @click="${this.addTask}"><iron-icon icon="add-box" class="small-icon"></iron-icon> Add Task</button>
        `;
    }

    taskNameKeyUp(ev: KeyboardEvent)
    {
        this.taskName = (ev.target as HTMLInputElement).value;

        let code = ev.which;
        if (code === 13)
        {
            this.addTask();
        }
    }

    addTask(): void
    {
        if (this.taskName)
        {
            this.dispatchEvent(new CustomEvent("add-task", {detail: {name: this.taskName}}));
            this.taskName = "";
            (this.shadowRoot.getElementById("taskName") as HTMLInputElement).focus();
        }
    }
}

window.customElements.define('add-task', AddTask);
