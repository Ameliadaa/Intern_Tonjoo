<?php

namespace App\Http\Controllers;

use App\Models\Image;  // Pastikan model 'Image' sudah ada
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    // Menampilkan daftar gambar
    public function index()
    {
        $images = Image::all();
        return response()->json($images);
    }

    // Mengunggah gambar baru
    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Simpan gambar
        $path = $request->file('image')->store('images');

        // Simpan data ke database
        $image = new Image();
        $image->path = $path;
        $image->save();

        return response()->json(['message' => 'Image uploaded successfully', 'image' => $image], 201);
    }

    // Menampilkan gambar berdasarkan ID
    public function show($id)
    {
        $image = Image::find($id);
        if (!$image) {
            return response()->json(['message' => 'Image not found'], 404);
        }
        return response()->json($image);
    }

    // Memperbarui gambar
    public function update(Request $request, $id)
    {
        $image = Image::find($id);
        if (!$image) {
            return response()->json(['message' => 'Image not found'], 404);
        }

        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Hapus gambar lama
        Storage::delete($image->path);

        // Simpan gambar baru
        $path = $request->file('image')->store('images');
        $image->path = $path;
        $image->save();

        return response()->json(['message' => 'Image updated successfully', 'image' => $image]);
    }

    // Menghapus gambar
    public function destroy($id)
    {
        $image = Image::find($id);
        if (!$image) {
            return response()->json(['message' => 'Image not found'], 404);
        }

        // Hapus gambar dari storage
        Storage::delete($image->path);

        // Hapus dari database
        $image->delete();

        return response()->json(['message' => 'Image deleted successfully']);
    }
}
