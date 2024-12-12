import Form from '../common/Form';
import FormStep from '../common/FormStep';

const handlers = ({ user }: any) => [
  {
    onLoad: async ({ value }: any) => {
      return user.auth.checkInvite({ invite: value });
    },
  },
  {
    onLoad: async ({ value }: any) => {
      return user.auth.checkUsername({ username: value });
    },
  },
  {
    onLoad: async ({ value }: any) => {
      return user.auth.reserve({ ...value });
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
