import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Container from "./Container";
import Link from "next/link";

const Header = () => {
  return (
    <header className="mt-8 mb-12">
      <Container>
        <div className="flex justify-between items-center gap-4 ">
          <div className="flex items-center gap-4">
            <p className="font-bold">
              <Link href="/dashboard">Invoicy</Link>
            </p>
            <span className="text-xl text-slate-400">/</span>
            <SignedIn>
              <span className="-ml-2">
                <OrganizationSwitcher afterCreateOrganizationUrl={"/dashboard"}/>
                {/* <OrganizationSwitcher hidePersonal/> */}
              </span>
            </SignedIn>
          </div>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
