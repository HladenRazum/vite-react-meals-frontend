import Footer from "../Footer/Footer";

type PageWrapperProps = {
   title: string;
   children?: React.ReactNode;
   footer?: boolean;
   className?: string;
};

const PageWrapper: React.FC<PageWrapperProps> = ({
   title,
   children,
   footer,
   className,
}) => {
   const classes = className ? `${className} wrappedWidth` : "wrappedWidth";

   return (
      <>
         <div className={classes}>
            <h1>{title}</h1>
            {children}
         </div>
         {footer && <Footer />}
      </>
   );
};

export default PageWrapper;
