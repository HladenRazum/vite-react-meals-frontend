type PageWrapperProps = {
   title: string;
   children?: React.ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
   return (
      <div className="wrappedWidth">
         <h1>{title}</h1>
         {children}
      </div>
   );
};

export default PageWrapper;
