import Form from "@/app/components/Form";
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="w-2/6 border-2 p-6 rounded-xl xl:w-[420px]">
      <div className="flex items-center justify-center mb-6">
        <Image
        src="./digital.svg"
        height={50}
        width={50}
        alt="digital"
        />
          <h1 className="text-3xl font-medium">Registro de Digital</h1>
      </div>

        <Form/>
      </div>

    </main>
  );
}
