const PORT = process.env.PORT || 3333;

(async () => {
  const { setupApp } = await import('../src/app');
  const app = setupApp();
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  })
})();