import InfoBlock from './InfoBlock.js';

export default class TrainingsBlock extends InfoBlock {
    constructor() {
        super();
    }

    render() {
        super.render();
        this.innerHTML += `
            <div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">The Rolling Scopes School</div>
                        Course: JavaScript
                    </div>
                </div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">The Rolling Scopes School</div>
                        Course: React
                    </div>
                </div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">The Rolling Scopes School</div>
                        Course: Node.js
                    </div>
                </div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">Institute of Control and Social Technologies, Belarussian State University</div>
                        Course: Dynamic web-pages developing using JavaScript
                    </div>
                </div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">Belarussian State Institute for Continuing Education and Retraining of Personnel in Standardization, Metrology and Quality Management</div>
                        Course: Certification of products and services (training of railway expert auditors)
                    </div>
                </div>
                <div class="single-point-block">
                    <div class="info-item">
                        <div class="subheader">Institute of Informatization and Management Technologies, Belarussian State University</div>
                        Course: Development of security tasks based on security profiles
                    </div>
                </div>
            </div>        
        `;
    }    
}
