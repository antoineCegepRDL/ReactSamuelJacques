import { MenuGroup } from 'ts/interfaces/Iside-bar';
import noSQL from './noSQL';

const reactFramework: MenuGroup = {
    id: 'sql',
    title: 'SQL',
    type: 'group',
    children: [
        noSQL
    ]
};

export default reactFramework;
