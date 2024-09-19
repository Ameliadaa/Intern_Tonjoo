<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // Mendapatkan query builder dari model Product
        $product = Product::query();

        // Menambahkan global filter jika ada
        $product = $this->resolveGlobalFilter($product, $request);

        // Menambahkan sorting jika ada
        $product = $this->resolveSort($product, $request);

        // Mengambil jumlah data per halaman
        $pageSize = $this->resolvePageSize($request);

        // Melakukan paginasi dan merespon dalam bentuk collection resource
        $products = $product->paginate($pageSize);
        return ProductResource::collection($products);
    }

    /**
     * Menerapkan filter global pada query.
     */
    private function resolveGlobalFilter($query, Request $request)
    {
        if (!is_null($request->globalFilter) && trim($request->globalFilter) !== '') {
            $filter = '%' . $request->globalFilter . '%';
            $query->where(function ($q) use ($filter) {
                $q->where('name', 'like', $filter)
                    ->orWhere('description', 'like', $filter);
            });
        }

        return $query;
    }

    /**
     * Menerapkan pengurutan berdasarkan kolom yang diberikan.
     */
    private function resolveSort($query, Request $request)
    {
        if (!is_null($request->sortColumn) && in_array($request->sortDirection, ['asc', 'desc'])) {
            $query->orderBy($request->sortColumn, $request->sortDirection);
        }

        return $query;
    }

    /**
     * Mengatur jumlah data per halaman.
     */
    private function resolvePageSize(Request $request)
    {
        $pageSize = $request->pageSize ?? 10; // Default 10 jika pageSize tidak ada
        return min($pageSize, 100); // Membatasi pageSize maksimum 100
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
            'image' => 'nullable|image|max:2048', // Validasi untuk file image
        ]);

        // Jika validasi gagal, kembalikan respon error
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Simpan file gambar jika ada
        $data = $request->all();
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('public/products');
        }

        // Buat produk baru
        $product = Product::create($data);

        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
            'image' => 'nullable|image|max:2048', // Validasi untuk file image
        ]);

        // Jika validasi gagal, kembalikan respon error
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Update data produk
        $data = $request->all();
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('public/products');
        }

        $product->update($data);

        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(null, 204);
    }
}
