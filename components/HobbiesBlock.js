import InfoBlock from './InfoBlock.js';

export default class HobbiesBlock extends InfoBlock {
    constructor() {
        super();
    }

    render() {
        super.render();
        this.innerHTML += `
            <div class="single-point-block subheader">
                Plant growing, Giving new life to old things, Skiing, Skating, Walking, Riding a bicycle
            </div>
        `;
    }    
}
