import './globals.css';

export const metadata = {
    title: 'IMDB Top 250',
    description: 'IMDB Top 250',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
