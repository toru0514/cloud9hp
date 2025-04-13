import NavList from "@/components/Common/Nav/NavList";

const SideMenu = ({
                      isMobile = false,
                      variant = "header",
                  }: {
    isMobile?: boolean;
    variant?: "header" | "footer" | "simple";
}) => {
    return (
        <div>
            <NavList isMobile={isMobile} variant={variant}/>
        </div>
    );
};

export default SideMenu;
