import "./globals.css";
export default function Home() {
  return (
    <div className="">
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
      <main></main>
    </div>
  );
}
