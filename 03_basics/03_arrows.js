const user = {
    username: "shamama",
    age: 20,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "imama"
// user.welcomeMessage()
console.log(this);