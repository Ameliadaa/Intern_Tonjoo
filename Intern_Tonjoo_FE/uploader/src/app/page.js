export default function Home() {
  return (
    <div className="bg-white rounded-lg shadow p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">Image Re-Uploader</h2>
      <p className="text-green-900 mb-6 text-center font-semibold">
        Reupload any image into our private server
      </p>

      <div className="flex flex-col mb-6">
        <div className="flex justify-around mb-4"></div>
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <ul className="flex border-b">
            <li className="mr-1">
              <a
                className="bg-white inline-block py-2 px-4 text-blue-500 font-semibold"
                href="#"
              >
                Reupload Image in Text
              </a>
            </li>
            <li className="mr-1">
              <a
                className="inline-block py-2 px-4 text-blue-500 hover:text-blue-800"
                href="#"
              >
                Link Reupload
              </a>
            </li>
            <li className="mr-1">
              <a
                className="inline-block py-2 px-4 text-blue-500 hover:text-blue-800"
                href="#"
              >
                File Upload
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-gray-300 rounded-lg shadow p-8 w-full  mx-auto">
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <ul className="flex border-b">
            <li className="mr-1">
              <a className="bg-white inline-block py-2 px-4 text-blue-500 font-semibold" href="#">Input Text</a>
            </li>
            <li className="mr-1">
              <a className="inline-block py-2 px-4 text-blue-500 hover:text-blue-800" href="#">Pharsed Text</a>
            </li>
            <li className="mr-1">
              <a className="inline-block py-2 px-4 text-blue-500 hover:text-blue-800" href="#">URL List</a>
            </li>
          </ul>
        </div>
        <textarea
          className="w-full p-4 border border-gray-300 rounded h-64"
          placeholder="Copy text html atau markdown ke dalam text area ini, misalnya 
          # Personal Project Management
          Untuk dapat bekerja dengan efektif kita harus dapat melakukan organisasi atau pengaturan terhadap tugas yang kita miliki. Dalam artikel ini akan dijelaskan beberapa tools dan metoda yang wajib dikuasasi untuk dapat melakukan pengaturan tugas dengan baik.
"
        ></textarea>

        </div>

        
      </div>
      {/* <Link to=""> */}
      <button className="bg-primary text-white px-6 py-2 rounded">
        Upload
      </button>
      {/* </Link> */}
    </div>
  );
}
