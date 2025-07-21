"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signOut() {
  const cookieStore = await cookies();

  cookieStore.delete("CHICA_ADMIN_ACCESS_TOKEN");
  cookieStore.delete("CHICA_ADMIN_REFRESH_TOKEN");

  throw redirect("/signin");
}
