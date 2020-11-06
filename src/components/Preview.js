import React from 'react';
import { connect } from 'react-redux';
import {previwAction} from '../redux/actions';

class Preview extends React.Component{
    render(){
        return (
            <div>
                <textarea id="editor" onChange = {
                    (event) => this.props.previwAction(event.target.value)
                } value= {this.props.editor} type="text"
                />
                    
                <div id="preview" dangerouslySetInnerHTML= {{__html: this.props.preview}}/>
            </div>
        )
    }
}

const mapStateToProps =  (state) => {
    return state;
}

const mapDispatchToProps = {
    previwAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Preview);