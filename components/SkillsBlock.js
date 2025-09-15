export default class SkillsBlock extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML += `
            <div class="left-side-info">
                <ul class="common skills-list">
                    <li class="skill">C#</li>
                    <li class="skill">HTML</li>
                    <li class="skill">CSS</li>
                    <li class="skill">JavaScript</li>
                    <li class="skill">Node.js</li>
                    <li class="skill">Nest.js</li>
                    <li class="skill">React.js</li>
                    <li class="skill">Next.js</li>
                    <li class="skill">Vue.js</li>
                    <li class="skill">MS SQL Server</li>
                    <li class="skill">MongoDB</li>
                    <li class="skill">PostgreSQL</li>
                    <li class="skill">Firebird</li>
                    <li class="skill">git</li>
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
