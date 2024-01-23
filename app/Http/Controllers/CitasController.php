<?php

namespace App\Http\Controllers;

use App\Models\Citas;
use Illuminate\Http\Request;
use Inertia\Inertia;
class CitasController extends Controller
{
    public function index()
    {
        $citas = Citas::all();
        return Inertia::render('Citas/Index',['citas'=>$citas]);
    }

    public function store(Request $request)
    {
        $request-> validate([
            
            'name' => 'required|max:50',
            'paternal' => 'required|max:50',
            'maternal' => 'required|max:100',
            'fechacita' => 'required|date',
            'horacita' => 'required|date_format:H:i', 
           
        ]);
        $cita = new Citas($request->input());
        $cita->save();
        return redirect('citas');
    }

    public function update(Request $request, $id)
    {
        $cita = Citas::find($id);
        $cita->fill($request->input())->saveOrFail();
        return redirect('citas');
    }

    public function destroy($id)
    {
        $cita = Citas::find($id);
        $cita->delete();
        return redirect('citas');
    }
}
