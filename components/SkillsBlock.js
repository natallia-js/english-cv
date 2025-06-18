import InfoBlock from './InfoBlock.js';

export default class SkillsBlock extends InfoBlock {
    constructor() {
        super();
    }

    render() {
        super.render();
        this.innerHTML += `
            <div class="single-point-block subheader">
                C#, HTML, CSS, JavaScript, Node.js, Nest.js, React.js, Next.js, Vue.js, MS SQL Server, MongoDB, PostgreSQL, Firebird, git
            </div>
        `;
    }    
}
