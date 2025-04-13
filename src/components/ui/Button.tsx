import Link from "next/link";

interface ButtonProps {
    link: string;
}

const Button = ({link}: ButtonProps) => {
    return (
        <Link href={link}>
            <button
                className="px-10 py-1 md:px-10 md:py-2 lg:px-20 lg:py-3 bg-gray-300 text-black text-md sm:text-2xl lg:text-2xl font-semibold  hover:bg-gray-500 transition duration-300">
                VIEW MORE
            </button>
        </Link>
    );
};

export default Button;
