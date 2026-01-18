'use server'
import db from '@/lib/db';

export async function sendContactForm(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  // Validation
  if (!name || !email || !message) {
    return { success: false, message: 'Please fill in all fields.' }
  }

  // HERE IS WHERE YOU WOULD CONNECT TO AN EMAIL SERVICE
  // For now, we will simulate a successful send so you can test the UI.
  console.log('--- NEW MESSAGE RECEIVED ---')
  console.log(`From: ${name} (${email})`)
  console.log(`Message: ${message}`)
  console.log('-----------------------------')

  // Simulator delay to look cool
  await new Promise(resolve => setTimeout(resolve, 1000))

  try {
    // Insert data into the SQLite database
    const stmt = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
    stmt.run(name, email, message);

    console.log(`✅ Success: Message from ${name} saved to local DB.`);
    
    return { success: true, message: 'Your message has been saved locally!' };
  } catch (error) {
    console.error('Database Error:', error);
    return { success: false, message: 'Failed to save message. Please try again.' };
  }


  return { success: true, message: 'Message sent successfully!' }
}