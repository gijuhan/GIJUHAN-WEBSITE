import { NextRequest, NextResponse } from 'next/server';
import { getPostHogClient } from '@/lib/posthog-server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, service, description, source } = body;

    if (!name || !email || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, service, description, source }),
    });

    const result = await response.json();

    if (result.success) {
      const distinctId = req.headers.get('X-POSTHOG-DISTINCT-ID') ?? email;
      const sessionId = req.headers.get('X-POSTHOG-SESSION-ID');
      const posthog = getPostHogClient();
      posthog.identify({ distinctId: email, properties: { name, email, company } });
      posthog.capture({
        distinctId,
        event: 'contact_lead_received',
        properties: {
          $session_id: sessionId ?? undefined,
          name,
          email,
          company,
          service,
          source,
        },
      });
      return NextResponse.json({ success: true });
    } else {
      throw new Error(result.error || 'Script error');
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
