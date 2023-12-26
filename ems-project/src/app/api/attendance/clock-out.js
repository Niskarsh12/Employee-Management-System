// API for tracking employee attendance, including clock-in/clock-out times and absence information.
import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";


/**
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res
*/


export default async function POST(req, res){
    const { employeeId } = req.body;
    try {
        console.log("Request received.");
        if (req.method != "POST") {
            return res
            .status(405)
            .json({ message: "method not found!" });
        }

        console.log(req.body);
        
        const data = JSON.parse(req.body);
        
        await prisma.attendance.create({
            data: {
                status: "Clock Out",
                timestamp: new Date(),
                employee: {
                    connect: { id: employeeId },
                },
            },
        }).catch((error) => {
            console.log(error);
            return res
            .status(500)
            .json({ message: "Internal Server Error" })
        })

        console.log("Clock-out details have been entered.");

        // returning a success message
        return res
        .status(200)
        .json({ message: "Attendance for clock out session has been maintained." })
    } catch (error) {
        console.log(error);
        return res
        .status(400)
        .json({ message: "The Clock-out route is not working." })
    }
}