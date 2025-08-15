import { UsernameInput } from "@/components/UsernameInput";

export default function PageThree() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
        <UsernameInput pageName="Page Three" />
      </div>
    </div>
  );
}
