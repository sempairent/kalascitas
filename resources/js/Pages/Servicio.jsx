import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Servicio(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        /*header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}*/
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h5 className='text-lg font-sans font-semibold'>Bienvenido a Servicios</h5>
                        </div>

                        <div className='flex space-x-4'>
                            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Servicio de Emergencias y Urgencias</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">las kalas</p>
                                </div>
                            </a>


                            <a href="#" class="flex w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Servicio de Hospitalización</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">las kalas</p>
                                </div>
                            </a>
                        </div>
                        <br />
                        <div className='flex space-x-4'>
                            <a href="#" class="flex w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Unidades de apoyo al Diagnostico</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">las kalas</p>
                                </div>
                            </a>


                            <a href="#" class="flex w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Centro Quirúrgico  </h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">las kalas</p>
                                </div>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
