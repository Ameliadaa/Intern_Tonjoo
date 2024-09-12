export default function Home() {
  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Image Re-Uploader</h2>
      <p className="text-gray-600 mb-6 text-center">
        Reupload any image into our private server
      </p>

      <div className="flex flex-col mb-6">
        <div className="flex justify-around mb-4">         
        </div>
        <textarea
          className="w-full p-4 border border-gray-300 rounded h-64"
          placeholder="Copy text html atau markdown ke dalam text area ini, misalnya 
          # Personal Project Management
          Untuk dapat bekerja dengan efektif kita harus dapat melakukan organisasi atau pengaturan terhadap tugas yang kita miliki. Dalam artikel ini akan dijelaskan beberapa tools dan metoda yang wajib dikuasasi untuk dapat melakukan pengaturan tugas dengan baik.
"
        ></textarea>
      </div>

      <button className="bg-primary text-white px-6 py-2 rounded">
        Upload
      </button>
    </div>
  );
}
