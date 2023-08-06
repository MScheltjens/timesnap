import { Database } from "@/lib/supabase.types";

declare global {
  type TDBImg = Database["public"]["Tables"]["mixed-art"]["Row"] | Database["public"]["Tables"]["photography"]["Row"];

  type TDBError = {
    code: string;
    details: null;
    hint: null;
    message: string;
  };
}
