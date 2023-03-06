const UserProfileForm: React.FC = () => {
   return (
      <div>
         <form className="form wide" action="#">
            <div className="formGroup">
               <label htmlFor="username">Username</label>
               <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  autoComplete="off"
               />
            </div>
            <div className="formGroup">
               <label htmlFor="first-name">First Name</label>
               <input
                  type="text"
                  placeholder="First Name"
                  id="first-name"
                  autoComplete="off"
               />
            </div>
            <div className="formGroup">
               <label htmlFor="last-name">Last Name</label>
               <input
                  type="text"
                  placeholder="Last Name"
                  id="last-name"
                  autoComplete="off"
               />
            </div>
            <p>Bio: This can be replaced with RichTextEditor component</p>
            <button type="submit">Update Profile</button>
         </form>
      </div>
   );
};

export default UserProfileForm;
