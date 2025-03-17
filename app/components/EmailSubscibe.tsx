import { Input } from "@/components/ui/input";

export default function EmailSubscibe() {
  return (
    <div className="flex w-[300px] md:w-[500px] justify-center mx-auto items-center border rounded-3xl font-sans text-sm">
      <Input
        type="email"
        placeholder="Email"
        className="border-none placeholder:text-lg pl-4 text-white active:border-none placeholder:text-sm z-10"
      />
      <p className="bg-white h-full py-2 px-4 rounded-r-2xl cursor-pointer ">
        Subscribe
      </p>
    </div>
  );
}
