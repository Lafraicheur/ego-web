const BigText = (): JSX.Element => {
  return (
    <section className="min-h-screen w-screen overflow-hidden bg-[#0F0F0F] text-[#FF4C00]">
      <h2 className="grid w-full gap-[2vw] py-10 text-center font-black leading-[.75]">
        <div className="text-[16vw] uppercase">Abidjan</div>
        <div className="grid gap-[3vw] text-[13vw] uppercase md:flex md:text-[10vw]">
          <span className="inline-block text-white">roule </span>
          <span className="inline-block text-white">avec </span>
        </div>
        <div className="text-[28vw]">e-Go</div>
      </h2>
    </section>
  );
};

export default BigText;
