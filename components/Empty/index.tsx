import { useRouter } from "next/router";
import Button from "../Button";
import { createSession } from "@/requests";
import { useState } from "react";
import Image from "next/image";

export default function Empty() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleCreateSession = async () => {
    setIsLoading(true);
    const sessionId = await createSession();
    router.push(sessionId);
  };

  return (
    <div className="flex h-auto mx-5 my-10 py-10 justify-center items-center space-y-10 flex-col border border-[#E4F2FF] rounded-2xl font-anek-latin">
      {/** icon */}
      <div className="bg-light-blue rounded-full flex justify-center items-center w-[180px] h-[180px]">
        <div className="relative">
          <Image
            src="/icons/list.svg"
            alt="doc icon"
            className="w-24 h-28"
            width={96}
            height={112}
          />
          <div className="absolute -bottom-[24px] -right-[24px] rounded-full bg-light-blue p-2">
            <div className="bg-primary-blue rounded-full p-4">
              <Image
                src="/icons/warning.svg"
                alt="plus icon"
                className="w-8 h-8"
                width={32}
                height={32}
              />
            </div>
          </div>
        </div>
      </div>

      {/** title */}
      <div className="px-10 flex flex-col justify-center items-center">
        <h1 className="font-semibold text-dark-blue text-2xl mb-5">Uuups!</h1>
        <h2 className="text-lg text-[#000F1D] text-center mb-10">
          Podana lista nie istnieje :(
        </h2>
        <p className="text-sm text-[#000F1D] text-center font-light">
        Prawdopodobnie masz błąd w linku do listy lub link jest niekompletny.
        </p>
      </div>
      <div className="space-y-2">
        <Button
          title="Stwórz nową listę"
          handler={handleCreateSession}
          isLoading={isLoading}
          bgStyle="bg-primary-blue"
          textStyle="text-white-on-blue"
          icon={
            <Image
              src="/icons/plus.svg"
              alt="plus icon"
              className="w-2 h-2"
              width={8}
              height={8}
            />
          }
        />
        <Button
          title="Wróć do widoku list"
          handler={() => router.push("/")}
          bgStyle="bg-white"
          textStyle="text-medium-blue"
          icon={
            <Image
              src="/icons/arrow-back-join.svg"
              alt="ikona strzałki"
              className="w-3 h-3"
              width={12}
              height={12}
            />
          }
        />
      </div>
    </div>
  );
}
