import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import AdminsPage from './pages/AdminsPage';
import NotFoundPage from './pages/NotFoundPage';

export default [
  { ...App,
    routes: [
      { ...HomePage, path: '/', exact: true, },
      { ...UsersListPage, path: '/users' },
      { ...AdminsPage, path: '/admins' },
      { ...NotFoundPage }
    ]
  }
];
