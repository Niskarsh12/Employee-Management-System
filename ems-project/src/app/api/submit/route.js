import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";


/**
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res
*/


export default async function POST(req, res){
    try {
        console.log('Request Received');
        if (req.method != 'POST') {
            return res
            .status(405)
            .json({ message: "Method not allowed" })
        }
    
        console.log(req.body);
    
        const data = JSON.parse(req.body);
    
        await prisma.employee.create({
            data: {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                salary: parseInt(data.salary)
            }
        }).catch((error) => {
            console.log(error);
            return res
            .status(500)
            .json({ message: "Internal Server Error" })
        })
    
        console.log("Employee Details have been entered.");
    
        // returning success message
        return res
        .status(200)
        .json({ message: "Employee has been created" })
    } catch (error) {
        console.log(error);
        return res
        .status(400)
        .json({ message: "The Route is not working." })
    }
} 