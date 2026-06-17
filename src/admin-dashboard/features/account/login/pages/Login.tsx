import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SpinnerButton } from "@/admin-dashboard/shard/components/SpinnerButton";
import useLoginForm from "../hooks/useLoginForm";
import { ErrorMessage } from "@/admin-dashboard/shard/components/ErrorMessage";

export function Login() {
  const { errors, handleSubmit, onSubmit, isLoading, register } =
    useLoginForm();

  return (
    <section className="container max-w-xl  mx-auto flex flex-col justify-center min-h-screen ">
      <div className="shadow-2xl border border-gray-300 rounded-xl py-5 px-4">
        <h2 className="text-3xl px-3 mt-4 font-extrabold">
          Welcome To <span className="text-orange-600">Dash</span>Board
        </h2>
        <form
          className="space-y-3  p-5 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Input
              type="email"
              placeholder="Email..."
              {...register("email")}
              className="invalid:border-red-600"
            />
            <ErrorMessage msg={errors.email?.message} />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Password..."
              {...register("password")}
              className="invalid:border-red-600"
            />
            <ErrorMessage msg={errors.password?.message} />
          </div>
          <Button
            disabled={isLoading}
            className="cursor-pointer w-full bg-orange-600"
          >
            {isLoading ? <SpinnerButton /> : "LOGIN"}
          </Button>
        </form>
      </div>
    </section>
  );
}
