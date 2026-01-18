//import db from '@/lib/db';
//import { sql } from '@vercel/postgres';
//import { revalidatePath } from 'next/cache';
'use server'

import pool from '@/lib/db'; // Make sure this name matches
import { revalidatePath } from 'next/cache';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    // This is where you were getting the "Cannot find name 'pool'" error
    await pool.sql`
      INSERT INTO messages (name, email, message)
      VALUES (${name}, ${email}, ${message});
    `;
     
    return { success: true };
  } catch (error) {
    console.error('Database Error:', error);
    return { success: false };
  }
}
  // Validation
//  if (!name || !email || !message) {
//    return { success: false, message: 'Please fill in all fields.' }
//  }

  // HERE IS WHERE YOU WOULD CONNECT TO AN EMAIL SERVICE
  // For now, we will simulate a successful send so you can test the UI.
//  console.log('--- NEW MESSAGE RECEIVED ---')
//  console.log(`From: ${name} (${email})`)
//  console.log(`Message: ${message}`)
//  console.log('-----------------------------')

  // Simulator delay to look cool
//  await sql`
//  INSERT INTO messages (name, email, message)
//  VALUES (${name}, ${email}, ${message});
//`;
//  try {
    // Vercel Postgres uses backticks (`) and ${variable} 
    // It automatically handles security (SQL Injection) for you.
//    await sql`
//      INSERT INTO messages (name, email, message)
//      VALUES (${name}, ${email}, ${message});
//    `;

    // This clears the cache so the new message shows up if you have a list
//    revalidatePath('/'); 
    
//    return { success: true };
//  } catch (error) {
//    console.error('Database Error:', error);
//    return { success: false, error: 'Failed to send message.' };
//  }


//  return { success: true, message: 'Message sent successfully!' }
//}