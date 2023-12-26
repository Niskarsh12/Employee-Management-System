// API for managing employee benefits, including healthcare, insurance, and retirement plans.
import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";


/**
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res
*/


export default async function POST(req, res){
    const { employeeId, type, startDate, endDate } = req.body;
    try {
        console.log("Request received");
        if (req.method != "POST") {
            return res
            .status(405)
            .json({ message: "Method not allowed" })
        }

        console.log(req.body);

        const data = JSON.parse(req.body);

        await prisma.benefit.create({
            data: {
                type,
                startDate,
                endDate,
                employee: {
                    connect: { id: employeeId },
                },
            },
        });
    } catch (error) {
        console.log(error);
        return res
        .status(400)
        .json({ message: "The Employee Benefits Route is not working." })
    }
}