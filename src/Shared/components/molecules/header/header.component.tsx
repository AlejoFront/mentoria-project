// Propias de React
import { FC } from 'react';

// Terceros
import { signOut } from 'firebase/auth';

// Utilidades
import { auth } from 'config';
import { routerList } from 'routers';

// Componentes
import { Button, Image, ItemNav, Label, Text } from 'shared/components';

// Estilos
import './header.component.scss';

// Tipos
interface IProps {
    headerTitle: string;
    className?: string;
    isMobile: boolean;
}

// Componentes Auxiliares
const MobileHeader: FC<{ isAuthenticated: boolean; onSignOut: () => void; headerTitle: string; className?: string }> = ({ isAuthenticated, onSignOut, headerTitle, className }) => (
    <span className={className}>
        {isAuthenticated && (
            <Label className='label' htmlFor='checkbox-bar'>
                <Image
                    src='https://firebasestorage.googleapis.com/v0/b/centro-madreantonia.appspot.com/o/icons%2Fmenu.svg?alt=media&token=cfca80b0-e4f3-432f-ad95-a306b4d726d4'
                    alt='icon-menu'
                />
            </Label>
        )}
        <Text component='span' className='header_name' text={headerTitle} />
        {isAuthenticated ? (
            <Button
                onClick={onSignOut}
                component='button'
                className='a-btn a-btn--danger'
                text='Cerrar sesión'
                disabled={false}
            />
        ) : (
            <ItemNav
                to='/auth/login'
                path='auth/login'
                text='Iniciar Sesión'
                classLink='nav__link'
            />
        )}
    </span>
);

const DesktopHeader: FC<{ isAuthenticated: boolean; onSignOut: () => void; headerTitle: string; className?: string }> = ({ isAuthenticated, onSignOut, headerTitle, className }) => (
    <span className={className}>
        <Text component='span' className='header_name' text={headerTitle} />
        {isAuthenticated && routerList.private.map(({ path, to, classIcon, name, classLink, enabled }) => 
            path !== '/' && enabled && (
                <ItemNav
                    key={path}
                    to={to}
                    path={path}
                    className={classIcon}
                    text={name}
                    classLink={`${classLink} nav__link`}
                />
            )
        )}
        {isAuthenticated ? (
            <Button
                onClick={onSignOut}
                component='button'
                className='a-btn a-btn--danger'
                text='Cerrar sesión'
                disabled={false}
            />
        ) : (
            <ItemNav
                to='/auth/login'
                path='auth/login'
                text='Iniciar Sesión'
                classLink='nav__link'
            />
        )}
    </span>
);

// Componente Header
export const Header: FC<IProps> = ({ headerTitle, isMobile, className }) => {
    let isAuthenticated = false;


    const onSignOut = async () => {
        await signOut(auth);
    };

    return isMobile ? (
        <MobileHeader 
            isAuthenticated={isAuthenticated} 
            onSignOut={onSignOut} 
            headerTitle={headerTitle} 
            className={className} 
        />
    ) : (
        <DesktopHeader 
            isAuthenticated={isAuthenticated} 
            onSignOut={onSignOut} 
            headerTitle={headerTitle} 
            className={className} 
        />
    );
};
