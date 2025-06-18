import InfoBlock from './InfoBlock.js';

export default class EducationBlock extends InfoBlock {
    constructor() {
        super();
    }

    render() {
        super.render();
        this.innerHTML += `
            <div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">Belarussian State University of Computer Science and Radioengineering</div>
                        Qualifications: System programmer, Mathematician
                    </div>
                    <!--<div class="additional-info-item">Sep 2001 - Jun 2007</div>-->
                    <div class="additional-info-item">Master of engineering</div>
                </div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">Institute of Mathematics, National Academy of Sciences</div>
                        PhD (physical and mathematical sciences)
                    </div>
                    <!--<div class="additional-info-item">Sep 2007 - Jan 2014</div>-->
                    <div class="additional-info-item">PhD</div>
                </div>
            </div>
        `;
    }    
}
