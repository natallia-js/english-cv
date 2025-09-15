export default class ProfessionalProfileBlock extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML = `
            <div class="left-side-info">
                Results-driven software engineer with 10+ years experience in
                full-stack development, from creating technical projects and scalable
                applications designs to software delivery.
                Have a Master’s degree in Computer Programming along with 5+ years
                of software development team leader experience.
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
