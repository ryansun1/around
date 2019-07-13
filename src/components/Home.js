import React from 'react';
import { Tabs, Button } from 'antd';

const { TabPane } = Tabs;

export class Home extends React.Component {
    render() {
        const operations = <Button type="primary">Create New Post</Button>;

        return (
            <Tabs tabBarExtraContent={operations}>
                <TabPane tab="Image Posts" key="1">
                    Image Posts
                </TabPane>
                <TabPane tab="Video Posts" key="2">
                    Video Posts
                </TabPane>
                <TabPane tab="Map" key="3">
                    Map
                </TabPane>
            </Tabs>
        );
    }
}
