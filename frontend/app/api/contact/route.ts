export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields (name, email, message) are required." },
        { status: 400 }
      );
    }

    // Cloudflare Pages doesn't support raw TCP for SMTP. 
    // We use an HTTP-based email API like Resend here.
    // Set RESEND_API_KEY in your Cloudflare Pages environment variables.
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY is not set. Simulating email send for development.");
      console.log("Form data:", { name, email, message });
      // Return success in dev to allow testing the UI
      return Response.json({ message: "Email simulated successfully (API key missing)" });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify({
        // Note: You will need to verify a domain in Resend and update this "from" address
        from: 'Contact Form <onboarding@resend.dev>', 
        to: 'timothyou97@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        reply_to: email,
      })
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Resend API Error:", errorData);
      return Response.json({ error: "Failed to send email." }, { status: 500 });
    }

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact API Error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
