export default function Header() {
  return (
    <header className="w-full h-36 flex">
      <img
        src="https://moodle.ifsc.edu.br/pluginfile.php/330675/mod_resource/content/1/Logo_IFSC_ParaVideoaula.png"
        alt="IFSC Logo"
        className="w-32 h-32"
      />
      <div className="flex justify-center items-center">
        <h1 className="text-3xl">
          Desenvolvimento de um sistema embarcado para medição da radiação solar
          através de células de referência de baixo custo - Resultados
        </h1>
      </div>
    </header>
  );
}
