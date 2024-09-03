import React, { useEffect, useState } from 'react'
import { IProduct } from '../../interface/Product';
import axios from 'axios';
import Loading from '../../components/Client/Loading';
import { useAuth } from '../../hook/useAuth';

type User = {
    email: string,
    username: string,
    password: string,
}

const Dashboard = () => {
    const { users } = useAuth();
    return (
        <>

            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h1 className="text-3xl text-black  ">Dashboard</h1>
                    {/* <div className="flex flex-wrap mt-6">
                        <div className="w-full lg:w-1/2 pr-0 lg:pr-2">
                            <p className="text-xl pb-3 flex items-center">
                                <i className="fas fa-plus mr-3" /> Monthly Reports
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0">
                            <p className="text-xl pb-3 flex items-center">
                                <i className="fas fa-check mr-3" /> Resolved Reports
                            </p>
                        </div>
                    </div> */}
                    <div className="w-full mt-6">
                        <p className="text-xl pb-3 flex items-center">
                            <i className="fas fa-list mr-3" /> Users
                        </p>
                        <div className="bg-white overflow-auto ">
                            <table className="min-w-full bg-white">
                                <thead className="bg-gray-800 text-white ">
                                    <tr className=''>
                                        <th className="  text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                        <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    {users.map((user, index) => {
                                        return (


                                            <tr className='hover:bg-gray-200' key={index + 1}>
                                                <td className="  text-left py-3 px-4">{user.name}</td>

                                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
                                                <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">{user.email}</a></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>

            </div>

        </>
    )
}

export default Dashboard