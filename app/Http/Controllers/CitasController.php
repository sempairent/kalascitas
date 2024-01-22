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
           /* 'color' => 'required|max:10'*/
        ]);
        $car = new Citas($request->input());
        $car->save();
        return redirect('citas');
    }

    public function update(Request $request, $id)
    {
        $car = Citas::find($id);
        $car->fill($request->input())->saveOrFail();
        return redirect('citas');
    }

    public function destroy($id)
    {
        $car = Citas::find($id);
        $car->delete();
        return redirect('citas');
    }
}
