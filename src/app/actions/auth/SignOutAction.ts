"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signOut() {
  const cookieStore = await cookies();

  cookieStore.delete("CHICA_USER_ACCESS_TOKEN");
  cookieStore.delete("CHICA_USER_REFRESH_TOKEN");

  throw redirect("/signin");
}
