import Footer from "../Footer/Footer";

type PageWrapperProps = {
   title: string;
   children?: React.ReactNode;
   footer?: boolean;
};

const PageWrapper: React.FC<PageWrapperProps> = ({
   title,
   children,
   footer,
}) => {
   return (
      <>
         <div className="wrappedWidth">
            <h1>{title}</h1>
            {children}
         </div>
         {footer && <Footer />}
      </>
   );
};

export default PageWrapper;
