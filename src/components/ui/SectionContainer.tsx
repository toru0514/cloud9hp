type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer = ({children, className = ""}: SectionContainerProps) => (
  <div className={`p-3 lg:p-8 xl:p-10 ${className}`}>
    {children}
  </div>
);

export default SectionContainer;
