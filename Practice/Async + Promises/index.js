const validateUser = ({username, passoword}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username && passoword){
                resolve(`${username}, you were authorized successfully!`);
            }
            else {
                reject({message: 'Username and password form must not be blank!'});
            }
        }, 2000);
    });
};

const app = async () => {
    const data = {
        username: 'LastPeaksStorm',
        passoword: '***********'
    }

    try{
        console.log('Initializing...');
        const authorizingResult = await validateUser(data);
        console.log(authorizingResult);
    }
    catch(e){
        console.error(e.message);
    }
};

app();