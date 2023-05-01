e.preventDefault();
try{
    const email=data.email
    console.log(email);
    const password=data.password
    console.log(password);
    await axios.post("../Register",{
        email:email,
        password:password
    })
}catch(e){
    console.log(e)
}

const signUpForm = document.querySelector('#sign-up-form');

signUpForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = signUpForm.querySelector('#email-input').value;
  const password = signUpForm.querySelector('#password-input').value;

  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const responseData = await response.json();

  // Handle the response data here
});
