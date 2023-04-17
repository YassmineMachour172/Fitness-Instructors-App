app.post('/logIn', (req, res) => {
    console.log("POST login")
  
    if (req.body.title !== "LogIn") { // check if the request is valid
        res.status(400)
        res.send("Bad Login Request.")
        return
    }
  
    /* retrieve user from db */
    app.post('http://localhost:3000/SignIn', (req, res) => {
    console.log("POST signin")

    if (req.body.title !== "SignIn") { // check if the request is valid
        res.status(400)
        res.send("Bad Login Request.")
        return
    }

    /* retrieve user from db */
    const trainee=new Trainee({
    email:req.body.email,
    fName:"String",
    lName:"String",
    phone:"String",
    pass:req.body.password,
    age:5,
    gender:"String",
    weight:6,
    height:6,
    Status:0})  
    databaseConnection.query(trainee, [req.body.email, req.body.password],
        (err, result) => {
            if (err) { // check if there is an error
                res.status(500)//Internal server error
                res.send(err)
                return
            }

            if (result.length === 0) { 
                res.status(400)//bad request
                res.send("Invalid login parameters.")
                return
            }

            // define the response message
            const resMsg = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(
                    {
                        title: 'SignIn',
                        loginResult: 'OK',
                        firstName: result[0].fName,
                        lastName:  result[0].lName,
                    })
            }
            res.type('application/json')
            res.send(resMsg) // send the response
        })
})