import {test,expect} from "@playwright/test";
import { generateRandomString, generateRandomDate } from "../../utility/reusableMethods";
import 'dotenv/config'
   
    test("Booker API WorkFlow", async({request})=>{
        const response=await request.post("https://restful-booker.herokuapp.com/auth",{
            data:{
                username:process.env.APIUsername,
                password:process.env.APIPassword
            }
        });
        expect(response.status()).toBe(200);
        const token = (await response.json()).token;
        console.log("Token:",token);
        // Create Booking
        const bookingresponse=await request.post("https://restful-booker.herokuapp.com/booking",{
            data:{
                firstname:generateRandomString(5),
                lastname:"Brown",
                totalprice:111,
                depositpaid:true,
                bookingdates:{
                    checkin:"2018-01-01",
                    checkout:generateRandomDate()
                },
                additionalneeds:"Breakfast"
            }
        });
        expect(bookingresponse.status()).toBe(200);
        const bookingid = (await bookingresponse.json()).bookingid;
        console.log("Booking ID:",bookingid);
        // Get Booking by ID
        const getbookingresponse=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingid}`);
        expect(getbookingresponse.status()).toBe(200);
        const bookingrespdata=await getbookingresponse.json();
        console.log("Booking Details:",bookingrespdata);
        // Update Booking by ID
        const updatebookingresponse=await request.put(`https://restful-booker.herokuapp.com/booking/${bookingid}`,{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Cookie":`token=${token}`
            },
            data:{
                firstname:"James",
                lastname:"Brown",
                totalprice:222,
                depositpaid:false,
                bookingdates:{
                    checkin:"2019-01-01",
                    checkout: generateRandomDate()
                },
                additionalneeds:"Lunch"
            }
        });
        expect(updatebookingresponse.status()).toBe(200);
        const updatebookingrespdata=await updatebookingresponse.json();
        console.log("Updated Booking Details:",updatebookingrespdata);
        // Partial Update Booking by ID
        const partialupdatebookingresponse=await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingid}`,{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json",
                "Cookie":`token=${token}`
            },
            data:{
                firstname:"Jimmy",
                lastname:generateRandomString(5)
            }
        });
        expect(partialupdatebookingresponse.status()).toBe(200);
        const partialupdaterespdata=await partialupdatebookingresponse.json();
        console.log("Partially Updated Booking Details:",partialupdaterespdata);
        // Delete Booking by ID
         const deletebookingresponse = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingid}`,{
            headers:{
                "Cookie":`token=${token}`
            }
        });
        expect(deletebookingresponse.status()).toBe(201);
        console.log(`Booking with ID ${bookingid} deleted successfully.`);

    });

    
    


    