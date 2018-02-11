/**
 * Created by michael on 10/02/2018.
 */

/* React */
import React, {Component} from 'react';


class ProjectsLogic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: {
                weather: false,
                bounce: false
            }
        };
    }

    set_project_state(project) {
        let new_projects = Object.assign({}, this.state.projects);
        new_projects[project] = !new_projects[project];
        this.setState({
            projects: new_projects
        });
    }
}

export default ProjectsLogic;