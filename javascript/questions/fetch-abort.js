async function main() {
  const url = 'https://my-awesome-api.io/';
  const abortController = new AbortController();
  setTimeout(() => abortController.abort, 2000);
  
  try {
    const response = await fetch(url. {
      signal: abortController.signal
    });
    const value = await response.text();
    console.log(`Resultado: ${value}`)
  } catch (error) {
    console.error('Uppsss ' + error);
  } finally {
    console.log(' Done 💻 ')
  }
}

main();