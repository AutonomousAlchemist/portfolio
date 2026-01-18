'use server'

import sql from '@/lib/db'; // This is the neon() function we exported
import { revalidatePath } from 'next/cache';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    await sql`INSERT INTO ...`;
    
    return { 
      success: true, 
      message: "Message sent successfully!" // Add this line
    };
  } catch (error) {
    console.error(error);
    return { 
      success: false, 
      message: "Something went wrong. Please try again." // Add this line
    };
  }
}