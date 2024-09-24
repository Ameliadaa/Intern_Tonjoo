import Link from 'next/link';
import AuthCard from '@/app/(auth)/AuthCard'; 
// import ApplicationLogo from '@/component/ApplicationLogo';
import Image from 'next/image'
import LogoApps from "../../../public/LogoApps.svg"; 


export const metadata = { 
    title: 'File Uploader', 
}

const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <Link href="/">
                            {/* <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" /> */}
                            <Image src={LogoApps} width={100} height={100} />
                        </Link>
                    }>
                    {children}
                </AuthCard>
            </div>
        </div>
    )
}

export default Layout
