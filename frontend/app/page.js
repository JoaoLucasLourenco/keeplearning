import "./globals.css";
export default function Home() {
  return (
    <div className="border">
      <header>
        <nav className="">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse font-semibold text-2xl"
            >
              Keep
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">
                Learning
              </span>
            </a>
            <a
              href="#"
              className="flex items-center hover:bg-blue-100 hover:text-blue-700 hover:border-blue-700 text-md border border-blue-500 text-blue-500 py-1 px-5 rounded-full"
            >
              <span>Entrar</span>
            </a>
          </div>
        </nav>
      </header>
      <main
        className="max-w-screen-md
        flex
        flex-wrap
        items-center
        justify-center
        mx-auto
        p-4
        text-center
        gap-3
        "
      >
        <h1 className="text-6xl font-bold">
          Antecipe, atue e <span className="text-blue-500">transforme</span> a
          jornada dos seus alunos!
        </h1>
        <h2 className="text-gray-500 font-semibold">
          O <span className="font-bold text-gray-700">KeepLearning</span> é uma
          solução de inteligência artificial desenvolvida para apoiar
          professores e coordenadores na redução da evasão acadêmica.
        </h2>
        <a
          href="#"
          className="flex justify-center items-center hover:bg-blue-700 text-md bg-blue-500 text-white py-1 px-5 rounded-full"
        >
          Começar
        </a>
      </main>
    </div>
  );
}
