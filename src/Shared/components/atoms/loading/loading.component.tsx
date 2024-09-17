import { FC } from 'react';
import './loading.component.scss';

export const Loading: FC = () => {
    return (
        <div
            className='loading'
        >
            <div className='lds-roller'>
                <div></div><div></div><div></div>
                <div></div><div></div><div></div>
                <div></div><div></div>
            </div>
        </div>
    )
}

export default Loading