import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export const useFileUpload = (kindOfWork: "photography" | "mixed-art" = "photography") => {
  const [file, setFile] = useState<File | null>(null);

  const supabase = createClientComponentClient();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file && kindOfWork) {
      const { data, error } = await supabase.storage.from(kindOfWork).upload(file.name, file, {
        cacheControl: "3600",
        upsert: false,
      });
      console.log(data, error);
      if (data) {
        // upload to database table 'kindaWork
      }
    }
  };

  const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  return { handleSubmit, handleFileSelected };
};
