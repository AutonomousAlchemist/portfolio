'use server'

import sql from '@/lib/db'; 
import { revalidatePath } from 'next/cache';

export type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  try {
    // Correct Tagged Template syntax
    // No parentheses, just backticks. 
    // The library handles the commas and sanitization automatically.
    await sql`
      INSERT INTO messages (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;

    revalidatePath('/'); 

    return { 
      success: true, 
      message: "Data transmitted successfully." 
    };

  } catch (error) {
    console.error("Database Error:", error);
    return { 
      success: false, 
      message: "Database connection failed." 
    };
  }
}