import { useLocation } from 'react-router';
import { Navigate } from 'react-router';

export default function DefaultLanguageRedirect() {
    const location = useLocation();
    const { pathname, search, hash } = location;
    return <Navigate to={`/en-US${pathname}${search}${hash}`} replace />;
}
