import { Template } from '@/components/email/template/Template';
import { Resend } from 'resend';
// --
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request, response) {
  const { email, message } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['luisfelipemillanprado@gmail.com'],
      subject: 'Hello',
      react: Template({ email, message }),
    });
    if (error) {
      return Response.json({ error });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
