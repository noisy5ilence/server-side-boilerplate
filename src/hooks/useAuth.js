import { useQueryClient } from 'react-query';

export default () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(['isAuth']) || false;
};
