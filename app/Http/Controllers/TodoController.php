<?php

namespace App\Http\Controllers;

use App\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function index(){
        return Todo::all();
    }
    public function show($id){
        return Todo::find($id);
    }
    public function store(Request $request){
        return Todo::create($request->all());
    }
    public function update(Request $request, $id){
//        dd($id);
        $todo = Todo::findOrFail($id);
        $todo->update($request->all());
        return $todo;
    }
    public function delete(Request $request, $id){
//        dd($id);
        $todo = Todo::findOrFail($id);
        $todo->delete();
        return 204;
    }
    public function logout()
    {
        Auth::guard('admin')->logout();
        session()->invalidate();
        return redirect()->route('login');
    }
}
