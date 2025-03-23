import { Header } from "@/widgets/Header";
import { Navigation } from "@/widgets/Navigation";
import "./Layout.scss"
import { HeaderMobile } from "@/widgets/HeaderMobile";
import { NavigationMobile } from "@/widgets/NavigationMobile";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="layout">
            <Navigation />
            <Header />
            <HeaderMobile />
            <main className="main">{children}</main>
            <NavigationMobile />
        </div>
    );
};
