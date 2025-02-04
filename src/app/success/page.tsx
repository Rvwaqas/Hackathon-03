import Link from 'next/link'

const SuccessPage: React.FC = () => (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-green-600">Payment Successful!</h1>
        <p className="text-lg mt-4">Thank you for your purchase.</p>
       <Link href={'/'}> <button className='rounded-md hover:bg-yellow-600 mt-2 p-2 bg-yellow-500 text-white'>Back to Home</button></Link>
    </div>
);

export default SuccessPage;