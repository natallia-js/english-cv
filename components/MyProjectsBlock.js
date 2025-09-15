export default class MyProjectsBlock extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        const projects = [1,2,3,4,5,6,7,8].reduce((prev, curr) => {
           return prev + `
                <div class="project-photo-block">
                    <img
                        src="./assets/images/project_${curr}.webp"
                        alt="my project photo N ${curr}"
                        class="project-photo ${curr % 2 === 0 ? 'project-photo-right' : 'project-photo-left'}" />
                </div>
           `; 
        }, '');
        this.innerHTML = `
            <div class="project-examples">
                <div class="projects-title-block">
                    <h3>Examples Of My Projects</h3>
                </div>
                <div class="project-gallery">
                    ${projects}
                </div>
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
