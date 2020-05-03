module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert('specialties', [
      {
        name: 'Marketing',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Business',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Logística',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: () => {},
};
