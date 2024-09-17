import Link from 'next/link';

export default function Pharsed() {
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
              <Link
                className="inline-block py-2 px-4 font-semibold bg-primary text-white"
                href="/"
              >
                Reupload Image in Text
              </Link>
            </li>
            <li className="mr-1">
              <Link
                href="/LinkReupload"
                className="inline-block py-2 px-4 text-blue-500 hover:text-white hover:bg-primary"
              >
                Link Reupload
              </Link>
            </li>
            <li className="mr-1">
              <Link
                href="/FileUpload"
                className="inline-block py-2 px-4 text-blue-500 hover:text-white hover:bg-primary "
              >
                File Upload
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-gray-300 rounded-lg shadow p-8 w-full  mx-auto">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <ul className="flex border-b">
              <li className="mr-1">
                <Link className=" inline-block py-2 px-4 text-blue-500  hover:bg-primary hover:text-white "
                  href="/"> Input Text
                </Link>
               
              </li>
              <li className="mr-1">
                <Link className='bg-primary font-semibold inline-block py-2 px-4 text-white ' href={"/Pharsed"}>
                Pharsed Text
                </Link>
               
              </li>
              <li className="mr-1">
                <a
                  className="inline-block py-2 px-4 hover:bg-primary hover:text-white text-blue-500"
                  href="#"
                >
                  URL List
                </a>
              </li>
            </ul>
          </div>
          <textarea
            className="w-full p-4 border border-gray-300 rounded h-64"
            placeholder="Copy text html atau markdown ke dalam text area ini."
          ></textarea>
        </div>
      </div>
      {/* <Link to=""> */}
      <button className="bg-primary hover:bg-secondary  text-white px-6 py-2 rounded">
        Upload
      </button>
      {/* </Link> */}
    </div>
  );
}
