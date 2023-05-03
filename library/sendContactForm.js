export const sendContactForm = async (data) =>
  fetch('/api/contactAPI', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/JSON'
    },
  }).then(res => {
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  })