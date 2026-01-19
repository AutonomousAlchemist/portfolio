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
    // We use the function call syntax instead of backticks to satisfy the compiler
    // The Neon driver expects (query_string, [array_of_values])
    await sql(
      "INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)",
      [name, email, message]
    );

    revalidatePath('/'); 

    return { 
      success: true, 
      message: "Data transmitted successfully." 
    };

  } catch (error) {
    console.error("Database Error Detail:", error);
    return { 
      success: false, 
      message: "Neural link failed. Please try again." 
    };
  }
}