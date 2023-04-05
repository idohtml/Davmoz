import Image from "next/image";
import Davmoz from "@/public/images/David.jpg";

export default function Home() {
  return (
    <main>
      <section>
        <div className="grid grid-cols-2 place-items-center h-screen gap-4">
          <div>
            <Image
              className="rounded-xl"
              src={Davmoz}
              alt="Portrait of David Mozart"
            />
          </div>
          <div>
            <h1 className="text-4xl lg:text-6xl">Hi Im David 👋🏻</h1>
            <h2 className="text-xl lg:text-3xl lg:w-2/4">
              and Im a research engineer in Linnaeus University based in Kalmar,
              Sweden
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
