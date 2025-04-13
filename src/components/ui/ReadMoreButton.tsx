// src/components/ui/ReadMoreButton.tsx

interface ButtonProps {
    link: string;
    label: string;
}

const ReadMoreButton = ({link, label}: ButtonProps) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mb-2"
        >
            <button
                className="w-full px-10 py-1 md:px-10 md:py-2 lg:px-6 lg:py-2
                   bg-gray-300 text-black text-sm md:text-md lg:text-xl
                   hover:bg-gray-500 transition duration-300 text-center"
            >
                {label}
            </button>
        </a>
    );
};

export default ReadMoreButton;
