import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HeartIcon,
} from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"

function Header() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50 py-2">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto lg:px-4 xl:px-0">
                {/* Left */}
                <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                        src="/static/images/insta.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div onClick={() => router.push('/')} className="relative lg:hidden w-10 flex-shrink-0 cursor-pointer">
                    <Image
                        src="/static/images/insta-logo-mobile.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                {/* Middle */}
                <div className="max-w-sm hidden md:block">
                    <div className="relative rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                </div>
                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => router.push('/')} className="navBtn" />

                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn rotate-45 pb-1" />
                                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
                                    3
                                </div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn animate-bounce" />
                            <UserGroupIcon className="navBtn" />
                            <HeartIcon className="navBtn" />

                            <img
                                onClick={signOut}
                                src={session.user.image}
                                alt="Profile Picture"
                                className="h-10 rounded-full cursor-pointer"
                            />
                        </>
                    ) : (
                        <button onClick={signIn}>Sign in</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
