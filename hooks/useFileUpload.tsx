import { Database } from "@/lib/supabase.types";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ChangeEvent, FormEvent, useState } from "react";

export const useFileUpload = (kindOfWork: "photography" | "mixed-art") => {
  const [file, setFile] = useState<File | null>(null);
  const supabase = createClientComponentClient<Database>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file && kindOfWork) {
      const { data, error } = await supabase.storage.from(kindOfWork).upload(file.name, file, {
        cacheControl: "3600",
        upsert: false,
      });
      if (data) {
        const { data } = supabase.storage.from(kindOfWork).getPublicUrl(file.name);
        if (data.publicUrl) {
          const { data: response, error } = await supabase.from(kindOfWork).insert({ img_url: data.publicUrl }).select();
          if (response) {
            console.log(response);
          }
          if (error) {
            console.error(error);
          }
        }
      }
      if (error) {
        console.error(error);
      }
    }
  };

  const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  return { handleSubmit, handleFileSelected };
};
