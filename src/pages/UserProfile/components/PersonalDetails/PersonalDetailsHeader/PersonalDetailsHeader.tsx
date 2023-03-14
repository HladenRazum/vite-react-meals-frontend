import userProfileImage from "../../../../../assets/user-profile.jpg";

const PersonalDetailsHeader: React.FC = () => {
   return (
      <header>
         <img src={userProfileImage} width={100} />
         <div>
            <h4>John Doe</h4>
            <span>Director of Marketing</span>
            <p>USA, Illinoise, Chicago</p>
         </div>
         <button>Edit</button>
      </header>
   );
};

export default PersonalDetailsHeader;
