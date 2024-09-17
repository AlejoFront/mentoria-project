import { routerList } from 'routers';
import { ItemNav } from 'shared/components';
import { useAppSelector } from 'store/hooks';
import { selectAuthInfo } from 'store/slices/auth';
import './sidebar.component.scss'

export const Sidebar = () => {
    const { isAuthenticated } = useAppSelector(selectAuthInfo);




    return (
        <div className='container__nav-items'>
            {
                !isAuthenticated
                    ? routerList.public.map(
                        ({ path, to, className, name, classLink }) => path !== '/' && !path.includes('Auth')
                            && <ItemNav
                                key={path}
                                to={to}
                                path={path}
                                className={className}
                                text={name}
                                classLink={`${classLink} nav__link`}
                            />)
                    : routerList.private.map(
                        ({ path, to, classIcon, name, classLink }) => path !== '/'
                            &&
                            <ItemNav
                                key={path}
                                to={to}
                                path={path}
                                className={classIcon}
                                text={name}
                                classLink={`${classLink} nav__link`}
                            />)

            }
        </div>
    )
}
