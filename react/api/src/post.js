import { useState } from "react";


const PostData = () => {
    const [user, setUser] = useState();
    const handleSubmit = e => {
      e.preventDefault();
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
   
    const handleChange = e =>
      setUser({ id: Date.now(), name: e.target.value });
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
   };

  export default PostData;