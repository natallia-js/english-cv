export default class ContactsBlock extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML = `
            <div class="left-side-info">
                <ul class="common contacts-list">
                    <li class="phone-number">+375 29 577-37-19</li>
                    <li class="location">Minsk, Belarus</li>
                    <li class="email">fedartsova@gmail.com, fedartsova@tut.by</li>
                </ul>
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
