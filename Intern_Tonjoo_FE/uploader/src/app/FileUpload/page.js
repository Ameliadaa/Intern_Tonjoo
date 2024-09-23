import Link from "next/link";
import Navigasi from "@/component/Navigasi";
import Navbar from "@/component/Navbar";
export default function FileUpload() {
  return (
    <>
    <Navbar/>
    <div className="py-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Image Re-Uploader</h2>
      <p className="mb-6 text-center font-semibold text-primary">
        Reupload any image into our private server
      </p>
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
        <div className="flex flex-col mb-6">
          <div className="flex justify-around mb-4"></div>
          <Navigasi />
          <div className="bg-gray-300 rounded-lg shadow p-8 w-full  mx-auto">
            <div className="col-span-full">
              <label
                htmlFor="url"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Input URL
              </label>
              <div className="mt-2">
                <input
                  id="Upload_File"
                  name="UploadFile"
                  type="File"
                  autoComplete="UploadFile"
                  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm placeholder:text-gray-400 bg-white sm:text-sm sm:leading-6"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-secondary  text-white px-6 py-2 rounded"
        >
          Upload
        </button>
      </div>
    </div>
    </>
  );
}
