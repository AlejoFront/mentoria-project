import { BrowserRouter as Router } from 'react-router-dom';
import RoutersMain from './RoutersMain';

export const AppRoutes = () => {
  return (
    <Router>
      <RoutersMain isAthenticated={true} />
    </Router>
  )
}

export default AppRoutes