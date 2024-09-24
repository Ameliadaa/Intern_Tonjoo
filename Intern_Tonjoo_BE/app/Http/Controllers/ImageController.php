<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function index()
    {
        $images = Image::all();
        return response()->json($images);
    }

    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Simpan gambar
        $path = $request->file('image')->store('images');

        // Buat URL gambar
        $url = Storage::url($path);

        // Simpan data ke database
        $image = new Image();
        $image->path = $path;
        $image->url = $url;  // Simpan URL gambar
        $image->save();

        return response()->json([
            'message' => 'Image uploaded successfully',
            'image' => $image,
            'url' => $url  // Kirim URL sebagai response
        ], 201);
    }

    public function show($id)
    {
        $image = Image::find($id);
        if (!$image) {
            return response()->json(['message' => 'Image not found'], 404);
        }
        return response()->json($image);
    }

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
        $image->url = Storage::url($path); // Update URL gambar
        $image->save();

        return response()->json([
            'message' => 'Image updated successfully',
            'image' => $image,
            'url' => $image->url // Kirim URL terbaru
        ]);
    }

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
