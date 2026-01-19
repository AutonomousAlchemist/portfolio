'use server'

import sql from '@/lib/db'; 
import { revalidatePath } from 'next/cache';

// Define a type for the response to keep page.tsx happy
export type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(formData: FormData): Promise<FormState> {
  // 1. Extract and cast data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // 2. Basic Server-side validation
  if (!name || !email || !message) {
    return { 
      success: false, 
      message: "All fields are required." 
    };
  }

  // Basic email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please provide a valid email address."
    };
  }

  try {
    // 3. Database Insertion
    // Note: Neon's sql helper treats backticks as a single template string.
    // This syntax is the most robust way to handle parameterized queries.
    await sql(
      'INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );

    // 4. Refresh the page data if needed
    revalidatePath('/'); 

    return { 
      success: true, 
      message: "Thank you! Your message has been sent." 
    };

  } catch (error) {
    // 5. Detailed error logging for your console
    console.error("Database Error Detail:", error);
    
    return { 
      success: false, 
      message: "Database connection failed. Please try again later." 
    };
  }
}