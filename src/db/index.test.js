const db = require('./index.js');

test('should return a connection message from the DB', async () => {
  await db.dbTest()
  .then((response) => {
    expect(response).toBe('MONGO HUNGRY!!')
  })
})