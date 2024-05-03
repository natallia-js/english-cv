import InfoBlock from './InfoBlock.js';

export default class EmploymentBlock extends InfoBlock {
    constructor() {
        super();
    }

    render() {
        super.render();
        this.innerHTML += `
            <div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">Software Engineer</div>
                        <div class="accent-text">Belarussian Railway, Minsk</div>
                        <ul style="margin:0">
                            <li>designed and developed applications that allow to create and maintain a unified database of
                            Belarusian railway objects under construction</li>
                            <li>designed and developed an application where train dispatchers can create orders and warnings -
                            an integral part of our completed train schedule maintenance system
                        </ul>
                    </div>
                    <div class="additional-info-item">Jan 2005 - Oct 2009</div>
                </div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">Chief Project Engineer</div>
                        <div class="accent-text">Belarussian Railway, Minsk</div>
                        <ul style="margin:0">
                            <li>designed the central database of completed train schedule</li>
                            <li>developed applications that collect information from isolated completed train schedule
                            systems and form a single (for all railway) completed train schedule</li>
                            <li>designed and developed a system that receives and processes information from the
                            acoustic sounding system</li>
                        </ul>
                    </div>
                    <div class="additional-info-item">Oct 2009 - Dec 2016</div>
                </div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">Head of Software Development Department</div>
                        <div class="accent-text">Belarussian Railway, Minsk</div>
                        <ul style="margin:0">
                            <li>designed and developed a web-based system of comprehensive automation of the process of
                            maintaining logs of dispatch orders at the workplaces of given control areas</li>
                            <li>took part in designing the new core of the completed train schedule maintenance system</li>
                            <li>lead and participate in development of the new core of the completed train schedule maintenance system</li>
                        </ul>
                    </div>
                    <div class="additional-info-item">Dec 2016 - Present</div>
                </div>
            </div>
        `;
    }    
}
