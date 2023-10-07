<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $category = new Category();
        $category->name = $request->input('name');
        return $category->save();
    }


    public function index()
    {
        return Category::latest()->get();
    }


    public function show($id)
    {
        return Category::find($id);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $category = Category::find($id);

        $category->name = $request->input('name');
        return $category->save();
    }

    public function delete($id)
    {
        $category = Category::find($id);
        return $category->delete();
    }
}
