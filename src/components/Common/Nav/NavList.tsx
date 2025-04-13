import NavItem from "@/components/Common/Nav/NavItem";
import {navItems} from "./navItems";

const NavList = ({
                     isMobile,
                     variant = "header",
                 }: {
    isMobile?: boolean;
    variant?: "header" | "footer" | "simple";
}) => (
    <ul
        className={`flex ${
            isMobile
                ? "flex-col space-y-4 text-right"
                : "space-x-4 md:space-x-6 lg:space-x-10 justify-end"
        }`}
    >
        {navItems.map((item) => (
            <NavItem key={item.id} {...item} variant={variant}/>
        ))}
    </ul>
);

export default NavList;