import Link from 'next/link'
const CancelPage: React.FC = () => (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-red-600">Payment Cancelled</h1>
        <p className="text-lg mt-4">You can try again later.</p>
        <Link href={'/'}> <button className='rounded-md hover:bg-yellow-600 mt-2 p-2 bg-yellow-500 text-white'>Back to Home</button></Link>
    </div>
);

export default CancelPage;