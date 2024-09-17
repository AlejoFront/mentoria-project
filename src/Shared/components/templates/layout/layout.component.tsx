import { FC } from 'react';
import { Input, Header, Sidebar } from 'shared/components';
import './layout.component.scss';

interface Props {
    children: React.ReactNode;
    headerTitle: string;
}

export const Layout: FC<Props> = ({ children, headerTitle }) => {

    return (
        <main className='container'>
            <header className='header'>
                <Header className='header-mobile' headerTitle={headerTitle} isMobile={true} />
                <Header className='header-desktop' headerTitle={headerTitle} isMobile={false} />
            </header>
            <Input type='checkbox' id='checkbox-bar' className='container__checkbox' />
            <Sidebar />
            <div className='container__dashboard'>
                <div className='container__dashboard__contents'>
                    {children}
                </div>
            </div>
        </main>
    )
}
