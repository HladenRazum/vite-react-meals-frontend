const UserProfileForm: React.FC = () => {
   return (
      <div>
         <h2>User Profile Form</h2>
         <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <p>Bio: This can be replaced with RichTextEditor component</p>
         </form>
      </div>
   );
};

export default UserProfileForm;
