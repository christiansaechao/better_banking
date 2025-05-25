import { Request, Response } from "express";
import bcrypt from "bcrypt";
import supabase from "../config/supabaseClient";

export const handleNewEmployee = async (req: Request, res: Response) => {
	const { name, age, occupation, branch_location, status, password } = req.body;
	if (!name || !password){
		res.status(400).json({ msg: "username and password are required" });
		return;
	}
	
	try {
		const { data: existingEmployees, error: fetchError } = await supabase.from("employees").select("*");
		
		if (fetchError) throw fetchError;

		if (existingEmployees && existingEmployees.length > 0) {
			res.sendStatus(409); // Conflict
			return;
		}

		//encrypt the password
		const hashedPass = await bcrypt.hash(password, 10);

		//store the new user
		const newUser = { name, age,occupation, branch_location, status, password: hashedPass };
		const { error: insertError } = await supabase.from("employees").insert([newUser]);

		if (insertError) throw insertError;

		res.status(201).json({ success: `New user ${name} created!` });
	} catch (err: unknown) {
		if (err instanceof Error) {
			res.status(500).json({ message: err.message });
		} else {
			res.status(500).json({ message: "An unknown error occurred" });
		}
	}
};
