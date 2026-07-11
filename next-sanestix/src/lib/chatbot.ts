const N8N_WEBHOOK_URL = 'https://n8n.sanestix.cloud/webhook/Chatbot';

export function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let sid = sessionStorage.getItem('sx_chat_session');
  if (!sid) {
    sid = 'sx_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    sessionStorage.setItem('sx_chat_session', sid);
  }
  return sid;
}

export async function fetchBotReply(userMessage: string): Promise<string> {
  const sessionId = getSessionId();

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: userMessage,
        chatInput: userMessage,
        sessionId,
        source: 'website_chat',
      }),
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();

    const reply =
      data.output ||
      data.reply ||
      data.message ||
      data.text ||
      data.response ||
      (Array.isArray(data) &&
        data[0] &&
        (data[0].output || data[0].reply || data[0].message || data[0].text)) ||
      'Thanks for your message! Our team will be in touch shortly.';

    return reply;
  } catch (err) {
    console.error('Chatbot webhook error:', err);
    return 'Got your message! Reach us on <a href="https://wa.me/923014422951" target="_blank" style="color:var(--color-cyan)">WhatsApp</a> for instant help.';
  }
}
