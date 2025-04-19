type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({children, className = ""}: SectionTitleProps) => (
  <h2 className={`text-2xl md:text-4xl lg:text-5xl font-semibold ${className}`}>
    {children}
  </h2>
);

export default SectionTitle;
