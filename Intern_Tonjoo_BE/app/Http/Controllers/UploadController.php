<?php

namespace App\Http\Controllers;
use App\Models\Upload;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:jpg,png|max:2048',
        ]);

        $file = $request->file('file');
        $fileName = time() . '_' . $file->getClientOriginalName();
        $filePath = $file->storeAs('uploads', $fileName, 'public');

        Upload::create([
            'file_name' => $fileName,
            'file_path' => '/storage/' . $filePath,
            'file_size' => $file->getSize(),
            'file_type' => $file->getClientOriginalExtension(),
        ]);

        return response()->json(['message' => 'File uploaded successfully!']);
    }
}
