import InfoBlock from './InfoBlock.js';

export default class LanguagesBlock extends InfoBlock {
    constructor() {
        super();
    }

    render() {
        super.render();
        this.innerHTML += `
            <div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">English</div>
                        <ul>
                            <li>3-year course of abstracting and translation of scientific and technical literature, Belarussian State University of Computer Science and Radioengineering, Minsk</li>
                            <li>2 weeks at ESE school, Malta</li>
                        </ul>
                    </div>
                    <div class="additional-info-item">
                        <div class="filled-grade-circle"></div>
                        <div class="filled-grade-circle"></div>
                        <div class="filled-grade-circle"></div>
                        <div class="filled-grade-circle"></div>
                        <div class="filled-grade-circle"></div>
                        <div class="filled-grade-circle"></div>
                        <div class="nonfilled-grade-circle"></div>
                        <div class="nonfilled-grade-circle"></div>
                        <div class="nonfilled-grade-circle"></div>
                        <div class="nonfilled-grade-circle"></div>
                    </div>
                </div>
            </div>
        `;
    }    
}
