import { Outlet, useLoaderData, redirect, useNavigate } from "react-router-dom"
import Wrapper from "../assets/wrappers/Dashboard"
import { BigSidebar, Navbar, SmallSidebar } from "../components"
import { createContext, useState, useContext } from "react"
import customFetch from "../utils/customFetch"
import { toast } from "react-toastify"


export const loader = async () => {
    try {
        const { data } = await customFetch.get('/users/current-user');
        return data;
    } catch (error) {
        return redirect('/');
    }
};


const DashboardContext = createContext()


const DashboardLayout = () => {
    const { user } = useLoaderData();
    // console.log(user);
    const navigate = useNavigate();


    const [showSidebar, setShowSidebar] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleDarkTheme = () => {
        console.log('toggle dark theme');
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const logoutUser = async () => {
        navigate('/');
        await customFetch.get('/auth/logout');
        toast.success('Logged Out Successfully...')
    };

    return (
        <DashboardContext.Provider value={{ user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser }}>
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <Navbar />
                        <div className="dashboard-page">
                            <Outlet context={{ user }} />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

//custom hook
export const useDashboardContext = () => useContext(DashboardContext);


export default DashboardLayout