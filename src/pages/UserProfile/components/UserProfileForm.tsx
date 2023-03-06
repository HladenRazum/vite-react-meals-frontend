const UserProfileForm: React.FC = () => {
   return (
      <div>
         <form className="form" action="#">
            <div className="formGroup">
               <label htmlFor="username">Username</label>
               <input type="text" placeholder="Username" id="username" />
            </div>
            <div className="formGroup">
               <label htmlFor="first-name">First Name</label>
               <input type="text" placeholder="First Name" id="first-name" />
            </div>
            <div className="formGroup">
               <label htmlFor="last-name">Last Name</label>
               <input type="text" placeholder="Last Name" id="last-name" />
            </div>
            <button type="submit">Update Profile</button>

            <p>Bio: This can be replaced with RichTextEditor component</p>
         </form>
      </div>
   );
};

export default UserProfileForm;
