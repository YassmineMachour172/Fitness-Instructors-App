
/* function that submit the form */
const submitForm = async (data, e) => {
    console.log("the data is"+data);
    
    /* define the logIn request message */
    const storedSession = localStorage.getItem('session');
    e.preventDefault();
    console.log("requesting 1");
    const requestMsg = {
        method: 'POST',
        headers: {'Content-Type': '/api/submit-form'},
        body: JSON.stringify(
            {
                title: 'SignIn',
                email: data.email,
                password: data.password,
            })
    };

console.log("requesting befire fetch");


const response = await fetch('/SignIn', requestMsg);/* send the request to the server */
console.log(response);
if (!response.ok) {/* if the response is not ok, alert the user */
    setMsgModal('Invalid Login Details');
    localStorage.clear();
    return;
}
let responseData = await response.json(); /* retrieve the response data */
responseData = JSON.parse(responseData.body); /* parse the response data */
console.log(responseData)
handleClickDashboard()  
};





const submitForm = async (data, e) => {
    e.preventDefault();
    try{
        const dd=data
        
        await axios.post("https://back-e.vercel.app/#/SignIn",{
            dd
        })
    }catch(e){
        console.log(e);
    }
    
}