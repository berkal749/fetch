const requestOne = axios.get("https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");
const requestTwo = axios.get(https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt");
const requestThree = axios.get("https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");

axios
 .all([requestOne, requestTwo, requestThree])
 .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
     console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
   })
 )
 .catch(errors => {
   console.error(errors);
 });