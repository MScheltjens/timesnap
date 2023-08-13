'use client';

import { useFileUpload } from '@/hooks';

export const UploadForm = () => {
    const { handleSubmit, handleFileSelected } = useFileUpload('photography');

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label htmlFor="image">Select Image</label>
            <input type="file" name="image" onChange={handleFileSelected} />
            <button type="submit">Upload image</button>
        </form>
    );
};
