import {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { routerList } from './routes';
interface IProps {
    isAthenticated: boolean;
}
const RoutersMain: FC<IProps> = ({isAthenticated}) => {
  if(isAthenticated) {
    return (
        <Routes>
            {
                routerList.private.map((router, index) => {
                    return <Route key={index} path={router.path} element={router.element} />
                })
            }
        </Routes>
    )
  }
  return (
        <Routes>
            {
                routerList.public.map((router, index) => {
                    return <Route key={index} path={router.path} element={router.element} />
                })
            }
        </Routes>
  )
}

export default RoutersMain