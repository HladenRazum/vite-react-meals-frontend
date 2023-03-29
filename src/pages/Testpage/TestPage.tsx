import { ChangeEvent, useEffect, useRef, useState } from "react";
import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";

const TestPage = () => {
   const [username, setUsername] = useState("");
   const prevUsername = useRef("");

   useEffect(() => {
      prevUsername.current = username;
   }, [username]);

   const updateUsername = (e: ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
   };

   const focus = () => {};

   return (
      <PageWrapper title="Prototypes page">
         <input type="text" placeholder="test" onChange={updateUsername} />
         <button onClick={focus}>Focus</button>
         {username}
         <br />
         {prevUsername.current}
      </PageWrapper>
   );
};

export default TestPage;
