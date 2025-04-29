import { Header } from "@/widgets/Header";
import { Navigation } from "@/widgets/Navigation";
import "./Layout.scss"
import { HeaderMobile } from "@/widgets/HeaderMobile";
import { NavigationMobile } from "@/widgets/NavigationMobile";
import { useLocation } from 'react-router-dom';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();
    const hiddenRoutes = ['/login', '/register'];
    const hideLayout = hiddenRoutes.includes(location.pathname);

    return (
        <div className="layout">
            {!hideLayout && (
                <>
                    <Navigation />
                    <Header />
                    <HeaderMobile />
                </>
            )}
            <main className="main">{children}</main>
            {!hideLayout && <NavigationMobile />}
        </div>
    );
};
