<?php

namespace App\Http\Controllers;

use App\Models\products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = products::all();
        return response()->json($products, 200);;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'amount' => 'required',
            'image'=>'required'
        ]);

        products::create($request->post());

        return response()->json([
            'message' => 'New item added successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = products::find($id);
        return response()->json([
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, products $products)
    {
        $request->validate([
            'product_name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'amount' => 'required',
            'image'=>'required'
        ]);

        $products->update($request->post());

        return response()->json([
            'message' => 'Item updated successfully'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
       if(products::where('id',$id)->exists()){
        $product = products::find($id);
        $product->delete();

         return response()->json(["message"=> "records delete."],202);
       }else{
         return response()->json(["message" =>"book not found."],404);
       }
    }
}
