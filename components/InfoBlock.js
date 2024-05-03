export default class InfoBlock extends HTMLElement {
    constructor() {
        super();
        this.blockTitle = this.getAttribute('blockTitle');
    }

    render() {
        this.innerHTML = `
          <h3>
            ${this.blockTitle}
          </h3>
        `;
    }

    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }    
}
