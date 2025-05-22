import Form from "@/app/components/Form";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="w-2/6 border-2 p-6 rounded-xl xl:w-[420px]">
      <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-medium">Cadastro de Digital</h1>
      </div>

        <Form/>
      </div>

    </main>
  );
}
