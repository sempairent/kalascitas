import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Pasillo from '@/Components/pasillo.jpg';

export default function Welcome(props) {
    const containerStyle = {
        backgroundImage: `url(${Pasillo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <>
            <Head title="Bienvenido" />
            <div
                style={containerStyle}
            >
                <div className="relative flex items-top justify-center min-h-screen  sm:items-center sm:pt-0">
                    <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                        {props.auth.user ? (
                            <Link href={route('dashboard')} className="text-sm text-black dark:text-black underline">
                                INGRESAR
                            </Link>
                        ) : (
                            <>
                            
                                <Link href={route('login')} className="text-sm text-black dark:text-black underline">
                                    <button className='h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow '>
                                        Iniciar Sesión
                                    </button>
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                                >
                                    <button className='h-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow '>
                                        Crear Cuenta
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>


                    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <br /><br /><br /><br />
                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />

                        <div className="mt-8 overflow-hidden shadow sm:rounded-lg backdrop-brightness-50 bg-black/30 ...">
                            <div className="grid grid-cols-1 md:grid-cols-1 px-10">
                                <div className="p-10">
                                    <div className="flex items-center ">


                                        <div className="ml-5 text-lg leading-7 font-semibold text-white ">
                                            Horario de atención
                                        </div>
                                    </div>

                                    <div className="ml-6">
                                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">



                                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                                                    <tr>
                                                        
                                                    </tr>
                                                </thead>
                                                <br />
                                                <tbody>
                                                    <tr className="border-b border-gray-200 dark:border-gray-700 ">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white bg-black/30">
                                                            Lunes
                                                        </th>
                                                        <td className="px-6 py-4">
                                                        07:00 - 21:00
                                                        </td>


                                                    </tr>
                                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white bg-black/30">
                                                            Martes
                                                        </th>
                                                        <td className="px-6 py-4">
                                                        07:00 - 21:00
                                                        </td>


                                                    </tr>
                                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white bg-black/30">
                                                            Miercoles
                                                        </th>
                                                        <td className="px-6 py-4">
                                                        07:00 - 21:00
                                                        </td>


                                                    </tr>
                                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-black/30">
                                                            Jueves
                                                        </th>
                                                        <td className="px-6 py-4">
                                                        07:00 - 21:00   
                                                        </td>


                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white bg-black/30">
                                                            viernes
                                                        </th>
                                                        <td className="px-6 py-4">
                                                        07:00 - 21:00
                                                        </td>


                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white bg-black/30">
                                                            Sabado
                                                        </th>
                                                        <td className="px-6 py-4">
                                                        08:00 - 20:00
                                                        </td>


                                                    </tr>
                                                    <tr>
                                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white bg-black/30">
                                                            Domingo
                                                        </th>
                                                        <td className="px-6 py-4">
                                                        08:00 - 20:00
                                                        </td>


                                                    </tr>
                                                </tbody>
                                            </table>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
