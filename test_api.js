const key = 'AIzaSyA4P5CsoHEXlrwSgBucxUxmA5D9bJtPXNE';
const models = [
  'gemini-flash-latest', 
  'gemini-pro-latest', 
  'gemini-2.0-flash-lite', 
  'gemini-2.5-pro',
  'gemini-2.5-flash',
  'gemini-2.0-flash-lite-preview-02-05'
];

async function test() {
  for (const m of models) {
    try {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + m + ':generateContent?key=' + key, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: 'hi' }] }] })
      });
      const d = await r.json();
      if (r.ok) {
        console.log(m + ' -> SUCCESS');
      } else {
        console.log(m + ' -> Error: ' + (d.error?.message || r.status));
      }
    } catch (e) {
      console.log(m + ' -> Fetch Error');
    }
  }
}

test();
