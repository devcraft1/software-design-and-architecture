
var myData = async () => {
    try {
       const raw_response = await fetch("https://jsonplaceholder.typicode.com/users");
       if (!raw_response.ok) { // check for the 404 errors
           throw new Error(raw_response.status);
       }
       const json_data = await raw_response.json();
          console.log(json_data);
       }
       catch (error) { // catch block for network errors
            console.log(error); 
        }
}
console.log(myData())