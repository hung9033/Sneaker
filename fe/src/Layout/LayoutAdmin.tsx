import React, { useEffect } from 'react'
import Sidebar from '../components/Admin/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Admin/Header';
import Footer from '../components/Admin/Footer';
import Loading from '../components/Client/Loading';
import { useLoading } from '../context/Loading';

const LayoutAdmin = () => {
    const navigate = useNavigate();
    const { loading } = useLoading();
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }
    }, [token, navigate]);
    return (
        <>

            <div className="bg-gray-100 flex min-h-screen">
                <Sidebar />
                <div className="w-full  ">

                    <Header />
                    <Loading isShow={loading} />
                    <div className="flex-1 overflow-y-auto">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>




        </>
    )
}

export default LayoutAdmin