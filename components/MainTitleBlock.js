export default class MainTitleBlock extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML = `
            <div class="main-title">
                <h1>Natallia Fedartsova</h1>
                <h3 class="specialization">Software Developer & Team Leader</h3>
            </div>
        `;
    }

    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }
}
