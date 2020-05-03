module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Mike Twink',
          email: 'mike.btex@gmail.com',
          phone_number: '+55 99999-9999',
          specialty_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'John Abrahan',
          email: 'brahan.btex@gmail.com',
          phone_number: '+55 99999-9999',
          specialty_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Matheus Io',
          email: 'matheus_io.btex@gmail.com',
          phone_number: '+55 99999-9999',
          specialty_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
