import {FC, Suspense} from 'react';
import {Routes, Route } from 'react-router-dom';
import { routerList } from './routes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { PageNotFound } from 'Submodules';
interface IProps {
    isAthenticated: boolean;
}
const RoutersMain: FC<IProps> = ({isAthenticated}) => {  

  if(isAthenticated) {
    return (
        <Routes>
            {
                routerList.private.map(({to, Component}, index) => {
                    return <Route 
                                key={index} 
                                path={to}
                                element={
                                    <PrivateRoutes isAuthenticated={isAthenticated}>
                                        <Suspense fallback='Cargando pagina...'>
                                            <Component />
                                        </Suspense>
                                    </PrivateRoutes>
                                } 
                            />
                })
            }
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
  }
  return (
        <Routes>
            {
                routerList.public.map(({to, Component}, index) => {
                    return <Route 
                    key={index} 
                    path={to}
                    element={
                        <PublicRoutes isAuthenticated={isAthenticated}>
                            <Suspense fallback='Cargando pagina...'>
                                <Component />
                            </Suspense>
                        </PublicRoutes>
                    } 
                />
                })
            }
            <Route path='*' element={<PageNotFound />} />
        </Routes>
  )
}

export default RoutersMain