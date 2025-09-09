import { useEffect, useState } from "preact/hooks";


export function App() {
 

  
   const [data, setData] = useState();// where to store the returned data
 const [error, setError] = useState(null);// where to store the coming errors
 useEffect(() => {
   function fetchData() {// the function to fetch data from the api
     fetch("https://hn.algolia.com/api/v1/search?query=redux")
       .then(res => res.json())
       .then(res => setData(res))
       .catch(err => setError(err));
   }

   fetchData();
 }, []);
 return (<div>
     <ul>
       {data.map(course => (
         <li>
           <a href={course.url}> {course.title}</a>
         </li>
       ))}
     </ul>
   </div>)
  
}
