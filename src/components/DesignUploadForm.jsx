import React, { useState } from 'react';
import { UploadCloud, X } from 'lucide-react';

const DesignUploadFormWithModal = () => {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreviewURL(URL.createObjectURL(uploadedFile));
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewURL('');
  };

  const handleSubmit = () => {
    const dataToSend = {
      fileName: file?.name || '',
      description: description,
      fileData: file,
    };
    console.log("📦 Data to send to backend:", dataToSend);
    setShowModal(true);
  };

  return (
    <div className="bg-gray-50 pt-10 px-4 pb-4 min-h-[80vh]">
      <h1 className="text-center text-red-600 text-3xl font-bold tracking-wider mb-8">
        MALE FASHION
      </h1>

      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Upload Design</h2>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 relative group mb-6 bg-gray-100 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
          {previewURL ? (
            <div className="relative w-full h-64 flex items-center justify-center">
              <img
                src={previewURL}
                alt="Preview"
                className="max-h-full max-w-full rounded shadow"
              />
              <button
                onClick={handleRemoveFile}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
              >
                <X size={18} className="text-red-500" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2 text-gray-500">
              <UploadCloud size={48} className="text-purple-600" />
              <p className="text-sm">Click to upload your design</p>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="absolute top-0 left-0 w-full h-full opacity-0"
          />
        </div>

        {/* File name input */}
        {file && (
          <div className="mb-4">
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-50"
              value={file.name}
              readOnly
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Design Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded px-4 py-3 resize-none focus:ring-2 focus:ring-purple-300"
            rows="4"
            placeholder="Describe your design..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg text-lg font-medium shadow transition-transform hover:scale-105"
        >
          Add To Cart
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              <X size={22} />
            </button>
            <h3 className="text-xl font-semibold mb-4">Preview</h3>
            {previewURL && (
              <img
                src={previewURL}
                alt="Uploaded Preview"
                className="w-full h-64 object-contain border mb-4 rounded"
              />
            )}
            <p className="text-gray-700 whitespace-pre-wrap">{description || "(No description provided)"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignUploadFormWithModal;
