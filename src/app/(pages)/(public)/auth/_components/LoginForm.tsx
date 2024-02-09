"use client";
import { useForm } from "react-hook-form";
import Form, { Input, InputPassword } from "@/app/shared/components/Forms";
import Link from "@/app/shared/components/Link";
import Button from "@/app/shared/components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "@/app/shared/utils/validations";

const LoginForm = ({ onSubmit }: any) => {
  const { handleSubmit, watch, setValue, ...rest } = useForm<{
    username: string;
    password: string;
  }>({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleSubmitLogin = (value: any) => onSubmit(value);

  return (
    <Form
      methods={rest}
      onSubmit={handleSubmit(handleSubmitLogin)}
      className="flex flex-col w-full gap-y-7 animate-fade-up animate-delay-200 animate-duration-400"
    >
      <Input
        name="username"
        label="Digite seu email"
        placeholder="Seu email"
        className="rounded-lg"
      />
      <InputPassword
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        className="rounded-lg"
      />
      <Link
        href="forgot-password"
        className="block text-sm text-neutral-500 underline"
      >
        Não lembro a minha senha
      </Link>
      <Button
        type="submit"
        className="w-full"
        disabled={false}
        loading={false}
        size="lg"
      >
        Acessar minha conta
      </Button>
    </Form>
  );
};

export default LoginForm;
