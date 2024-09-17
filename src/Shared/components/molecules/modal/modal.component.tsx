import { FC } from 'react';
import './modal.component.scss';
import { Item } from 'shared/components';
interface IProps {
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    isShow: boolean;
}
export const Modal: FC<IProps> = ({ isShow, children, setIsShowModal }) => {
    return (
        <div className={isShow ? 'light-box light-box--show' : 'light-box'}>
            <article className='modal'>
                <Item className='fa fa-close icon-right'
                    handleClick={() => setIsShowModal(!isShow)}
                />
                {children}
            </article>
        </div>
    )
}

export default Modal