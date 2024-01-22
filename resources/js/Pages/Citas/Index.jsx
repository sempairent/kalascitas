import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import Select from '@/Components/Select';
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import WarningButton from '@/Components/WarningButton';
import Swal from 'sweetalert2';

export default function Dashboard(props) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [operation, setOperation] = useState(1);
    const NameInput = useRef();
    const MakeInput = useRef();
    const ModelInput = useRef();
    const FechaInput = useRef();
    //const ColorInput = useRef();
    const { data, setData, delete: destroy, post, put,
        processing, reset, errors } = useForm({
            id: '', name: '', paternal: '', maternal: '', fechacita: ''
        });
    const openModal = (op, id, name, paternal, maternal, fechacita) => {
        setModal(true);
        setOperation(op);
        setData({ name: '', paternal: '', maternal: '' , fechacita:'' });
        if (op === 1) {
            setTitle('Añadir cita');
        }
        else {
            setTitle('Modificar cita');
            setData({ id: id, name: name, paternal: paternal, maternal: maternal, fechacita: fechacita });
        }
    }
    const closeModal = () => {
        setModal(false);
    }
    const save = (e) => {
        e.preventDefault();
        if (operation === 1) {
            post(route('citas.store'), {
                onSuccess: () => { ok('Cita Guardada') },
                onError: () => {
                    if (errors.name) {
                        reset('name');
                        NameInput.current.focus();
                    }
                    if (errors.paternal) {
                        reset('paternal');
                        MakeInput.current.focus();
                    }
                    if (errors.maternal) {
                        reset('maternal');
                        ModelInput.current.focus();
                    }
                    if (errors.fechacita) {
                        reset('fechacita');
                        FechaInput.current.focus();
                    }
                  
                }
            });
        }
        else {
            put(route('citas.update', data.id), {
                onSuccess: () => { ok('Cita modificada') },
                onError: () => {
                    if (errors.name) {
                        reset('name');
                        NameInput.current.focus();
                    }
                    if (errors.paternal) {
                        reset('paternal');
                        MakeInput.current.focus();
                    }
                    if (errors.maternal) {
                        reset('maternal');
                        ModelInput.current.focus();
                    }
                    if (errors.fechacita) {
                        reset('fechacita');
                        FechaInput.current.focus();
                    }
                 
                }
            });
        }
    }
    const ok = (mensaje) => {
        reset();
        closeModal();
        Swal.fire({ title: mensaje, icon: 'success' });
    }
    const eliminar = (id, name) => {
        const alerta = Swal.mixin({ buttonsStyling: true });
        alerta.fire({
            title: 'Seguro de eliminar la cita ' + name,
            text: 'Se perderá la cita',
            icon: 'question', showCancelButton: true,
            confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminar',
            cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelr'
        }).then((result) => {
            if (result.isConfirmed) {
                destroy(route('citas.destroy', id),
                    { onSuccess: () => { ok('Cita eliminada') } });
            }
        });
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        /*header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Citas</h2>}*/
        >
            <Head title="Citas" />
            <br /><br />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className='mb-2 text-xl font-bold text-white text-left ...'>Mis Citas</h5>
                    <br />
                    <div className="bg-white grid v-screen place-items-center">
                        <div className='mt-3 mb-3 flex justify-end'>
                            <PrimaryButton onClick={() => openModal(1)}>
                                <i className='fa-solid fa-plus-circle'></i>
                                 Añadir
                            </PrimaryButton>
                        </div>
                    </div>
                    <div className="bg-white grid v-screen place-items-center py-6">
                        <table className='table-auto border border-gray-400'>
                            <thead>
                                <tr className='bg-gray-100'>
                                    <th className='px-2 py-2'>#</th>
                                    <th className='px-2 py-2'>NOMBRES</th>
                                    <th className='px-2 py-2'>A. Paterno</th>
                                    <th className='px-2 py-2'>A. Materno</th>
                                    <th className='px-2 py-2'>Fecha de Cita</th>
                                    <th className='px-2 py-2'>editar</th>
                                    <th className='px-2 py-2'>eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.citas.map((cita, i) => (
                                    <tr key={cita.id}>
                                        <td className='border border-gray-400 px-2 py-2'>{(i + 1)}</td>
                                        <td className='border border-gray-400 px-2 py-2'>{cita.name}</td>
                                        <td className='border border-gray-400 px-2 py-2'>{cita.paternal}</td>
                                        <td className='border border-gray-400 px-2 py-2'>{cita.maternal}</td>
                                        <td className='border border-gray-400 px-2 py-2'>{cita.fechacita}</td>
                                        <td className='border border-gray-400 px-2 py-2'>
                                            <WarningButton
                                                onClick={() => openModal(2, cita.id, cita.name, cita.paternal, cita.maternal, cita.fechacita)}>
                                                <i className='fa-solid fa-edit'></i>
                                            </WarningButton>
                                        </td>
                                        <td className='border border-gray-400 px-2 py-2'>
                                            <DangerButton
                                                onClick={() => eliminar(cita.id, cita.name, cita.paternal)}>
                                                <i className='fa-solid fa-trash'></i>
                                            </DangerButton>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Modal show={modal} onClose={closeModal}>
                        <h2 className="p-3 text-lg font-medium text-gray-900">
                            {title}
                        </h2>
                        <form onSubmit={save} className="p-6">
                            <div className='mt-6'>
                                <InputLabel for="name" value="Nombres"></InputLabel>
                                <TextInput id="name" name="name" ref={NameInput}
                                    value={data.name} required='required'
                                    handleChange={(e) => setData('name', e.target.value)}
                                    className="mt-1 block w-3/4" isFocused></TextInput>
                                <InputError message={errors.name} classNamemt-2></InputError>
                            </div>
                            <div className='mt-6'>
                                <InputLabel for="paternal" value="Apellido Paterno"></InputLabel>
                                <TextInput id="paternal" name="paternal" ref={MakeInput}
                                    value={data.paternal} required='required'
                                    handleChange={(e) => setData('paternal', e.target.value)}
                                    className="mt-1 block w-3/4"></TextInput>
                                <InputError message={errors.paternal} classNamemt-2></InputError>
                            </div>
                            <div className='mt-6'>
                                <InputLabel for="maternal" value="Apellido Materno"></InputLabel>
                                <TextInput id="maternal" name="maternal" ref={ModelInput}
                                    value={data.maternal} required='required'
                                    handleChange={(e) => setData('maternal', e.target.value)}
                                    className="mt-1 block w-3/4"></TextInput>
                                <InputError message={errors.maternal} classNamemt-2></InputError>
                            </div>

                            <div className='mt-6'>
                                <InputLabel for="fechacita" value="Fecha de la Cita"></InputLabel>
                                <TextInput type="date" id="fechacita" name="fechacita" ref={FechaInput}
                                    value={data.fechacita} required='required'
                                    handleChange={(e) => setData('fechacita', e.target.value)}
                                    className="mt-1 block w-3/4"></TextInput>
                                <InputError message={errors.fechacita} className="mt-2"></InputError>
                            </div>



                            <div className='mt-6'>
                                <PrimaryButton processing={processing} className='mt-2'>
                                    <i className='fa-solid fa-save'></i>Guardar
                                </PrimaryButton>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
