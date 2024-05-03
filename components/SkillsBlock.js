import InfoBlock from './InfoBlock.js';

export default class SkillsBlock extends InfoBlock {
    constructor() {
        super();
    }

    render() {
        super.render();
        this.innerHTML += `
            <div class="single-point-block subheader">
                C#, HTML, CSS, JavaScript, Node.js, React.js, Vue.js, MS SQL Server, MongoDB, PostgreSQL, Firebird, git
            </div>
        `;
    }    
}
