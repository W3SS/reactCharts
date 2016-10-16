import React from 'react';

let Header = React.createClass({
    render() {
        return(
            <div>
               this is header
                <div>
                    <div className="tag-label">tag1</div>
                    <div className="tag-label">tag2</div>
                    <div className="tag-label">tag3</div>
                </div>

            </div>
        );
    }
});

export default Header;