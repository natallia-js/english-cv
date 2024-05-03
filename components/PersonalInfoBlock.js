import { addGlobalStylesToShadowRoot } from '../global-styles.js';

export default class PersonalInfoBlock extends HTMLElement {
    constructor() {
        super();
        this.blockTitle = this.getAttribute('blockTitle');
    }

    render() {
        this.attachShadow({ mode: "open" })
            .innerHTML = `
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">${this.blockTitle}</div>
                        <slot name="info"></slot>
                    </div>
                </div>
            `;
        addGlobalStylesToShadowRoot(this.shadowRoot);
    }

    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }    
}
