import React from 'react';
import { connect } from 'react-redux';
import {previwAction} from '../redux/actions';
import { Row, Col, Card, Popover,Button } from 'antd';
import {BulbOutlined} from '@ant-design/icons';
import { Input } from 'antd';
const { TextArea } = Input;

const styCenter = {
    'text-align': 'center'
}
const pop = (
  <Popover content={'Just paste the markdown code to be converted in html in the right side'} 
  trigger="click">
       <Button shape="circle" icon= {<BulbOutlined/>}/>
  </Popover>
)
class Preview extends React.Component{
    render(){
        return (
            <Row justify='center'>
                <Col span={12}>
                <Card title="Markdown" bordered={true} headStyle={styCenter} extra= {pop}>
                <TextArea id="editor"
                onChange = {(event) => this.props.previwAction(event.target.value)}
                value= {this.props.editor}
                autoSize
                />
                </Card>
                </Col>
                <Col span={12}>
                <Card title="Html" bordered={true} headStyle={styCenter}>
                <div  id="preview" dangerouslySetInnerHTML= {{__html: this.props.preview}}/>
                </Card>
                </Col>
            </Row>
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