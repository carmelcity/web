import Form from '../common/Form';
import FormStep from '../common/FormStep';

const handlers = ({ user }: any) => [
  {
    onLoad: async ({ value, query }: any) => {
      const { registrationToken } = query;
      return user.auth.checkUsername({ username: value, registrationToken });
    },
  },
  {
    onLoad: async ({ value, query }: any) => {
      const { registrationToken } = query;
      return user.auth.checkEmail({ email: value, registrationToken });
    },
  },
  {
    onLoad: async ({ value, query }: any) => {
      const { registrationToken } = query;
      return user.auth.register({ ...value, registrationToken });
    },
  },
];

export default (props: any) => {
  return (
    <Form {...props}>
      <FormStep {...props} handlers={handlers(props)} />
    </Form>
  );
};
