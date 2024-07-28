import { titleFont } from "@/config/font"
import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row  h-[600px] w-full justify-center items-center align-middle">
            <div className="text-center px-5 mx-5">
                <h2 className={`${titleFont.className} antialiased text-9xl`} > 404</h2>
                <p className="font-semibold text-xl">Lo sentimos mucho</p>
                <p className="font-light"><span>Puede regresar al
                </span>
                    <Link href={"/"}>inicio</Link>
                </p>
            </div>

            <div className="px-5 mx-5">
                <Image src={'/imgs/starman_750x750.png'} alt={"Starman"}
                    width={500}
                    height={500}
                    className="p-5 sm:p-0"
                ></Image>
            </div>
        </div>
    )
}
