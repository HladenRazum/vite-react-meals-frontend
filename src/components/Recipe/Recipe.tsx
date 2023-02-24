type RecipeProps = {
   title: string;
   imageURL: string;
   rating: number;
};

const Recipe: React.FC<RecipeProps> = ({ title, imageURL, rating }) => {
   return (
      <div>
         <header>
            <h4>{title}</h4>
            <div>
               <figure>
                  <img src={imageURL} alt={title} />
               </figure>
            </div>
            <div>{rating}</div>
         </header>
      </div>
   );
};

export default Recipe;
