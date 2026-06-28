headers: {
  'X-RequestDigest': document.getElementById('__REQUESTDIGEST').value,
  'IF-MATCH': '*',
  'X-HTTP-Method': 'MERGE' // or 'DELETE'
}