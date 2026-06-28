// Before (localStorage):
function loadData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// After (Power Automate API):
async function loadData() {
  const response = await fetch(API_URL + '?operation=getData');
  return await response.json();
}
async function saveSubmission(memberId, weekKey, update, notes) {
  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      operation: 'saveSubmission',
      memberId, weekKey, update, notes,
      submittedAt: new Date().toISOString()
    })
  });
}