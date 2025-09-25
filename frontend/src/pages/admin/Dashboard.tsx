import React, { useState } from 'react'
import Button from '../../components/Button';

const Dashboard = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "User1", email: "user1@anotheruniverse.com" },
        { id: 2, name: "User2", email: "user2@anotheruniverse.com" }
    ]);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className="min-h-screen bg-gray-100">

            <div className="container mx-auto p-6">
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full py-3 px-4 border border-slate-400 rounded"
                    />
                </div>

                <table className="w-full bg-white shadow rounded">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user.id} className="border-b border-slate-300 text-center">
                                <td className="p-3">{user.id}</td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td>
                                    <Button
                                        onClick={() =>{}}
                                        className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Dashboard