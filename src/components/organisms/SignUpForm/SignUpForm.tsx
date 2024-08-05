import { Button } from "@/components/atoms/Button";
import { FormTextInput } from "@/components/molecules/FormTextInput";
import styles from "./SIgnUpForm.module.scss";

export function SignUpForm() {
  return (
    <div className="max-w-[1200px] m-auto flex flex-col items-center gap-[50px] justify-center h-screen">
      <div className="flex flex-col gap-[10px]">
        <h1 className="font-semibold text-[32px] leading-[1] text-center">
          Create your Tally account
        </h1>
        <p className="text-lg text-[#888888]">
          Don’t lose access to your forms by creating a Tally account.
        </p>
      </div>

      <div className={styles["form-section"]}>
        <form className="flex flex-col w-full gap-5">
          <FormTextInput id="firstName" label="First name" />
          <FormTextInput id="lastName" label="Last name" />
          <FormTextInput id="email" label="Email" />
          <FormTextInput id="password" label="Password" />
          <Button>Sign up</Button>
        </form>
        <span className={styles["terms-text"]}>
          By clicking &apos;Sign up&apos;, you agree to our{" "}
          <a className={styles["terms-link"]} href="/">
            Terms & Privacy Policy
          </a>
          . Already have an account?{" "}
          <a className={styles["terms-link"]} href="/">
            Log in.
          </a>
        </span>
      </div>
    </div>
  );
}
