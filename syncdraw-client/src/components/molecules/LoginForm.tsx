import Input from "../atoms/Input";
import Button from "../atoms/Button";

const LoginForm = () => {
  return (
    <div className="space-y-4">
      <Input placeholder="Email address" type="email" autoFocus />

      <Input placeholder="Password" type="password" />

      <Button title="Sign In" />
    </div>
  );
};

export default LoginForm;
