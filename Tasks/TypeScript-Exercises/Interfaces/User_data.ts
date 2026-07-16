// Define interfaces for user data -- done
// Create interfaces with optional properties -- done
// Extend interfaces for inheritance -- done

interface User{
    id: number;
    Name: string;
    Email: string;
    Contact_no?: number
}

let heat_wave_1 : User = {
    id: 1,
    Name: "Andy Joseph",
    Email: "andy27@hotmail.com",
    Contact_no: 167012457
}

let moon_surfer_97 : User = {
    id: 2,
    Name: "Barbara Chen",
    Email: "barbara_chen_97@yahoo.com",
    Contact_no: 89124571
}

console.log(`Welcome ${heat_wave_1.Name} to the Jungle.com!!!`);
console.log(`Welcome ${moon_surfer_97.Name} to the Jungle.com!!!`);

interface customerFeedback extends User {
    Product_Id: number;
    Product_Name?: string;
    CustomerRating: number
}

let band_rockerz: customerFeedback = {
    id: 3,
    Name: "Houston barnes",
    Email: "houstan119@gmail.com",
    Product_Id: 189_120_22,
    Product_Name: "JBL Wired earphones",
    CustomerRating: 4.5
}

console.log(`Thank you ${band_rockerz.Name} for you valuable rating ${band_rockerz.CustomerRating} on : ${band_rockerz.Product_Name}`);