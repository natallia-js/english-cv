export default class ExperienceBlock extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML = `
            <ul class="experience-list">
                <li class="main work-experience">
                    <h3>Experience</h3>
                </li>
                <li>
                    <b>Head of Software Development Department - Design and Technical Center of Belarussian Railway</b>
                </li>
                <div class="content">to Present - Minsk, Belarus</div>
                <div class="content p-b-2 p-t-2">
                    <ul class="experience-detailed-info">
                        <li>designed and developed a web-based system of comprehensive automation of the process of
                        maintaining journals of dispatch orders at the workplaces of given control areas</li>
                        <li>lead the process of designing and developing the new core of the completed train schedule maintenance system</li>
                        <li>ensure effective interaction between the different departments involved in the development</li>
                    </ul>
                </div>
                <li>
                    <b>Chief Project Engineer - Design and Technical Center of Belarussian Railway</b>
                </li>
                <div class="content">2 years - Minsk, Belarus</div>
                <div class="content p-b-2 p-t-2">
                    <ul class="experience-detailed-info">
                        <li class="p-b-2">designed the central database of completed train schedule</li>
                        <li class="p-b-2">developed applications that collect information from isolated completed train schedule
                        systems and form a single (for all railway) completed train schedule</li>
                        <li class="p-b-2">designed and developed a system that receives and processes information from the
                        acoustic sounding system</li>
                        <li>trained and mentored 3 junior programmers, providing guidance on best practices
                        in software development</li>
                    </ul>
                </div>
                <li>
                    <b>Software Engineer - Design and Technical Center of Belarussian Railway</b>
                </li>
                <div class="content">4 years - Minsk, Belarus</div>
                <div class="content p-b-4 p-t-2">
                    <ul class="experience-detailed-info">
                        <li class="p-b-2">designed and developed applications that allow to create and maintain a unified database of
                        Belarusian railway objects under construction</li>
                        <li>designed and developed an application where train dispatchers can create orders and warnings -
                        an integral part of our completed train schedule maintenance system</li>
                    </ul>
                </div>


                <li class="main education">
                    <h3>Education</h3>
                </li>
                <li>
                    <span>
                        <b>Master of engineering</b> - Qualifications: Systems programmer, Mathematician
                    </span>
                </li>
                <div class="content p-b-2">
                    <b>Belarussian state university of information science and radioengineering</b> - Minsk, Belarus
                </div>
                <li>
                    <span><b>PhD (physical and mathematical sciences)</b></span>
                </li>
                <div class="content p-b-4">
                    <b>Institute of Mathematics, National Academy of Sciences</b> - Minsk, Belarus
                </div>
                

                <li class="main certifications">
                    <h3>Certifications</h3>
                </li>
                <li class="p-b-2">
                    <span>
                        <b>Dynamic web-pages developing using JavaScript</b> - Institute of Control and Social Technologies, Belarussian State University
                    </span>
                </li>
                <li class="p-b-2">
                    <span>
                        <b>JavaScript</b> - The Rolling Scopes School
                    </span>
                </li>
                <li class="p-b-2">
                    <span>
                        <b>React.js</b> - The Rolling Scopes School
                    </span>
                </li>
                <li class="p-b-2">
                    <span>
                        <b>Node.js</b> - The Rolling Scopes School
                    </span>
                </li>
                <li>
                    <span>
                        <b>English</b> - ESE School, Malta
                    </span>
                </li>                
            </ul>
        `;
    }

    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }
}
    