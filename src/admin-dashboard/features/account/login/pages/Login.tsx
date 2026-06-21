import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SpinnerButton } from "@/admin-dashboard/shard/components/SpinnerButton";
import useLoginForm from "../hooks/useLoginForm";
import { ErrorMessage } from "@/admin-dashboard/shard/components/ErrorMessage";
import { Label } from "@/components/ui/label";
import logo from "@/assets/Singaporean.png"

export function Login() {
  const { errors, handleSubmit, onSubmit, isLoading, register } =
    useLoginForm();

  return (
    <section className="container max-w-100  mx-auto flex flex-col justify-center min-h-screen ">
      <div className="shadow-xl border border-[#E9E9E9] rounded-[5px] py-5 px-4">
       <div className="flex items-center justify-center" >
        <img className=" w-14 h-14 -rotate-6 relative left-4" src={logo} alt="logo" />
         <h2 className="text-2xl  mt-2 italic font-extrabold #000000 font-heading text-center">
          FoodTrove{" "}
        </h2>
       </div>
        <form
          className="space-y-3  p-5 rounded-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <Label className="text-[13px] text-[#444444]">Email Address*</Label>
            <Input
              type="email"
              placeholder="Enter Your Email..."
              {...register("email")}
              className="invalid:border-red-600"
            />
            <ErrorMessage msg={errors.email?.message} />
          </div>
          <div>
            <Label className="text-[13px] text-[#444444] leading-4">
              Password*
            </Label>

            <Input
              type="password"
              placeholder="Enter your Password..."
              {...register("password")}
              className="invalid:border-red-600"
            />
            <ErrorMessage msg={errors.password?.message} />
          </div>
          <Button
            disabled={isLoading}
            className="cursor-pointer rounded-[5px] bg-[#F53E32] hover:border-[#F53E32] hover:outline hover:bg-white hover:text-black transition-colors"
          >
            {isLoading ? <SpinnerButton /> : "Login"}
          </Button>
        </form>
      </div>
    </section>
  );
}
