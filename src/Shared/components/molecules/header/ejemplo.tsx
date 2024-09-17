// las propias react
import { FC } from 'react';

// las de terceros "directamente"  

// las de terceros
import { signOut } from 'firebase/auth';

// utilidades
import { auth } from 'config';
import { routerList } from 'routers';

// componentes
import { Button, Image, ItemNav, Label, Text } from 'shared/components';

//  styles
import './header.component.scss';

interface IHeaderRender {
    MOBILE: (isAuthenticated: boolean) => JSX.Element;
    DESKTOP: (isAuthenticated: boolean) => JSX.Element;
}

interface IProps {
    headerTitle: string;
    className: string;
    isMobile: boolean;
}
export const Header: FC<IProps> = ({ headerTitle, isMobile, className }) => {

    //! MEJORAR ESTE COMPNENTE...

    let isAuthenticated = false;
    const onSignOut = async () => {
        await signOut(auth);
    }


    // CUANDO ES MOBILE   - ISAUTH


    // CUANDO ES DESKTOP - ISAUTH


    const headerRender: IHeaderRender = {
        MOBILE: (isAuthenticated) => (
            <span className={className}>
                {
                    isAuthenticated
                    && <Label className='label' htmlFor='checkbox-bar'>
                            <Image
                                src='https://firebasestorage.googleapis.com/v0/b/centro-madreantonia.appspot.com/o/icons%2Fmenu.svg?alt=media&token=cfca80b0-e4f3-432f-ad95-a306b4d726d4'
                                alt='icon-menu'
                            />
                        </Label>
                }
                <Text component='span' className='header_name' text={headerTitle} />
                {
                    isAuthenticated ? <Button
                        onClick={onSignOut}
                        component='button'
                        className='a-btn a-btn--danger'
                        text='Cerrar sesión'
                        disabled={false}
                    />
                    : <ItemNav to={'/auth/login'}
                        path={'auth/login'} className={''}
                        text={'Iniciar Sesión'} classLink={`${''} nav__link`}
                    />
                }
            </span>
        ),
        DESKTOP: (isAuthenticated) => (
            <span className={className}>
                <Text component='span' className='header_name' text={headerTitle} />
                {
                    isAuthenticated
                    && routerList.private.map(({ path, to, classIcon, name, classLink, enabled }) => path !== '/'
                        && enabled
                        &&  <ItemNav key={path} to={to}
                                path={path} className={classIcon}
                                text={name} classLink={`${classLink} nav__link`}
                            />
                    )
                }
                {
                    isAuthenticated ? <Button
                        onClick={onSignOut}
                        component='button'
                        className='a-btn a-btn--danger'
                        text='Cerrar sesión'
                        disabled={false}
                    /> : <ItemNav to={'/auth/login'}
                    path={'auth/login'} className={''}
                    text={'Iniciar Sesión'} classLink={`${''} nav__link`}
                />
                }
            </span>
        )
    }


    return isMobile ? headerRender.MOBILE(isAuthenticated) : headerRender.DESKTOP(isAuthenticated)
}
