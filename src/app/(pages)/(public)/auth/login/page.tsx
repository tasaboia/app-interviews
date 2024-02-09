"use client";
import Text from "@/app/shared/components/Text";
import { Checkbox } from "flowbite-react";
// import { useRecoilState } from "recoil";

export default function LoginPage() {
  // const [state, setState] = useRecoilState(onboardingState);
  // const auth = useAuth();

  const handleSubmitLogin = async (value: {
    username: string;
    password: string;
  }) => {
    // auth.login(value.username, value.password);
  };
  const handleCheckboxChange = () => {
    // setState((prevState) => ({
    //   ...prevState,
    //   isOnboarding: !prevState.isOnboarding,
    // }));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <Text.Heading
            sizes="sm"
            className="mt-12 mb-8 text-center animate-fade-up animate-delay-200 animate-duration-400"
          >
            Acesse sua Conta
          </Text.Heading>
          {/* <LoginForm onSubmit={(value) => handleSubmitLogin(value)} /> */}
          <div className="flex items-center gap-2">
            <Checkbox
              defaultChecked
              id="disabled"
              // value={state.isOnboarding}
              onChange={handleCheckboxChange}
            />
            <span>Redirecionamento para Onboarding</span>
          </div>
        </div>
      </div>
    </main>
  );
}
