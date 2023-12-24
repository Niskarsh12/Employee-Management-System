import Hero from '/public/Home.png';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 via-cyan-600 to-pink-500">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h1 className="p-6 md:p-24 text-4xl md:text-5xl font-bold text-center md:text-left">
            Connecting People, Empowering Teams: Your Ultimate HR Toolkit.
          </h1>
          <p className="p-6 text-lg md:pl-24 md:pr-2 font-medium text-center md:text-left">
            Unlock organizational success with our Ultimate HR Toolkit: recruiting excellence, fostering engagement, and building a thriving workplace culture. Connect people, empower teams, and drive results.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Link href="/">           
              <Image src={Hero} width={400} height={400} className="mt-6 md:mt-0" />            
          </Link>
        </div>
      </div>
    </div>
  );
}
