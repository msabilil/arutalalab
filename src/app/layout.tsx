import '@/styles/global.css'
import { Montserrat } from 'next/font/google'
import { Header } from '@/components'
import { Footer } from '@/components'

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['300', '400', '500', '600', '700']
})

const menuItems = [
    { label: 'IT Education', href: '/it-education' },
    { label: 'Resource', href: '/resource' },
    { label: 'Software Services', href: '/software-services' },
    { label: 'Profile', href: '/profile' },
    { label: 'Mitra', href: '/mitra' },
    { label: 'Article', href: '/article' }
]

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id" className={montserrat.variable}>
            <body className="font-sans">
                <Header
                    logo={{
                        src: '/src/logo.png',
                        alt: 'Logo Perusahaan',
                        href: '/'
                    }}
                    menuItems={menuItems}
                    contactButton={{
                        label: 'Kontak',
                        href: '/kontak'
                    }}
                />
                {children}

                <Footer
                    logo={{
                        src: '/src/logo.png',
                        alt: 'Logo Perusahaan'
                    }}
                    layananItems={[
                        { label: 'IT Education', href: '/it-education' },
                        { label: 'Resource', href: '/resource' },
                        {
                            label: 'Software Services',
                            href: '/software-services'
                        }
                    ]}
                    lainnyaItems={[
                        { label: 'Profile', href: '/profile' },
                        { label: 'Mitra', href: '/mitra' },
                        { label: 'Article', href: '/article' },
                        { label: 'Kontak', href: '/kontak' }
                    ]}
                    socialIcons={[
                        {
                            icon: '/src/instagram.svg',
                            href: 'https://www.instagram.com/arutalalab/',
                            alt: 'Instagram'
                        },
                        {
                            icon: '/src/youtube.svg',
                            href: 'https://www.youtube.com/@ArutalaLab',
                            alt: 'YouTube'
                        },
                        {
                            icon: '/src/linkedin.svg',
                            href: 'https://www.linkedin.com/company/pt-arutala-mitra-mandiri/posts/?feedView=all',
                            alt: 'LinkedIn'
                        }
                    ]}
                />
            </body>
        </html>
    )
}
