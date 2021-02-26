export default client => ({
  admins: () => client.get('/admins'),
  users: () => client.get('/users'),
  isAuth: () => client.get('/current_user').then(data => !!data)
});
