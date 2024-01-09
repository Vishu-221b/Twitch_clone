const AuthLayout = ({children}:{children:React.ReactNode;}) => {
    return (
        <div>
            <nav className="p-1 bg-red-500">
                Auth Navbar
            </nav>
            {children}
        </div>
    )
}

export default AuthLayout;