import { MenuGroup } from 'ts/interfaces/Iside-bar';
import introduction from './introduction';
import architecture from './react';
import mui from './mui';
import states from './states';
import unitest from './unitTest';

const reactFramework: MenuGroup = {
    id: 'react',
    title: 'React',
    type: 'group',
    children: [
        introduction,
        architecture,
        mui,
        states,
        unitest
    ]
};

export default reactFramework;
