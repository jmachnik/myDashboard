import React from 'react'
import PageHeader from "react-bootstrap/es/PageHeader";
import {Panel} from "react-bootstrap";


let Posts = (props) => {
    let listItems = props.posts.map((item) =>
        (<Panel bsStyle="primary">
            <Panel.Heading>
                <Panel.Title componentClass="h3">{item.title}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>{item.description}</Panel.Body>
        </Panel>)
    );

    return (
        <div>
            <PageHeader>
                Posts <small>List of posts</small>
            </PageHeader>
            {listItems}

        </div>
    )
}

export default Posts
