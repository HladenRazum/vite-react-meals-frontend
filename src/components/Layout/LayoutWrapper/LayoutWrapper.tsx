type LayoutWrapperProps = {
   children: React.ReactNode;
};

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
   return <div className="wrapper">{children}</div>;
};

export default LayoutWrapper;
