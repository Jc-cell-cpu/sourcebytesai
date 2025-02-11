"use client"; // Mark this component as a Client Component

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router
import { ChatComponent } from '@/components/ChatComponent';
// import { getUserRole } from '../../utils/auth';
import SuperAdmindashboard from '@/components/SuperAdmindashboard';
import { Loader } from '@/components/ui/loader';

const Dashboard = () => {
    const [role, setRole] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchRole = async () => {
            // const userRole = await getUserRole(); // Fetch user role from session, API, or cookies
            const userRole = "user"
            // const userRole = "super_admin"
            if (!userRole) {
                router.push('/dashboard'); // Redirect if not authenticated
                return;
            }
            setRole(userRole);
        };

        fetchRole();
    }, [router]);

    if (!role) {
        return <div className="flex items-center justify-center h-screen">
            <Loader size="medium" className="text-orange-500" />
            <span className="ml-2 text-lg text-gray-600">Loading...</span>
        </div> // Show a loading state while fetching role
    }

    return (
        <>

            <div className='overflow-hidden'>
                {role === "super_admin" ? <SuperAdmindashboard /> : <ChatComponent />}
            </div>
        </>
    );
};

export default Dashboard;