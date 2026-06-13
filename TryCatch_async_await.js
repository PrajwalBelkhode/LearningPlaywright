const Authrequest = () =>{
    return new Promise((resolve) =>{
        resolve("Authentication token generated successfully");
    });
};

const CreateUser = () =>{
    return new Promise((resolve) =>{
        resolve("New user successfully");
    });
};

const EnterAddress = () =>{
    return new Promise((resolve) =>{
    resolve("Address entered successfully");
    });
};

const submitDetails = () =>{
    return new Promise((resolve, reject) =>{
        reject("Invalid Postal code");
    });
};

async function APITest(){
    try{
        let msg_1 = await Authrequest();
        console.log(`Step 1:`,msg_1);

        let msg_2 = await CreateUser();
        console.log(`Step 2:`,msg_2);

        let msg_3 = await EnterAddress();
        console.log(`Step 3`,msg_3);

        // Await submitDetails to trigger the catch block
        await submitDetails();
    } catch(error){
        console.log(`[ERROR]:`,error);
    }
}

APITest();