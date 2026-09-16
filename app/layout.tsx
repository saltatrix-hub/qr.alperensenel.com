import type { Metadata } from 'next';import './globals.css';
const title='QR Kod — Ücretsiz QR Kod Oluşturucu',description='Bağlantı, metin ve kartvizit için özelleştirilebilir QR kodlar oluştur.';
export const metadata:Metadata={metadataBase:new URL('https://qr.alperensenel.com'),title,description,openGraph:{title,description,type:'website',images:['/og.png']},twitter:{card:'summary_large_image',title,description,images:['/og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
