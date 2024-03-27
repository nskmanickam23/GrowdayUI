// useAuthRedirect.ts
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const useAuthRedirect = () => {
    const token = useSelector((state: any) => state.auth.token);
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.replace('/login');
        } else if (router.pathname === '/login') {
            router.replace('/dashboard');
        }
    }, [token, router]);

    return token;
};

export default useAuthRedirect;
