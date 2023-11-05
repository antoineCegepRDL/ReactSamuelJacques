import { Suspense } from 'react';

import Loader from './Loader';

interface LoaderProps {
    children?: React.ReactNode;
}

const Loadable = (Component: React.LazyExoticComponent<React.ComponentType<any>>) => (props : LoaderProps) =>
<Suspense fallback={<Loader />}>
    <Component props={props}/>
</Suspense>

export default Loadable;
